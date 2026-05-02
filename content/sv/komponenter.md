---
title: "Komponenter"
name: "Skeletonic Stylus"
description: "Levande HTML-exempel pa varje komponent i Skeletonic Stylus, grupperade, ankrade och renderade med samma stylesheet som demonstreras."
layout: page
permalink: https://skeletonic.io/sv/komponenter/
date: 2026-04-08
author: Sebastien Rousseau
language: sv
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic komponenter, knappar, kort, formular, notiser, marken, header, navbar, css-only hamburgare"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

Varje exempel nedan ar **renderat med samma stylesheet som
demonstreras**. Ingen preprocessor. Inget JavaScript. Inga extra beroenden. Kopiera
valfri kodsnutt till en ny HTML-fil och den fungerar.

<nav aria-label="Pa denna sida">
<p><strong>Pa denna sida</strong></p>
<ul>
<li><strong>Inmatning</strong> — <a href="#buttons">Knappar</a> · <a href="#badges">Marken</a></li>
<li><strong>Atergivning</strong> — <a href="#alerts">Notiser</a></li>
<li><strong>Yta</strong> — <a href="#cards">Kort</a></li>
<li><strong>Formular</strong> — <a href="#form-fields">Formularfalt</a></li>
<li><strong>Layout</strong> — <a href="#grid">Rutsystem</a> · <a href="#header">Header &amp; hamburgarnavigering</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="Inmatning">

<h2 id="inputs">Inmatning</h2>

Interaktiva element som besokaren klickar, trycker pa eller fokuserar for att
styra sidan.

<h3 id="buttons">Knappar</h3>

En semantisk, tematiserbar aktionsutlosare. Fyllda och konturerade varianter
levereras i sex markesfarger vardera.

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

Konturvarianter:

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">Outline</a>
  <a href="#" class="button secondary-outline">Outline</a>
</p>

> **Tillganglighetsanmarkning.** Varje `.button`-variant levereras med en
> `:focus-visible`-ring och ett **minst 44x44&nbsp;px traffyta**
> (WCAG&nbsp;2.2 SC&nbsp;2.5.8). Anvand `<button type="button">` for
> handlingar pa sidan och `<a href>` enbart for navigering.

<h3 id="badges">Marken</h3>

En kompakt etikett for status, antal eller kategori. Textstorleken ar fast sa
att marken sitter i linje med omgivande text.

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

> **Tillganglighetsanmarkning.** Marken ar dekorativa som standard. Nar
> market bar den enda signalen (t.ex. ett olast antal), linda det i en
> visuellt dold hjalpare: `<span class="visually-hidden">3 olasta
> meddelanden</span>`.

<hr class="hr-text" data-content="Atergivning">

<h2 id="feedback">Atergivning</h2>

Ytor som talar om for besokaren att nagot har hant — eller kommer att
handa.

<h3 id="alerts">Notiser</h3>

Statusmeddelanden med semantisk avsikt. **I v2.0.0 ar varje variant
uttryckligen namnrymd** under `.alert-{primary,secondary,info,success,warning,error}`
sa att variantklassen inte kan kollidera med tillstandsklasser pa andra
stallen pa sidan.

