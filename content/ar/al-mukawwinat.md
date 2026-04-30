---
title: "المكوّنات"
name: "Skeletonic Stylus"
description: "أمثلة HTML حية لكل مكوّن في Skeletonic Stylus، مجمّعة ومثبّتة ومعروضة بورقة الأنماط نفسها التي يتم عرضها."
layout: page
permalink: https://skeletonic.io/ar/al-mukawwinat/
date: 2026-04-08
author: Sebastien Rousseau
language: ar
theme_color: "hsl(210, 100%, 42%)"
keywords: "مكوّنات skeletonic, أزرار, بطاقات, نماذج, تنبيهات, شارات, ترويسة, قائمة تنقل, hamburger css فقط"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

كل مثال أدناه **معروض بورقة الأنماط نفسها التي يتم عرضها**. بدون
معالج أولي. بدون JavaScript. بدون تبعيات إضافية. انسخ أي مقتطف
في ملف HTML جديد وسيعمل.

<nav aria-label="في هذه الصفحة">
<p><strong>في هذه الصفحة</strong></p>
<ul>
<li><strong>المدخلات</strong> — <a href="#buttons">الأزرار</a> · <a href="#badges">الشارات</a></li>
<li><strong>التغذية الراجعة</strong> — <a href="#alerts">التنبيهات</a></li>
<li><strong>الأسطح</strong> — <a href="#cards">البطاقات</a></li>
<li><strong>النماذج</strong> — <a href="#form-fields">حقول النموذج</a></li>
<li><strong>التخطيط</strong> — <a href="#grid">الشبكة</a> · <a href="#header">الترويسة وقائمة hamburger</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="المدخلات">

<h2 id="inputs">المدخلات</h2>

العناصر التفاعلية التي ينقر عليها الزائر أو يلمسها أو يركّز عليها
لتوجيه الصفحة.

<h3 id="buttons">الأزرار</h3>

مُشغّل إجراء دلالي وقابل للتخصيص. المتغيرات المصمتة والمحدّدة تشحن
ستة ألوان علامة تجارية لكل منها.

```html
<a href="#" class="button primary">Primary</a>
<a href="#" class="button secondary">Secondary</a>
<a href="#" class="button tertiary">Tertiary</a>
```

<section aria-labelledby="buttons">
<p>
  <a href="#" class="button primary">أساسي</a>
  <a href="#" class="button secondary">ثانوي</a>
  <a href="#" class="button tertiary">ثالثي</a>
</p>
</section>

المتغيرات المحدّدة:

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">محدّد</a>
  <a href="#" class="button secondary-outline">محدّد</a>
</p>

> **ملاحظة إمكانية الوصول.** كل متغير `.button` يأتي مع حلقة
> `:focus-visible` و**مساحة نقر لا تقل عن 24×24&nbsp;بكسل CSS**
> (WCAG&nbsp;2.2 SC&nbsp;2.5.8). استخدم `<button type="button">` للإجراءات
> داخل الصفحة و`<a href>` فقط للتنقل.

<h3 id="badges">الشارات</h3>

تسمية مضغوطة للحالة أو العدد أو الفئة. حجم النص ثابت حتى
تتوافق الشارات مع النص المحيط.

```html
<span class="badge">Default</span>
<span class="badge primary">Primary</span>
<span class="badge success">Success</span>
<span class="badge warning">Warning</span>
<span class="badge danger">Danger</span>
```

<section aria-labelledby="badges">
<p>
  <span class="badge">افتراضي</span>
  <span class="badge primary">أساسي</span>
  <span class="badge success">نجاح</span>
  <span class="badge warning">تحذير</span>
  <span class="badge danger">خطر</span>
</p>
</section>

> **ملاحظة إمكانية الوصول.** الشارات زخرفية بشكل افتراضي. عندما تحمل
> الشارة الإشارة الوحيدة (مثل عدد الرسائل غير المقروءة)، غلّفها في
> مساعد مخفي بصريًا: `<span class="visually-hidden">3 رسائل غير
> مقروءة</span>`.

<hr class="hr-text" data-content="التغذية الراجعة">

