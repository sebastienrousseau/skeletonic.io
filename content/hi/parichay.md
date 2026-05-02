---
title: "Skeletonic Stylus के बारे में"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus एक ओपन-सोर्स Stylus CSS लाइब्रेरी है — सुलभ, तेज़ और मॉड्यूलर UI स्टाइलिंग के लिए।"
layout: page
permalink: https://skeletonic.io/hi/parichay/
date: 2026-04-08
author: Sebastien Rousseau
language: hi
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, परिचय, stylus, css framework, दर्शन"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

<p class="badges">
  <img alt="GitHub Stars" src="https://img.shields.io/github/stars/sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Stars" height="28" loading="lazy">
  <img alt="Monthly Downloads" src="https://img.shields.io/npm/dm/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Downloads" height="28" loading="lazy">
  <img alt="npm Version" src="https://img.shields.io/npm/v/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=npm" height="28" loading="lazy">
  <img alt="Bundle Size" src="https://img.shields.io/badge/gzip-8.0%20KB-brightgreen?style=for-the-badge" height="28" loading="lazy">
  <img alt="License" src="https://img.shields.io/npm/l/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=License" height="28" loading="lazy">
  <img alt="WCAG" src="https://img.shields.io/badge/WCAG-2.2%20AA-2e7d32?style=for-the-badge" height="28" loading="lazy">
</p>

## संक्षिप्त परिचय

