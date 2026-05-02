---
title: "উপাদান"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus-এর প্রতিটি উপাদানের লাইভ HTML উদাহরণ, গোষ্ঠীবদ্ধ, অ্যাংকরড এবং যে স্টাইলশিট ডেমো করা হচ্ছে সেটি দিয়েই রেন্ডারড।"
layout: page
permalink: https://skeletonic.io/bn/upadan/
date: 2026-04-08
author: Sebastien Rousseau
language: bn
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic উপাদান, বাটন, কার্ড, ফর্ম, অ্যালার্ট, ব্যাজ, হেডার, navbar, css only hamburger"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

নিচের প্রতিটি উদাহরণ **যে স্টাইলশিট ডেমো করা হচ্ছে সেটি দিয়েই
রেন্ডার করা**। কোনো প্রিপ্রসেসর নেই। কোনো জাভাস্ক্রিপ্ট নেই। কোনো
অতিরিক্ত ডিপেন্ডেন্সি নেই। যেকোনো স্নিপেট একটি নতুন HTML ফাইলে
কপি করলেই কাজ করবে।

<nav aria-label="এই পেজে">
<p><strong>এই পেজে</strong></p>
<ul>
<li><strong>ইনপুট</strong> — <a href="#buttons">বাটন</a> · <a href="#badges">ব্যাজ</a></li>
<li><strong>ফিডব্যাক</strong> — <a href="#alerts">অ্যালার্ট</a></li>
<li><strong>সারফেস</strong> — <a href="#cards">কার্ড</a></li>
<li><strong>ফর্ম</strong> — <a href="#form-fields">ফর্ম ফিল্ড</a></li>
<li><strong>লেআউট</strong> — <a href="#grid">গ্রিড</a> · <a href="#header">হেডার ও হ্যামবার্গার নেভ</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="ইনপুট">

<h2 id="inputs">ইনপুট</h2>

পেজ চালানোর জন্য ভিজিটর ক্লিক, ট্যাপ বা ফোকাস করে এমন
ইন্টারেক্টিভ এলিমেন্ট।

<h3 id="buttons">বাটন</h3>

একটি সেমান্টিক, থিমেবল অ্যাকশন ট্রিগার। সলিড ও আউটলাইন ভেরিয়েন্ট
প্রতিটিতে ছয়টি ব্র্যান্ড রঙ শিপ করে।

```html
<a href="#" class="button primary">Primary</a>
<a href="#" class="button secondary">Secondary</a>
<a href="#" class="button tertiary">Tertiary</a>
```

<section aria-labelledby="buttons">
<p>
  <a href="#" class="button primary">Primary</a>
  <a href="#" class="button secondary">Secondary</a>
  <a href="#" class="button tertiary">Tertiary</a>
</p>
</section>

আউটলাইন ভেরিয়েন্ট:

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">Outline</a>
  <a href="#" class="button secondary-outline">Outline</a>
</p>

> **প্রবেশাধিকার নোট।** প্রতিটি `.button` ভেরিয়েন্ট একটি
> `:focus-visible` রিং এবং একটি **৪৪×৪৪&nbsp;px ন্যূনতম হিট এরিয়া**
> (WCAG&nbsp;2.2 SC&nbsp;2.5.8) সহ শিপ করে। পেজের মধ্যে অ্যাকশনের জন্য
> `<button type="button">` এবং শুধু নেভিগেশনের জন্য `<a href>` ব্যবহার করুন।

<h3 id="badges">ব্যাজ</h3>

স্ট্যাটাস, গণনা বা ক্যাটেগরির জন্য একটি কমপ্যাক্ট লেবেল। টেক্সট সাইজ
নির্দিষ্ট তাই ব্যাজগুলো পার্শ্ববর্তী টেক্সটের সাথে সারিবদ্ধ হয়।

```html
<span class="badge">Default</span>
<span class="badge primary">Primary</span>
<span class="badge success">Success</span>
<span class="badge warning">Warning</span>
<span class="badge danger">Danger</span>
```

<section aria-labelledby="badges">
<p>
  <span class="badge">Default</span>
  <span class="badge primary">Primary</span>
  <span class="badge success">Success</span>
  <span class="badge warning">Warning</span>
  <span class="badge danger">Danger</span>
</p>
</section>

> **প্রবেশাধিকার নোট।** ব্যাজ ডিফল্টরূপে সজ্জামূলক। যখন ব্যাজ
> একমাত্র সংকেত বহন করে (যেমন অপঠিত গণনা), তখন এটি একটি
> visually-hidden হেল্পারে মোড়ান: `<span class="visually-hidden">৩টি
> অপঠিত বার্তা</span>`।

<hr class="hr-text" data-content="ফিডব্যাক">

<h2 id="feedback">ফিডব্যাক</h2>

ভিজিটরকে জানানো সারফেস যে কিছু ঘটেছে — বা ঘটতে চলেছে।

<h3 id="alerts">অ্যালার্ট</h3>

