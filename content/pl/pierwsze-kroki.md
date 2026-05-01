---
title: "Pierwsze kroki z Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Zainstaluj Skeletonic Stylus z npm lub CDN, zaimportuj do swojego buildu Stylus i nadpisz zmienne w kilka sekund."
layout: page
permalink: https://skeletonic.io/pl/pierwsze-kroki/
date: 2026-04-08
author: Sebastien Rousseau
language: pl
theme_color: "hsl(210, 100%, 42%)"
keywords: "instalacja skeletonic, konfiguracja stylus, css cdn, pierwsze kroki"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## Wprowadzenie

Pierwszy raz z Skeletonic Stylus? W **v2.0.0** dobor potrzebnych funkcji jest latwiejszy niz kiedykolwiek. Dzieki niewielkiemu rozmiarowi (8,3&nbsp;KB gzipped dla glownego arkusza stylow), integruje sie szybko z kazda aplikacja webowa — bez wymaganego frameworka JavaScript, bez kroku budowania jesli korzystasz z CDN.

Kazda sciezka opisana jest ponizej — wybierz odpowiednia.

## 1. Pobranie i instalacja

Mozesz zainstalowac Skeletonic Stylus przez **pnpm**, **npm** lub **yarn**, albo zaladowac go bezposrednio z CDN. Mozesz tez samodzielnie hostowac pliki dystrybucyjne lokalnie.

### Z menedzera pakietow (zalecane)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0

# npm
npm install @sebastienrousseau/skeletonic-stylus@2.0.0

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@2.0.0
```

### Z CDN

Jesli potrzebujesz tylko skompilowanego CSS, dodaj jedno z ponizszych do `<head>`:

```html
<!-- jsDelivr -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">

<!-- unpkg -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">
```

Aby uzyskac maksymalna integralnosc, skopiuj **hash SRI** z informacji o wydaniu v2.0.0 i dodaj atrybut `integrity="sha384-…"`.

### Alternatywne lokalizacje CDN

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css` | Tak | Tak |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css` | Tak | Nie |

### Pobranie wydania z GitHub

Wolisz wersjonowany tarball? Pobierz najnowsze wydanie z
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
i umiesc zawartosc `dist/` bezposrednio w swoim projekcie.

### Klonowanie repozytorium GitHub

Sklonuj glowne repozytorium, aby uzyskac wszystkie pliki zrodlowe wraz ze skryptami budowania:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **Wskazowka:** podpisuj swoje commity — projekt wymaga podpisanych commitow w CI.
> Uzyj `git commit -S -m "..."` (lub ustaw `commit.gpgsign = true` w globalnej
> konfiguracji git).

## 2. Uzycie skompilowanego CSS

Biblioteka dostarcza kilka gotowych pakietow w katalogu
`dist/css/` po zainstalowaniu:

| Plik | Przeznaczenie | Rozmiar (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | Reset + tokeny + uklad + elementy + komponenty + narzedzia | 45,7 KB / 8,3 KB |
| `animations/skeletonic-animations.min.css` | Opcjonalny modul animacji | ~18 KB / ~4 KB |
| `palettes/material/skeletonic-material.min.css` | Paleta kolorow Material | ~8 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Paleta narzedzi Tachyons | 7,3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | Paleta web-safe | ~4 KB |

Kazdy modul jest niezalezny — wybierz najmniejsza kombinacje, jakiej potrzebujesz.

## 3. Uzycie ze Stylus

Jesli masz juz pipeline Stylus, mozesz zaimportowac moduly zrodlowe i pozwolic bundlerowi usunac nieuzywane czesci:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

Lub zaimportuj tylko to, czego potrzebujesz:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. Nadpisanie koloru marki

Skeletonic udostepnia swoje tokeny projektowe jako **CSS custom properties**, dzieki czemu mozesz dostosowasc motyw bez rekompilacji Stylus:

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

To wszystko — kazdy komponent uzywajacy koloru glownego bedzie go respektowal.

## 5. Weryfikacja instalacji

Minimalny test „czy dziala?":

```html
<!doctype html>
<html lang="pl">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>Dziala.</h1>
    <a href="#" class="button primary">Witaj, swiecie</a>
  </body>
