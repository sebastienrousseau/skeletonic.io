---
title: "रंग पट्टी"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus v1.1.7 में शिप Material, Tachyons और web-safe रंग पैलेट।"
layout: page
permalink: https://skeletonic.io/hi/rang-patti/
date: 2026-04-08
author: Sebastien Rousseau
language: hi
theme_color: "hsl(210, 100%, 42%)"
keywords: "css पैलेट, material, tachyons, websafe, डिज़ाइन टोकन"
---

Skeletonic Stylus v1.1.7 **तीन वैकल्पिक रंग पैलेट** शिप करती है,
प्रत्येक अपनी minified स्टाइलशीट के रूप में ताकि आप केवल उतना ही
भुगतान करें जितना इस्तेमाल करें।

| पैलेट | फ़ाइल | आकार (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | ≈17.4 KB |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7.3 KB |
| Web-safe | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | ≈3.5 KB |

यह पेज **Tachyons** पैलेट लोड कर रहा है ताकि नीचे दिए गए रंग
यूटिलिटी क्लास सही रेंडर हों।

<hr class="hr-text" data-content="ग्रे">

## Skeletonic कोर ग्रे

कोर स्टाइलशीट एक सुलभ 11-स्टेप ग्रे स्केल शिप करती है जो
`--cl-grey-100` … `--cl-grey-1000` के रूप में एक्सपोज़ है।

<div style="display:flex;flex-wrap:wrap;gap:.5rem;">
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

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
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

<hr class="hr-text" data-content="ब्रांड">

## ब्रांड रंग (v1.1.7 — AA कंट्रास्ट)

v1.1.7 में प्राइमरी और सेकंडरी टोकन को गहरा किया गया ताकि सफ़ेद
टेक्स्ट के विरुद्ध **WCAG 4.5:1** कंट्रास्ट बॉक्स से निकलते ही पूरा
हो।

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

> **ध्यान दें.** `--cl-tertiary` (#757c8a) सफ़ेद पृष्ठभूमि पर 4.71:1
> कंट्रास्ट अनुपात प्राप्त करता है — **बड़े टेक्स्ट** (18 px बोल्ड /
> 24 px सामान्य या अधिक) के लिए AA-अनुरूप, लेकिन बॉडी टेक्स्ट के लिए
> नहीं। गहरे रंग की पृष्ठभूमि के साथ जोड़ें या केवल गैर-आवश्यक
> सजावटी तत्वों के लिए उपयोग करें।

<hr class="hr-text" data-content="Tachyons">

## Tachyons पैलेट यूटिलिटी क्लास

जब आप `skeletonic-tachyons.min.css` लोड करते हैं तो आपको एकल-उद्देश्य
रंग क्लास का पूरा सेट मिलता है — वही शिप आर्टिफ़ैक्ट, ऑप्ट-इन
मॉड्यूल।

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

पूर्ण Tachyons पैलेट स्पेक
[tachyons.io/docs/themes/skins](https://tachyons.io/docs/themes/skins/)
पर प्रलेखित है; यहाँ शिप किया गया संस्करण वही है जो Skeletonic
कंपाइल करती है।

[घटकों पर वापस →](/hi/ghatak/)
