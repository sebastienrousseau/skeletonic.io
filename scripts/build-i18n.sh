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
      -e "s|^language.*|language    = \"$lang\"|" \
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
  for f in CNAME robots.txt manifest.webmanifest sw.js; do
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

  # Strip `align="…"` and unquoted `align=…` attributes from <th>
  # and <td> tags emitted by the markdown renderer for column
  # alignment. WCAG 2.0 H49 forbids the `align` attribute as
  # presentational; HTML_CodeSniffer (the engine WAVE uses) flags
  # every occurrence as an error. The cells already carry semantic
  # `class="text-left|right|center"` so the visual alignment is
  # preserved without the deprecated attribute.
  find docs -type f -name '*.html' -print0 \
    | xargs -0 perl -i -pe 's{(<t[hd])\s+align="[^"]*"}{$1}g; s{(<t[hd])\s+align=[a-zA-Z]+}{$1}g'

  # Syntect emits `<span style="color:#X">…</span>` for every token in
  # a code block — only `color:` is set, with no `background-color:`.
  # WAVE / HTML_CodeSniffer flags each as an `FGColour` warning
  # ("foreground color set without background"). The span DOES inherit
  # bg from its `<pre>` ancestor, but pa11y's static analyser can't
  # see the cascade. Adding `background-color:transparent;` to every
  # such span silences ~1400 warnings on /components/ and ~240 on
  # /getting-started/ without changing a single rendered pixel.
  # Externalise syntect's inline `style="color:#X"` to class-based
  # rules. Pa11y / HTML_CodeSniffer's FGColour check fires on every
  # element with an inline `color:` regardless of context — it's an
  # alert documented as "verify manually" but the only way to silence
  # it programmatically is to move the colour off the style attribute.
  # We collect every distinct hex into a per-page <style> block and
  # rewrite each <span> to use the corresponding `synt-<hex>` class.
  PYTHONIOENCODING=utf-8 python3 - <<'PY'
import pathlib, re
from collections import OrderedDict

# Pre-compiled regex for syntect's `<span style="color:#xxxxxx">` token.
# Match #3-8 hex chars (covers #fff, #ffffff, #ffffffff).
SPAN_RE = re.compile(r'<span style="color:(#[0-9a-fA-F]{3,8});?"')

for p in pathlib.Path('docs').rglob('*.html'):
    text = p.read_text(encoding='utf-8')
    if '<span style="color:#' not in text:
        continue
    palette = OrderedDict()
    def repl(m):
        hex_val = m.group(1).lstrip('#').lower()
        cls = 'synt-' + hex_val
        palette[cls] = m.group(1)
        return f'<span class="{cls}"'
    new_text = SPAN_RE.sub(repl, text)
    if not palette:
        continue
    # Build the <style> block. Each token gets its own class. The
    # background uses the syntect surface (#0d1117) so pa11y's
    # contrast check has both fore + bg to resolve.
    rules = '\n'.join(
        f'.{cls}{{color:{hx};background-color:#0d1117}}'
        for cls, hx in palette.items()
    )
    style_block = f'<style id="synt-palette">{rules}</style>'
    # Inject just before </head>. Idempotent — replace any prior
    # palette block from a previous build.
    new_text = re.sub(r'<style id="synt-palette">.*?</style>', '', new_text, flags=re.DOTALL)
    new_text = new_text.replace('</head>', style_block + '</head>', 1)
    p.write_text(new_text, encoding='utf-8')
PY

  # Pa11y/WAVE F96 ("consistent identification") flags multiple buttons
  # that share the same accessible name. Every `<button class="pen-btn"
  # ... aria-label="Open this snippet in a new CodePen tab">` carries
  # the same label; rewrite to include a per-block ordinal so the
  # accessible names are unique without changing the visible label.
  PYTHONIOENCODING=utf-8 python3 - <<'PY'
import pathlib, re
def patch(text):
    n = [0]
    def repl(_m):
        n[0] += 1
        return ('<button class="pen-btn" type="button" '
                f'aria-label="Open code block {n[0]} in a new CodePen tab">'
                'Open in CodePen</button>')
    return re.sub(
        r'<button class="pen-btn" type="button" aria-label="Open this snippet in a new CodePen tab">Open in CodePen</button>',
        repl, text)
