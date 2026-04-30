---
title: "Iwe Iyipada"
name: "Skeletonic Stylus"
description: "Awọn akiyesi itusilẹ fun Skeletonic Stylus, pẹlu v1.1.7 ni kikun."
language: yo
layout: page
permalink: https://skeletonic.io/yo/iwe-iyipada/
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "iwe iyipada skeletonic, awọn akiyesi itusilẹ, v1.1.7, semver"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## v1.1.7 — 2026-04 (lọwọlọwọ)

Ipari "imurasilẹ-itusilẹ": a11y, ẹwọn ipese, itọju ibi-ipamọ.

### Irayẹ-si (WCAG 2.2)
- **`$primary` ti a ṣe dudu** si `hsl(210, 100%, 42%)` fun iyatọ AA
  si ọrọ funfun ninu awọn bọtini / awọn aami / awọn ọna asopọ.
- **`$secondary` ti a ṣe dudu** si `hsl(195, 100%, 33%)`.
- A fi awọn oruka **focus-visible** kun lori gbogbo ẹya ibaraṣepọ.
- A fi **`@media (prefers-reduced-motion)`** afikun kun si modulu
  ere idasọnu.
- A fi **`prefers-color-scheme: dark`** iyipada ami kun.
- A fi adalu **target-size(24px)** kun lati ni itẹlọrun WCAG 2.2 SC 2.5.8.
- A fi awọn oluranlọwọ scroll-margin **focus-not-obscured** kun fun
  awọn akọle didimu.

### Ikọ &amp; ẹwọn ipese
- **Awọn ipele cascade** — gbogbo bulọọki ngbe ni bayi ninu
  `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}`.
- **CycloneDX SBOM** ti a ṣẹda gẹgẹ bi apakan ti tarball npm.
- **Awọn isuna `size-limit`** ti a fi ipa mu ninu CI: opin 8 KB
  gzipped lori iwe-aṣa ipilẹ.
- **CVE-2023-44270** (postcss line return) ti a ṣe atunṣe nipasẹ
  `pnpm.overrides`.
- Ẹri + fọwọsi lori opo iṣẹ tẹ npm
  (`--provenance --access public`).
- A yọ plugin `stylelint-a11y` ti a fi pamọ kuro ninu iṣeto lint.

### Itọju ibi-ipamọ &amp; package olumulo
- A yọ itọsọna `package/` atijọ kuro; `dist/` ni orisun otitọ kan
  bayi fun awọn olumulo.
- A tun README kọ lati ṣe afihan awọn ọna fifi sori ẹrọ v1.1.7.
- A fi `dist/` sinu adehun; a ṣẹda `debug/` ti a si fi sinu gitignore.
- `.github/workflows/npm-publish.yml` tuntun ni ami-akọle wakọ.

### Awọn atunṣe aṣiṣe (P0)
- **Ipadabọ oluyẹwo obi `row $:after`** — a fi `&` rọpo `$` aṣiṣe
  ninu `src/stylus/components/_grid.styl`.
- **`.alternate`** fi `animation-direction: reverse` ranṣẹ lairotẹlẹ
  dipo `alternate`.
- **Orukọ `.alert-*`** — `.alert.success` → `.alert.alert-success`
  lati yẹra fun ikọlu pẹlu awọn kilasi ipo.

[Gbogbo awọn akiyesi itusilẹ v1.1.7 lori GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases/tag/v1.1.7)

<hr class="hr-text" data-content="Itan">

## Awọn itusilẹ atijọ

- **v1.1.6** — imọtoto inu, awọn igbega igbarale.
- **v1.1.5** — a fi palẹti Material kun.
- **v1.1.0** — palẹti Tachyons + atunṣe grid.
- **v1.0.5** — itusilẹ "atijọ" ti o kẹhin ṣaaju ayẹwo WCAG 2.2.
- **v1.0.0** — itusilẹ gbogbo eniyan akọkọ (2018).

Fun itan adehun-nipasẹ-adehun wo
[Oju-iwe Awọn Itusilẹ GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases).
