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
<li><strong>Inputs</strong> — <a href="#buttons">Buttons</a> · <a href="#button-shapes">Button shapes</a> · <a href="#button-groups">Button groups</a> · <a href="#badges">Badges</a></li>
<li><strong>Feedback</strong> — <a href="#alerts">Alerts</a> · <a href="#code-blocks">Code blocks</a></li>
<li><strong>Surface</strong> — <a href="#cards">Cards</a> · <a href="#tables">Tables</a></li>
<li><strong>Forms</strong> — <a href="#form-fields">Form fields</a> · <a href="#status-inputs">Status inputs</a> · <a href="#fieldsets">Fieldsets</a></li>
<li><strong>Typography</strong> — <a href="#lists">Lists</a> · <a href="#dividers">Dividers</a> · <a href="#link-effects">Link hover effects</a></li>
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

<h3 id="button-shapes">Button shapes</h3>

The `.btn` family is a parallel shape system on top of the `.button`
colour family. Use it when you want a square, round, or oval icon
button instead of the default pill.

```html
<button type="button" class="btn">Square</button>
<button type="button" class="btn btn-round">●</button>
<button type="button" class="btn btn-oval">Oval</button>
<button type="button" class="btn btn-outline">Outline</button>
```

<section aria-labelledby="button-shapes">
<p>
  <button type="button" class="btn">Square</button>
  <button type="button" class="btn btn-round">●</button>
  <button type="button" class="btn btn-oval">Oval</button>
  <button type="button" class="btn btn-outline">Outline</button>
</p>
</section>

> **When to use.** `.btn-round` makes a 60×60 px circular button —
> ideal for a single-character icon (close, like, share). `.btn-oval`
> is a softer pill for short verbs ("Buy", "Send"). `.btn-outline`
> reads as a secondary action — pair it with a solid `.btn` for the
> primary call to action.

<h3 id="button-groups">Button groups</h3>

Use `.button-group` to render a set of related buttons as a single
visual unit. `.block` makes a single button stretch full-width — handy
for forms on narrow viewports.

```html
<div class="button-group">
  <a href="#" class="button primary">Save</a>
  <a href="#" class="button secondary">Save as draft</a>
  <a href="#" class="button warning">Discard</a>
</div>

<a href="#" class="button primary block">Full-width call to action</a>
```

<section aria-labelledby="button-groups">
<div class="button-group">
  <a href="#" class="button primary">Save</a>
  <a href="#" class="button secondary">Save as draft</a>
  <a href="#" class="button warning">Discard</a>
</div>
<p style="margin-top:1rem;">
  <a href="#" class="button primary block">Full-width call to action</a>
</p>
</section>

> **Accessibility note.** Wrap a button group in
> `role="group"` with an `aria-label` describing what the buttons do
> together (e.g. "Document actions"). Without that, assistive tech
> announces each button as if it were unrelated.

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

Status messages with semantic intent. **In v2.0.0 every variant is
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

<h3 id="code-blocks">Code blocks</h3>

`<code>`, `<kbd>`, `<pre>`, and `<samp>` get monospace styling and a
thick inline-start accent stripe (which flips automatically under
`<html dir="rtl">` thanks to logical properties). Status modifiers
match the alert palette so callouts and code samples can speak the
same colour language.

```html
<code class="primary">npm install @sebastienrousseau/skeletonic-stylus</code>
<code class="success">2026-04-30 — build passed</code>
<code class="warning">deprecated since v1.1.0 — removed in v2.0</code>
<code class="error">CVE-2023-44270 patched via overrides</code>
<code class="info">use `--gr-h1` to override the heading scale</code>
```

<section aria-labelledby="code-blocks">
<p><code class="primary">npm install @sebastienrousseau/skeletonic-stylus</code></p>
<p><code class="success">2026-04-30 — build passed</code></p>
<p><code class="warning">deprecated since v1.1.0 — removed in v2.0</code></p>
<p><code class="error">CVE-2023-44270 patched via overrides</code></p>
<p><code class="info">use --gr-h1 to override the heading scale</code></p>
</section>

To render a keyboard shortcut, use `<kbd>`:

```html
Press <kbd>Ctrl</kbd>+<kbd>K</kbd> to focus the search.
```

<section>
<p>Press <kbd>Ctrl</kbd>+<kbd>K</kbd> to focus the search.</p>
</section>

> **RTL note.** Code blocks intentionally retain `direction: ltr` even
> on `<html dir="rtl">` pages — code is conventionally left-to-right.
> What flips is the inline-start accent stripe, so the visual anchor
> stays on the *reading-start* edge of the block.

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

<h3 id="tables">Tables</h3>