সেমান্টিক অভিপ্রায় সহ স্ট্যাটাস বার্তা। **v2.0.0-এ প্রতিটি
ভেরিয়েন্ট স্পষ্টভাবে নেমস্পেসড**
`.alert-{primary,secondary,info,success,warning,error}`-এর অধীনে
যাতে ভেরিয়েন্ট ক্লাস পেজের অন্যত্র স্টেট ক্লাসের সাথে সংঘর্ষ না করে।

```html
<div class="alert alert-primary" role="alert">
  <strong>মনোযোগ।</strong> এটি একটি প্রাইমারি অ্যালার্ট।
</div>
<div class="alert alert-success" role="status">
  <strong>সংরক্ষিত।</strong> আপনার পরিবর্তনগুলো সেভ হয়েছে।
</div>
<div class="alert alert-warning" role="alert">
  <strong>সতর্কতা।</strong> এই কাজটি শেয়ারড স্টেটকে প্রভাবিত করে।
</div>
<div class="alert alert-error" role="alert">
  <strong>ত্রুটি।</strong> ফর্মটি সংরক্ষণ করা যায়নি।
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>মনোযোগ।</strong> এটি একটি প্রাইমারি অ্যালার্ট।
</div>

<div class="alert alert-success" role="status">
<strong>সংরক্ষিত।</strong> আপনার পরিবর্তনগুলো সেভ হয়েছে।
</div>

<div class="alert alert-warning" role="alert">
<strong>সতর্কতা।</strong> এই কাজটি শেয়ারড স্টেটকে প্রভাবিত করে।
</div>

<div class="alert alert-error" role="alert">
<strong>ত্রুটি।</strong> ফর্মটি সংরক্ষণ করা যায়নি।
</div>
</section>

> **প্রবেশাধিকার নোট।** তাৎক্ষণিক মনোযোগ দাবি করা বার্তার জন্য
> (ত্রুটি, সতর্কতা) `role="alert"` এবং অ-জরুরি নিশ্চিতকরণের জন্য
> `role="status"` ব্যবহার করুন। উভয়ই সহায়ক প্রযুক্তির কাছে
> বার্তাটি প্রদর্শিত হওয়ার সাথে সাথেই প্রকাশ করে।

<hr class="hr-text" data-content="সারফেস">

<h2 id="surface">সারফেস</h2>

সম্পর্কিত বিষয়বস্তু ফ্রেম ও গোষ্ঠীবদ্ধ করার কন্টেইনার।

<h3 id="cards">কার্ড</h3>

একটি একক সামঞ্জস্যপূর্ণ ইউনিটের জন্য বর্ডারড, প্যাডেড কন্টেইনার।
রেসপন্সিভ কার্ড ওয়ালের জন্য `flex-N` গ্রিডের সাথে জোড়া লাগান।

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">হালকা</h3>
      <p>39.1 KB মিনিফাইড, 7.8 KB gzipped।</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">অ্যাক্সেসিবল</h3>
      <p>WCAG 2.2 বাক্সের বাইরেই সামঞ্জস্যপূর্ণ।</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">মডুলার</h3>
      <p>সহজ ওভাররাইডের জন্য cascade-layered।</p>
    </div>
  </article>
</section>
```

<section class="row" aria-labelledby="cards">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">হালকা</h3>
      <p>39.1&nbsp;KB মিনিফাইড, 7.8&nbsp;KB gzipped।</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">অ্যাক্সেসিবল</h3>
      <p>WCAG&nbsp;2.2 বাক্সের বাইরেই সামঞ্জস্যপূর্ণ।</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">মডুলার</h3>
      <p>সহজ ওভাররাইডের জন্য cascade-layered।</p>
    </div>
  </article>
</section>

> **প্রবেশাধিকার নোট।** প্রতিটি কার্ড একটি সেমান্টিক ল্যান্ডমার্কে
> (`<article>`, `<section>`) মোড়ান এবং এর বিষয়বস্তু একটি হেডিং
> (`<h3>`) দিয়ে শুরু করুন। স্ক্রিন-রিডার ব্যবহারকারীরা তখন কার্ড
> তালিকা প্রথম-শ্রেণীর নেভিগেবল রিজিয়ন হিসেবে ট্রাভার্স করতে পারবেন।

<hr class="hr-text" data-content="ফর্ম">

<h2 id="forms">ফর্ম</h2>

ব্যবহারকারীর ডেটা সংগ্রহের জন্য ইনপুট, লেবেল এবং গ্রুপিং।

<h3 id="form-fields">ফর্ম ফিল্ড</h3>

লেবেল, টেক্সট ইনপুট, textarea, fieldset ও legend — সবকিছু
ডিজাইন সিস্টেমের বাকি অংশের সাথে সামঞ্জস্যপূর্ণভাবে সাইজড।

```html
<form>
  <label for="name">নাম</label>
  <input id="name" type="text" required>

  <label for="email">ইমেইল</label>
  <input id="email" type="email" required class="input-primary">

  <label for="msg">বার্তা</label>
  <textarea id="msg" rows="4"></textarea>

  <button type="submit" class="button primary">পাঠান</button>
</form>
```

