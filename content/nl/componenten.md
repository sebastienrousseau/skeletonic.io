---
title: "Componenten"
name: "Skeletonic Stylus"
description: "Live HTML-voorbeelden van elke Skeletonic Stylus-component, gegroepeerd, verankerd en weergegeven met hetzelfde stylesheet dat wordt gedemonstreerd."
layout: page
permalink: https://skeletonic.io/nl/componenten/
date: 2026-04-08
author: Sebastien Rousseau
language: nl
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic componenten, knoppen, kaarten, formulieren, meldingen, badges, header, navbar, css only hamburger"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

Elk voorbeeld hieronder wordt **weergegeven met hetzelfde stylesheet dat
wordt gedemonstreerd**. Geen preprocessor. Geen JavaScript. Geen extra
afhankelijkheden. Kopieer elk fragment in een nieuw HTML-bestand en het werkt.

<nav aria-label="Op deze pagina">
<p><strong>Op deze pagina</strong></p>
<ul>
<li><strong>Invoer</strong> — <a href="#buttons">Knoppen</a> · <a href="#badges">Badges</a></li>
<li><strong>Feedback</strong> — <a href="#alerts">Meldingen</a></li>
<li><strong>Oppervlak</strong> — <a href="#cards">Kaarten</a></li>
<li><strong>Formulieren</strong> — <a href="#form-fields">Formuliervelden</a></li>
<li><strong>Layout</strong> — <a href="#grid">Grid</a> · <a href="#header">Header &amp; hamburgernavigatie</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="Invoer">

<h2 id="inputs">Invoer</h2>

Interactieve elementen waarop de bezoeker klikt, tikt of focust om de
pagina aan te sturen.

<h3 id="buttons">Knoppen</h3>

Een semantische, thematiseerbare actietrigger. Gevulde en omlijning-varianten
leveren elk zes merkkleuren.

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

Omlijning-varianten:

```html
<a href="#" class="button primary-outline">Omlijning</a>
<a href="#" class="button secondary-outline">Omlijning</a>
```

<p>
  <a href="#" class="button primary-outline">Omlijning</a>
  <a href="#" class="button secondary-outline">Omlijning</a>
</p>

> **Toegankelijkheidsnoot.** Elke `.button`-variant wordt geleverd met een
> `:focus-visible`-ring en een **minimaal raakgebied van 24×24&nbsp;px**
> (WCAG&nbsp;2.2 SC&nbsp;2.5.8). Gebruik `<button type="button">` voor
> acties op de pagina en `<a href>` alleen voor navigatie.

<h3 id="badges">Badges</h3>

Een compact label voor status, telling of categorie. Tekstgrootte is vast
zodat badges uitlijnen met omringende tekst.

```html
<span class="badge">Standaard</span>
<span class="badge primary">Primary</span>
<span class="badge success">Succes</span>
<span class="badge warning">Waarschuwing</span>
<span class="badge danger">Gevaar</span>
```

<section aria-labelledby="badges">
<p>
  <span class="badge">Standaard</span>
  <span class="badge primary">Primary</span>
  <span class="badge success">Succes</span>
  <span class="badge warning">Waarschuwing</span>
  <span class="badge danger">Gevaar</span>
</p>
</section>

> **Toegankelijkheidsnoot.** Badges zijn standaard decoratief. Wanneer de
> badge het enige signaal draagt (bijv. een ongelezen telling), wikkel het
> in een visueel verborgen helper: `<span class="visually-hidden">3 ongelezen
> berichten</span>`.

<hr class="hr-text" data-content="Feedback">

<h2 id="feedback">Feedback</h2>

Oppervlakken die de bezoeker vertellen dat er iets is gebeurd — of gaat
gebeuren.

<h3 id="alerts">Meldingen</h3>

Statusberichten met semantische intentie. **In v2.0.0 is elke variant
expliciet genaamd** onder `.alert-{primary,secondary,info,success,warning,error}`
zodat de variantklasse niet kan botsen met statusklassen elders op
de pagina.

```html
<div class="alert alert-primary" role="alert">
  <strong>Let op.</strong> Dit is een primaire melding.
</div>
<div class="alert alert-success" role="status">
  <strong>Opgeslagen.</strong> Je wijzigingen zijn bewaard.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Voorzichtig.</strong> Deze actie raakt gedeelde status.
</div>
<div class="alert alert-error" role="alert">
  <strong>Fout.</strong> Het formulier kon niet worden opgeslagen.
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>Let op.</strong> Dit is een primaire melding.
</div>

<div class="alert alert-success" role="status">
<strong>Opgeslagen.</strong> Je wijzigingen zijn bewaard.
</div>

<div class="alert alert-warning" role="alert">
<strong>Voorzichtig.</strong> Deze actie raakt gedeelde status.
</div>

<div class="alert alert-error" role="alert">
<strong>Fout.</strong> Het formulier kon niet worden opgeslagen.
</div>
</section>

> **Toegankelijkheidsnoot.** Gebruik `role="alert"` voor berichten die
> onmiddellijke aandacht vereisen (fouten, waarschuwingen) en `role="status"` voor
> niet-urgente bevestigingen. Beide stellen het bericht beschikbaar voor hulptechnologie
> op het moment dat het verschijnt.

<hr class="hr-text" data-content="Oppervlak">

<h2 id="surface">Oppervlak</h2>

Containers die gerelateerde inhoud inkaderen en groeperen.

<h3 id="cards">Kaarten</h3>

Een omrande, opgevulde container voor een enkele samenhangende eenheid. Combineer
met het `flex-N`-grid voor responsieve kaartwanden.

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Lichtgewicht</h3>
      <p>45,7 KB geminificeerd, 8,3 KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Toegankelijk</h3>
      <p>WCAG 2.2 conform uit de doos.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modulair</h3>
      <p>Cascade-layered voor eenvoudige overschrijvingen.</p>
    </div>
  </article>
</section>
```

