---
title: "Палитры"
name: "Skeletonic Stylus"
description: "Цветовые палитры Material, Tachyons и Web-safe, входящие в Skeletonic Stylus v2.0.0."
layout: page
permalink: https://skeletonic.io/ru/palitry/
date: 2026-04-08
author: Sebastien Rousseau
language: ru
theme_color: "hsl(210, 100%, 42%)"
keywords: "css палитра, material, tachyons, websafe, дизайн-токены"
---

Skeletonic Stylus v2.0.0 поставляется с **тремя опциональными цветовыми палитрами**, каждая из которых распространяется как отдельный минифицированный файл стилей — вы платите только за то, что используете.

| Палитра | Файл | Размер (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | ≈8 КБ |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7,3 КБ |
| Web-safe | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | ≈4 КБ |

На этой странице загружена палитра **Tachyons**, поэтому утилитарные классы цветов ниже отображаются корректно.

<hr class="hr-text" data-content="Серые тона">

## Базовые серые тона Skeletonic

Основной файл стилей содержит доступную 11-ступенчатую шкалу серого, доступную через `--cl-grey-100` … `--cl-grey-1000`.

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

<hr class="hr-text" data-content="Бренд">

## Фирменные цвета (v2.0.0 — контраст AA)

В v2.0.0 токены primary и secondary были затемнены для соответствия **WCAG 4.5:1** контраста на белом тексте прямо из коробки.

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

> **Примечание.** `--cl-tertiary` (#757c8a) обеспечивает коэффициент контрастности 4.71:1
> по отношению к белому — соответствует уровню AA для **крупного текста** (от 18 px жирный /
> от 24 px обычный), но не для основного текста. Используйте его на тёмном фоне
> или только для декоративных элементов, не несущих смысловой нагрузки.

<hr class="hr-text" data-content="Tachyons">

## Утилитарные классы палитры Tachyons

При загрузке `skeletonic-tachyons.min.css` вы получаете полный набор однозадачных цветовых классов — тот же поставляемый артефакт, опциональный модуль.

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

Полная спецификация палитры Tachyons описана на
[tachyons.io/docs/themes/skins](https://tachyons.io/docs/themes/skins/);
здесь представлена версия, компилируемая Skeletonic.

[Назад к компонентам →](/ru/komponenty/)
