---
title: "Dziennik zmian"
name: "Skeletonic Stylus"
description: "Notatki z wydan Skeletonic Stylus, z pelnym opisem v1.1.7."
layout: page
permalink: https://skeletonic.io/pl/dziennik-zmian/
author: Sebastien Rousseau
language: pl
theme_color: "hsl(210, 100%, 42%)"
keywords: "dziennik zmian skeletonic, notatki z wydan, v1.1.7, semver"
---

## v1.1.7 — 2026-04 (aktualna)

Przejscie „gotowosc do wydania": a11y, lancuch dostaw, higiena repozytorium.

### Dostepnosc (WCAG 2.2)
- **`$primary` przyciemniony** do `hsl(210, 100%, 42%)` dla kontrastu AA na bialym tekscie w przyciskach / odznakach / linkach.
- **`$secondary` przyciemniony** do `hsl(195, 100%, 33%)`.
- Dodano pierscienie **focus-visible** na kazdym elemencie interaktywnym.
- Dodano opakowujacy **`@media (prefers-reduced-motion)`** wokol modulu animacji.
- Dodano zamiane tokenow **`prefers-color-scheme: dark`**.
- Dodano mixin **`target-size(24px)`** spelniajacy WCAG 2.2 SC 2.5.8.
- Dodano helpery **focus-not-obscured** scroll-margin dla stalych naglowkow.

### Budowanie &amp; lancuch dostaw
- **Warstwy kaskadowe** — kazdy blok zyje teraz w `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}`.
- **CycloneDX SBOM** generowany jako czesc tarballa npm.
- **Budzety `size-limit`** egzekwowane w CI: limit 8 KB gzipped na glownym arkuszu stylow.
- **CVE-2023-44270** (parsowanie znakow nowej linii postcss) poprawione przez `pnpm.overrides`.
- Provenance + podpisywanie w workflow publikacji npm (`--provenance --access public`).
- Usuniety zarchiwizowany plugin `stylelint-a11y` z konfiguracji lint.

### Higiena repozytorium &amp; paczka konsumencka
- Usuniety starszy katalog `package/`; `dist/` jest teraz jedynym zrodlem prawdy dla konsumentow.
- README przepisany, aby odzwierciedlac sciezki instalacji v1.1.7.
- `dist/` jest commitowany; `debug/` jest generowany i gitignorowany.
- Nowy `.github/workflows/npm-publish.yml` oparty na tagach.

### Poprawki bledow (P0)
- **Regresja selektora rodzica `row $:after`** — zastapiono bledny `$` na `&` w `src/stylus/components/_grid.styl`.
- **`.alternate`** blednie stosowal `animation-direction: reverse` zamiast `alternate`.
- **Przestrzenie nazw `.alert-*`** — `.alert.success` → `.alert.alert-success` aby uniknac kolizji z klasami stanu.

[Pelne notatki z wydania v1.1.7 na GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases/tag/v1.1.7)

<hr class="hr-text" data-content="Historia">

## Starsze wydania

- **v1.1.6** — wewnetrzne porzadki, aktualizacje zaleznosci.
- **v1.1.5** — dodano palete Material.
- **v1.1.0** — paleta Tachyons + refaktor siatki.
- **v1.0.5** — ostatnie wydanie „starsze" przed przeglqadem WCAG 2.2.
- **v1.0.0** — pierwsze publiczne wydanie (2018).

Pelna historia commitow dostepna na
[stronie wydan GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases).
