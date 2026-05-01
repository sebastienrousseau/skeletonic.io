---
title: "Componenti"
name: "Skeletonic Stylus"
description: "Esempi HTML dal vivo di ogni componente Skeletonic Stylus, raggruppati, ancorati e renderizzati con lo stesso foglio di stile in dimostrazione."
layout: page
permalink: https://skeletonic.io/it/componenti/
date: 2026-04-08
author: Sebastien Rousseau
language: it
theme_color: "hsl(210, 100%, 42%)"
keywords: "componenti skeletonic, pulsanti, card, form, alert, badge, header, navbar, hamburger solo css"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

Ogni esempio qui sotto e **renderizzato con lo stesso foglio di stile in dimostrazione**. Nessun preprocessore. Nessun JavaScript. Nessuna dipendenza aggiuntiva. Copia qualsiasi snippet in un file HTML vuoto e funziona.

<nav aria-label="In questa pagina">
<p><strong>In questa pagina</strong></p>
<ul>
<li><strong>Input</strong> — <a href="#buttons">Pulsanti</a> · <a href="#badges">Badge</a></li>
<li><strong>Feedback</strong> — <a href="#alerts">Alert</a></li>
<li><strong>Superficie</strong> — <a href="#cards">Card</a></li>
<li><strong>Form</strong> — <a href="#form-fields">Campi del form</a></li>
<li><strong>Layout</strong> — <a href="#grid">Griglia</a> · <a href="#header">Header &amp; hamburger nav</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="Input">

<h2 id="inputs">Input</h2>

Elementi interattivi su cui il visitatore fa clic, tocca o mette a fuoco per interagire con la pagina.

<h3 id="buttons">Pulsanti</h3>

Un trigger di azione semantico e personalizzabile. Le varianti solide e outline includono sei colori brand ciascuna.

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

Varianti outline:

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">Outline</a>
  <a href="#" class="button secondary-outline">Outline</a>
</p>

> **Nota sull'accessibilita.** Ogni variante `.button` include un
> anello `:focus-visible` e un'**area di tocco minima di 44x44&nbsp;px**
> (WCAG&nbsp;2.2 SC&nbsp;2.5.8). Usa `<button type="button">` per
> azioni nella pagina e `<a href>` solo per la navigazione.

<h3 id="badges">Badge</h3>

Un'etichetta compatta per stato, conteggio o categoria. La dimensione del testo e fissa cosi i badge si allineano con il testo circostante.

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

> **Nota sull'accessibilita.** I badge sono decorativi per impostazione
> predefinita. Quando il badge porta l'unico segnale (ad es. un conteggio
> di messaggi non letti), avvolgilo in un helper nascosto visivamente:
> `<span class="visually-hidden">3 messaggi non letti</span>`.

<hr class="hr-text" data-content="Feedback">

<h2 id="feedback">Feedback</h2>

Superfici che informano il visitatore che qualcosa e successo — o sta per succedere.

<h3 id="alerts">Alert</h3>

Messaggi di stato con intento semantico. **Nella v2.0.0 ogni variante e esplicitamente sotto namespace** `.alert-{primary,secondary,info,success,warning,error}` cosi la classe della variante non puo collidere con classi di stato altrove nella pagina.

```html
<div class="alert alert-primary" role="alert">
  <strong>Attenzione.</strong> Questo e un alert primario.
</div>
<div class="alert alert-success" role="status">
  <strong>Salvato.</strong> Le tue modifiche sono state salvate.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Cautela.</strong> Questa azione influisce sullo stato condiviso.
</div>
<div class="alert alert-error" role="alert">
  <strong>Errore.</strong> Impossibile salvare il form.
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>Attenzione.</strong> Questo e un alert primario.
</div>

<div class="alert alert-success" role="status">
<strong>Salvato.</strong> Le tue modifiche sono state salvate.
</div>

<div class="alert alert-warning" role="alert">
<strong>Cautela.</strong> Questa azione influisce sullo stato condiviso.
</div>

<div class="alert alert-error" role="alert">
<strong>Errore.</strong> Impossibile salvare il form.
</div>
</section>

> **Nota sull'accessibilita.** Usa `role="alert"` per messaggi che richiedono
> attenzione immediata (errori, avvisi) e `role="status"` per
> conferme non urgenti. Entrambi espongono il messaggio alle tecnologie
> assistive nel momento in cui appare.

<hr class="hr-text" data-content="Superficie">

<h2 id="surface">Superficie</h2>

Contenitori che incorniciano e raggruppano contenuti correlati.

<h3 id="cards">Card</h3>

Un contenitore con bordo e padding per una singola unita coerente. Abbina con la griglia `flex-N` per creare pareti di card responsive.

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Leggero</h3>
      <p>45,7 KB minificati, 8,3 KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Accessibile</h3>
      <p>Conforme WCAG 2.2 fin da subito.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modulare</h3>
      <p>Cascade-layered per sovrascritture semplici.</p>
    </div>
  </article>
</section>
```

