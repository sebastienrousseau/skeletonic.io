---
title: "Ere Idasọnu"
name: "Skeletonic Stylus"
description: "Modulu ere idasọnu yan ti a fi ranṣẹ pẹlu Skeletonic Stylus v2.0.0 — bounce, pulse, fade, zoom, shake, ati awọn ọrẹ, gbogbo lẹhin prefers-reduced-motion."
language: yo
layout: page
permalink: https://skeletonic.io/yo/ere-idasonu/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "awọn ere idasọnu css, keyframes, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

**Modulu ere idasọnu** ni a fi ranṣẹ bi faili yan ti o yatọ nitorinaa
iwe-aṣa ipilẹ wa labẹ 8&nbsp;KB gzipped.

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

Gbogbo kilasi ere idasọnu ni a fi sinu bulọọki
**`@media (prefers-reduced-motion: no-preference)`** ninu v2.0.0, eyi
ti o tumọ si pe olumulo ti o ti ṣeto "din iṣipopada ku" ni ipele OS ko
ni ri ere idasọnu kankan — eto naa si ṣiṣẹ, iṣipopada nikan ni a
dinku.

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

<hr class="hr-text" data-content="Awọn afihan">

## Awọn afihan

Tẹ **Mu ṣiṣẹ** lori kaadi eyikeyi lati tun ere idasọnu ṣe lori
onigun mẹrin. Awọn kilasi ere idasọnu funrarẹ ni ohun gangan ti a fi
ranṣẹ ninu `skeletonic-animations.min.css` — `animation-name` nikan ni
ile-ikawe ṣeto, nitorinaa bulọọki `<style>` loke fi `animation-duration`
/ `animation-iteration-count` / `animation-fill-mode` ti o padanu kun ki
awọn keyframes le han.

<p class="anim-note-rm">
  A ti mu Idinku Iṣipopada ṣiṣẹ ni OS rẹ, nitorinaa awọn ibi-afẹde ni
  isalẹ yoo duro jẹ — iyẹn ni ihuwasi irayẹ-si v2.0.0 n ṣiṣẹ ni deede.
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">Mu ṣiṣẹ</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">Mu ṣiṣẹ</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">Mu ṣiṣẹ</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">Mu ṣiṣẹ</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">Mu ṣiṣẹ</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">Mu ṣiṣẹ</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">Mu ṣiṣẹ</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">Mu ṣiṣẹ</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">Mu ṣiṣẹ</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">Mu ṣiṣẹ</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">Mu ṣiṣẹ</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">Mu ṣiṣẹ</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">Mu ṣiṣẹ</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">Mu ṣiṣẹ</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">Mu ṣiṣẹ</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">Mu ṣiṣẹ</button>
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

<hr class="hr-text" data-content="Atokọ kilasi">

## Itọkasi kilasi

| Kilasi | Ohun ti o ṣe |
|---|---|
| `.bounce` | Igbesẹ orisun inaro |
| `.pulse` | Iwọn pulse rirọ |
| `.shake` | Gbigbọn petele |
| `.wobble` | Titẹ ati igbapada |
| `.flash` | Imọlẹ opacity igbesẹ-meji |
| `.heartbeat` | Iwọn lilu-meji |
| `.jelly` | Fifun ati gigun |
| `.rubberBand` | Gigun rọba |
| `.fadeIn` / `.fadeOut` | Iyipada opacity |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | Fade ọna |
| `.zoomIn` / `.zoomOut` | Iwọn sinu / jade kuro ni iran |
| `.popIn` / `.popOut` | Iwọn orisun + fade |
| `.rollIn` / `.rollOut` | Gbigbe + yiyi |
| `.flipInHorizontal` / `.flipInVertical` | Yiyi 3-D |
| `.vanishIn` / `.vanishOut` | Ifarahan ara Material |
| `.chameleonbackground` / `.chameleontext` | Iyipo awọ |

## Akiyesi — ohun ti a mọ nipa v2.0.0

Awọn kilasi ere idasọnu ninu v2.0.0 ṣeto `animation-name` nikan. Lati
mu wọn ṣiṣẹ o ni lati pese `animation-duration`,
`animation-iteration-count`, `animation-fill-mode` ati
`animation-timing-function` tirẹ — gẹgẹ bi bulọọki `<style>` ni oke
oju-iwe yii ti fihan. Itusilẹ ọjọ iwaju yoo fi eto ipilẹ aiyipada ti o
wulo sinu nitorinaa `<div class="bounce">` yoo ṣiṣẹ lẹsẹkẹsẹ.

[Wo awọn akiyesi irayẹ-si →](/yo/iraye-si/)
