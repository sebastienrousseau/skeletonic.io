---
title: "Skeletonic Stylus के साथ शुरुआत"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus को npm या CDN से इंस्टॉल करें, अपने Stylus बिल्ड में इम्पोर्ट करें, और सेकंडों में वेरिएबल ओवरराइड करें।"
layout: page
permalink: https://skeletonic.io/hi/shuruat/
date: 2026-04-08
author: Sebastien Rousseau
language: hi
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic इंस्टॉल, stylus सेटअप, css cdn, शुरुआत"
---

## परिचय

Skeletonic Stylus में नए हैं? **v1.1.7** में अपनी ज़रूरत की सुविधाएँ
चुनना पहले से कहीं आसान है। अपने छोटे फ़ुटप्रिंट (~7.5&nbsp;KB
gzipped कोर स्टाइलशीट) के कारण, यह किसी भी वेब ऐप में तेज़ी से
इंटीग्रेट होती है — कोई JavaScript फ़्रेमवर्क ज़रूरी नहीं, CDN
इस्तेमाल करें तो कोई बिल्ड स्टेप भी नहीं।

नीचे हर तरीका बताया गया है — अपनी ज़रूरत का चुनें।

## 1. डाउनलोड और इंस्टॉल करें

आप Skeletonic Stylus को **pnpm**, **npm** या **yarn** से इंस्टॉल कर
सकते हैं, या सीधे CDN से लोड कर सकते हैं। आप चाहें तो डिस्ट्रीब्यूशन
फ़ाइलों को लोकली सेल्फ़-होस्ट भी कर सकते हैं।

### पैकेज मैनेजर से (अनुशंसित)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7

# npm
npm install @sebastienrousseau/skeletonic-stylus@1.1.7

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@1.1.7
```

### CDN से

यदि आपको केवल कंपाइल्ड CSS चाहिए, तो इनमें से एक को अपने `<head>` में डालें:

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

अधिकतम सुरक्षा के लिए, v1.1.7 रिलीज़ नोट्स से **SRI hash** कॉपी
करें और `integrity="sha384-…"` एट्रिब्यूट जोड़ें।

### वैकल्पिक CDN स्थान

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css` | हाँ | हाँ |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css` | हाँ | नहीं |

### GitHub रिलीज़ डाउनलोड करें

वर्शन्ड tarball चाहिए?
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
से नवीनतम रिलीज़ डाउनलोड करें और `dist/` की सामग्री को सीधे अपने
प्रोजेक्ट में डालें।

### GitHub रिपॉज़िटरी क्लोन करें

बिल्ड स्क्रिप्ट सहित सभी सोर्स फ़ाइलें पाने के लिए मुख्य
रिपॉज़िटरी क्लोन करें:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **सुझाव:** अपने कमिट साइन करें — प्रोजेक्ट CI में साइन्ड कमिट
> लागू करता है। `git commit -S -m "..."` इस्तेमाल करें (या अपने ग्लोबल
> git config में `commit.gpgsign = true` सेट करें)।

## 2. कंपाइल्ड CSS इस्तेमाल करें

लाइब्रेरी इंस्टॉल होने पर `dist/css/` के अंतर्गत कई प्री-बिल्ट
बंडल शिप करती है:

| फ़ाइल | उद्देश्य | आकार (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | Reset + tokens + layout + elements + components + utilities | 39.9 KB / 7.5 KB |
| `animations/skeletonic-animations.min.css` | वैकल्पिक एनिमेशन मॉड्यूल | ≈213 KB / ≈6.9 KB |
| `palettes/material/skeletonic-material.min.css` | Material रंग पैलेट | ≈17.4 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Tachyons यूटिलिटी पैलेट | 7.3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | Web-safe पैलेट | ≈3.5 KB |

हर मॉड्यूल स्वतंत्र है — अपनी ज़रूरत का सबसे छोटा संयोजन चुनें।

## 3. Stylus से इस्तेमाल करें

यदि आपके पास पहले से Stylus पाइपलाइन है, तो सोर्स मॉड्यूल इम्पोर्ट
करें और अपने बंडलर को अप्रयुक्त भागों को tree-shake करने दें:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

या केवल वही हिस्से इम्पोर्ट करें जो चाहिए:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. ब्रांड रंग ओवरराइड करें

Skeletonic अपने डिज़ाइन टोकन **CSS कस्टम प्रॉपर्टीज़** के रूप में
एक्सपोज़ करती है ताकि आप Stylus रीकंपाइल किए बिना थीम बदल सकें:

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

बस इतना ही — प्राइमरी रंग इस्तेमाल करने वाला हर घटक इसका अनुसरण
करेगा।

## 5. इंस्टॉलेशन सत्यापित करें

एक न्यूनतम "क्या यह काम कर रहा है?" जाँच:

```html
<!doctype html>
<html lang="hi">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>यह काम कर रहा है।</h1>
    <a href="#" class="button primary">नमस्ते, दुनिया</a>
  </body>
