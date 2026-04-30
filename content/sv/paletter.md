---
title: "Paletter"
name: "Skeletonic Stylus"
description: "Material-, Tachyons- och webbsakra fargpaletter som levereras med Skeletonic Stylus v1.1.7."
layout: page
permalink: https://skeletonic.io/sv/paletter/
date: 2026-04-08
author: Sebastien Rousseau
language: sv
theme_color: "hsl(210, 100%, 42%)"
keywords: "css palett, material, tachyons, webbsaker, design tokens"
---

Skeletonic Stylus v1.1.7 levererar **tre valfria fargpaletter**, var och en
distribuerad som sitt eget minifierade stylesheet sa att du bara betalar for
det du anvander.

| Palett | Fil | Storlek (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | ≈17.4 KB |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7,3 KB |
| Webbsaker | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | ≈3.5 KB |

Denna sida laddar **Tachyons**-paletten sa att farg-utility-klasserna
nedan renderas korrekt.

<hr class="hr-text" data-content="Graskalor">

## Skeletonics grundgraskalor

Karn-stylesheetet levererar en tillganglig 11-stegs graskala exponerad som
`--cl-grey-100` ... `--cl-grey-1000`.

<div class="row">
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-100);">
    100
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-300);">
    300
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-500); color: #fff;">
    500
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-700); color: #fff;">
    700
  </div>
</div>

<div class="row">
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-200);">
    200
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-400);">
    400
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-600); color: #fff;">
    600
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-900); color: #fff;">
    900
  </div>
</div>

<hr class="hr-text" data-content="Markesfarger">

## Markesfarger (v1.1.7 — AA-kontrast)

I v1.1.7 morkades de primara och sekundara token for att uppna
**WCAG 4.5:1**-kontrast mot vit text direkt.

<div class="row margin-top-3">
  <div class="flex-4 padding-3 text-center" style="background-color: hsl(210, 100%, 42%); color: #fff;">
    <strong>--cl-primary</strong><br>hsl(210 100% 42%)
  </div>
  <div class="flex-4 padding-3 text-center" style="background-color: hsl(195, 100%, 33%); color: #fff;">
    <strong>--cl-secondary</strong><br>hsl(195 100% 33%)
  </div>
  <div class="flex-4 padding-3 text-center" style="background-color: #757c8a; color: #fff;">
    <strong>--cl-tertiary</strong><br>#757c8a
  </div>
</div>

> **Observera.** `--cl-tertiary` (#757c8a) uppnar ett kontrastforhallande pa 4.71:1
> mot vitt — AA-godkant for **stor text** (minst 18 px fet /
> minst 24 px normal) men inte for brodtext. Kombinera den med morkare
> bakgrunder eller anvand den enbart for dekorativa, icke-vasentliga element.

<hr class="hr-text" data-content="Tachyons">

## Tachyons palett-utilityklasser

Nar du laddar `skeletonic-tachyons.min.css` far du en komplett uppsattning
av fargklasser med ett enda syfte — samma levererade artefakt, opt-in-modul.

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

Den fullstandiga Tachyons-palettspecifikationen ar dokumenterad pa
[tachyons.io/docs/themes/skins](https://tachyons.io/docs/themes/skins/);
versionen som levereras har ar den som Skeletonic kompilerar.

[Tillbaka till komponenter →](/sv/komponenter/)
