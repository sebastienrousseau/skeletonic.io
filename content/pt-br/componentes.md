---
title: "Componentes"
name: "Skeletonic Stylus"
description: "Exemplos HTML ao vivo de cada componente do Skeletonic Stylus, agrupados, ancorados e renderizados com a propria folha de estilos demonstrada."
layout: page
permalink: https://skeletonic.io/pt-br/componentes/
date: 2026-04-08
author: Sebastien Rousseau
language: pt-br
theme_color: "hsl(210, 100%, 42%)"
keywords: "componentes skeletonic, botoes, cards, formularios, alertas, badges, header, navbar, hamburger css"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

Cada exemplo abaixo e **renderizado com a propria folha de estilos
demonstrada**. Sem preprocessador. Sem JavaScript. Sem dependencias
extras. Copie qualquer trecho em um arquivo HTML novo e funciona.

<nav aria-label="Nesta pagina">
<p><strong>Nesta pagina</strong></p>
<ul>
<li><strong>Entradas</strong> — <a href="#buttons">Botoes</a> · <a href="#badges">Badges</a></li>
<li><strong>Feedback</strong> — <a href="#alerts">Alertas</a></li>
<li><strong>Superficie</strong> — <a href="#cards">Cards</a></li>
<li><strong>Formularios</strong> — <a href="#form-fields">Campos de formulario</a></li>
<li><strong>Layout</strong> — <a href="#grid">Grid</a> · <a href="#header">Header &amp; navegacao hamburger</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="Entradas">

<h2 id="inputs">Entradas</h2>

Elementos interativos que o visitante clica, toca ou foca para conduzir
a pagina.

<h3 id="buttons">Botoes</h3>

Um gatilho de acao semantico e personalizavel. As variantes solidas e
outline incluem seis cores de marca cada.

```html
<a href="#" class="button primary">Primary</a>
<a href="#" class="button secondary">Secondary</a>
<a href="#" class="button tertiary">Tertiary</a>
```

<section aria-labelledby="buttons">
<p>
  <a href="#" class="button primary">Primary</a>
  <a href="#" class="button secondary">Secondary</a>
  <a href="#" class="button tertiary">Tertiary</a>
</p>
</section>

Variantes outline:

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">Outline</a>
  <a href="#" class="button secondary-outline">Outline</a>
</p>

> **Nota de acessibilidade.** Cada variante `.button` inclui um anel
> `:focus-visible` e uma **area de toque minima de 44x44&nbsp;px**
> (WCAG&nbsp;2.2 SC&nbsp;2.5.8). Use `<button type="button">` para
> acoes na pagina e `<a href>` apenas para navegacao.

<h3 id="badges">Badges</h3>

Um rotulo compacto para status, contagem ou categoria. O tamanho do
texto e fixo para que os badges se alinhem com o texto ao redor.

```html
<span class="badge">Default</span>
<span class="badge primary">Primary</span>
<span class="badge success">Success</span>
<span class="badge warning">Warning</span>
<span class="badge danger">Danger</span>
```

<section aria-labelledby="badges">
<p>
  <span class="badge">Default</span>
  <span class="badge primary">Primary</span>
  <span class="badge success">Success</span>
  <span class="badge warning">Warning</span>
  <span class="badge danger">Danger</span>
</p>
</section>

> **Nota de acessibilidade.** Badges sao decorativos por padrao. Quando
> o badge carrega o unico sinal (ex.: contagem de nao lidos), envolva-o
> em um helper visualmente oculto: `<span class="visually-hidden">3
> mensagens nao lidas</span>`.

<hr class="hr-text" data-content="Feedback">

<h2 id="feedback">Feedback</h2>

Superficies que informam ao visitante que algo aconteceu — ou esta
prestes a acontecer.

<h3 id="alerts">Alertas</h3>

Mensagens de status com intencao semantica. **Na v2.0.0, cada variante
tem namespace explicito** sob `.alert-{primary,secondary,info,success,warning,error}`
para que a classe de variante nao colida com classes de estado em outro
lugar da pagina.

