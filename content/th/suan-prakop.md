---
title: "ส่วนประกอบ"
name: "Skeletonic Stylus"
description: "ตัวอย่าง HTML แบบสดของทุกส่วนประกอบ Skeletonic Stylus จัดกลุ่ม เชื่อมลิงก์แท็ก และเรนเดอร์ด้วยสไตล์ชีตเดียวกันที่กำลังสาธิต"
layout: page
permalink: https://skeletonic.io/th/suan-prakop/
date: 2026-04-08
author: Sebastien Rousseau
language: th
theme_color: "hsl(210, 100%, 42%)"
keywords: "ส่วนประกอบ skeletonic, ปุ่ม, การ์ด, ฟอร์ม, แจ้งเตือน, ป้ายกำกับ, ส่วนหัว, แฮมเบอร์เกอร์เมนู css"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

ทุกตัวอย่างด้านล่าง **เรนเดอร์ด้วยสไตล์ชีตเดียวกันที่กำลังสาธิต**
ไม่มี preprocessor ไม่มี JavaScript ไม่มี dependencies เพิ่ม คัดลอก
สนิปเป็ตใดก็ได้ไปใส่ในไฟล์ HTML ใหม่แล้วใช้งานได้เลย

<nav aria-label="ในหน้านี้">
<p><strong>ในหน้านี้</strong></p>
<ul>
<li><strong>อินพุต</strong> — <a href="#buttons">ปุ่ม</a> · <a href="#badges">ป้ายกำกับ</a></li>
<li><strong>การแจ้งเตือน</strong> — <a href="#alerts">แจ้งเตือน</a></li>
<li><strong>พื้นผิว</strong> — <a href="#cards">การ์ด</a></li>
<li><strong>ฟอร์ม</strong> — <a href="#form-fields">ฟิลด์ฟอร์ม</a></li>
<li><strong>เลย์เอาต์</strong> — <a href="#grid">กริด</a> · <a href="#header">ส่วนหัวและแฮมเบอร์เกอร์เมนู</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="อินพุต">

<h2 id="inputs">อินพุต</h2>

อิลิเมนต์แบบโต้ตอบที่ผู้เข้าชมคลิก แตะ หรือโฟกัสเพื่อควบคุมหน้า

<h3 id="buttons">ปุ่ม</h3>

ทริกเกอร์การกระทำที่เป็นเชิงความหมายและปรับธีมได้ ตัวแปรแบบทึบและ
outline มีสีแบรนด์ให้เลือกหกสี

```html
<a href="#" class="button primary">Primary</a>
<a href="#" class="button secondary">Secondary</a>
<a href="#" class="button tertiary">Tertiary</a>
```

<section aria-labelledby="buttons">
<p>
  <a href="#" class="button primary">Primary</a>
  <a href="#" class="button secondary">Secondary</a>
  <a href="#" class="button tertiary">Tertiary</a>
</p>
</section>

ตัวแปร Outline:

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">Outline</a>
  <a href="#" class="button secondary-outline">Outline</a>
</p>

> **หมายเหตุการเข้าถึง** ทุกตัวแปร `.button` มาพร้อมวงแหวน
> `:focus-visible` และ **พื้นที่สัมผัสขั้นต่ำ 24×24&nbsp;px**
> (WCAG&nbsp;2.2 SC&nbsp;2.5.8) ใช้ `<button type="button">` สำหรับ
> การกระทำในหน้า และ `<a href>` สำหรับการนำทางเท่านั้น

<h3 id="badges">ป้ายกำกับ</h3>

ป้ายขนาดกะทัดรัดสำหรับสถานะ จำนวน หรือหมวดหมู่ ขนาดตัวอักษร
คงที่เพื่อให้ป้ายเรียงตัวกับข้อความรอบข้าง

```html
<span class="badge">Default</span>
<span class="badge primary">Primary</span>
<span class="badge success">Success</span>
<span class="badge warning">Warning</span>
<span class="badge danger">Danger</span>
```

<section aria-labelledby="badges">
<p>
  <span class="badge">Default</span>
  <span class="badge primary">Primary</span>
  <span class="badge success">Success</span>
  <span class="badge warning">Warning</span>
  <span class="badge danger">Danger</span>
</p>
</section>

> **หมายเหตุการเข้าถึง** ป้ายกำกับเป็นส่วนตกแต่งตามค่าเริ่มต้น
> เมื่อป้ายเป็นสัญญาณเดียว (เช่น จำนวนที่ยังไม่ได้อ่าน) ให้ครอบด้วย
> ตัวช่วยที่ซ่อนจากสายตา: `<span class="visually-hidden">3 ข้อความ
> ที่ยังไม่ได้อ่าน</span>`