<h2 id="feedback">التغذية الراجعة</h2>

أسطح تخبر الزائر أن شيئًا حدث — أو على وشك الحدوث.

<h3 id="alerts">التنبيهات</h3>

رسائل حالة ذات قصد دلالي. **في الإصدار 1.1.7 كل متغير مُسمّى بشكل
صريح** تحت `.alert-{primary,secondary,info,success,warning,error}`
لكي لا تتعارض فئة المتغير مع فئات الحالة في أماكن أخرى من الصفحة.

```html
<div class="alert alert-primary" role="alert">
  <strong>Heads up.</strong> This is a primary alert.
</div>
<div class="alert alert-success" role="status">
  <strong>Saved.</strong> Your changes are persisted.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Careful.</strong> This action affects shared state.
</div>
<div class="alert alert-error" role="alert">
  <strong>Error.</strong> Could not save the form.
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>تنبيه.</strong> هذا تنبيه أساسي.
</div>

<div class="alert alert-success" role="status">
<strong>تم الحفظ.</strong> تم حفظ تغييراتك.
</div>

<div class="alert alert-warning" role="alert">
<strong>انتبه.</strong> هذا الإجراء يؤثر على حالة مشتركة.
</div>

<div class="alert alert-error" role="alert">
<strong>خطأ.</strong> تعذّر حفظ النموذج.
</div>
</section>

> **ملاحظة إمكانية الوصول.** استخدم `role="alert"` للرسائل التي تتطلب
> اهتمامًا فوريًا (الأخطاء، التحذيرات) و`role="status"` للتأكيدات
> غير العاجلة. كلاهما يكشف الرسالة للتقنيات المساعدة فور ظهورها.

<hr class="hr-text" data-content="الأسطح">

<h2 id="surface">الأسطح</h2>

حاويات تؤطّر وتجمّع المحتوى المتعلّق.

<h3 id="cards">البطاقات</h3>

حاوية بحدود وحشو لوحدة متماسكة واحدة. ادمجها مع شبكة
`flex-N` لجدران بطاقات متجاوبة.

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Lightweight</h3>
      <p>45.7 KB minified, 8.3 KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Accessible</h3>
      <p>WCAG 2.2 conformant out of the box.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modular</h3>
      <p>Cascade-layered for easy overrides.</p>
    </div>
  </article>
</section>
```

<section class="row" aria-labelledby="cards">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">خفيفة</h3>
      <p>39.9&nbsp;كيلوبايت مصغّر، 7.5&nbsp;كيلوبايت مضغوط.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">سهلة الوصول</h3>
      <p>متوافقة مع WCAG&nbsp;2.2 مباشرة.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">معيارية</h3>
      <p>طبقات التسلسل لتجاوزات سهلة.</p>
    </div>
  </article>
</section>

> **ملاحظة إمكانية الوصول.** غلّف كل بطاقة في معلم دلالي
> (`<article>`، `<section>`) وابدأ محتواها بعنوان
> (`<h3>`). مستخدمو قارئات الشاشة يمكنهم بعد ذلك التنقل عبر قائمة
> البطاقات كمناطق قابلة للتنقل من الدرجة الأولى.

<hr class="hr-text" data-content="النماذج">

<h2 id="forms">النماذج</h2>

المدخلات والتسميات والتجميعات لجمع بيانات المستخدم.

<h3 id="form-fields">حقول النموذج</h3>

التسميات، مدخلات النص، مناطق النص، مجموعات الحقول والعناوين التوضيحية —
جميعها بحجم متسق مع بقية نظام التصميم.

```html
<form>
  <label for="name">Name</label>
  <input id="name" type="text" required>

  <label for="email">Email</label>
  <input id="email" type="email" required class="input-primary">

  <label for="msg">Message</label>
  <textarea id="msg" rows="4"></textarea>

  <button type="submit" class="button primary">Send</button>
</form>
```

<section aria-labelledby="form-fields">
<form>
  <label for="demo-name">الاسم</label>
  <input id="demo-name" type="text">

  <label for="demo-email">البريد الإلكتروني</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">الرسالة</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">إرسال (تجريبي)</button></p>
