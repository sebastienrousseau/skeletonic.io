---
title: "Bẹrẹ pẹlu Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Fi Skeletonic Stylus sori ẹrọ lati npm tabi CDN, mu u wọle sinu ikọ Stylus rẹ, ki o si ṣe atunṣe awọn oniyipada ni iṣẹju-aaya."
language: yo
layout: page
permalink: https://skeletonic.io/yo/bere-nibi/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "fi skeletonic sori ẹrọ, iṣeto stylus, css cdn, bẹrẹ nibi"
---

## Ifihan

Ṣe o tuntun si Skeletonic Stylus? Ninu **v1.1.7** o rọrun ju ti tẹlẹ
lọ lati yan awọn ẹya ti o nilo nikan. O ṣeun si iwọn kekere rẹ
(~7.5&nbsp;KB gzipped fun iwe-aṣa akọkọ), o darapọ mọ ohun elo wẹẹbu
eyikeyi ni kiakia — ko si ilana JavaScript ti a beere, ko si igbesẹ ikọ
ti a nilo ti o ba lo CDN.

Ṣe o setan lati fi sori ẹrọ? Gbogbo ọna ni a ṣe alaye ni isalẹ — yan eyi ti o ba ọ mu.

## 1. Gba silẹ ki o si fi sori ẹrọ

O le fi Skeletonic Stylus sori ẹrọ nipasẹ **pnpm**, **npm** tabi
**yarn**, tabi gba a taara lati CDN. O tun le gbalejo awọn faili
pinpin ni agbegbe ti o ba fẹ.

### Lati oluṣakoso package (ti a ṣe iṣeduro)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7

# npm
npm install @sebastienrousseau/skeletonic-stylus@1.1.7

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@1.1.7
```

### Lati CDN

Ti o ba nilo CSS ti a ṣajọ nikan, fi ọkan ninu iwọnyi sinu `<head>` rẹ:

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

Fun iduroṣinṣin ti o pọ julọ, daakọ **SRI hash** lati awọn akọsilẹ itusilẹ
v1.1.7 ki o fi ẹya `integrity="sha384-…"` kun.

### Awọn ipo CDN miiran

| CDN | URL | HTTPS | Apapọ |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css` | Bẹẹni | Bẹẹni |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css` | Bẹẹni | Rara |

### Gba itusilẹ GitHub

Ṣe o fẹ tarball ti a ṣe ẹya? Gba itusilẹ tuntun lati
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
ki o fi awọn akoonu `dist/` taara sinu iṣẹ-akanṣe rẹ.

### Ṣe daakọ ibi-ipamọ GitHub

Ṣe daakọ ibi-ipamọ akọkọ lati gba gbogbo awọn faili orisun pẹlu awọn
iwe afọwọkọ ikọ:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **Imọran:** fọwọsi awọn adehun rẹ — iṣẹ-akanṣe naa fi ipa mu awọn adehun ti a fọwọsi ninu CI.
> Lo `git commit -S -m "..."` (tabi ṣeto `commit.gpgsign = true` ninu git config gbogbogbo rẹ).

## 2. Lo CSS ti a ṣajọ

Ile-ikawe naa fi ọpọlọpọ awọn akopọ ti a ti kọ tẹlẹ ranṣẹ labẹ
`dist/css/` lẹhin ifisori ẹrọ:

| Faili | Idi | Iwọn (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | Atunṣeto + awọn ami + eto + awọn ẹya + awọn paati + awọn iwulo | 39.9 KB / 7.5 KB |
| `animations/skeletonic-animations.min.css` | Modulu ere idasọnu yan | ≈213 KB / ≈6.9 KB |
| `palettes/material/skeletonic-material.min.css` | Palẹti awọ Material | ≈17.4 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Palẹti iwulo Tachyons | 7.3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | Palẹti aabo wẹẹbu | ≈3.5 KB |

Modulu kọọkan jẹ ominira — yan apapọ ti o kere julọ ti o nilo.

## 3. Lo o lati Stylus

Ti o ba ni opo Stylus tẹlẹ, o le mu awọn modulu orisun wọle ki o jẹ
ki bundler rẹ yọ awọn apakan ti a ko lo kuro:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

Tabi mu awọn apakan ti o nilo nikan wọle:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. Ṣe atunṣe awọ ami iyasọtọ

Skeletonic ṣafihan awọn ami apẹrẹ rẹ bi **awọn ohun-ini aṣa CSS**
nitorinaa o le ṣe aṣa rẹ laisi atunṣe Stylus:

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

Iyẹn ni — gbogbo paati ti o lo awọ akọkọ yoo tẹle.

## 5. Ṣe idaniloju ifisori ẹrọ

Ayẹwo "ṣe o ṣiṣẹ?" ti o kere julọ:

```html
<!doctype html>
<html lang="yo">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>O n ṣiṣẹ.</h1>
    <a href="#" class="button primary">Pẹlẹ o, agbaye</a>
  </body>
