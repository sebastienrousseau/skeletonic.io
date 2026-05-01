---
title: "الأمان وسلسلة التوريد"
name: "Skeletonic Stylus"
description: "كيف يؤمّن Skeletonic Stylus الإصدار 2.0.0 خط أنابيب البناء، ويوقّع الإصدارات، ويشحن قائمة مواد البرمجيات."
layout: page
permalink: https://skeletonic.io/ar/al-aman/
date: 2026-04-08
author: Sebastien Rousseau
language: ar
theme_color: "hsl(210, 100%, 42%)"
keywords: "أمان css, sbom, cyclonedx, مصدر npm, openssf scorecard, سلسلة التوريد"
---

## الأداء

- **39.9&nbsp;كيلوبايت مصغّر · 7.5&nbsp;كيلوبايت مضغوط · 6.3&nbsp;كيلوبايت brotli** لورقة الأنماط الأساسية الكاملة.
- **بدون JavaScript** — Stylus خالص ← CSS خالص، بدون تكلفة تشغيل.
- **طبقات التسلسل** — التجاوزات تفوز بدون `!important`.
- **ميزانية `size-limit`** تُفرض في CI مع كل التزام.

الأداء هو ضابط أمني. كل بايت لا يُرسل هو بايت أقل للتدقيق والتوقيع والتحقق.

## ملخص سلسلة التوريد

| الضابط | حالة الإصدار 2.0.0 |
|---|---|
| **قائمة مواد CycloneDX** | تُولّد مع كل إصدار، محفوظة تحت `dist/sbom.json` |
| **مصدر npm** | مُفعّل (`--provenance --access public`) |
| **وسوم git موقّعة** | موقّعة بمفتاح SSH للمشرف |
| **Dependabot مثبّت** | ترقيات أسبوعية، مراجعة تلقائية |
| **ميزانيات الحجم** | `size-limit` حد أقصى 8 كيلوبايت مضغوط، يُفشل CI عند التراجع |
| **فحص** | `stylelint` + تأكيدات إمكانية الوصول مع كل دفع |
| **CodeQL** | مُفعّل لـ `javascript` وملفات التكوين |
| **CVE-2023-44270** | **مرقّع** عبر `pnpm.overrides` لتحديث `postcss@7` |

<hr class="hr-text" data-content="SBOM">

## قائمة مواد CycloneDX

كل حزمة tarball منشورة تتضمن قائمة مواد CycloneDX في `dist/sbom.json`.
يمكنك التحقق من حزمة مثبّتة حديثًا بـ:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "2.0.0"
```

تُولّد قائمة المواد بـ `cyclonedx-npm` أثناء سير عمل النشر.

<hr class="hr-text" data-content="المصدر">

## مصدر npm

الحزمة المنشورة موقّعة باستخدام
[مصدر حزمة npm](https://docs.npmjs.com/generating-provenance-statements).

يمكنك التحقق منها بعد التثبيت بـ:

```bash
npm view @sebastienrousseau/skeletonic-stylus@2.0.0 --json | \
  jq '.dist."npm-signature"'
```

التصديق الموقّع يربط حزمة tarball بتشغيل GitHub Actions الدقيق الذي أنتجها.

<hr class="hr-text" data-content="الثغرات">

## الثغرات المعروفة والترقيعات

| CVE | الخطورة | الحالة |
|---|---|---|
| **CVE-2023-44270** (تحليل سطر الإرجاع في postcss) | متوسطة | **مرقّعة** في الإصدار 2.0.0 عبر `pnpm.overrides` لترقية `postcss` إلى ≥ 8.4.31 |

تُراقَب قاعدة بيانات Snyk الاستشارية وتنبيهات أمان GitHub باستمرار؛
ترقيعات الأمان تُشحن كـ **إصدارات ترقيعية**.

<hr class="hr-text" data-content="الإبلاغ">

## الإبلاغ عن ثغرة

يرجى **عدم** فتح مشكلة عامة على GitHub للإبلاغ عن ثغرة أمنية.
بدلًا من ذلك، استخدم القناة الخاصة في:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

يتم الإقرار بالتقارير خلال **72 ساعة** ويُشحن الإصلاح خلال
**14 يومًا** للمشكلات المتوسطة، و**48 ساعة** للحرجة.

[العودة إلى الرئيسية →](/ar/) · [اقرأ سجل التغييرات →](/ar/sijil-al-taghyirat/)
