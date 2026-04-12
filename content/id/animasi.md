---
title: "Animasi"
name: "Skeletonic Stylus"
description: "Modul animasi opsional yang disertakan dengan Skeletonic Stylus v1.1.7 — bounce, pulse, fade, zoom, shake, dan lainnya, semuanya di belakang prefers-reduced-motion."
layout: page
permalink: https://skeletonic.io/id/animasi/
date: 2026-04-08
author: Sebastien Rousseau
language: id
theme_color: "hsl(210, 100%, 42%)"
keywords: "animasi css, keyframes, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

**Modul animasi** disertakan sebagai file opsional terpisah sehingga stylesheet inti tetap di bawah 8&nbsp;KB gzipped.

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

Setiap kelas animasi dibungkus dalam blok **`@media (prefers-reduced-motion: no-preference)`** di v1.1.7, yang berarti pengguna yang telah mengatur "kurangi gerakan" di tingkat OS tidak akan melihat animasi sama sekali — tata letak tetap berfungsi, hanya gerakannya yang ditekan.

<style>
  /*
   * Style demo lokal halaman. Kelas animasi yang disertakan dalam
   * skeletonic-animations.min.css hanya mengatur animation-name, jadi demo
   * ini menyediakan properti yang hilang: duration / iteration-count /
   * fill-mode agar keyframe terlihat. Setiap target demo adalah lingkaran
   * warna solid agar gerakan jelas terlihat di latar halaman.
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

<hr class="hr-text" data-content="Demo">

## Demo

Tekan **Putar** pada kartu mana pun untuk memutar ulang animasi pada kotak. Kelas animasi itu sendiri persis seperti yang disertakan dalam `skeletonic-animations.min.css` — hanya `animation-name` yang diatur oleh pustaka, sehingga blok `<style>` di atas menambahkan properti `animation-duration` / `animation-iteration-count` / `animation-fill-mode` yang hilang agar keyframe terlihat.

<p class="anim-note-rm">
  Kurangi Gerakan diaktifkan di OS Anda, sehingga target di bawah akan tetap diam — itulah perilaku aksesibilitas v1.1.7 yang bekerja dengan benar.
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">Putar</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">Putar</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">Putar</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">Putar</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">Putar</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">Putar</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">Putar</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">Putar</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">Putar</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">Putar</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">Putar</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">Putar</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">Putar</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">Putar</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">Putar</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">Putar</button>
  </div>

</div>

<script>
  // Kelas animasi yang disertakan di v1.1.7 mengatur animation-name di
  // selector itu sendiri. Untuk memutar ulang keyframe kita harus menghapus
  // kelas, memaksa layout flush, lalu menambahkan kelas kembali.
  function replayAnim(btn, name){
    var target = btn.closest('.anim-card').querySelector('.anim-target');
    if (!target) return;
    target.className = 'anim-target';
    void target.offsetWidth;
    target.classList.add(name);
  }
  // Putar otomatis sekali saat paint pertama agar pengunjung melihat sesuatu
  // terjadi tanpa mengklik — tetapi hanya jika gerakan diizinkan.
  if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.anim-target').forEach(function(t){
        var n = t.getAttribute('data-anim');
        if (n) setTimeout(function(){ t.classList.add(n); }, 200);
      });
    });
  }
</script>

<hr class="hr-text" data-content="Daftar kelas">

## Referensi kelas

| Kelas | Fungsi |
|---|---|
| `.bounce` | Langkah pegas vertikal |
| `.pulse` | Denyut skala lembut |
| `.shake` | Goyangan horizontal |
| `.wobble` | Miring dan pulih |
| `.flash` | Kedipan opasitas dua langkah |
| `.heartbeat` | Skala detak ganda |
| `.jelly` | Squash & stretch |
| `.rubberBand` | Regangan elastis |
| `.fadeIn` / `.fadeOut` | Transisi opasitas |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | Fade terarah |
| `.zoomIn` / `.zoomOut` | Memperbesar / memperkecil ke tampilan |
| `.popIn` / `.popOut` | Skala pegas + fade |
| `.rollIn` / `.rollOut` | Translasi + rotasi |
| `.flipInHorizontal` / `.flipInVertical` | Balik 3D |
| `.vanishIn` / `.vanishOut` | Kemunculan gaya Material |
| `.chameleonbackground` / `.chameleontext` | Siklus hue |

## Catatan — peringatan v1.1.7 yang diketahui

Kelas animasi di v1.1.7 hanya mengatur `animation-name`. Untuk memutarnya, saat ini Anda harus menyediakan sendiri `animation-duration`, `animation-iteration-count`, `animation-fill-mode`, dan `animation-timing-function` — persis seperti yang ditunjukkan blok `<style>` di bagian atas halaman ini. Rilis mendatang akan menyertakan pengaturan dasar bawaan yang masuk akal sehingga `<div class="bounce">` berfungsi langsung.

[Lihat catatan aksesibilitas →](/id/aksesibilitas/)
