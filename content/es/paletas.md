---
title: "Paletas"
name: "Skeletonic Stylus"
description: "Paletas de colores Material, Tachyons y web-safe incluidas en Skeletonic Stylus v1.1.7."
layout: page
permalink: https://skeletonic.io/es/paletas/
date: 2026-04-08
author: Sebastien Rousseau
language: es
theme_color: "hsl(210, 100%, 42%)"
keywords: "paleta css, material, tachyons, websafe, design tokens"
---

Skeletonic Stylus v1.1.7 incluye **tres paletas de colores opcionales**,
cada una distribuida como su propia hoja de estilos minificada para que
solo pagues por lo que usas.

| Paleta | Archivo | Tamano (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | ≈17.4 KB |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7,3 KB |
| Web-safe | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | ≈3.5 KB |

Esta pagina carga la paleta **Tachyons** para que las clases de utilidad
de color a continuacion se rendericen correctamente.

<hr class="hr-text" data-content="Grises">

## Grises del nucleo Skeletonic

La hoja de estilos principal incluye una escala de grises accesible de
11 pasos expuesta como `--cl-grey-100` … `--cl-grey-1000`.

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

<hr class="hr-text" data-content="Marca">

## Colores de marca (v1.1.7 — contraste AA)

En v1.1.7 los tokens primario y secundario se oscurecieron para cumplir
con un **contraste WCAG 4,5:1** contra texto blanco desde el primer momento.

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

> **Nota.** `--cl-tertiary` (#757c8a) alcanza una relacion de contraste
> de 4.71:1 sobre blanco — conforme con AA para **texto grande**
> (≥ 18 px negrita / ≥ 24 px normal) pero no para texto de cuerpo.
> Combinalo con fondos mas oscuros o usalo solo para elementos
> decorativos no esenciales.

<hr class="hr-text" data-content="Tachyons">

## Clases de utilidad de la paleta Tachyons

Al cargar `skeletonic-tachyons.min.css` obtienes un conjunto completo de
clases de color de proposito unico — mismo artefacto publicado, modulo
de activacion opcional.

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

La especificacion completa de la paleta Tachyons esta documentada en
[tachyons.io/docs/themes/colors](https://tachyons.io/docs/themes/colors/);
la version publicada aqui es la que Skeletonic compila.

[Volver a componentes →](/es/componentes/)
