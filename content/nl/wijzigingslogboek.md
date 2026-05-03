---
title: "Wijzigingslogboek"
name: "Skeletonic Stylus"
description: "Releasenotities voor Skeletonic Stylus, met v2.0.0 volledig uitgewerkt."
layout: page
permalink: https://skeletonic.io/nl/wijzigingslogboek/
author: Sebastien Rousseau
language: nl
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic wijzigingslogboek, releasenotities, v2.0.0, semver"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## v2.0.0 — 2026-04 (huidig)

De "release-gereedheid"-controle: a11y, toeleveringsketen, repositoryhygiëne.

### Toegankelijkheid (WCAG 2.2)
- **`$primary` donkerder gemaakt** naar `hsl(210, 100%, 42%)` voor AA-contrast
  tegen witte tekst in knoppen / badges / links.
- **`$secondary` donkerder gemaakt** naar `hsl(195, 100%, 33%)`.
- **focus-visible**-ringen toegevoegd op elk interactief element.
- **`@media (prefers-reduced-motion)`**-wrapper toegevoegd rond de
  animatiemodule.
- **`prefers-color-scheme: dark`** tokenwissel toegevoegd.
- **target-size(24px)** mixin toegevoegd om te voldoen aan WCAG 2.2 SC 2.5.8.
- **focus-not-obscured** scroll-margin helpers toegevoegd voor vaste headers.

### Build &amp; toeleveringsketen
- **Cascade layers** — elk blok bevindt zich nu in
  `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}`.
- **CycloneDX SBOM** gegenereerd als onderdeel van het npm-tarball.
- **`size-limit`-budgetten** afgedwongen in CI: 8 KB gzipped-plafond op het
  kernstylesheet.
- **CVE-2023-44270** (postcss regelterugloop) gepatcht via `pnpm.overrides`.
- Herkomst + ondertekening in de npm-publicatieworkflow
  (`--provenance --access public`).
- Verouderde `stylelint-a11y`-plugin verwijderd uit de lintconfiguratie.

### Repositoryhygiëne &amp; consumentenpakket
- Verouderde `package/`-map verwijderd; `dist/` is nu de enige bron
  van waarheid voor gebruikers.
- README herschreven om v2.0.0-installatiepaden te reflecteren.
- `dist/` wordt gecommit; `debug/` wordt gegenereerd en gitignored.
- Nieuwe `.github/workflows/npm-publish.yml` is tag-gestuurd.

### Bugfixes (P0)
- **`row $:after` parent-selector-regressie** — verdwaalde `$` vervangen door
  `&` in `src/stylus/components/_grid.styl`.
- **`.alternate`** paste per ongeluk `animation-direction: reverse` toe
  in plaats van `alternate`.
- **`.alert-*`-naamgeving** — `.alert.success` → `.alert.alert-success`
  om botsingen met statusklassen te voorkomen.

[Volledige v2.0.0-releasenotities op GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases)

<hr class="hr-text" data-content="Geschiedenis">

## Oudere releases

- **v1.1.6** — interne opschoning, afhankelijkheidsupdates.
- **v1.1.5** — Material-palet toegevoegd.
- **v1.1.0** — Tachyons-palet + grid-refactoring.
- **v1.0.5** — laatste "legacy"-release vóór de WCAG 2.2-controle.
- **v1.0.0** — eerste publieke release (2018).

Voor een commit-per-commit-geschiedenis zie de
[GitHub Releases-pagina ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases).