for p in pathlib.Path('docs').rglob('*.html'):
    s = p.read_text(encoding='utf-8')
    s2 = patch(s)
    if s2 != s:
        p.write_text(s2, encoding='utf-8')
PY

  # NoCaption — markdown-emitted `<table>` has no `<caption>`. WAVE
  # warns. Inject a visually-hidden caption derived from the first
  # `<th>` so screen-reader users get table context.
  PYTHONIOENCODING=utf-8 python3 - <<'PY'
import pathlib, re
def patch(text):
    def repl(m):
        opening, rest = m.group(1), m.group(2)
        # Skip if already has a caption
        head_end = rest.find('</thead>')
        if head_end == -1:
            return m.group(0)
        head = rest[:head_end]
        ths = re.findall(r'<th[^>]*>([^<]*)', head)
        title = (ths[0] if ths else 'Data table').strip() or 'Data table'
        # Drop trailing punctuation, cap title
        title = re.sub(r'[\s\.:;]+$', '', title)[:80]
        cap = f'<caption class="visually-hidden">{title} table</caption>'
        return opening + cap + rest
    return re.sub(
        r'(<table(?:\s[^>]*)?>)((?:(?!<caption).)*?<thead>.*?</thead>)',
        repl, text, flags=re.DOTALL)
for p in pathlib.Path('docs').rglob('*.html'):
    s = p.read_text(encoding='utf-8')
    s2 = patch(s)
    if s2 != s:
        p.write_text(s2, encoding='utf-8')
PY

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

  # Strip the SSG's auto-injected search widget from production output.
  # It contributes ~8 KB of redundant HTML/CSS/JS that conflicts with
  # our own accessible search implementation.
  find docs -type f -name '*.html' -print0 \
    | xargs -0 perl -i -0777 -pe 's/<!-- SSG Search Widget -->.*?<div id="ssg-search-widget">.*?<\/script>\s*<\/div>//gs'

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

# ─── Phase 4: re-run post-build HTML patches across every locale ─────
#
# These were previously inside Phase 1 and only touched the English
# root because Phase 2's locale HTMLs didn't exist yet. That left
# locales with bogus SRI integrity attrs (browsers block CSS/JS), the
# SSG live-reload script (CSP-violating WebSocket), no critical CSS,
# no syntect-bg fix, no align-attr strip, no tabindex on <pre>, no
# FGColour-silencing class externalisation, no NoCaption injection.
# Running them here patches every locale uniformly with English.
echo ">>> Patching every locale's HTML…"

# Strip Shokunin's bogus FNV-1a-as-SHA-256 integrity attrs.
find docs -type f -name '*.html' -print0 \
  | xargs -0 perl -i -pe 's/ integrity="sha256-[0-9a-f]{32}"//g; s/ crossorigin="anonymous"(?=>)//g'

# Re-quote and darken syntect's inline pre background.
find docs -type f -name '*.html' -print0 \
  | xargs -0 perl -i -pe 's{style=background-color:(#[0-9a-fA-F]{3,8})}{style="background-color:$1"}g; s{background-color:#2b303b}{background-color:#0d1117}g; s{color:#65737e}{color:#7d8a96}g'

# Add tabindex="0" to syntect <pre>s so they're keyboard-scrollable.
find docs -type f -name '*.html' -print0 \
  | xargs -0 perl -i -pe 's{<pre(?![^>]*tabindex)(\s+style="background-color:#[0-9a-fA-F]{3,8};?")}{<pre tabindex="0"$1}g'

# Strip presentational align="…" from <th>/<td>.
find docs -type f -name '*.html' -print0 \
  | xargs -0 perl -i -pe 's{(<t[hd])\s+align="[^"]*"}{$1}g; s{(<t[hd])\s+align=[a-zA-Z]+}{$1}g'

