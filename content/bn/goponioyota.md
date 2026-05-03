---
title: "গোপনীয়তা"
name: "Skeletonic Stylus"
description: "skeletonic.io কী ডেটা সংগ্রহ করে, কেন এবং কীভাবে অপ্ট আউট করবেন।"
layout: page
permalink: https://skeletonic.io/bn/goponioyota/
date: 2026-04-08
author: Sebastien Rousseau
language: bn
theme_color: "hsl(210, 100%, 42%)"
keywords: "গোপনীয়তা, gdpr, কুকি, ট্র্যাকিং নেই"
---

## সারসংক্ষেপ

> **skeletonic.io ট্র্যাকিং কুকি সেট করে না এবং কোনো তৃতীয়-পক্ষের
> অ্যানালিটিক্স ট্যাগ চালায় না।** সাইটটি HTML, CSS এবং একটি
> service-worker ফাইলের একটি স্ট্যাটিক সেট। আপনার করা কোনো অনুরোধ
> স্ট্যান্ডার্ড GitHub Pages অ্যাক্সেস লগের বাইরে লগ করা হয় না।

<hr class="hr-text" data-content="বিবরণ">

## কী ডেটা সংগ্রহ করা হয়

1. **GitHub Pages অ্যাক্সেস লগ।** আপনি যেকোনো পেজ লোড করলে, GitHub
   আপনার IP ঠিকানা, রিকোয়েস্ট URL এবং সময় রেকর্ড করে। GitHub-এর
   গোপনীয়তা নীতি প্রযোজ্য — দেখুন
   [docs.github.com/en/site-policy](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)।
2. **যোগাযোগ ফর্ম।** আপনি `/bn/jogajog/`-এ ফর্ম জমা দিলে, ডেটা
   [Formspree](https://formspree.io)-এর মাধ্যমে যায়, যা রক্ষণাবেক্ষকের
   ইমেইলে ফরওয়ার্ড করে। Formspree-এর গোপনীয়তা নীতি প্রযোজ্য।
3. **Service worker।** `sw.js` স্ক্রিপ্ট HTML, CSS, JS ও ছবি
   রেসপন্স **আপনার ব্রাউজারে স্থানীয়ভাবে** ক্যাশ করে যাতে সাইট
   অফলাইনে কাজ করে। কোথাও কিছু পাঠানো হয় না।

## কী সংগ্রহ করা *হয় না*

- Google Analytics, Plausible, Fathom বা অন্য কোনো অ্যানালিটিক্স ট্যাগ নেই।
- কোনো ধরনের কুকি নেই। সাইট কোনোটি সেট করে না।
- Service-worker ক্যাশের বাইরে কোনো Local storage বা IndexedDB নেই।
- ফিঙ্গারপ্রিন্টিং, অ্যাড নেটওয়ার্ক বা তৃতীয়-পক্ষের ট্র্যাকার নেই।

## আপনার অধিকার

আপনি যদি যোগাযোগ ফর্ম ব্যবহার করে থাকেন এবং আপনার বার্তা মুছে
ফেলতে চান, আপনি যে ঠিকানা থেকে জমা দিয়েছিলেন সেই ঠিকানা থেকে আমাকে
ইমেইল করুন এবং আমি ৩০ দিনের মধ্যে এটি মুছে ফেলব।

[শর্তাবলি পড়ুন →](/bn/shartaboli/) · [যোগাযোগ করুন →](/bn/jogajog/)
