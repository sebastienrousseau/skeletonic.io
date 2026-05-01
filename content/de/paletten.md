---
title: "Farbpaletten"
name: "Skeletonic Stylus"
description: "Material-, Tachyons- und websichere Farbpaletten in Skeletonic Stylus v2.0.0."
layout: page
language: de
permalink: https://skeletonic.io/de/paletten/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "css palette, material, tachyons, websafe, design tokens"
---

Skeletonic Stylus v2.0.0 liefert **drei optionale Farbpaletten**, jeweils
als eigenständiges, minifiziertes Stylesheet verteilt — so zahlen Sie nur
für das, was Sie tatsächlich verwenden.

| Palette | Datei | Größe (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | ≈17.4 KB |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7,3 KB |
| Websicher | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | ≈3.5 KB |

Diese Seite lädt die **Tachyons**-Palette, damit die unten gezeigten
Farb-Utility-Klassen korrekt dargestellt werden.

<hr class="hr-text" data-content="Grautöne">

## Skeletonic-Kerngrautöne

Das Kern-Stylesheet enthält eine barrierefreie 11-stufige Grauskala,
bereitgestellt als `--cl-grey-100` … `--cl-grey-1000`.

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

<hr class="hr-text" data-content="Marke">

## Markenfarben (v2.0.0 — AA-Kontrast)

In v2.0.0 wurden die primären und sekundären Farbtokens abgedunkelt, um
den **WCAG-Kontrast von 4,5:1** gegenüber weißem Text standardmäßig
zu erfüllen.

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

> **Hinweis.** `--cl-tertiary` (#757c8a) erreicht ein Kontrastverhältnis
> von 4.71:1 gegen Weiss — AA-konform für **grossen Text** (≥ 18 px fett /
> ≥ 24 px normal), aber nicht für Fliesstext. Kombinieren Sie ihn mit
> dunkleren Hintergründen oder verwenden Sie ihn nur für nicht
> wesentliche dekorative Elemente.

<hr class="hr-text" data-content="Tachyons">

## Tachyons-Palette — Utility-Klassen

Wenn Sie `skeletonic-tachyons.min.css` laden, erhalten Sie einen
vollständigen Satz zweckgebundener Farbklassen — dasselbe ausgelieferte
Artefakt, als optionales Modul.

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

Die vollständige Tachyons-Palettenspezifikation finden Sie unter
[tachyons.io/docs/themes/skins](https://tachyons.io/docs/themes/skins/);
die hier ausgelieferte Version ist diejenige, die Skeletonic kompiliert.

[Zurück zu Komponenten →](/de/komponenten/)
