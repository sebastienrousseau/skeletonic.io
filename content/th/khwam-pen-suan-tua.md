---
title: "ความเป็นส่วนตัว"
name: "Skeletonic Stylus"
description: "ข้อมูลที่ skeletonic.io เก็บรวบรวม เหตุผล และวิธียกเลิก"
layout: page
permalink: https://skeletonic.io/th/khwam-pen-suan-tua/
date: 2026-04-08
author: Sebastien Rousseau
language: th
theme_color: "hsl(210, 100%, 42%)"
keywords: "ความเป็นส่วนตัว, gdpr, คุกกี้, ไม่มีการติดตาม"
---

## สรุปสั้น ๆ

> **skeletonic.io ไม่ตั้งค่าคุกกี้ติดตามและไม่รันแท็กวิเคราะห์ของ
> บุคคลที่สาม** เว็บไซต์เป็นชุด HTML, CSS และไฟล์ service worker
> แบบ static เพียงไฟล์เดียว ไม่มีคำขอใดของคุณที่ถูกบันทึก
> นอกเหนือจาก access logs มาตรฐานของ GitHub Pages

<hr class="hr-text" data-content="รายละเอียด">

## ข้อมูลที่เก็บรวบรวม

1. **Access logs ของ GitHub Pages** เมื่อคุณโหลดหน้าใดก็ตาม GitHub
   จะบันทึกที่อยู่ IP ของคุณ URL ของคำขอ และเวลา นโยบายความเป็นส่วนตัว
   ของ GitHub มีผลบังคับใช้ — ดู
   [docs.github.com/en/site-policy](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)
2. **แบบฟอร์มติดต่อ** หากคุณส่งแบบฟอร์มบน `/th/tittoe/` ข้อมูล
   จะส่งผ่าน [Formspree](https://formspree.io) ซึ่งส่งต่อไปยัง
   อีเมลของผู้ดูแล นโยบายความเป็นส่วนตัวของ Formspree มีผลบังคับใช้
3. **Service worker** สคริปต์ `sw.js` แคช HTML, CSS, JS และรูปภาพ
   **ในเบราว์เซอร์ของคุณ** เพื่อให้เว็บไซต์ทำงานแบบออฟไลน์ได้
   ไม่มีข้อมูลถูกส่งไปไหน

## สิ่งที่ *ไม่ได้* เก็บรวบรวม

- ไม่มี Google Analytics, Plausible, Fathom หรือแท็กวิเคราะห์ใด ๆ
- ไม่มีคุกกี้ทุกชนิด เว็บไซต์ไม่ตั้งค่าคุกกี้
- ไม่มี local storage หรือ IndexedDB นอกเหนือจากแคช service worker
- ไม่มี fingerprinting เครือข่ายโฆษณา หรือตัวติดตามบุคคลที่สาม

## สิทธิ์ของคุณ

หากคุณใช้แบบฟอร์มติดต่อแล้วต้องการให้ลบข้อความ ให้ส่งอีเมลจาก
ที่อยู่เดียวกับที่คุณส่ง แล้วผมจะลบภายใน 30 วัน

[อ่านข้อกำหนด →](/th/kho-kamnot/) · [ติดต่อ →](/th/tittoe/)