<hr class="hr-text" data-content="การแจ้งเตือน">

<h2 id="feedback">การแจ้งเตือน</h2>

พื้นผิวที่แจ้งผู้เข้าชมว่ามีบางอย่างเกิดขึ้น — หรือกำลังจะเกิดขึ้น

<h3 id="alerts">แจ้งเตือน</h3>

ข้อความสถานะที่มีเจตนาเชิงความหมาย **ใน v2.0.0 ทุกตัวแปรถูก
ตั้งชื่อ namespace อย่างชัดเจน** ภายใต้ `.alert-{primary,secondary,info,success,warning,error}`
เพื่อให้คลาสตัวแปรไม่ชนกับคลาสสถานะอื่นในหน้า

```html
<div class="alert alert-primary" role="alert">
  <strong>โปรดทราบ</strong> นี่คือแจ้งเตือน primary
</div>
<div class="alert alert-success" role="status">
  <strong>บันทึกแล้ว</strong> การเปลี่ยนแปลงของคุณถูกบันทึกแล้ว
</div>
<div class="alert alert-warning" role="alert">
  <strong>ระวัง</strong> การกระทำนี้ส่งผลต่อสถานะที่ใช้ร่วมกัน
</div>
<div class="alert alert-error" role="alert">
  <strong>ผิดพลาด</strong> ไม่สามารถบันทึกฟอร์มได้
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>โปรดทราบ</strong> นี่คือแจ้งเตือน primary
</div>

<div class="alert alert-success" role="status">
<strong>บันทึกแล้ว</strong> การเปลี่ยนแปลงของคุณถูกบันทึกแล้ว
</div>

<div class="alert alert-warning" role="alert">
<strong>ระวัง</strong> การกระทำนี้ส่งผลต่อสถานะที่ใช้ร่วมกัน
</div>

<div class="alert alert-error" role="alert">
<strong>ผิดพลาด</strong> ไม่สามารถบันทึกฟอร์มได้
</div>
</section>

> **หมายเหตุการเข้าถึง** ใช้ `role="alert"` สำหรับข้อความที่ต้องการ
> ความสนใจทันที (ข้อผิดพลาด คำเตือน) และ `role="status"` สำหรับ
> การยืนยันที่ไม่เร่งด่วน ทั้งสองจะแสดงข้อความต่อเทคโนโลยีช่วยเหลือ
> ทันทีที่ปรากฏ

<hr class="hr-text" data-content="พื้นผิว">

<h2 id="surface">พื้นผิว</h2>

คอนเทนเนอร์ที่กรอบและจัดกลุ่มเนื้อหาที่เกี่ยวข้อง

<h3 id="cards">การ์ด</h3>

คอนเทนเนอร์ที่มีขอบและ padding สำหรับหน่วยที่สอดคล้องกันเดียว ใช้คู่กับ
กริด `flex-N` สำหรับผนังการ์ดแบบ responsive

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">เบา</h3>
      <p>38.8 KB minified, 7.7 KB gzipped</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">เข้าถึงได้</h3>
      <p>รองรับ WCAG 2.2 ทันทีที่ใช้งาน</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">เป็นโมดูล</h3>
      <p>Cascade-layered สำหรับการ override ที่ง่าย</p>
    </div>
  </article>
</section>
```

<section class="row" aria-labelledby="cards">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">เบา</h3>
      <p>38.8&nbsp;KB minified, 7.7&nbsp;KB gzipped</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">เข้าถึงได้</h3>
      <p>รองรับ WCAG&nbsp;2.2 ทันทีที่ใช้งาน</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">เป็นโมดูล</h3>
      <p>Cascade-layered สำหรับการ override ที่ง่าย</p>
    </div>
  </article>
</section>

> **หมายเหตุการเข้าถึง** ครอบแต่ละการ์ดด้วย landmark เชิงความหมาย
> (`<article>`, `<section>`) และเริ่มเนื้อหาด้วยหัวข้อ (`<h3>`)
> ผู้ใช้ screen reader จะสามารถนำทางรายการการ์ดเป็นส่วนที่เข้าถึงได้

<hr class="hr-text" data-content="ฟอร์ม">

<h2 id="forms">ฟอร์ม</h2>

อินพุต ป้ายชื่อ และการจัดกลุ่มสำหรับรวบรวมข้อมูลผู้ใช้

<h3 id="form-fields">ฟิลด์ฟอร์ม</h3>

ป้ายชื่อ อินพุตข้อความ textarea fieldset และ legend — ทั้งหมดมี
ขนาดสม่ำเสมอกับส่วนอื่นของระบบออกแบบ