Plain `<table>` elements get bordered cells and a contrast-flipped
`<thead>` automatically — no class soup needed.

```html
<table>
  <thead>
    <tr><th>Framework</th><th>Brotli</th><th>JS-free</th></tr>
  </thead>
  <tbody>
    <tr><td>Skeletonic</td><td>6.8 KB</td><td>Yes</td></tr>
    <tr><td>Pico CSS</td><td>10.1 KB</td><td>Yes</td></tr>
    <tr><td>Bootstrap</td><td>23.0 KB</td><td>No (Popper)</td></tr>
  </tbody>
</table>
```

<section aria-labelledby="tables">
<table>
  <thead>
    <tr><th>Framework</th><th>Brotli</th><th>JS-free</th></tr>
  </thead>
  <tbody>
    <tr><td>Skeletonic</td><td>6.8 KB</td><td>Yes</td></tr>
    <tr><td>Pico CSS</td><td>10.1 KB</td><td>Yes</td></tr>
    <tr><td>Bootstrap</td><td>23.0 KB</td><td>No (Popper)</td></tr>
  </tbody>
</table>
</section>

> **Accessibility note.** Always use `<thead>` and `<th>` for header
> cells (not `<td>` styled to look like a header) — assistive tech
> announces the column header before each cell so users can navigate
> the data grid.

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
<div role="group" aria-label="Form fields demo">
  <label for="demo-name">Name</label>
  <input id="demo-name" type="text">

  <label for="demo-email">Email</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">Message</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">Send (demo)</button></p>
</div>
</section>

> **Accessibility note.** Every input must have a programmatically
> associated `<label for="…">`. Group related controls inside a
> `<fieldset>` with a `<legend>`. Mark required fields with
> `required` (and a visible asterisk in the label text).

<h3 id="status-inputs">Status inputs</h3>

Tint a single input to communicate validation state without rebuilding
the form. The status modifier classes pair with any `<input type="">`
that already has element styling.

```html
<input type="text"  class="input-primary"   placeholder="Primary">
<input type="text"  class="input-success"   placeholder="Saved">
<input type="text"  class="input-warning"   placeholder="Check this">
<input type="email" class="input-error"     value="not-an-email">
<input type="text"  class="input-info"      placeholder="FYI">
```

<section aria-labelledby="status-inputs">
<div role="group" aria-label="Status inputs demo">
  <p><input type="text" class="input-primary" placeholder="Primary" aria-label="primary status example"></p>
  <p><input type="text" class="input-success" placeholder="Saved" aria-label="success status example"></p>
  <p><input type="text" class="input-warning" placeholder="Check this" aria-label="warning status example"></p>
  <p><input type="email" class="input-error" value="not-an-email" aria-label="error status example"></p>
  <p><input type="text" class="input-info" placeholder="FYI" aria-label="info status example"></p>
</div>
</section>

> **Accessibility note.** Colour alone never carries meaning. Pair
> `.input-error` with `aria-invalid="true"`, an inline message linked
> via `aria-describedby`, and a visible icon or text label.

<h3 id="fieldsets">Fieldsets</h3>

`<fieldset>` groups related controls; `<legend>` names the group. Both
inherit Skeletonic's spacing and border tokens automatically.

```html
<fieldset>
  <legend>Notification preferences</legend>
  <p>
    <input id="email-pref" type="checkbox" checked>
    <label for="email-pref">Email digest</label>
  </p>
  <p>
    <input id="sms-pref" type="checkbox">
    <label for="sms-pref">SMS alerts</label>
  </p>
</fieldset>
```

<section aria-labelledby="fieldsets">
<fieldset>
  <legend>Notification preferences</legend>
  <p>
    <input id="demo-email-pref" type="checkbox" checked>
    <label for="demo-email-pref">Email digest</label>
  </p>
  <p>
    <input id="demo-sms-pref" type="checkbox">
    <label for="demo-sms-pref">SMS alerts</label>
  </p>
</fieldset>
</section>

<hr class="hr-text" data-content="Typography">

<h2 id="typography">Typography</h2>

Plain HTML, lifted to typographic standard via the cascade.

<h3 id="lists">Lists</h3>

Three bullet styles ship as modifiers on `<ul>` — `square`, `circle`,
`disc`. Plus the default unstyled list-reset.

```html
<ul class="square">
  <li>Square bullets</li>
  <li>Square bullets</li>
</ul>

<ul class="circle">
  <li>Circle bullets</li>
  <li>Circle bullets</li>
</ul>

<ul class="disc">
  <li>Disc bullets</li>
  <li>Disc bullets</li>
</ul>
```

<section aria-labelledby="lists">
<ul class="square">
  <li>Square bullets</li>
  <li>Square bullets</li>
</ul>

