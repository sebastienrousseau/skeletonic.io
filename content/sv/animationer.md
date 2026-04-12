---
title: "Animationer"
name: "Skeletonic Stylus"
description: "Valfri animationsmodul som levereras med Skeletonic Stylus v1.1.7 — bounce, pulse, fade, zoom, shake och fler, alla bakom prefers-reduced-motion."
layout: page
permalink: https://skeletonic.io/sv/animationer/
date: 2026-04-08
author: Sebastien Rousseau
language: sv
theme_color: "hsl(210, 100%, 42%)"
keywords: "css animationer, keyframes, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

**Animationsmodulen** levereras som en separat valfri fil sa att
karn-stylesheetet hallar sig under 8&nbsp;KB gzippat.

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

Varje animationsklass ar inlindad i ett
**`@media (prefers-reduced-motion: no-preference)`**-block i v1.1.7,
vilket innebar att en anvandare som har stallt in "reducera rorelse" pa
OS-niva inte ser nagon animation alls — layouten fungerar fortfarande,
rorelsen undertrycks bara.

<style>
  /*
   * Sidlokala demostilar. Animationsklasserna som levereras i
   * skeletonic-animations.min.css sattar bara animation-name, sa demon
   * tillhandahaller de saknade duration / iteration-count / fill-mode har
   * sa att keyframes syns. Varje demomal ar en enfargsplatta sa att
   * rorelsen ar tydlig mot sidbakgrunden.
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

<hr class="hr-text" data-content="Demonstrationer">

## Demonstrationer

Tryck pa **Spela** pa valfritt kort for att spela upp animationen pa rutan. Animationsklasserna ar exakt de som levereras i
`skeletonic-animations.min.css` — bara `animation-name` satts av
biblioteket, sa det omgivande `<style>`-blocket ovan lagger till de saknade
`animation-duration` / `animation-iteration-count` / `animation-fill-mode`-egenskaperna for att gora keyframes synliga.

<p class="anim-note-rm">
  Reducerad rorelse ar aktiverat i ditt OS, sa malen nedan stannar
  stilla — det ar v1.1.7:s tillganglighetsbeteende som fungerar korrekt.
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">Spela</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">Spela</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">Spela</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">Spela</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">Spela</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">Spela</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">Spela</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">Spela</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">Spela</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">Spela</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">Spela</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">Spela</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">Spela</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">Spela</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">Spela</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">Spela</button>
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

<hr class="hr-text" data-content="Klassreferens">

## Klassreferens

| Klass | Vad den gor |
|---|---|
| `.bounce` | Vertikal fjadersteg |
| `.pulse` | Mjuk skalningspuls |
| `.shake` | Horisontell skakning |
| `.wobble` | Lutning och aterhamtning |
| `.flash` | Tvastegs opacitetsblinkande |
| `.heartbeat` | Dubbelslagsskalning |
| `.jelly` | Tryck och strackning |
| `.rubberBand` | Elastisk strackning |
| `.fadeIn` / `.fadeOut` | Opacitetsovergangen |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | Riktad toning |
| `.zoomIn` / `.zoomOut` | Skala in / ut ur vy |
| `.popIn` / `.popOut` | Fjadrande skalning + toning |
| `.rollIn` / `.rollOut` | Forflyttning + rotation |
| `.flipInHorizontal` / `.flipInVertical` | 3D-vandning |
| `.vanishIn` / `.vanishOut` | Material-stil upptradan |
| `.chameleonbackground` / `.chameleontext` | Nytonscykling |

## Observera — kant v1.1.7-forvaring

Animationsklasserna i v1.1.7 sattar bara `animation-name`. For att spela
dem maste du for narvarande tillhandahalla egna varden for `animation-duration`,
`animation-iteration-count`, `animation-fill-mode` och
`animation-timing-function` — precis som `<style>`-blocket hogst upp pa
denna sida demonstrerar. En framtida release kommer att inkludera en
forstallning grunduppsattning sa att `<div class="bounce">` fungerar direkt.

[Se tillganglighetsanteckningar →](/sv/tillganglighet/)
