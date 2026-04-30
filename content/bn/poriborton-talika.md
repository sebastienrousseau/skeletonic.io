---
title: "পরিবর্তন তালিকা"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus-এর রিলিজ নোট, v1.1.7 সম্পূর্ণ বিবরণ সহ।"
layout: page
permalink: https://skeletonic.io/bn/poriborton-talika/
author: Sebastien Rousseau
language: bn
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic পরিবর্তন তালিকা, রিলিজ নোট, v1.1.7, semver"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## v1.1.7 — 2026-04 (বর্তমান)

"রিলিজ-রেডিনেস" পাস: a11y, সাপ্লাই চেইন, রিপো হাইজিন।

### প্রবেশাধিকার (WCAG 2.2)
- বাটন / ব্যাজ / লিংকে সাদা টেক্সটের বিপরীতে AA কনট্রাস্টের জন্য
  **`$primary` গাঢ়** করা হয়েছে `hsl(210, 100%, 42%)`-এ।
- **`$secondary` গাঢ়** করা হয়েছে `hsl(195, 100%, 33%)`-এ।
- প্রতিটি ইন্টারেক্টিভ এলিমেন্টে **focus-visible** রিং যোগ করা হয়েছে।
- অ্যানিমেশন মডিউলে **`@media (prefers-reduced-motion)`** মোড়ক যোগ করা হয়েছে।
- **`prefers-color-scheme: dark`** টোকেন সোয়াপ যোগ করা হয়েছে।
- WCAG 2.2 SC 2.5.8 পূরণ করতে **target-size(24px)** মিক্সিন যোগ করা হয়েছে।
- স্টিকি হেডারের জন্য **focus-not-obscured** scroll-margin সহায়ক যোগ করা হয়েছে।

### বিল্ড ও সাপ্লাই চেইন
- **Cascade layers** — প্রতিটি ব্লক এখন
  `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}`-এ থাকে।
- npm tarball-এর অংশ হিসেবে **CycloneDX SBOM** তৈরি।
- CI-তে **`size-limit` বাজেট** বাধ্যতামূলক: মূল স্টাইলশিটে 8 KB gzipped সীমা।
- **CVE-2023-44270** (postcss line return) `pnpm.overrides` দিয়ে প্যাচড।
- npm publish ওয়ার্কফ্লোতে Provenance + signing
  (`--provenance --access public`)।
- লিন্ট কনফিগ থেকে আর্কাইভড `stylelint-a11y` প্লাগইন অপসারিত।

### রিপো হাইজিন ও কনজিউমার প্যাকেজ
- লেগ্যাসি `package/` ডিরেক্টরি অপসারিত; কনজিউমারদের জন্য `dist/` এখন
  একমাত্র সত্যের উৎস।
- v1.1.7 ইনস্টল পাথ প্রতিফলিত করতে README পুনর্লিখিত।
- `dist/` কমিটেড; `debug/` তৈরি হয় ও gitignored।
- নতুন `.github/workflows/npm-publish.yml` ট্যাগ-চালিত।

### বাগ ফিক্স (P0)
- **`row $:after` প্যারেন্ট-সিলেক্টর রিগ্রেশন** — `src/stylus/components/_grid.styl`-এ
  বিচ্ছিন্ন `$` কে `&` দিয়ে প্রতিস্থাপিত।
- **`.alternate`** ভুলবশত `alternate`-এর পরিবর্তে `animation-direction: reverse`
  প্রয়োগ করেছিল।
- **`.alert-*` নেমস্পেসিং** — স্টেট ক্লাসের সাথে সংঘর্ষ এড়াতে
  `.alert.success` → `.alert.alert-success`।

[সম্পূর্ণ v1.1.7 রিলিজ নোট GitHub-এ ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases/tag/v1.1.7)

<hr class="hr-text" data-content="ইতিহাস">

## পুরানো রিলিজ

- **v1.1.6** — অভ্যন্তরীণ পরিষ্কার, ডিপেন্ডেন্সি বাম্প।
- **v1.1.5** — Material প্যালেট যোগ।
- **v1.1.0** — Tachyons প্যালেট + গ্রিড রিফ্যাক্টর।
- **v1.0.5** — WCAG 2.2 সুইপের আগে সর্বশেষ "লেগ্যাসি" রিলিজ।
- **v1.0.0** — প্রাথমিক পাবলিক রিলিজ (2018)।

কমিট-বাই-কমিট ইতিহাসের জন্য
[GitHub Releases পেজ ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases) দেখুন।
