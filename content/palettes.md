---
title: "Palettes"
name: "Skeletonic Stylus"
description: "Material, Tachyons and web-safe colour palettes shipped inside Skeletonic Stylus v1.1.7."
layout: page
permalink: https://skeletonic.io/palettes/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "css palette, material, tachyons, websafe, design tokens"
---

Skeletonic Stylus v1.1.7 ships **three optional colour palettes**, each
distributed as its own minified stylesheet so you only pay for what you
use.

| Palette | File | Size (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | ≈17.4 KB |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7.3 KB |
| Web-safe | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | ≈3.5 KB |

This page is loading the **Tachyons** palette so the colour utility
classes below render correctly.

<hr class="hr-text" data-content="Greys">

## Skeletonic core greys

The core stylesheet ships an accessible 11-step grey scale exposed as
`--cl-grey-100` … `--cl-grey-1000`.

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

## Brand colours (v1.1.7 — AA contrast)

In v1.1.7 the primary and secondary tokens were darkened to meet
**WCAG 4.5:1** contrast against white text out of the box.

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

> **Note.** `--cl-tertiary` (#757c8a) achieves a 4.71:1 contrast ratio
> against white — AA-conformant for **large text** (≥ 18 px bold /
> ≥ 24 px regular) but not for body text. Pair it with darker
> backgrounds or use it only for non-essential decorative elements.

<hr class="hr-text" data-content="Tachyons">

## Tachyons palette utility classes

When you load `skeletonic-tachyons.min.css` you get a full set of
single-purpose colour classes — same shipped artefact, opt-in module.

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

The full Tachyons palette spec is documented at
[tachyons.io/docs/themes/colors](https://tachyons.io/docs/themes/colors/);
the version shipped here is the one Skeletonic compiles.

[Back to components →](/components/)
