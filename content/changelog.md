---
title: "Changelog"
name: "Skeletonic Stylus"
description: "Release notes for Skeletonic Stylus, with v1.1.7 in full."
layout: page
permalink: https://skeletonic.io/changelog/
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic changelog, release notes, v1.1.7, semver"
---

## v1.1.7 — 2026-04 (current)

The "release-readiness" pass: a11y, supply chain, repo hygiene.

### Accessibility (WCAG 2.2) &amp; internationalisation
- **RTL via logical properties** — every directional declaration in
  `margin-`, `padding-`, `border-`, `float`, `text-align`, and absolute
  positioning is now logical (`margin-inline-*`, `inset-inline-*`,
  `text-align: start/end`, `float: inline-start/end`). Set
  `<html dir="rtl">` and the inline axis flips. The off-canvas hamburger
  and the 12 `.link-N` underline reveals flip via a small
  `[dir="rtl"]` override block. `<code>` and `<pre>` retain
  `direction: ltr` because code is conventionally LTR.
- **`--gr-h1`…`--gr-h6` heading tokens are now consumed.** Previously
  the `<h1>`-`<h6>` rules used a separate hand-curated scale and the
  exported tokens carried unusable Φⁿ values (h1 ≈ 29 rem). The Stylus
  values and runtime custom properties now match the applied scale
  (1.27 minor-third ratio), so consumers can retheme typography by
  overriding `--gr-h*` on any ancestor.
- **`$primary` darkened** to `hsl(210, 100%, 42%)` for AA contrast
  against white text in buttons / badges / links.
- **`$secondary` darkened** to `hsl(195, 100%, 33%)`.
- Added **focus-visible** rings on every interactive element.
- Added **`@media (prefers-reduced-motion)`** wrapper around the
  animations module.
- Added **`prefers-color-scheme: dark`** token swap.
- Added **target-size(24px)** mixin to satisfy WCAG 2.2 SC 2.5.8.
- Added **focus-not-obscured** scroll-margin helpers for sticky headers.

### Build &amp; supply chain
- **Cascade layers** — every block now lives in
  `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}`.
- **CycloneDX SBOM** generated as part of the npm tarball.
- **`size-limit` budgets** enforced in CI: 8 KB gzipped ceiling on the
  core stylesheet.
- **CVE-2023-44270** (postcss line return) patched via `pnpm.overrides`.
- Provenance + signing on the npm publish workflow
  (`--provenance --access public`).
- Removed archived `stylelint-a11y` plugin from the lint config.

### Repo hygiene &amp; consumer package
- Legacy `package/` directory removed; `dist/` is now the single source
  of truth for consumers.
- README rewritten to reflect v1.1.7 install paths.
- `dist/` is committed; `debug/` is generated and gitignored.
- New `.github/workflows/npm-publish.yml` is tag-driven.

### Bug fixes (P0)
- **`row $:after` parent-selector regression** — replaced stray `$` with
  `&` in `src/stylus/components/_grid.styl`.
- **`.alternate`** mistakenly applied `animation-direction: reverse`
  instead of `alternate`.
- **`.alert-*` namespacing** — `.alert.success` → `.alert.alert-success`
  to avoid collisions with state classes.

[Full v1.1.7 release notes on GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases/tag/v1.1.7)

<hr class="hr-text" data-content="History">

## Older releases

- **v1.1.6** — internal cleanup, dependency bumps.
- **v1.1.5** — added Material palette.
- **v1.1.0** — Tachyons palette + grid refactor.
- **v1.0.5** — last "legacy" release before the WCAG 2.2 sweep.
- **v1.0.0** — initial public release (2018).

For a commit-by-commit history see the
[GitHub Releases page ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases).
