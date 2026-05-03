---
title: "परिवर्तन लॉग"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus की रिलीज़ नोट्स, v2.0.0 का पूर्ण विवरण।"
layout: page
permalink: https://skeletonic.io/hi/parivartan-log/
author: Sebastien Rousseau
language: hi
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic परिवर्तन लॉग, रिलीज़ नोट्स, v2.0.0, semver"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## v2.0.0 — 2026-04 (वर्तमान)

"रिलीज़-तैयारी" पास: a11y, आपूर्ति श्रृंखला, रिपॉज़िटरी स्वच्छता।

### सुलभता (WCAG 2.2)
- **`$primary` गहरा किया** `hsl(210, 100%, 42%)` पर, बटन / बैज / लिंक
  में सफ़ेद टेक्स्ट के विरुद्ध AA कंट्रास्ट के लिए।
- **`$secondary` गहरा किया** `hsl(195, 100%, 33%)` पर।
- हर इंटरैक्टिव तत्व पर **focus-visible** रिंग जोड़ी।
- एनिमेशन मॉड्यूल के चारों ओर **`@media (prefers-reduced-motion)`**
  wrapper जोड़ा।
- **`prefers-color-scheme: dark`** टोकन स्वैप जोड़ा।
- WCAG 2.2 SC 2.5.8 पूरा करने के लिए **target-size(24px)** मिक्सिन
  जोड़ा।
- स्टिकी हेडर के लिए **focus-not-obscured** scroll-margin हेल्पर
  जोड़े।

### बिल्ड और आपूर्ति श्रृंखला
- **Cascade layers** — हर ब्लॉक अब
  `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}`
  में है।
- npm tarball के हिस्से के रूप में **CycloneDX SBOM** जनरेट।
- CI में **`size-limit` बजट** लागू: कोर स्टाइलशीट पर 8 KB gzipped
  सीमा।
- **CVE-2023-44270** (postcss line return) `pnpm.overrides` से पैच।
- npm प्रकाशन वर्कफ़्लो पर Provenance + signing
  (`--provenance --access public`)।
- lint config से संग्रहित `stylelint-a11y` प्लगइन हटाया।

### रिपॉज़िटरी स्वच्छता और उपभोक्ता पैकेज
- पुरानी `package/` डायरेक्ट्री हटाई; `dist/` अब उपभोक्ताओं के लिए
  एकमात्र सत्य स्रोत है।
- v2.0.0 इंस्टॉल पथ दर्शाने के लिए README पुनर्लिखित।
- `dist/` कमिट है; `debug/` जनरेट और gitignored है।
- नया `.github/workflows/npm-publish.yml` टैग-संचालित।

### बग फ़िक्स (P0)
- **`row $:after` parent-selector रिग्रेशन** —
  `src/stylus/components/_grid.styl` में भटका `$` को `&` से बदला।
- **`.alternate`** ने ग़लती से `animation-direction: reverse` लागू किया
  `alternate` के बजाय।
- **`.alert-*` नेमस्पेसिंग** — `.alert.success` → `.alert.alert-success`
  state क्लास से टकराव रोकने के लिए।

[GitHub पर पूर्ण v2.0.0 रिलीज़ नोट्स ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases)

<hr class="hr-text" data-content="इतिहास">

## पुरानी रिलीज़

- **v1.1.6** — आंतरिक सफ़ाई, निर्भरता बम्प।
- **v1.1.5** — Material पैलेट जोड़ा।
- **v1.1.0** — Tachyons पैलेट + ग्रिड रिफ़ैक्टर।
- **v1.0.5** — WCAG 2.2 स्वीप से पहले अंतिम "legacy" रिलीज़।
- **v1.0.0** — प्रारंभिक सार्वजनिक रिलीज़ (2018)।

कमिट-दर-कमिट इतिहास के लिए
[GitHub Releases पेज ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
देखें।
