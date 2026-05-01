---
title: "เริ่มต้นใช้งาน Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "ติดตั้ง Skeletonic Stylus จาก npm หรือ CDN นำเข้าสู่ Stylus build และแก้ไขตัวแปรได้ในไม่กี่วินาที"
layout: page
permalink: https://skeletonic.io/th/roem-ton/
date: 2026-04-08
author: Sebastien Rousseau
language: th
theme_color: "hsl(210, 100%, 42%)"
keywords: "ติดตั้ง skeletonic, ตั้งค่า stylus, css cdn, เริ่มต้นใช้งาน"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## บทนำ

ใหม่กับ Skeletonic Stylus? ใน **v2.0.0** การเลือกเฉพาะฟีเจอร์ที่ต้องการนั้น
ง่ายกว่าที่เคย ด้วยขนาดที่เล็กมาก (8.6&nbsp;KB gzipped สำหรับ
สไตล์ชีตหลัก) จึงรวมเข้ากับเว็บแอปใดก็ได้อย่างรวดเร็ว — ไม่ต้องใช้
JavaScript framework ไม่ต้อง build step หากใช้ CDN

พร้อมติดตั้งหรือยัง? ทุกเส้นทางอธิบายไว้ด้านล่าง — เลือกแบบที่เหมาะกับคุณ

## 1. ดาวน์โหลดและติดตั้ง

คุณสามารถติดตั้ง Skeletonic Stylus ผ่าน **pnpm**, **npm** หรือ **yarn**
หรือโหลดตรงจาก CDN ก็ได้ นอกจากนี้ยังสามารถโฮสต์ไฟล์ distribution เอง
ในเครื่องได้

### จากตัวจัดการแพ็กเกจ (แนะนำ)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0

# npm
npm install @sebastienrousseau/skeletonic-stylus@2.0.0

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@2.0.0
```

### จาก CDN

หากต้องการเฉพาะ CSS ที่คอมไพล์แล้ว เพียงใส่บรรทัดใดบรรทัดหนึ่ง
ในส่วน `<head>`:

```html
<!-- jsDelivr -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">

<!-- unpkg -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">
```

เพื่อความปลอดภัยสูงสุด ให้คัดลอก **SRI hash** จากบันทึกการเผยแพร่ v2.0.0
และเพิ่มแอตทริบิวต์ `integrity="sha384-…"`

### แหล่ง CDN อื่น ๆ

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css` | ใช่ | ใช่ |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css` | ใช่ | ไม่ |

### ดาวน์โหลด GitHub release

ต้องการไฟล์ tarball ที่ระบุเวอร์ชัน? ดาวน์โหลดรีลีสล่าสุดจาก
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
และนำเนื้อหาของ `dist/` ไปใส่ในโปรเจกต์ได้เลย

### โคลน GitHub repository

โคลน repository หลักเพื่อรับไฟล์ซอร์สทั้งหมดรวมถึง build scripts:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **เคล็ดลับ:** ลงนามคอมมิตของคุณ — โปรเจกต์บังคับคอมมิตที่ลงนามใน CI
> ใช้ `git commit -S -m "..."` (หรือตั้ง `commit.gpgsign = true`
> ใน git config ส่วนกลาง)

## 2. ใช้ CSS ที่คอมไพล์แล้ว

ไลบรารีมีบันเดิลที่สร้างไว้ล่วงหน้าหลายชุดภายใต้ `dist/css/`
หลังจากติดตั้ง:

| ไฟล์ | วัตถุประสงค์ | ขนาด (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | Reset + tokens + layout + elements + components + utilities | 45.0 KB / 8.6 KB |
| `animations/skeletonic-animations.min.css` | โมดูลแอนิเมชันเสริม | ≈213 KB / ≈7.2 KB |
| `palettes/material/skeletonic-material.min.css` | ชุดสี Material | ≈17.4 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | ชุดสีอรรถประโยชน์ Tachyons | 7.3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | ชุดสี Web-safe | ≈3.5 KB |

แต่ละโมดูลเป็นอิสระ — เลือกเฉพาะชุดที่เล็กที่สุดที่ต้องการ

## 3. ใช้งานจาก Stylus

หากคุณมี Stylus pipeline อยู่แล้ว สามารถนำเข้าโมดูลซอร์ส
แล้วให้ bundler ตัด tree-shake ส่วนที่ไม่ใช้:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

หรือนำเข้าเฉพาะส่วนที่ต้องการ:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. แก้ไขสีแบรนด์

Skeletonic เปิดเผย design tokens เป็น **CSS custom properties**
จึงสามารถปรับธีมได้โดยไม่ต้องคอมไพล์ Stylus ใหม่:

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

เท่านี้เอง — ทุกส่วนประกอบที่ใช้สีหลักจะตามมาเอง

## 5. ตรวจสอบการติดตั้ง

การทดสอบเบื้องต้นว่า "ใช้ได้หรือยัง":

```html
<!doctype html>
<html lang="th">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>ใช้งานได้แล้ว</h1>
    <a href="#" class="button primary">สวัสดีชาวโลก</a>
  </body>