# Externalise syntect inline `style="color:#X"` to class-based rules.
PYTHONIOENCODING=utf-8 python3 - <<'PY'
import pathlib, re
from collections import OrderedDict
SPAN_RE = re.compile(r'<span style="color:(#[0-9a-fA-F]{3,8});?"')
for p in pathlib.Path('docs').rglob('*.html'):
    text = p.read_text(encoding='utf-8')
    if '<span style="color:#' not in text:
        continue
    palette = OrderedDict()
    def repl(m):
        hex_val = m.group(1).lstrip('#').lower()
        cls = 'synt-' + hex_val
        palette[cls] = m.group(1)
        return f'<span class="{cls}"'
    new_text = SPAN_RE.sub(repl, text)
    if not palette:
        continue
    rules = '\n'.join(f'.{cls}{{color:{hx};background-color:#0d1117}}' for cls, hx in palette.items())
    style_block = f'<style id="synt-palette">{rules}</style>'
    new_text = re.sub(r'<style id="synt-palette">.*?</style>', '', new_text, flags=re.DOTALL)
    new_text = new_text.replace('</head>', style_block + '</head>', 1)
    p.write_text(new_text, encoding='utf-8')
PY

# Unique aria-labels on every CodePen button (WAVE F96).
PYTHONIOENCODING=utf-8 python3 - <<'PY'
import pathlib, re
def patch(text):
    n = [0]
    def repl(_m):
        n[0] += 1
        return ('<button class="pen-btn" type="button" '
                f'aria-label="Open code block {n[0]} in a new CodePen tab">'
                'Open in CodePen</button>')
    return re.sub(
        r'<button class="pen-btn" type="button" aria-label="Open this snippet in a new CodePen tab">Open in CodePen</button>',
        repl, text)
for p in pathlib.Path('docs').rglob('*.html'):
    s = p.read_text(encoding='utf-8')
    s2 = patch(s)
    if s2 != s:
        p.write_text(s2, encoding='utf-8')
PY

# Inject visually-hidden <caption> on every <table> without one (WAVE NoCaption).
PYTHONIOENCODING=utf-8 python3 - <<'PY'
import pathlib, re
def patch(text):
    def repl(m):
        opening, rest = m.group(1), m.group(2)
        head_end = rest.find('</thead>')
        if head_end == -1:
            return m.group(0)
        head = rest[:head_end]
        ths = re.findall(r'<th[^>]*>([^<]*)', head)
        title = (ths[0] if ths else 'Data table').strip() or 'Data table'
        title = re.sub(r'[\s\.:;]+$', '', title)[:80]
        cap = f'<caption class="visually-hidden">{title} table</caption>'
        return opening + cap + rest
    return re.sub(
        r'(<table(?:\s[^>]*)?>)((?:(?!<caption).)*?<thead>.*?</thead>)',
        repl, text, flags=re.DOTALL)
for p in pathlib.Path('docs').rglob('*.html'):
    s = p.read_text(encoding='utf-8')
    s2 = patch(s)
    if s2 != s:
        p.write_text(s2, encoding='utf-8')
PY

# Strip legacy `onclick="replayAnim(...)"` handlers from locale
# animation pages — they're CSP violations under script-src 'self'
# and the new animations.js handles everything via event delegation.
find docs -type f -name '*.html' -print0 \
  | xargs -0 perl -i -pe 's/\s*onclick="replayAnim\([^"]*\)"//g'

# Inject /js/animations.js on every page that has anim-card markup
# but no animations.js script tag. English's animations.md already
# carries the tag; locale equivalents predate the JS refactor.
PYTHONIOENCODING=utf-8 python3 - <<'PY'
import pathlib
TAG = '<script src="/js/animations.js" defer></script>'
for p in pathlib.Path('docs').rglob('*.html'):
    text = p.read_text(encoding='utf-8')
    if 'class="anim-card"' not in text:
        continue
    if '/js/animations.js' in text:
        continue
    text = text.replace('</body>', TAG + '</body>', 1)
    p.write_text(text, encoding='utf-8')
PY

# Strip the inline `<script>` block that historically defined
# replayAnim() on locale anim pages — same CSP issue. The block may
# start with comments (in any locale's language) before the function
# declaration, so match any `<script>…replayAnim…</script>` pair
# without `src=` and without `type="application/ld+json"`.
PYTHONIOENCODING=utf-8 python3 - <<'PY'
import pathlib, re
SCRIPT_RE = re.compile(
    r'<script(?![^>]*\bsrc=)(?![^>]*\btype="application/ld\+json")[^>]*>'
    r'(?:(?!</script>).)*?function\s+replayAnim'
    r'(?:(?!</script>).)*?</script>',
    re.DOTALL,
)
for p in pathlib.Path('docs').rglob('*.html'):
    text = p.read_text(encoding='utf-8')
    new = SCRIPT_RE.sub('', text)
    if new != text:
        p.write_text(new, encoding='utf-8')
