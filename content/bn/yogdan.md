---
title: "অবদান"
name: "Skeletonic Stylus"
description: "কীভাবে ইস্যু ফাইল করবেন, পরিবর্তন প্রস্তাব করবেন এবং Skeletonic Stylus-এ পুল রিকোয়েস্ট জমা দেবেন।"
layout: page
permalink: https://skeletonic.io/bn/yogdan/
date: 2026-04-08
author: Sebastien Rousseau
language: bn
theme_color: "hsl(210, 100%, 42%)"
keywords: "অবদান, ওপেন সোর্স, পুল রিকোয়েস্ট, ইস্যু, কনভেনশন"
---

Skeletonic Stylus একটি ওপেন-সোর্স প্রজেক্ট; সকল আকারের অবদান
স্বাগত — টাইপো ফিক্স থেকে নতুন কম্পোনেন্ট পর্যন্ত।

<hr class="hr-text" data-content="দ্রুত শুরু">

## দ্রুত শুরু

```bash
# 1. Fork ও clone
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. ইনস্টল (pnpm via corepack)
corepack enable
pnpm install

# 3. বিল্ড
pnpm run build           # সম্পূর্ণ পাইপলাইন (stylus → prettier → stylelint → autoprefixer → csso)

# 4. Lint ও টেস্ট
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="কনভেনশন">

## কনভেনশন

- **ব্রাঞ্চ নাম:** `feat/short-thing`, `fix/short-thing`, `docs/short-thing`।
- **কমিট:** [Conventional Commits](https://www.conventionalcommits.org)।
  সকল কমিট স্বাক্ষরিত।
- **Stylus:** ৪-স্পেস ইনডেন্ট, সেমিকোলন নেই, ম্যাজিক নম্বরের পরিবর্তে
  `$variables` পছন্দ করুন, প্রতিটি পাবলিক ক্লাস cascade layer-এ থাকে।
- **প্রবেশাধিকার:** যেকোনো নতুন কম্পোনেন্ট অবশ্যই WCAG 2.2 AA পূরণ করে
  প্রমাণ করতে হবে; PR খোলার আগে শোকেসের বিরুদ্ধে
  `node scripts/a11y-test.mjs` চালান।
- **সাইজ বাজেট:** মূল স্টাইলশিট **8 KB gzipped**-এর নিচে থাকতে হবে।
  আপনার পরিবর্তন এটি অতিক্রম করলে, PR-এ যুক্তি দিন।

<hr class="hr-text" data-content="পুল রিকোয়েস্ট">

## পুল রিকোয়েস্ট

1. তুচ্ছ নয় এমন কিছুর জন্য প্রথমে একটি ইস্যু খুলুন — পুনঃকাজ এড়ায়।
2. PR ফোকাসড রাখুন: প্রতি PR-এ একটি যৌক্তিক পরিবর্তন।
3. "Unreleased"-এর অধীনে `CHANGELOG.md` আপডেট করুন।
4. রিভিউ অনুরোধের আগে CI সবুজ আছে নিশ্চিত করুন।
5. Squash-merge ডিফল্ট; মার্জের সময় কমিট মেসেজ পরিষ্কার করা হবে।

<hr class="hr-text" data-content="আচরণবিধি">

## আচরণবিধি

অংশগ্রহণের মাধ্যমে, আপনি
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)-এ
মেনে চলতে সম্মত হন। সদয় হোন, ধৈর্য ধরুন, সদিচ্ছা ধরে নিন।

[একটি ইস্যু খুলুন ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[একটি PR খুলুন ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
