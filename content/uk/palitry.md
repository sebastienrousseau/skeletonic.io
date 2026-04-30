---
title: "Палітри"
name: "Skeletonic Stylus"
description: "Кольорові палітри Material, Tachyons та Web-safe, що постачаються зі Skeletonic Stylus v1.1.7."
layout: page
language: uk
permalink: https://skeletonic.io/uk/palitry/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "css палітра, material, tachyons, websafe, дизайн-токени"
---

Skeletonic Stylus v1.1.7 постачається з **трьома опціональними кольоровими
палітрами**, кожна з яких розповсюджується як окремий мініфікований файл
стилів, тож ви платите лише за те, що використовуєте.

| Палітра | Файл | Розмір (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | ≈8 КБ |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7,3 КБ |
| Web-safe | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | ≈4 КБ |

Ця сторінка завантажує палітру **Tachyons**, тож наведені нижче
утилітарні класи кольорів відображаються коректно.

<hr class="hr-text" data-content="Сірі тони">

## Базові сірі тони Skeletonic

Основна таблиця стилів постачає доступну 11-ступеневу шкалу сірих тонів,
доступну через `--cl-grey-100` … `--cl-grey-1000`.

<div class="row">
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-100);">
    100
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-300);">
    300
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-500);color:#fff;">
    500
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-700);color:#fff;">
    700
  </div>
</div>

<div class="row">
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-200);">
    200
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-400);">
    400
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-600);color:#fff;">
    600
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-900);color:#fff;">
    900
  </div>
</div>

<hr class="hr-text" data-content="Бренд">

## Фірмові кольори (v1.1.7 — контраст AA)

У v1.1.7 токени primary та secondary були затемнені для досягнення
контрасту **WCAG 4.5:1** відносно білого тексту із коробки.

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1rem;">
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:hsl(210,100%,42%);color:#fff;">
    <strong>--cl-primary</strong><br>hsl(210 100% 42%)
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:hsl(195,100%,33%);color:#fff;">
    <strong>--cl-secondary</strong><br>hsl(195 100% 33%)
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:#757c8a;color:#fff;">
    <strong>--cl-tertiary</strong><br>#757c8a
  </div>
</div>

> **Примітка.** `--cl-tertiary` (#757c8a) забезпечує коефіцієнт контрастності 4.71:1
> відносно білого — відповідає рівню AA для **великого тексту** (від 18 px жирний /
> від 24 px звичайний), але не для основного тексту. Використовуйте його на темних
> фонах або лише для ��екоративних елементів, що не несуть змістового навантаження.

<hr class="hr-text" data-content="Tachyons">

## Утилітарні класи палітри Tachyons

Коли ви підключаєте `skeletonic-tachyons.min.css`, ви отримуєте повний
набір однофункціональних кольорових класів — той самий артефакт збірки,
опціональний модуль.

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

Повна специфікація палітри Tachyons задокументована на
[tachyons.io/docs/themes/skins](https://tachyons.io/docs/themes/skins/);
тут представлена версія, яку компілює Skeletonic.

[Повернутися до компонентів →](/uk/komponenty/)
