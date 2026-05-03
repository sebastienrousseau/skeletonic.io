---
title: "गोपनीयता"
name: "Skeletonic Stylus"
description: "skeletonic.io कौन सा डेटा एकत्र करती है, क्यों, और कैसे ऑप्ट आउट करें।"
layout: page
permalink: https://skeletonic.io/hi/gopaniyata/
date: 2026-04-08
author: Sebastien Rousseau
language: hi
theme_color: "hsl(210, 100%, 42%)"
keywords: "गोपनीयता, gdpr, कुकीज़, कोई ट्रैकिंग नहीं"
---

## संक्षेप में

> **skeletonic.io ट्रैकिंग कुकीज़ सेट नहीं करती और कोई तृतीय-पक्ष
> एनालिटिक्स टैग नहीं चलाती।** साइट HTML, CSS और एक सिंगल
> service-worker फ़ाइल का स्थिर सेट है। आपका कोई भी अनुरोध मानक
> GitHub Pages एक्सेस लॉग से अधिक कहीं लॉग नहीं होता।

<hr class="hr-text" data-content="विवरण">

## कौन सा डेटा एकत्र होता है

1. **GitHub Pages एक्सेस लॉग।** जब आप कोई पेज लोड करते हैं, GitHub
   आपका IP पता, अनुरोध URL और समय रिकॉर्ड करता है। GitHub की
   गोपनीयता नीति लागू होती है — देखें
   [docs.github.com/en/site-policy](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)।
2. **संपर्क फ़ॉर्म।** यदि आप `/hi/sampark/` पर फ़ॉर्म सबमिट करते
   हैं, डेटा [Formspree](https://formspree.io) के माध्यम से मेंटेनर
   के ईमेल पर जाता है। Formspree की गोपनीयता नीति लागू होती है।
3. **Service worker।** `sw.js` स्क्रिप्ट HTML, CSS, JS और इमेज
   रिस्पॉन्स को **स्थानीय रूप से आपके ब्राउज़र में** कैश करती है
   ताकि साइट ऑफ़लाइन काम करे। कहीं कुछ भेजा नहीं जाता।

## क्या एकत्र *नहीं* होता

- Google Analytics, Plausible, Fathom, या कोई अन्य एनालिटिक्स टैग नहीं।
- किसी भी प्रकार की कुकीज़ नहीं। साइट कोई सेट नहीं करती।
- Service-worker कैश के अलावा कोई Local storage या IndexedDB नहीं।
- फ़िंगरप्रिंटिंग, विज्ञापन नेटवर्क, या तृतीय-पक्ष ट्रैकर नहीं।

## आपके अधिकार

यदि आपने संपर्क फ़ॉर्म इस्तेमाल किया है और अपना संदेश हटवाना चाहते
हैं, तो जिस पते से सबमिट किया उससे मुझे ईमेल करें और मैं 30 दिनों
के भीतर इसे हटा दूँगा।

[शर्तें पढ़ें →](/hi/niyam/) · [संपर्क करें →](/hi/sampark/)
