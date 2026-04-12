---
title: "פלטות"
name: "Skeletonic Stylus"
description: "פלטות צבעים של Material, Tachyons ו-web-safe הנשלחות עם Skeletonic Stylus v1.1.7."
layout: page
permalink: https://skeletonic.io/he/paleta/
date: 2026-04-08
author: Sebastien Rousseau
language: he
theme_color: "hsl(210, 100%, 42%)"
keywords: "פלטת css, material, tachyons, websafe, טוקני עיצוב"
---

Skeletonic Stylus v1.1.7 מגיעה עם **שלוש פלטות צבעים אופציונליות**,
כל אחת מופצת כגיליון סגנונות ממוזער נפרד כך שאתם משלמים רק על מה
שאתם משתמשים.

| פלטה | קובץ | גודל (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | כ-8 KB |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7.3 KB |
| Web-safe | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | כ-4 KB |

דף זה טוען את פלטת **Tachyons** כך שמחלקות שירות הצבע למטה
מוצגות כראוי.

<hr class="hr-text" data-content="אפורים">

## אפורי ליבה של Skeletonic

גיליון הסגנונות הליבתי מגיע עם סולם אפור נגיש בן 11 שלבים, חשוף
כ-`--cl-grey-100` עד `--cl-grey-1000`.

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

<hr class="hr-text" data-content="מותג">

## צבעי מותג (v1.1.7 — ניגודיות AA)

ב-v1.1.7 טוקני הראשי והמשני הוכהו כדי לעמוד ביחס ניגודיות
**WCAG 4.5:1** מול טקסט לבן ישירות מהקופסה.

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

> **הערה.** `--cl-tertiary` (#757c8a) משיג יחס ניגודיות של 4.71:1
> מול לבן — עומד בדרישות AA עבור **טקסט גדול** (≥ 18 px מודגש /
> ≥ 24 px רגיל) אך לא עבור טקסט גוף. שלבו אותו עם רקעים כהים יותר
> או השתמשו בו רק לאלמנטים דקורטיביים לא חיוניים.

<hr class="hr-text" data-content="Tachyons">

## מחלקות שירות של פלטת Tachyons

כשאתם טוענים את `skeletonic-tachyons.min.css` אתם מקבלים סט מלא של
מחלקות צבע חד-תכליתיות — אותו ארטיפקט נשלח, מודול הצטרפות.

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

מפרט פלטת Tachyons המלא מתועד ב-
[tachyons.io/docs/themes/colors](https://tachyons.io/docs/themes/colors/);
הגרסה הנשלחת כאן היא זו ש-Skeletonic מהדרת.

[חזרה לרכיבים &larr;](/he/rekhivim/)