<ul class="circle">
  <li>Circle bullets</li>
  <li>Circle bullets</li>
</ul>

<ul class="disc">
  <li>Disc bullets</li>
  <li>Disc bullets</li>
</ul>
</section>

<h3 id="dividers">Dividers</h3>

Ten visual variants of `<hr>` — solid, dashed, dotted, doubled,
rounded, blurred, small, vertical, plus a centred-icon and a centred
text-on-rule used throughout this site for the section separators
above.

```html
<hr class="hr-solid">
<hr class="hr-dashed">
<hr class="hr-dotted">
<hr class="hr-doubled">
<hr class="hr-rounded">
<hr class="hr-blurred">
<hr class="hr-small">
<hr class="hr-icon">
<hr class="hr-text" data-content="Section title">
<hr class="hr-vertical">
```

<section aria-labelledby="dividers">
<p><strong>Solid</strong></p>
<hr class="hr-solid">
<p><strong>Dashed</strong></p>
<hr class="hr-dashed">
<p><strong>Dotted</strong></p>
<hr class="hr-dotted">
<p><strong>Doubled</strong></p>
<hr class="hr-doubled">
<p><strong>Rounded</strong></p>
<hr class="hr-rounded">
<p><strong>Blurred</strong></p>
<hr class="hr-blurred">
<p><strong>Small (centred)</strong></p>
<hr class="hr-small">
<p><strong>Centred icon</strong></p>
<hr class="hr-icon">
<p><strong>Centred text</strong></p>
<hr class="hr-text" data-content="Section title">
</section>

> **Note.** `<hr>` is a semantic, paragraph-level *thematic break*.
> Don't use it for purely decorative spacing — use a `<div>` or CSS
> `margin` instead. Assistive tech announces every `<hr>` as a section
> change.

<h3 id="link-effects">Link hover effects</h3>

Twelve named hover-effect classes for inline links, ranging from
classic underline reveals to bracket animations. They're independent
of colour — pair with any text colour.

```html
<a href="#" class="link-1">Underline left → right</a>
<a href="#" class="link-2">Underline right → left</a>
<a href="#" class="link-3">Underline grow from centre</a>
<a href="#" class="link-4">Underline shrink to centre</a>
<a href="#" class="link-5">Top + bottom, left → right</a>
<a href="#" class="link-6">Top + bottom, right → left</a>
<a href="#" class="link-7">Top + bottom, grow from centre</a>
<a href="#" class="link-8">Top + bottom, opposite start</a>
<a href="#" class="link-9">Underline going up</a>
<a href="#" class="link-10">Underline going down</a>
<a href="#" class="link-11">Expanding brackets</a>
<a href="#" class="link-12">Shrinking brackets</a>
```

<section aria-labelledby="link-effects">
<p style="line-height:2.6;">
  <a href="#link-effects" class="link-1">link-1</a> ·
  <a href="#link-effects" class="link-2">link-2</a> ·
  <a href="#link-effects" class="link-3">link-3</a> ·
  <a href="#link-effects" class="link-4">link-4</a> ·
  <a href="#link-effects" class="link-5">link-5</a> ·
  <a href="#link-effects" class="link-6">link-6</a> ·
  <a href="#link-effects" class="link-7">link-7</a> ·
  <a href="#link-effects" class="link-8">link-8</a> ·
  <a href="#link-effects" class="link-9">link-9</a> ·
  <a href="#link-effects" class="link-10">link-10</a> ·
  <a href="#link-effects" class="link-11">link-11</a> ·
  <a href="#link-effects" class="link-12">link-12</a>
</p>
</section>

> **RTL note.** Effects 1, 2, 5, 6, 8, and 11 have explicit `[dir="rtl"]`
> overrides so "left → right" reveals semantically become "start → end"
> reveals on RTL pages — meaning the underline grows from the same
> side the reader is already starting from.

<hr class="hr-text" data-content="Layout">

<h2 id="layout">Layout</h2>

Structural primitives — grid, container, header — that frame the
whole page.

<h3 id="grid">Grid</h3>

Native CSS Grid since v2.0. `.grid` sets `display: grid` and a
gap; `.grid-cols-N` (1–12) generates the column tracks; `.col-span-N`
(1–12) lets a single child span multiple cells.

```html
<div class="grid grid-cols-2">
  <div>Half</div>
  <div>Half</div>
</div>

<div class="grid grid-cols-3">
  <div>Third</div>
  <div>Third</div>
  <div>Third</div>
</div>

<div class="grid grid-cols-3">
  <div class="col-span-2">Two thirds</div>
  <div>Third</div>
</div>
```

