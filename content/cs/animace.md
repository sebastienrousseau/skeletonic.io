---
title: "Animace — Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Volitelny modul animaci dodavany se Skeletonic Stylus v2.0.0 — bounce, pulse, fade, zoom, shake a dalsi, vse za prefers-reduced-motion."
layout: page
permalink: https://skeletonic.io/cs/animace/
date: 2026-04-08
author: Sebastien Rousseau
language: cs
theme_color: "hsl(210, 100%, 42%)"
keywords: "css animace, keyframes, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

**Modul animaci** je dodavan jako samostatny volitelny soubor, aby
zakladni stylesheet zustal pod 8&nbsp;KB gzipped.

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

Kazda animacni trida je ve v2.0.0 obalena blokem
**`@media (prefers-reduced-motion: no-preference)`**, coz znamena, ze
uzivatel, ktery si v operacnim systemu nastavil „omezit pohyb", neuvidi
zadnou animaci — rozvrzeni stale funguje, pohyb je pouze potlacen.

<style>
  /*
   * Lokalni demo styly stranky. Animacni tridy dodavane v
   * skeletonic-animations.min.css nastavuji pouze animation-name, proto
   * demo doplnuje chybejici animation-duration / animation-iteration-count /
   * animation-fill-mode, aby byly keyframes viditelne. Kazdy demo cil je
   * barevny kruh, aby byl pohyb na pozadi stranky zretelny.
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

<hr class="hr-text" data-content="Ukazky">

## Ukazky

Stisknete **Prehrat** na libovolne karte pro prehrání animace na kruhu.
Animacni tridy jsou presne ty, ktere se dodavaji v
`skeletonic-animations.min.css` — pouze `animation-name` je nastaveno
knihovnou, takze blok `<style>` vyse doplnuje chybejici
`animation-duration` / `animation-iteration-count` / `animation-fill-mode`
vlastnosti, aby byly keyframes viditelne.

<p class="anim-note-rm">
  Ve vasem OS je povoleno Omezeni pohybu, takze cile nize zustanou
  nehybne — to je spravne chovani pristupnosti ve v2.0.0.
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">Prehrat</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">Prehrat</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">Prehrat</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">Prehrat</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">Prehrat</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">Prehrat</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">Prehrat</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">Prehrat</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">Prehrat</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">Prehrat</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">Prehrat</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">Prehrat</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">Prehrat</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">Prehrat</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">Prehrat</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">Prehrat</button>
  </div>

</div>

<script>
  // Animacni tridy dodavane ve v2.0.0 nastavuji animation-name v samotnem
  // selektoru. Pro prehrání keyframu musime trídu odebrat, vynutit
  // prekresleni a pak trídu pridat zpet.
  function replayAnim(btn, name){
    var target = btn.closest('.anim-card').querySelector('.anim-target');
    if (!target) return;
    target.className = 'anim-target';
    void target.offsetWidth;
    target.classList.add(name);
  }
  // Automaticke prehrani pri prvnim vykreslovani, aby navstevnik videl
  // neco v akci bez klikani — ale jen pokud je pohyb povolen.
  if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.anim-target').forEach(function(t){
        var n = t.getAttribute('data-anim');
        if (n) setTimeout(function(){ t.classList.add(n); }, 200);
      });
    });
  }
</script>

<hr class="hr-text" data-content="Seznam trid">

## Reference trid

| Trida | Co dela |
|---|---|
| `.bounce` | Vertikalni pruzinovy odskok |
| `.pulse` | Jemna pulsace meritkem |
| `.shake` | Horizontalni zatreseni |
| `.wobble` | Nakloneni a navrat |
| `.flash` | Dvoustupnove bliknuti pruhlednosti |
| `.heartbeat` | Dvojity srdecni tep meritkem |
| `.jelly` | Stlaceni a protazeni |
| `.rubberBand` | Elasticke protazeni |
| `.fadeIn` / `.fadeOut` | Prechod pruhlednosti |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | Smerovy prechod |
| `.zoomIn` / `.zoomOut` | Priblizeni / oddálení |
| `.popIn` / `.popOut` | Pruzinove zvetseni + prechod |
| `.rollIn` / `.rollOut` | Posun + rotace |
| `.flipInHorizontal` / `.flipInVertical` | 3D prevrácení |
| `.vanishIn` / `.vanishOut` | Zobrazeni ve stylu Material |
| `.chameleonbackground` / `.chameleontext` | Cyklus odtinu |

## Upozorneni — znamy limit v2.0.0

Animacni tridy ve v2.0.0 nastavuji pouze `animation-name`. Pro jejich
spusteni musíte aktualne zadat vlastni `animation-duration`,
`animation-iteration-count`, `animation-fill-mode` a
`animation-timing-function` — presne jako blok `<style>` v horni casti
teto stranky ukazuje. Budouci vydani zahrne rozumne vychozi nastaveni,
takze `<div class="bounce">` bude fungovat rovnou.

[Poznamky k pristupnosti →](/cs/pristupnost/)
