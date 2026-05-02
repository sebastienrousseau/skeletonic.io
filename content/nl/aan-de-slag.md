---
title: "Aan de slag met Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Installeer Skeletonic Stylus via npm of een CDN, importeer het in je Stylus-build en overschrijf variabelen in seconden."
layout: page
permalink: https://skeletonic.io/nl/aan-de-slag/
date: 2026-04-08
author: Sebastien Rousseau
language: nl
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic installeren, stylus setup, css cdn, aan de slag"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## Introductie

Nieuw bij Skeletonic Stylus? In **v2.0.0** is het eenvoudiger dan ooit om
precies de functies te kiezen die je nodig hebt. Dankzij de kleine
footprint (8,3&nbsp;KB gzipped voor het kernstylesheet) integreert het
snel in elke webapp — geen JavaScript-framework vereist, geen buildstap
nodig als je de CDN gebruikt.

Elk pad wordt hieronder behandeld — kies wat bij je past.

## 1. Downloaden en installeren

Je kunt Skeletonic Stylus installeren via **pnpm**, **npm** of **yarn**, of
het rechtstreeks laden vanaf een CDN. Je kunt de distributiebestanden ook
lokaal hosten als je dat liever hebt.

### Via een pakketbeheerder (aanbevolen)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0

# npm
npm install @sebastienrousseau/skeletonic-stylus@2.0.0

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@2.0.0
```

### Via een CDN

Als je alleen de gecompileerde CSS nodig hebt, voeg een van deze toe aan je `<head>`:

```html
<!-- jsDelivr -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css"
  crossorigin="anonymous">

<!-- unpkg -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css"
  crossorigin="anonymous">
```

Voor maximale integriteit kopieer je de **SRI-hash** uit de v2.0.0-releasenotities
en voeg je een `integrity="sha384-…"` attribuut toe.

### Alternatieve CDN-locaties

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css` | Ja | Ja |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css` | Ja | Nee |

### Download de GitHub-release

Liever een versie-tarball? Download de laatste release van
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
en plaats de inhoud van `dist/` rechtstreeks in je project.

### Kloon de GitHub-repository

Kloon de hoofdrepository om alle bronbestanden inclusief de buildscripts
te krijgen:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **Tip:** onderteken je commits — het project vereist ondertekende commits in CI.
> Gebruik `git commit -S -m "..."` (of stel `commit.gpgsign = true` in
> in je globale git-configuratie).

## 2. Gebruik de gecompileerde CSS

De bibliotheek levert meerdere voorgebouwde bundels onder
`dist/css/` na installatie:

| Bestand | Doel | Grootte (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | Reset + tokens + layout + elementen + componenten + utilities | 45,7 KB / 8,3 KB |
| `animations/skeletonic-animations.min.css` | Optionele animatiemodule | ≈213 KB / ≈6.8 KB |
| `palettes/material/skeletonic-material.min.css` | Material-kleurenpalet | ≈17.4 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Tachyons utility-palet | 7,3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | Webveilig palet | ≈3.5 KB |

Elke module is onafhankelijk — kies de kleinste combinatie die je nodig hebt.

## 3. Gebruik vanuit Stylus

Als je al een Stylus-pipeline hebt, kun je de bronmodules importeren
en je bundler de ongebruikte delen laten verwijderen:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

Of importeer alleen de onderdelen die je nodig hebt:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. Overschrijf de merkkleur

Skeletonic stelt zijn ontwerptokens beschikbaar als **CSS custom properties**
zodat je het kunt aanpassen zonder Stylus opnieuw te compileren:

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

Dat is alles — elke component die de primaire kleur gebruikt, volgt automatisch.

## 5. Controleer de installatie

Een minimale "werkt het?"-controle:

```html
<!doctype html>
<html lang="nl">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>Het werkt.</h1>
    <a href="#" class="button primary">Hallo, wereld</a>
  </body>
</html>
```

Als de kop vloeiend is geschaald en de knop een blauwe pilvorm heeft,
ben je klaar.

## 6. Wat zit erin

In het pakket vind je elk bronbestand, de gecompileerde en
geminificeerde CSS-bundels, source maps en een volledige Stylus-boom
georganiseerd per categorie:

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
        └── skeletonic.styl  ← enkele import die alles binnenhaalt
```

Elke module is onafhankelijk — haal alleen de bundels binnen die je nodig
hebt om je CSS-payload zo klein mogelijk te houden.

## Veelgestelde vragen

**Hoe installeer ik Skeletonic Stylus?**
Voer `pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0` uit. Of laad
de gecompileerde CSS rechtstreeks vanaf een CDN — geen buildstap vereist.

**Vereist het JavaScript?**
Nee. Het kernstylesheet is pure CSS, zonder runtime-kosten. Componenten
werken zonder een enkele regel JS.

**Is het WCAG 2.2 klaar?**
Ja. v2.0.0 levert AA-conform contrast, focus-visible-ringen,
skip-link-helpers, ondersteuning voor beperkte beweging en donkere modus standaard.

**Wat is de gzipped-grootte?**
45,7&nbsp;KB geminificeerd, **8,3&nbsp;KB gzipped**, 6,9&nbsp;KB brotli voor
het volledige kernstylesheet. Het 8&nbsp;KB-plafond wordt afgedwongen in CI.

**Welke licentie wordt gebruikt?**
Dubbel gelicentieerd onder MIT en Apache 2.0 — kies wat het beste bij je
project past. Gratis voor commercieel en persoonlijk gebruik.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Hoe installeer ik Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Voer pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0 uit. Of laad de gecompileerde CSS rechtstreeks vanaf een CDN — geen buildstap vereist."
      }
    },
    {
      "@type": "Question",
      "name": "Vereist Skeletonic Stylus JavaScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nee. Het kernstylesheet is pure CSS, zonder runtime-kosten. Componenten werken zonder een enkele regel JavaScript."
      }
    },
    {
      "@type": "Question",
      "name": "Is Skeletonic Stylus WCAG 2.2 klaar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. v2.0.0 levert AA-conform contrast, focus-visible-ringen, skip-link-helpers, ondersteuning voor beperkte beweging en donkere modus standaard."
      }
    },
    {
      "@type": "Question",
      "name": "Wat is de gzipped-grootte van Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "45,7 KB geminificeerd, 8,3 KB gzipped, 6,9 KB brotli voor het volledige kernstylesheet. Het 8 KB-plafond wordt afgedwongen in CI bij elke commit."
      }
    },
    {
      "@type": "Question",
      "name": "Welke licentie gebruikt Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dubbel gelicentieerd onder MIT en Apache 2.0 — kies wat het beste bij je project past. Gratis voor commercieel en persoonlijk gebruik."
      }
    }
  ]
}
</script>

[Bekijk de componenten →](/nl/componenten/)
