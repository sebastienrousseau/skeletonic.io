---
title: "Kom igang med Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Installera Skeletonic Stylus fran npm eller ett CDN, importera det i din Stylus-build och overskriv variabler pa sekunder."
layout: page
permalink: https://skeletonic.io/sv/kom-igang/
date: 2026-04-08
author: Sebastien Rousseau
language: sv
theme_color: "hsl(210, 100%, 42%)"
keywords: "installera skeletonic, stylus installation, css cdn, kom igang"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## Introduktion

Ny med Skeletonic Stylus? I **v1.1.7** ar det enklare an nagonsin att valja
just de funktioner du behover. Tack vare det lilla fotavtrycket (8,3&nbsp;KB
gzippat for karn-stylesheetet) integreras det snabbt i vilken webbapp som
helst — inget JavaScript-ramverk kravs, inget byggsteg behov om du
anvander CDN.

Redo att installera? Alla vagar beskrivs nedan — valj den som passar.

## 1. Ladda ner och installera

Du kan installera Skeletonic Stylus via **pnpm**, **npm** eller **yarn**, eller
ladda det direkt fran ett CDN. Du kan ocksa sjalvhosta distributionsfilerna
lokalt om du foredrar det.

### Fran en pakethanterare (rekommenderat)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7

# npm
npm install @sebastienrousseau/skeletonic-stylus@1.1.7

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@1.1.7
```

### Fran ett CDN

Om du bara behover den kompilerade CSS:en, lagg till en av dessa i din `<head>`:

```html
<!-- jsDelivr -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">

<!-- unpkg -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">
```

For maximal integritet, kopiera **SRI-hashen** fran v1.1.7-releasenoterna
och lagg till ett `integrity="sha384-…"`-attribut.

### Alternativa CDN-platser

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css` | Ja | Ja |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css` | Ja | Nej |

### Ladda ner GitHub-releasen

Foredrar du en versionerad tarball? Hamta den senaste releasen fran
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
och lagg innehallet i `dist/` direkt i ditt projekt.

### Klona GitHub-repot

Klona huvudrepot for att fa alla kallfiler inklusive byggskripten:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **Tips:** signera dina commits — projektet kraver signerade commits i CI.
> Anvand `git commit -S -m "..."` (eller satt `commit.gpgsign = true` i din
> globala git-konfiguration).

## 2. Anvand den kompilerade CSS:en

Biblioteket levererar flera forbyggda paket under
`dist/css/` efter installation:

| Fil | Syfte | Storlek (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | Reset + tokens + layout + element + komponenter + utilities | 45,7 KB / 8,3 KB |
| `animations/skeletonic-animations.min.css` | Valfri animationsmodul | ≈213 KB / ≈6.9 KB |
| `palettes/material/skeletonic-material.min.css` | Material-fargpalett | ≈17.4 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Tachyons utility-palett | 7,3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | Webbsaker palett | ≈3.5 KB |

Varje modul ar oberoende — valj den minsta kombinationen du behover.

## 3. Anvand det fran Stylus

Om du redan har en Stylus-pipeline kan du importera kallmodulerna
och lata din bundler tree-shaka oanvanda delar:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

Eller importera bara de delar du behover:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. Overskriv markesfargerna

Skeletonic exponerar sina design-tokens som **CSS custom properties** sa
att du kan tematisera utan att kompilera om Stylus:

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

Det ar allt — varje komponent som anvander primarfargen foljer med.

## 5. Verifiera installationen

En minimal "fungerar det?"-kontroll:

```html
<!doctype html>
<html lang="sv">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>Det fungerar.</h1>
    <a href="#" class="button primary">Hej, varlden</a>
  </body>
</html>
```

Om rubriken ar flytande storleksanpassad och knappen har en bla pillform
ar du klar.

## 6. Vad som ingar

Inuti paketet hittar du varje kallfil, de kompilerade och
minifierade CSS-paketen, source maps och ett komplett Stylus-trad
organiserat efter kategori:

```text
@sebastienrousseau/skeletonic-stylus@1.1.7
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
        └── skeletonic.styl  ← enkel import som drar in allt
```

Varje modul ar oberoende — ta bara med de paket du behover for att
halla din CSS-payload sa liten som mojligt.

## Vanliga fragor

**Hur installerar jag Skeletonic Stylus?**
Kor `pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7`. Eller ladda den
kompilerade CSS:en direkt fran ett CDN — inget byggsteg kravs.

**Kraver det JavaScript?**
Nej. Karn-stylesheetet ar ren CSS, utan nagra runtimekostnader. Komponenter
fungerar utan en enda rad JS.

**Ar det WCAG 2.2-klart?**
Ja. v1.1.7 levererar AA-uppfyllande kontrast, focus-visible-ringar,
skip-link-hjalp, stod for reducerad rorelse och morkt lage som standard.

**Vad ar den gzippade storleken?**
45,7&nbsp;KB minifierad, **8,3&nbsp;KB gzippad**, 6,9&nbsp;KB brotli for
det fullstandiga karn-stylesheetet. Taket pa 8&nbsp;KB tillapas i CI.

**Vilken licens anvands?**
Dubbellicensierad under MIT och Apache 2.0 — valj den som passar ditt
projekt. Gratis for kommersiellt och personligt bruk.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Hur installerar jag Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kor pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7. Eller ladda den kompilerade CSS:en direkt fran ett CDN — inget byggsteg kravs."
      }
    },
    {
      "@type": "Question",
      "name": "Kraver Skeletonic Stylus JavaScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nej. Karn-stylesheetet ar ren CSS, utan nagra runtimekostnader. Komponenter fungerar utan en enda rad JavaScript."
      }
    },
    {
      "@type": "Question",
      "name": "Ar Skeletonic Stylus WCAG 2.2-klart?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. v1.1.7 levererar AA-uppfyllande kontrast, focus-visible-ringar, skip-link-hjalp, stod for reducerad rorelse och morkt lage som standard."
      }
    },
    {
      "@type": "Question",
      "name": "Vad ar den gzippade storleken pa Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "45,7 KB minifierad, 8,3 KB gzippad, 6,9 KB brotli for det fullstandiga karn-stylesheetet. Taket pa 8 KB tillapas i CI vid varje commit."
      }
    },
    {
      "@type": "Question",
      "name": "Vilken licens anvander Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dubbellicensierad under MIT och Apache 2.0 — valj den som passar ditt projekt. Gratis for kommersiellt och personligt bruk."
      }
    }
  ]
}
</script>

[Utforska komponenterna →](/sv/komponenter/)
