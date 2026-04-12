---
title: "มีส่วนร่วม"
name: "Skeletonic Stylus"
description: "วิธีแจ้งปัญหา เสนอการเปลี่ยนแปลง และส่ง pull request ไปยัง Skeletonic Stylus"
layout: page
permalink: https://skeletonic.io/th/mi-suan-ruam/
date: 2026-04-08
author: Sebastien Rousseau
language: th
theme_color: "hsl(210, 100%, 42%)"
keywords: "มีส่วนร่วม, โอเพนซอร์ส, pull request, issue, แบบแผน"
---

Skeletonic Stylus เป็นโปรเจกต์โอเพนซอร์ส; ยินดีรับการมีส่วนร่วม
ทุกขนาด — ตั้งแต่แก้คำผิดไปจนถึงส่วนประกอบใหม่

<hr class="hr-text" data-content="เริ่มต้นเร็ว">

## เริ่มต้นเร็ว

```bash
# 1. Fork &amp; clone
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. ติดตั้ง (pnpm ผ่าน corepack)
corepack enable
pnpm install

# 3. Build
pnpm run build           # pipeline ทั้งหมด (stylus → prettier → stylelint → autoprefixer → csso)

# 4. Lint &amp; ทดสอบ
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="แบบแผน">

## แบบแผน

- **ชื่อ branch:** `feat/short-thing`, `fix/short-thing`, `docs/short-thing`
- **คอมมิต:** [Conventional Commits](https://www.conventionalcommits.org)
  ทุกคอมมิตต้องลงนาม
- **Stylus:** ย่อหน้า 4 ช่อง ไม่มีเซมิโคลอน ใช้ `$variables` แทน
  ตัวเลขมหัศจรรย์ ทุกคลาสสาธารณะอยู่ใน cascade layer
- **การเข้าถึง:** ทุกส่วนประกอบใหม่ต้องพิสูจน์ได้ว่ารองรับ WCAG 2.2 AA;
  รัน `node scripts/a11y-test.mjs` กับหน้า showcase ก่อนเปิด PR
- **งบประมาณขนาด:** สไตล์ชีตหลักต้องอยู่ต่ำกว่า **8 KB gzipped**
  หากการเปลี่ยนแปลงของคุณทำให้เกิน ให้อธิบายเหตุผลใน PR

<hr class="hr-text" data-content="Pull requests">

## Pull requests

1. เปิด issue ก่อนสำหรับสิ่งที่ไม่เล็กน้อย — ช่วยลดงานซ้ำ
2. ให้ PR มุ่งเน้น: หนึ่งการเปลี่ยนแปลงเชิงตรรกะต่อ PR
3. อัปเดต `CHANGELOG.md` ภายใต้ "Unreleased"
4. ตรวจสอบว่า CI ผ่านก่อนขอรีวิว
5. Squash-merge เป็นค่าเริ่มต้น; ข้อความคอมมิตจะถูกจัดระเบียบเมื่อ merge

<hr class="hr-text" data-content="จรรยาบรรณ">

## จรรยาบรรณ

เมื่อเข้าร่วม คุณตกลงที่จะปฏิบัติตาม
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)
มีน้ำใจ อดทน เข้าใจเจตนาดี

[เปิด issue ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[เปิด PR ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
