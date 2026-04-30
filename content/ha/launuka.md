---
title: "Launuka"
name: "Skeletonic Stylus"
description: "Tsarin launuka na Material, Tachyons da web-safe da Skeletonic Stylus v1.1.7 ke aikawa."
layout: page
permalink: https://skeletonic.io/ha/launuka/
date: 2026-04-08
author: Sebastien Rousseau
language: ha
theme_color: "hsl(210, 100%, 42%)"
keywords: "tsarin launuka na css, material, tachyons, websafe, alamomin ƙira"
---

Skeletonic Stylus v1.1.7 yana aika **tsarin launuka guda uku na zaɓi**, kowanne an rarraba shi azaman stylesheet ɗin sa da aka ƙaranta don haka kuna biyan abin da kuke amfani da shi kawai.

| Launuka | Fayil | Girma (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | ≈17.4 KB |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7.3 KB |
| Web-safe | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | ≈3.5 KB |

Wannan shafin yana loda tsarin launuka na **Tachyons** don haka azuzuwan amfanin launuka da ke ƙasa su nuna daidai.

<hr class="hr-text" data-content="Launukan toka">

## Launukan toka na Skeletonic

Stylesheet na tushe yana zuwa da matakan toka 11 masu saukin amfani da aka bayyana azaman `--cl-grey-100` … `--cl-grey-1000`.

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

<hr class="hr-text" data-content="Alama">

## Launukan alama (v1.1.7 — bambancin AA)

A cikin v1.1.7 an duhunta alamomin farko da na biyu don cika **bambancin WCAG 4.5:1** akan farin rubutu daga cikin akwatin.

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

> **Lura.** `--cl-tertiary` (#757c8a) yana cimma rabon bambanci na
> 4.71:1 a kan fari — ya dace da AA don **babban rubutu** (≥ 18 px mai
> kauri / ≥ 24 px na al'ada) amma ba don rubutun jiki ba. Haɗa shi da
> bango masu duhu ko yi amfani da shi kawai don abubuwan ado marasa
> muhimmanci.

<hr class="hr-text" data-content="Tachyons">

## Azuzuwan amfanin launukan Tachyons

Lokacin da kuka loda `skeletonic-tachyons.min.css` kuna samun cikakken saitin azuzuwan launuka masu manufa guda — an aika da shi a matsayin module na zaɓi.

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

An rubuta cikakken ƙayyadaddun tsarin launuka na Tachyons a
[tachyons.io/docs/themes/skins](https://tachyons.io/docs/themes/skins/);
sigar da aka aika a nan ita ce wadda Skeletonic ke tattarawa.

[Komawa abubuwan hadi →](/ha/abubuwan-hadi/)
