---
title: "Motsin Rai"
name: "Skeletonic Stylus"
description: "Module na motsin rai na zaɓi da Skeletonic Stylus v1.1.7 ke aikawa — bounce, pulse, fade, zoom, shake, da abokai, duka a bayan prefers-reduced-motion."
layout: page
permalink: https://skeletonic.io/ha/motsin-rai/
date: 2026-04-08
author: Sebastien Rousseau
language: ha
theme_color: "hsl(210, 100%, 42%)"
keywords: "motsin rai na css, keyframes, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

**Module na motsin rai** an aika shi azaman fayil na daban na zaɓi don stylesheet na tushe ya kasance ƙasa da 8&nbsp;KB gzipped.

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

An nannaɗe kowane ajin motsin rai a cikin tubalan **`@media (prefers-reduced-motion: no-preference)`** a v1.1.7, wanda ke nufin mai amfani da ya saita "rage motsi" a matakin OS ba zai ga kowane motsin rai ba — tsarin har yanzu yana aiki, motsin kawai an danne shi.

<style>
  /*
   * Salon demo na shafi. Azuzuwan motsin rai da ke cikin
   * skeletonic-animations.min.css suna saita animation-name kawai, don haka demo
   * yana ba da animation-duration / animation-iteration-count / animation-fill-mode
   * da ba su nan a nan don keyframes su bayyana.
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

<hr class="hr-text" data-content="Misalai">

## Misalai

Danna **Kunna** a kowanne katuna don sake kunna motsin rai a kan murabba'in. Azuzuwan motsin rai su ne ainihin abin da ke cikin `skeletonic-animations.min.css` — tubalan `<style>` a sama kawai ya ƙara `animation-duration` / `animation-iteration-count` / `animation-fill-mode` da ba su nan don keyframes su bayyana.

<p class="anim-note-rm">
  An kunna Rage Motsi a cikin OS ɗin ku, don haka abubuwan da ke ƙasa za su kasance a tsaye — wannan halayen samun dama na v1.1.7 ne ke aiki daidai.
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">Kunna</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">Kunna</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">Kunna</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">Kunna</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">Kunna</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">Kunna</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">Kunna</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">Kunna</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">Kunna</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">Kunna</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">Kunna</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">Kunna</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">Kunna</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">Kunna</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">Kunna</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">Kunna</button>
  </div>

</div>

<script>
  // Azuzuwan motsin rai a v1.1.7 suna saita animation-name a cikin
  // selector ɗin kanta. Don sake kunna keyframe dole ne mu cire ajin,
  // tilasta layout flush, sannan mu sake ƙara ajin.
  function replayAnim(btn, name){
    var target = btn.closest('.anim-card').querySelector('.anim-target');
    if (!target) return;
    target.className = 'anim-target';
    void target.offsetWidth;
    target.classList.add(name);
  }
  // Kunna ta atomatik sau ɗaya a farkon nuni don mai ziyara ya ga wani abu
  // yana faruwa ba tare da dannawa ba — amma kawai idan an yarda da motsi.
  if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.anim-target').forEach(function(t){
        var n = t.getAttribute('data-anim');
        if (n) setTimeout(function(){ t.classList.add(n); }, 200);
      });
    });
  }
</script>

<hr class="hr-text" data-content="Jerin azuzuwa">

## Jagorar azuzuwa

| Aji | Abin da yake yi |
|---|---|
| `.bounce` | Mataki na bazara a tsaye |
| `.pulse` | Bugun ma'auni mai laushi |
| `.shake` | Girgiza a kwance |
| `.wobble` | Karkatar da murmurewa |
| `.flash` | Walƙiyar opacity ta matakai biyu |
| `.heartbeat` | Bugun ma'auni biyu |
| `.jelly` | Matsa & miƙa |
| `.rubberBand` | Miƙa mai laushi |
| `.fadeIn` / `.fadeOut` | Sauyin opacity |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | Fade mai alkibla |
| `.zoomIn` / `.zoomOut` | Ma'auni zuwa ciki / waje na gani |
| `.popIn` / `.popOut` | Ma'aunin bazara + fade |
| `.rollIn` / `.rollOut` | Motsa + juyawa |
| `.flipInHorizontal` / `.flipInVertical` | Juyawa ta 3-D |
| `.vanishIn` / `.vanishOut` | Bayyanar salon Material |
| `.chameleonbackground` / `.chameleontext` | Zagayen launi |

## Lura — abin da aka sani a v1.1.7

Azuzuwan motsin rai a v1.1.7 suna saita `animation-name` kawai. Don kunna su a halin yanzu dole ne ku ba da naku `animation-duration`, `animation-iteration-count`, `animation-fill-mode` da `animation-timing-function` — kamar yadda tubalan `<style>` a saman wannan shafin ke nunawa. Sakin gaba zai saka saita tushe mai ma'ana ta tsoho don `<div class="bounce">` ya yi aiki kai tsaye daga cikin akwatin.

[Duba bayanan samun dama →](/ha/samun-dama/)
