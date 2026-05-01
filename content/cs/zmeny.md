---
title: "Seznam zmen — Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Poznamky k vydanim Skeletonic Stylus, s kompletnim popisem v2.0.0."
layout: page
permalink: https://skeletonic.io/cs/zmeny/
author: Sebastien Rousseau
language: cs
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic seznam zmen, poznamky k vydani, v2.0.0, semver"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## v2.0.0 — 2026-04 (aktualni)

Pruchod „pripravenost k vydani": pristupnost, dodavatelsky retezec, hygiena repozitare.

### Pristupnost (WCAG 2.2)
- **`$primary` ztmaveno** na `hsl(210, 100%, 42%)` pro AA kontrast
  vuci bilemu textu v tlacitcich / stitcich / odkazech.
- **`$secondary` ztmaveno** na `hsl(195, 100%, 33%)`.
- Pridana **focus-visible** ohraniceni na kazdy interaktivni element.
- Pridan **`@media (prefers-reduced-motion)`** wrapper kolem modulu
  animaci.
- Pridan **`prefers-color-scheme: dark`** swap tokenu.
- Pridan mixin **target-size(24px)** pro splneni WCAG 2.2 SC 2.5.8.
- Pridany pomocnici **focus-not-obscured** scroll-margin pro fixni zahlavi.

### Build a dodavatelsky retezec
- **Kaskadove vrstvy** — kazdy blok nyni zije v
  `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}`.
- **CycloneDX SBOM** generovan jako soucast npm tarballu.
- **Rozpocty `size-limit`** vynucovany v CI: strop 8 KB gzipped pro
  zakladni stylesheet.
- **CVE-2023-44270** (postcss konec radku) opraveno pres `pnpm.overrides`.
- Provenance + podpis na npm publikacnim workflow
  (`--provenance --access public`).
- Odstranen archivovany plugin `stylelint-a11y` z konfigurace lintu.

### Hygiena repozitare a spotrebitelsky balicek
- Zastaraly adresar `package/` odstranen; `dist/` je nyni jediny zdroj
  pravdy pro spotrebitele.
- README prepsano aby odrazelo instalacni cesty v2.0.0.
- `dist/` je commitovano; `debug/` je generovano a gitignorováno.
- Novy `.github/workflows/npm-publish.yml` je rizeny tagy.

### Opravy chyb (P0)
- **Regrese `row $:after` rodicovskeho selektoru** — bludny `$` nahrazen
  za `&` v `src/stylus/components/_grid.styl`.
- **`.alternate`** omylem aplikoval `animation-direction: reverse`
  misto `alternate`.
- **Jmenne prostory `.alert-*`** — `.alert.success` → `.alert.alert-success`
  pro zamezeni kolizi se stavovymi tridami.

[Kompletni poznamky k vydani v2.0.0 na GitHubu ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases)

<hr class="hr-text" data-content="Historie">

## Starsi vydani

- **v1.1.6** — interni cisteni, aktualizace zavislosti.
- **v1.1.5** — pridana paleta Material.
- **v1.1.0** — paleta Tachyons + refaktoring mrizky.
- **v1.0.5** — posledni „zastarale" vydani pred prechodem na WCAG 2.2.
- **v1.0.0** — prvni verejne vydani (2018).

Pro historii commit po commitu navstivte
[stranku vydani na GitHubu ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases).
