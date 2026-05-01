---
title: "البدء مع Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "ثبّت Skeletonic Stylus من npm أو CDN، واستوردها في خط أنابيب Stylus الخاص بك، وعدّل المتغيرات في ثوانٍ."
layout: page
permalink: https://skeletonic.io/ar/al-bidaya/
date: 2026-04-08
author: Sebastien Rousseau
language: ar
theme_color: "hsl(210, 100%, 42%)"
keywords: "تثبيت skeletonic, إعداد stylus, css cdn, البدء"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## مقدمة

جديد على Skeletonic Stylus؟ في **الإصدار 2.0.0** أصبح من الأسهل من أي
وقت مضى اختيار الميزات التي تحتاجها فقط. بفضل حجمها الصغير (~7.5&nbsp;كيلوبايت
مضغوط لورقة الأنماط الأساسية)، تتكامل بسرعة مع أي تطبيق ويب
— لا يتطلب إطار عمل JavaScript، ولا خطوة بناء إذا استخدمت CDN.

كل طريقة موثّقة أدناه — اختر ما يناسبك.

## 1. التحميل والتثبيت

يمكنك تثبيت Skeletonic Stylus عبر **pnpm** أو **npm** أو **yarn**، أو
تحميلها مباشرة من CDN. يمكنك أيضًا استضافة ملفات التوزيع محليًا إذا كنت تفضل ذلك.

### من مدير الحزم (مُوصى به)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0

# npm
npm install @sebastienrousseau/skeletonic-stylus@2.0.0

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@2.0.0
```

### من CDN

إذا كنت تحتاج فقط إلى CSS المُجمّع، أضف أحد هذه الروابط في `<head>`:

```html
<!-- jsDelivr -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">

<!-- unpkg -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">
```

للحصول على أقصى سلامة، انسخ **تجزئة SRI** من ملاحظات إصدار v2.0.0
وأضف سمة `integrity="sha384-…"`.

### مواقع CDN بديلة

| CDN | الرابط | HTTPS | دمج |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css` | نعم | نعم |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css` | نعم | لا |

### تحميل إصدار GitHub

تفضّل ملف tarball مُرقّم؟ احصل على أحدث إصدار من
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
وضع محتويات `dist/` مباشرة في مشروعك.

### استنساخ مستودع GitHub

استنسخ المستودع الرئيسي للحصول على جميع ملفات المصدر بما في ذلك
نصوص البناء:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **نصيحة:** وقّع التزاماتك — المشروع يفرض التزامات موقّعة في CI.
> استخدم `git commit -S -m "..."` (أو اضبط `commit.gpgsign = true` في
> إعدادات git العامة).

## 2. استخدام CSS المُجمّع

تشحن المكتبة عدة حزم مبنية مسبقًا تحت
`dist/css/` بعد التثبيت:

| الملف | الغرض | الحجم (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | إعادة التعيين + الرموز + التخطيط + العناصر + المكوّنات + الأدوات المساعدة | 39.9 كيلوبايت / 7.5 كيلوبايت |
| `animations/skeletonic-animations.min.css` | وحدة الحركات الاختيارية | ≈18 كيلوبايت / ≈4 كيلوبايت |
| `palettes/material/skeletonic-material.min.css` | لوحة ألوان Material | ≈8 كيلوبايت |
| `palettes/tachyons/skeletonic-tachyons.min.css` | لوحة أدوات Tachyons | 7.3 كيلوبايت |
| `palettes/websafe/skeletonic-websafe.min.css` | لوحة الألوان الآمنة للويب | ≈4 كيلوبايت |

كل وحدة مستقلة — اختر أصغر تركيبة تحتاجها.

## 3. استخدامها من Stylus

إذا كان لديك خط أنابيب Stylus بالفعل، يمكنك استيراد وحدات المصدر
وترك المُجمّع يحذف الأجزاء غير المستخدمة:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

أو استورد فقط الأجزاء التي تحتاجها:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. تجاوز لون العلامة التجارية

يكشف Skeletonic رموز التصميم الخاصة به كـ **خصائص CSS مخصصة** حتى
تتمكن من تخصيص المظهر بدون إعادة تجميع Stylus:

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

هذا كل شيء — كل مكوّن يستخدم اللون الأساسي سيتبعه.

## 5. التحقق من التثبيت

فحص بسيط "هل نجح؟":

```html
<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>إنها تعمل.</h1>
    <a href="#" class="button primary">مرحبًا بالعالم</a>
  </body>