PY

# Strip the SSG live-reload script (CSP violation, opens ws://).
find docs -type f -name '*.html' -print0 \
  | xargs -0 perl -i -0pe 's{<!-- SSG Live-Reload -->\s*<script data-ssg-livereload>.*?</script>}{}gs'

# Strip the SSG search widget (we ship our own accessible overlay).
find docs -type f -name '*.html' -print0 \
  | xargs -0 perl -i -0777 -pe 's/<!-- SSG Search Widget -->.*?<div id="ssg-search-widget">.*?<\/script>\s*<\/div>//gs'

# Inline static/css/critical.css into every page's <head>.
if [ -f static/css/critical.css ]; then
  if command -v npx >/dev/null 2>&1; then
    npx -y --silent csso-cli static/css/critical.css --output /tmp/critical.min.css 2>/dev/null || cp static/css/critical.css /tmp/critical.min.css
  else
    cp static/css/critical.css /tmp/critical.min.css
  fi
  PYTHONIOENCODING=utf-8 python3 - <<'PY'
import pathlib
critical = pathlib.Path('/tmp/critical.min.css').read_text(encoding='utf-8').strip()
inline = f'<style>{critical}</style>'
needle = '<!-- @@CRITICAL_CSS@@ -->'
for p in pathlib.Path('docs').rglob('*.html'):
    text = p.read_text(encoding='utf-8')
    if needle in text:
        p.write_text(text.replace(needle, inline), encoding='utf-8')
PY
fi

# Mirror static/css/ and static/js/ into every locale subdir so /js/
# and /css/ relative paths resolve there too. Locale builds reuse the
# English-root assets via root-absolute paths normally, but if a
# locale references a relative path the file must exist there.
# (Currently a no-op — kept as a hook for future locale-specific assets.)

# Progressive-enhanced brand logo on every page. Tera's
# `page.permalink` is unreliable on this SSG, so we patch the
# rendered HTML after every locale has built. Adds
# `class="hero-title"` to each page's hero <h1> so chrome.css can
# swap the heading text for the CDN-served SVG brand logo via
# background-image; the text stays in the DOM (off-screen via
# text-indent) so screen readers, search engines, reader-mode
# clients, and CSS-disabled visitors still get the page title.
# A preconnect + image-preload to cloudcdn.pro is injected into
# every page's <head> so the logo lands in the same paint as
# first contentful.
PYTHONIOENCODING=utf-8 python3 - <<'PY'
import pathlib, re
preload = (
    # preconnect KEEPS `crossorigin` — that opens an anonymous-CORS-capable
    # TLS connection so the actual fetch (whatever its mode) can reuse it.
    '<link rel="preconnect" href="https://cloudcdn.pro" crossorigin>'
    # preload DROPS `crossorigin` — the actual user is the
    # `background-image: url(...)` in chrome.css, which CSS issues as a
    # no-cors request. With `crossorigin` here the preload would request
    # CORS, the cache keys wouldn't match, and the browser would warn
    # "preloaded but not used within a few seconds".
    '<link rel="preload" href="https://cloudcdn.pro/skeletonic/v1/logos/skeletonic.svg" '
    'as="image" type="image/svg+xml">'
)
patched = 0
for p in pathlib.Path('docs').rglob('*.html'):
    text = p.read_text(encoding='utf-8')
    # Only the FIRST hero <h1> is patched — that's the page title.
    # Anchor on the unique `<header class="site-hero">` wrapper so
    # body <h1>s (rare) don't get touched.
    text2, n = re.subn(
        r'(<header class="site-hero">[^<]*?<h1)>',
        r'\1 class="hero-title">',
        text, count=1,
    )
    if n and 'rel="preconnect" href="https://cloudcdn.pro"' not in text2:
        text2 = text2.replace('</head>', preload + '</head>', 1)
    if text2 != text:
        p.write_text(text2, encoding='utf-8')
        patched += 1
print(f">>> Logo hero patched on {patched} page(s).")
PY

