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
  # Give the post-build plugins (a11y, fingerprint, link-checker, page-write)
  # enough time to finish — large content trees with many new pages need
  # several seconds of settling after the CSS is fingerprinted.
  sleep 8
  kill "$SSG_PID" 2>/dev/null || true
  wait "$SSG_PID" 2>/dev/null || true
  # Prevent GitHub Pages from running Jekyll on the output.
  touch docs/.nojekyll
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