</html>
```

यदि शीर्षक फ़्लूइडली साइज़ हो रहा है और बटन नीले पिल आकार में है, तो
आप तैयार हैं।

## 6. क्या शामिल है

पैकेज के अंदर आपको हर सोर्स फ़ाइल, कंपाइल्ड और मिनिफ़ाइड CSS
बंडल, सोर्स मैप, और श्रेणी के अनुसार व्यवस्थित पूर्ण Stylus ट्री
मिलेगा:

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
        └── skeletonic.styl  ← single import जो सब कुछ खींचता है
```

हर मॉड्यूल स्वतंत्र है — अपनी CSS पेलोड को यथासंभव छोटा रखने के
लिए केवल वही बंडल शामिल करें जिनकी ज़रूरत है।

## अक्सर पूछे जाने वाले प्रश्न

**Skeletonic Stylus कैसे इंस्टॉल करें?**
`pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7` चलाएँ। या कंपाइल्ड
CSS सीधे CDN से लोड करें — कोई बिल्ड स्टेप ज़रूरी नहीं।

**क्या इसे JavaScript चाहिए?**
नहीं। कोर स्टाइलशीट शुद्ध CSS है, शून्य रनटाइम लागत के साथ। घटक
बिना JS की एक भी पंक्ति के काम करते हैं।

**क्या यह WCAG 2.2 तैयार है?**
हाँ। v1.1.7 AA-अनुरूप कंट्रास्ट, focus-visible रिंग, skip-link
हेल्पर, reduced-motion सपोर्ट और डार्क मोड डिफ़ॉल्ट रूप से शिप
करता है।

**Gzipped आकार कितना है?**
39.9&nbsp;KB minified, **~7.5&nbsp;KB gzipped**, ~6.3&nbsp;KB brotli
पूर्ण कोर स्टाइलशीट के लिए। 8&nbsp;KB की सीमा CI में लागू है।

**कौन सा लाइसेंस है?**
MIT और Apache 2.0 के तहत दोहरा लाइसेंस — जो भी आपके प्रोजेक्ट को
चाहिए वो चुनें। व्यावसायिक और व्यक्तिगत उपयोग के लिए निःशुल्क।

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Skeletonic Stylus कैसे इंस्टॉल करें?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7 चलाएँ। या कंपाइल्ड CSS सीधे CDN से लोड करें — कोई बिल्ड स्टेप ज़रूरी नहीं।"
      }
    },
    {
      "@type": "Question",
      "name": "क्या Skeletonic Stylus को JavaScript चाहिए?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "नहीं। कोर स्टाइलशीट शुद्ध CSS है, शून्य रनटाइम लागत के साथ। घटक बिना JavaScript की एक भी पंक्ति के काम करते हैं।"
      }
    },
    {
      "@type": "Question",
      "name": "क्या Skeletonic Stylus WCAG 2.2 तैयार है?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "हाँ। v1.1.7 AA-अनुरूप कंट्रास्ट, focus-visible रिंग, skip-link हेल्पर, reduced-motion सपोर्ट और डार्क मोड डिफ़ॉल्ट रूप से शिप करता है।"
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus का gzipped आकार कितना है?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "39.9 KB minified, ~7.5 KB gzipped, ~6.3 KB brotli पूर्ण कोर स्टाइलशीट के लिए। 8 KB की सीमा हर कमिट पर CI में लागू है।"
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus कौन सा लाइसेंस इस्तेमाल करती है?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MIT और Apache 2.0 के तहत दोहरा लाइसेंस — जो भी आपके प्रोजेक्ट को चाहिए वो चुनें। व्यावसायिक और व्यक्तिगत उपयोग के लिए निःशुल्क।"
      }
    }
  ]
}
</script>

[घटक देखें →](/hi/ghatak/)
