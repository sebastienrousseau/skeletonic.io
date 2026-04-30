---
title: "Pagsisimula sa Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "I-install ang Skeletonic Stylus mula sa npm o CDN, i-import ito sa iyong Stylus build, at i-override ang mga variable sa ilang segundo."
layout: page
permalink: https://skeletonic.io/fil/pagsisimula/
date: 2026-04-08
author: Sebastien Rousseau
language: fil
theme_color: "hsl(210, 100%, 42%)"
keywords: "install skeletonic, stylus setup, css cdn, pagsisimula"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## Panimula

Bago ka sa Skeletonic Stylus? Sa **v1.1.7** mas madali na kaysa dati ang pumili ng mga tampok na kailangan mo lamang. Dahil sa maliit na footprint nito (8.3&nbsp;KB gzipped para sa core stylesheet), mabilis itong nag-integrate sa anumang web app — hindi kailangan ng JavaScript framework, hindi kailangan ng build step kung gagamitin mo ang CDN.

Bawat paraan ay nakadokumento sa ibaba — piliin ang naaangkop sa iyo.

## 1. I-download at i-install

Maaari mong i-install ang Skeletonic Stylus sa pamamagitan ng **pnpm**, **npm** o **yarn**, o i-load ito nang diretso mula sa isang CDN. Maaari mo ring i-self-host ang mga distribution file nang lokal kung gusto mo.

### Mula sa isang package manager (inirerekomenda)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7

# npm
npm install @sebastienrousseau/skeletonic-stylus@1.1.7

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@1.1.7
```

### Mula sa isang CDN

Kung kailangan mo lang ang compiled CSS, i-drop ang isa sa mga ito sa iyong `<head>`:

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

Para sa pinakamataas na integridad, kopyahin ang **SRI hash** mula sa v1.1.7 release notes at idagdag ang isang `integrity="sha384-…"` na attribute.

### Alternatibong CDN na lokasyon

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css` | Oo | Oo |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css` | Oo | Hindi |

### I-download ang GitHub release

Mas gusto mo ang versioned na tarball? Kunin ang pinakabagong release mula sa
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
at i-drop ang laman ng `dist/` nang diretso sa iyong proyekto.

### I-clone ang GitHub repository

I-clone ang pangunahing repository upang makuha ang lahat ng source file kasama ang mga build script:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **Tip:** lagdaan ang iyong mga commit — ipinatutupad ng proyekto ang signed commit sa CI.
> Gamitin ang `git commit -S -m "..."` (o itakda ang `commit.gpgsign = true` sa iyong
> global git config).

## 2. Gamitin ang compiled CSS

Nagpapadala ang library ng ilang pre-built na bundle sa ilalim ng
`dist/css/` kapag na-install:

| File | Layunin | Laki (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | Reset + token + layout + element + component + utility | 45.7 KB / 8.3 KB |
| `animations/skeletonic-animations.min.css` | Opsyonal na module ng animasyon | ≈213 KB / ≈6.9 KB |
| `palettes/material/skeletonic-material.min.css` | Material na colour palette | ≈17.4 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Tachyons utility palette | 7.3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | Web-safe na palette | ≈3.5 KB |

Independiyente ang bawat module — piliin ang pinakamaliit na kombinasyon na kailangan mo.

## 3. Gamitin ito mula sa Stylus

Kung mayroon ka nang Stylus pipeline, maaari mong i-import ang mga source module at hayaan ang iyong bundler na mag-tree-shake ng mga hindi ginagamit na bahagi:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

O i-import lang ang mga bahaging kailangan mo:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. I-override ang brand na kulay

Inilalantad ng Skeletonic ang mga design token nito bilang **CSS custom property** kaya maaari mo itong i-theme nang hindi nire-recompile ang Stylus:

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

Iyon lang — susundin ng bawat component na gumagamit ng pangunahing kulay.

## 5. I-verify ang pag-install

Isang simpleng "gumana ba?" na pagsusuri:

```html
<!doctype html>
<html lang="fil">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>Gumagana na.</h1>
    <a href="#" class="button primary">Kumusta, mundo</a>
  </body>
</html>
```

Kung ang heading ay naka-size nang fluid at ang button ay may asul na pill shape, tapos ka na.

## 6. Ano ang kasama

Sa loob ng package ay makikita mo ang bawat source file, ang compiled at minified na CSS bundle, source map, at isang buong Stylus tree na nakaayos ayon sa kategorya:

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
        ├── base/            reset, helper
        ├── components/      card, header, navbar, alert
        ├── configurations/  color, variable
        ├── elements/        button, form, table, link, list, code…
        ├── fonts/           font-face declaration
        ├── layout/          container, grid, media-query
        ├── palettes/        material, tachyons, websafe
        ├── utilities/       mixin
        └── skeletonic.styl  ← isang import na kumukuha ng lahat
```

Independiyente ang bawat module — i-pull in lang ang mga bundle na kailangan mo upang mapanatiling maliit ang iyong CSS payload.

## Mga madalas itanong

**Paano ko i-install ang Skeletonic Stylus?**
Patakbuhin ang `pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7`. O i-load ang compiled CSS nang diretso mula sa isang CDN — hindi kailangan ng build step.

**Kailangan ba nito ang JavaScript?**
Hindi. Ang core stylesheet ay purong CSS, na walang runtime cost. Gumagana ang mga component nang walang kahit isang linya ng JS.

**Handa ba ito sa WCAG 2.2?**
Oo. Nagpapadala ang v1.1.7 ng AA-conformant na contrast, focus-visible ring, skip-link helper, reduced-motion support at dark mode bilang default.

**Ano ang laki nito kapag gzipped?**
45.7&nbsp;KB minified, **8.3&nbsp;KB gzipped**, 6.9&nbsp;KB brotli para sa buong core stylesheet. Ang 8&nbsp;KB na limitasyon ay ipinatutupad sa CI.

**Anong lisensya ang ginagamit nito?**
Dual-licensed sa ilalim ng MIT at Apache 2.0 — piliin ang kailangan ng iyong proyekto. Libre para sa komersyal at personal na paggamit.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Paano ko i-install ang Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Patakbuhin ang pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7. O i-load ang compiled CSS nang diretso mula sa isang CDN — hindi kailangan ng build step."
      }
    },
    {
      "@type": "Question",
      "name": "Kailangan ba ng Skeletonic Stylus ang JavaScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hindi. Ang core stylesheet ay purong CSS, na walang runtime cost. Gumagana ang mga component nang walang kahit isang linya ng JavaScript."
      }
    },
    {
      "@type": "Question",
      "name": "Handa ba ang Skeletonic Stylus sa WCAG 2.2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oo. Nagpapadala ang v1.1.7 ng AA-conformant na contrast, focus-visible ring, skip-link helper, reduced-motion support at dark mode bilang default."
      }
    },
    {
      "@type": "Question",
      "name": "Ano ang laki ng Skeletonic Stylus kapag gzipped?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "45.7 KB minified, 8.3 KB gzipped, 6.9 KB brotli para sa buong core stylesheet. Ang 8 KB na limitasyon ay ipinatutupad sa CI sa bawat commit."
      }
    },
    {
      "@type": "Question",
      "name": "Anong lisensya ang ginagamit ng Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dual-licensed sa ilalim ng MIT at Apache 2.0 — piliin ang kailangan ng iyong proyekto. Libre para sa komersyal at personal na paggamit."
      }
    }
  ]
}
</script>

[Tingnan ang mga bahagi →](/fil/mga-bahagi/)
