---
title: "Paletas"
name: "Skeletonic Stylus"
description: "Paletas de cores Material, Tachyons e web-safe incluidas no Skeletonic Stylus v1.1.7."
layout: page
permalink: https://skeletonic.io/pt-br/paletas/
date: 2026-04-08
author: Sebastien Rousseau
language: pt-br
theme_color: "hsl(210, 100%, 42%)"
keywords: "paleta css, material, tachyons, websafe, design tokens"
---

O Skeletonic Stylus v1.1.7 inclui **tres paletas de cores opcionais**,
cada uma distribuida como sua propria folha de estilos minificada para
que voce pague apenas pelo que usar.

| Paleta | Arquivo | Tamanho (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | ≈17.4 KB |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7,3 KB |
| Web-safe | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | ≈3.5 KB |

Esta pagina carrega a paleta **Tachyons** para que as classes utilitarias
de cores abaixo sejam renderizadas corretamente.

<hr class="hr-text" data-content="Cinzas">

## Escala de cinzas do Skeletonic

A folha de estilos principal inclui uma escala de cinzas acessivel com
11 niveis, exposta como `--cl-grey-100` … `--cl-grey-1000`.

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

## Cores da marca (v1.1.7 — contraste AA)

Na v1.1.7, os tokens primario e secundario foram escurecidos para
atender ao **contraste WCAG 4.5:1** contra texto branco por padrao.

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

> **Nota.** `--cl-tertiary` (#757c8a) atinge uma relacao de contraste de
> 4.71:1 contra branco — em conformidade com AA para **texto grande**
> (≥ 18 px negrito / ≥ 24 px regular), mas nao para texto corrido.
> Combine com fundos mais escuros ou use apenas para elementos
> decorativos nao essenciais.

<hr class="hr-text" data-content="Tachyons">

## Classes utilitarias da paleta Tachyons

Ao carregar `skeletonic-tachyons.min.css`, voce obtem um conjunto
completo de classes de cores de proposito unico — mesmo artefato
distribuido, modulo opt-in.

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

A especificacao completa da paleta Tachyons esta documentada em
[tachyons.io/docs/themes/skins](https://tachyons.io/docs/themes/skins/);
a versao incluida aqui e a compilada pelo Skeletonic.

[Voltar para componentes →](/pt-br/componentes/)
