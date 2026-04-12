---
title: "Palettes"
name: "Skeletonic Stylus"
description: "Palettes de couleurs Material, Tachyons et web-safe livrées dans Skeletonic Stylus v1.1.7."
layout: page
permalink: https://skeletonic.io/fr/palettes/
date: 2026-04-08
author: Sebastien Rousseau
language: fr
theme_color: "hsl(210, 100%, 42%)"
keywords: "palette css, material, tachyons, websafe, design tokens"
---

Skeletonic Stylus v1.1.7 livre **trois palettes de couleurs optionnelles**,
chacune distribuée sous forme de feuille de style minifiée afin de ne
charger que le nécessaire.

| Palette | Fichier | Taille (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | ≈8 Ko |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7,3 Ko |
| Web-safe | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | ≈4 Ko |

Cette page charge la palette **Tachyons** pour que les classes utilitaires
de couleur ci-dessous s'affichent correctement.

<hr class="hr-text" data-content="Gris">

## Gamme de gris Skeletonic

La feuille de style principale propose une échelle de gris accessible en
11 nuances exposée via `--cl-grey-100` … `--cl-grey-1000`.

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

<hr class="hr-text" data-content="Marque">

## Couleurs de marque (v1.1.7 — contraste AA)

Dans la v1.1.7, les jetons primaire et secondaire ont été assombris
pour atteindre un **contraste WCAG 4,5:1** contre le texte blanc par
défaut.

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

> **Note.** `--cl-tertiary` (#757c8a) atteint un rapport de contraste de
> 4.71:1 sur fond blanc — conforme AA pour le **texte de grande taille**
> (≥ 18 px gras / ≥ 24 px normal) mais pas pour le corps de texte.
> Associez-le à des arrière-plans plus sombres ou utilisez-le uniquement
> pour des éléments décoratifs non essentiels.

<hr class="hr-text" data-content="Tachyons">

## Classes utilitaires de la palette Tachyons

En chargeant `skeletonic-tachyons.min.css`, vous obtenez un ensemble
complet de classes de couleur à usage unique — même artefact livré,
module optionnel.

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

La spécification complète de la palette Tachyons est documentée sur
[tachyons.io/docs/themes/colors](https://tachyons.io/docs/themes/colors/) ;
la version livrée ici est celle compilée par Skeletonic.

[Retour aux composants →](/fr/composants/)
