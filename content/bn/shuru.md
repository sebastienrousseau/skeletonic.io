---
title: "Skeletonic Stylus দিয়ে শুরু করুন"
name: "Skeletonic Stylus"
description: "npm বা CDN থেকে Skeletonic Stylus ইনস্টল করুন, আপনার Stylus বিল্ডে আমদানি করুন এবং সেকেন্ডে ভেরিয়েবল ওভাররাইড করুন।"
layout: page
permalink: https://skeletonic.io/bn/shuru/
date: 2026-04-08
author: Sebastien Rousseau
language: bn
theme_color: "hsl(210, 100%, 42%)"
keywords: "install skeletonic, stylus setup, css cdn, শুরু করুন"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## ভূমিকা

Skeletonic Stylus-এ নতুন? **v1.1.7**-এ আপনার প্রয়োজনীয় ফিচারগুলো
বেছে নেওয়া আগের চেয়ে সহজ। এর ক্ষুদ্র আকারের (~৭.৫&nbsp;KB
gzipped মূল স্টাইলশিটের জন্য) কারণে, এটি যেকোনো ওয়েব অ্যাপে
দ্রুত ইন্টিগ্রেট হয় — কোনো জাভাস্ক্রিপ্ট ফ্রেমওয়ার্ক লাগে না,
CDN ব্যবহার করলে কোনো বিল্ড স্টেপও লাগে না।

প্রতিটি পদ্ধতি নিচে নথিভুক্ত — আপনার উপযুক্তটি বেছে নিন।

## ১. ডাউনলোড ও ইনস্টল

আপনি **pnpm**, **npm** বা **yarn** এর মাধ্যমে Skeletonic Stylus ইনস্টল
করতে পারেন, অথবা সরাসরি CDN থেকে লোড করতে পারেন। আপনি চাইলে
ডিস্ট্রিবিউশন ফাইল লোকালি সেলফ-হোস্টও করতে পারেন।

### প্যাকেজ ম্যানেজার থেকে (প্রস্তাবিত)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7

# npm
npm install @sebastienrousseau/skeletonic-stylus@1.1.7

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@1.1.7
```

### CDN থেকে

শুধু কম্পাইলড CSS প্রয়োজন হলে, আপনার `<head>`-এ এগুলোর যেকোনো একটি যোগ করুন:

```html
<!-- jsDelivr -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">

<!-- unpkg -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">
```

সর্বোচ্চ ইন্টিগ্রিটির জন্য, v1.1.7 রিলিজ নোটস থেকে **SRI হ্যাশ**
কপি করে একটি `integrity="sha384-…"` অ্যাট্রিবিউট যোগ করুন।

### বিকল্প CDN অবস্থান

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css` | হ্যাঁ | হ্যাঁ |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css` | হ্যাঁ | না |

### GitHub রিলিজ ডাউনলোড

সংস্করণভিত্তিক tarball পছন্দ করেন? সর্বশেষ রিলিজ নিন
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
থেকে এবং `dist/`-এর বিষয়বস্তু সরাসরি আপনার প্রজেক্টে রাখুন।

### GitHub রিপোজিটরি ক্লোন করুন

বিল্ড স্ক্রিপ্টসহ সকল সোর্স ফাইল পেতে মূল রিপোজিটরি ক্লোন করুন:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **টিপ:** আপনার কমিট সাইন করুন — প্রজেক্ট CI-তে স্বাক্ষরিত কমিট
> বাধ্যতামূলক করে। `git commit -S -m "..."` ব্যবহার করুন (অথবা আপনার
> গ্লোবাল git config-এ `commit.gpgsign = true` সেট করুন)।

## ২. কম্পাইলড CSS ব্যবহার করুন

লাইব্রেরি ইনস্টলের পর `dist/css/`-এর অধীনে কয়েকটি
প্রি-বিল্ট বান্ডেল শিপ করে:

| ফাইল | উদ্দেশ্য | আকার (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | Reset + tokens + layout + elements + components + utilities | 45.7 KB / 8.3 KB |
| `animations/skeletonic-animations.min.css` | ঐচ্ছিক অ্যানিমেশন মডিউল | ≈213 KB / ≈6.9 KB |
| `palettes/material/skeletonic-material.min.css` | Material রঙ প্যালেট | ≈17.4 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Tachyons ইউটিলিটি প্যালেট | 7.3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | Web-safe প্যালেট | ≈3.5 KB |

প্রতিটি মডিউল স্বাধীন — আপনার প্রয়োজনে সবচেয়ে ছোট সংমিশ্রণ বেছে নিন।

## ৩. Stylus থেকে ব্যবহার করুন

আপনার যদি ইতিমধ্যে একটি Stylus পাইপলাইন থাকে, তাহলে সোর্স
মডিউল আমদানি করতে পারেন এবং আপনার বান্ডলারকে অব্যবহৃত অংশ
tree-shake করতে দিতে পারেন:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

অথবা শুধু প্রয়োজনীয় অংশ আমদানি করুন:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## ৪. ব্র্যান্ড রঙ ওভাররাইড করুন

Skeletonic তার ডিজাইন টোকেনগুলো **CSS কাস্টম প্রপার্টি** হিসেবে
প্রকাশ করে যাতে আপনি Stylus রিকম্পাইল না করেই থিম পরিবর্তন করতে পারেন:

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

এতটুকুই — প্রাইমারি রঙ ব্যবহার করা প্রতিটি কম্পোনেন্ট স্বয়ংক্রিয়ভাবে অনুসরণ করবে।

## ৫. ইনস্টল যাচাই করুন

একটি ন্যূনতম "কাজ করছে কি?" পরীক্ষা:

```html
<!doctype html>
<html lang="bn">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>কাজ করছে।</h1>
    <a href="#" class="button primary">হ্যালো, বিশ্ব</a>
  </body>
