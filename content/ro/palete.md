---
title: "Palete"
name: "Skeletonic Stylus"
description: "Paletele de culori Material, Tachyons și web-safe livrate cu Skeletonic Stylus v2.0.0."
layout: page
permalink: https://skeletonic.io/ro/palete/
date: 2026-04-08
author: Sebastien Rousseau
language: ro
theme_color: "hsl(210, 100%, 42%)"
keywords: "paletă css, material, tachyons, websafe, token-uri de design"
---

Skeletonic Stylus v2.0.0 livrează **trei palete de culori opționale**,
fiecare distribuită ca propriul stylesheet minificat, astfel încât plătești
doar pentru ceea ce folosești.

| Paletă | Fișier | Dimensiune (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | ≈17.4 KB |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7,3 KB |
| Web-safe | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | ≈3.5 KB |

Această pagină încarcă paleta **Tachyons**, astfel încât clasele utilitare
de culoare de mai jos se afișează corect.

<hr class="hr-text" data-content="Griuri">

## Griurile de bază Skeletonic

Stylesheet-ul principal livrează o scală de gri accesibilă în 11 trepte,
expusă ca `--cl-grey-100` … `--cl-grey-1000`.

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

<hr class="hr-text" data-content="Brand">

## Culorile de brand (v2.0.0 — contrast AA)

În v2.0.0 token-urile primary și secondary au fost întunecate pentru a
atinge un **contrast WCAG de 4,5:1** pe text alb, din start.

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

> **Notă.** `--cl-tertiary` (#757c8a) atinge un raport de contrast de
> 4.71:1 față de alb — conform AA pentru **text mare** (≥ 18 px bold /
> ≥ 24 px regular), dar nu pentru textul de corp. Combină-l cu fundal
> mai închis sau folosește-l doar pentru elemente decorative
> neesențiale.

<hr class="hr-text" data-content="Tachyons">

## Clase utilitare ale paletei Tachyons

Când încarci `skeletonic-tachyons.min.css` primești un set complet de
clase de culoare cu scop unic — același artefact livrat, modul opt-in.

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

Specificația completă a paletei Tachyons este documentată la
[tachyons.io/docs/themes/skins](https://tachyons.io/docs/themes/skins/);
versiunea livrată aici este cea compilată de Skeletonic.

[Înapoi la componente →](/ro/componente/)