</form>
</section>

> **ملاحظة إمكانية الوصول.** يجب أن يكون لكل مدخل `<label for="…">`
> مرتبط برمجيًا. اجمع عناصر التحكم ذات الصلة داخل `<fieldset>`
> مع `<legend>`. حدّد الحقول المطلوبة بـ `required` (ونجمة مرئية
> في نص التسمية).

<hr class="hr-text" data-content="التخطيط">

<h2 id="layout">التخطيط</h2>

البنى الأساسية — الشبكة، الحاوية، الترويسة — التي تؤطّر الصفحة بأكملها.

<h3 id="grid">الشبكة</h3>

شبكة `flex-N` متجاوبة (1 ← 12 عمودًا) مبنية على flexbox. الحاوية
الأب `.row` تضبط الفجوات والالتفاف تلقائيًا.

```html
<div class="row">
  <div class="flex-6">Half</div>
  <div class="flex-6">Half</div>
</div>
<div class="row">
  <div class="flex-4">Third</div>
  <div class="flex-4">Third</div>
  <div class="flex-4">Third</div>
</div>
```

<section aria-labelledby="grid">
<div style="display:flex;flex-wrap:wrap;gap:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">نصف</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">نصف</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">ثلث</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">ثلث</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">ثلث</div>
</div>
</section>

> **ملاحظة إمكانية الوصول.** يجب أن يتطابق الترتيب المرئي مع ترتيب DOM.
> تجنّب إعادة ترتيب الصفوف بـ `flex-direction: row-reverse` أو `order:` —
> قارئات الشاشة ومستخدمو لوحة المفاتيح يتبعون المصدر، وليس العرض.

<h3 id="header">الترويسة وقائمة hamburger</h3>

ترويسة كاملة بـ CSS فقط مع زر hamburger متجاوب. **بدون JavaScript.**
انسخ المقتطف أدناه في صفحة HTML جديدة تحمّل بالفعل
`skeletonic.min.css` وستنطوي القائمة وتنفتح وتحبس التركيز بشكل صحيح
من تلقاء نفسها.

```html
<style>
  .sk-header{position:relative;display:flex;align-items:center;gap:1rem;padding:.75rem 1rem;border:1px solid #e4e4e7;border-radius:.5rem;background:#fff;}
  .sk-header .sk-brand{font-weight:600;color:#0a0a0a;text-decoration:none;}
  .sk-header .sk-toggle{position:absolute;left:-9999px;}
  .sk-header .sk-burger{display:none;margin-left:auto;cursor:pointer;padding:.625rem .75rem;border:1px solid #e4e4e7;border-radius:.375rem;font-size:1.125rem;line-height:1;min-width:2.75rem;min-height:2.75rem;}
  .sk-header .sk-burger:focus-within,.sk-header .sk-toggle:focus-visible+.sk-burger{outline:2px solid hsl(210,100%,42%);outline-offset:2px;}
  .sk-header .sk-menu{list-style:none;display:flex;gap:.25rem;margin:0 0 0 auto;padding:0;}
  .sk-header .sk-menu a{display:inline-flex;align-items:center;min-height:2.75rem;padding:.5rem .875rem;border-radius:.375rem;color:#1a1a1a;text-decoration:none;}
  .sk-header .sk-menu a:hover{background:#f4f4f5;}
  @media (max-width:640px){
    .sk-header .sk-burger{display:inline-flex;align-items:center;justify-content:center;}
    .sk-header .sk-menu{display:none;flex-direction:column;gap:0;position:absolute;top:calc(100% + .25rem);left:0;right:0;background:#fff;border:1px solid #e4e4e7;border-radius:.5rem;padding:.375rem;box-shadow:0 4px 24px rgba(0,0,0,.08);z-index:10;}
    .sk-header .sk-menu a{padding:.75rem 1rem;border-bottom:1px solid #f4f4f5;}
    .sk-header .sk-menu li:last-child a{border-bottom:0;}
    .sk-header .sk-toggle:checked ~ .sk-menu{display:flex;}
  }
</style>
<header class="sk-header">
  <a class="sk-brand" href="#">Brand</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Toggle navigation">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Docs</a></li>
    <li><a href="#">Components</a></li>
    <li><a href="#">About</a></li>
  </ul>
</header>
```

