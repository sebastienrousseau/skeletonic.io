---
title: "Animations"
name: "Skeletonic Stylus"
description: "Optional animations module shipped with Skeletonic Stylus v1.1.7 — bounce, pulse, fade, zoom, shake, and friends, all behind prefers-reduced-motion."
layout: page
permalink: https://skeletonic.io/animations/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "css animations, keyframes, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

The **animations module** is shipped as a separate optional file so the
core stylesheet stays under 7&nbsp;KB brotli. **45 keyframes across 9
families**, every one of them gated behind
`@media (prefers-reduced-motion: no-preference)`.

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

Every animation class is wrapped in a
**`@media (prefers-reduced-motion: no-preference)`** block in v1.1.7,
which means a user who has set "reduce motion" at the OS level will see
no animation at all — the layout still works, the motion is just
suppressed.

<style>
  /*
   * Page-local demo styles. The animation classes shipped in
   * skeletonic-animations.min.css set animation-name only, so the demo
   * provides the missing duration / iteration-count / fill-mode here so
   * the keyframes are visible. Each demo target is a solid colour disc
   * so the motion is obvious against the page background.
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
    /* the missing properties live here so v1.1.7's animation classes
       actually run when added to the target */
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

<hr class="hr-text" data-content="Demos">

## Demos

Press **Play** on any card to replay the animation on the square. The
animation classes themselves are exactly what ships in
`skeletonic-animations.min.css` — only `animation-name` is set by the
library, so the surrounding `<style>` block above adds the missing
`animation-duration` / `animation-iteration-count` / `animation-fill-mode`
properties to make the keyframes visible.

<p class="anim-note-rm">
  Reduce Motion is enabled in your OS, so the targets below will stay
  still — that's the v1.1.7 accessibility behaviour working correctly.
</p>

<h3 id="distracting">Distracting (12)</h3>

Attention-grabbing motion for emphasis, errors, and celebrations.

<div class="anim-grid">
  <div class="anim-card"><h3>bounce</h3><div class="anim-stage"><span class="anim-target" data-anim="bounce"></span></div><button type="button" class="button primary" onclick="replayAnim(this,'bounce')">Play</button></div>
  <div class="anim-card"><h3>pulse</h3><div class="anim-stage"><span class="anim-target" data-anim="pulse"></span></div><button type="button" class="button primary" onclick="replayAnim(this,'pulse')">Play</button></div>
  <div class="anim-card"><h3>shake</h3><div class="anim-stage"><span class="anim-target" data-anim="shake"></span></div><button type="button" class="button primary" onclick="replayAnim(this,'shake')">Play</button></div>
  <div class="anim-card"><h3>wobble</h3><div class="anim-stage"><span class="anim-target" data-anim="wobble"></span></div><button type="button" class="button primary" onclick="replayAnim(this,'wobble')">Play</button></div>
  <div class="anim-card"><h3>flash</h3><div class="anim-stage"><span class="anim-target" data-anim="flash"></span></div><button type="button" class="button primary" onclick="replayAnim(this,'flash')">Play</button></div>
  <div class="anim-card"><h3>heartbeat</h3><div class="anim-stage"><span class="anim-target" data-anim="heartbeat"></span></div><button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">Play</button></div>
  <div class="anim-card"><h3>jelly</h3><div class="anim-stage"><span class="anim-target" data-anim="jelly"></span></div><button type="button" class="button primary" onclick="replayAnim(this,'jelly')">Play</button></div>
  <div class="anim-card"><h3>rubber</h3><div class="anim-stage"><span class="anim-target" data-anim="rubber"></span></div><button type="button" class="button primary" onclick="replayAnim(this,'rubber')">Play</button></div>
  <div class="anim-card"><h3>swing</h3><div class="anim-stage"><span class="anim-target" data-anim="swing"></span></div><button type="button" class="button primary" onclick="replayAnim(this,'swing')">Play</button></div>
  <div class="anim-card"><h3>tada</h3><div class="anim-stage"><span class="anim-target" data-anim="tada"></span></div><button type="button" class="button primary" onclick="replayAnim(this,'tada')">Play</button></div>
  <div class="anim-card"><h3>chameleonbackground</h3><div class="anim-stage"><span class="anim-target" data-anim="chameleonbackground"></span></div><button type="button" class="button primary" onclick="replayAnim(this,'chameleonbackground')">Play</button></div>
  <div class="anim-card"><h3>chameleontext</h3><div class="anim-stage"><span class="anim-target chameleontext-stage" data-anim="chameleontext" style="color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;border-radius:0;background:transparent;">Aa</span></div><button type="button" class="button primary" onclick="replayAnim(this,'chameleontext')">Play</button></div>