**Skeletonic Stylus** एक ओपन-सोर्स [Stylus](https://stylus-lang.com)
CSS लाइब्रेरी है — सुलभ, तेज़ और मॉड्यूलर UI स्टाइलिंग के लिए।

2018 में **कम CSS भेजने** के एक व्यक्तिगत प्रयोग के रूप में शुरू हुई,
बिना किसी वास्तविक कंपोनेंट लाइब्रेरी की सुविधाओं को छोड़े। आठ साल
बाद भी, लक्ष्य वही है।

## यह आपको क्या देती है

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="बिजली की गति" width="64" height="64" loading="lazy" decoding="async">
    <h3>अत्यंत तेज़</h3>
    <p>मिनटों में रिस्पॉन्सिव इंटरफ़ेस डिज़ाइन और अनुकूलित करें। नेटिव CSS वेरिएबल, पूर्वनिर्धारित क्लास, हर सिमैंटिक HTML तत्व को कवर करने वाला 12-कॉलम ग्रिड।</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="हल्का" width="64" height="64" loading="lazy" decoding="async">
    <h3>हल्की</h3>
    <p>8.0&nbsp;KB gzipped। पेज तेज़ी से लोड होते हैं। हर ज़रूरी बिल्डिंग ब्लॉक शामिल है।</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="रिस्पॉन्सिव डिवाइस" width="64" height="64" loading="lazy" decoding="async">
    <h3>रिस्पॉन्सिव डिज़ाइन</h3>
    <p>डेस्कटॉप और मोबाइल के लिए तैयार। लेआउट किसी भी डिवाइस के अनुकूल। टच-ऑप्टिमाइज़्ड, पूरे में सिमैंटिक HTML।</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="सुलभता" width="64" height="64" loading="lazy" decoding="async">
    <h3>सुलभता</h3>
    <p>WCAG&nbsp;2.2 अंतर्निहित: focus-visible रिंग, AA कंट्रास्ट, skip-link हेल्पर, कीबोर्ड-अनुकूल घटक, reduced-motion सपोर्ट — कोई अतिरिक्त स्टाइलशीट नहीं, कोई <code>aria-*</code> बॉयलरप्लेट नहीं।</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="कंपोनेंट ब्लॉक" width="64" height="64" loading="lazy" decoding="async">
    <h3>कंपोनेंट लाइब्रेरी</h3>
    <p>मॉड्यूलर CSS कंपोनेंट और Stylus मिक्सिन। बटन, फ़ॉर्म, कार्ड, अलर्ट, बैज, पैलेट और एनिमेशन — साफ़, मॉड्यूलर, तुरंत उपयोग के लिए तैयार।</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="GitHub चिह्न" width="64" height="64" loading="lazy" decoding="async">
    <h3>निःशुल्क और ओपन सोर्स</h3>
    <p>Sebastien Rousseau द्वारा डिज़ाइन, निर्मित और अनुरक्षित। <strong>MIT</strong> या <strong>Apache&nbsp;2.0</strong> के तहत दोहरा लाइसेंस। कोई शुल्क नहीं, व्यावसायिक उपयोग के लिए भी।</p>
  </article>
</div>

## तुलना

एक स्व-होस्टेड स्टाइलशीट टाइपोग्राफ़ी, बटन, फ़ॉर्म, कार्ड,
टेबल, पैलेट, एनिमेशन और यूटिलिटी क्लास को कवर करती है। कोई
JavaScript नहीं। कोई बिल्ड स्टेप ज़रूरी नहीं। Bootstrap, Tailwind या
Bulma पर कोई निर्भरता नहीं।

| सुविधा | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| Gzipped आकार | **8.0&nbsp;KB** | ~30&nbsp;KB | ~10&nbsp;KB (varies) | ~30&nbsp;KB |
| WCAG 2.2 अनुरूपता | **अंतर्निहित** | आंशिक | मैनुअल | आंशिक |
| Cascade layers | **हाँ (`@layer`)** | नहीं | नहीं | नहीं |
| डार्क मोड | **`prefers-color-scheme`** | ऑप्ट-इन | Class-based | ऑप्ट-इन |
| JavaScript आवश्यक | **नहीं** | हाँ (Popper) | नहीं | नहीं |
| CycloneDX SBOM | **हाँ** | नहीं | नहीं | नहीं |
| Reduced-motion | **सम्मानित** | आंशिक | मैनुअल | आंशिक |
| लाइसेंस | MIT या Apache 2.0 | MIT | MIT | MIT |

## सिद्धांत

1. **सुलभता न्यूनतम है, अधिकतम नहीं।** WCAG 2.2 अनुरूपता हर
   घटक में अंतर्निहित है, कभी "थीम" के रूप में बाद में नहीं जोड़ी जाती।
2. **बाइट्स मायने रखते हैं।** एक शिप की गई स्टाइलशीट को आपके
   पेज-वेट बजट को पार नहीं करना चाहिए। 8&nbsp;KB gzipped की सीमा
   CI में लागू है।
3. **Cascade layers specificity युद्ध जीतती हैं।** विश्वास के साथ
   कुछ भी ओवरराइड करें — कोई `!important` नहीं, कोई DOM-order ट्रिक
   नहीं।
4. **Stylus अभी भी अच्छा है।** संक्षिप्त, अभिव्यंजक, और लाइब्रेरी
   को ~3,000 पठनीय पंक्तियों में रखता है।
5. **सादगी एक सुविधा है।** कोई JS निर्भरता नहीं। कोई बिल्ड-टाइम
   जादू नहीं। कोई ब्रेकिंग रीनेम नहीं। CSS क्लास जो ठीक वही करती
   हैं जो कहती हैं।
6. **सेकंडों में थीम बदलें।** रंगों, स्पेसिंग, टाइप और रेडी के लिए
   नेटिव CSS कस्टम प्रॉपर्टीज़।
7. **आपूर्ति-श्रृंखला सुदृढ़।** हस्ताक्षरित npm provenance। पिन किए
   गए Dependabot अपडेट। `pnpm.overrides` के माध्यम से CVE-2023-44270
   पैच।

## वर्शनिंग और semver

Skeletonic Stylus [Semantic Versioning 2.0](https://semver.org) का पालन करती है।

| बम्प | कब | उदाहरण |
|---|---|---|
| **Major** | किसी पब्लिक क्लास, मिक्सिन, या टोकन को हटाने या नाम बदलने पर | 1.x → 2.0 |
| **Minor** | नया कंपोनेंट, मिक्सिन, या टोकन जोड़ने पर | 1.1 → 1.2 |
| **Patch** | बग फ़िक्स, a11y पॉलिश, प्रदर्शन, सुरक्षा | 1.1.6 → 2.0.0 |

सभी पब्लिक क्लास नाम, सभी CSS कस्टम प्रॉपर्टीज़, और सभी एक्सपोर्ट
किए गए Stylus मिक्सिन पब्लिक API का हिस्सा हैं। ब्रेकिंग बदलाव पर
major बम्प और माइग्रेशन गाइड मिलती है।

## प्रबंधन

Skeletonic Stylus को
[Sebastien Rousseau](https://sebastienrousseau.com) द्वारा डिज़ाइन,
निर्मित और अनुरक्षित किया जाता है। [MIT](https://opensource.org/licenses/MIT)
और [Apache 2.0](https://opensource.org/licenses/Apache-2.0) के तहत दोहरा
लाइसेंस।

मुद्दे, विचार और योगदान स्वागत है —
[योगदान गाइड देखें](/hi/yogdan/)।
