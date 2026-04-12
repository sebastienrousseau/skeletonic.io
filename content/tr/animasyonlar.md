---
title: "Animasyonlar — Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus v1.1.7 ile gelen istege bagli animasyonlar modulu — bounce, pulse, fade, zoom, shake ve digerleri, tamami prefers-reduced-motion arkasinda."
layout: page
permalink: https://skeletonic.io/tr/animasyonlar/
date: 2026-04-08
author: Sebastien Rousseau
language: tr
theme_color: "hsl(210, 100%, 42%)"
keywords: "css animasyonlari, keyframes, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

**Animasyonlar modulu**, cekirdek stil sayfasinin 8&nbsp;KB gzipped
altinda kalmasini saglamak icin ayri bir istege bagli dosya olarak
gonderilir.

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

v1.1.7'de her animasyon sinifi bir
**`@media (prefers-reduced-motion: no-preference)`** bloguna
sarilmistir, bu da isletim sistemi duzeyinde "hareketi azalt" ayarini
yapan kullanicilarin hic animasyon goremeyecegi anlamina gelir — duzen
hala calisir, yalnizca hareket bastirilir.

<style>
  /*
   * Sayfa-yerel demo stilleri. skeletonic-animations.min.css icinde
   * gonderilen animasyon siniflari yalnizca animation-name ayarlar,
   * bu nedenle demo, keyframe'lerin gorunur olmasi icin eksik
   * animation-duration / animation-iteration-count / animation-fill-mode
   * ozelliklerini burada saglar.
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

<hr class="hr-text" data-content="Demolar">

## Demolar

Animasyonu kare uzerinde tekrar oynatmak icin herhangi bir karttaki
**Oynat** butonuna basin. Animasyon siniflarinin kendileri
`skeletonic-animations.min.css` icinde gonderilen tam olarak odur —
kutuphane yalnizca `animation-name` ayarlar, bu nedenle yukaridaki
`<style>` blogu keyframe'lerin gorunur olmasi icin eksik
`animation-duration` / `animation-iteration-count` / `animation-fill-mode`
ozelliklerini ekler.

<p class="anim-note-rm">
  Isletim sisteminizde Azaltilmis Hareket etkin, bu nedenle asagidaki
  hedefler hareketsiz kalacaktir — bu, v1.1.7 erisilebilirlik
  davranisinin dogru calismasi demektir.
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">Oynat</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">Oynat</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">Oynat</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">Oynat</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">Oynat</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">Oynat</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">Oynat</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">Oynat</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">Oynat</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">Oynat</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">Oynat</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">Oynat</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">Oynat</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">Oynat</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">Oynat</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">Oynat</button>
  </div>

</div>

<script>
  // v1.1.7'deki animasyon siniflari secici icerisinde animation-name
  // ayarlar. Keyframe'i tekrar oynatmak icin sinifi kaldirip bir
  // duzen yenileme zorlayip tekrar eklemeliyiz.
  function replayAnim(btn, name){
    var target = btn.closest('.anim-card').querySelector('.anim-target');
    if (!target) return;
    target.className = 'anim-target';
    void target.offsetWidth;
    target.classList.add(name);
  }
  // Ziyaretcinin tiklamadan bir sey gormesi icin ilk boyamada
  // otomatik oynatma — ancak yalnizca harekete izin veriliyorsa.
  if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.anim-target').forEach(function(t){
        var n = t.getAttribute('data-anim');
        if (n) setTimeout(function(){ t.classList.add(n); }, 200);
      });
    });
  }
</script>

<hr class="hr-text" data-content="Sinif listesi">

## Sinif referansi

| Sinif | Ne yapar |
|---|---|
| `.bounce` | Dikey yay adimi |
| `.pulse` | Yumusak olcek nabzi |
| `.shake` | Yatay sarsinti |
| `.wobble` | Egilme ve toparlanma |
| `.flash` | Iki adimli opakllik kirpisi |
| `.heartbeat` | Cift vuruslu olcek |
| `.jelly` | Sikma ve gerilme |
| `.rubberBand` | Elastik gerilme |
| `.fadeIn` / `.fadeOut` | Opakllik gecisi |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | Yonlu solma |
| `.zoomIn` / `.zoomOut` | Goruse yakinlasma / uzaklasma |
| `.popIn` / `.popOut` | Yay olcegi + solma |
| `.rollIn` / `.rollOut` | Kaydirma + dondurme |
| `.flipInHorizontal` / `.flipInVertical` | 3B cevirme |
| `.vanishIn` / `.vanishOut` | Material tarzi belirme |
| `.chameleonbackground` / `.chameleontext` | Ton donguleme |

## Dikkat — bilinen v1.1.7 sinirlamasi

v1.1.7'deki animasyon siniflari yalnizca `animation-name` ayarlar.
Bunlari oynatmak icin su anda kendi `animation-duration`,
`animation-iteration-count`, `animation-fill-mode` ve
`animation-timing-function` degerlerinizi saglmaniz gerekir — tam
olarak bu sayfanin ustteki `<style>` blogunun gosterdigi gibi.
Gelecekteki bir surum, `<div class="bounce">` ifadesinin kutudan
ciktiginda calismasini saglayan makul bir varsayilan temel
yapilandirmayi dahil edecektir.

[Erisilebilirlik notlarini gorun →](/tr/erisilebilirlik/)
