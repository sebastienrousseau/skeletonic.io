---
title: "الخصوصية"
name: "Skeletonic Stylus"
description: "ما البيانات التي يجمعها skeletonic.io، ولماذا، وكيفية إلغاء الاشتراك."
layout: page
permalink: https://skeletonic.io/ar/al-khususiyya/
date: 2026-04-08
author: Sebastien Rousseau
language: ar
theme_color: "hsl(210, 100%, 42%)"
keywords: "الخصوصية, gdpr, ملفات تعريف الارتباط, بدون تتبع"
---

## باختصار

> **لا يضع skeletonic.io ملفات تعريف ارتباط للتتبع ولا يشغّل وسم
> تحليلات من طرف ثالث.** الموقع عبارة عن مجموعة ثابتة من HTML وCSS
> وملف service worker واحد. لا يتم تسجيل أي طلب تقدّمه بخلاف سجلات
> وصول GitHub Pages القياسية.

<hr class="hr-text" data-content="التفاصيل">

## ما البيانات التي تُجمع

1. **سجلات وصول GitHub Pages.** عند تحميل أي صفحة، يسجّل GitHub
   عنوان IP الخاص بك، وعنوان URL للطلب، والوقت. تنطبق سياسة خصوصية
   GitHub — انظر
   [docs.github.com/en/site-policy](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
2. **نموذج الاتصال.** إذا أرسلت النموذج في `/ar/ittisal/`، تمر
   البيانات عبر [Formspree](https://formspree.io)، الذي يحوّلها إلى
   بريد المشرف. تنطبق سياسة خصوصية Formspree.
3. **Service worker.** يخزّن نص `sw.js` مؤقتًا ردود HTML وCSS وJS
   والصور **محليًا في متصفحك** حتى يعمل الموقع بدون اتصال. لا يُرسل
   شيء إلى أي مكان.

## ما الذي *لا* يُجمع

- لا Google Analytics أو Plausible أو Fathom أو أي وسم تحليلات آخر.
- لا ملفات تعريف ارتباط من أي نوع. الموقع لا يضع أيًا منها.
- لا تخزين محلي أو IndexedDB بخلاف ذاكرة التخزين المؤقت لـ service worker.
- لا بصمة رقمية أو شبكات إعلانية أو متتبعات من طرف ثالث.

## حقوقك

إذا استخدمت نموذج الاتصال وترغب في حذف رسالتك، أرسل لي بريدًا
إلكترونيًا من العنوان الذي أرسلت منه وسأحذفها خلال 30 يومًا.

[اقرأ الشروط →](/ar/al-shurut/) · [تواصل معنا →](/ar/ittisal/)