</div>

<h3 id="fading">Fading (10)</h3>

Smooth opacity transitions, optionally combined with translation.

<div class="anim-grid">
  <div class="anim-card"><h3>fadeIn</h3><div class="anim-stage"><span class="anim-target" data-anim="fadeIn"></span></div><button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">Play</button></div>
  <div class="anim-card"><h3>fadeInDown</h3><div class="anim-stage"><span class="anim-target" data-anim="fadeInDown"></span></div><button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">Play</button></div>
  <div class="anim-card"><h3>fadeInUp</h3><div class="anim-stage"><span class="anim-target" data-anim="fadeInUp"></span></div><button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">Play</button></div>
  <div class="anim-card"><h3>fadeInLeft</h3><div class="anim-stage"><span class="anim-target" data-anim="fadeInLeft"></span></div><button type="button" class="button secondary" onclick="replayAnim(this,'fadeInLeft')">Play</button></div>
  <div class="anim-card"><h3>fadeInRight</h3><div class="anim-stage"><span class="anim-target" data-anim="fadeInRight"></span></div><button type="button" class="button secondary" onclick="replayAnim(this,'fadeInRight')">Play</button></div>
  <div class="anim-card"><h3>fadeOut</h3><div class="anim-stage"><span class="anim-target" data-anim="fadeOut"></span></div><button type="button" class="button secondary" onclick="replayAnim(this,'fadeOut')">Play</button></div>
  <div class="anim-card"><h3>fadeOutDown</h3><div class="anim-stage"><span class="anim-target" data-anim="fadeOutDown"></span></div><button type="button" class="button secondary" onclick="replayAnim(this,'fadeOutDown')">Play</button></div>
  <div class="anim-card"><h3>fadeOutUp</h3><div class="anim-stage"><span class="anim-target" data-anim="fadeOutUp"></span></div><button type="button" class="button secondary" onclick="replayAnim(this,'fadeOutUp')">Play</button></div>
  <div class="anim-card"><h3>fadeOutLeft</h3><div class="anim-stage"><span class="anim-target" data-anim="fadeOutLeft"></span></div><button type="button" class="button secondary" onclick="replayAnim(this,'fadeOutLeft')">Play</button></div>
  <div class="anim-card"><h3>fadeOutRight</h3><div class="anim-stage"><span class="anim-target" data-anim="fadeOutRight"></span></div><button type="button" class="button secondary" onclick="replayAnim(this,'fadeOutRight')">Play</button></div>
</div>

<h3 id="flipping">Flipping (5)</h3>

3-D card flips on the X or Y axis.

<div class="anim-grid">
  <div class="anim-card"><h3>flip</h3><div class="anim-stage"><span class="anim-target" data-anim="flip"></span></div><button type="button" class="button" onclick="replayAnim(this,'flip')">Play</button></div>
  <div class="anim-card"><h3>flipInHorizontal</h3><div class="anim-stage"><span class="anim-target" data-anim="flipInHorizontal"></span></div><button type="button" class="button" onclick="replayAnim(this,'flipInHorizontal')">Play</button></div>
  <div class="anim-card"><h3>flipInVertical</h3><div class="anim-stage"><span class="anim-target" data-anim="flipInVertical"></span></div><button type="button" class="button" onclick="replayAnim(this,'flipInVertical')">Play</button></div>
  <div class="anim-card"><h3>flipOutHorizontal</h3><div class="anim-stage"><span class="anim-target" data-anim="flipOutHorizontal"></span></div><button type="button" class="button" onclick="replayAnim(this,'flipOutHorizontal')">Play</button></div>
  <div class="anim-card"><h3>flipOutVertical</h3><div class="anim-stage"><span class="anim-target" data-anim="flipOutVertical"></span></div><button type="button" class="button" onclick="replayAnim(this,'flipOutVertical')">Play</button></div>