</html>
```

Jesli naglowek skaluje sie plynnie, a przycisk ma niebieski ksztalt pigulki, to koniec.

## 6. Co zawiera paczka

Wewnatrz paczki znajdziesz wszystkie pliki zrodlowe, skompilowane i zminifikowane pakiety CSS, mapy zrodel oraz pelne drzewo Stylus uporządkowane wedlug kategorii:

```text
@sebastienrousseau/skeletonic-stylus@2.0.0
├── CHANGELOG.md
├── LICENSE-APACHE
├── LICENSE-MIT
├── README.md
├── package.json
├── dist/
│   └── css/
│       ├── core/
│       │   ├── skeletonic.css
│       │   ├── skeletonic.css.map
│       │   └── skeletonic.min.css
│       ├── animations/
│       │   ├── skeletonic-animations.css
│       │   └── skeletonic-animations.min.css
│       └── palettes/
│           ├── material/skeletonic-material.min.css
│           ├── tachyons/skeletonic-tachyons.min.css
│           └── websafe/skeletonic-websafe.min.css
└── src/
    └── stylus/
        ├── animations/      bounce, fade, pulse, shake, vanish, zoom…
        ├── base/            reset, helpers
        ├── components/      card, header, navbar, alert
        ├── configurations/  colors, variables
        ├── elements/        button, form, table, link, list, code…
        ├── fonts/           font-face declarations
        ├── layout/          container, grid, media-queries
        ├── palettes/        material, tachyons, websafe
        ├── utilities/       mixins
        └── skeletonic.styl  ← pojedynczy import ladujacy wszystko
```

Kazdy modul jest niezalezny — dolaczaj tylko te pakiety, ktorych potrzebujesz, aby utrzymac rozmiar CSS jak najmniejszy.

## Najczesciej zadawane pytania

**Jak zainstalowac Skeletonic Stylus?**
Uruchom `pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0`. Mozesz tez zaladowac skompilowany CSS bezposrednio z CDN — bez kroku budowania.

**Czy wymaga JavaScript?**
Nie. Glowny arkusz stylow to czysty CSS, bez zadnych kosztow uruchomieniowych. Komponenty dzialaja bez ani jednej linii JS.

**Czy jest zgodny z WCAG 2.2?**
Tak. Wersja v2.0.0 dostarcza kontrast zgodny z AA, pierscienie focus-visible, helpery skip-link, obsluge ograniczonego ruchu i tryb ciemny domyslnie.

**Jaki jest rozmiar gzipped?**
45,7&nbsp;KB zminifikowany, **8,3&nbsp;KB gzipped**, 6,9&nbsp;KB brotli dla pelnego glownego arkusza stylow. Limit 8&nbsp;KB jest egzekwowany w CI.

**Jaka licencje stosuje?**
Podwojna licencja: MIT i Apache 2.0 — wybierz te, ktora pasuje do Twojego projektu. Darmowe do uzytku komercyjnego i prywatnego.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Jak zainstalowac Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uruchom pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0. Mozesz tez zaladowac skompilowany CSS bezposrednio z CDN — bez kroku budowania."
      }
    },
    {
      "@type": "Question",
      "name": "Czy Skeletonic Stylus wymaga JavaScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nie. Glowny arkusz stylow to czysty CSS, bez zadnych kosztow uruchomieniowych. Komponenty dzialaja bez ani jednej linii JavaScript."
      }
    },
    {
      "@type": "Question",
      "name": "Czy Skeletonic Stylus jest zgodny z WCAG 2.2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak. Wersja v2.0.0 dostarcza kontrast zgodny z AA, pierscienie focus-visible, helpery skip-link, obsluge ograniczonego ruchu i tryb ciemny domyslnie."
      }
    },
    {
      "@type": "Question",
      "name": "Jaki jest rozmiar gzipped Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "45,7 KB zminifikowany, 8,3 KB gzipped, 6,9 KB brotli dla pelnego glownego arkusza stylow. Limit 8 KB jest egzekwowany w CI przy kazdym uaktualnieniu."
      }
    },
    {
      "@type": "Question",
      "name": "Jaka licencje stosuje Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Podwojna licencja: MIT i Apache 2.0 — wybierz te, ktora pasuje do Twojego projektu. Darmowe do uzytku komercyjnego i prywatnego."
      }
    }
  ]
}
</script>

[Przegladaj komponenty →](/pl/komponenty/)
