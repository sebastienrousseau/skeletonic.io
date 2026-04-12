---
title: "Animations"
name: "Skeletonic Stylus"
description: "Module d'animations optionnel livré avec Skeletonic Stylus v1.1.7 — rebond, pulsation, fondu, zoom, secousse et autres, tous protégés par prefers-reduced-motion."
layout: page
permalink: https://skeletonic.io/fr/animations/
date: 2026-04-08
author: Sebastien Rousseau
language: fr
theme_color: "hsl(210, 100%, 42%)"
keywords: "animations css, keyframes, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

Le **module d'animations** est livré dans un fichier optionnel séparé
afin que la feuille de style principale reste sous 8 Ko gzippé.

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

Chaque classe d'animation est encapsulée dans un bloc
**`@media (prefers-reduced-motion: no-preference)`** dans la v1.1.7,
ce qui signifie qu'un utilisateur ayant activé « réduire les animations »
au niveau du système d'exploitation ne verra aucune animation — la mise
en page fonctionne toujours, seul le mouvement est supprimé.

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

<hr class="hr-text" data-content="Démos">

## Démonstrations

Appuyez sur **Jouer** sur n'importe quelle carte pour relancer
l'animation sur le disque. Les classes d'animation sont exactement
celles livrées dans `skeletonic-animations.min.css` — seul
`animation-name` est défini par la bibliothèque, le bloc `<style>`
ci-dessus ajoute les propriétés manquantes (`animation-duration` /
`animation-iteration-count` / `animation-fill-mode`) pour rendre les
keyframes visibles.

<p class="anim-note-rm">
  L'option Réduire les animations est activée sur votre système — les
  cibles ci-dessous resteront immobiles. C'est le comportement
  d'accessibilité v1.1.7 qui fonctionne correctement.
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">Jouer</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">Jouer</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">Jouer</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">Jouer</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">Jouer</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">Jouer</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">Jouer</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">Jouer</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">Jouer</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">Jouer</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">Jouer</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">Jouer</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">Jouer</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">Jouer</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">Jouer</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">Jouer</button>
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

<hr class="hr-text" data-content="Liste des classes">

## Référence des classes

| Classe | Effet |
|---|---|
| `.bounce` | Ressaut vertical |
| `.pulse` | Pulsation de mise à l'échelle |
| `.shake` | Secousse horizontale |
| `.wobble` | Inclinaison et récupération |
| `.flash` | Clignotement d'opacité |
| `.heartbeat` | Double pulsation |
| `.jelly` | Écrasement et étirement |
| `.rubberBand` | Étirement élastique |
| `.fadeIn` / `.fadeOut` | Transition d'opacité |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | Fondu directionnel |
| `.zoomIn` / `.zoomOut` | Mise à l'échelle entrante / sortante |
| `.popIn` / `.popOut` | Échelle en ressort + fondu |
| `.rollIn` / `.rollOut` | Translation + rotation |
| `.flipInHorizontal` / `.flipInVertical` | Retournement 3D |
| `.vanishIn` / `.vanishOut` | Apparition style Material |
| `.chameleonbackground` / `.chameleontext` | Cycle de teinte |

## Avertissement — limitation connue v1.1.7

Les classes d'animation de la v1.1.7 ne définissent que
`animation-name`. Pour les lancer, vous devez actuellement fournir vos
propres `animation-duration`, `animation-iteration-count`,
`animation-fill-mode` et `animation-timing-function` — exactement comme
le bloc `<style>` en haut de cette page le montre. Une version future
intégrera une configuration de base par défaut pour que
`<div class="bounce">` fonctionne immédiatement.

[Voir les notes d'accessibilité →](/fr/accessibilite/)
