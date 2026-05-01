---
title: "Paletten"
name: "Skeletonic Stylus"
description: "Material-, Tachyons- en webveilige kleurenpaletten geleverd in Skeletonic Stylus v2.0.0."
layout: page
permalink: https://skeletonic.io/nl/paletten/
date: 2026-04-08
author: Sebastien Rousseau
language: nl
theme_color: "hsl(210, 100%, 42%)"
keywords: "css palet, material, tachyons, websafe, ontwerptokens"
---

Skeletonic Stylus v2.0.0 levert **drie optionele kleurenpaletten**, elk
gedistribueerd als een eigen geminificeerd stylesheet zodat je alleen betaalt
voor wat je gebruikt.

| Palet | Bestand | Grootte (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | ≈17.4 KB |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7,3 KB |
| Webveilig | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | ≈3.5 KB |

Deze pagina laadt het **Tachyons**-palet zodat de kleur-utilityklassen
hieronder correct worden weergegeven.

<hr class="hr-text" data-content="Grijstinten">

## Skeletonic core-grijstinten

Het kernstylesheet levert een toegankelijke 11-staps grijsschaal, beschikbaar
als `--cl-grey-100` … `--cl-grey-1000`.

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

<hr class="hr-text" data-content="Merk">

## Merkkleuren (v2.0.0 — AA-contrast)

In v2.0.0 zijn de primaire en secundaire tokens donkerder gemaakt om
**WCAG 4.5:1** contrast tegen witte tekst standaard te halen.

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

> **Let op.** `--cl-tertiary` (#757c8a) behaalt een contrastverhouding
> van 4.71:1 ten opzichte van wit — AA-conform voor **grote tekst**
> (≥ 18 px vet / ≥ 24 px normaal) maar niet voor lopende tekst.
> Combineer het met donkerdere achtergronden of gebruik het alleen voor
> niet-essentiële decoratieve elementen.

<hr class="hr-text" data-content="Tachyons">

## Tachyons-palet utilityklassen

Wanneer je `skeletonic-tachyons.min.css` laadt, krijg je een volledige set
eendoels kleurklassen — hetzelfde geleverde artefact, opt-in-module.

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

De volledige Tachyons-paletspecificatie is gedocumenteerd op
[tachyons.io/docs/themes/skins](https://tachyons.io/docs/themes/skins/);
de hier geleverde versie is degene die Skeletonic compileert.

[Terug naar componenten →](/nl/componenten/)
