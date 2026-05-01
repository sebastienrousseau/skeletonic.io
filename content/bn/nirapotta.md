---
title: "নিরাপত্তা ও সাপ্লাই চেইন"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus v2.0.0 কীভাবে তার বিল্ড পাইপলাইন সুরক্ষিত করে, রিলিজ স্বাক্ষর করে এবং SBOM শিপ করে।"
layout: page
permalink: https://skeletonic.io/bn/nirapotta/
date: 2026-04-08
author: Sebastien Rousseau
language: bn
theme_color: "hsl(210, 100%, 42%)"
keywords: "css নিরাপত্তা, sbom, cyclonedx, npm provenance, openssf scorecard, সাপ্লাই চেইন"
---

## পারফরম্যান্স

- **45.0&nbsp;KB মিনিফাইড · 8.6&nbsp;KB gzipped · 7.2&nbsp;KB brotli** সম্পূর্ণ মূল স্টাইলশিটের জন্য।
- **শূন্য জাভাস্ক্রিপ্ট** — বিশুদ্ধ Stylus → বিশুদ্ধ CSS, কোনো রানটাইম খরচ নেই।
- **Cascade-layered** — `!important` ছাড়াই ওভাররাইড জেতে।
- **`size-limit` বাজেট** প্রতিটি কমিটে CI-তে বাধ্যতামূলক।

পারফরম্যান্স একটি নিরাপত্তা নিয়ন্ত্রণ। প্রতিটি বাইট যা শিপ করা হয় না
তা অডিট, স্বাক্ষর ও যাচাই করার একটি কম বাইট।

## সাপ্লাই-চেইন সারসংক্ষেপ

| নিয়ন্ত্রণ | v2.0.0 অবস্থা |
|---|---|
| **CycloneDX SBOM** | প্রতিটি রিলিজে তৈরি, `dist/sbom.json`-এর অধীনে কমিটেড |
| **npm provenance** | সক্রিয় (`--provenance --access public`) |
| **স্বাক্ষরিত git ট্যাগ** | রক্ষণাবেক্ষক কী দ্বারা SSH-স্বাক্ষরিত |
| **পিন করা Dependabot** | সাপ্তাহিক বাম্প, স্বয়ংক্রিয় পর্যালোচিত |
| **সাইজ বাজেট** | `size-limit` 8 KB gzipped সীমা, রিগ্রেশনে CI ব্যর্থ |
| **Lint** | প্রতিটি পুশে `stylelint` + a11y assertions |
| **CodeQL** | `javascript` ও কনফিগ ফাইলের জন্য সক্রিয় |
| **CVE-2023-44270** | `pnpm.overrides` দিয়ে `postcss@7` ফ্লাশ করে **প্যাচড** |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

প্রতিটি প্রকাশিত tarball-এ `dist/sbom.json`-এ একটি CycloneDX SBOM
অন্তর্ভুক্ত। আপনি সদ্য ইনস্টল করা প্যাকেজ যাচাই করতে পারেন:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "2.0.0"
```

SBOM প্রকাশ ওয়ার্কফ্লোতে `cyclonedx-npm` দিয়ে তৈরি হয়।

<hr class="hr-text" data-content="Provenance">

## npm provenance

প্রকাশিত আর্টিফ্যাক্ট
[npm package provenance](https://docs.npmjs.com/generating-provenance-statements)
ব্যবহার করে স্বাক্ষরিত।

ইনস্টলের পর এটি যাচাই করতে পারেন:

```bash
npm view @sebastienrousseau/skeletonic-stylus@2.0.0 --json | \
  jq '.dist."npm-signature"'
```

স্বাক্ষরিত attestation tarball-কে সেই সঠিক GitHub Actions রানের
সাথে সংযুক্ত করে যেটি এটি তৈরি করেছে।

<hr class="hr-text" data-content="CVE">

## পরিচিত CVE ও প্যাচ

| CVE | তীব্রতা | অবস্থা |
|---|---|---|
| **CVE-2023-44270** (postcss line return parsing) | মধ্যম | `pnpm.overrides` দিয়ে `postcss` ≥ 8.4.31 এ আপগ্রেড করে v2.0.0-এ **প্যাচড** |

Snyk পরামর্শ ডেটাবেস ও GitHub Security Advisories ফিড ক্রমাগত
পর্যবেক্ষণ করা হয়; নিরাপত্তা প্যাচ **patch-level রিলিজ** হিসেবে শিপ করা হয়।

<hr class="hr-text" data-content="রিপোর্ট">

## দুর্বলতা রিপোর্ট করা

অনুগ্রহ করে নিরাপত্তা রিপোর্টের জন্য পাবলিক GitHub ইস্যু **খুলবেন না**।
পরিবর্তে, প্রাইভেট চ্যানেল ব্যবহার করুন:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

রিপোর্ট **৭২ ঘণ্টার** মধ্যে স্বীকৃত হয় এবং মধ্যম সমস্যার জন্য
**১৪ দিনের** মধ্যে, জটিল সমস্যার জন্য **৪৮ ঘণ্টার** মধ্যে ফিক্স শিপ
করা হয়।

[হোমে ফিরে যান →](/bn/) · [পরিবর্তন তালিকা পড়ুন →](/bn/poriborton-talika/)
