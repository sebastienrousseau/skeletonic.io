---
title: "Tarihin canje-canje"
name: "Skeletonic Stylus"
description: "Bayanan sakin Skeletonic Stylus, tare da cikakken bayani na v1.1.7."
layout: page
permalink: https://skeletonic.io/ha/tarihin-canje-canje/
author: Sebastien Rousseau
language: ha
theme_color: "hsl(210, 100%, 42%)"
keywords: "tarihin canje-canje na skeletonic, bayanan sakin, v1.1.7, semver"
---

## v1.1.7 — 2026-04 (na yanzu)

Aikin "shirye-shiryen sakin": samun dama, sarkar samarwa, tsaftar ma'ajiya.

### Samun dama (WCAG 2.2)
- **An duhunta `$primary`** zuwa `hsl(210, 100%, 42%)` don bambancin AA akan farin rubutu a cikin maballin / alamomi / hanyoyi.
- **An duhunta `$secondary`** zuwa `hsl(195, 100%, 33%)`.
- An ƙara zoben **focus-visible** a kan kowane abun hulɗa.
- An ƙara nannaɗar **`@media (prefers-reduced-motion)`** a kusa da module na motsin rai.
- An ƙara sauyin alamar **`prefers-color-scheme: dark`**.
- An ƙara mixin na **target-size(24px)** don biyan WCAG 2.2 SC 2.5.8.
- An ƙara taimakon **focus-not-obscured** scroll-margin don kanun shafi masu manne.

### Gini &amp; sarkar samarwa
- **Cascade layers** — kowane tubali yanzu yana cikin `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}`.
- **CycloneDX SBOM** an ƙirƙira shi a matsayin wani ɓangare na tarball ɗin npm.
- **Kasafin `size-limit`** an tilasta su a CI: iyakar 8 KB gzipped a kan stylesheet na tushe.
- **CVE-2023-44270** (sakin layin postcss) an gyara ta hanyar `pnpm.overrides`.
- Tabbaci + sanya hannu a kan aikin bugawa na npm (`--provenance --access public`).
- An cire plugin ɗin `stylelint-a11y` da aka adana daga daidaitawar lint.

### Tsaftar ma'ajiya &amp; fakitin masu amfani
- An cire tsohon jakar `package/`; `dist/` yanzu ita ce tushe guda ɗaya na gaskiya don masu amfani.
- An sake rubuta README don nuna hanyoyin shigarwa na v1.1.7.
- An adana `dist/`; an ƙirƙira `debug/` kuma an ɓoye shi daga git.
- Sabon `.github/workflows/npm-publish.yml` yana gudana ta alamar.

### Gyaran kurakurai (P0)
- **Rashin daidaituwar `row $:after` parent-selector** — an maye gurbin `$` da bai dace ba da `&` a cikin `src/stylus/components/_grid.styl`.
- **`.alternate`** da kuskure ya sanya `animation-direction: reverse` maimakon `alternate`.
- **Sunan yankin `.alert-*`** — `.alert.success` → `.alert.alert-success` don guje wa karo da azuzuwan yanayi.

[Cikakken bayanan sakin v1.1.7 a GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases/tag/v1.1.7)

<hr class="hr-text" data-content="Tarihi">

## Tsofaffin sakinsu

- **v1.1.6** — tsaftacewa na ciki, sabuntar abubuwan dogaro.
- **v1.1.5** — an ƙara tsarin launuka na Material.
- **v1.1.0** — tsarin launuka na Tachyons + sake fasalin grid.
- **v1.0.5** — sakin "na gargajiya" na ƙarshe kafin tsaftacewar WCAG 2.2.
- **v1.0.0** — sakin farko na jama'a (2018).

Don tarihin commit-da-commit duba [Shafin Sakinsu na GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases).
