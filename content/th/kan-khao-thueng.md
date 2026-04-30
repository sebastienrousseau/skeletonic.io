---
title: "การเข้าถึง — WCAG 2.2 ใน v1.1.7"
name: "Skeletonic Stylus"
description: "สิ่งที่ v1.1.7 มาพร้อมสำหรับการรองรับ WCAG 2.2 — วงแหวนโฟกัส คอนทราสต์ ลิงก์ข้าม การเคลื่อนไหว และโหมดมืด"
layout: page
permalink: https://skeletonic.io/th/kan-khao-thueng/
date: 2026-04-08
author: Sebastien Rousseau
language: th
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, การเข้าถึง, focus visible, ลิงก์ข้าม, prefers reduced motion, คอนทราสต์"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

> **Skeletonic Stylus v1.1.7 มาพร้อมการรองรับ WCAG 2.2 เป็นพฤติกรรม
> เริ่มต้น ไม่ใช่ธีมเสริม** หน้านี้อธิบายสิ่งที่รวมอยู่แล้วและ
> mixins ที่สามารถเลือกเปิดใช้เพื่อการควบคุมที่ละเอียดขึ้น

<hr class="hr-text" data-content="มาพร้อมในตัว">

## สิ่งที่คุณได้ฟรี

| WCAG 2.2 SC | สิ่งที่ v1.1.7 ทำ | วิธีตรวจสอบ |
|---|---|---|
| **1.4.3 คอนทราสต์ (ขั้นต่ำ) — AA** | `--cl-primary` และ `--cl-secondary` ถูกทำให้เข้มขึ้นเป็น ≥ 4.5:1 กับสีขาว | DevTools → ตรวจสอบคอนทราสต์ |
| **1.4.11 คอนทราสต์ที่ไม่ใช่ข้อความ — AA** | ขอบฟอร์ม ปุ่ม ป้ายกำกับ ทั้งหมด ≥ 3:1 | เช่นเดียวกัน |
| **2.4.7 โฟกัสที่มองเห็นได้ — AA** | ทุกอิลิเมนต์ที่โฟกัสได้มีวงแหวน `:focus-visible` (เหลืองบนพื้นมืด น้ำเงินบนพื้นสว่าง) | กด `Tab` ผ่านหน้าใดก็ได้ |
| **2.4.11 โฟกัสไม่ถูกบัง — AA (ใหม่ใน 2.2)** | ส่วนหัวแบบ sticky มีความสูงลดลง + scroll-margin ของโฟกัส | กด `Tab` ผ่านส่วนหัว sticky |
| **2.5.8 ขนาดเป้าหมาย — AA (ใหม่ใน 2.2)** | ปุ่ม / ลิงก์: ≥ 24×24 CSS px พื้นที่สัมผัส | DevTools box model |
| **1.4.12 ระยะห่างข้อความ — AA** | ทุกอิลิเมนต์รองรับการแก้ไข line-height / letter-spacing ของผู้ใช้ | แก้ไขใน DevTools |
| **2.3.3 แอนิเมชันจากการโต้ตอบ — AAA** | ทุกคลาสแอนิเมชันครอบด้วย `@media (prefers-reduced-motion: no-preference)` | ลดการเคลื่อนไหวในระดับ OS |
| **1.4.10 การไหลใหม่ — AA** | เลย์เอาต์ทำงานที่ 320 px โดยไม่มีสครอลแนวนอน | DevTools viewport แคบ |
| **โหมดมืด** | `prefers-color-scheme: dark` สลับโทเค็นอัตโนมัติ | สลับโหมดมืดในระดับ OS |

<hr class="hr-text" data-content="Mixins">

## Stylus mixins ที่สามารถเลือกเปิดใช้

หากคุณคอมไพล์จากซอร์ส mixins ต่อไปนี้มีอยู่ใน
`src/stylus/utilities/mixins.styl`:

| Mixin | การใช้งาน |
|---|---|
| `focus-ring()` | วงแหวนโฟกัสคอนทราสต์สูงที่รองรับ `:focus-visible` |
| `visually-hidden()` | ข้อความสำหรับ screen reader เท่านั้นที่ยังคงโฟกัสได้ |
| `skip-link()` | แอนเคอร์ที่มองเห็นได้เมื่อโฟกัส |
| `reduced-motion()` | ครอบบล็อกใดก็ได้ใน `prefers-reduced-motion: no-preference` |
| `forced-colors()` | การปรับแต่งสำหรับ Windows High Contrast Mode |
| `target-size(24px)` | เพิ่ม padding ให้อิลิเมนต์คลิกได้ถึงขนาดเป้าหมายขั้นต่ำ |

ตัวอย่าง:

```stylus
// ใช้วงแหวนโฟกัสที่ชัดเจนบนปุ่มที่กำหนดเอง
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="ลิงก์ข้าม">

## ตัวช่วยลิงก์ข้าม

วางสิ่งนี้ **เป็นอย่างแรกภายใน `<body>`**:

```html
<a href="#main-content" class="skip-link">ข้ามไปยังเนื้อหาหลัก</a>
```

คลาสนี้ **ไม่ได้** อยู่ในสไตล์ชีตหลัก (เพื่อไม่ให้เพิ่มน้ำหนักหน้า);
เป็นสนิปเป็ต 4 บรรทัดที่คุณเขียนเองหรือใช้ mixin `skip-link()`
ที่รวมมาให้ เว็บไซต์นี้ใช้อยู่ — โฟกัสที่หน้าแล้วกด Tab เพื่อดูมัน
ปรากฏที่มุมบนซ้าย

<hr class="hr-text" data-content="การตรวจสอบ">

## ตรวจสอบหน้าของคุณเอง

ไลบรารีมาพร้อมสคริปต์ `a11y-test.mjs` ภายใต้ `scripts/` ที่รัน
[axe-core](https://github.com/dequelabs/axe-core) กับทุก URL
ที่คุณระบุ

```bash
node scripts/a11y-test.mjs https://example.com
```

CI รันสคริปต์นี้กับหน้า showcase `dist/index.html` ทุกครั้งที่ push

[อ่านเกี่ยวกับรีลีส v1.1.7 →](/th/banthuek-kan-plian/) ·
[ดูหน้าความปลอดภัย →](/th/khwam-plodphai/)