</html>
```

Ti akọle ba ti ni iwọn ni irọrun ti bọtini si ni apẹrẹ egbogi buluu,
o ti pari.

## 6. Ohun ti o wa ninu

Ninu package naa iwọ yoo ri gbogbo faili orisun, awọn akopọ CSS ti a
ṣajọ ati ti a dinku, awọn maapu orisun, ati igi Stylus kan ti a ṣeto
nipasẹ ẹka:

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
        ├── base/            atunṣeto, awọn oluranlọwọ
        ├── components/      kaadi, akọle, navbar, itaniji
        ├── configurations/  awọn awọ, awọn oniyipada
        ├── elements/        bọtini, fọọmu, tabili, ọna asopọ, atokọ, koodu…
        ├── fonts/           awọn ikede font-face
        ├── layout/          apoti, grid, media-queries
        ├── palettes/        material, tachyons, websafe
        ├── utilities/       awọn adalu
        └── skeletonic.styl  ← agbewọle kan ti o fa ohun gbogbo
```

Modulu kọọkan jẹ ominira — fa awọn akopọ ti o nilo nikan lati jẹ ki
aṣẹ CSS rẹ kere bi o ti ṣee.

## Awọn ibeere ti a ma n beere nigbagbogbo

**Bawo ni MO ṣe le fi Skeletonic Stylus sori ẹrọ?**
Ṣiṣẹ `pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7`. Tabi gba
CSS ti a ṣajọ taara lati CDN — ko si igbesẹ ikọ ti a beere.

**Ṣe o nilo JavaScript?**
Rara. Iwe-aṣa akọkọ jẹ CSS mimọ, pẹlu iye owo iṣiṣẹ odo. Awọn paati
ṣiṣẹ laisi ila JS kan.

**Ṣe o setan fun WCAG 2.2?**
Bẹẹni. v1.1.7 fi iyatọ ti o ni ibamu AA, awọn oruka focus-visible,
awọn oluranlọwọ skip-link, atilẹyin idinku-iṣipopada ati ipo dudu
nipasẹ aiyipada ranṣẹ.

**Kini iwọn gzipped?**
39.9&nbsp;KB minified, **~7.5&nbsp;KB gzipped**, ~6.3&nbsp;KB brotli fun
iwe-aṣa akọkọ ni kikun. Opin 8&nbsp;KB ni a fi ipa mu ninu CI.

**Kini iwe-aṣẹ ti o lo?**
Ti a fun ni iwe-aṣẹ meji labẹ MIT ati Apache 2.0 — yan eyikeyi ti
iṣẹ-akanṣe rẹ nilo. Ọfẹ fun lilo iṣowo ati ti ara ẹni.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Bawo ni MO ṣe le fi Skeletonic Stylus sori ẹrọ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ṣiṣẹ pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7. Tabi gba CSS ti a ṣajọ taara lati CDN — ko si igbesẹ ikọ ti a beere."
      }
    },
    {
      "@type": "Question",
      "name": "Ṣe Skeletonic Stylus nilo JavaScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rara. Iwe-aṣa akọkọ jẹ CSS mimọ, pẹlu iye owo iṣiṣẹ odo. Awọn paati ṣiṣẹ laisi ila JavaScript kan."
      }
    },
    {
      "@type": "Question",
      "name": "Ṣe Skeletonic Stylus setan fun WCAG 2.2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bẹẹni. v1.1.7 fi iyatọ ti o ni ibamu AA, awọn oruka focus-visible, awọn oluranlọwọ skip-link, atilẹyin idinku-iṣipopada ati ipo dudu nipasẹ aiyipada ranṣẹ."
      }
    },
    {
      "@type": "Question",
      "name": "Kini iwọn gzipped ti Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "39.9 KB minified, ~7.5 KB gzipped, ~6.3 KB brotli fun iwe-aṣa akọkọ ni kikun. Opin 8 KB ni a fi ipa mu ninu CI lori gbogbo adehun."
      }
    },
    {
      "@type": "Question",
      "name": "Kini iwe-aṣẹ ti Skeletonic Stylus lo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ti a fun ni iwe-aṣẹ meji labẹ MIT ati Apache 2.0 — yan eyikeyi ti iṣẹ-akanṣe rẹ nilo. Ọfẹ fun lilo iṣowo ati ti ara ẹni."
      }
    }
  ]
}
</script>

[Ṣawari awọn paati →](/yo/awon-paati/)