```html
<div class="alert alert-primary" role="alert">
  <strong>Atencao.</strong> Este e um alerta primario.
</div>
<div class="alert alert-success" role="status">
  <strong>Salvo.</strong> Suas alteracoes foram persistidas.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Cuidado.</strong> Esta acao afeta o estado compartilhado.
</div>
<div class="alert alert-error" role="alert">
  <strong>Erro.</strong> Nao foi possivel salvar o formulario.
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>Atencao.</strong> Este e um alerta primario.
</div>

<div class="alert alert-success" role="status">
<strong>Salvo.</strong> Suas alteracoes foram persistidas.
</div>

<div class="alert alert-warning" role="alert">
<strong>Cuidado.</strong> Esta acao afeta o estado compartilhado.
</div>

<div class="alert alert-error" role="alert">
<strong>Erro.</strong> Nao foi possivel salvar o formulario.
</div>
</section>

> **Nota de acessibilidade.** Use `role="alert"` para mensagens que
> exigem atencao imediata (erros, avisos) e `role="status"` para
> confirmacoes nao urgentes. Ambos expoem a mensagem para tecnologia
> assistiva no momento em que aparece.

<hr class="hr-text" data-content="Superficie">

<h2 id="surface">Superficie</h2>

Conteineres que enquadram e agrupam conteudo relacionado.

<h3 id="cards">Cards</h3>

Um conteiner com borda e preenchimento para uma unica unidade coerente.
Combine com o grid `flex-N` para paredes de cards responsivas.

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Lightweight</h3>
      <p>40.6 KB minified, 8.0 KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Accessible</h3>
      <p>WCAG 2.2 conformant out of the box.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modular</h3>
      <p>Cascade-layered for easy overrides.</p>
    </div>
  </article>
</section>
```

<section class="row" aria-labelledby="cards">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Leve</h3>
      <p>45,7&nbsp;KB minificado, 8,3&nbsp;KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Acessivel</h3>
      <p>WCAG&nbsp;2.2 em conformidade desde a instalacao.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modular</h3>
      <p>Cascade-layered para sobrescrita facil.</p>
    </div>
  </article>
</section>

> **Nota de acessibilidade.** Envolva cada card em um marco semantico
> (`<article>`, `<section>`) e inicie seu conteudo com um titulo
> (`<h3>`). Usuarios de leitores de tela podem entao navegar pela
> lista de cards como regioes navegaveis de primeira classe.

<hr class="hr-text" data-content="Formularios">

<h2 id="forms">Formularios</h2>

Entradas, rotulos e agrupamentos para coletar dados do usuario.

<h3 id="form-fields">Campos de formulario</h3>

Labels, inputs de texto, textareas, fieldsets e legends — todos
dimensionados de forma consistente com o restante do design system.

```html
<form>
  <label for="name">Name</label>
  <input id="name" type="text" required>

  <label for="email">Email</label>
  <input id="email" type="email" required class="input-primary">

  <label for="msg">Message</label>
  <textarea id="msg" rows="4"></textarea>

  <button type="submit" class="button primary">Send</button>
</form>
```

<section aria-labelledby="form-fields">
<form>
  <label for="demo-name">Nome</label>
  <input id="demo-name" type="text">

  <label for="demo-email">Email</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">Mensagem</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">Enviar (demo)</button></p>
</form>
</section>

> **Nota de acessibilidade.** Cada input deve ter um `<label for="…">`
> associado programaticamente. Agrupe controles relacionados dentro de
> um `<fieldset>` com um `<legend>`. Marque campos obrigatorios com
> `required` (e um asterisco visivel no texto do label).

<hr class="hr-text" data-content="Layout">

<h2 id="layout">Layout</h2>

Primitivas estruturais — grid, container, header — que enquadram toda
a pagina.

<h3 id="grid">Grid</h3>

Um grid responsivo `flex-N` (1 → 12 colunas) construido sobre flexbox.
O pai `.row` adiciona gaps e wraps automaticamente.

```html
<div class="row">
  <div class="flex-6">Half</div>
  <div class="flex-6">Half</div>
</div>
<div class="row">
  <div class="flex-4">Third</div>
  <div class="flex-4">Third</div>
  <div class="flex-4">Third</div>
</div>
```

<section aria-labelledby="grid">
<div style="display:flex;flex-wrap:wrap;gap:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Metade</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Metade</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Terco</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Terco</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Terco</div>
</div>
</section>

> **Nota de acessibilidade.** A ordem visual deve corresponder a ordem
> do DOM. Evite reordenar linhas com `flex-direction: row-reverse` ou
> `order:` — leitores de tela e usuarios de teclado seguem o codigo-fonte,
> nao a renderizacao.

<h3 id="header">Header &amp; navegacao hamburger</h3>

Um header completo apenas com CSS e um toggle hamburger responsivo.
**Zero JavaScript.** Copie o trecho abaixo em uma pagina HTML que ja
carrega `skeletonic.min.css` e o menu colapsa, expande e prende o
foco corretamente por conta propria.