</html>
```

যদি হেডিং ফ্লুইডলি সাইজড হয় এবং বাটনটি নীল পিল আকৃতির হয়,
তাহলে আপনি সম্পন্ন।

## ৬. কী অন্তর্ভুক্ত

প্যাকেজের ভিতরে আপনি প্রতিটি সোর্স ফাইল, কম্পাইলড ও মিনিফাইড
CSS বান্ডেল, সোর্স ম্যাপ এবং ক্যাটেগরি অনুসারে সংগঠিত সম্পূর্ণ
Stylus ট্রি পাবেন:

```text
@sebastienrousseau/skeletonic-stylus@1.1.7
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
        └── skeletonic.styl  ← সব কিছু টানে এমন একক ইমপোর্ট
```

প্রতিটি মডিউল স্বাধীন — আপনার CSS পেলোড যতটা সম্ভব ছোট রাখতে শুধু
প্রয়োজনীয় বান্ডেলগুলো টানুন।

## প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী

**কীভাবে Skeletonic Stylus ইনস্টল করব?**
`pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7` চালান। অথবা
কম্পাইলড CSS সরাসরি CDN থেকে লোড করুন — কোনো বিল্ড স্টেপ লাগে না।

**এটি কি জাভাস্ক্রিপ্ট প্রয়োজন?**
না। মূল স্টাইলশিট বিশুদ্ধ CSS, শূন্য রানটাইম খরচ সহ। কম্পোনেন্টগুলো
একটি লাইন JS ছাড়াই কাজ করে।

**এটি কি WCAG 2.2 প্রস্তুত?**
হ্যাঁ। v1.1.7 AA-সামঞ্জস্যপূর্ণ কনট্রাস্ট, focus-visible রিং,
skip-link সহায়ক, reduced-motion সমর্থন এবং ডিফল্টরূপে ডার্ক মোড শিপ করে।

**gzipped আকার কত?**
45.7&nbsp;KB মিনিফাইড, **~৭.৫&nbsp;KB gzipped**, ~৬.৩&nbsp;KB brotli
সম্পূর্ণ মূল স্টাইলশিটের জন্য। ৮&nbsp;KB সীমা CI-তে বাধ্যতামূলক।

**কোন লাইসেন্স ব্যবহার করা হয়?**
MIT এবং Apache 2.0 দ্বৈত লাইসেন্সপ্রাপ্ত — আপনার প্রজেক্টের
প্রয়োজনে যেটি উপযুক্ত সেটি বেছে নিন। বাণিজ্যিক ও ব্যক্তিগত
ব্যবহারের জন্য বিনামূল্যে।

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "কীভাবে Skeletonic Stylus ইনস্টল করব?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7 চালান। অথবা কম্পাইলড CSS সরাসরি CDN থেকে লোড করুন — কোনো বিল্ড স্টেপ লাগে না।"
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus কি জাভাস্ক্রিপ্ট প্রয়োজন?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "না। মূল স্টাইলশিট বিশুদ্ধ CSS, শূন্য রানটাইম খরচ সহ। কম্পোনেন্টগুলো একটি লাইন জাভাস্ক্রিপ্ট ছাড়াই কাজ করে।"
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus কি WCAG 2.2 প্রস্তুত?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "হ্যাঁ। v1.1.7 AA-সামঞ্জস্যপূর্ণ কনট্রাস্ট, focus-visible রিং, skip-link সহায়ক, reduced-motion সমর্থন এবং ডিফল্টরূপে ডার্ক মোড শিপ করে।"
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus-এর gzipped আকার কত?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "45.7 KB মিনিফাইড, ~৭.৫ KB gzipped, ~৬.৩ KB brotli সম্পূর্ণ মূল স্টাইলশিটের জন্য। ৮ KB সীমা প্রতিটি কমিটে CI-তে বাধ্যতামূলক।"
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus কোন লাইসেন্স ব্যবহার করে?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MIT এবং Apache 2.0 দ্বৈত লাইসেন্সপ্রাপ্ত — আপনার প্রজেক্টের প্রয়োজনে যেটি উপযুক্ত সেটি বেছে নিন। বাণিজ্যিক ও ব্যক্তিগত ব্যবহারের জন্য বিনামূল্যে।"
      }
    }
  ]
}
</script>

[উপাদান দেখুন →](/bn/upadan/)
