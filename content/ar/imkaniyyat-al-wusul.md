---
title: "إمكانية الوصول — WCAG 2.2 في الإصدار 1.1.7"
name: "Skeletonic Stylus"
description: "ما يشحنه الإصدار 1.1.7 مباشرة للتوافق مع WCAG 2.2 — حلقات التركيز، التباين، روابط التخطي، الحركة، والوضع الداكن."
layout: page
permalink: https://skeletonic.io/ar/imkaniyyat-al-wusul/
date: 2026-04-08
author: Sebastien Rousseau
language: ar
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, إمكانية الوصول, focus visible, رابط التخطي, prefers reduced motion, تباين"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

> **يشحن Skeletonic Stylus الإصدار 1.1.7 التوافق مع WCAG 2.2 كسلوك
> افتراضي، وليس كمظهر اختياري.** هذه الصفحة توثّق ما هو مدمج
> وما هي الخلطات التي يمكنك اختيارها لتحكّم أدق.

<hr class="hr-text" data-content="مباشرة">

## ما تحصل عليه مجانًا

| معيار WCAG 2.2 | ما يفعله الإصدار 1.1.7 | كيفية التحقق |
|---|---|---|
| **1.4.3 التباين (الحد الأدنى) — AA** | تم تغميق `--cl-primary` و`--cl-secondary` إلى ≥ 4.5:1 مقابل الأبيض | أدوات المطور ← فاحص التباين |
| **1.4.11 تباين غير النص — AA** | حدود النماذج والأزرار والشارات جميعها ≥ 3:1 | نفسه |
| **2.4.7 التركيز المرئي — AA** | كل عنصر قابل للتركيز يحتوي على حلقة `:focus-visible` (أصفر على خلفيات داكنة، أزرق على فاتحة) | `Tab` عبر أي صفحة |
| **2.4.11 التركيز غير المحجوب — AA (جديد في 2.2)** | الترويسة الثابتة بارتفاع مخفّض + هامش تمرير التركيز | `Tab` بعد الترويسة الثابتة |
| **2.5.8 حجم الهدف — AA (جديد في 2.2)** | الأزرار / الروابط: ≥ 24×24 بكسل CSS مساحة نقر | نموذج الصندوق في أدوات المطور |
| **1.4.12 تباعد النص — AA** | جميع العناصر تحترم تجاوزات line-height / letter-spacing للمستخدم | التجاوز في أدوات المطور |
| **2.3.3 الحركة من التفاعلات — AAA** | جميع فئات الحركة مغلّفة في `@media (prefers-reduced-motion: no-preference)` | تقليل الحركة على مستوى النظام |
| **1.4.10 إعادة التدفق — AA** | التخطيط يعمل عند 320 بكسل بدون تمرير أفقي | نافذة ضيقة في أدوات المطور |
| **الوضع الداكن** | `prefers-color-scheme: dark` يبدّل الرموز تلقائيًا | تبديل الوضع الداكن في النظام |

<hr class="hr-text" data-content="الخلطات">

## خلطات Stylus التي يمكنك اختيارها

إذا جمّعت من المصدر، الخلطات التالية متاحة في
`src/stylus/utilities/mixins.styl`:

| الخلطة | الاستخدام |
|---|---|
| `focus-ring()` | حلقة تركيز عالية التباين تحترم `:focus-visible` |
| `visually-hidden()` | نص لقارئات الشاشة فقط يبقى قابلًا للتركيز |
| `skip-link()` | مرساة تصبح مرئية عند التركيز |
| `reduced-motion()` | تغلّف أي كتلة في `prefers-reduced-motion: no-preference` |
| `forced-colors()` | تعديلات لوضع التباين العالي في Windows |
| `target-size(24px)` | تضيف حشوًا لأي عنصر قابل للنقر لتحقيق حد أدنى لهدف اللمس |

مثال:

```stylus
// تطبيق حلقة تركيز قوية على زر مخصص
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="رابط التخطي">

## مساعد رابط التخطي

ضع هذا **أول شيء داخل `<body>`**:

```html
<a href="#main-content" class="skip-link">تخطي إلى المحتوى الرئيسي</a>
```

الفئة **ليست** في ورقة الأنماط الأساسية (حتى لا يزيد وزن الصفحة)؛
هي مقتطف من 4 أسطر تكتبه بنفسك أو تستخدم خلطة `skip-link()` المضمّنة.
هذا الموقع يستخدمها — ركّز على الصفحة واضغط Tab لرؤيتها تظهر
في أعلى اليسار.

<hr class="hr-text" data-content="التحقق">

## التحقق من صفحاتك

تشحن المكتبة نص `a11y-test.mjs` تحت `scripts/` يشغّل
[axe-core](https://github.com/dequelabs/axe-core) على كل رابط تقدّمه.

```bash
node scripts/a11y-test.mjs https://example.com
```

يشغّل CI هذا النص على صفحة العرض `dist/index.html` مع كل دفع.

[اقرأ عن إصدار v1.1.7 →](/ar/sijil-al-taghyirat/) ·
[انظر صفحة الأمان →](/ar/al-aman/)