</html>
```

หากหัวข้อมีขนาดแบบ fluid และปุ่มมีรูปร่างเม็ดยาสีน้ำเงิน แสดงว่าเสร็จแล้ว

## 6. สิ่งที่รวมอยู่ในแพ็กเกจ

ภายในแพ็กเกจคุณจะพบไฟล์ซอร์สทั้งหมด บันเดิล CSS ที่คอมไพล์และ
minify แล้ว source maps และโครงสร้าง Stylus ที่จัดหมวดหมู่ตามประเภท:

```text
@sebastienrousseau/skeletonic-stylus@2.0.0
├── CHANGELOG.md
├── LICENSE-APACHE
├── LICENSE-MIT
├── README.md
├── package.json
├── dist/
│   └── css/
│       ├── core/
│       │   ├── skeletonic.css
│       │   ├── skeletonic.css.map
│       │   └── skeletonic.min.css
│       ├── animations/
│       │   ├── skeletonic-animations.css
│       │   └── skeletonic-animations.min.css
│       └── palettes/
│           ├── material/skeletonic-material.min.css
│           ├── tachyons/skeletonic-tachyons.min.css
│           └── websafe/skeletonic-websafe.min.css
└── src/
    └── stylus/
        ├── animations/      bounce, fade, pulse, shake, vanish, zoom…
        ├── base/            reset, helpers
        ├── components/      card, header, navbar, alert
        ├── configurations/  colors, variables
        ├── elements/        button, form, table, link, list, code…
        ├── fonts/           font-face declarations
        ├── layout/          container, grid, media-queries
        ├── palettes/        material, tachyons, websafe
        ├── utilities/       mixins
        └── skeletonic.styl  ← import ตัวเดียวที่ดึงทุกอย่าง
```

แต่ละโมดูลเป็นอิสระ — นำเข้าเฉพาะบันเดิลที่ต้องการเพื่อให้ CSS
มีขนาดเล็กที่สุด

## คำถามที่พบบ่อย

**จะติดตั้ง Skeletonic Stylus ได้อย่างไร?**
รัน `pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0` หรือโหลด
CSS ที่คอมไพล์แล้วจาก CDN ได้เลย — ไม่ต้อง build step

**ต้องใช้ JavaScript หรือไม่?**
ไม่ สไตล์ชีตหลักเป็น CSS บริสุทธิ์ ไม่มีต้นทุน runtime ส่วนประกอบ
ทำงานได้โดยไม่ต้องเขียน JS แม้แต่บรรทัดเดียว

**รองรับ WCAG 2.2 หรือไม่?**
ใช่ v2.0.0 มาพร้อมคอนทราสต์ระดับ AA วงแหวน focus-visible ตัวช่วย
ลิงก์ข้าม รองรับการลดการเคลื่อนไหว และโหมดมืดเป็นค่าเริ่มต้น

**ขนาด gzipped เท่าไร?**
45.0&nbsp;KB minified, **8.6&nbsp;KB gzipped**, 7.2&nbsp;KB brotli สำหรับ
สไตล์ชีตหลักทั้งหมด เพดาน 8&nbsp;KB ถูกบังคับใน CI ทุกคอมมิต

**ใช้สัญญาอนุญาตอะไร?**
สัญญาอนุญาตคู่ภายใต้ MIT และ Apache 2.0 — เลือกตัวที่เหมาะกับ
โปรเจกต์ของคุณ ใช้ฟรีสำหรับทั้งเชิงพาณิชย์และส่วนบุคคล

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "จะติดตั้ง Skeletonic Stylus ได้อย่างไร?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "รัน pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0 หรือโหลด CSS ที่คอมไพล์แล้วจาก CDN ได้เลย — ไม่ต้อง build step"
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus ต้องใช้ JavaScript หรือไม่?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ไม่ สไตล์ชีตหลักเป็น CSS บริสุทธิ์ ไม่มีต้นทุน runtime ส่วนประกอบทำงานได้โดยไม่ต้องเขียน JavaScript แม้แต่บรรทัดเดียว"
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus รองรับ WCAG 2.2 หรือไม่?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ใช่ v2.0.0 มาพร้อมคอนทราสต์ระดับ AA วงแหวน focus-visible ตัวช่วยลิงก์ข้าม รองรับการลดการเคลื่อนไหว และโหมดมืดเป็นค่าเริ่มต้น"
      }
    },
    {
      "@type": "Question",
      "name": "ขนาด gzipped ของ Skeletonic Stylus เท่าไร?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "45.0 KB minified, 8.6 KB gzipped, 7.2 KB brotli สำหรับสไตล์ชีตหลักทั้งหมด เพดาน 8 KB ถูกบังคับใน CI ทุกคอมมิต"
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus ใช้สัญญาอนุญาตอะไร?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "สัญญาอนุญาตคู่ภายใต้ MIT และ Apache 2.0 — เลือกตัวที่เหมาะกับโปรเจกต์ของคุณ ใช้ฟรีสำหรับทั้งเชิงพาณิชย์และส่วนบุคคล"
      }
    }
  ]
}
</script>

[ดูส่วนประกอบ →](/th/suan-prakop/)
