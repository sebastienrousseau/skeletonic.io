---
title: "Primii pași cu Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Instalează Skeletonic Stylus din npm sau CDN, importă-l în pipeline-ul tău Stylus și suprascrie variabilele în câteva secunde."
layout: page
permalink: https://skeletonic.io/ro/primii-pasi/
date: 2026-04-08
author: Sebastien Rousseau
language: ro
theme_color: "hsl(210, 100%, 42%)"
keywords: "instalare skeletonic, configurare stylus, css cdn, primii pași"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## Introducere

Nou cu Skeletonic Stylus? În **v2.0.0** este mai ușor ca niciodată să
alegi doar funcționalitățile de care ai nevoie. Datorită amprentei
minuscule (8,3&nbsp;KB gzipped pentru stylesheet-ul principal), se
integrează rapid în orice aplicație web — fără framework JavaScript,
fără pas de build dacă folosești CDN-ul.

Fiecare cale este descrisă mai jos — alege-o pe cea potrivită.

## 1. Descarcă și instalează

Poți instala Skeletonic Stylus prin **pnpm**, **npm** sau **yarn**, ori
îl poți încărca direct de pe un CDN. De asemenea, poți găzdui local
fișierele de distribuție.

### Dintr-un manager de pachete (recomandat)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0

# npm
npm install @sebastienrousseau/skeletonic-stylus@2.0.0

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@2.0.0
```

### De pe un CDN

Dacă ai nevoie doar de CSS-ul compilat, adaugă una din aceste linii în `<head>`:

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

Pentru integritate maximă, copiază **hash-ul SRI** din notele de lansare v2.0.0 și adaugă un atribut `integrity="sha384-…"`.

### Locații CDN alternative

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css` | Da | Da |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css` | Da | Nu |

### Descarcă versiunea de pe GitHub

Preferi un tarball versionat? Descarcă ultima versiune de pe
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
și copiază conținutul directorului `dist/` direct în proiectul tău.

### Clonează depozitul GitHub

Clonează depozitul principal pentru a obține toate fișierele sursă, inclusiv scripturile de build:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **Sfat:** semnează-ți commit-urile — proiectul impune commit-uri semnate în CI.
> Folosește `git commit -S -m "..."` (sau setează `commit.gpgsign = true` în
> configurația globală git).

## 2. Folosește CSS-ul compilat

Biblioteca furnizează mai multe bundle-uri pre-compilate sub
`dist/css/` după instalare:

| Fișier | Scop | Dimensiune (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | Reset + tokens + layout + elemente + componente + utilitare | 45,7 KB / 8,3 KB |
| `animations/skeletonic-animations.min.css` | Modul opțional de animații | ≈213 KB / ≈6.7 KB |
| `palettes/material/skeletonic-material.min.css` | Paleta de culori Material | ≈17.4 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Paleta utilitară Tachyons | 7,3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | Paleta web-safe | ≈3.5 KB |

Fiecare modul este independent — alege combinația minimă de care ai nevoie.

## 3. Folosește-l din Stylus

Dacă ai deja un pipeline Stylus, poți importa modulele sursă și lăsa bundler-ul să elimine părțile neutilizate:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

Sau importă doar ceea ce ai nevoie:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. Suprascrie culoarea principală

Skeletonic expune token-urile de design ca **proprietăți CSS personalizate**, astfel încât poți personaliza tema fără a recompila Stylus:

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

Atât — fiecare componentă care folosește culoarea primară va prelua modificarea.

## 5. Verifică instalarea

O verificare minimă „a funcționat?":

```html
<!doctype html>
<html lang="ro">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>Funcționează.</h1>
    <a href="#" class="button primary">Salut, lume</a>
  </body>
</html>
```

Dacă titlul este dimensionat fluid și butonul are o formă albastră de pastilă, ai terminat.

## 6. Ce este inclus

În interiorul pachetului vei găsi toate fișierele sursă, bundle-urile CSS compilate și minificate, source maps și un arbore Stylus complet organizat pe categorii:

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
        └── skeletonic.styl  ← import unic care include totul
```

Fiecare modul este independent — include doar bundle-urile de care ai nevoie pentru a menține CSS-ul livrat cât mai mic posibil.

## Întrebări frecvente

**Cum instalez Skeletonic Stylus?**
Rulează `pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0`. Sau încarcă CSS-ul compilat direct de pe un CDN — fără pas de build necesar.

**Necesită JavaScript?**
Nu. Stylesheet-ul principal este CSS pur, cu zero costuri la runtime. Componentele funcționează fără o singură linie de JS.

**Este compatibil WCAG 2.2?**
Da. v2.0.0 include contrast AA conform, inele focus-visible, helpere skip-link, suport pentru mișcare redusă și mod întunecat implicit.

**Care este dimensiunea gzipped?**
45,7&nbsp;KB minificat, **8,3&nbsp;KB gzipped**, 6,9&nbsp;KB brotli pentru stylesheet-ul principal complet. Limita de 8&nbsp;KB este impusă în CI.

**Ce licență folosește?**
Licență duală sub MIT și Apache 2.0 — alege pe cea potrivită proiectului tău. Gratuit pentru uz comercial și personal.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Cum instalez Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rulează pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0. Sau încarcă CSS-ul compilat direct de pe un CDN — fără pas de build necesar."
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus necesită JavaScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nu. Stylesheet-ul principal este CSS pur, cu zero costuri la runtime. Componentele funcționează fără o singură linie de JavaScript."
      }
    },
    {
      "@type": "Question",
      "name": "Este Skeletonic Stylus compatibil WCAG 2.2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Da. v2.0.0 include contrast AA conform, inele focus-visible, helpere skip-link, suport pentru mișcare redusă și mod întunecat implicit."
      }
    },
    {
      "@type": "Question",
      "name": "Care este dimensiunea gzipped a Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "45,7 KB minificat, 8,3 KB gzipped, 6,9 KB brotli pentru stylesheet-ul principal complet. Limita de 8 KB este impusă în CI la fiecare commit."
      }
    },
    {
      "@type": "Question",
      "name": "Ce licență folosește Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Licență duală sub MIT și Apache 2.0 — alege pe cea potrivită proiectului tău. Gratuit pentru uz comercial și personal."
      }
    }
  ]
}
</script>

[Explorează componentele →](/ro/componente/)
