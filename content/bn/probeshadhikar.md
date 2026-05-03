---
title: "প্রবেশাধিকার — v2.0.0-এ WCAG 2.2"
name: "Skeletonic Stylus"
description: "WCAG 2.2 সামঞ্জস্যের জন্য v2.0.0 বাক্সের বাইরে কী শিপ করে — ফোকাস রিং, কনট্রাস্ট, স্কিপ লিংক, মোশন এবং ডার্ক মোড।"
layout: page
permalink: https://skeletonic.io/bn/probeshadhikar/
date: 2026-04-08
author: Sebastien Rousseau
language: bn
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, প্রবেশাধিকার, focus visible, skip link, prefers reduced motion, কনট্রাস্ট"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

> **Skeletonic Stylus v2.0.0 WCAG 2.2 সামঞ্জস্যকে ডিফল্ট আচরণ
> হিসেবে শিপ করে, ঐচ্ছিক থিম হিসেবে নয়।** এই পেজ ডকুমেন্ট করে
> কী অন্তর্নির্মিত এবং সূক্ষ্ম নিয়ন্ত্রণের জন্য কোন মিক্সিনে
> অপ্ট ইন করতে পারেন।

<hr class="hr-text" data-content="বাক্সের বাইরে">

## আপনি বিনামূল্যে যা পান

| WCAG 2.2 SC | v2.0.0 কী করে | কীভাবে যাচাই করবেন |
|---|---|---|
| **1.4.3 কনট্রাস্ট (ন্যূনতম) — AA** | `--cl-primary` ও `--cl-secondary` সাদার বিপরীতে ≥ 4.5:1 এ গাঢ় করা | DevTools → contrast checker |
| **1.4.11 নন-টেক্সট কনট্রাস্ট — AA** | ফর্ম বর্ডার, বাটন, ব্যাজ সব ≥ 3:1 | একই |
| **2.4.7 ফোকাস ভিজিবল — AA** | প্রতিটি ফোকাসযোগ্য এলিমেন্টে একটি `:focus-visible` রিং (অন্ধকার পটভূমিতে হলুদ, হালকায় নীল) | যেকোনো পেজে `Tab` চাপুন |
| **2.4.11 ফোকাস নট অবস্কিউরড — AA (2.2-এ নতুন)** | স্টিকি হেডারের হ্রাসকৃত উচ্চতা + ফোকাস scroll-margin | স্টিকি হেডারের পরে `Tab` চাপুন |
| **2.5.8 টার্গেট সাইজ — AA (2.2-এ নতুন)** | বাটন / লিংক: ≥ 24×24 CSS px হিট এরিয়া | DevTools box model |
| **1.4.12 টেক্সট স্পেসিং — AA** | সকল এলিমেন্ট ব্যবহারকারীর line-height / letter-spacing ওভাররাইড সম্মান করে | DevTools-এ ওভাররাইড করুন |
| **2.3.3 ইন্টারেকশন থেকে অ্যানিমেশন — AAA** | সকল অ্যানিমেশন ক্লাস `@media (prefers-reduced-motion: no-preference)` এ মোড়ানো | OS-স্তরের reduce-motion |
| **1.4.10 রিফ্লো — AA** | ৩২০ px-এ হরাইজন্টাল স্ক্রোল ছাড়া লেআউট কাজ করে | DevTools সরু ভিউপোর্ট |
| **ডার্ক মোড** | `prefers-color-scheme: dark` স্বয়ংক্রিয়ভাবে টোকেন পরিবর্তন করে | OS ডার্ক-মোড টগল |

<hr class="hr-text" data-content="মিক্সিন">

## আপনি অপ্ট ইন করতে পারেন এমন Stylus মিক্সিন

আপনি সোর্স থেকে কম্পাইল করলে, নিম্নলিখিত মিক্সিন
`src/stylus/utilities/mixins.styl`-এ পাওয়া যায়:

| মিক্সিন | ব্যবহার |
|---|---|
| `focus-ring()` | উচ্চ-কনট্রাস্ট ফোকাস রিং `:focus-visible` সম্মান করে |
| `visually-hidden()` | স্ক্রিন-রিডার-শুধু টেক্সট যা ফোকাসযোগ্য থাকে |
| `skip-link()` | অ্যাংকর যা ফোকাসে দৃশ্যমান হয় |
| `reduced-motion()` | যেকোনো ব্লককে `prefers-reduced-motion: no-preference`-এ মোড়ায় |
| `forced-colors()` | Windows High Contrast Mode-এর জন্য সমন্বয় |
| `target-size(24px)` | যেকোনো ক্লিকযোগ্যকে ন্যূনতম ট্যাপ টার্গেটে প্যাড করে |

উদাহরণ:

```stylus
// একটি কাস্টম বাটনে শক্তিশালী ফোকাস রিং প্রয়োগ
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="স্কিপ লিংক">

## skip-link সহায়ক

**`<body>`-র ভিতরে প্রথম জিনিস** হিসেবে এটি রাখুন:

```html
<a href="#main-content" class="skip-link">মূল বিষয়বস্তুতে যান</a>
```

ক্লাসটি মূল স্টাইলশিটে **নেই** (তাই পেজ ওয়েট নড়ে না); এটি
একটি ৪-লাইন স্নিপেট যা আপনি নিজে তৈরি করেন অথবা অন্তর্ভুক্ত
`skip-link()` মিক্সিন ব্যবহার করেন। এই সাইট এটি ব্যবহার করে —
পেজে ফোকাস করে Tab চাপুন, উপরে-বাঁয়ে দেখতে পাবেন।

<hr class="hr-text" data-content="যাচাই">

## আপনার নিজের পেজ যাচাই করা

লাইব্রেরি `scripts/`-এর অধীনে একটি `a11y-test.mjs` স্ক্রিপ্ট শিপ করে যা
আপনার দেওয়া প্রতিটি URL-এ [axe-core](https://github.com/dequelabs/axe-core)
চালায়।

```bash
node scripts/a11y-test.mjs https://example.com
```

CI প্রতিটি পুশে `dist/index.html` শোকেস পেজের বিরুদ্ধে এই স্ক্রিপ্ট চালায়।

[v2.0.0 রিলিজ সম্পর্কে পড়ুন →](/bn/poriborton-talika/) ·
[নিরাপত্তা পেজ দেখুন →](/bn/nirapotta/)
