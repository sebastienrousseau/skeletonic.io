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

<style>
  /*
   * Lokalne style demo strony. Klasy animacji dostarczane w
   * skeletonic-animations.min.css ustawiaja tylko animation-name, wiec
   * demo dostarcza brakujacy duration / iteration-count / fill-mode tutaj,
   * aby klatki kluczowe byly widoczne. Kazdy cel demo to jednolity kolorowy
   * dysk, aby ruch byl oczywisty na tle strony.
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

<hr class="hr-text" data-content="Dema">

## Dema

Nacisnij **Odtworz** na dowolnej karcie, aby ponownie odtworzyc animacje na kwadracie. Same klasy animacji to dokladnie to, co jest dostarczane w `skeletonic-animations.min.css` — tylko `animation-name` jest ustawiane przez biblioteke, wiec otaczajacy blok `<style>` powyzej dodaje brakujace wlasciwosci `animation-duration` / `animation-iteration-count` / `animation-fill-mode`, aby klatki kluczowe byly widoczne.

<p class="anim-note-rm">
  Ograniczenie ruchu jest wlaczone w Twoim systemie operacyjnym, wiec cele ponizej
  pozostana nieruchome — to zachowanie dostepnosci v2.0.0 dziala prawidlowo.
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">Odtworz</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">Odtworz</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">Odtworz</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">Odtworz</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">Odtworz</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">Odtworz</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">Odtworz</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">Odtworz</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">Odtworz</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">Odtworz</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">Odtworz</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">Odtworz</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">Odtworz</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">Odtworz</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">Odtworz</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">Odtworz</button>
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

<hr class="hr-text" data-content="Lista klas">

## Referencja klas

| Klasa | Co robi |
|---|---|
| `.bounce` | Pionowy sprezysty krok |
| `.pulse` | Lagodna pulsacja skali |
| `.shake` | Poziome trzesienie |
| `.wobble` | Przechylenie i powrot |
| `.flash` | Dwustopniowe migniecie przezroczystoscia |
| `.heartbeat` | Podwojny puls skali |
| `.jelly` | Zgniecenie i rozciagniecie |
| `.rubberBand` | Elastyczne rozciagniecie |
| `.fadeIn` / `.fadeOut` | Przejscie przezroczystosci |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | Kierunkowe zanikanie |
| `.zoomIn` / `.zoomOut` | Skalowanie do / ze widoku |
| `.popIn` / `.popOut` | Sprezyste skalowanie + zanikanie |
| `.rollIn` / `.rollOut` | Przesuniecie + obrót |
| `.flipInHorizontal` / `.flipInVertical` | Obrot 3D |
| `.vanishIn` / `.vanishOut` | Pojawienie w stylu Material |
| `.chameleonbackground` / `.chameleontext` | Cykl barwy |

## Uwaga — znane zastrzezenie v2.0.0

Klasy animacji w v2.0.0 ustawiaja tylko `animation-name`. Aby je odtworzyc, musisz obecnie samodzielnie dostarczyc `animation-duration`, `animation-iteration-count`, `animation-fill-mode` i `animation-timing-function` — dokladnie tak, jak pokazuje blok `<style>` na gorze tej strony. Przyszle wydanie bedzie zawierac sensowna domyslna konfiguracje, dzieki czemu `<div class="bounce">` zadziala od razu.

[Zobacz notatki o dostepnosci →](/pl/dostepnosc/)
