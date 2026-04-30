---
title: "Palety"
name: "Skeletonic Stylus"
description: "Palety kolorow Material, Tachyons i web-safe dostarczane w Skeletonic Stylus v1.1.7."
layout: page
permalink: https://skeletonic.io/pl/palety/
date: 2026-04-08
author: Sebastien Rousseau
language: pl
theme_color: "hsl(210, 100%, 42%)"
keywords: "paleta css, material, tachyons, websafe, tokeny projektowe"
---

Skeletonic Stylus v1.1.7 dostarcza **trzy opcjonalne palety kolorow**, kazda dystrybuowana jako oddzielny zminifikowany arkusz stylow, wiec placisz tylko za to, czego uzywasz.

| Paleta | Plik | Rozmiar (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | ~8 KB |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7,3 KB |
| Web-safe | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | ~4 KB |

Ta strona laduje palete **Tachyons**, dzieki czemu klasy narzedzi kolorow ponizej renderuja sie poprawnie.

<hr class="hr-text" data-content="Szarosci">

## Podstawowe szarosci Skeletonic

Glowny arkusz stylow dostarcza dostepna 11-stopniowa skale szarosci udostepniona jako `--cl-grey-100` … `--cl-grey-1000`.

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

<hr class="hr-text" data-content="Marka">

## Kolory marki (v1.1.7 — kontrast AA)

W v1.1.7 tokeny primary i secondary zostaly przyciemnione, aby spelniac wymaganie kontrastu **WCAG 4,5:1** na bialym tekscie od razu po instalacji.

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

> **Uwaga.** `--cl-tertiary` (#757c8a) osiaga wspolczynnik kontrastu
> 4.71:1 wzgledem bieli — zgodny z AA dla **duzego tekstu**
> (≥ 18 px pogrubiony / ≥ 24 px zwykly), ale nie dla tekstu glownego.
> Lacz go z ciemniejszymi tlami lub uzywaj wylacznie do nieistotnych
> elementow dekoracyjnych.

<hr class="hr-text" data-content="Tachyons">

## Klasy narzedzi palety Tachyons

Po zaladowaniu `skeletonic-tachyons.min.css` otrzymujesz pelny zestaw jednofunkcyjnych klas kolorow — ten sam dostarczany artefakt, modul opt-in.

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

Pelna specyfikacja palety Tachyons jest udokumentowana na
[tachyons.io/docs/themes/skins](https://tachyons.io/docs/themes/skins/);
wersja dostarczana tutaj jest ta kompilowana przez Skeletonic.

[Powrot do komponentow →](/pl/komponenty/)
