---
title: "Skeletonic Stylus সম্পর্কে"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus একটি ওপেন-সোর্স Stylus CSS লাইব্রেরি, অ্যাক্সেসিবল, দ্রুত ও মডুলার UI স্টাইলিংয়ের জন্য।"
layout: page
permalink: https://skeletonic.io/bn/somporke/
date: 2026-04-08
author: Sebastien Rousseau
language: bn
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, সম্পর্কে, stylus, css framework, দর্শন"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

<p class="badges">
  <img alt="GitHub Stars" src="https://img.shields.io/github/stars/sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Stars" height="28" loading="lazy">
  <img alt="Monthly Downloads" src="https://img.shields.io/npm/dm/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Downloads" height="28" loading="lazy">
  <img alt="npm Version" src="https://img.shields.io/npm/v/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=npm" height="28" loading="lazy">
  <img alt="Bundle Size" src="https://img.shields.io/badge/gzip-8.3%20KB-brightgreen?style=for-the-badge" height="28" loading="lazy">
  <img alt="License" src="https://img.shields.io/npm/l/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=License" height="28" loading="lazy">
  <img alt="WCAG" src="https://img.shields.io/badge/WCAG-2.2%20AA-2e7d32?style=for-the-badge" height="28" loading="lazy">
</p>

## সংক্ষেপে

