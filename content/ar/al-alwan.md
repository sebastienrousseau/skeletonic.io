---
title: "لوحات الألوان"
name: "Skeletonic Stylus"
description: "لوحات ألوان Material وTachyons والألوان الآمنة للويب المُشحونة مع Skeletonic Stylus الإصدار 1.1.7."
layout: page
permalink: https://skeletonic.io/ar/al-alwan/
date: 2026-04-08
author: Sebastien Rousseau
language: ar
theme_color: "hsl(210, 100%, 42%)"
keywords: "لوحة ألوان css, material, tachyons, websafe, رموز التصميم"
---

يشحن Skeletonic Stylus الإصدار 1.1.7 **ثلاث لوحات ألوان اختيارية**، كل
منها موزّعة كورقة أنماط مصغّرة خاصة بها حتى لا تدفع إلا ثمن ما تستخدمه.

| اللوحة | الملف | الحجم (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | ≈8 كيلوبايت |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7.3 كيلوبايت |
| الألوان الآمنة للويب | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | ≈4 كيلوبايت |

هذه الصفحة تحمّل لوحة **Tachyons** حتى تُعرض فئات الألوان المساعدة
أدناه بشكل صحيح.

<hr class="hr-text" data-content="الرمادي">

## تدرّج الرمادي الأساسي في Skeletonic

تشحن ورقة الأنماط الأساسية تدرّجًا رماديًا سهل الوصول من 11 مستوى
مكشوفًا كـ `--cl-grey-100` … `--cl-grey-1000`.

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

<hr class="hr-text" data-content="العلامة التجارية">

## ألوان العلامة التجارية (الإصدار 1.1.7 — تباين AA)

في الإصدار 1.1.7 تم تغميق رموز الأساسي والثانوي لتحقيق
**نسبة تباين WCAG بقيمة 4.5:1** مقابل النص الأبيض مباشرة.

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

> **ملاحظة.** `--cl-tertiary` (#757c8a) يحقق نسبة تباين 4.71:1
> على خلفية بيضاء — متوافق مع AA لـ **النص الكبير** (≥ 18 px غامق /
> ≥ 24 px عادي) لكن ليس لنص المتن. استخدمه مع خلفيات أغمق أو
> استخدمه فقط للعناصر الزخرفية غير الأساسية.

<hr class="hr-text" data-content="Tachyons">

## فئات أدوات لوحة Tachyons

عند تحميل `skeletonic-tachyons.min.css` تحصل على مجموعة كاملة من
فئات الألوان أحادية الغرض — نفس الأداة المُشحونة، وحدة اختيارية.

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

مواصفات لوحة Tachyons الكاملة موثّقة في
[tachyons.io/docs/themes/colors](https://tachyons.io/docs/themes/colors/);
والنسخة المُشحونة هنا هي تلك التي يجمّعها Skeletonic.

[العودة إلى المكوّنات →](/ar/al-mukawwinat/)
