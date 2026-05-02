#!/usr/bin/env bash
#
# build-i18n.sh — Build skeletonic.io for every supported locale.
#
# English (en) is the canonical source: it lives at content/*.md and
# builds to docs/ root, preserving every existing public URL.
#
# Each non-English locale lives at content/<lang>/*.md and builds to
# docs/<lang>/, with the per-locale HTML referencing the root-level
# (English-fingerprinted) static assets so the build does not duplicate
# CSS/JS/images per locale.
#
# A locale whose content/<lang>/ directory does not yet exist is
# silently skipped, so the script stays usable while translations are
# in flight.
#
# Usage:
#   scripts/build-i18n.sh             # build everything
#   scripts/build-i18n.sh fr de       # build only fr and de (plus en)
#   scripts/build-i18n.sh --no-en fr  # build only fr (skip en rebuild)
#
# Requires: ssg (shokunin) >= 0.0.34 on PATH.

set -euo pipefail

# Resolve repo root (one directory above this script).
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

# Canonical locale list — must mirror the lang switcher in
# templates/tera/base.html. English is always first.
ALL_LOCALES=(
  en
  ar bn cs de es fil fr ha he hi id it ja ko nl pl pt-br ro ru sv th tr uk vi yo zh-hans zh-hant
)

# Files inside each locale build that duplicate the English root and
# can be safely removed to keep the deployed tree compact.
DUPLICATE_DIRS=(css js images)
DUPLICATE_FILES=(CNAME security.txt robots.txt)

# Parse args.
BUILD_EN=1
REQUESTED=()
for arg in "$@"; do
  case "$arg" in
    --no-en) BUILD_EN=0 ;;
    --help|-h)
      sed -n '3,30p' "$0"
      exit 0
      ;;
    *) REQUESTED+=("$arg") ;;
  esac
done

# If the user specified locales, restrict to those (plus en unless --no-en).
if [ "${#REQUESTED[@]}" -gt 0 ]; then
  LOCALES=("${REQUESTED[@]}")
else
  LOCALES=("${ALL_LOCALES[@]:1}")  # all non-English
fi

# ─── ssg sanity check ────────────────────────────────────────────────
if ! command -v ssg >/dev/null 2>&1; then
  echo "error: ssg (shokunin) not found on PATH" >&2
  exit 1
fi