</html>
```

إذا كان العنوان بحجم مرن والزر على شكل حبة زرقاء، فقد انتهيت.

## 6. ما يتضمّنه

داخل الحزمة ستجد كل ملف مصدر، وحزم CSS المُجمّعة والمصغّرة،
وخرائط المصدر، وشجرة Stylus كاملة منظّمة حسب الفئة:

```text
@sebastienrousseau/skeletonic-stylus@2.0.0
├── CHANGELOG.md
├── LICENSE-APACHE
├── LICENSE-MIT
├── README.md
├── package.json
├── dist/
│   └── css/
│       ├── core/
│       │   ├── skeletonic.css
│       │   ├── skeletonic.css.map
│       │   └── skeletonic.min.css
│       ├── animations/
│       │   ├── skeletonic-animations.css
│       │   └── skeletonic-animations.min.css
│       └── palettes/
│           ├── material/skeletonic-material.min.css
│           ├── tachyons/skeletonic-tachyons.min.css
│           └── websafe/skeletonic-websafe.min.css
└── src/
    └── stylus/
        ├── animations/      bounce, fade, pulse, shake, vanish, zoom…
        ├── base/            reset, helpers
        ├── components/      card, header, navbar, alert
        ├── configurations/  colors, variables
        ├── elements/        button, form, table, link, list, code…
        ├── fonts/           font-face declarations
        ├── layout/          container, grid, media-queries
        ├── palettes/        material, tachyons, websafe
        ├── utilities/       mixins
        └── skeletonic.styl  ← استيراد واحد يسحب كل شيء
```

كل وحدة مستقلة — أضف فقط الحزم التي تحتاجها للحفاظ على
حمولة CSS الخاصة بك بأصغر حجم ممكن.

## الأسئلة الشائعة

**كيف أثبّت Skeletonic Stylus؟**
شغّل `pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0`. أو حمّل CSS
المُجمّع مباشرة من CDN — بدون خطوة بناء مطلوبة.

**هل تتطلب JavaScript؟**
لا. ورقة الأنماط الأساسية هي CSS خالص، بدون تكلفة تشغيل. المكوّنات
تعمل بدون سطر واحد من JS.

**هل هي متوافقة مع WCAG 2.2؟**
نعم. الإصدار 2.0.0 يشحن تباين AA، وحلقات focus-visible،
ومساعدات رابط التخطي، ودعم تقليل الحركة، والوضع الداكن افتراضيًا.

**ما الحجم المضغوط؟**
39.9&nbsp;كيلوبايت مصغّر، **~7.5&nbsp;كيلوبايت مضغوط**، ~6.3&nbsp;كيلوبايت brotli
لورقة الأنماط الأساسية الكاملة. الحد الأقصى 8&nbsp;كيلوبايت يُفرض في CI.

**ما الترخيص المستخدم؟**
مرخّصة بشكل مزدوج تحت MIT وApache 2.0 — اختر أيهما يناسب مشروعك.
مجانية للاستخدام التجاري والشخصي.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "كيف أثبّت Skeletonic Stylus؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "شغّل pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0. أو حمّل CSS المُجمّع مباشرة من CDN — بدون خطوة بناء مطلوبة."
      }
    },
    {
      "@type": "Question",
      "name": "هل تتطلب Skeletonic Stylus استخدام JavaScript؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "لا. ورقة الأنماط الأساسية هي CSS خالص، بدون تكلفة تشغيل. المكوّنات تعمل بدون سطر واحد من JavaScript."
      }
    },
    {
      "@type": "Question",
      "name": "هل Skeletonic Stylus متوافقة مع WCAG 2.2؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم. الإصدار 2.0.0 يشحن تباين AA، وحلقات focus-visible، ومساعدات رابط التخطي، ودعم تقليل الحركة، والوضع الداكن افتراضيًا."
      }
    },
    {
      "@type": "Question",
      "name": "ما الحجم المضغوط لـ Skeletonic Stylus؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "39.9 كيلوبايت مصغّر، ~7.5 كيلوبايت مضغوط، ~6.3 كيلوبايت brotli لورقة الأنماط الأساسية الكاملة. الحد الأقصى 8 كيلوبايت يُفرض في CI مع كل التزام."
      }
    },
    {
      "@type": "Question",
      "name": "ما الترخيص المستخدم في Skeletonic Stylus؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "مرخّصة بشكل مزدوج تحت MIT وApache 2.0 — اختر أيهما يناسب مشروعك. مجانية للاستخدام التجاري والشخصي."
      }
    }
  ]
}
</script>

[تصفّح المكوّنات →](/ar/al-mukawwinat/)