```html
<form>
  <label for="name">ชื่อ</label>
  <input id="name" type="text" required>

  <label for="email">อีเมล</label>
  <input id="email" type="email" required class="input-primary">

  <label for="msg">ข้อความ</label>
  <textarea id="msg" rows="4"></textarea>

  <button type="submit" class="button primary">ส่ง</button>
</form>
```

<section aria-labelledby="form-fields">
<div role="group" aria-label="Form fields demo">
  <label for="demo-name">ชื่อ</label>
  <input id="demo-name" type="text">

  <label for="demo-email">อีเมล</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">ข้อความ</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">ส่ง (สาธิต)</button></p>
</div>
</section>

> **หมายเหตุการเข้าถึง** ทุกอินพุตต้องมี `<label for="…">` ที่เชื่อมโยง
> ทางโปรแกรม จัดกลุ่มคอนโทรลที่เกี่ยวข้องภายใน `<fieldset>` พร้อม
> `<legend>` ทำเครื่องหมายฟิลด์ที่จำเป็นด้วย `required` (และเครื่องหมาย
> ดอกจันที่มองเห็นได้ในข้อความป้ายชื่อ)

<hr class="hr-text" data-content="เลย์เอาต์">

<h2 id="layout">เลย์เอาต์</h2>

โครงสร้างพื้นฐาน — กริด คอนเทนเนอร์ ส่วนหัว — ที่กำหนดกรอบ
ทั้งหน้า

<h3 id="grid">กริด</h3>

กริด `flex-N` แบบ responsive (1 → 12 คอลัมน์) สร้างบน flexbox
parent `.row` จัดช่องว่างและ wrap อัตโนมัติ

```html
<div class="row">
  <div class="flex-6">ครึ่ง</div>
  <div class="flex-6">ครึ่ง</div>
</div>
<div class="row">
  <div class="flex-4">หนึ่งส่วนสาม</div>
  <div class="flex-4">หนึ่งส่วนสาม</div>
  <div class="flex-4">หนึ่งส่วนสาม</div>
</div>
```

<section aria-labelledby="grid">
<div style="display:flex;flex-wrap:wrap;gap:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">ครึ่ง</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">ครึ่ง</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">หนึ่งส่วนสาม</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">หนึ่งส่วนสาม</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">หนึ่งส่วนสาม</div>
</div>
</section>

> **หมายเหตุการเข้าถึง** ลำดับที่มองเห็นควรตรงกับลำดับ DOM หลีกเลี่ยง
> การเรียงลำดับแถวใหม่ด้วย `flex-direction: row-reverse` หรือ `order:`
> — screen reader และผู้ใช้คีย์บอร์ดจะติดตามซอร์ส ไม่ใช่การแสดงผล

<h3 id="header">ส่วนหัวและแฮมเบอร์เกอร์เมนู</h3>

ส่วนหัวแบบ CSS-only ที่สมบูรณ์พร้อมปุ่มแฮมเบอร์เกอร์แบบ responsive
**ไม่มี JavaScript** คัดลอกสนิปเป็ตด้านล่างไปใส่ในหน้า HTML ที่
โหลด `skeletonic.min.css` แล้ว เมนูจะยุบ ขยาย และจัดการโฟกัสได้เอง

```html
<style>
  .sk-header{position:relative;display:flex;align-items:center;gap:1rem;padding:.75rem 1rem;border:1px solid #e4e4e7;border-radius:.5rem;background:#fff;}
  .sk-header .sk-brand{font-weight:600;color:#0a0a0a;text-decoration:none;}
  .sk-header .sk-toggle{position:absolute;left:-9999px;}
  .sk-header .sk-burger{display:none;margin-left:auto;cursor:pointer;padding:.625rem .75rem;border:1px solid #e4e4e7;border-radius:.375rem;font-size:1.125rem;line-height:1;min-width:2.75rem;min-height:2.75rem;}
  .sk-header .sk-burger:focus-within,.sk-header .sk-toggle:focus-visible+.sk-burger{outline:2px solid hsl(210,100%,42%);outline-offset:2px;}
  .sk-header .sk-menu{list-style:none;display:flex;gap:.25rem;margin:0 0 0 auto;padding:0;}
  .sk-header .sk-menu a{display:inline-flex;align-items:center;min-height:2.75rem;padding:.5rem .875rem;border-radius:.375rem;color:#1a1a1a;text-decoration:none;}
  .sk-header .sk-menu a:hover{background:#f4f4f5;}
  @media (max-width:640px){
    .sk-header .sk-burger{display:inline-flex;align-items:center;justify-content:center;}
    .sk-header .sk-menu{display:none;flex-direction:column;gap:0;position:absolute;top:calc(100% + .25rem);left:0;right:0;background:#fff;border:1px solid #e4e4e7;border-radius:.5rem;padding:.375rem;box-shadow:0 4px 24px rgba(0,0,0,.08);z-index:10;}
    .sk-header .sk-menu a{padding:.75rem 1rem;border-bottom:1px solid #f4f4f5;}
    .sk-header .sk-menu li:last-child a{border-bottom:0;}
    .sk-header .sk-toggle:checked ~ .sk-menu{display:flex;}
  }
</style>
<header class="sk-header">
  <a class="sk-brand" href="#">แบรนด์</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="สลับการนำทาง">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">หน้าแรก</a></li>
    <li><a href="#">เอกสาร</a></li>
    <li><a href="#">ส่วนประกอบ</a></li>
    <li><a href="#">เกี่ยวกับ</a></li>
  </ul>
</header>
```