<section aria-labelledby="form-fields">
<form>
  <label for="demo-name">নাম</label>
  <input id="demo-name" type="text">

  <label for="demo-email">ইমেইল</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">বার্তা</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">পাঠান (ডেমো)</button></p>
</form>
</section>

> **প্রবেশাধিকার নোট।** প্রতিটি ইনপুটে একটি প্রোগ্রাম্যাটিকভাবে
> সংযুক্ত `<label for="…">` থাকতে হবে। সম্পর্কিত কন্ট্রোল একটি
> `<fieldset>`-এ `<legend>` সহ গ্রুপ করুন। বাধ্যতামূলক ফিল্ড
> `required` দিয়ে চিহ্নিত করুন (এবং লেবেল টেক্সটে একটি দৃশ্যমান তারকা চিহ্ন দিন)।

<hr class="hr-text" data-content="লেআউট">

<h2 id="layout">লেআউট</h2>

কাঠামোগত প্রিমিটিভ — গ্রিড, কন্টেইনার, হেডার — যা পুরো পেজকে
ফ্রেম করে।

<h3 id="grid">গ্রিড</h3>

flexbox-ভিত্তিক একটি রেসপন্সিভ `flex-N` গ্রিড (১ → ১২ কলাম)।
`.row` প্যারেন্ট স্বয়ংক্রিয়ভাবে গ্যাপ ও র‍্যাপ করে।

```html
<div class="row">
  <div class="flex-6">অর্ধেক</div>
  <div class="flex-6">অর্ধেক</div>
</div>
<div class="row">
  <div class="flex-4">এক-তৃতীয়াংশ</div>
  <div class="flex-4">এক-তৃতীয়াংশ</div>
  <div class="flex-4">এক-তৃতীয়াংশ</div>
</div>
```

<section aria-labelledby="grid">
<div style="display:flex;flex-wrap:wrap;gap:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">অর্ধেক</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">অর্ধেক</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">এক-তৃতীয়াংশ</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">এক-তৃতীয়াংশ</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">এক-তৃতীয়াংশ</div>
</div>
</section>

> **প্রবেশাধিকার নোট।** ভিজুয়াল অর্ডার DOM অর্ডারের সাথে মিলতে হবে।
> `flex-direction: row-reverse` বা `order:` দিয়ে সারি পুনর্বিন্যাস
> এড়িয়ে চলুন — স্ক্রিন রিডার ও কীবোর্ড ব্যবহারকারীরা পেইন্ট নয়,
> সোর্স অনুসরণ করে।

<h3 id="header">হেডার ও হ্যামবার্গার নেভ</h3>

একটি সম্পূর্ণ CSS-only হেডার রেসপন্সিভ হ্যামবার্গার টগল সহ। **শূন্য
জাভাস্ক্রিপ্ট।** নিচের স্নিপেটটি একটি নতুন HTML পেজে কপি করুন যেটি
ইতিমধ্যে `skeletonic.min.css` লোড করে এবং মেনু নিজে থেকেই
collapse, expand এবং ফোকাস ট্র্যাপ করবে।

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
  <a class="sk-brand" href="#">ব্র্যান্ড</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="নেভিগেশন টগল করুন">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">হোম</a></li>
    <li><a href="#">ডক্স</a></li>
    <li><a href="#">উপাদান</a></li>
    <li><a href="#">সম্পর্কে</a></li>
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
  <a class="sk-brand" href="#">ব্র্যান্ড</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="নেভিগেশন টগল করুন">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">হোম</a></li>
    <li><a href="#">ডক্স</a></li>
    <li><a href="#">উপাদান</a></li>
    <li><a href="#">সম্পর্কে</a></li>
  </ul>
</header>
</section>

> **প্রবেশাধিকার নোট।** লুকানো চেকবক্স ট্যাব অর্ডারে থাকে যাতে
> কীবোর্ড ব্যবহারকারীরা `Space` বা `Enter` দিয়ে মেনু খুলতে পারে।
> `<label>` `aria-hidden` বহন করে কারণ চেকবক্সই অ্যাক্সেসিবল নাম
> উৎস। হ্যামবার্গার টগল দেখতে উইন্ডো ৬৪০&nbsp;px-এর নিচে রিসাইজ করুন।

[সম্পূর্ণ a11y নোট দেখুন →](/bn/probeshadhikar/) · [প্যালেট দেখুন →](/bn/rong-palat/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Skeletonic Stylus উপাদান",
  "description": "Skeletonic Stylus v2.0.0-এ শিপ করা প্রতিটি উপাদান।",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "বাটন",
      "url": "https://skeletonic.io/bn/upadan/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "ব্যাজ",
      "url": "https://skeletonic.io/bn/upadan/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "অ্যালার্ট",
      "url": "https://skeletonic.io/bn/upadan/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "কার্ড",
      "url": "https://skeletonic.io/bn/upadan/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "ফর্ম ফিল্ড",
      "url": "https://skeletonic.io/bn/upadan/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "গ্রিড",
      "url": "https://skeletonic.io/bn/upadan/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "হেডার ও হ্যামবার্গার নেভ",
      "url": "https://skeletonic.io/bn/upadan/#header"
    }
  ]
}
</script>
