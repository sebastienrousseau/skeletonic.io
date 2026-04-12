---
title: "Animazioni"
name: "Skeletonic Stylus"
description: "Modulo animazioni opzionale incluso in Skeletonic Stylus v1.1.7 — bounce, pulse, fade, zoom, shake e altro, il tutto dietro prefers-reduced-motion."
layout: page
permalink: https://skeletonic.io/it/animazioni/
date: 2026-04-08
author: Sebastien Rousseau
language: it
theme_color: "hsl(210, 100%, 42%)"
keywords: "animazioni css, keyframes, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

Il **modulo animazioni** e distribuito come file opzionale separato cosi il foglio di stile principale resta sotto gli 8&nbsp;KB gzipped.

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

Ogni classe di animazione e racchiusa in un blocco
**`@media (prefers-reduced-motion: no-preference)`** nella v1.1.7, il che significa che un utente che ha impostato "ridurre il movimento" a livello di sistema operativo non vedra alcuna animazione — il layout funziona comunque, il movimento viene semplicemente soppresso.

<style>
  /*
   * Stili demo locali della pagina. Le classi di animazione incluse in
   * skeletonic-animations.min.css impostano solo animation-name, quindi
   * la demo fornisce le proprieta mancanti di duration / iteration-count /
   * fill-mode qui affinche i keyframe siano visibili. Ogni target demo e
   * un disco colorato pieno cosi il movimento e evidente sullo sfondo.
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

Premi **Riproduci** su qualsiasi card per riprodurre l'animazione sul quadrato. Le classi di animazione sono esattamente quelle incluse in `skeletonic-animations.min.css` — solo `animation-name` e impostato dalla libreria, quindi il blocco `<style>` sopra aggiunge le proprieta mancanti `animation-duration` / `animation-iteration-count` / `animation-fill-mode` per rendere visibili i keyframe.

<p class="anim-note-rm">
  La riduzione del movimento e attiva nel tuo sistema operativo, quindi i
  target qui sotto resteranno fermi — e il comportamento di accessibilita
  della v1.1.7 che funziona correttamente.
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">Riproduci</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">Riproduci</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">Riproduci</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">Riproduci</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">Riproduci</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">Riproduci</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">Riproduci</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">Riproduci</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">Riproduci</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">Riproduci</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">Riproduci</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">Riproduci</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">Riproduci</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">Riproduci</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">Riproduci</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">Riproduci</button>
  </div>

</div>

<script>
  // Le classi di animazione incluse nella v1.1.7 impostano animation-name
  // nel selettore stesso. Per riprodurre il keyframe bisogna rimuovere la
  // classe, forzare un reflow del layout, quindi riaggiungere la classe.
  function replayAnim(btn, name){
    var target = btn.closest('.anim-card').querySelector('.anim-target');
    if (!target) return;
    target.className = 'anim-target';
    void target.offsetWidth;
    target.classList.add(name);
  }
  // Riproduzione automatica al primo render cosi il visitatore vede qualcosa
  // senza fare clic — ma solo se il movimento e consentito.
  if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.anim-target').forEach(function(t){
        var n = t.getAttribute('data-anim');
        if (n) setTimeout(function(){ t.classList.add(n); }, 200);
      });
    });
  }
</script>

<hr class="hr-text" data-content="Elenco classi">

## Riferimento classi

| Classe | Descrizione |
|---|---|
| `.bounce` | Passo a molla verticale |
| `.pulse` | Pulsazione di scala morbida |
| `.shake` | Scuotimento orizzontale |
| `.wobble` | Inclinazione e recupero |
| `.flash` | Lampeggio di opacita in due fasi |
| `.heartbeat` | Scala a doppio battito |
| `.jelly` | Compressione e allungamento |
| `.rubberBand` | Allungamento elastico |
| `.fadeIn` / `.fadeOut` | Transizione di opacita |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | Dissolvenza direzionale |
| `.zoomIn` / `.zoomOut` | Scala in entrata / uscita dalla vista |
| `.popIn` / `.popOut` | Scala a molla + dissolvenza |
| `.rollIn` / `.rollOut` | Traslazione + rotazione |
| `.flipInHorizontal` / `.flipInVertical` | Rotazione 3D |
| `.vanishIn` / `.vanishOut` | Apparizione stile Material |
| `.chameleonbackground` / `.chameleontext` | Ciclo di tonalita |

## Avvertenza — caveat noto nella v1.1.7

Le classi di animazione nella v1.1.7 impostano solo `animation-name`. Per riprodurle attualmente devi fornire i tuoi `animation-duration`, `animation-iteration-count`, `animation-fill-mode` e `animation-timing-function` — esattamente come dimostra il blocco `<style>` in cima a questa pagina. Un rilascio futuro includera una configurazione di base predefinita cosi `<div class="bounce">` funzionera direttamente.

[Vedi le note sull'accessibilita →](/it/accessibilita/)
