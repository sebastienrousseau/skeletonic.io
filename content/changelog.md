---
title: "Changelog"
name: "Skeletonic Stylus"
description: "Release notes for Skeletonic Stylus, with v2.0.0 in full."
layout: page
permalink: https://skeletonic.io/changelog/
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic changelog, release notes, v2.0.0, oklch, css grid, container queries, view transitions, semver"
---

## skeletonic.io — 2026-05 site refresh

Documentation site updates that ship alongside library v2.0.0. These
are not part of the library bundle — they describe what changed on
this site itself.

- **28 locales.** English plus 27 translations (ar, bn, cs, de, es,
  fil, fr, ha, he, hi, id, it, ja, ko, nl, pl, pt-br, ro, ru, sv, th,
  tr, uk, vi, yo, zh-hans, zh-hant). Locale switcher in the footer;
  every page resolves the user's preferred language from
  `Accept-Language` if no choice has been saved.
- **Service worker.** Cache-first for static assets, network-first
  with a 3 s timeout for HTML, falling back to the localised
  `/<locale>/offline/` page when the network is unreachable.
- **Hero logo.** Progressive-enhanced brand mark. The `<h1>` text
  stays in the DOM (text-indent: -9999px) so screen readers, search
  engines, reader-mode clients, and CSS-disabled visitors still get
  the page title; CSS swaps the visual to a CDN-served SVG.
- **Lazy search.** `/js/search-data.json` (~51 kB raw / ~10 kB gzip)
  is fetched only on first ⌘K open. Module-level promise caches the
  response so subsequent opens are zero-network.
- **CI gates.** `node scripts/verify-site.mjs` runs the same checks
  CI does, locally: docs build presence, asset 200s, axe-core in
  light + dark, `<html lang>` per locale, service-worker
  registration, console-error free, mobile Lighthouse 100×4 across
  every key page.
- **Dark-mode contrast pass.** Every component swept under
  `light-dark()` and validated against axe-core in both schemes —
  zero WCAG 2.2 violations across 10 pages × 2 schemes.

---

## v2.0.0 — 2026-05 (current)

The "2026 baseline" major release. Every modern CSS feature that
shipped in the 2024–2026 Baseline window is now part of the library's
foundation. Class names that consumers were already using are
preserved; the underlying tokens, layout primitives, and motion
utilities are fundamentally new.

### Modern colour system — OKLCH

- Every brand, status, grey, and keyword colour token migrates from
  `hsl()` to `oklch()`. Perceptually uniform steps from `$grey-100`
  through `$grey-1000`, native wide-gamut (P3) on capable displays,
  and consistent contrast at every shade.
- Surface tokens (`--background-color`, `--foreground-color`) and
  `prefers-color-scheme: dark` overrides are also OKLCH, so dark mode
  no longer drifts in saturation between light and dark.

### Native CSS Cascade Layers

- `skeletonic.styl` now declares the layer order at the top:

  ```css
  @layer skeletonic.base, skeletonic.layout,
         skeletonic.elements, skeletonic.components;
  ```

  Each subtree imports inside its corresponding `@layer`. Drop an
  unlayered override anywhere in your project and it always wins —
  no specificity wars, no `!important`.

### Native CSS Grid — `.grid`, `.grid-cols-N`, `.col-span-N`

- The legacy `.flex-1`…`.flex-12` flexbox grid is replaced with a
  modern CSS Grid system:

  ```html
  <section class="grid grid-cols-3">
    <article class="card">…</article>
    <article class="card">…</article>
    <article class="card col-span-2">spans two cells</article>
  </section>
  ```

  `.grid` sets `display: grid; gap: var(--gr-fsb)`; `.grid-cols-N`
  generates `grid-template-columns: repeat(N, minmax(0, 1fr))`;
  `.col-span-N` is just `grid-column: span N`. Less CSS, more layout
  power, no margin-collapse quirks.

### Container queries on `.card`

- `components/card.styl` sets `container-type: inline-size`. A
  card's internal layout responds to the **card's own width**, not
  the viewport's — so a card that's narrow because it's in a sidebar
  rearranges itself even on a wide page.
