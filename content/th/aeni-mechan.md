---
title: "แอนิเมชัน"
name: "Skeletonic Stylus"
description: "โมดูลแอนิเมชันเสริมที่มาพร้อมกับ Skeletonic Stylus v2.0.0 — bounce, pulse, fade, zoom, shake และอื่น ๆ ทั้งหมดอยู่หลัง prefers-reduced-motion"
layout: page
permalink: https://skeletonic.io/th/aeni-mechan/
date: 2026-04-08
author: Sebastien Rousseau
language: th
theme_color: "hsl(210, 100%, 42%)"
keywords: "แอนิเมชัน css, keyframes, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

**โมดูลแอนิเมชัน** จัดจำหน่ายเป็นไฟล์เสริมแยกต่างหากเพื่อให้
สไตล์ชีตหลักมีขนาดต่ำกว่า 8&nbsp;KB gzipped

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

ทุกคลาสแอนิเมชันถูกครอบด้วย
**`@media (prefers-reduced-motion: no-preference)`** ใน v2.0.0
ซึ่งหมายความว่าผู้ใช้ที่ตั้งค่า "ลดการเคลื่อนไหว" ในระดับ OS จะไม่เห็น
แอนิเมชันใด ๆ — เลย์เอาต์ยังคงทำงาน เพียงแค่การเคลื่อนไหวถูกระงับ

<style>
  /*
   * สไตล์สาธิตเฉพาะหน้า คลาสแอนิเมชันที่มาพร้อมใน
   * skeletonic-animations.min.css ตั้งค่าเฉพาะ animation-name
   * ดังนั้นส่วนสาธิตจึงให้คุณสมบัติที่ขาดไป เช่น duration /
   * iteration-count / fill-mode เพื่อให้ keyframes มองเห็นได้
   * แต่ละเป้าหมายสาธิตเป็นวงกลมสีทึบเพื่อให้การเคลื่อนไหว
   * เห็นชัดเจนกับพื้นหลังหน้า
   */
  .anim-grid{
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(160px,1fr));
    gap:1.25rem;
    margin:1.5rem 0;
  }
  .anim-card{
    text-align:center;
  }
  .anim-card h3{
    margin:0 0 .75rem;
    font-size:1rem;
    font-weight:600;
    letter-spacing:.01em;
    color:var(--c-heading,#0a0a0a);
  }
  .anim-stage{
    display:flex;
    align-items:center;
    justify-content:center;
    height:96px;
    margin-bottom:.75rem;
  }
  .anim-target{
    display:inline-block;
    width:64px;
    height:64px;
    border-radius:50%;
    background:hsl(210,100%,42%);
    animation-duration:1.2s;
    animation-iteration-count:1;
    animation-fill-mode:both;
    animation-timing-function:ease-in-out;
  }
  .anim-card button{
    margin-top:.25rem;
  }
  @media (prefers-reduced-motion:reduce){
    .anim-target{animation:none !important}
    .anim-note-rm{display:block;color:var(--c-secondary,#52525b);font-style:italic;margin-top:1rem}
  }
  .anim-note-rm{display:none}
</style>

<hr class="hr-text" data-content="สาธิต">

## สาธิต

กด **เล่น** บนการ์ดใดก็ได้เพื่อเล่นแอนิเมชันซ้ำบนสี่เหลี่ยม
คลาสแอนิเมชันเป็นสิ่งที่มาพร้อมใน `skeletonic-animations.min.css`
— ตั้งค่าเฉพาะ `animation-name` โดยไลบรารี ดังนั้นบล็อก `<style>`
ด้านบนจึงเพิ่มคุณสมบัติ `animation-duration` / `animation-iteration-count`
/ `animation-fill-mode` ที่ขาดไปเพื่อให้ keyframes มองเห็นได้

<p class="anim-note-rm">
  ระบบของคุณเปิดใช้การลดการเคลื่อนไหว ดังนั้นเป้าหมายด้านล่าง
  จะอยู่นิ่ง — นั่นคือพฤติกรรมการเข้าถึงของ v2.0.0 ที่ทำงานถูกต้อง
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">เล่น</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">เล่น</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">เล่น</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">เล่น</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">เล่น</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">เล่น</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">เล่น</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">เล่น</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">เล่น</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">เล่น</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">เล่น</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">เล่น</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">เล่น</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">เล่น</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">เล่น</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">เล่น</button>
  </div>

</div>

<script>
  function replayAnim(btn, name){
    var target = btn.closest('.anim-card').querySelector('.anim-target');
    if (!target) return;
    target.className = 'anim-target';
    void target.offsetWidth;
    target.classList.add(name);
  }
  if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.anim-target').forEach(function(t){
        var n = t.getAttribute('data-anim');
        if (n) setTimeout(function(){ t.classList.add(n); }, 200);
      });
    });
  }
</script>

<hr class="hr-text" data-content="รายการคลาส">

## อ้างอิงคลาส

| คลาส | สิ่งที่ทำ |
|---|---|
| `.bounce` | การเด้งแนวตั้งแบบสปริง |
| `.pulse` | เต้นจังหวะด้วย scale อ่อน |
| `.shake` | สั่นแนวนอน |
| `.wobble` | เอียงและกลับคืน |
| `.flash` | กะพริบความโปร่งใสสองขั้น |
| `.heartbeat` | เต้นแบบหัวใจสองจังหวะ |
| `.jelly` | บีบและยืด |
| `.rubberBand` | ยืดแบบยางยืด |
| `.fadeIn` / `.fadeOut` | เปลี่ยนความโปร่งใส |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | เฟดตามทิศทาง |
| `.zoomIn` / `.zoomOut` | ขยายเข้า / ออกจากมุมมอง |
| `.popIn` / `.popOut` | สปริง scale + เฟด |
| `.rollIn` / `.rollOut` | เลื่อน + หมุน |
| `.flipInHorizontal` / `.flipInVertical` | พลิก 3 มิติ |
| `.vanishIn` / `.vanishOut` | ปรากฏแบบ Material |
| `.chameleonbackground` / `.chameleontext` | วนรอบ hue |

## ข้อควรทราบ — ข้อจำกัดที่ทราบใน v2.0.0

คลาสแอนิเมชันใน v2.0.0 ตั้งค่าเฉพาะ `animation-name` เท่านั้น ในการเล่น
จำเป็นต้องระบุ `animation-duration`, `animation-iteration-count`,
`animation-fill-mode` และ `animation-timing-function` เอง — เหมือนกับที่
บล็อก `<style>` ด้านบนของหน้านี้สาธิต รุ่นถัดไปจะรวมค่าเริ่มต้น
พื้นฐานไว้ให้ เพื่อให้ `<div class="bounce">` ทำงานได้ทันที

[ดูบันทึกการเข้าถึง →](/th/kan-khao-thueng/)
