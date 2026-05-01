---
title: "บันทึกการเปลี่ยนแปลง"
name: "Skeletonic Stylus"
description: "บันทึกรีลีสของ Skeletonic Stylus พร้อมรายละเอียดฉบับเต็มของ v2.0.0"
layout: page
permalink: https://skeletonic.io/th/banthuek-kan-plian/
author: Sebastien Rousseau
language: th
theme_color: "hsl(210, 100%, 42%)"
keywords: "บันทึกการเปลี่ยนแปลง skeletonic, บันทึกรีลีส, v2.0.0, semver"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## v2.0.0 — 2026-04 (ปัจจุบัน)

รอบ "ความพร้อมเผยแพร่": a11y, supply chain, ความเป็นระเบียบของ repo

### การเข้าถึง (WCAG 2.2)
- **`$primary` ทำให้เข้มขึ้น** เป็น `hsl(210, 100%, 42%)` สำหรับคอนทราสต์ AA
  กับข้อความสีขาวในปุ่ม / ป้ายกำกับ / ลิงก์
- **`$secondary` ทำให้เข้มขึ้น** เป็น `hsl(195, 100%, 33%)`
- เพิ่ม **วงแหวน focus-visible** บนทุกอิลิเมนต์แบบโต้ตอบ
- เพิ่ม **`@media (prefers-reduced-motion)`** ครอบโมดูลแอนิเมชัน
- เพิ่ม **`prefers-color-scheme: dark`** การสลับโทเค็น
- เพิ่ม **mixin target-size(24px)** เพื่อรองรับ WCAG 2.2 SC 2.5.8
- เพิ่ม **ตัวช่วย scroll-margin สำหรับ focus-not-obscured** สำหรับส่วนหัว sticky

### Build และ supply chain
- **Cascade layers** — ทุกบล็อกอยู่ใน
  `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}`
- **CycloneDX SBOM** สร้างเป็นส่วนหนึ่งของ npm tarball
- **งบประมาณ `size-limit`** บังคับใน CI: เพดาน 8 KB gzipped สำหรับ
  สไตล์ชีตหลัก
- **CVE-2023-44270** (postcss line return) แก้ไขผ่าน `pnpm.overrides`
- Provenance + การลงนามใน npm publish workflow
  (`--provenance --access public`)
- ลบปลั๊กอิน `stylelint-a11y` ที่ถูกเก็บถาวรออกจากการตั้งค่า lint

### ความเป็นระเบียบของ repo และแพ็กเกจผู้บริโภค
- ลบไดเรกทอรี `package/` แบบเก่า; `dist/` เป็นแหล่งข้อมูลเดียว
  สำหรับผู้บริโภค
- เขียน README ใหม่ให้สะท้อนเส้นทางติดตั้ง v2.0.0
- `dist/` ถูกคอมมิต; `debug/` ถูกสร้างและ gitignore
- `.github/workflows/npm-publish.yml` ใหม่ขับเคลื่อนด้วยแท็ก

### แก้ไขบั๊ก (P0)
- **regression `row $:after` ของ parent-selector** — แทนที่ `$` ที่หลงเหลือ
  ด้วย `&` ใน `src/stylus/components/_grid.styl`
- **`.alternate`** ตั้งค่า `animation-direction: reverse` แทนที่จะเป็น
  `alternate` โดยผิดพลาด
- **namespace `.alert-*`** — `.alert.success` → `.alert.alert-success`
  เพื่อหลีกเลี่ยงการชนกับคลาสสถานะ

[บันทึกรีลีส v2.0.0 ฉบับเต็มบน GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases)

<hr class="hr-text" data-content="ประวัติ">

## รีลีสก่อนหน้า

- **v1.1.6** — ทำความสะอาดภายใน อัปเดต dependencies
- **v1.1.5** — เพิ่มชุดสี Material
- **v1.1.0** — ชุดสี Tachyons + ปรับปรุงกริด
- **v1.0.5** — รีลีส "legacy" สุดท้ายก่อนการปรับปรุง WCAG 2.2
- **v1.0.0** — รีลีสสาธารณะครั้งแรก (2018)

สำหรับประวัติแบบคอมมิตต่อคอมมิต ดู
[หน้า GitHub Releases ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