# Inject the optional skeletonic-animations.min.css <link> on the
# /animations/ pages (en + every locale). Tera's `page.load_animations`
# from frontmatter isn't reliably evaluated by Shokunin v0.0.34's
# tera_plugin (same problem as `page.permalink`), so we patch the
# rendered HTML here.
PYTHONIOENCODING=utf-8 python3 - <<'PY'
import pathlib, re
LOCALE_ANIMATION_SLUGS = [
    'animations',          # en, bn, hi, fil
    'mga-animasyon',       # fil (alt)
    'animacje',            # pl
    'animationer',         # sv
    'animations',          # de fallback
    'animationen',         # de
    'animaties',           # nl
    'animasyonlar',        # tr
    'animasi',             # id
    'animeshon',           # ja
    'animacoes',           # pt-br
    'animaciones',         # es
    'animace',             # cs
    'animatii',            # ro
    'animatsii',           # ru, uk
    'animatsyot',          # he
    'animazioni',          # it
    'aenimeisyeon',        # ko
    'al-harakaat',         # ar
    'aeni-mechan',         # th
    'dong-hua',            # zh-hans, zh-hant
    'ere-idasonu',         # yo
    'hieu-ung',            # vi
    'motsin-rai',          # ha
]
link_tag = '<link rel="stylesheet" href="/css/skeletonic-animations.min.css">'
patched = 0
for path in pathlib.Path('docs').rglob('index.html'):
    parts = path.parts
    # Match docs/<slug>/index.html or docs/<lang>/<slug>/index.html
    if not (
        (len(parts) == 3 and parts[1] in LOCALE_ANIMATION_SLUGS) or
        (len(parts) == 4 and parts[2] in LOCALE_ANIMATION_SLUGS)
    ):
        continue
    text = path.read_text(encoding='utf-8')
    if link_tag in text:
        continue
    # Insert after the main skeletonic.min.css link so the cascade order
    # stays correct (animations rules sit alongside the core).
    text2, n = re.subn(
        r'(<link rel="stylesheet" href="/css/skeletonic\.min\.css">)',
        r'\1\n    ' + link_tag,
        text, count=1,
    )
    if n:
        path.write_text(text2, encoding='utf-8')
        patched += 1
print(f">>> Animations CSS link injected on {patched} page(s).")
PY

# Tera's `{{ lang }}` placeholder in the <html> tag is not reliably
# substituted by Shokunin v0.0.34's tera_plugin on locale builds —
# every page ships with `<html lang="en">` regardless of locale. That
# breaks: screen-reader pronunciation, the lazy search overlay's
# dataset selection (it reads `document.documentElement.lang` to pick
# the right entries from /js/search-data.json), `hreflang` consistency
# checks, and SEO. Patch the rendered HTML per locale here.
PYTHONIOENCODING=utf-8 python3 - <<'PY'
import pathlib, re
RTL = {"ar", "he"}
LOCALES = {"ar","bn","cs","de","es","fil","fr","ha","he","hi","id","it",
           "ja","ko","nl","pl","pt-br","ro","ru","sv","th","tr","uk",
           "vi","yo","zh-hans","zh-hant"}
patched = 0
for path in pathlib.Path('docs').rglob('*.html'):
    parts = path.parts
    # parts[0] = 'docs'; parts[1] is either a locale code or a top-level
    # English page slug. Match docs/<locale>/... only.
    lang = parts[1] if len(parts) >= 2 and parts[1] in LOCALES else 'en'
    if lang == 'en':
        continue  # English already correct
    text = path.read_text(encoding='utf-8')
    # Replace the bare lang attr value. The tera template emits
    # `<html lang="en"...>` so we target that exact prefix.
    new_text = re.sub(
        r'(<html\s+lang=")en("[^>]*>)',
        rf'\1{lang}\2',
        text, count=1,
    )
    # Add dir="rtl" for Arabic/Hebrew if not already present.
    if lang in RTL and 'dir="rtl"' not in new_text[:500]:
        new_text = re.sub(
            rf'(<html\s+lang="{lang}")',
            r'\1 dir="rtl"',
            new_text, count=1,
        )
    if new_text != text:
        path.write_text(new_text, encoding='utf-8')
        patched += 1
print(f">>> <html lang> + dir patched on {patched} locale page(s).")
PY

