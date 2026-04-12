---
title: "Palette"
name: "Skeletonic Stylus"
description: "Palette di colori Material, Tachyons e web-safe incluse in Skeletonic Stylus v1.1.7."
layout: page
permalink: https://skeletonic.io/it/palette/
date: 2026-04-08
author: Sebastien Rousseau
language: it
theme_color: "hsl(210, 100%, 42%)"
keywords: "palette css, material, tachyons, websafe, design token"
---

Skeletonic Stylus v1.1.7 include **tre palette di colori opzionali**, ognuna distribuita come foglio di stile minificato separato cosi paghi solo quello che usi.

| Palette | File | Dimensione (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | ≈17.4 KB |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7,3 KB |
| Web-safe | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | ≈3.5 KB |

Questa pagina carica la palette **Tachyons** cosi le classi utility per i colori qui sotto vengono renderizzate correttamente.

<hr class="hr-text" data-content="Grigi">

## Scala di grigi di Skeletonic

Il foglio di stile principale include una scala di grigi accessibile a 11 livelli esposta come `--cl-grey-100` ... `--cl-grey-1000`.

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

## Colori del brand (v1.1.7 — contrasto AA)

Nella v1.1.7 i token primario e secondario sono stati scuriti per soddisfare il **rapporto di contrasto WCAG 4,5:1** contro il testo bianco fin da subito.

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

> **Nota.** `--cl-tertiary` (#757c8a) raggiunge un rapporto di contrasto
> di 4.71:1 rispetto al bianco — conforme AA per **testo grande**
> (≥ 18 px grassetto / ≥ 24 px normale) ma non per il testo del corpo.
> Abbinalo a sfondi piu scuri o usalo solo per elementi decorativi non
> essenziali.

<hr class="hr-text" data-content="Tachyons">

## Classi utility della palette Tachyons

Quando carichi `skeletonic-tachyons.min.css` ottieni un set completo di classi colore a scopo singolo — stesso artefatto distribuito, modulo opt-in.

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

La specifica completa della palette Tachyons e documentata su
[tachyons.io/docs/themes/colors](https://tachyons.io/docs/themes/colors/);
la versione qui inclusa e quella compilata da Skeletonic.

[Torna ai componenti →](/it/componenti/)