```html
<div class="alert alert-primary" role="alert">
  <strong>Observera.</strong> Detta ar en primar notis.
</div>
<div class="alert alert-success" role="status">
  <strong>Sparat.</strong> Dina andringar ar bevarade.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Var forsiktig.</strong> Denna handling paverkar delat tillstand.
</div>
<div class="alert alert-error" role="alert">
  <strong>Fel.</strong> Kunde inte spara formularet.
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>Observera.</strong> Detta ar en primar notis.
</div>

<div class="alert alert-success" role="status">
<strong>Sparat.</strong> Dina andringar ar bevarade.
</div>

<div class="alert alert-warning" role="alert">
<strong>Var forsiktig.</strong> Denna handling paverkar delat tillstand.
</div>

<div class="alert alert-error" role="alert">
<strong>Fel.</strong> Kunde inte spara formularet.
</div>
</section>

> **Tillganglighetsanmarkning.** Anvand `role="alert"` for meddelanden som
> kraver omedelbar uppmarksamhet (fel, varningar) och `role="status"` for
> icke-braskande bekraftelser. Bada exponerar meddelandet for hjalpmedel
> i samma ogonblick det visas.

<hr class="hr-text" data-content="Yta">

<h2 id="surface">Yta</h2>

Behallarare som ramar in och grupperar relaterat innehall.

<h3 id="cards">Kort</h3>

En kantad, paddad behallare for en enskild sammanhangande enhet. Kombinera med
`flex-N`-rutnatet for responsiva kortvaggar.

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Lightweight</h3>
      <p>39.1 KB minified, 7.8 KB gzipped.</p>
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
      <h3 class="card-title">Lattiktat</h3>
      <p>45,7&nbsp;KB minifierad, 8,3&nbsp;KB gzippad.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Tillgangligt</h3>
      <p>WCAG&nbsp;2.2-uppfyllande direkt.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modulart</h3>
      <p>Cascade-layered for enkla overskrivningar.</p>
    </div>
  </article>
</section>

> **Tillganglighetsanmarkning.** Linda varje kort i en semantisk landmark
> (`<article>`, `<section>`) och borja dess innehall med en rubrik
> (`<h3>`). Skarmlasar-anvandare kan da traversera kortlistan som
> forstklassiga navigerbara regioner.

<hr class="hr-text" data-content="Formular">

<h2 id="forms">Formular</h2>

Indata, etiketter och grupperingar for att samla in anvandardata.

<h3 id="form-fields">Formularfalt</h3>

Etiketter, textinmatningar, textareas, fieldsets och legends — alla
storleksanpassade konsekvent med resten av designsystemet.

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
  <label for="demo-name">Namn</label>
  <input id="demo-name" type="text">

  <label for="demo-email">E-post</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">Meddelande</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">Skicka (demo)</button></p>
</form>
</section>

> **Tillganglighetsanmarkning.** Varje inmatning maste ha en programmatiskt
> kopplad `<label for="…">`. Gruppera relaterade kontroller i en
> `<fieldset>` med en `<legend>`. Markera obligatoriska falt med
> `required` (och en synlig asterisk i etiketttexten).

<hr class="hr-text" data-content="Layout">

<h2 id="layout">Layout</h2>

Strukturella primitiver — rutsystem, container, header — som ramar in
hela sidan.

<h3 id="grid">Rutsystem</h3>

Ett responsivt `flex-N`-rutsystem (1 → 12 kolumner) byggt pa flexbox. Den
overordnade `.row`-klassen ger mellanrum och radbrytning automatiskt.

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
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Halva</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Halva</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Tredjedel</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Tredjedel</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Tredjedel</div>
</div>
</section>

> **Tillganglighetsanmarkning.** Visuell ordning ska matcha DOM-ordningen. Undvik
> omordning av rader med `flex-direction: row-reverse` eller `order:` —
> skarmlasar och tangentbordsanvandare foljer kallkoden, inte malningen.

<h3 id="header">Header &amp; hamburgarnavigering</h3>

En komplett CSS-only-header med en responsiv hamburgartoggle. **Noll
JavaScript.** Kopiera kodsnutten nedan till en ny HTML-sida som
redan laddar `skeletonic.min.css` och menyn fallar ihop, expanderas
och fangar fokus korrekt pa egen hand.

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
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Visa/dolj navigering">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Hem</a></li>
    <li><a href="#">Dokument</a></li>
    <li><a href="#">Komponenter</a></li>
    <li><a href="#">Om</a></li>
  </ul>
</header>
</section>

> **Tillganglighetsanmarkning.** Den dolda checkboxen stannar i tabbordningen
> sa att tangentbordsanvandare kan oppna menyn med `Mellanslag` eller `Enter`. `<label>`-elementet
> bar `aria-hidden` eftersom checkboxen sjalv ar namnkallan for
> hjalpmedel. Andra fonsterets storlek under 640&nbsp;px for att se
> hamburgartoggle ta over.

[Se fullstandiga a11y-anteckningar →](/sv/tillganglighet/) · [Utforska paletter →](/sv/paletter/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Komponenter i Skeletonic Stylus",
  "description": "Varje komponent som levereras i Skeletonic Stylus v2.0.0.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Knappar",
      "url": "https://skeletonic.io/sv/komponenter/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Marken",
      "url": "https://skeletonic.io/sv/komponenter/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Notiser",
      "url": "https://skeletonic.io/sv/komponenter/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Kort",
      "url": "https://skeletonic.io/sv/komponenter/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Formularfalt",
      "url": "https://skeletonic.io/sv/komponenter/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Rutsystem",
      "url": "https://skeletonic.io/sv/komponenter/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Header och hamburgarnavigering",
      "url": "https://skeletonic.io/sv/komponenter/#header"
    }
  ]
}
</script>
