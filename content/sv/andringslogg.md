---
title: "Andringslogg"
name: "Skeletonic Stylus"
description: "Releaseanteckningar for Skeletonic Stylus, med v1.1.7 i sin helhet."
layout: page
permalink: https://skeletonic.io/sv/andringslogg/
author: Sebastien Rousseau
language: sv
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic andringslogg, releaseanteckningar, v1.1.7, semver"
---

## v1.1.7 — 2026-04 (aktuell)

Passet for "releaseredskap": a11y, leveranskedja, repohydien.

### Tillganglighet (WCAG 2.2)
- **`$primary` morkad** till `hsl(210, 100%, 42%)` for AA-kontrast
  mot vit text i knappar / marken / lankar.
- **`$secondary` morkad** till `hsl(195, 100%, 33%)`.
- Lagt till **focus-visible**-ringar pa varje interaktivt element.
- Lagt till **`@media (prefers-reduced-motion)`**-wrapper runt
  animationsmodulen.
- Lagt till **`prefers-color-scheme: dark`**-tokenbyte.
- Lagt till **target-size(24px)**-mixin for att uppfylla WCAG 2.2 SC 2.5.8.
- Lagt till **focus-not-obscured** scroll-margin-hjalp for fasta headers.

### Bygg &amp; leveranskedja
- **Cascade layers** — varje block lever nu i
  `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}`.
- **CycloneDX SBOM** genereras som del av npm-tarballen.
- **`size-limit`-budgetar** tillapas i CI: 8 KB gzippat tak pa
  karn-stylesheetet.
- **CVE-2023-44270** (postcss radreturn) patchad via `pnpm.overrides`.
- Proveniens + signering pa npm-publiceringsarbetsfloden
  (`--provenance --access public`).
- Borttagen arkiverad `stylelint-a11y`-plugin fran lint-konfigurationen.

### Repohydien &amp; konsumentpaket
- Arvd `package/`-katalog borttagen; `dist/` ar nu den enda sanningkallan
  for konsumenter.
- README omskriven for att aterspegia v1.1.7-installationsvagar.
- `dist/` ar committad; `debug/` genereras och gitignoreras.
- Ny `.github/workflows/npm-publish.yml` ar taggdriven.

### Buggfixar (P0)
- **`row $:after` overordnad-selektor-regression** — ersatt vilset `$` med
  `&` i `src/stylus/components/_grid.styl`.
- **`.alternate`** satte felaktigt `animation-direction: reverse`
  istallet for `alternate`.
- **`.alert-*` namnrymdsandring** — `.alert.success` → `.alert.alert-success`
  for att undvika kollisioner med tillstandsklasser.

[Fullstandiga v1.1.7-releaseanteckningar pa GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases/tag/v1.1.7)

<hr class="hr-text" data-content="Historik">

## Aldre releaser

- **v1.1.6** — intern uppsnyggning, beroendeuppdateringar.
- **v1.1.5** — lade till Material-palett.
- **v1.1.0** — Tachyons-palett + omarbetning av rutsystem.
- **v1.0.5** — sista "arvda" releasen fore WCAG 2.2-genomgangen.
- **v1.0.0** — forsta offentliga releasen (2018).

For en commit-for-commit-historik, se
[GitHub Releases-sidan ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases).
