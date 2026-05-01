---
title: "Animații"
name: "Skeletonic Stylus"
description: "Modulul opțional de animații livrat cu Skeletonic Stylus v2.0.0 — bounce, pulse, fade, zoom, shake și altele, toate condiționate de prefers-reduced-motion."
layout: page
permalink: https://skeletonic.io/ro/animatii/
date: 2026-04-08
author: Sebastien Rousseau
language: ro
theme_color: "hsl(210, 100%, 42%)"
keywords: "animații css, keyframes, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

**Modulul de animații** este livrat ca fișier separat și opțional, astfel
încât stylesheet-ul principal rămâne sub 8&nbsp;KB gzipped.

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

Fiecare clasă de animație este înfășurată într-un bloc
**`@media (prefers-reduced-motion: no-preference)`** în v2.0.0, ceea ce
înseamnă că un utilizator care a setat „reducere mișcare" la nivel de
sistem de operare nu va vedea nicio animație — layout-ul funcționează în
continuare, mișcarea este doar suprimată.

<style>
  /*
   * Stiluri demo locale pentru pagină. Clasele de animație livrate în
   * skeletonic-animations.min.css setează doar animation-name, așa că
   * demo-ul furnizează proprietățile lipsă animation-duration /
   * animation-iteration-count / animation-fill-mode pentru ca keyframe-urile
   * să fie vizibile. Fiecare țintă demo este un disc colorat solid,
   * astfel încât mișcarea este evidentă pe fundalul paginii.
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
    /* proprietățile lipsă sunt aici pentru ca clasele de animație din v2.0.0
       să ruleze efectiv când sunt adăugate pe țintă */
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

<hr class="hr-text" data-content="Demonstrații">

## Demonstrații

Apasă **Redare** pe orice card pentru a rula din nou animația pe disc.
Clasele de animație sunt exact cele livrate în
`skeletonic-animations.min.css` — doar `animation-name` este setat de
bibliotecă, iar blocul `<style>` de mai sus adaugă proprietățile lipsă
`animation-duration` / `animation-iteration-count` / `animation-fill-mode`
pentru a face keyframe-urile vizibile.

<p class="anim-note-rm">
  Opțiunea Reducere mișcare este activată în sistemul tău de operare,
  astfel încât țintele de mai jos vor rămâne nemișcate — acesta este
  comportamentul de accesibilitate din v2.0.0 care funcționează corect.
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">Redare</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">Redare</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">Redare</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">Redare</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">Redare</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">Redare</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">Redare</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">Redare</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">Redare</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">Redare</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">Redare</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">Redare</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">Redare</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">Redare</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">Redare</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">Redare</button>
  </div>

</div>

<script>
  // Clasele de animație livrate în v2.0.0 setează animation-name în
  // selectorul propriu. Pentru a rula din nou keyframe-ul, trebuie să
  // eliminăm clasa, să forțăm un layout flush, apoi să adăugăm din
  // nou clasa.
  function replayAnim(btn, name){
    var target = btn.closest('.anim-card').querySelector('.anim-target');
    if (!target) return;
    target.className = 'anim-target';
    void target.offsetWidth;
    target.classList.add(name);
  }
  // Redare automată o dată la prima randare, pentru ca vizitatorul să
  // vadă ceva în mișcare fără a apăsa un buton — dar doar dacă mișcarea
  // este permisă.
  if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.anim-target').forEach(function(t){
        var n = t.getAttribute('data-anim');
        if (n) setTimeout(function(){ t.classList.add(n); }, 200);
      });
    });
  }
</script>

<hr class="hr-text" data-content="Lista de clase">

## Referință clase

| Clasă | Ce face |
|---|---|
| `.bounce` | Pas elastic vertical |
| `.pulse` | Puls ușor de scală |
| `.shake` | Agitare orizontală |
| `.wobble` | Înclinare și revenire |
| `.flash` | Clipire de opacitate în doi pași |
| `.heartbeat` | Scalare cu bătaie dublă |
| `.jelly` | Comprimare și întindere |
| `.rubberBand` | Întindere elastică |
| `.fadeIn` / `.fadeOut` | Tranziție de opacitate |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | Fade direcțional |
| `.zoomIn` / `.zoomOut` | Scalare intrare / ieșire din vizualizare |
| `.popIn` / `.popOut` | Scalare spring + fade |
| `.rollIn` / `.rollOut` | Translație + rotație |
| `.flipInHorizontal` / `.flipInVertical` | Flip 3D |
| `.vanishIn` / `.vanishOut` | Apariție în stil Material |
| `.chameleonbackground` / `.chameleontext` | Ciclare nuanță |

## Avertisment — limitare cunoscută v2.0.0

Clasele de animație din v2.0.0 setează doar `animation-name`. Pentru a le
rula, trebuie să furnizezi propriile `animation-duration`,
`animation-iteration-count`, `animation-fill-mode` și
`animation-timing-function` — exact ca în blocul `<style>` de la
începutul acestei pagini. O versiune viitoare va include o configurare
de bază implicită, astfel încât `<div class="bounce">` va funcționa
direct din cutie.

[Vezi notele de accesibilitate →](/ro/accesibilitate/)
