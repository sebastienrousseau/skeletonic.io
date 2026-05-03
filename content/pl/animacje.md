---
title: "Animacje"
name: "Skeletonic Stylus"
description: "Opcjonalny modul animacji dostarczany z Skeletonic Stylus v2.0.0 — bounce, pulse, fade, zoom, shake i inne, wszystkie za prefers-reduced-motion."
layout: page
permalink: https://skeletonic.io/pl/animacje/
date: 2026-04-08
author: Sebastien Rousseau
language: pl
theme_color: "hsl(210, 100%, 42%)"
keywords: "animacje css, keyframes, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

**Modul animacji** jest dostarczany jako oddzielny opcjonalny plik, dzieki czemu glowny arkusz stylow pozostaje ponizej 8&nbsp;KB gzipped.

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

Kazda klasa animacji jest opakowana w blok **`@media (prefers-reduced-motion: no-preference)`** w v2.0.0, co oznacza, ze uzytkownik, ktory wlaczyl „ograniczenie ruchu" na poziomie systemu operacyjnego, nie zobaczy zadnej animacji — uklad nadal dziala, ruch jest po prostu stlumiony.

<noscript>
<p class="anim-banner anim-banner--warn">
  <strong>JavaScript is disabled.</strong> The animation gallery needs JS
  for the hover-replay and copy-class interactions, but every animation
  itself is pure CSS — pulling
  <code>skeletonic-animations.min.css</code> into your page and applying
  any class on this page works without any script.
</p>
</noscript>

<aside id="anim-rm-banner" class="anim-banner anim-banner--info" hidden>
  <strong>Your OS has Reduce Motion enabled.</strong>
  Skeletonic correctly honours that — every keyframe is gated behind
  <code>prefers-reduced-motion: no-preference</code>, so the targets below
  will stay still. To preview the demos:
  <span class="anim-banner-actions">
    <button type="button" class="button primary" data-anim-toolbar="force">
      Show animations anyway
    </button>
    or open DevTools → <em>Rendering</em> → <em>Emulate CSS media feature
    prefers-reduced-motion</em> → <em>no-preference</em>.
  </span>
</aside>

<section class="anim-toolbar" aria-label="Animation gallery filters">
  <label class="anim-search-wrap">
    <span class="visually-hidden">Search animations</span>
    <input
      type="search"
      id="anim-search"
      placeholder="Search 45 animations…"
      autocomplete="off"
      spellcheck="false"
      aria-label="Filter animations by name">
  </label>
  <div class="anim-chips" role="tablist" aria-label="Filter by family">
    <button type="button" class="anim-chip is-active" data-anim-filter="all" role="tab" aria-selected="true">All <span class="anim-chip-count">45</span></button>
    <button type="button" class="anim-chip" data-anim-filter="distracting" role="tab" aria-selected="false">Distracting <span class="anim-chip-count">12</span></button>
    <button type="button" class="anim-chip" data-anim-filter="fading" role="tab" aria-selected="false">Fading <span class="anim-chip-count">10</span></button>
    <button type="button" class="anim-chip" data-anim-filter="flipping" role="tab" aria-selected="false">Flipping <span class="anim-chip-count">5</span></button>
    <button type="button" class="anim-chip" data-anim-filter="sliding" role="tab" aria-selected="false">Sliding <span class="anim-chip-count">8</span></button>
    <button type="button" class="anim-chip" data-anim-filter="rotating" role="tab" aria-selected="false">Rotating <span class="anim-chip-count">2</span></button>
    <button type="button" class="anim-chip" data-anim-filter="zooming" role="tab" aria-selected="false">Zooming <span class="anim-chip-count">2</span></button>
    <button type="button" class="anim-chip" data-anim-filter="rolling" role="tab" aria-selected="false">Rolling <span class="anim-chip-count">2</span></button>
    <button type="button" class="anim-chip" data-anim-filter="pop" role="tab" aria-selected="false">Pop <span class="anim-chip-count">2</span></button>
    <button type="button" class="anim-chip" data-anim-filter="vanishing" role="tab" aria-selected="false">Vanishing <span class="anim-chip-count">2</span></button>
  </div>
  <p class="anim-empty" id="anim-empty" hidden>
    No animations match that search.
  </p>