<section aria-labelledby="header">
<style>
  .sk-header{position:relative;display:flex;align-items:center;gap:1rem;padding:.75rem 1rem;border:1px solid #e4e4e7;border-radius:.5rem;background:#fff;}
  .sk-header .sk-brand{font-weight:600;color:#0a0a0a;text-decoration:none;}
  .sk-header .sk-toggle{position:absolute;left:-9999px;}
  .sk-header .sk-burger{display:none;margin-left:auto;cursor:pointer;padding:.625rem .75rem;border:1px solid #e4e4e7;border-radius:.375rem;font-size:1.125rem;line-height:1;min-width:2.75rem;min-height:2.75rem;}
  .sk-header .sk-burger:focus-within,.sk-header .sk-toggle:focus-visible+.sk-burger{outline:2px solid hsl(210,100%,42%);outline-offset:2px;}
  .sk-header .sk-menu{list-style:none;display:flex;gap:.25rem;margin:0 0 0 auto;padding:0;}
  .sk-header .sk-menu a{display:inline-flex;align-items:center;min-height:2.75rem;padding:.5rem .875rem;border-radius:.375rem;color:#1a1a1a;text-decoration:none;}
  .sk-header .sk-menu a:hover{background:#f4f4f5;}
  @media (max-width:640px){
    .sk-header .sk-burger{display:inline-flex;align-items:center;justify-content:center;}
    .sk-header .sk-menu{display:none;flex-direction:column;gap:0;position:absolute;top:calc(100% + .25rem);left:0;right:0;background:#fff;border:1px solid #e4e4e7;border-radius:.5rem;padding:.375rem;box-shadow:0 4px 24px rgba(0,0,0,.08);z-index:10;}
    .sk-header .sk-menu a{padding:.75rem 1rem;border-bottom:1px solid #f4f4f5;}
    .sk-header .sk-menu li:last-child a{border-bottom:0;}
    .sk-header .sk-toggle:checked ~ .sk-menu{display:flex;}
  }
</style>
<header class="sk-header">
  <a class="sk-brand" href="#">العلامة التجارية</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="تبديل التنقل">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">الرئيسية</a></li>
    <li><a href="#">التوثيق</a></li>
    <li><a href="#">المكوّنات</a></li>
    <li><a href="#">حول</a></li>
  </ul>
</header>
</section>

> **ملاحظة إمكانية الوصول.** يبقى مربع الاختيار المخفي في ترتيب
> التبويب حتى يتمكن مستخدمو لوحة المفاتيح من فتح القائمة بـ `Space`
> أو `Enter`. يحمل `<label>` السمة `aria-hidden` لأن مربع الاختيار
> نفسه هو مصدر الاسم المتاح. غيّر حجم النافذة إلى أقل من
> 640&nbsp;بكسل لرؤية زر hamburger يتولى المهمة.

[انظر ملاحظات إمكانية الوصول الكاملة →](/ar/imkaniyyat-al-wusul/) · [تصفّح لوحات الألوان →](/ar/al-alwan/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "مكوّنات Skeletonic Stylus",
  "description": "كل مكوّن يُشحن في Skeletonic Stylus الإصدار 1.1.7.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "الأزرار",
      "url": "https://skeletonic.io/ar/al-mukawwinat/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "الشارات",
      "url": "https://skeletonic.io/ar/al-mukawwinat/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "التنبيهات",
      "url": "https://skeletonic.io/ar/al-mukawwinat/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "البطاقات",
      "url": "https://skeletonic.io/ar/al-mukawwinat/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "حقول النموذج",
      "url": "https://skeletonic.io/ar/al-mukawwinat/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "الشبكة",
      "url": "https://skeletonic.io/ar/al-mukawwinat/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "الترويسة وقائمة hamburger",
      "url": "https://skeletonic.io/ar/al-mukawwinat/#header"
    }
  ]
}
</script>