# Tera's `{{ page.title }}` is also unreliable on Shokunin v0.0.34's
# tera_plugin — every page renders `<title>Skeletonic Stylus</title>`
# regardless of the markdown frontmatter `title:` value. The same
# fallback hits `og:title`, `twitter:title`, and the JSON-LD `name` /
# `headline` fields. Patch the rendered HTML by reading each source
# markdown's frontmatter and substituting the four occurrences.
PYTHONIOENCODING=utf-8 python3 - <<'PY'
import pathlib, re, html
LOCALES = {"ar","bn","cs","de","es","fil","fr","ha","he","hi","id","it",
           "ja","ko","nl","pl","pt-br","ro","ru","sv","th","tr","uk",
           "vi","yo","zh-hans","zh-hant"}
SITE_TITLE = "Skeletonic Stylus"

def front_title(md_path: pathlib.Path) -> str | None:
    """Return the trimmed frontmatter `title:` value or None."""
    try:
        text = md_path.read_text(encoding='utf-8')
    except FileNotFoundError:
        return None
    # Match either YAML frontmatter delimited by --- or top-of-file
    # `key: value` lines (Shokunin tolerates both). The title may be
    # quoted in single, double, or no quotes.
    m = re.search(r'^title\s*:\s*(.+?)\s*$', text, flags=re.MULTILINE)
    if not m:
        return None
    val = m.group(1).strip()
    if (val.startswith('"') and val.endswith('"')) or (val.startswith("'") and val.endswith("'")):
        val = val[1:-1]
    return val or None

def md_for(html_path: pathlib.Path) -> pathlib.Path | None:
    """Map docs/<...>/index.html → content/<...>.md (or content/<lang>/<...>.md)."""
    parts = html_path.parts
    if parts[0] != 'docs' or parts[-1] != 'index.html':
        return None
    rest = parts[1:-1]  # drop 'docs' and 'index.html'
    if not rest:
        # docs/index.html → content/index.md
        return pathlib.Path('content', 'index.md')
    if rest[0] in LOCALES:
        lang = rest[0]
        slug_parts = rest[1:]
        if not slug_parts:
            return pathlib.Path('content', lang, 'index.md')
        # Try content/<lang>/<slug>.md and content/<lang>/<slug>/index.md
        candidates = [
            pathlib.Path('content', lang, *slug_parts) .with_suffix('.md'),
            pathlib.Path('content', lang, *slug_parts, 'index.md'),
        ]
    else:
        candidates = [
            pathlib.Path('content', *rest).with_suffix('.md'),
            pathlib.Path('content', *rest, 'index.md'),
        ]
    for c in candidates:
        if c.exists():
            return c
    return None

patched = 0
for path in pathlib.Path('docs').rglob('index.html'):
    md = md_for(path)
    if md is None:
        continue
    title = front_title(md)
    if not title or title == SITE_TITLE:
        continue
    text = path.read_text(encoding='utf-8')
    safe = html.escape(title, quote=True)
    new = text
    # 1. <title>…</title>
    new = re.sub(
        r'<title>Skeletonic Stylus</title>',
        f'<title>{safe}</title>',
        new, count=1,
    )
    # 2. og:title
    new = re.sub(
        r'(<meta property="og:title" content=")Skeletonic Stylus(")',
        rf'\g<1>{safe}\g<2>',
        new, count=1,
    )
    # 3. twitter:title
    new = re.sub(
        r'(<meta name="twitter:title" content=")Skeletonic Stylus(")',
        rf'\g<1>{safe}\g<2>',
        new, count=1,
    )
    # 4. JSON-LD "name": "Skeletonic Stylus" and "headline": "Skeletonic"
    #    Use json.dumps-compatible escaping (backslash + double-quote).
    json_safe = title.replace('\\', '\\\\').replace('"', '\\"')
    new = re.sub(
        r'("name"\s*:\s*")Skeletonic Stylus(")',
        rf'\g<1>{json_safe}\g<2>',
        new, count=1,
    )
    new = re.sub(
        r'("headline"\s*:\s*")Skeletonic(")',
        rf'\g<1>{json_safe}\g<2>',
        new, count=1,
    )
    if new != text:
        path.write_text(new, encoding='utf-8')
        patched += 1
print(f">>> page titles localised on {patched} page(s).")
PY

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