</section>

<section class="anim-grid" id="anim-grid" aria-label="Animation gallery">
  <article class="anim-card" data-family="distracting" data-name="bounce" tabindex="0" aria-label="Copy class .bounce">
    <span class="anim-stage"><span class="anim-target" data-anim="bounce"></span></span>
    <span class="anim-name">bounce</span>
    <span class="anim-fam">Distracting</span>
  </article>
  <article class="anim-card" data-family="distracting" data-name="pulse" tabindex="0" aria-label="Copy class .pulse">
    <span class="anim-stage"><span class="anim-target" data-anim="pulse"></span></span>
    <span class="anim-name">pulse</span>
    <span class="anim-fam">Distracting</span>
  </article>
  <article class="anim-card" data-family="distracting" data-name="shake" tabindex="0" aria-label="Copy class .shake">
    <span class="anim-stage"><span class="anim-target" data-anim="shake"></span></span>
    <span class="anim-name">shake</span>
    <span class="anim-fam">Distracting</span>
  </article>
  <article class="anim-card" data-family="distracting" data-name="wobble" tabindex="0" aria-label="Copy class .wobble">
    <span class="anim-stage"><span class="anim-target" data-anim="wobble"></span></span>
    <span class="anim-name">wobble</span>
    <span class="anim-fam">Distracting</span>
  </article>
  <article class="anim-card" data-family="distracting" data-name="flash" tabindex="0" aria-label="Copy class .flash">
    <span class="anim-stage"><span class="anim-target" data-anim="flash"></span></span>
    <span class="anim-name">flash</span>
    <span class="anim-fam">Distracting</span>
  </article>
  <article class="anim-card" data-family="distracting" data-name="heartbeat" tabindex="0" aria-label="Copy class .heartbeat">
    <span class="anim-stage"><span class="anim-target" data-anim="heartbeat"></span></span>
    <span class="anim-name">heartbeat</span>
    <span class="anim-fam">Distracting</span>
  </article>
  <article class="anim-card" data-family="distracting" data-name="jelly" tabindex="0" aria-label="Copy class .jelly">
    <span class="anim-stage"><span class="anim-target" data-anim="jelly"></span></span>
    <span class="anim-name">jelly</span>
    <span class="anim-fam">Distracting</span>
  </article>
  <article class="anim-card" data-family="distracting" data-name="rubber" tabindex="0" aria-label="Copy class .rubber">
    <span class="anim-stage"><span class="anim-target" data-anim="rubber"></span></span>
    <span class="anim-name">rubber</span>
    <span class="anim-fam">Distracting</span>
  </article>
  <article class="anim-card" data-family="distracting" data-name="swing" tabindex="0" aria-label="Copy class .swing">
    <span class="anim-stage"><span class="anim-target" data-anim="swing"></span></span>
    <span class="anim-name">swing</span>
    <span class="anim-fam">Distracting</span>
  </article>
  <article class="anim-card" data-family="distracting" data-name="tada" tabindex="0" aria-label="Copy class .tada">
    <span class="anim-stage"><span class="anim-target" data-anim="tada"></span></span>
    <span class="anim-name">tada</span>
    <span class="anim-fam">Distracting</span>
  </article>
  <article class="anim-card" data-family="distracting" data-name="chameleonbackground" tabindex="0" aria-label="Copy class .chameleonbackground">
    <span class="anim-stage"><span class="anim-target" data-anim="chameleonbackground"></span></span>
    <span class="anim-name">chameleonbackground</span>
    <span class="anim-fam">Distracting</span>
  </article>
  <article class="anim-card" data-family="distracting" data-name="chameleontext" tabindex="0" aria-label="Copy class .chameleontext">
    <span class="anim-stage"><span class="anim-target anim-target--text" data-anim="chameleontext">Aa</span></span>
    <span class="anim-name">chameleontext</span>
    <span class="anim-fam">Distracting</span>
  </article>
  <article class="anim-card" data-family="fading" data-name="fadeIn" tabindex="0" aria-label="Copy class .fadeIn">
    <span class="anim-stage"><span class="anim-target" data-anim="fadeIn"></span></span>
    <span class="anim-name">fadeIn</span>
    <span class="anim-fam">Fading</span>
  </article>
  <article class="anim-card" data-family="fading" data-name="fadeInDown" tabindex="0" aria-label="Copy class .fadeInDown">
    <span class="anim-stage"><span class="anim-target" data-anim="fadeInDown"></span></span>
    <span class="anim-name">fadeInDown</span>
    <span class="anim-fam">Fading</span>
  </article>
  <article class="anim-card" data-family="fading" data-name="fadeInUp" tabindex="0" aria-label="Copy class .fadeInUp">
    <span class="anim-stage"><span class="anim-target" data-anim="fadeInUp"></span></span>
    <span class="anim-name">fadeInUp</span>
    <span class="anim-fam">Fading</span>
  </article>
  <article class="anim-card" data-family="fading" data-name="fadeInLeft" tabindex="0" aria-label="Copy class .fadeInLeft">
    <span class="anim-stage"><span class="anim-target" data-anim="fadeInLeft"></span></span>
    <span class="anim-name">fadeInLeft</span>
    <span class="anim-fam">Fading</span>
  </article>
  <article class="anim-card" data-family="fading" data-name="fadeInRight" tabindex="0" aria-label="Copy class .fadeInRight">
    <span class="anim-stage"><span class="anim-target" data-anim="fadeInRight"></span></span>
    <span class="anim-name">fadeInRight</span>
    <span class="anim-fam">Fading</span>
  </article>
  <article class="anim-card" data-family="fading" data-name="fadeOut" tabindex="0" aria-label="Copy class .fadeOut">
    <span class="anim-stage"><span class="anim-target" data-anim="fadeOut"></span></span>
    <span class="anim-name">fadeOut</span>
    <span class="anim-fam">Fading</span>
  </article>
  <article class="anim-card" data-family="fading" data-name="fadeOutDown" tabindex="0" aria-label="Copy class .fadeOutDown">
    <span class="anim-stage"><span class="anim-target" data-anim="fadeOutDown"></span></span>
    <span class="anim-name">fadeOutDown</span>
    <span class="anim-fam">Fading</span>
  </article>
  <article class="anim-card" data-family="fading" data-name="fadeOutUp" tabindex="0" aria-label="Copy class .fadeOutUp">
    <span class="anim-stage"><span class="anim-target" data-anim="fadeOutUp"></span></span>
    <span class="anim-name">fadeOutUp</span>
    <span class="anim-fam">Fading</span>
  </article>
  <article class="anim-card" data-family="fading" data-name="fadeOutLeft" tabindex="0" aria-label="Copy class .fadeOutLeft">
    <span class="anim-stage"><span class="anim-target" data-anim="fadeOutLeft"></span></span>
    <span class="anim-name">fadeOutLeft</span>
    <span class="anim-fam">Fading</span>
  </article>
  <article class="anim-card" data-family="fading" data-name="fadeOutRight" tabindex="0" aria-label="Copy class .fadeOutRight">
    <span class="anim-stage"><span class="anim-target" data-anim="fadeOutRight"></span></span>
    <span class="anim-name">fadeOutRight</span>
    <span class="anim-fam">Fading</span>
  </article>
  <article class="anim-card" data-family="flipping" data-name="flip" tabindex="0" aria-label="Copy class .flip">
    <span class="anim-stage"><span class="anim-target" data-anim="flip"></span></span>
    <span class="anim-name">flip</span>
    <span class="anim-fam">Flipping</span>
  </article>
  <article class="anim-card" data-family="flipping" data-name="flipInHorizontal" tabindex="0" aria-label="Copy class .flipInHorizontal">
    <span class="anim-stage"><span class="anim-target" data-anim="flipInHorizontal"></span></span>
    <span class="anim-name">flipInHorizontal</span>
    <span class="anim-fam">Flipping</span>
  </article>
  <article class="anim-card" data-family="flipping" data-name="flipInVertical" tabindex="0" aria-label="Copy class .flipInVertical">
    <span class="anim-stage"><span class="anim-target" data-anim="flipInVertical"></span></span>
    <span class="anim-name">flipInVertical</span>
    <span class="anim-fam">Flipping</span>
  </article>
  <article class="anim-card" data-family="flipping" data-name="flipOutHorizontal" tabindex="0" aria-label="Copy class .flipOutHorizontal">
    <span class="anim-stage"><span class="anim-target" data-anim="flipOutHorizontal"></span></span>
    <span class="anim-name">flipOutHorizontal</span>
    <span class="anim-fam">Flipping</span>
  </article>
  <article class="anim-card" data-family="flipping" data-name="flipOutVertical" tabindex="0" aria-label="Copy class .flipOutVertical">
    <span class="anim-stage"><span class="anim-target" data-anim="flipOutVertical"></span></span>
    <span class="anim-name">flipOutVertical</span>
    <span class="anim-fam">Flipping</span>
  </article>
  <article class="anim-card" data-family="sliding" data-name="slideInDown" tabindex="0" aria-label="Copy class .slideInDown">
    <span class="anim-stage"><span class="anim-target" data-anim="slideInDown"></span></span>
    <span class="anim-name">slideInDown</span>
    <span class="anim-fam">Sliding</span>
  </article>
  <article class="anim-card" data-family="sliding" data-name="slideInUp" tabindex="0" aria-label="Copy class .slideInUp">
    <span class="anim-stage"><span class="anim-target" data-anim="slideInUp"></span></span>
    <span class="anim-name">slideInUp</span>
    <span class="anim-fam">Sliding</span>
  </article>
  <article class="anim-card" data-family="sliding" data-name="slideInLeft" tabindex="0" aria-label="Copy class .slideInLeft">
    <span class="anim-stage"><span class="anim-target" data-anim="slideInLeft"></span></span>
    <span class="anim-name">slideInLeft</span>
    <span class="anim-fam">Sliding</span>
  </article>
  <article class="anim-card" data-family="sliding" data-name="slideInRight" tabindex="0" aria-label="Copy class .slideInRight">
    <span class="anim-stage"><span class="anim-target" data-anim="slideInRight"></span></span>
    <span class="anim-name">slideInRight</span>
    <span class="anim-fam">Sliding</span>
  </article>
  <article class="anim-card" data-family="sliding" data-name="slideOutDown" tabindex="0" aria-label="Copy class .slideOutDown">
    <span class="anim-stage"><span class="anim-target" data-anim="slideOutDown"></span></span>
    <span class="anim-name">slideOutDown</span>
    <span class="anim-fam">Sliding</span>
  </article>
  <article class="anim-card" data-family="sliding" data-name="slideOutUp" tabindex="0" aria-label="Copy class .slideOutUp">
    <span class="anim-stage"><span class="anim-target" data-anim="slideOutUp"></span></span>
    <span class="anim-name">slideOutUp</span>
    <span class="anim-fam">Sliding</span>
  </article>
  <article class="anim-card" data-family="sliding" data-name="slideOutLeft" tabindex="0" aria-label="Copy class .slideOutLeft">
    <span class="anim-stage"><span class="anim-target" data-anim="slideOutLeft"></span></span>
    <span class="anim-name">slideOutLeft</span>
    <span class="anim-fam">Sliding</span>
  </article>
  <article class="anim-card" data-family="sliding" data-name="slideOutRight" tabindex="0" aria-label="Copy class .slideOutRight">
    <span class="anim-stage"><span class="anim-target" data-anim="slideOutRight"></span></span>
    <span class="anim-name">slideOutRight</span>
    <span class="anim-fam">Sliding</span>
  </article>
  <article class="anim-card" data-family="rotating" data-name="spinLeft" tabindex="0" aria-label="Copy class .spinLeft">
    <span class="anim-stage"><span class="anim-target" data-anim="spinLeft"></span></span>
    <span class="anim-name">spinLeft</span>
    <span class="anim-fam">Rotating</span>
  </article>
  <article class="anim-card" data-family="rotating" data-name="spinRight" tabindex="0" aria-label="Copy class .spinRight">
    <span class="anim-stage"><span class="anim-target" data-anim="spinRight"></span></span>
    <span class="anim-name">spinRight</span>
    <span class="anim-fam">Rotating</span>
  </article>
  <article class="anim-card" data-family="zooming" data-name="zoomIn" tabindex="0" aria-label="Copy class .zoomIn">
    <span class="anim-stage"><span class="anim-target" data-anim="zoomIn"></span></span>
    <span class="anim-name">zoomIn</span>
    <span class="anim-fam">Zooming</span>
  </article>
  <article class="anim-card" data-family="zooming" data-name="zoomOut" tabindex="0" aria-label="Copy class .zoomOut">
    <span class="anim-stage"><span class="anim-target" data-anim="zoomOut"></span></span>
    <span class="anim-name">zoomOut</span>
    <span class="anim-fam">Zooming</span>
  </article>
  <article class="anim-card" data-family="rolling" data-name="rollIn" tabindex="0" aria-label="Copy class .rollIn">
    <span class="anim-stage"><span class="anim-target" data-anim="rollIn"></span></span>
    <span class="anim-name">rollIn</span>
    <span class="anim-fam">Rolling</span>
  </article>
  <article class="anim-card" data-family="rolling" data-name="rollOut" tabindex="0" aria-label="Copy class .rollOut">
    <span class="anim-stage"><span class="anim-target" data-anim="rollOut"></span></span>
    <span class="anim-name">rollOut</span>
    <span class="anim-fam">Rolling</span>
  </article>
  <article class="anim-card" data-family="pop" data-name="popIn" tabindex="0" aria-label="Copy class .popIn">
    <span class="anim-stage"><span class="anim-target" data-anim="popIn"></span></span>
    <span class="anim-name">popIn</span>
    <span class="anim-fam">Pop</span>
  </article>
  <article class="anim-card" data-family="pop" data-name="popOut" tabindex="0" aria-label="Copy class .popOut">
    <span class="anim-stage"><span class="anim-target" data-anim="popOut"></span></span>
    <span class="anim-name">popOut</span>
    <span class="anim-fam">Pop</span>
  </article>
  <article class="anim-card" data-family="vanishing" data-name="vanishIn" tabindex="0" aria-label="Copy class .vanishIn">
    <span class="anim-stage"><span class="anim-target" data-anim="vanishIn"></span></span>
    <span class="anim-name">vanishIn</span>
    <span class="anim-fam">Vanishing</span>
  </article>
  <article class="anim-card" data-family="vanishing" data-name="vanishOut" tabindex="0" aria-label="Copy class .vanishOut">
    <span class="anim-stage"><span class="anim-target" data-anim="vanishOut"></span></span>
    <span class="anim-name">vanishOut</span>
    <span class="anim-fam">Vanishing</span>
  </article>
</section>

<div class="anim-toast" id="anim-toast" role="status" aria-live="polite" hidden>
  Copied <code id="anim-toast-class">.bounce</code>
</div>

<script src="/js/animations.js" defer></script>