</div>

<h3 id="sliding">Sliding (8)</h3>

Slide on or off from any cardinal direction.

<div class="anim-grid">
  <div class="anim-card"><h3>slideInDown</h3><div class="anim-stage"><span class="anim-target" data-anim="slideInDown"></span></div><button type="button" class="button" onclick="replayAnim(this,'slideInDown')">Play</button></div>
  <div class="anim-card"><h3>slideInUp</h3><div class="anim-stage"><span class="anim-target" data-anim="slideInUp"></span></div><button type="button" class="button" onclick="replayAnim(this,'slideInUp')">Play</button></div>
  <div class="anim-card"><h3>slideInLeft</h3><div class="anim-stage"><span class="anim-target" data-anim="slideInLeft"></span></div><button type="button" class="button" onclick="replayAnim(this,'slideInLeft')">Play</button></div>
  <div class="anim-card"><h3>slideInRight</h3><div class="anim-stage"><span class="anim-target" data-anim="slideInRight"></span></div><button type="button" class="button" onclick="replayAnim(this,'slideInRight')">Play</button></div>
  <div class="anim-card"><h3>slideOutDown</h3><div class="anim-stage"><span class="anim-target" data-anim="slideOutDown"></span></div><button type="button" class="button" onclick="replayAnim(this,'slideOutDown')">Play</button></div>
  <div class="anim-card"><h3>slideOutUp</h3><div class="anim-stage"><span class="anim-target" data-anim="slideOutUp"></span></div><button type="button" class="button" onclick="replayAnim(this,'slideOutUp')">Play</button></div>
  <div class="anim-card"><h3>slideOutLeft</h3><div class="anim-stage"><span class="anim-target" data-anim="slideOutLeft"></span></div><button type="button" class="button" onclick="replayAnim(this,'slideOutLeft')">Play</button></div>
  <div class="anim-card"><h3>slideOutRight</h3><div class="anim-stage"><span class="anim-target" data-anim="slideOutRight"></span></div><button type="button" class="button" onclick="replayAnim(this,'slideOutRight')">Play</button></div>
</div>

<h3 id="rotating">Rotating (2)</h3>

Continuous rotation — pair with `animation-iteration-count: infinite`
for a true spinner.

<div class="anim-grid">
  <div class="anim-card"><h3>spinLeft</h3><div class="anim-stage"><span class="anim-target" data-anim="spinLeft"></span></div><button type="button" class="button" onclick="replayAnim(this,'spinLeft')">Play</button></div>
  <div class="anim-card"><h3>spinRight</h3><div class="anim-stage"><span class="anim-target" data-anim="spinRight"></span></div><button type="button" class="button" onclick="replayAnim(this,'spinRight')">Play</button></div>
</div>

<h3 id="zooming">Zooming (2)</h3>

Scale from / to zero with a centred origin.

<div class="anim-grid">
  <div class="anim-card"><h3>zoomIn</h3><div class="anim-stage"><span class="anim-target" data-anim="zoomIn"></span></div><button type="button" class="button" onclick="replayAnim(this,'zoomIn')">Play</button></div>
  <div class="anim-card"><h3>zoomOut</h3><div class="anim-stage"><span class="anim-target" data-anim="zoomOut"></span></div><button type="button" class="button" onclick="replayAnim(this,'zoomOut')">Play</button></div>
</div>

<h3 id="rolling">Rolling (2)</h3>

Translate plus rotate — appears to "roll" across the page.