<section aria-labelledby="header">
<style>
  .sk-header{position:relative;display:flex;align-items:center;gap:1rem;padding:.75rem 1rem;border:1px solid #e4e4e7;border-radius:.5rem;background:#fff;}
  .sk-header .sk-brand{font-weight:600;color:#0a0a0a;text-decoration:none;}
  .sk-header .sk-toggle{position:absolute;left:-9999px;}
  .sk-header .sk-burger{display:none;margin-left:auto;cursor:pointer;padding:.625rem .75rem;border:1px solid #e4e4e7;border-radius:.375rem;font-size:1.125rem;line-height:1;min-width:2.75rem;min-height:2.75rem;}
  .sk-header .sk-burger:focus-within,.sk-header .sk-toggle:focus-visible+.sk-burger{outline:2px solid hsl(210,100%,42%);outline-offset:2px;}
  .sk-header .sk-menu{list-style:none;display:flex;gap:.25rem;margin:0 0 0 auto;padding:0;}
  .sk-header .sk-menu a{display:inline-flex;align-items:center;min-height:2.75rem;padding:.5rem .875rem;border-radius:.375rem;color:#1a1a1a;text-decoration:none;}
  .sk-header .sk-menu a:hover{background:#f4f4f5;}
  @media (max-width:640px){
    .sk-header .sk-burger{display:inline-flex;align-items:center;justify-content:center;}
    .sk-header .sk-menu{display:none;flex-direction:column;gap:0;position:absolute;top:calc(100% + .25rem);left:0;right:0;background:#fff;border:1px solid #e4e4e7;border-radius:.5rem;padding:.375rem;box-shadow:0 4px 24px rgba(0,0,0,.08);z-index:10;}
    .sk-header .sk-menu a{padding:.75rem 1rem;border-bottom:1px solid #f4f4f5;}
    .sk-header .sk-menu li:last-child a{border-bottom:0;}
    .sk-header .sk-toggle:checked ~ .sk-menu{display:flex;}
  }
</style>
<header class="sk-header">
  <a class="sk-brand" href="#">แบรนด์</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="สลับการนำทาง">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">หน้าแรก</a></li>
    <li><a href="#">เอกสาร</a></li>
    <li><a href="#">ส่วนประกอบ</a></li>
    <li><a href="#">เกี่ยวกับ</a></li>
  </ul>
</header>
</section>

> **หมายเหตุการเข้าถึง** checkbox ที่ซ่อนอยู่ยังคงอยู่ในลำดับ tab
> เพื่อให้ผู้ใช้คีย์บอร์ดเปิดเมนูด้วย `Space` หรือ `Enter`
> `<label>` มี `aria-hidden` เพราะ checkbox เองเป็นแหล่งชื่อ
> ที่เข้าถึงได้ ปรับขนาดหน้าต่างให้ต่ำกว่า 640&nbsp;px เพื่อดูปุ่ม
> แฮมเบอร์เกอร์ทำงาน

[ดูบันทึกการเข้าถึงทั้งหมด →](/th/kan-khao-thueng/) · [ดูชุดสี →](/th/chan-si/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "ส่วนประกอบ Skeletonic Stylus",
  "description": "ทุกส่วนประกอบที่มาพร้อมกับ Skeletonic Stylus v2.0.0",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "ปุ่ม",
      "url": "https://skeletonic.io/th/suan-prakop/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "ป้ายกำกับ",
      "url": "https://skeletonic.io/th/suan-prakop/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "แจ้งเตือน",
      "url": "https://skeletonic.io/th/suan-prakop/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "การ์ด",
      "url": "https://skeletonic.io/th/suan-prakop/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "ฟิลด์ฟอร์ม",
      "url": "https://skeletonic.io/th/suan-prakop/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "กริด",
      "url": "https://skeletonic.io/th/suan-prakop/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "ส่วนหัวและแฮมเบอร์เกอร์เมนู",
      "url": "https://skeletonic.io/th/suan-prakop/#header"
    }
  ]
}
</script>
