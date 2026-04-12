---
title: "سجل التغييرات"
name: "Skeletonic Stylus"
description: "ملاحظات الإصدار لـ Skeletonic Stylus، مع الإصدار 1.1.7 بالكامل."
layout: page
permalink: https://skeletonic.io/ar/sijil-al-taghyirat/
author: Sebastien Rousseau
language: ar
theme_color: "hsl(210, 100%, 42%)"
keywords: "سجل تغييرات skeletonic, ملاحظات الإصدار, v1.1.7, semver"
---

## الإصدار 1.1.7 — 2026-04 (الحالي)

مرحلة "جاهزية الإصدار": إمكانية الوصول، سلسلة التوريد، نظافة المستودع.

### إمكانية الوصول (WCAG 2.2)
- **تم تغميق `$primary`** إلى `hsl(210, 100%, 42%)` لتباين AA
  مقابل النص الأبيض في الأزرار / الشارات / الروابط.
- **تم تغميق `$secondary`** إلى `hsl(195, 100%, 33%)`.
- أُضيفت حلقات **focus-visible** على كل عنصر تفاعلي.
- أُضيف غلاف **`@media (prefers-reduced-motion)`** حول وحدة الحركات.
- أُضيف تبديل رموز **`prefers-color-scheme: dark`**.
- أُضيفت خلطة **target-size(24px)** لتلبية WCAG 2.2 SC 2.5.8.
- أُضيفت مساعدات **focus-not-obscured** لهوامش التمرير للترويسات الثابتة.

### البناء وسلسلة التوريد
- **طبقات التسلسل** — كل كتلة الآن في
  `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}`.
- **قائمة مواد CycloneDX** تُولّد كجزء من حزمة npm.
- **ميزانيات `size-limit`** تُفرض في CI: حد أقصى 8 كيلوبايت مضغوط
  لورقة الأنماط الأساسية.
- **CVE-2023-44270** (سطر الإرجاع في postcss) مرقّعة عبر `pnpm.overrides`.
- المصدر + التوقيع في سير عمل نشر npm
  (`--provenance --access public`).
- أُزيل ملحق `stylelint-a11y` المؤرشف من تكوين الفحص.

### نظافة المستودع وحزمة المستهلك
- أُزيل مجلد `package/` القديم؛ `dist/` هو الآن المصدر الوحيد
  للحقيقة للمستهلكين.
- أُعيدت كتابة README لتعكس مسارات التثبيت في الإصدار 1.1.7.
- `dist/` محفوظ في git؛ `debug/` يُولّد ويُتجاهل.
- سير عمل `.github/workflows/npm-publish.yml` الجديد يعتمد على الوسوم.

### إصلاحات أخطاء (P0)
- **تراجع محدد `row $:after`** — استُبدل `$` الضال بـ `&`
  في `src/stylus/components/_grid.styl`.
- **`.alternate`** كان يطبّق خطأً `animation-direction: reverse`
  بدلًا من `alternate`.
- **تسمية `.alert-*`** — `.alert.success` ← `.alert.alert-success`
  لتجنب التعارض مع فئات الحالة.

[ملاحظات إصدار v1.1.7 الكاملة على GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases/tag/v1.1.7)

<hr class="hr-text" data-content="التاريخ">

## الإصدارات السابقة

- **v1.1.6** — تنظيف داخلي، ترقية التبعيات.
- **v1.1.5** — أُضيفت لوحة ألوان Material.
- **v1.1.0** — لوحة Tachyons + إعادة هيكلة الشبكة.
- **v1.0.5** — آخر إصدار "قديم" قبل مسح WCAG 2.2.
- **v1.0.0** — الإصدار العام الأول (2018).

للتاريخ التزامًا بالتزام انظر
[صفحة إصدارات GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases).
