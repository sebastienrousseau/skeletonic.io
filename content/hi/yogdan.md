---
title: "योगदान करें"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus में मुद्दे दर्ज करने, बदलाव प्रस्तावित करने और पुल रिक्वेस्ट सबमिट करने का तरीक़ा।"
layout: page
permalink: https://skeletonic.io/hi/yogdan/
date: 2026-04-08
author: Sebastien Rousseau
language: hi
theme_color: "hsl(210, 100%, 42%)"
keywords: "योगदान, ओपन सोर्स, पुल रिक्वेस्ट, मुद्दा, परंपराएँ"
---

Skeletonic Stylus एक ओपन-सोर्स प्रोजेक्ट है; हर आकार के योगदान
स्वागत है — टाइपो फ़िक्स से लेकर नए घटकों तक।

<hr class="hr-text" data-content="त्वरित शुरुआत">

## त्वरित शुरुआत

```bash
# 1. Fork और clone करें
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. इंस्टॉल करें (pnpm via corepack)
corepack enable
pnpm install

# 3. बिल्ड करें
pnpm run build           # पूर्ण पाइपलाइन (stylus → prettier → stylelint → autoprefixer → csso)

# 4. Lint और टेस्ट करें
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="परंपराएँ">

## परंपराएँ

- **शाखा नाम:** `feat/short-thing`, `fix/short-thing`, `docs/short-thing`।
- **कमिट:** [Conventional Commits](https://www.conventionalcommits.org)।
  सभी कमिट हस्ताक्षरित हैं।
- **Stylus:** 4-स्पेस इंडेंट, कोई सेमीकोलन नहीं, जादुई संख्याओं
  के बजाय `$variables` पसंद करें, हर पब्लिक क्लास cascade layer में
  रहती है।
- **सुलभता:** कोई भी नया घटक प्रमाणित रूप से WCAG 2.2 AA पूरा करे;
  PR खोलने से पहले शोकेस पर `node scripts/a11y-test.mjs` चलाएँ।
- **साइज़ बजट:** कोर स्टाइलशीट **8 KB gzipped** से नीचे रहनी
  चाहिए। यदि आपका बदलाव इसे पार करता है, तो PR में इसका
  औचित्य बताएँ।

<hr class="hr-text" data-content="पुल रिक्वेस्ट">

## पुल रिक्वेस्ट

1. कुछ भी गैर-तुच्छ के लिए पहले एक मुद्दा खोलें — पुनर्कार्य बचता है।
2. PR केंद्रित रखें: प्रति PR एक तार्किक बदलाव।
3. "Unreleased" के अंतर्गत `CHANGELOG.md` अपडेट करें।
4. समीक्षा अनुरोध से पहले सुनिश्चित करें कि CI हरा है।
5. Squash-merge डिफ़ॉल्ट है; merge पर कमिट संदेश साफ़ किए जाएँगे।

<hr class="hr-text" data-content="आचार संहिता">

## आचार संहिता

भाग लेकर, आप
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)
का पालन करने की सहमति देते हैं। दयालु बनें, धैर्य रखें, अच्छे
इरादे मानें।

[मुद्दा खोलें ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[PR खोलें ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