<section class="row" aria-labelledby="cards">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Lichtgewicht</h3>
      <p>45,7&nbsp;KB geminificeerd, 8,3&nbsp;KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Toegankelijk</h3>
      <p>WCAG&nbsp;2.2 conform uit de doos.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modulair</h3>
      <p>Cascade-layered voor eenvoudige overschrijvingen.</p>
    </div>
  </article>
</section>

> **Toegankelijkheidsnoot.** Wikkel elke kaart in een semantische landmark
> (`<article>`, `<section>`) en begin de inhoud met een kop
> (`<h3>`). Schermlezergebruikers kunnen dan de kaartenlijst doorkruisen als
> navigeerbare regio's van eerste klasse.

<hr class="hr-text" data-content="Formulieren">

<h2 id="forms">Formulieren</h2>

Invoervelden, labels en groeperingen voor het verzamelen van gebruikersgegevens.

<h3 id="form-fields">Formuliervelden</h3>

Labels, tekstinvoervelden, textarea's, fieldsets en legends — allemaal consistent
in grootte met de rest van het ontwerpsysteem.

```html
<form>
  <label for="name">Naam</label>
  <input id="name" type="text" required>

  <label for="email">E-mail</label>
  <input id="email" type="email" required class="input-primary">

  <label for="msg">Bericht</label>
  <textarea id="msg" rows="4"></textarea>

  <button type="submit" class="button primary">Versturen</button>
</form>
```

<section aria-labelledby="form-fields">
<form>
  <label for="demo-name">Naam</label>
  <input id="demo-name" type="text">

  <label for="demo-email">E-mail</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">Bericht</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">Versturen (demo)</button></p>
</form>
</section>

> **Toegankelijkheidsnoot.** Elk invoerveld moet een programmatisch
> gekoppeld `<label for="…">` hebben. Groepeer gerelateerde besturingselementen in een
> `<fieldset>` met een `<legend>`. Markeer verplichte velden met
> `required` (en een zichtbaar sterretje in de labeltekst).

<hr class="hr-text" data-content="Layout">

<h2 id="layout">Layout</h2>

Structurele bouwstenen — grid, container, header — die de
hele pagina inkaderen.

<h3 id="grid">Grid</h3>

Een responsief `flex-N`-grid (1 → 12 kolommen) gebouwd op flexbox. De
`.row`-ouder biedt automatisch tussenruimte en omloop.

```html
<div class="row">
  <div class="flex-6">Helft</div>
  <div class="flex-6">Helft</div>
</div>
<div class="row">
  <div class="flex-4">Derde</div>
  <div class="flex-4">Derde</div>
  <div class="flex-4">Derde</div>
</div>
```

<section aria-labelledby="grid">
<div style="display:flex;flex-wrap:wrap;gap:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Helft</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Helft</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Derde</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Derde</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Derde</div>
</div>
</section>

> **Toegankelijkheidsnoot.** Visuele volgorde moet overeenkomen met DOM-volgorde. Vermijd
> het herschikken van rijen met `flex-direction: row-reverse` of `order:` —
> schermlezers en toetsenbordgebruikers volgen de broncode, niet de weergave.

<h3 id="header">Header &amp; hamburgernavigatie</h3>

Een complete CSS-only header met een responsieve hamburgerschakelaar. **Geen
JavaScript.** Kopieer het onderstaande fragment in een nieuw HTML-bestand dat
al `skeletonic.min.css` laadt en het menu klapt in, klapt uit
en vangt focus correct op uit zichzelf.

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
  <a class="sk-brand" href="#">Merk</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Navigatie in-/uitklappen">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Documentatie</a></li>
    <li><a href="#">Componenten</a></li>
    <li><a href="#">Over ons</a></li>
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
  <a class="sk-brand" href="#">Merk</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Navigatie in-/uitklappen">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Documentatie</a></li>
    <li><a href="#">Componenten</a></li>
    <li><a href="#">Over ons</a></li>
  </ul>
</header>
</section>

> **Toegankelijkheidsnoot.** Het verborgen selectievakje blijft in de tabvolgorde
> zodat toetsenbordgebruikers het menu kunnen openen met `Space` of `Enter`. Het
> `<label>` draagt `aria-hidden` omdat het selectievakje zelf de
> toegankelijke naambron is. Verklein het venster onder 640&nbsp;px om
> de hamburgerschakelaar te zien overnemen.

[Bekijk volledige a11y-notities →](/nl/toegankelijkheid/) · [Bekijk paletten →](/nl/paletten/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Skeletonic Stylus-componenten",
  "description": "Elke component die wordt geleverd in Skeletonic Stylus v2.0.0.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Knoppen",
      "url": "https://skeletonic.io/nl/componenten/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Badges",
      "url": "https://skeletonic.io/nl/componenten/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Meldingen",
      "url": "https://skeletonic.io/nl/componenten/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Kaarten",
      "url": "https://skeletonic.io/nl/componenten/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Formuliervelden",
      "url": "https://skeletonic.io/nl/componenten/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Grid",
      "url": "https://skeletonic.io/nl/componenten/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Header & hamburgernavigatie",
      "url": "https://skeletonic.io/nl/componenten/#header"
    }
  ]
}
</script>
