---
title: "Palety — Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Barevne palety Material, Tachyons a web-safe dodavane ve Skeletonic Stylus v2.0.0."
layout: page
permalink: https://skeletonic.io/cs/palety/
date: 2026-04-08
author: Sebastien Rousseau
language: cs
theme_color: "hsl(210, 100%, 42%)"
keywords: "css paleta, material, tachyons, websafe, navrhove tokeny"
---

Skeletonic Stylus v2.0.0 dodava **tri volitelne barevne palety**, kazda
distribuovana jako vlastni minifikovany stylesheet, takze platite pouze za
to, co pouzivate.

| Paleta | Soubor | Velikost (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | ≈17.4 KB |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7,3 KB |
| Web-safe | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | ≈3.5 KB |

Tato stranka nacita paletu **Tachyons**, aby se nize uvedene barevne
utilitni tridy vykreslily spravne.

<hr class="hr-text" data-content="Sede tony">

## Zakladni sede tony Skeletonic

Zakladni stylesheet dodava pristupnou 11krokovou stupnici sedych tonu
zpristupnenou jako `--cl-grey-100` … `--cl-grey-1000`.

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

<hr class="hr-text" data-content="Znackove barvy">

## Znackove barvy (v2.0.0 — AA kontrast)

Ve v2.0.0 byly primarni a sekundarni tokeny ztmaveny, aby splnovaly
**WCAG 4,5:1** kontrast vuci bilemu textu hned po instalaci.

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

> **Poznamka.** `--cl-tertiary` (#757c8a) dosahuje kontrastniho pomeru
> 4.71:1 vuci bile — vyhovuje AA pro **velky text** (≥ 18 px tucne /
> ≥ 24 px bezne), ale ne pro zakladni text. Kombinujte jej s tmavsimi
> pozadimi nebo jej pouzijte pouze pro neesencialni dekorativni prvky.

<hr class="hr-text" data-content="Tachyons">

## Utilitni tridy palety Tachyons

Po nacteni `skeletonic-tachyons.min.css` ziskate kompletni sadu
jednoúcelovych barevnych trid — stejny dodany artefakt, volitelny modul.

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

Kompletni specifikace palety Tachyons je zdokumentovana na
[tachyons.io/docs/themes/skins](https://tachyons.io/docs/themes/skins/);
verze zde dodana je ta, kterou Skeletonic kompiluje.

[Zpet ke komponentam →](/cs/komponenty/)
