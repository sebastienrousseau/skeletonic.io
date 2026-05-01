---
title: "सुलभता — v2.0.0 में WCAG 2.2"
name: "Skeletonic Stylus"
description: "v2.0.0 WCAG 2.2 अनुरूपता के लिए बॉक्स से क्या शिप करती है — फ़ोकस रिंग, कंट्रास्ट, स्किप लिंक, मोशन और डार्क मोड।"
layout: page
permalink: https://skeletonic.io/hi/sulabhata/
date: 2026-04-08
author: Sebastien Rousseau
language: hi
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, सुलभता, focus visible, skip link, prefers reduced motion, कंट्रास्ट"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

> **Skeletonic Stylus v2.0.0 WCAG 2.2 अनुरूपता को डिफ़ॉल्ट व्यवहार
> के रूप में शिप करती है, वैकल्पिक थीम के रूप में नहीं।** यह पेज
> बताता है कि क्या अंतर्निहित है और बारीक नियंत्रण के लिए कौन से
> मिक्सिन उपलब्ध हैं।

<hr class="hr-text" data-content="बॉक्स से बाहर">

## आपको मुफ़्त में क्या मिलता है

| WCAG 2.2 SC | v2.0.0 क्या करती है | कैसे सत्यापित करें |
|---|---|---|
| **1.4.3 कंट्रास्ट (न्यूनतम) — AA** | `--cl-primary` और `--cl-secondary` को सफ़ेद के विरुद्ध ≥ 4.5:1 तक गहरा किया गया | DevTools → contrast checker |
| **1.4.11 गैर-टेक्स्ट कंट्रास्ट — AA** | फ़ॉर्म बॉर्डर, बटन, बैज सब ≥ 3:1 | वही |
| **2.4.7 फ़ोकस विज़िबल — AA** | हर फ़ोकस योग्य तत्व पर `:focus-visible` रिंग (अंधेरी पृष्ठभूमि पर पीला, हल्की पर नीला) | पेज पर `Tab` करें |
| **2.4.11 फ़ोकस अस्पष्ट नहीं — AA (2.2 में नया)** | स्टिकी हेडर की कम ऊँचाई + फ़ोकस scroll-margin | स्टिकी हेडर के पार `Tab` करें |
| **2.5.8 टार्गेट साइज़ — AA (2.2 में नया)** | बटन / लिंक: ≥ 24×24 CSS px हिट एरिया | DevTools box model |
| **1.4.12 टेक्स्ट स्पेसिंग — AA** | सभी तत्व उपयोगकर्ता line-height / letter-spacing ओवरराइड का सम्मान करते हैं | DevTools में ओवरराइड करें |
| **2.3.3 इंटरैक्शन से एनिमेशन — AAA** | सभी एनिमेशन क्लास `@media (prefers-reduced-motion: no-preference)` में लपेटी हैं | OS-स्तर reduce-motion |
| **1.4.10 Reflow — AA** | लेआउट 320 px पर बिना क्षैतिज स्क्रॉल के काम करता है | DevTools संकीर्ण viewport |
| **डार्क मोड** | `prefers-color-scheme: dark` स्वचालित रूप से टोकन बदलता है | OS डार्क-मोड टॉगल |

<hr class="hr-text" data-content="मिक्सिन">

## Stylus मिक्सिन जिन्हें आप सक्रिय कर सकते हैं

यदि आप सोर्स से कंपाइल करते हैं, तो निम्न मिक्सिन
`src/stylus/utilities/mixins.styl` में उपलब्ध हैं:

| मिक्सिन | उपयोग |
|---|---|
| `focus-ring()` | `:focus-visible` का सम्मान करने वाली उच्च-कंट्रास्ट फ़ोकस रिंग |
| `visually-hidden()` | स्क्रीन-रीडर-ओनली टेक्स्ट जो फ़ोकस योग्य रहता है |
| `skip-link()` | फ़ोकस पर दिखने वाला एंकर |
| `reduced-motion()` | किसी भी ब्लॉक को `prefers-reduced-motion: no-preference` में लपेटता है |
| `forced-colors()` | Windows High Contrast Mode के लिए समायोजन |
| `target-size(24px)` | किसी भी क्लिक करने योग्य तत्व को न्यूनतम टैप टार्गेट तक पैड करता है |

उदाहरण:

```stylus
// कस्टम बटन पर मज़बूत फ़ोकस रिंग लागू करें
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="स्किप लिंक">

## स्किप-लिंक हेल्पर

इसे **`<body>` के अंदर सबसे पहले** डालें:

```html
<a href="#main-content" class="skip-link">मुख्य सामग्री पर जाएँ</a>
```

यह क्लास कोर स्टाइलशीट में **नहीं** है (ताकि पेज वेट न बढ़े); यह
4-पंक्ति का स्निपेट है जो आप स्वयं बनाते हैं या शामिल `skip-link()`
मिक्सिन इस्तेमाल करते हैं। यह साइट इसे इस्तेमाल करती है — पेज पर
फ़ोकस करें और Tab दबाएँ, यह ऊपर-बाएँ दिखेगा।

<hr class="hr-text" data-content="सत्यापन">

## अपने पेजों को सत्यापित करना

लाइब्रेरी `scripts/` के अंतर्गत एक `a11y-test.mjs` स्क्रिप्ट शिप
करती है जो आपके द्वारा दिए गए हर URL पर
[axe-core](https://github.com/dequelabs/axe-core) चलाती है।

```bash
node scripts/a11y-test.mjs https://example.com
```

CI हर push पर `dist/index.html` शोकेस पेज पर यह स्क्रिप्ट चलाता
है।

[v2.0.0 रिलीज़ के बारे में पढ़ें →](/hi/parivartan-log/) ·
[सुरक्षा पेज देखें →](/hi/suraksha/)
