---
title: "Animacoes"
name: "Skeletonic Stylus"
description: "Modulo de animacoes opcional incluido no Skeletonic Stylus v1.1.7 — bounce, pulse, fade, zoom, shake e outros, todos protegidos por prefers-reduced-motion."
layout: page
permalink: https://skeletonic.io/pt-br/animacoes/
date: 2026-04-08
author: Sebastien Rousseau
language: pt-br
theme_color: "hsl(210, 100%, 42%)"
keywords: "animacoes css, keyframes, prefers-reduced-motion, bounce, pulse, fade"
load_animations: true
---

O **modulo de animacoes** e distribuido como um arquivo opcional separado
para que a folha de estilos principal permaneca abaixo de 8&nbsp;KB
gzipped.

```html
<link
  rel="stylesheet"
  href="/css/skeletonic-animations.min.css">
```

Cada classe de animacao esta envolvida em um bloco
**`@media (prefers-reduced-motion: no-preference)`** na v1.1.7, o que
significa que um usuario que definiu "reduzir movimento" no nivel do SO
nao vera nenhuma animacao — o layout continua funcionando, o movimento e
apenas suprimido.

<style>
  /*
   * Estilos de demonstracao locais da pagina. As classes de animacao
   * incluidas em skeletonic-animations.min.css definem apenas
   * animation-name, entao a demo fornece as propriedades faltantes
   * duration / iteration-count / fill-mode aqui para que os keyframes
   * fiquem visiveis. Cada alvo da demo e um disco de cor solida para
   * que o movimento seja evidente contra o fundo da pagina.
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

<hr class="hr-text" data-content="Demonstracoes">

## Demonstracoes

Pressione **Reproduzir** em qualquer card para repetir a animacao no
quadrado. As classes de animacao sao exatamente as que sao incluidas em
`skeletonic-animations.min.css` — apenas `animation-name` e definido
pela biblioteca, entao o bloco `<style>` acima adiciona as propriedades
faltantes `animation-duration` / `animation-iteration-count` /
`animation-fill-mode` para tornar os keyframes visiveis.

<p class="anim-note-rm">
  O Reduzir Movimento esta ativado no seu SO, entao os alvos abaixo
  permanecerao parados — esse e o comportamento de acessibilidade da
  v1.1.7 funcionando corretamente.
</p>

<div class="anim-grid">

  <div class="anim-card">
    <h3>bounce</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="bounce"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'bounce')">Reproduzir</button>
  </div>

  <div class="anim-card">
    <h3>pulse</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="pulse"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'pulse')">Reproduzir</button>
  </div>

  <div class="anim-card">
    <h3>shake</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="shake"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'shake')">Reproduzir</button>
  </div>

  <div class="anim-card">
    <h3>wobble</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="wobble"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'wobble')">Reproduzir</button>
  </div>

  <div class="anim-card">
    <h3>flash</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flash"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'flash')">Reproduzir</button>
  </div>

  <div class="anim-card">
    <h3>heartbeat</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="heartbeat"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'heartbeat')">Reproduzir</button>
  </div>

  <div class="anim-card">
    <h3>jelly</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="jelly"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'jelly')">Reproduzir</button>
  </div>

  <div class="anim-card">
    <h3>rubberBand</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rubberBand"></span>
    </div>
    <button type="button" class="button primary" onclick="replayAnim(this,'rubberBand')">Reproduzir</button>
  </div>

  <div class="anim-card">
    <h3>fadeIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeIn')">Reproduzir</button>
  </div>

  <div class="anim-card">
    <h3>fadeInDown</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInDown"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInDown')">Reproduzir</button>
  </div>

  <div class="anim-card">
    <h3>fadeInUp</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="fadeInUp"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'fadeInUp')">Reproduzir</button>
  </div>

  <div class="anim-card">
    <h3>popIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="popIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'popIn')">Reproduzir</button>
  </div>

  <div class="anim-card">
    <h3>rollIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="rollIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'rollIn')">Reproduzir</button>
  </div>

  <div class="anim-card">
    <h3>flipInHorizontal</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="flipInHorizontal"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'flipInHorizontal')">Reproduzir</button>
  </div>

  <div class="anim-card">
    <h3>zoomIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="zoomIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'zoomIn')">Reproduzir</button>
  </div>

  <div class="anim-card">
    <h3>vanishIn</h3>
    <div class="anim-stage">
      <span class="anim-target" data-anim="vanishIn"></span>
    </div>
    <button type="button" class="button secondary" onclick="replayAnim(this,'vanishIn')">Reproduzir</button>
  </div>

</div>

<script>
  // As classes de animacao incluidas na v1.1.7 definem animation-name no
  // proprio seletor. Para reproduzir o keyframe, precisamos remover a
  // classe, forcar um layout flush e entao adicionar a classe novamente.
  function replayAnim(btn, name){
    var target = btn.closest('.anim-card').querySelector('.anim-target');
    if (!target) return;
    target.className = 'anim-target';
    void target.offsetWidth;
    target.classList.add(name);
  }
  // Reproduz automaticamente uma vez no primeiro paint para que o
  // visitante veja algo acontecer sem clicar — mas apenas se o
  // movimento for permitido.
  if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.anim-target').forEach(function(t){
        var n = t.getAttribute('data-anim');
        if (n) setTimeout(function(){ t.classList.add(n); }, 200);
      });
    });
  }
</script>

<hr class="hr-text" data-content="Lista de classes">

## Referencia de classes

| Classe | O que faz |
|---|---|
| `.bounce` | Salto vertical com mola |
| `.pulse` | Pulso suave de escala |
| `.shake` | Sacudida horizontal |
| `.wobble` | Inclinacao e recuperacao |
| `.flash` | Piscar de opacidade em dois passos |
| `.heartbeat` | Escala com batida dupla |
| `.jelly` | Comprimir e esticar |
| `.rubberBand` | Esticar elastico |
| `.fadeIn` / `.fadeOut` | Transicao de opacidade |
| `.fadeInDown` / `.fadeInUp` / `.fadeInLeft` / `.fadeInRight` | Fade direcional |
| `.zoomIn` / `.zoomOut` | Escala para dentro / fora da visualizacao |
| `.popIn` / `.popOut` | Escala com mola + fade |
| `.rollIn` / `.rollOut` | Translate + rotacao |
| `.flipInHorizontal` / `.flipInVertical` | Giro 3D |
| `.vanishIn` / `.vanishOut` | Aparecimento estilo Material |
| `.chameleonbackground` / `.chameleontext` | Ciclo de matiz |

## Atencao — ressalva conhecida da v1.1.7

As classes de animacao na v1.1.7 definem apenas `animation-name`. Para
reproduzi-las, voce precisa fornecer seus proprios `animation-duration`,
`animation-iteration-count`, `animation-fill-mode` e
`animation-timing-function` — exatamente como o bloco `<style>` no
topo desta pagina demonstra. Um release futuro incluira uma configuracao
base padrao para que `<div class="bounce">` funcione direto.

[Ver notas de acessibilidade →](/pt-br/acessibilidade/)