**Skeletonic Stylus** একটি ওপেন-সোর্স [Stylus](https://stylus-lang.com)
CSS লাইব্রেরি, অ্যাক্সেসিবল, দ্রুত ও মডুলার UI স্টাইলিংয়ের জন্য।

২০১৮ সালে **কম CSS শিপ করা**র ব্যক্তিগত পরীক্ষা-নিরীক্ষা হিসেবে
জন্ম নেয়া, একটি প্রকৃত কম্পোনেন্ট লাইব্রেরির সুবিধা ছাড়া নয়।
আট বছর পরও লক্ষ্য অপরিবর্তিত।

## এটি আপনাকে যা দেয়

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="বজ্রগতি" width="64" height="64" loading="lazy" decoding="async">
    <h3>বজ্রগতিতে দ্রুত</h3>
    <p>মিনিটের মধ্যে রেসপন্সিভ ইন্টারফেস ডিজাইন ও কাস্টমাইজ করুন। নেটিভ CSS ভেরিয়েবল, পূর্বনির্ধারিত ক্লাস, প্রতিটি সেমান্টিক HTML এলিমেন্ট কভার করা ১২-কলাম গ্রিড।</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="হালকা" width="64" height="64" loading="lazy" decoding="async">
    <h3>হালকা</h3>
    <p>~৭.৫&nbsp;KB gzipped। পেজ দ্রুত লোড হয়। প্রতিটি অপরিহার্য বিল্ডিং ব্লক অন্তর্ভুক্ত।</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="রেসপন্সিভ ডিভাইস" width="64" height="64" loading="lazy" decoding="async">
    <h3>রেসপন্সিভ ডিজাইন</h3>
    <p>ডেস্কটপ ও মোবাইলের জন্য তৈরি। লেআউট যেকোনো ডিভাইসে মানিয়ে নেয়। টাচ-অপ্টিমাইজড, সর্বত্র সেমান্টিক HTML।</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="প্রবেশাধিকার" width="64" height="64" loading="lazy" decoding="async">
    <h3>প্রবেশাধিকার</h3>
    <p>WCAG&nbsp;2.2 অন্তর্নির্মিত: focus-visible রিং, AA কনট্রাস্ট, skip-link সহায়ক, কীবোর্ড-বান্ধব কম্পোনেন্ট, reduced-motion সমর্থন — কোনো অতিরিক্ত স্টাইলশিট নেই, কোনো <code>aria-*</code> বয়লারপ্লেট নেই।</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="কম্পোনেন্ট ব্লক" width="64" height="64" loading="lazy" decoding="async">
    <h3>কম্পোনেন্ট লাইব্রেরি</h3>
    <p>মডুলার CSS কম্পোনেন্ট ও Stylus মিক্সিন। বাটন, ফর্ম, কার্ড, অ্যালার্ট, ব্যাজ, প্যালেট ও অ্যানিমেশন — পরিচ্ছন্ন, মডুলার, ড্রপ ইন করার জন্য প্রস্তুত।</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="GitHub মার্ক" width="64" height="64" loading="lazy" decoding="async">
    <h3>বিনামূল্যে ও ওপেন সোর্স</h3>
    <p>Sebastien Rousseau দ্বারা ডিজাইনকৃত, নির্মিত ও রক্ষণাবেক্ষিত। <strong>MIT</strong> বা <strong>Apache&nbsp;2.0</strong> দ্বৈত লাইসেন্সপ্রাপ্ত। কোনো ফি নেই, কোনো লাইসেন্সিং খরচ নেই, বাণিজ্যিক ব্যবহারেও।</p>
  </article>
</div>

## তুলনামূলক বিশ্লেষণ

একটি সেলফ-হোস্টেড স্টাইলশিট টাইপোগ্রাফি, বাটন, ফর্ম, কার্ড,
টেবিল, প্যালেট, অ্যানিমেশন এবং ইউটিলিটি ক্লাস কভার করে। কোনো
জাভাস্ক্রিপ্ট নেই। কোনো বিল্ড স্টেপ লাগে না। Bootstrap, Tailwind বা
Bulma-র উপর কোনো নির্ভরতা নেই।

| বৈশিষ্ট্য | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| Gzipped আকার | **~৭.৫&nbsp;KB** | ~৩০&nbsp;KB | ~১০&nbsp;KB (varies) | ~৩০&nbsp;KB |
| WCAG 2.2 সামঞ্জস্য | **অন্তর্নির্মিত** | আংশিক | ম্যানুয়াল | আংশিক |
| Cascade layers | **হ্যাঁ (`@layer`)** | না | না | না |
| ডার্ক মোড | **`prefers-color-scheme`** | অপ্ট-ইন | ক্লাস-ভিত্তিক | অপ্ট-ইন |
| জাভাস্ক্রিপ্ট প্রয়োজন | **না** | হ্যাঁ (Popper) | না | না |
| CycloneDX SBOM | **হ্যাঁ** | না | না | না |
| Reduced-motion | **সম্মানিত** | আংশিক | ম্যানুয়াল | আংশিক |
| লাইসেন্স | MIT বা Apache 2.0 | MIT | MIT | MIT |

## নীতিমালা

1. **প্রবেশাধিকার মেঝে, সিলিং নয়।** WCAG 2.2 সামঞ্জস্য প্রতিটি
   কম্পোনেন্টে অন্তর্নির্মিত, কখনো "থিম" হিসেবে আলাদা করে যোগ করা নয়।
2. **বাইট গুরুত্বপূর্ণ।** একটি শিপ করা স্টাইলশিট আপনার
   পেজ-ওয়েট বাজেট নষ্ট করা উচিত নয়। ৮&nbsp;KB gzipped সীমা CI-তে বাধ্যতামূলক।
3. **Cascade layers specificity যুদ্ধকে পরাজিত করে।** আত্মবিশ্বাসের
   সাথে যেকোনো কিছু ওভাররাইড করুন — কোনো `!important` নেই, কোনো DOM-order কৌশল নেই।
4. **Stylus এখনও চমৎকার।** সংক্ষিপ্ত, অভিব্যক্তিপূর্ণ, এবং
   লাইব্রেরিকে ~৩,০০০ পাঠযোগ্য লাইনে রাখতে সক্ষম।
5. **বিরক্তিকর হওয়াটাই বৈশিষ্ট্য।** কোনো JS নির্ভরতা নেই। কোনো বিল্ড-টাইম
   জাদু নেই। কোনো ব্রেকিং রিনেম নেই। CSS ক্লাস যা ঠিক তা-ই করে যা বলে।
6. **সেকেন্ডে থিম পরিবর্তনযোগ্য।** রঙ, স্পেসিং, টাইপ ও রেডিয়ায়ের জন্য
   নেটিভ CSS কাস্টম প্রপার্টি।
7. **সাপ্লাই-চেইন সুরক্ষিত।** স্বাক্ষরিত npm provenance। পিন করা Dependabot
   আপডেট। CVE-2023-44270 overrides দিয়ে প্যাচড।

## সংস্করণ ও semver

Skeletonic Stylus [Semantic Versioning 2.0](https://semver.org) অনুসরণ করে।

| বাম্প | কখন | উদাহরণ |
|---|---|---|
| **Major** | কোনো পাবলিক ক্লাস, মিক্সিন বা টোকেন অপসারণ বা পুনঃনামকরণ | 1.x → 2.0 |
| **Minor** | নতুন কম্পোনেন্ট, মিক্সিন বা টোকেন যোগ | 1.1 → 1.2 |
| **Patch** | বাগ ফিক্স, a11y উন্নতি, পারফরম্যান্স, নিরাপত্তা | 1.1.6 → 1.1.7 |

সকল পাবলিক ক্লাস নাম, সকল CSS কাস্টম প্রপার্টি এবং সকল এক্সপোর্টেড
Stylus মিক্সিন পাবলিক API-র অংশ। একটি ব্রেকিং পরিবর্তন একটি
major বাম্প এবং একটি মাইগ্রেশন গাইড পায়।

## তত্ত্বাবধান

Skeletonic Stylus ডিজাইন, নির্মাণ ও রক্ষণাবেক্ষণ করেন
[Sebastien Rousseau](https://sebastienrousseau.com)। দ্বৈত লাইসেন্সপ্রাপ্ত
[MIT](https://opensource.org/licenses/MIT) এবং
[Apache 2.0](https://opensource.org/licenses/Apache-2.0)-এর অধীনে।

সমস্যা, ধারণা এবং অবদান স্বাগত —
[অবদান নির্দেশিকা দেখুন](/bn/yogdan/)।
