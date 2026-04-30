---
title: "Degisiklik Gunlugu"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus surum notlari, v1.1.7 tamamiyla dahil."
layout: page
permalink: https://skeletonic.io/tr/degisiklik-gunlugu/
author: Sebastien Rousseau
language: tr
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic degisiklik gunlugu, surum notlari, v1.1.7, semver"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## v1.1.7 — 2026-04 (guncel)

"Yayinlanma hazirligina" gecis: erisilebilirlik, tedarik zinciri, depo bakimi.

### Erisilebilirlik (WCAG 2.2)
- **`$primary` karartildi** — butonlar / rozetler / baglantilarda beyaz
  metin uzerinde AA kontrast icin `hsl(210, 100%, 42%)`.
- **`$secondary` karartildi** — `hsl(195, 100%, 33%)`.
- Her etkilesimli ogeye **focus-visible** halkalari eklendi.
- Animasyonlar modulune **`@media (prefers-reduced-motion)`** sarici eklendi.
- **`prefers-color-scheme: dark`** token degisimi eklendi.
- WCAG 2.2 SC 2.5.8'i karsilamak icin **target-size(24px)** mixin'i eklendi.
- Yapisan basliklar icin **focus-not-obscured** scroll-margin yardimcilari eklendi.

### Derleme ve tedarik zinciri
- **Cascade layer'lar** — her blok artik
  `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}` icinde.
- **CycloneDX SBOM** npm tarball'inin bir parcasi olarak olusturulur.
- **`size-limit` butceleri** CI'da zorunlu: cekirdek stil sayfasinda 8 KB gzipped tavani.
- **CVE-2023-44270** (postcss satir donus) `pnpm.overrides` ile yamali.
- npm yayinlama is akisinda provenance + imzalama
  (`--provenance --access public`).
- Arsivlenmis `stylelint-a11y` eklentisi lint yapilandirmasindan kaldirildi.

### Depo bakimi ve tuketici paketi
- Eski `package/` dizini kaldirildi; `dist/` artik tuketiciler icin tek
  dogru kaynak.
- README, v1.1.7 kurulum yollarini yansitacak sekilde yeniden yazildi.
- `dist/` commit edilmis; `debug/` olusturulup gitignore edilmis.
- Yeni `.github/workflows/npm-publish.yml` etiket odakli.

### Hata duzeltmeleri (P0)
- **`row $:after` ust secici gerilemesi** — `src/stylus/components/_grid.styl`
  icindeki yanlis `$` yerine `&` konuldu.
- **`.alternate`** yanlislikla `alternate` yerine
  `animation-direction: reverse` uyguluyordu.
- **`.alert-*` ad alani** — durum siniflariyla catismayi onlemek icin
  `.alert.success` → `.alert.alert-success`.

[GitHub'da tam v1.1.7 surum notlari ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases)

<hr class="hr-text" data-content="Gecmis">

## Eski surumler

- **v1.1.6** — dahili temizlik, bagimlilik guncellemeleri.
- **v1.1.5** — Material paleti eklendi.
- **v1.1.0** — Tachyons paleti + izgara yeniden duzenleme.
- **v1.0.5** — WCAG 2.2 taramasindan onceki son "eski" surum.
- **v1.0.0** — ilk genel surum (2018).

Commit-commit gecmis icin
[GitHub Surumler sayfasina ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases) bakin.
