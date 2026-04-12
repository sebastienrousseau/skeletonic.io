---
title: "Animaties"
name: "Skeletonic Stylus"
description: "Optionele animatiemodule geleverd met Skeletonic Stylus v1.1.7 — bounce, pulse, fade, zoom, shake en meer, allemaal achter prefers-reduced-motion."
layout: page
permalink: https://skeletonic.io/nl/animaties/
date: 2026-04-08
author: Sebastien Rousseau
language: nl
theme_color: "hsl(210, 100%, 42%)"
keywords: "css animaties, keyframes, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

De **animatiemodule** wordt geleverd als een apart optioneel bestand zodat
het kernstylesheet onder 8&nbsp;KB gzipped blijft.

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

Elke animatieklasse is in v1.1.7 gewikkeld in een
**`@media (prefers-reduced-motion: no-preference)`** blok, wat betekent
dat een gebruiker die "beperkte beweging" heeft ingesteld op OS-niveau
helemaal geen animatie ziet — de layout werkt nog steeds, de beweging wordt
simpelweg onderdrukt.

<style>
  /*
   * Pagina-lokale demostijlen. De animatieklassen geleverd in
   * skeletonic-animations.min.css stellen alleen animation-name in, dus de demo
   * biedt de ontbrekende duration / iteration-count / fill-mode hier zodat
   * de keyframes zichtbaar zijn. Elk demotarget is een effen gekleurde schijf
   * zodat de beweging duidelijk is tegen de pagina-achtergrond.
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
    /* de ontbrekende eigenschappen staan hier zodat de animatieklassen van v1.1.7
       daadwerkelijk draaien wanneer ze aan het target worden toegevoegd */
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

<hr class="hr-text" data-content="Demo's">

## Demo's

Druk op **Afspelen** op een kaart om de animatie op het vierkant opnieuw af te
spelen. De animatieklassen zelf zijn precies wat wordt geleverd in
`skeletonic-animations.min.css` — alleen `animation-name` wordt ingesteld door de
bibliotheek, dus het omringende `<style>`-blok hierboven voegt de ontbrekende
`animation-duration` / `animation-iteration-count` / `animation-fill-mode`
eigenschappen toe om de keyframes zichtbaar te maken.

<p class="anim-note-rm">
  Beperkte Beweging is ingeschakeld in je OS, dus de targets hieronder blijven
  stilstaan — dat is het v1.1.7-toegankelijkheidsgedrag dat correct werkt.
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">Afspelen</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">Afspelen</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">Afspelen</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">Afspelen</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">Afspelen</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">Afspelen</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">Afspelen</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">Afspelen</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">Afspelen</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">Afspelen</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">Afspelen</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">Afspelen</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">Afspelen</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">Afspelen</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">Afspelen</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">Afspelen</button>
  </div>

</div>

<script>
  // De animatieklassen geleverd in v1.1.7 stellen animation-name in via de
  // selector zelf. Om de keyframe opnieuw af te spelen moeten we de klasse
  // verwijderen, een layout-flush forceren en dan de klasse weer toevoegen.
  function replayAnim(btn, name){
    var target = btn.closest('.anim-card').querySelector('.anim-target');
    if (!target) return;
    target.className = 'anim-target';
    void target.offsetWidth;
    target.classList.add(name);
  }
  // Automatisch afspelen bij eerste weergave zodat de bezoeker iets ziet
  // gebeuren zonder te klikken — maar alleen als beweging is toegestaan.
  if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.anim-target').forEach(function(t){
        var n = t.getAttribute('data-anim');
        if (n) setTimeout(function(){ t.classList.add(n); }, 200);
      });
    });
  }
</script>

<hr class="hr-text" data-content="Klassenlijst">

## Klassenreferentie

| Klasse | Wat het doet |
|---|---|
| `.bounce` | Verticale veerbeweging |
| `.pulse` | Zachte schaalpuls |
| `.shake` | Horizontale schudbeweging |
| `.wobble` | Kantelen en herstellen |
| `.flash` | Tweestaps-doorzichtigheidflits |
| `.heartbeat` | Dubbele hartslagschaal |
| `.jelly` | Indrukken en uitrekken |
| `.rubberBand` | Elastisch uitrekken |
| `.fadeIn` / `.fadeOut` | Doorzichtigheidsovergang |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | Directionele fade |
| `.zoomIn` / `.zoomOut` | Inschalen / uitschalen |
| `.popIn` / `.popOut` | Veer-schaal + fade |
| `.rollIn` / `.rollOut` | Verschuiven + roteren |
| `.flipInHorizontal` / `.flipInVertical` | 3D-omklap |
| `.vanishIn` / `.vanishOut` | Material-stijl verschijning |
| `.chameleonbackground` / `.chameleontext` | Tintwisseling |

## Let op — bekend v1.1.7-voorbehoud

De animatieklassen in v1.1.7 stellen alleen `animation-name` in. Om ze af te
spelen moet je momenteel zelf `animation-duration`,
`animation-iteration-count`, `animation-fill-mode` en
`animation-timing-function` opgeven — precies zoals het `<style>`-blok bovenaan
deze pagina demonstreert. Een toekomstige release zal een verstandige
standaardconfiguratie inbouwen zodat `<div class="bounce">` direct
uit de doos werkt.

[Bekijk toegankelijkheidsnotities →](/nl/toegankelijkheid/)
