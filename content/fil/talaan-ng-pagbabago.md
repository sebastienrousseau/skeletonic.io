---
title: "Talaan ng Pagbabago"
name: "Skeletonic Stylus"
description: "Mga release note para sa Skeletonic Stylus, kasama ang buong v1.1.7."
layout: page
permalink: https://skeletonic.io/fil/talaan-ng-pagbabago/
author: Sebastien Rousseau
language: fil
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic changelog, release note, v1.1.7, semver"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## v1.1.7 — 2026-04 (kasalukuyan)

Ang "release-readiness" pass: a11y, supply chain, repo hygiene.

### Aksesibilidad (WCAG 2.2)
- **`$primary` pinaitim** sa `hsl(210, 100%, 42%)` para sa AA contrast
  laban sa puting text sa mga button / badge / link.
- **`$secondary` pinaitim** sa `hsl(195, 100%, 33%)`.
- Idinagdag ang **focus-visible** ring sa bawat interactive na element.
- Idinagdag ang **`@media (prefers-reduced-motion)`** na wrapper sa
  module ng animasyon.
- Idinagdag ang **`prefers-color-scheme: dark`** na token swap.
- Idinagdag ang **target-size(24px)** mixin upang matugunan ang WCAG 2.2 SC 2.5.8.
- Idinagdag ang **focus-not-obscured** na scroll-margin helper para sa mga sticky header.

### Build &amp; supply chain
- **Cascade layer** — bawat bloke ay nasa
  `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}`.
- **CycloneDX SBOM** na ginagawa bilang bahagi ng npm tarball.
- **`size-limit` budget** na ipinatutupad sa CI: 8 KB gzipped na limitasyon sa
  core stylesheet.
- **CVE-2023-44270** (postcss line return) na-patch sa pamamagitan ng `pnpm.overrides`.
- Provenance + signing sa npm publish workflow
  (`--provenance --access public`).
- Inalis ang arkibadong `stylelint-a11y` plugin mula sa lint config.

### Repo hygiene &amp; consumer package
- Inalis ang legacy na `package/` directory; ang `dist/` na ngayon ang tanging source
  of truth para sa mga consumer.
- Naisulat muli ang README upang ipakita ang v1.1.7 na mga install path.
- Ang `dist/` ay kinokompromiso; ang `debug/` ay ginagawa at naka-gitignore.
- Bagong `.github/workflows/npm-publish.yml` na tag-driven.

### Mga pag-aayos ng bug (P0)
- **`row $:after` parent-selector regression** — pinalitan ang naligaw na `$` ng
  `&` sa `src/stylus/components/_grid.styl`.
- **`.alternate`** nagkamaling nag-apply ng `animation-direction: reverse`
  sa halip na `alternate`.
- **`.alert-*` namespacing** — `.alert.success` → `.alert.alert-success`
  upang maiwasan ang mga collision sa mga state class.

[Buong v1.1.7 release note sa GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases)

<hr class="hr-text" data-content="Kasaysayan">

## Mga naunang release

- **v1.1.6** — panloob na paglilinis, pag-update ng dependency.
- **v1.1.5** — idinagdag ang Material palette.
- **v1.1.0** — Tachyons palette + grid refactor.
- **v1.0.5** — huling "legacy" release bago ang WCAG 2.2 sweep.
- **v1.0.0** — unang pampublikong release (2018).

Para sa kasaysayan ng commit-by-commit tingnan ang
[GitHub Releases page ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases).
