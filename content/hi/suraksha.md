---
title: "सुरक्षा और आपूर्ति श्रृंखला"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus v2.0.0 अपनी बिल्ड पाइपलाइन को कैसे सुरक्षित करती है, रिलीज़ साइन करती है, और SBOM शिप करती है।"
layout: page
permalink: https://skeletonic.io/hi/suraksha/
date: 2026-04-08
author: Sebastien Rousseau
language: hi
theme_color: "hsl(210, 100%, 42%)"
keywords: "css सुरक्षा, sbom, cyclonedx, npm provenance, openssf scorecard, आपूर्ति श्रृंखला"
---

## प्रदर्शन

- **39.1&nbsp;KB minified · 7.8&nbsp;KB gzipped · 6.7&nbsp;KB brotli** पूर्ण कोर स्टाइलशीट के लिए।
- **शून्य JavaScript** — शुद्ध Stylus → शुद्ध CSS, कोई रनटाइम लागत नहीं।
- **Cascade-layered** — ओवरराइड `!important` के बिना जीतते हैं।
- **`size-limit` बजट** हर कमिट पर CI में लागू।

प्रदर्शन एक सुरक्षा नियंत्रण है। हर बाइट जो शिप नहीं होती, वो एक
बाइट कम है जिसका ऑडिट, साइन और सत्यापन करना है।

## आपूर्ति-श्रृंखला सारांश

| नियंत्रण | v2.0.0 स्थिति |
|---|---|
| **CycloneDX SBOM** | हर रिलीज़ पर जनरेट, `dist/sbom.json` में कमिट |
| **npm provenance** | सक्षम (`--provenance --access public`) |
| **हस्ताक्षरित git टैग** | मेंटेनर की SSH कुंजी से हस्ताक्षरित |
| **पिन किए Dependabot** | साप्ताहिक बम्प, स्वत: समीक्षित |
| **साइज़ बजट** | `size-limit` 8 KB gzipped सीमा, रिग्रेशन पर CI विफल |
| **Lint** | हर push पर `stylelint` + a11y assertions |
| **CodeQL** | `javascript` और config फ़ाइलों के लिए सक्षम |
| **CVE-2023-44270** | **पैच किया** `pnpm.overrides` से `postcss@7` फ़्लश करके |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

हर प्रकाशित tarball में `dist/sbom.json` पर CycloneDX SBOM शामिल है।
ताज़ा इंस्टॉल किए पैकेज को इस प्रकार सत्यापित करें:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "2.0.0"
```

SBOM प्रकाशन वर्कफ़्लो के दौरान `cyclonedx-npm` से जनरेट होता है।

<hr class="hr-text" data-content="Provenance">

## npm provenance

प्रकाशित आर्टिफ़ैक्ट
[npm package provenance](https://docs.npmjs.com/generating-provenance-statements)
से हस्ताक्षरित है।

इंस्टॉलेशन के बाद इस प्रकार सत्यापित करें:

```bash
npm view @sebastienrousseau/skeletonic-stylus@2.0.0 --json | \
  jq '.dist."npm-signature"'
```

हस्ताक्षरित attestation tarball को ठीक उसी GitHub Actions रन से
जोड़ती है जिसने इसे बनाया।

<hr class="hr-text" data-content="CVEs">

## ज्ञात CVE और पैच

| CVE | गंभीरता | स्थिति |
|---|---|---|
| **CVE-2023-44270** (postcss line return parsing) | मध्यम | **पैच** v2.0.0 में `pnpm.overrides` से `postcss` को ≥ 8.4.31 में अपग्रेड करके |

Snyk एडवाइज़री डेटाबेस और GitHub Security Advisories फ़ीड की लगातार
निगरानी की जाती है; सुरक्षा पैच **पैच-स्तर रिलीज़** के रूप में शिप
होते हैं।

<hr class="hr-text" data-content="रिपोर्टिंग">

## कमज़ोरी की रिपोर्ट करें

कृपया सुरक्षा रिपोर्ट के लिए सार्वजनिक GitHub issue **न** खोलें।
इसके बजाय, निजी चैनल इस्तेमाल करें:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

रिपोर्ट **72 घंटों** के भीतर स्वीकार की जाती हैं। मध्यम मुद्दों के
लिए **14 दिनों** में और गंभीर मुद्दों के लिए **48 घंटों** में फ़िक्स
शिप किया जाता है।

[होम पर वापस →](/hi/) · [परिवर्तन लॉग पढ़ें →](/hi/parivartan-log/)
