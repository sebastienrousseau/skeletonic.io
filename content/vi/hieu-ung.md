---
title: "Hieu ung dong"
name: "Skeletonic Stylus"
description: "Mo-dun hieu ung dong tuy chon cua Skeletonic Stylus v1.1.7 — bounce, pulse, fade, zoom, shake va nhieu hon, tat ca deu nam sau prefers-reduced-motion."
layout: page
language: vi
permalink: https://skeletonic.io/vi/hieu-ung/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "hieu ung css, keyframes, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

**Mo-dun hieu ung dong** duoc cung cap nhu mot tap rieng tuy chon de
stylesheet chinh giu duoi 8&nbsp;KB gzip.

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

Moi lop hieu ung dong duoc boc trong khoi
**`@media (prefers-reduced-motion: no-preference)`** trong v1.1.7,
nghia la nguoi dung da bat "giam chuyen dong" o cap he dieu hanh se
khong thay hieu ung nao — bo cuc van hoat dong, chuyen dong chi bi
tat di.

<style>
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

<hr class="hr-text" data-content="Trinh dien">

## Trinh dien

Nhan **Phat** tren bat ky the nao de phat lai hieu ung dong tren hinh
vuong. Cac lop hieu ung dong la chinh xac nhung gi duoc cung cap trong
`skeletonic-animations.min.css` — chi `animation-name` duoc dat boi
thu vien, vi vay khoi `<style>` phia tren bo sung cac thuoc tinh
`animation-duration` / `animation-iteration-count` / `animation-fill-mode`
con thieu de keyframe hien thi.

<p class="anim-note-rm">
  Giam chuyen dong da duoc bat trong he dieu hanh cua ban, vi vay cac
  doi tuong ben duoi se dung yen — do la hanh vi tro nang v1.1.7 hoat
  dong chinh xac.
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">Phat</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">Phat</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">Phat</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">Phat</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">Phat</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">Phat</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">Phat</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">Phat</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">Phat</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">Phat</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">Phat</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">Phat</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">Phat</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">Phat</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">Phat</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">Phat</button>
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

<hr class="hr-text" data-content="Danh sach lop">

## Tham chieu lop

| Lop | Chuc nang |
|---|---|
| `.bounce` | Buoc lo xo doc |
| `.pulse` | Nhip dap phong to nhe |
| `.shake` | Rung ngang |
| `.wobble` | Nghieng va phuc hoi |
| `.flash` | Nhap nhay do mo hai buoc |
| `.heartbeat` | Phong to nhip dap kep |
| `.jelly` | Nen va gian |
| `.rubberBand` | Gian dan hoi |
| `.fadeIn` / `.fadeOut` | Chuyen doi do mo |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | Mo dan theo huong |
| `.zoomIn` / `.zoomOut` | Phong to / thu nho vao/ra tam nhin |
| `.popIn` / `.popOut` | Phong to lo xo + mo dan |
| `.rollIn` / `.rollOut` | Di chuyen + xoay |
| `.flipInHorizontal` / `.flipInVertical` | Lat 3-D |
| `.vanishIn` / `.vanishOut` | Xuat hien kieu Material |
| `.chameleonbackground` / `.chameleontext` | Chu ky sac do |

## Luu y — caveat v1.1.7

Cac lop hieu ung dong trong v1.1.7 chi dat `animation-name`. De phat
chung, ban hien tai phai cung cap `animation-duration`,
`animation-iteration-count`, `animation-fill-mode` va
`animation-timing-function` cua rieng ban — chinh xac nhu khoi `<style>`
o dau trang nay trinh dien. Phien ban tuong lai se tich hop thiet lap
co ban mac dinh hop ly de `<div class="bounce">` hoat dong ngay.

[Xem ghi chu tro nang →](/vi/tro-nang/)