<section aria-labelledby="grid">
<div class="grid grid-cols-2" style="margin-bottom:.5rem;">
  <div style="padding:.75rem;background:var(--cl-grey-100);color:#1a1a1a;border-radius:.25rem;text-align:center;">Half</div>
  <div style="padding:.75rem;background:var(--cl-grey-200);color:#1a1a1a;border-radius:.25rem;text-align:center;">Half</div>
</div>

<div class="grid grid-cols-3" style="margin-bottom:.5rem;">
  <div style="padding:.75rem;background:var(--cl-grey-100);color:#1a1a1a;border-radius:.25rem;text-align:center;">Third</div>
  <div style="padding:.75rem;background:var(--cl-grey-200);color:#1a1a1a;border-radius:.25rem;text-align:center;">Third</div>
  <div style="padding:.75rem;background:var(--cl-grey-100);color:#1a1a1a;border-radius:.25rem;text-align:center;">Third</div>
</div>

<div class="grid grid-cols-3">
  <div class="col-span-2" style="padding:.75rem;background:var(--cl-grey-100);color:#1a1a1a;border-radius:.25rem;text-align:center;">
  Two thirds (col-span-2)
  </div>
  <div style="padding:.75rem;background:var(--cl-grey-200);color:#1a1a1a;border-radius:.25rem;text-align:center;">Third</div>
</div>
</section>

> **Accessibility note.** Visual order should match DOM order. Avoid
> reordering with `grid-auto-flow: dense` or explicit `grid-row` /
> `grid-column` shuffling — screen readers and keyboard users follow
> the source, not the paint.

> **Migrating from v1.x.** The `.flex-N` / `.row` flexbox grid is
> gone. Replace `<div class="row"><div class="flex-6">…` with
> `<div class="grid grid-cols-2"><div>…`. The new system is shorter,
> uses native CSS Grid, and avoids margin-collapse quirks.

<h3 id="header">Header &amp; hamburger nav</h3>

A complete CSS-only header with a responsive hamburger toggle. **Zero
JavaScript.** Copy the snippet below into a fresh HTML page that
already loads `skeletonic.min.css` and the menu collapses, expands,
and traps focus correctly on its own.

```html
<style>
  .sk-header{position:relative;display:flex;align-items:center;gap:1rem;padding:.75rem 1rem;border:1px solid #e4e4e7;border-radius:.5rem;background:#fff;}
  .sk-header .sk-brand{font-weight:600;color:#0a0a0a !important;text-decoration:none;}
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
  .sk-header .sk-brand{font-weight:600;color:#0a0a0a !important;text-decoration:none;}
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

[See full a11y notes →](/accessibility/) · [Browse palettes →](/palettes/) · [Framework benchmarks →](/benchmarks/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Skeletonic Stylus components",
  "description": "Every component, element and effect shipped in Skeletonic Stylus v2.0.0.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 14,
  "itemListElement": [
    { "@type": "ListItem", "position": 1,  "name": "Buttons",                  "url": "https://skeletonic.io/components/#buttons" },
    { "@type": "ListItem", "position": 2,  "name": "Button shapes",            "url": "https://skeletonic.io/components/#button-shapes" },
    { "@type": "ListItem", "position": 3,  "name": "Button groups",            "url": "https://skeletonic.io/components/#button-groups" },
    { "@type": "ListItem", "position": 4,  "name": "Badges",                   "url": "https://skeletonic.io/components/#badges" },
    { "@type": "ListItem", "position": 5,  "name": "Alerts",                   "url": "https://skeletonic.io/components/#alerts" },
    { "@type": "ListItem", "position": 6,  "name": "Code blocks",              "url": "https://skeletonic.io/components/#code-blocks" },
    { "@type": "ListItem", "position": 7,  "name": "Cards",                    "url": "https://skeletonic.io/components/#cards" },
    { "@type": "ListItem", "position": 8,  "name": "Tables",                   "url": "https://skeletonic.io/components/#tables" },
    { "@type": "ListItem", "position": 9,  "name": "Form fields",              "url": "https://skeletonic.io/components/#form-fields" },
    { "@type": "ListItem", "position": 10, "name": "Status inputs",            "url": "https://skeletonic.io/components/#status-inputs" },
    { "@type": "ListItem", "position": 11, "name": "Fieldsets",                "url": "https://skeletonic.io/components/#fieldsets" },
    { "@type": "ListItem", "position": 12, "name": "Lists",                    "url": "https://skeletonic.io/components/#lists" },
    { "@type": "ListItem", "position": 13, "name": "Dividers",                 "url": "https://skeletonic.io/components/#dividers" },
    { "@type": "ListItem", "position": 14, "name": "Link hover effects",       "url": "https://skeletonic.io/components/#link-effects" }
  ]
}
</script>
