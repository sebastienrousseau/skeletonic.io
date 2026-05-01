---
title: "ความปลอดภัยและ supply chain"
name: "Skeletonic Stylus"
description: "วิธีที่ Skeletonic Stylus v2.0.0 รักษาความปลอดภัย build pipeline ลงนามรีลีส และจัดส่ง SBOM"
layout: page
permalink: https://skeletonic.io/th/khwam-plodphai/
date: 2026-04-08
author: Sebastien Rousseau
language: th
theme_color: "hsl(210, 100%, 42%)"
keywords: "ความปลอดภัย css, sbom, cyclonedx, npm provenance, openssf scorecard, supply chain"
---

## ประสิทธิภาพ

- **45.0&nbsp;KB minified · 8.6&nbsp;KB gzipped · 7.2&nbsp;KB brotli** สำหรับสไตล์ชีตหลักทั้งหมด
- **ไม่มี JavaScript** — Stylus บริสุทธิ์ → CSS บริสุทธิ์ ไม่มีต้นทุน runtime
- **Cascade-layered** — override ชนะโดยไม่ต้อง `!important`
- **งบประมาณ `size-limit`** ถูกบังคับใน CI ทุกคอมมิต

ประสิทธิภาพเป็นมาตรการด้านความปลอดภัย ทุกไบต์ที่ไม่ส่งออกคือ
ไบต์ที่ไม่ต้องตรวจสอบ ลงนาม และยืนยัน

## สรุป supply chain

| การควบคุม | สถานะ v2.0.0 |
|---|---|
| **CycloneDX SBOM** | สร้างทุกรีลีส อยู่ภายใต้ `dist/sbom.json` |
| **npm provenance** | เปิดใช้ (`--provenance --access public`) |
| **แท็ก git ที่ลงนาม** | ลงนามด้วย SSH โดยผู้ดูแลหลัก |
| **Dependabot ล็อกเวอร์ชัน** | อัปเดตรายสัปดาห์ ตรวจสอบอัตโนมัติ |
| **งบประมาณขนาด** | `size-limit` เพดาน 8 KB gzipped ล้มเหลวใน CI เมื่อเกิน regression |
| **Lint** | `stylelint` + การยืนยัน a11y ทุกครั้งที่ push |
| **CodeQL** | เปิดใช้สำหรับ `javascript` และไฟล์ config |
| **CVE-2023-44270** | **แก้ไขแล้ว** ผ่าน `pnpm.overrides` ที่อัปเกรด `postcss@7` |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

ทุก tarball ที่เผยแพร่รวม CycloneDX SBOM ที่ `dist/sbom.json`
คุณสามารถตรวจสอบแพ็กเกจที่เพิ่งติดตั้งด้วย:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "2.0.0"
```

SBOM ถูกสร้างด้วย `cyclonedx-npm` ระหว่าง publish workflow

<hr class="hr-text" data-content="Provenance">

## npm provenance

artefact ที่เผยแพร่ถูกลงนามโดยใช้
[npm package provenance](https://docs.npmjs.com/generating-provenance-statements)

คุณสามารถตรวจสอบหลังการติดตั้งด้วย:

```bash
npm view @sebastienrousseau/skeletonic-stylus@2.0.0 --json | \
  jq '.dist."npm-signature"'
```

การรับรองที่ลงนามเชื่อมโยง tarball กลับไปยัง GitHub Actions run
ที่สร้างมันขึ้นมา

<hr class="hr-text" data-content="CVEs">

## CVEs ที่ทราบและแพตช์

| CVE | ระดับความรุนแรง | สถานะ |
|---|---|---|
| **CVE-2023-44270** (postcss line return parsing) | ปานกลาง | **แก้ไขแล้ว** ใน v2.0.0 ผ่าน `pnpm.overrides` ที่อัปเกรด `postcss` เป็น ≥ 8.4.31 |

ฐานข้อมูลคำแนะนำ Snyk และ GitHub Security Advisories ถูกติดตามอย่างต่อเนื่อง;
แพตช์ความปลอดภัยจะออกเป็น **รีลีสระดับ patch**

<hr class="hr-text" data-content="รายงาน">

## รายงานช่องโหว่

กรุณา **อย่า** เปิด GitHub issue สาธารณะสำหรับรายงานความปลอดภัย
ใช้ช่องทางส่วนตัวแทน:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

รายงานจะได้รับการตอบรับภายใน **72 ชั่วโมง** และแพตช์จะถูกส่งภายใน
**14 วัน** สำหรับปัญหาระดับปานกลาง และ **48 ชั่วโมง** สำหรับ
ปัญหาระดับวิกฤต

[กลับไปหน้าแรก →](/th/) · [อ่านบันทึกการเปลี่ยนแปลง →](/th/banthuek-kan-plian/)
