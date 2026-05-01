---
title: "Mga Animasyon"
name: "Skeletonic Stylus"
description: "Opsyonal na module ng animasyon na kasama sa Skeletonic Stylus v2.0.0 — bounce, pulse, fade, zoom, shake, at iba pa, lahat sa likod ng prefers-reduced-motion."
layout: page
permalink: https://skeletonic.io/fil/mga-animasyon/
date: 2026-04-08
author: Sebastien Rousseau
language: fil
theme_color: "hsl(210, 100%, 42%)"
keywords: "css animation, keyframe, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

Ang **module ng animasyon** ay ipinapadala bilang isang hiwalay na opsyonal na file upang manatili ang core stylesheet sa ilalim ng 8&nbsp;KB gzipped.

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

Bawat animation class ay nakabalot sa isang
**`@media (prefers-reduced-motion: no-preference)`** na bloke sa v2.0.0,
na nangangahulugang ang isang gumagamit na nagtakda ng "reduce motion" sa antas ng OS ay hindi makakakita
ng anumang animasyon — gumagana pa rin ang layout, sinusupil lang ang galaw.

<style>
  /*
   * Page-local na demo style. Ang animation class na ipinapadala sa
   * skeletonic-animations.min.css ay nagtatakda lamang ng animation-name, kaya ang demo
   * ay nagbibigay ng nawawalang duration / iteration-count / fill-mode dito upang
   * ang mga keyframe ay makita. Bawat demo target ay isang solid na kulay na disc
   * upang kitang-kita ang galaw laban sa background ng pahina.
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

<hr class="hr-text" data-content="Mga Demo">

## Mga Demo

Pindutin ang **Play** sa anumang card upang i-replay ang animasyon sa parisukat. Ang mga animation class mismo ay eksaktong kung ano ang ipinapadala sa
`skeletonic-animations.min.css` — ang `animation-name` lamang ang itinatakda ng library, kaya ang nakapalibot na `<style>` na bloke sa itaas ang nagdadagdag ng nawawalang `animation-duration` / `animation-iteration-count` / `animation-fill-mode` na property upang makita ang mga keyframe.

<p class="anim-note-rm">
  Naka-enable ang Reduce Motion sa iyong OS, kaya ang mga target sa ibaba ay mananatiling tahimik — iyon ang v2.0.0 na accessibility behaviour na gumagana nang tama.
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">Play</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">Play</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">Play</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">Play</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">Play</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">Play</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">Play</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">Play</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">Play</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">Play</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">Play</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">Play</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">Play</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">Play</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">Play</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">Play</button>
  </div>

</div>

<script>
  // Ang mga animation class na ipinadala sa v2.0.0 ay nagtatakda ng animation-name sa
  // mismong selector. Upang i-replay ang keyframe kailangan nating alisin ang class,
  // pilitin ang layout flush, pagkatapos ay idagdag muli ang class.
  function replayAnim(btn, name){
    var target = btn.closest('.anim-card').querySelector('.anim-target');
    if (!target) return;
    target.className = 'anim-target';
    void target.offsetWidth;
    target.classList.add(name);
  }
  // Auto-play nang isang beses sa unang paint upang may makita ang bisita na mangyari
  // nang hindi nagki-click — ngunit kung pinapayagan lamang ang galaw.
  if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.anim-target').forEach(function(t){
        var n = t.getAttribute('data-anim');
        if (n) setTimeout(function(){ t.classList.add(n); }, 200);
      });
    });
  }
</script>

<hr class="hr-text" data-content="Listahan ng class">

## Sanggunian ng class

| Class | Ano ang ginagawa nito |
|---|---|
| `.bounce` | Vertical na spring step |
| `.pulse` | Malambot na scale pulse |
| `.shake` | Horizontal na shake |
| `.wobble` | Tilt at recover |
| `.flash` | Two-step na opacity blink |
| `.heartbeat` | Double-beat na scale |
| `.jelly` | Squash & stretch |
| `.rubberBand` | Elastic na stretch |
| `.fadeIn` / `.fadeOut` | Opacity transition |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | Directional na fade |
| `.zoomIn` / `.zoomOut` | Mag-scale papasok / palabas ng view |
| `.popIn` / `.popOut` | Spring scale + fade |
| `.rollIn` / `.rollOut` | Translate + rotate |
| `.flipInHorizontal` / `.flipInVertical` | 3-D flip |
| `.vanishIn` / `.vanishOut` | Material-style na paglitaw |
| `.chameleonbackground` / `.chameleontext` | Hue cycle |

## Paunawa — kilalang v2.0.0 na caveat

Ang mga animation class sa v2.0.0 ay nagtatakda lamang ng `animation-name`. Upang i-play ang mga ito
kailangan mong magbigay ng sarili mong `animation-duration`,
`animation-iteration-count`, `animation-fill-mode` at
`animation-timing-function` — eksaktong tulad ng ipinakita ng `<style>` na bloke sa itaas ng pahinang ito. Sa isang hinaharap na release ay maglalagay ng isang makatwirang default base setup upang ang `<div class="bounce">` ay gumana nang diretso mula sa kahon.

[Tingnan ang mga tala sa aksesibilidad →](/fil/aksesibilidad/)
