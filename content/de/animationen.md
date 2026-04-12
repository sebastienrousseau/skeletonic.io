---
title: "Animationen"
name: "Skeletonic Stylus"
description: "Optionales Animationsmodul in Skeletonic Stylus v1.1.7 — bounce, pulse, fade, zoom, shake und mehr, alles hinter prefers-reduced-motion."
layout: page
language: de
permalink: https://skeletonic.io/de/animationen/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "css animations, keyframes, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

Das **Animationsmodul** wird als separate, optionale Datei ausgeliefert,
damit das Kern-Stylesheet unter 8&nbsp;KB gzipped bleibt.

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

Jede Animationsklasse ist in v1.1.7 in einen
**`@media (prefers-reduced-motion: no-preference)`**-Block eingebettet.
Das bedeutet: Hat ein Nutzer auf Betriebssystemebene „Bewegung
reduzieren" aktiviert, wird keine Animation abgespielt — das Layout
funktioniert weiterhin, nur die Bewegung wird unterdrückt.

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

Klicken Sie auf **Abspielen** bei einer beliebigen Karte, um die Animation
auf dem Kreis erneut abzuspielen. Die Animationsklassen selbst entsprechen
exakt dem, was in `skeletonic-animations.min.css` ausgeliefert wird — nur
`animation-name` wird von der Bibliothek gesetzt, sodass der obige
`<style>`-Block die fehlenden Eigenschaften `animation-duration` /
`animation-iteration-count` / `animation-fill-mode` ergänzt, damit die
Keyframes sichtbar werden.

<p class="anim-note-rm">
  „Bewegung reduzieren" ist in Ihrem Betriebssystem aktiviert — die
  Elemente unten bleiben daher still. Das ist das korrekte
  Barrierefreiheitsverhalten von v1.1.7.
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">Abspielen</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">Abspielen</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">Abspielen</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">Abspielen</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">Abspielen</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">Abspielen</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">Abspielen</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">Abspielen</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">Abspielen</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">Abspielen</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">Abspielen</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">Abspielen</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">Abspielen</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">Abspielen</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">Abspielen</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">Abspielen</button>
  </div>

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

<hr class="hr-text" data-content="Klassenreferenz">

## Klassenreferenz

| Klasse | Beschreibung |
|---|---|
| `.bounce` | Vertikaler Federeffekt |
| `.pulse` | Sanftes Skalierungspulsieren |
| `.shake` | Horizontales Schütteln |
| `.wobble` | Kippen und Zurückkehren |
| `.flash` | Zweistufiges Blinken der Deckkraft |
| `.heartbeat` | Doppelter Herzschlag-Skalierungseffekt |
| `.jelly` | Stauchen und Strecken |
| `.rubberBand` | Elastisches Dehnen |
| `.fadeIn` / `.fadeOut` | Deckkraftübergang |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | Richtungsabhängiges Einblenden |
| `.zoomIn` / `.zoomOut` | In die / aus der Ansicht skalieren |
| `.popIn` / `.popOut` | Federskalierung mit Einblenden |
| `.rollIn` / `.rollOut` | Verschieben und Drehen |
| `.flipInHorizontal` / `.flipInVertical` | 3-D-Drehung |
| `.vanishIn` / `.vanishOut` | Erscheinen im Material-Stil |
| `.chameleonbackground` / `.chameleontext` | Farbtonzyklus |

## Hinweis — bekannter Vorbehalt in v1.1.7

Die Animationsklassen in v1.1.7 setzen ausschließlich `animation-name`.
Um sie abzuspielen, müssen Sie derzeit selbst `animation-duration`,
`animation-iteration-count`, `animation-fill-mode` und
`animation-timing-function` angeben — genau wie der `<style>`-Block am
Anfang dieser Seite demonstriert. In einem zukünftigen Release wird ein
sinnvolles Standard-Basis-Setup integriert, sodass
`<div class="bounce">` direkt einsatzbereit ist.

[Hinweise zur Barrierefreiheit ansehen →](/de/barrierefreiheit/)
