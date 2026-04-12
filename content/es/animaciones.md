---
title: "Animaciones"
name: "Skeletonic Stylus"
description: "Modulo de animaciones opcional incluido en Skeletonic Stylus v1.1.7 — bounce, pulse, fade, zoom, shake y mas, todo protegido tras prefers-reduced-motion."
layout: page
permalink: https://skeletonic.io/es/animaciones/
date: 2026-04-08
author: Sebastien Rousseau
language: es
theme_color: "hsl(210, 100%, 42%)"
keywords: "animaciones css, keyframes, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

El **modulo de animaciones** se distribuye como un archivo separado
opcional para que la hoja de estilos principal se mantenga por debajo
de 8&nbsp;KB gzipped.

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

Cada clase de animacion esta envuelta en un bloque
**`@media (prefers-reduced-motion: no-preference)`** en v1.1.7, lo que
significa que un usuario que haya activado "reducir movimiento" a nivel
del sistema operativo no vera ninguna animacion — el layout sigue
funcionando, el movimiento simplemente se suprime.

<style>
  /*
   * Estilos de demo locales de la pagina. Las clases de animacion incluidas
   * en skeletonic-animations.min.css solo establecen animation-name, por lo
   * que la demo proporciona las propiedades faltantes aqui para que los
   * keyframes sean visibles.
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

<hr class="hr-text" data-content="Demos">

## Demos

Pulsa **Reproducir** en cualquier tarjeta para repetir la animacion en el
cuadrado. Las clases de animacion son exactamente las que se incluyen en
`skeletonic-animations.min.css` — solo `animation-name` es establecido por
la biblioteca, por lo que el bloque `<style>` superior anade las propiedades
faltantes `animation-duration` / `animation-iteration-count` /
`animation-fill-mode` para hacer visibles los keyframes.

<p class="anim-note-rm">
  La opcion Reducir Movimiento esta activada en tu sistema operativo, por lo
  que los objetivos a continuacion permaneceran estaticos — ese es el
  comportamiento de accesibilidad de v1.1.7 funcionando correctamente.
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">Reproducir</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">Reproducir</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">Reproducir</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">Reproducir</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">Reproducir</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">Reproducir</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">Reproducir</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">Reproducir</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">Reproducir</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">Reproducir</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">Reproducir</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">Reproducir</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">Reproducir</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">Reproducir</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">Reproducir</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">Reproducir</button>
  </div>

</div>

<script>
  // Las clases de animacion incluidas en v1.1.7 establecen animation-name
  // en el selector. Para repetir el keyframe hay que eliminar la clase,
  // forzar un reflujo del layout, y volver a anadir la clase.
  function replayAnim(btn, name){
    var target = btn.closest('.anim-card').querySelector('.anim-target');
    if (!target) return;
    target.className = 'anim-target';
    void target.offsetWidth;
    target.classList.add(name);
  }
  // Reproduccion automatica una vez en la primera carga para que el
  // visitante vea algo en movimiento sin hacer clic — pero solo si el
  // movimiento esta permitido.
  if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.anim-target').forEach(function(t){
        var n = t.getAttribute('data-anim');
        if (n) setTimeout(function(){ t.classList.add(n); }, 200);
      });
    });
  }
</script>

<hr class="hr-text" data-content="Lista de clases">

## Referencia de clases

| Clase | Que hace |
|---|---|
| `.bounce` | Rebote vertical |
| `.pulse` | Pulso suave de escala |
| `.shake` | Sacudida horizontal |
| `.wobble` | Inclinacion y recuperacion |
| `.flash` | Parpadeo de opacidad en dos pasos |
| `.heartbeat` | Latido de doble escala |
| `.jelly` | Compresion y estiramiento |
| `.rubberBand` | Estiramiento elastico |
| `.fadeIn` / `.fadeOut` | Transicion de opacidad |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | Fade direccional |
| `.zoomIn` / `.zoomOut` | Escala hacia / desde la vista |
| `.popIn` / `.popOut` | Escala con resorte + fade |
| `.rollIn` / `.rollOut` | Translacion + rotacion |
| `.flipInHorizontal` / `.flipInVertical` | Volteo 3-D |
| `.vanishIn` / `.vanishOut` | Aparicion estilo Material |
| `.chameleonbackground` / `.chameleontext` | Ciclo de tono |

## Aviso — limitacion conocida en v1.1.7

Las clases de animacion en v1.1.7 solo establecen `animation-name`. Para
reproducirlas actualmente debes proporcionar tus propias propiedades
`animation-duration`, `animation-iteration-count`, `animation-fill-mode` y
`animation-timing-function` — exactamente como demuestra el bloque `<style>`
en la parte superior de esta pagina. Una version futura incluira una
configuracion base predeterminada para que `<div class="bounce">` funcione
directamente.

[Ver notas de accesibilidad →](/es/accesibilidad/)