<section class="row" aria-labelledby="cards">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Leggero</h3>
      <p>45,7&nbsp;KB minificati, 8,3&nbsp;KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Accessibile</h3>
      <p>WCAG&nbsp;2.2 conforme fin da subito.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modulare</h3>
      <p>Cascade-layered per sovrascritture semplici.</p>
    </div>
  </article>
</section>

> **Nota sull'accessibilita.** Avvolgi ogni card in un landmark semantico
> (`<article>`, `<section>`) e inizia il suo contenuto con un titolo
> (`<h3>`). Gli utenti di screen reader possono cosi navigare l'elenco
> delle card come regioni di primo livello.

<hr class="hr-text" data-content="Form">

<h2 id="forms">Form</h2>

Input, label e raggruppamenti per raccogliere dati dall'utente.

<h3 id="form-fields">Campi del form</h3>

Label, input di testo, textarea, fieldset e legend — tutti dimensionati in modo coerente con il resto del design system.

```html
<form>
  <label for="name">Nome</label>
  <input id="name" type="text" required>

  <label for="email">Email</label>
  <input id="email" type="email" required class="input-primary">

  <label for="msg">Messaggio</label>
  <textarea id="msg" rows="4"></textarea>

  <button type="submit" class="button primary">Invia</button>
</form>
```

<section aria-labelledby="form-fields">
<form>
  <label for="demo-name">Nome</label>
  <input id="demo-name" type="text">

  <label for="demo-email">Email</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">Messaggio</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">Invia (demo)</button></p>
</form>
</section>

> **Nota sull'accessibilita.** Ogni input deve avere un
> `<label for="...">` associato programmaticamente. Raggruppa i controlli
> correlati all'interno di un `<fieldset>` con una `<legend>`. Contrassegna
> i campi obbligatori con `required` (e un asterisco visibile nel testo
> della label).

<hr class="hr-text" data-content="Layout">

<h2 id="layout">Layout</h2>

Primitive strutturali — griglia, container, header — che incorniciano l'intera pagina.

<h3 id="grid">Griglia</h3>

Una griglia responsive `flex-N` (da 1 a 12 colonne) basata su flexbox. Il genitore `.row` gestisce automaticamente gap e wrapping.

```html
<div class="row">
  <div class="flex-6">Meta</div>
  <div class="flex-6">Meta</div>
</div>
<div class="row">
  <div class="flex-4">Terzo</div>
  <div class="flex-4">Terzo</div>
  <div class="flex-4">Terzo</div>
</div>
```

<section aria-labelledby="grid">
<div style="display:flex;flex-wrap:wrap;gap:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Meta</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Meta</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Terzo</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Terzo</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Terzo</div>
</div>
</section>

> **Nota sull'accessibilita.** L'ordine visivo deve corrispondere all'ordine
> del DOM. Evita di riordinare le righe con `flex-direction: row-reverse` o
> `order:` — screen reader e utenti da tastiera seguono il sorgente, non la
> visualizzazione.

<h3 id="header">Header &amp; hamburger nav</h3>

Un header completo solo CSS con toggle hamburger responsive. **Zero JavaScript.** Copia lo snippet qui sotto in una pagina HTML che gia carica `skeletonic.min.css` e il menu si comprime, si espande e gestisce il focus correttamente da solo.

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
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Attiva/disattiva navigazione">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Documentazione</a></li>
    <li><a href="#">Componenti</a></li>
    <li><a href="#">Informazioni</a></li>
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
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Attiva/disattiva navigazione">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Documentazione</a></li>
    <li><a href="#">Componenti</a></li>
    <li><a href="#">Informazioni</a></li>
  </ul>
</header>
</section>

> **Nota sull'accessibilita.** La checkbox nascosta resta nell'ordine di
> tabulazione cosi gli utenti da tastiera possono aprire il menu con
> `Spazio` o `Invio`. Il `<label>` porta `aria-hidden` perche la checkbox
> stessa e la fonte del nome accessibile. Ridimensiona la finestra sotto
> i 640&nbsp;px per vedere il toggle hamburger prendere il controllo.

[Vedi le note complete sull'a11y →](/it/accessibilita/) · [Esplora le palette →](/it/palette/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Componenti Skeletonic Stylus",
  "description": "Ogni componente incluso in Skeletonic Stylus v2.0.0.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Pulsanti",
      "url": "https://skeletonic.io/it/componenti/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Badge",
      "url": "https://skeletonic.io/it/componenti/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Alert",
      "url": "https://skeletonic.io/it/componenti/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Card",
      "url": "https://skeletonic.io/it/componenti/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Campi del form",
      "url": "https://skeletonic.io/it/componenti/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Griglia",
      "url": "https://skeletonic.io/it/componenti/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Header e hamburger nav",
      "url": "https://skeletonic.io/it/componenti/#header"
    }
  ]
}
</script>