<div class="anim-grid">
  <div class="anim-card"><h3>rollIn</h3><div class="anim-stage"><span class="anim-target" data-anim="rollIn"></span></div><button type="button" class="button" onclick="replayAnim(this,'rollIn')">Play</button></div>
  <div class="anim-card"><h3>rollOut</h3><div class="anim-stage"><span class="anim-target" data-anim="rollOut"></span></div><button type="button" class="button" onclick="replayAnim(this,'rollOut')">Play</button></div>
</div>

<h3 id="popping">Pop (2)</h3>

Spring scale + fade — Apple-style.

<div class="anim-grid">
  <div class="anim-card"><h3>popIn</h3><div class="anim-stage"><span class="anim-target" data-anim="popIn"></span></div><button type="button" class="button" onclick="replayAnim(this,'popIn')">Play</button></div>
  <div class="anim-card"><h3>popOut</h3><div class="anim-stage"><span class="anim-target" data-anim="popOut"></span></div><button type="button" class="button" onclick="replayAnim(this,'popOut')">Play</button></div>
</div>

<h3 id="vanishing">Vanishing (2)</h3>

Material-style appear / disappear with blur.

<div class="anim-grid">
  <div class="anim-card"><h3>vanishIn</h3><div class="anim-stage"><span class="anim-target" data-anim="vanishIn"></span></div><button type="button" class="button" onclick="replayAnim(this,'vanishIn')">Play</button></div>
  <div class="anim-card"><h3>vanishOut</h3><div class="anim-stage"><span class="anim-target" data-anim="vanishOut"></span></div><button type="button" class="button" onclick="replayAnim(this,'vanishOut')">Play</button></div>
</div>

<script>
  // The animation classes shipped in v1.1.7 set animation-name in the
  // selector itself. To replay the keyframe we have to remove the class,
  // force a layout flush, then add the class back.
  function replayAnim(btn, name){
    var target = btn.closest('.anim-card').querySelector('.anim-target');
    if (!target) return;
    target.className = 'anim-target';
    void target.offsetWidth;
    target.classList.add(name);
  }
  // Auto-play once on first paint so the visitor sees something happen
  // without clicking — but only if motion is allowed.
  if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.anim-target').forEach(function(t){
        var n = t.getAttribute('data-anim');
        if (n) setTimeout(function(){ t.classList.add(n); }, 200);
      });
    });
  }
</script>

<hr class="hr-text" data-content="Class list">

## Class reference (45 keyframes, 9 families)

| Family | Classes |
|---|---|
| **Distracting** (12) | `.bounce` · `.pulse` · `.shake` · `.wobble` · `.flash` · `.heartbeat` · `.jelly` · `.rubber` · `.swing` · `.tada` · `.chameleonbackground` · `.chameleontext` |
| **Fading** (10) | `.fadeIn` · `.fadeInDown` · `.fadeInUp` · `.fadeInLeft` · `.fadeInRight` · `.fadeOut` · `.fadeOutDown` · `.fadeOutUp` · `.fadeOutLeft` · `.fadeOutRight` |
| **Flipping** (5) | `.flip` · `.flipInHorizontal` · `.flipInVertical` · `.flipOutHorizontal` · `.flipOutVertical` |
| **Sliding** (8) | `.slideInDown` · `.slideInUp` · `.slideInLeft` · `.slideInRight` · `.slideOutDown` · `.slideOutUp` · `.slideOutLeft` · `.slideOutRight` |
| **Rotating** (2) | `.spinLeft` · `.spinRight` |
| **Zooming** (2) | `.zoomIn` · `.zoomOut` |
| **Rolling** (2) | `.rollIn` · `.rollOut` |
| **Pop** (2) | `.popIn` · `.popOut` |
| **Vanishing** (2) | `.vanishIn` · `.vanishOut` |

## Heads up — known v1.1.7 caveat

The animation classes in v1.1.7 set `animation-name` only. To play them
you currently have to provide your own `animation-duration`,
`animation-iteration-count`, `animation-fill-mode` and
`animation-timing-function` — exactly like the `<style>` block at the
top of this page demonstrates. A future release will inline a sensible
default base setup so `<div class="bounce">` works straight out of the
box.

[See accessibility notes →](/accessibility/)
