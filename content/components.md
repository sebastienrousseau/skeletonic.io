---
title: "Components"
name: "Skeletonic Stylus"
description: "Live HTML examples of every Skeletonic Stylus component, grouped, anchored, and rendered with the very stylesheet being demoed."
layout: page
permalink: https://skeletonic.io/components/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic components, buttons, cards, forms, alerts, badges, header, navbar, css only hamburger"
---

Every example below is **rendered with the very stylesheet being
demoed**. No preprocessor. No JavaScript. No extra dependencies. Copy
any snippet into a fresh HTML file and it works.

<nav aria-label="On this page">
<p><strong>On this page</strong></p>
<ul>
<li><strong>Inputs</strong> — <a href="#buttons">Buttons</a> · <a href="#badges">Badges</a></li>
<li><strong>Feedback</strong> — <a href="#alerts">Alerts</a></li>
<li><strong>Surface</strong> — <a href="#cards">Cards</a></li>
<li><strong>Forms</strong> — <a href="#form-fields">Form fields</a></li>
<li><strong>Layout</strong> — <a href="#grid">Grid</a> · <a href="#header">Header &amp; hamburger nav</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="Inputs">

<h2 id="inputs">Inputs</h2>

Interactive elements the visitor clicks, taps, or focuses to drive the
page.

<h3 id="buttons">Buttons</h3>

A semantic, themable action trigger. Solid and outline variants ship
six brand colours each.

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

Outline variants:

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">Outline</a>
  <a href="#" class="button secondary-outline">Outline</a>
</p>

> **Accessibility note.** Every `.button` variant ships with a
> `:focus-visible` ring and a **24×24&nbsp;px minimum hit area**
> (WCAG&nbsp;2.2 SC&nbsp;2.5.8). Use `<button type="button">` for
> in-page actions and `<a href>` only for navigation.

<h3 id="badges">Badges</h3>

A compact label for status, count, or category. Text size is fixed so
badges align with surrounding text.

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

> **Accessibility note.** Badges are decorative by default. When the
> badge carries the only signal (e.g. an unread count), wrap it in a
> visually-hidden helper: `<span class="visually-hidden">3 unread
> messages</span>`.

<hr class="hr-text" data-content="Feedback">

<h2 id="feedback">Feedback</h2>

Surfaces that tell the visitor something happened — or is about to
happen.

<h3 id="alerts">Alerts</h3>

Status messages with semantic intent. **In v1.1.7 every variant is
explicitly namespaced** under `.alert-{primary,secondary,info,success,warning,error}`
so the variant class cannot collide with state classes elsewhere on
the page.

```html
<div class="alert alert-primary" role="alert">
  <strong>Heads up.</strong> This is a primary alert.
</div>
<div class="alert alert-success" role="status">
  <strong>Saved.</strong> Your changes are persisted.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Careful.</strong> This action affects shared state.
</div>
<div class="alert alert-error" role="alert">
  <strong>Error.</strong> Could not save the form.
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>Heads up.</strong> This is a primary alert.
</div>

<div class="alert alert-success" role="status">
<strong>Saved.</strong> Your changes are persisted.
</div>

<div class="alert alert-warning" role="alert">
<strong>Careful.</strong> This action affects shared state.
</div>

<div class="alert alert-error" role="alert">
<strong>Error.</strong> Could not save the form.
</div>
</section>

> **Accessibility note.** Use `role="alert"` for messages that demand
> immediate attention (errors, warnings) and `role="status"` for
> non-urgent confirmations. Both expose the message to assistive tech
> the moment it appears.

<hr class="hr-text" data-content="Surface">

<h2 id="surface">Surface</h2>

Containers that frame and group related content.

<h3 id="cards">Cards</h3>

A bordered, padded container for a single coherent unit. Pair with the
`flex-N` grid for responsive card walls.

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Lightweight</h3>
      <p>39.9 KB minified, 7.5 KB gzipped.</p>
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
      <h3 class="card-title">Lightweight</h3>
      <p>39.9&nbsp;KB minified, 7.5&nbsp;KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Accessible</h3>
      <p>WCAG&nbsp;2.2 conformant out of the box.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modular</h3>
      <p>Cascade-layered for easy overrides.</p>
    </div>
  </article>
</section>

> **Accessibility note.** Wrap each card in a semantic landmark
> (`<article>`, `<section>`) and start its content with a heading
> (`<h3>`). Screen-reader users can then traverse the card list as
> first-class navigable regions.

<hr class="hr-text" data-content="Forms">

<h2 id="forms">Forms</h2>

Inputs, labels, and groupings for collecting user data.

<h3 id="form-fields">Form fields</h3>

Labels, text inputs, textareas, fieldsets and legends — all sized
consistently with the rest of the design system.

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
  <label for="demo-name">Name</label>
  <input id="demo-name" type="text">

  <label for="demo-email">Email</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">Message</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">Send (demo)</button></p>
</form>
</section>

> **Accessibility note.** Every input must have a programmatically
> associated `<label for="…">`. Group related controls inside a
> `<fieldset>` with a `<legend>`. Mark required fields with
> `required` (and a visible asterisk in the label text).

<hr class="hr-text" data-content="Layout">

<h2 id="layout">Layout</h2>

Structural primitives — grid, container, header — that frame the
whole page.

<h3 id="grid">Grid</h3>

A responsive `flex-N` grid (1 → 12 columns) built on flexbox. The
`.row` parent gaps and wraps automatically.

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
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Half</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Half</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Third</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Third</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Third</div>
</div>
</section>

> **Accessibility note.** Visual order should match DOM order. Avoid
> reordering rows with `flex-direction: row-reverse` or `order:` —
> screen readers and keyboard users follow the source, not the paint.

<h3 id="header">Header &amp; hamburger nav</h3>

A complete CSS-only header with a responsive hamburger toggle. **Zero
JavaScript.** Copy the snippet below into a fresh HTML page that
already loads `skeletonic.min.css` and the menu collapses, expands,
and traps focus correctly on its own.

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
    <li><a href="#">Home</a></li>
    <li><a href="#">Docs</a></li>
    <li><a href="#">Components</a></li>
    <li><a href="#">About</a></li>
  </ul>
</header>
</section>

> **Accessibility note.** The hidden checkbox stays in the tab order
> so keyboard users can open the menu with `Space` or `Enter`. The
> `<label>` carries `aria-hidden` because the checkbox itself is the
> accessible name source. Resize the window below 640&nbsp;px to see
> the burger toggle take over.

[See full a11y notes →](/accessibility/) · [Browse palettes →](/palettes/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Skeletonic Stylus components",
  "description": "Every component shipped in Skeletonic Stylus v1.1.7.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Buttons",
      "url": "https://skeletonic.io/components/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Badges",
      "url": "https://skeletonic.io/components/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Alerts",
      "url": "https://skeletonic.io/components/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Cards",
      "url": "https://skeletonic.io/components/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Form fields",
      "url": "https://skeletonic.io/components/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Grid",
      "url": "https://skeletonic.io/components/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Header & hamburger nav",
      "url": "https://skeletonic.io/components/#header"
    }
  ]
}
</script>
