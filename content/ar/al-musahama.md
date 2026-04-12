---
title: "المساهمة"
name: "Skeletonic Stylus"
description: "كيفية تقديم المشكلات واقتراح التغييرات وإرسال طلبات السحب إلى Skeletonic Stylus."
layout: page
permalink: https://skeletonic.io/ar/al-musahama/
date: 2026-04-08
author: Sebastien Rousseau
language: ar
theme_color: "hsl(210, 100%, 42%)"
keywords: "المساهمة, مفتوح المصدر, طلب سحب, مشكلة, اتفاقيات"
---

Skeletonic Stylus هو مشروع مفتوح المصدر؛ نرحب بالمساهمات من جميع
الأحجام — من إصلاحات الأخطاء المطبعية إلى المكوّنات الجديدة.

<hr class="hr-text" data-content="بداية سريعة">

## بداية سريعة

```bash
# 1. انسخ واستنسخ
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. التثبيت (pnpm via corepack)
corepack enable
pnpm install

# 3. البناء
pnpm run build           # خط الأنابيب الكامل (stylus → prettier → stylelint → autoprefixer → csso)

# 4. الفحص والاختبار
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="الاتفاقيات">

## الاتفاقيات

- **أسماء الفروع:** `feat/short-thing`، `fix/short-thing`، `docs/short-thing`.
- **الالتزامات:** [التزامات تقليدية](https://www.conventionalcommits.org).
  جميع الالتزامات موقّعة.
- **Stylus:** مسافة بادئة من 4 مسافات، بدون فواصل منقوطة، يُفضّل استخدام
  `$variables` بدلًا من الأرقام السحرية، كل فئة عامة تعيش في طبقة تسلسل.
- **إمكانية الوصول:** أي مكوّن جديد يجب أن يلبي بشكل واضح WCAG 2.2 AA؛
  شغّل `node scripts/a11y-test.mjs` على صفحة العرض قبل فتح طلب سحب.
- **ميزانية الحجم:** يجب أن تبقى ورقة الأنماط الأساسية تحت **8 كيلوبايت مضغوط**.
  إذا تجاوز تغييرك هذا الحد، برّره في طلب السحب.

<hr class="hr-text" data-content="طلبات السحب">

## طلبات السحب

1. افتح مشكلة أولًا لأي تغيير غير بسيط — يوفّر إعادة العمل.
2. اجعل طلبات السحب مركّزة: تغيير منطقي واحد لكل طلب سحب.
3. حدّث `CHANGELOG.md` تحت "غير مُصدر".
4. تأكد أن CI أخضر قبل طلب المراجعة.
5. الدمج بالضغط هو الافتراضي؛ سيتم تنظيف رسائل الالتزام عند الدمج.

<hr class="hr-text" data-content="مدونة السلوك">

## مدونة السلوك

بمشاركتك، توافق على الالتزام بـ
[ميثاق المساهم 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
كن لطيفًا، كن صبورًا، افترض حسن النية.

[افتح مشكلة ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[افتح طلب سحب ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
