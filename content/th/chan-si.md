---
title: "ชุดสี"
name: "Skeletonic Stylus"
description: "ชุดสี Material, Tachyons และ Web-safe ที่มาพร้อมกับ Skeletonic Stylus v2.0.0"
layout: page
permalink: https://skeletonic.io/th/chan-si/
date: 2026-04-08
author: Sebastien Rousseau
language: th
theme_color: "hsl(210, 100%, 42%)"
keywords: "ชุดสี css, material, tachyons, websafe, design tokens"
---

Skeletonic Stylus v2.0.0 มาพร้อม **ชุดสีเสริมสามชุด** แต่ละชุด
จัดจำหน่ายเป็นสไตล์ชีตที่ minify แยกต่างหาก จึงจ่ายเฉพาะที่ใช้

| ชุดสี | ไฟล์ | ขนาด (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | ≈17.4 KB |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7.3 KB |
| Web-safe | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | ≈3.5 KB |

หน้านี้โหลดชุดสี **Tachyons** เพื่อให้คลาสอรรถประโยชน์สีด้านล่าง
เรนเดอร์ได้ถูกต้อง

<hr class="hr-text" data-content="เทา">

## สีเทาหลักของ Skeletonic

สไตล์ชีตหลักมาพร้อมสเกลสีเทา 11 ระดับที่เข้าถึงได้ เปิดเผยเป็น
`--cl-grey-100` … `--cl-grey-1000`

<div class="row">
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-100);">
    100
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-300);">
    300
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-500); color: #fff;">
    500
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-700); color: #fff;">
    700
  </div>
</div>

<div class="row">
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-200);">
    200
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-400);">
    400
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-600); color: #fff;">
    600
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-900); color: #fff;">
    900
  </div>
</div>

<hr class="hr-text" data-content="แบรนด์">

## สีแบรนด์ (v2.0.0 — คอนทราสต์ AA)

ใน v2.0.0 โทเค็น primary และ secondary ถูกทำให้เข้มขึ้นเพื่อให้ได้
**คอนทราสต์ WCAG 4.5:1** กับข้อความสีขาวทันทีที่ใช้งาน

<div class="row margin-top-3">
  <div class="flex-4 padding-3 text-center" style="background-color: hsl(210, 100%, 42%); color: #fff;">
    <strong>--cl-primary</strong><br>hsl(210 100% 42%)
  </div>
  <div class="flex-4 padding-3 text-center" style="background-color: hsl(195, 100%, 33%); color: #fff;">
    <strong>--cl-secondary</strong><br>hsl(195 100% 33%)
  </div>
  <div class="flex-4 padding-3 text-center" style="background-color: #757c8a; color: #fff;">
    <strong>--cl-tertiary</strong><br>#757c8a
  </div>
</div>

> **หมายเหตุ.** `--cl-tertiary` (#757c8a) มีอัตราส่วนคอนทราสต์ 4.71:1
> เทียบกับสีขาว — ผ่านระดับ AA สำหรับ**ข้อความขนาดใหญ่** (ตั้งแต่ 18 px ตัวหนา /
> ตั้งแต่ 24 px ปกติ) แต่ไม่ผ่านสำหรับข้อความเนื้อหา ควรใช้คู่กับ
> พื้นหลังสีเข้มหรือใช้เฉพาะสำหรับองค์ประกอบตกแต่งที่ไม่จำเป็น

<hr class="hr-text" data-content="Tachyons">

## คลาสอรรถประโยชน์ชุดสี Tachyons

เมื่อโหลด `skeletonic-tachyons.min.css` คุณจะได้ชุดคลาสสี
วัตถุประสงค์เดียวครบชุด — artefact เดียวกัน โมดูลเลือกเปิด

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

ข้อมูลจำเพาะชุดสี Tachyons ฉบับเต็มอยู่ที่
[tachyons.io/docs/themes/skins](https://tachyons.io/docs/themes/skins/);
เวอร์ชันที่มาพร้อมที่นี่คือเวอร์ชันที่ Skeletonic คอมไพล์

[กลับไปที่ส่วนประกอบ →](/th/suan-prakop/)