- Combined with `:has()` for parent-aware styling (e.g. an `.alert`
  that contains a link), this lifts the library to 2026 baseline.

### Modern motion utilities

- `src/stylus/utilities/animations.styl` introduces:
  - **View Transitions API** utilities — `.view-transition-name-root`,
    `-header`, `-main`, `-footer`, `-article`, `-section`. Drop one
    on each side of an SPA-style page transition and the browser
    cross-fades or morphs the named element natively.
  - **Scroll-driven animation** primitives — `.scroll-timeline` and
    `.animate-on-scroll` plug into the native
    `scroll-timeline-name` / `animation-timeline: view()` API.
- All native, GPU-accelerated, no JavaScript runtime.

### Bundle &amp; quality gates

- Compiled bundle: **38.8&nbsp;KB raw / 7.7&nbsp;KB gzip /
  6.7&nbsp;KB brotli** — under the 48 / 10 / 8&nbsp;KB CI ceilings.
- axe-core gate green: zero WCAG&nbsp;2.2 violations on the demo page.
- CycloneDX SBOM updated; npm publish workflow signs and provenances
  the v2.0.0 tarball.

### Migration notes (v1.1.7 → v2.0.0)

- **Colour tokens.** The names are unchanged (`--cl-primary`,
  `--bg-success`, `$grey-500`, etc.) but the resolved values move to
  OKLCH. Visual output is close to v1.1.7 but not pixel-identical;
  audit any screenshots in your design system.
- **Grid system.** `.flex-1`…`.flex-12` is removed. Replace with
  `<div class="grid grid-cols-{N}"><div class="col-span-{M}">…`.
  See [/components/#grid](/components/#grid) for the new syntax.
- **Spacing utilities.** The 12-stop percentage scale
  (`.padding-0`…`.padding-11`, `.margin-0`…`.margin-11`) is replaced
  with a five-step rem-based t-shirt scale: `xs` / `sm` / `md` /
  `lg` / `xl`. So `.padding-3` → `.padding-md` (1.62 rem),
  `.margin-bottom-5` → `.margin-bottom-lg` (≈ 2.62 rem). Five steps
  cover the same visual range with a clearer mental model and saves
  about 4 KB of compiled CSS. See [/spacing/](/spacing/) for the
  full ladder.
- **Cascade layers.** If you had `!important` overrides to win
  against Skeletonic, you can almost certainly delete them.

[All releases on GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases)

<hr class="hr-text" data-content="History">

## v1.1.7 — 2026-04

The "release-readiness" pass: a11y, supply chain, repo hygiene.

### Accessibility (WCAG 2.2) &amp; internationalisation
- **RTL via logical properties** — every directional declaration in
  `margin-`, `padding-`, `border-`, `float`, `text-align`, and
  absolute positioning is now logical (`margin-inline-*`,
  `inset-inline-*`, `text-align: start/end`, `float: inline-start/end`).
  Set `<html dir="rtl">` and the inline axis flips.
- **`--gr-h1`…`--gr-h6` heading tokens are now consumed.** Previously
  the `<h1>`-`<h6>` rules used a separate hand-curated scale and the
  exported tokens carried unusable Φⁿ values (h1 ≈ 29 rem).
- **`$primary` / `$secondary` darkened** for AA contrast against
  white text in buttons / badges / links.
- Added **focus-visible** rings on every interactive element.
- Added **`@media (prefers-reduced-motion)`** wrapper around the
  animations module.
- Added **`prefers-color-scheme: dark`** token swap.

### Build &amp; supply chain
- **CycloneDX SBOM** generated as part of the npm tarball.
- **`size-limit` budgets** enforced in CI.
- **CVE-2023-44270** (postcss line return) patched via `pnpm.overrides`.

## Older releases

- **v1.1.6** — internal cleanup, dependency bumps.
- **v1.1.5** — added Material palette.
- **v1.1.0** — Tachyons palette + grid refactor.
- **v1.0.5** — last "legacy" release before the WCAG 2.2 sweep.
- **v1.0.0** — initial public release (2018).

For a commit-by-commit history see the
[GitHub Releases page ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases).