```html
<style>
  .sk-header{position:relative;display:flex;align-items:center;gap:1rem;padding:.75rem 1rem;border:1px solid #e4e4e7;border-radius:.5rem;background:#fff;}
  .sk-header .sk-brand{font-weight:600;color:#0a0a0a;text-decoration:none;}
  .sk-header .sk-toggle{position:absolute;left:-9999px;}
  .sk-header .sk-burger{display:none;margin-left:auto;cursor:pointer;padding:.625rem .75rem;border:1px solid #e4e4e7;border-radius:.375rem;font-size:1.125rem;line-height:1;min-width:2.75rem;min-height:2.75rem;}
  .sk-header .sk-burger:focus-within,.sk-header .sk-toggle:focus-visible+.sk-burger{outline:2px solid hsl(210,100%,42%);outline-offset:2px;}
  .sk-header .sk-menu{list-style:none;display:flex;gap:.25rem;margin:0 0 0 auto;padding:0;}
  .sk-header .sk-menu a{display:inline-flex;align-items:center;min-height:2.75rem;padding:.5rem .875rem;border-radius:.375rem;color:#1a1a1a;text-decoration:none;}
  .sk-header .sk-menu a:hover{background:#f4f4f5;}
  @media (max-width:640px){
    .sk-header .sk-burger{display:inline-flex;align-items:center;justify-content:center;}
    .sk-header .sk-menu{display:none;flex-direction:column;gap:0;position:absolute;top:calc(100% + .25rem);left:0;right:0;background:#fff;border:1px solid #e4e4e7;border-radius:.5rem;padding:.375rem;box-shadow:0 4px 24px rgba(0,0,0,.08);z-index:10;}
    .sk-header .sk-menu a{padding:.75rem 1rem;border-bottom:1px solid #f4f4f5;}
    .sk-header .sk-menu li:last-child a{border-bottom:0;}
    .sk-header .sk-toggle:checked ~ .sk-menu{display:flex;}
  }
</style>
<header class="sk-header">
  <a class="sk-brand" href="#">Brand</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Toggle navigation">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Docs</a></li>
    <li><a href="#">Components</a></li>
    <li><a href="#">About</a></li>
  </ul>
</header>
```

<section aria-labelledby="header">
<style>
  .sk-header{position:relative;display:flex;align-items:center;gap:1rem;padding:.75rem 1rem;border:1px solid #e4e4e7;border-radius:.5rem;background:#fff;}
  .sk-header .sk-brand{font-weight:600;color:#0a0a0a;text-decoration:none;}
  .sk-header .sk-toggle{position:absolute;left:-9999px;}
  .sk-header .sk-burger{display:none;margin-left:auto;cursor:pointer;padding:.625rem .75rem;border:1px solid #e4e4e7;border-radius:.375rem;font-size:1.125rem;line-height:1;min-width:2.75rem;min-height:2.75rem;}
  .sk-header .sk-burger:focus-within,.sk-header .sk-toggle:focus-visible+.sk-burger{outline:2px solid hsl(210,100%,42%);outline-offset:2px;}
  .sk-header .sk-menu{list-style:none;display:flex;gap:.25rem;margin:0 0 0 auto;padding:0;}
  .sk-header .sk-menu a{display:inline-flex;align-items:center;min-height:2.75rem;padding:.5rem .875rem;border-radius:.375rem;color:#1a1a1a;text-decoration:none;}
  .sk-header .sk-menu a:hover{background:#f4f4f5;}
  @media (max-width:640px){
    .sk-header .sk-burger{display:inline-flex;align-items:center;justify-content:center;}
    .sk-header .sk-menu{display:none;flex-direction:column;gap:0;position:absolute;top:calc(100% + .25rem);left:0;right:0;background:#fff;border:1px solid #e4e4e7;border-radius:.5rem;padding:.375rem;box-shadow:0 4px 24px rgba(0,0,0,.08);z-index:10;}
    .sk-header .sk-menu a{padding:.75rem 1rem;border-bottom:1px solid #f4f4f5;}
    .sk-header .sk-menu li:last-child a{border-bottom:0;}
    .sk-header .sk-toggle:checked ~ .sk-menu{display:flex;}
  }
</style>
<header class="sk-header">
  <a class="sk-brand" href="#">Brand</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Toggle navigation">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Docs</a></li>
    <li><a href="#">Componentes</a></li>
    <li><a href="#">Sobre</a></li>
  </ul>
</header>
</section>

> **Nota de acessibilidade.** O checkbox oculto permanece na ordem de
> tabulacao para que usuarios de teclado possam abrir o menu com
> `Space` ou `Enter`. O `<label>` possui `aria-hidden` porque o
> checkbox em si e a fonte do nome acessivel. Redimensione a janela
> abaixo de 640&nbsp;px para ver o toggle hamburger assumir o controle.

[Ver notas de a11y →](/pt-br/acessibilidade/) · [Explorar paletas →](/pt-br/paletas/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Componentes do Skeletonic Stylus",
  "description": "Cada componente incluido no Skeletonic Stylus v2.0.0.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Botoes",
      "url": "https://skeletonic.io/pt-br/componentes/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Badges",
      "url": "https://skeletonic.io/pt-br/componentes/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Alertas",
      "url": "https://skeletonic.io/pt-br/componentes/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Cards",
      "url": "https://skeletonic.io/pt-br/componentes/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Campos de formulario",
      "url": "https://skeletonic.io/pt-br/componentes/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Grid",
      "url": "https://skeletonic.io/pt-br/componentes/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Header & navegacao hamburger",
      "url": "https://skeletonic.io/pt-br/componentes/#header"
    }
  ]
}
</script>