build_locale() {
  local lang="$1"
  local content_dir="content/$lang"
  local out_dir="docs/$lang"

  if [ ! -d "$content_dir" ]; then
    echo "  ↳ skipping $lang (no $content_dir/ yet)"
    return 0
  fi

  echo ">>> Building $lang → $out_dir/"

  # Shokunin's --config flag causes an early return that skips --output
  # and --content CLI overrides (bug in SsgConfig::from_matches).
  # Work around by generating a temporary config that points at the
  # locale's content directory and output directory.
  local tmp_config
  tmp_config="$(mktemp "${TMPDIR:-/tmp}/ssg-i18n-XXXXXX.toml")"
  sed -e "s|^content_dir.*|content_dir = \"$content_dir\"|" \
      -e "s|^output_dir.*|output_dir  = \"$out_dir\"|" \
      config.toml > "$tmp_config"

  ssg --config "$tmp_config" >/dev/null &
  local ssg_pid=$!
  for _i in $(seq 1 60); do
    if [ -d "$out_dir" ] && ls "$out_dir"/*.html >/dev/null 2>&1; then break; fi
    sleep 1
  done
  sleep 2
  kill "$ssg_pid" 2>/dev/null || true
  wait "$ssg_pid" 2>/dev/null || true
  rm -f "$tmp_config"

  # Strip duplicates that the per-locale build re-creates but which
  # already live at docs/ root.
  local dir
  for dir in "${DUPLICATE_DIRS[@]}"; do
    rm -rf "$out_dir/$dir"
  done
  local f
  for f in "${DUPLICATE_FILES[@]}"; do
    rm -f "$out_dir/$f"
  done
}

# ─── Phase 1: English (root) ─────────────────────────────────────────
if [ "$BUILD_EN" -eq 1 ]; then
  echo ">>> Building en → docs/"
  # ssg v0.0.34 auto-starts a dev server after building; run it in the
  # background and kill once docs/ output is produced.
  ssg --config config.toml --content content --output docs >/dev/null &
  SSG_PID=$!
  # Wait for the build to produce output (poll for fingerprinted CSS).
  for _i in $(seq 1 60); do
    if ls docs/css/*.css >/dev/null 2>&1; then break; fi
    sleep 1
  done
  # SSG runs the tera_plugin in `after_compile`, AFTER css fingerprinting
  # but BEFORE it enters the dev-server loop. Tera reads each
  # docs/**/index.html fragment and rewrites it through templates/tera/
  # base.html so it ends up as a full <!doctype html>…</html> document.
  # That second pass takes a noticeable amount of time on first build
  # (no plugin cache) — wait long enough for it to finish before
  # killing, otherwise we ship bare content fragments.
  sleep 30
  kill "$SSG_PID" 2>/dev/null || true
  wait "$SSG_PID" 2>/dev/null || true
  # Prevent GitHub Pages from running Jekyll on the output.
  touch docs/.nojekyll
  # Copy static assets — shokunin v0.0.34 doesn't auto-copy static/
  # to docs/, only main.js and sw.js. Everything else (vendored CSS,
  # site JS, images, manifest) lives in static/ and we mirror it
  # explicitly so the rendered HTML's /css/, /js/, /images/ links
  # actually resolve.
  for d in css js images; do
    if [ -d "static/$d" ]; then
      mkdir -p "docs/$d"
      cp -R "static/$d/." "docs/$d/"
    fi
  done
  for f in CNAME robots.txt manifest.webmanifest; do
    [ -f "static/$f" ] && cp "static/$f" "docs/$f"
  done

  # Strip Shokunin v0.0.34's bogus integrity attributes from <link>
  # tags in rendered HTML. The SSG's `assets::sha256_hex` is actually
  # FNV-1a hex, not a real SHA-256, so the emitted
  # `integrity="sha256-<32 hex chars>"` is rejected by every modern
  # browser and the resource is blocked. Until we move to an SSG
  # version that emits valid SRI, we strip the attribute (and the
  # paired crossorigin) so the same-origin assets load.
  find docs -type f -name '*.html' -print0 \
    | xargs -0 perl -i -pe 's/ integrity="sha256-[0-9a-f]{32}"//g; s/ crossorigin="anonymous"(?=>)//g'

  # Re-quote the inline `style=background-color:#2b303b` syntect
  # emits on its inner <pre>. The SSG's HTML minifier strips the
  # double-quotes, which is technically valid HTML5 but axe-core
  # (and Lighthouse, which uses axe-core) can't resolve unquoted
  # inline backgrounds, so it flags every coloured token span
  # inside as a WCAG 1.4.3 contrast failure. Restore the quotes.
  #
  # Then darken syntect's default `#2b303b` surface to `#1a1d22`
  # (oklch ≈ 0.17 vs 0.24) so the lightest token colour in the
  # default theme — `#bf616a` on the page — clears WCAG 2.2 AA
  # 4.5:1 against the background instead of stalling at 3.23:1.
  find docs -type f -name '*.html' -print0 \
    | xargs -0 perl -i -pe 's{style=background-color:(#[0-9a-fA-F]{3,8})}{style="background-color:$1"}g; s{background-color:#2b303b}{background-color:#0d1117}g; s{color:#65737e}{color:#7d8a96}g'

  # Syntect-emitted `<pre style="background-color:#0d1117">` blocks
  # have horizontal overflow on long lines; axe-core flags these as
  # `scrollable-region-focusable` (WCAG 2.2 — keyboard-only users
  # cannot scroll the region). Add `tabindex="0"` so the pre itself
  # is focusable and the arrow keys scroll it. Idempotent: skip when
  # the attribute is already present.
  find docs -type f -name '*.html' -print0 \
    | xargs -0 perl -i -pe 's{<pre(?![^>]*tabindex)(\s+style="background-color:#[0-9a-fA-F]{3,8};?")}{<pre tabindex="0"$1}g'

  # The SSG ships its own /highlight.<hash>.css with a LIGHT GitHub
  # theme (background: #f6f8fa) and that <link> sits AFTER our
  # chrome.css in the rendered <head>, so it wins the cascade and
  # the syntect dark token spans land on a light surface (failing
  # contrast). Replace its background rules with our dark theme so
  # `pre.highlight` matches the inner syntect `<pre style="…">`.
  if ls docs/highlight.*.css >/dev/null 2>&1; then
    perl -i -pe 's{background: ?#f6f8fa}{background: #0d1117}g; s{background: ?#161b22}{background: #0d1117}g; s{border:[^;]+#d0d7de}{border: 1px solid #30363d}g' docs/highlight.*.css
  fi

  # Strip the SSG's auto-injected live-reload <script> block from
  # production output. It opens a WebSocket to ws://localhost:35729
  # which violates `connect-src 'self'` on every deployed page and
  # logs a console error that costs eight Lighthouse "best
  # practices" points. We only need it when running ssg in --watch
  # mode, never in committed docs/.
  find docs -type f -name '*.html' -print0 \
    | xargs -0 perl -i -0pe 's{<!-- SSG Live-Reload -->\s*<script data-ssg-livereload>.*?</script>}{}gs'

  # Inline static/css/critical.css into every <head> so above-the-fold
  # renders in the same paint as the HTML. The async-load pattern in
  # base.html (media="print" onload="this.media='all'") then fetches
  # the full chrome + skeletonic bundles without blocking first paint.
  if [ -f static/css/critical.css ]; then
    # Minify the critical block on the fly so we don't ship 4 KB of
    # whitespace × 459 pages.
    if command -v npx >/dev/null 2>&1; then
      npx -y --silent csso-cli static/css/critical.css --output /tmp/critical.min.css 2>/dev/null || cp static/css/critical.css /tmp/critical.min.css
    else
      cp static/css/critical.css /tmp/critical.min.css
    fi
    CRITICAL_CSS=$(cat /tmp/critical.min.css)
    # Drop a literal `<!-- @@CRITICAL_CSS@@ -->` placeholder in
    # base.html with `<style>…</style>` containing the file's bytes.
    # Use python so the substitution is robust against shell quoting
    # and special characters inside the CSS.
    PYTHONIOENCODING=utf-8 python3 - <<'PY'
import os, glob, pathlib
critical = pathlib.Path('/tmp/critical.min.css').read_text(encoding='utf-8').strip()
inline = f'<style>{critical}</style>'
needle = '<!-- @@CRITICAL_CSS@@ -->'
for path in glob.glob('docs/**/*.html', recursive=True):
    p = pathlib.Path(path)
    text = p.read_text(encoding='utf-8')
    if needle in text:
        p.write_text(text.replace(needle, inline), encoding='utf-8')
PY
  fi

  # Minify chrome.css and main.js so they ship under the same
  # density as the upstream Skeletonic bundle. Saves ≈ 15 KB on
  # chrome.css and ≈ 20 KB on main.js. Skipped silently if the
  # tools aren't on PATH (e.g. in a hot dev rebuild).
  if command -v npx >/dev/null 2>&1; then
    if [ -f docs/css/chrome.css ]; then
      npx -y --silent csso-cli docs/css/chrome.css --output docs/css/chrome.css 2>/dev/null || true
    fi
    if [ -f docs/js/main.js ]; then
      npx -y --silent terser docs/js/main.js --compress --mangle --output docs/js/main.js 2>/dev/null || true
    fi
  fi
fi

# ─── Phase 2: every requested non-English locale ─────────────────────
for lang in "${LOCALES[@]}"; do
  [ "$lang" = "en" ] && continue
  build_locale "$lang"
done

# ─── Phase 3: rewrite asset references to match English fingerprints ──
#
# Locale builds don't get StaticAssetsPlugin (it resolves
# content_dir/../static which is wrong for content/<lang>/) so the
# fingerprint plugin can't rewrite CSS/JS hrefs.  We extract the
# fingerprint mapping from the English root's actual filenames and
# sed-replace in every locale's HTML files.
rewrite_fingerprints() {
  # Build sed expressions from the English root's actual filenames.
  local sed_args=()
  local f base fingerprinted dir_prefix
  for f in docs/css/*.css docs/js/*.js; do
    [ -f "$f" ] || continue
    fingerprinted="$(basename "$f")"
    # Reverse the fingerprint: name.HASH.ext → name.ext
    # Fingerprint pattern: <stem>.<8-hex>.ext
    base="$(echo "$fingerprinted" | sed -E 's/\.[0-9a-f]{8}(\.[^.]+)$/\1/')"
    [ "$base" = "$fingerprinted" ] && continue  # no hash found, skip
    dir_prefix="$(dirname "$f" | sed 's|^docs||')"
    sed_args+=(-e "s|${dir_prefix}/${base}|${dir_prefix}/${fingerprinted}|g")
  done

  [ "${#sed_args[@]}" -eq 0 ] && return 0

  echo ">>> Rewriting fingerprinted asset refs in locale HTML…"
  local lang
  for lang in "${LOCALES[@]}"; do
    [ "$lang" = "en" ] && continue
    [ -d "docs/$lang" ] || continue
    find "docs/$lang" -name '*.html' -exec sed -i "${sed_args[@]}" {} +
  done
}

rewrite_fingerprints

echo
echo ">>> i18n build complete."
echo "    en   → docs/"
for lang in "${LOCALES[@]}"; do
  [ "$lang" = "en" ] && continue
  if [ -d "docs/$lang" ]; then
    pages=$(find "docs/$lang" -name 'index.html' | wc -l)
    printf '    %-7s → docs/%s/ (%d pages)\n' "$lang" "$lang" "$pages"
  fi
done
