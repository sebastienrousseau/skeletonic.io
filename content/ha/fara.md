---
title: "Fara da Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Shigar da Skeletonic Stylus daga npm ko CDN, shigo da shi cikin gindin Stylus ɗin ku, kuma soke masu canji a cikin daƙiƙu."
layout: page
permalink: https://skeletonic.io/ha/fara/
date: 2026-04-08
author: Sebastien Rousseau
language: ha
theme_color: "hsl(210, 100%, 42%)"
keywords: "shigar da skeletonic, saita stylus, css cdn, fara"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## Gabatarwa

Sabon zuwa Skeletonic Stylus? A cikin **v2.0.0** ya fi sauƙi fiye da kowane lokaci don zaɓar abubuwan da kuke buƙata kawai. Godiya ga ƙaramin sawun sa (7.9&nbsp;KB gzipped don stylesheet na tushe), yana haɗuwa da sauri cikin kowace manhajan yanar gizo — babu buƙatar tsarin JavaScript, babu buƙatar matakin gini idan kuna amfani da CDN.

Kowace hanya an bayyana ta a ƙasa — zaɓi wadda ta dace da ku.

## 1. Zazzagewa da shigarwa

Kuna iya shigar da Skeletonic Stylus ta hanyar **pnpm**, **npm** ko **yarn**, ko loda shi kai tsaye daga CDN. Kuna kuma iya saukar da fayilolin rarraba a cikin gida idan kun fi so.

### Daga mai sarrafa fakiti (abin da ake ba da shawarar)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0

# npm
npm install @sebastienrousseau/skeletonic-stylus@2.0.0

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@2.0.0
```

### Daga CDN

Idan kuna buƙatar CSS da aka tattara kawai, saka ɗaya daga cikin waɗannan a cikin `<head>` ɗinku:

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

Don mafi girman amincin kai, kwafa **SRI hash** daga bayanan sakin v2.0.0 kuma ƙara siffar `integrity="sha384-…"`.

### Wuraren CDN na daban

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css` | Eh | Eh |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css` | Eh | A'a |

### Zazzage sakin GitHub

Kuna son tarball mai sigar? Ɗauko sakin daga
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
kuma saka abubuwan da ke cikin `dist/` kai tsaye a cikin aikin ku.

### Kwafi ma'ajiyar GitHub

Kwafa babban ma'ajiyar don samun duk fayilolin tushe ciki har da rubutun gini:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **Shawara:** sanya hannu a kan commits ɗin ku — aikin yana tilasta commits da aka sanya hannu a CI.
> Yi amfani da `git commit -S -m "..."` (ko saita `commit.gpgsign = true` a cikin git config ɗin ku na duniya).

## 2. Yi amfani da CSS da aka tattara

Dakin karatu yana aika fakiti da yawa da aka riga aka gina a ƙarƙashin `dist/css/` bayan an shigar:

| Fayil | Amfani | Girma (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | Reset + tokens + layout + elements + components + utilities | 42.3 KB / 7.9 KB |
| `animations/skeletonic-animations.min.css` | Ƙarin module na motsin rai | ≈213 KB / ≈6.8 KB |
| `palettes/material/skeletonic-material.min.css` | Launukan Material | ≈17.4 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Launukan Tachyons | 7.3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | Launukan Web-safe | ≈3.5 KB |

Kowanne module yana da kansa — zaɓi mafi ƙarancin haɗin da kuke buƙata.

## 3. Yi amfani da shi daga Stylus

Idan kuna da bututun Stylus a riga, kuna iya shigo da modules na tushe kuma ku bar bundler ɗin ku ya cire ɓangarori marasa amfani:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

Ko shigo da ɓangarori kawai da kuke buƙata:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. Soke launin alama

Skeletonic yana bayyana alamomin ƙirar sa a matsayin **CSS custom properties** don haka kuna iya canza yanayin sa ba tare da sake tattara Stylus ba:

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

Wannan ke nan — kowane abun hadi da ke amfani da launin farko zai bi.

## 5. Tabbatar da shigarwar

Mafi ƙarancin binciken "shin ya yi aiki?":

```html
<!doctype html>
<html lang="ha">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>Ya yi aiki.</h1>
    <a href="#" class="button primary">Sannu, duniya</a>
  </body>
</html>
```

Idan kanun yana da girma mai sassaucin ra'ayi kuma maɓallin yana da siffar kore ta shuɗi, kun gama.

## 6. Abin da ke cikin sa

A cikin fakitin za ku sami kowanne fayil na tushe, fakitin CSS da aka tattara da ƙaranta, taswirorin tushe, da bishiyar Stylus cikakkiya da aka tsara ta nau'i:

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
        └── skeletonic.styl  ← shigo guda ɗaya da ke jawo komai
```

Kowanne module yana da kansa — jawo fakitin da kuke buƙata kawai don rage nauyin CSS ɗin ku kamar yadda zai yiwu.

## Tambayoyin da ake yawan yi

**Ta yaya zan shigar da Skeletonic Stylus?**
Gudanar da `pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0`. Ko loda CSS da aka tattara kai tsaye daga CDN — babu buƙatar matakin gini.

**Shin yana buƙatar JavaScript?**
A'a. Stylesheet na tushe CSS ce tsantsa, babu kuɗin lokacin aiki. Abubuwan hadi suna aiki ba tare da layi guda na JS ba.

**Shin yana shirye don WCAG 2.2?**
Eh. v2.0.0 yana aika bambancin AA, zoben focus-visible, taimakon skip-link, tallafin rage motsi da yanayin dare ta tsoho.

**Mene ne girman gzipped?**
42.3&nbsp;KB da aka ƙaranta, **7.9&nbsp;KB gzipped**, 6.8&nbsp;KB brotli don dukan stylesheet na tushe. An tilasta iyakar 8&nbsp;KB a CI.

**Wane lasisi yake amfani da shi?**
An ba da lasisin biyu a ƙarƙashin MIT da Apache 2.0 — zaɓi wanda aikin ku ke buƙata. Kyauta don amfanin kasuwanci da na sirri.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Ta yaya zan shigar da Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gudanar da pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0. Ko loda CSS da aka tattara kai tsaye daga CDN — babu buƙatar matakin gini."
      }
    },
    {
      "@type": "Question",
      "name": "Shin Skeletonic Stylus yana buƙatar JavaScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A'a. Stylesheet na tushe CSS ce tsantsa, babu kuɗin lokacin aiki. Abubuwan hadi suna aiki ba tare da layi guda na JavaScript ba."
      }
    },
    {
      "@type": "Question",
      "name": "Shin Skeletonic Stylus yana shirye don WCAG 2.2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eh. v2.0.0 yana aika bambancin AA, zoben focus-visible, taimakon skip-link, tallafin rage motsi da yanayin dare ta tsoho."
      }
    },
    {
      "@type": "Question",
      "name": "Mene ne girman gzipped na Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "42.3 KB da aka ƙaranta, 7.9 KB gzipped, 6.8 KB brotli don dukan stylesheet na tushe. An tilasta iyakar 8 KB a CI a kan kowanne commit."
      }
    },
    {
      "@type": "Question",
      "name": "Wane lasisi Skeletonic Stylus ke amfani da shi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An ba da lasisin biyu a ƙarƙashin MIT da Apache 2.0 — zaɓi wanda aikin ku ke buƙata. Kyauta don amfanin kasuwanci da na sirri."
      }
    }
  ]
}
</script>

[Duba abubuwan hadi →](/ha/abubuwan-hadi/)
