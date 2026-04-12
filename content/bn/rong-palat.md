---
title: "রঙ প্যালেট"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus v1.1.7-এর সাথে শিপ করা Material, Tachyons এবং web-safe রঙ প্যালেট।"
layout: page
permalink: https://skeletonic.io/bn/rong-palat/
date: 2026-04-08
author: Sebastien Rousseau
language: bn
theme_color: "hsl(210, 100%, 42%)"
keywords: "css palette, material, tachyons, websafe, design tokens"
---

Skeletonic Stylus v1.1.7 **তিনটি ঐচ্ছিক রঙ প্যালেট** শিপ করে,
প্রতিটি নিজস্ব মিনিফাইড স্টাইলশিট হিসেবে বিতরিত যাতে আপনি শুধু
যা ব্যবহার করেন তার জন্যই খরচ করেন।

| প্যালেট | ফাইল | আকার (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | ≈17.4 KB |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7.3 KB |
| Web-safe | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | ≈3.5 KB |

এই পেজটি **Tachyons** প্যালেট লোড করছে যাতে নিচের রঙ ইউটিলিটি
ক্লাসগুলো সঠিকভাবে রেন্ডার হয়।

<hr class="hr-text" data-content="ধূসর">

## Skeletonic মূল ধূসর স্কেল

মূল স্টাইলশিট একটি অ্যাক্সেসিবল ১১-ধাপ ধূসর স্কেল শিপ করে
`--cl-grey-100` … `--cl-grey-1000` হিসেবে।

<div class="row">
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-100);">
    100
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-300);">
    300
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-500);color:#fff;">
    500
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-700);color:#fff;">
    700
  </div>
</div>

<div class="row">
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-200);">
    200
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-400);">
    400
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-600);color:#fff;">
    600
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-900);color:#fff;">
    900
  </div>
</div>

<hr class="hr-text" data-content="ব্র্যান্ড">

## ব্র্যান্ড রঙ (v1.1.7 — AA কনট্রাস্ট)

v1.1.7-এ প্রাইমারি ও সেকেন্ডারি টোকেন সাদা টেক্সটের বিপরীতে
**WCAG 4.5:1** কনট্রাস্ট পূরণ করতে গাঢ় করা হয়েছে।

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1rem;">
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:hsl(210, 100%, 42%);color:#fff;">
    <strong>--cl-primary</strong><br>hsl(210 100% 42%)
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:hsl(195, 100%, 33%);color:#fff;">
    <strong>--cl-secondary</strong><br>hsl(195 100% 33%)
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:#757c8a;color:#fff;">
    <strong>--cl-tertiary</strong><br>#757c8a
  </div>
</div>

> **টীকা।** `--cl-tertiary` (#757c8a) সাদা পটভূমির বিপরীতে 4.71:1
> কনট্রাস্ট অনুপাত অর্জন করে — **বড় টেক্সটের** জন্য AA-সামঞ্জস্যপূর্ণ
> (≥ 18 px বোল্ড / ≥ 24 px রেগুলার) কিন্তু বডি টেক্সটের জন্য নয়।
> গাঢ় পটভূমির সাথে জোড়া দিন অথবা শুধু অপ্রয়োজনীয় সজ্জাসংক্রান্ত
> উপাদানের জন্য ব্যবহার করুন।

<hr class="hr-text" data-content="Tachyons">

## Tachyons প্যালেট ইউটিলিটি ক্লাস

আপনি `skeletonic-tachyons.min.css` লোড করলে একক-উদ্দেশ্যের রঙ
ক্লাসের একটি সম্পূর্ণ সেট পাবেন — একই শিপড আর্টিফ্যাক্ট, অপ্ট-ইন মডিউল।

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

সম্পূর্ণ Tachyons প্যালেট স্পেসিফিকেশন ডকুমেন্ট করা আছে
[tachyons.io/docs/themes/colors](https://tachyons.io/docs/themes/colors/)-এ;
এখানে শিপ করা সংস্করণটি Skeletonic যা কম্পাইল করে।

[উপাদানে ফিরে যান →](/bn/upadan/)
