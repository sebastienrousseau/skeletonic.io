---
title: "Komponenten — Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Live-HTML-Beispiele aller Skeletonic-Stylus-Komponenten — gruppiert, verankert und mit genau dem Stylesheet gerendert, das hier vorgestellt wird."
layout: page
permalink: https://skeletonic.io/de/komponenten/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
language: de
keywords: "skeletonic komponenten, schaltflaechen, karten, formulare, hinweise, badges, kopfzeile, navigation, css hamburger menue"
---

Jedes Beispiel auf dieser Seite wird **mit genau dem Stylesheet gerendert,
das hier vorgestellt wird**. Kein Praeprozessor. Kein JavaScript. Keine
zusaetzlichen Abhaengigkeiten. Jeden Ausschnitt in eine leere HTML-Datei
kopieren — fertig.

<nav aria-label="Auf dieser Seite">
<p><strong>Auf dieser Seite</strong></p>
<ul>
<li><strong>Eingaben</strong> — <a href="#buttons">Schaltflaechen</a> · <a href="#badges">Badges</a></li>
<li><strong>Rueckmeldungen</strong> — <a href="#alerts">Hinweise</a></li>
<li><strong>Oberflaechen</strong> — <a href="#cards">Karten</a></li>
<li><strong>Formulare</strong> — <a href="#form-fields">Formularfelder</a></li>
<li><strong>Layout</strong> — <a href="#grid">Raster</a> · <a href="#header">Kopfzeile &amp; Hamburger-Navigation</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="Eingaben">

<h2 id="inputs">Eingaben</h2>

Interaktive Elemente, die Besuchende anklicken, antippen oder fokussieren,
um die Seite zu steuern.

<h3 id="buttons">Schaltflaechen</h3>

Ein semantischer, thematisierbarer Aktionstrigger. Volle und Outline-Varianten
liefern je sechs Markenfarben.

```html
<a href="#" class="button primary">Primary</a>
<a href="#" class="button secondary">Secondary</a>
<a href="#" class="button tertiary">Tertiary</a>
```

<section aria-labelledby="buttons">
<p>
  <a href="#" class="button primary">Primaer</a>
  <a href="#" class="button secondary">Sekundaer</a>
  <a href="#" class="button tertiary">Tertiaer</a>
</p>
</section>

Outline-Varianten:

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">Outline</a>
  <a href="#" class="button secondary-outline">Outline</a>
</p>

> **Hinweis zur Barrierefreiheit.** Jede `.button`-Variante hat einen
> `:focus-visible`-Ring und eine **Mindest-Trefferflaeche von
> 24×24&nbsp;px** (WCAG&nbsp;2.2 SC&nbsp;2.5.8). `<button type="button">`
> fuer seiteninternes Verhalten verwenden, `<a href>` ausschliesslich
> fuer Navigation.

<h3 id="badges">Badges</h3>

Ein kompaktes Label fuer Status, Anzahl oder Kategorie. Die Schriftgroesse
ist fixiert, damit Badges sich am umgebenden Text ausrichten.

```html
<span class="badge">Default</span>
<span class="badge primary">Primary</span>
<span class="badge success">Success</span>
<span class="badge warning">Warning</span>
<span class="badge danger">Danger</span>
```

<section aria-labelledby="badges">
<p>
  <span class="badge">Standard</span>
  <span class="badge primary">Primaer</span>
  <span class="badge success">Erfolg</span>
  <span class="badge warning">Warnung</span>
  <span class="badge danger">Gefahr</span>
</p>
</section>

> **Hinweis zur Barrierefreiheit.** Badges sind standardmaessig dekorativ.
> Wenn das Badge das einzige Signal traegt (z.&nbsp;B. eine Anzahl
> ungelesener Nachrichten), in einen visuell versteckten Helfer einbetten:
> `<span class="visually-hidden">3 ungelesene Nachrichten</span>`.

<hr class="hr-text" data-content="Rueckmeldungen">

<h2 id="feedback">Rueckmeldungen</h2>

Oberflaechen, die Besuchende informieren, dass etwas geschehen ist — oder
bald geschehen wird.

<h3 id="alerts">Hinweise</h3>

Statusmeldungen mit semantischer Bedeutung. **In v1.1.7 ist jede Variante
explizit unter `.alert-{primary,secondary,info,success,warning,error}`
benannt**, damit die Variantenklasse nicht mit Zustandsklassen anderswo
auf der Seite kollidiert.

```html
<div class="alert alert-primary" role="alert">
  <strong>Achtung.</strong> Dies ist ein primaerer Hinweis.
</div>
<div class="alert alert-success" role="status">
  <strong>Gespeichert.</strong> Die Aenderungen wurden uebernommen.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Vorsicht.</strong> Diese Aktion betrifft gemeinsam genutzten Zustand.
</div>
<div class="alert alert-error" role="alert">
  <strong>Fehler.</strong> Das Formular konnte nicht gespeichert werden.
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>Achtung.</strong> Dies ist ein primaerer Hinweis.
</div>

<div class="alert alert-success" role="status">
<strong>Gespeichert.</strong> Die Aenderungen wurden uebernommen.
</div>

<div class="alert alert-warning" role="alert">
<strong>Vorsicht.</strong> Diese Aktion betrifft gemeinsam genutzten Zustand.
</div>

<div class="alert alert-error" role="alert">
<strong>Fehler.</strong> Das Formular konnte nicht gespeichert werden.
</div>
</section>

> **Hinweis zur Barrierefreiheit.** `role="alert"` fuer Meldungen
> verwenden, die sofortige Aufmerksamkeit erfordern (Fehler, Warnungen),
> und `role="status"` fuer nicht dringende Bestaetigungen. Beide machen
> die Meldung fuer assistive Technologien sofort sichtbar.

<hr class="hr-text" data-content="Oberflaechen">

<h2 id="surface">Oberflaechen</h2>

Container, die zusammengehoerige Inhalte rahmen und gruppieren.

<h3 id="cards">Karten</h3>

Ein umrandeter, mit Abstand versehener Container fuer eine einzelne
zusammenhaengende Einheit. Mit dem `flex-N`-Raster kombinieren fuer
responsive Kartenwände.

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
      <h3 class="card-title">Leichtgewichtig</h3>
      <p>39,9&nbsp;KB minifiziert, 7,5&nbsp;KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Barrierefrei</h3>
      <p>WCAG&nbsp;2.2-konform ab Werk.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modular</h3>
      <p>Cascade-Layer fuer einfaches Ueberschreiben.</p>
    </div>
  </article>
</section>

> **Hinweis zur Barrierefreiheit.** Jede Karte in ein semantisches
> Landmark einbetten (`<article>`, `<section>`) und den Inhalt mit einer
> Ueberschrift (`<h3>`) beginnen. Screenreader-Nutzende koennen die
> Kartenliste dann als vollwertige navigierbare Bereiche durchlaufen.

<hr class="hr-text" data-content="Formulare">

<h2 id="forms">Formulare</h2>

Eingabefelder, Labels und Gruppierungen zur Erfassung von Benutzerdaten.

<h3 id="form-fields">Formularfelder</h3>

Labels, Textfelder, Textbereiche, Fieldsets und Legenden — alle
einheitlich zum restlichen Designsystem dimensioniert.

```html
<form>
  <label for="name">Name</label>
  <input id="name" type="text" required>

  <label for="email">E-Mail</label>
  <input id="email" type="email" required class="input-primary">

  <label for="msg">Nachricht</label>
  <textarea id="msg" rows="4"></textarea>

  <button type="submit" class="button primary">Senden</button>
</form>
```

<section aria-labelledby="form-fields">
<form>
  <label for="demo-name">Name</label>
  <input id="demo-name" type="text">

  <label for="demo-email">E-Mail</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">Nachricht</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">Senden (Demo)</button></p>
</form>
</section>

> **Hinweis zur Barrierefreiheit.** Jedes Eingabefeld muss ein
> programmatisch verknuepftes `<label for="...">` haben. Zusammengehoerige
> Steuerelemente in ein `<fieldset>` mit einer `<legend>` einbetten.
> Pflichtfelder mit `required` (und einem sichtbaren Sternchen im
> Label-Text) kennzeichnen.

<hr class="hr-text" data-content="Layout">

<h2 id="layout">Layout</h2>

Strukturelle Grundbausteine — Raster, Container, Kopfzeile — die das
gesamte Seitenlayout bilden.

<h3 id="grid">Raster</h3>

Ein responsives `flex-N`-Raster (1 bis 12 Spalten), basierend auf Flexbox.
Der `.row`-Elterncontainer fuegt Abstaende ein und umbricht automatisch.

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
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Haelfte</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Haelfte</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Drittel</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Drittel</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Drittel</div>
</div>
</section>

> **Hinweis zur Barrierefreiheit.** Die visuelle Reihenfolge sollte der
> DOM-Reihenfolge entsprechen. Zeilen nicht mit
> `flex-direction: row-reverse` oder `order:` umordnen — Screenreader
> und Tastaturnutzende folgen dem Quelltext, nicht der Darstellung.

<h3 id="header">Kopfzeile &amp; Hamburger-Navigation</h3>

Eine vollstaendige, rein CSS-basierte Kopfzeile mit responsivem
Hamburger-Toggle. **Kein JavaScript.** Den folgenden Ausschnitt in eine
leere HTML-Seite kopieren, die bereits `skeletonic.min.css` laedt — das
Menue klappt sich korrekt ein, aus und haelt den Fokus selbststaendig.

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
  <a class="sk-brand" href="#">Marke</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Navigation umschalten">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Startseite</a></li>
    <li><a href="#">Dokumentation</a></li>
    <li><a href="#">Komponenten</a></li>
    <li><a href="#">Ueber uns</a></li>
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
  <a class="sk-brand" href="#">Marke</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Navigation umschalten">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Startseite</a></li>
    <li><a href="#">Dokumentation</a></li>
    <li><a href="#">Komponenten</a></li>
    <li><a href="#">Ueber uns</a></li>
  </ul>
</header>
</section>

> **Hinweis zur Barrierefreiheit.** Die versteckte Checkbox bleibt in der
> Tab-Reihenfolge, damit Tastaturnutzende das Menue mit `Leertaste` oder
> `Eingabetaste` oeffnen koennen. Das `<label>` traegt `aria-hidden`,
> da die Checkbox selbst die barrierefreie Namensquelle ist. Das
> Browserfenster unter 640&nbsp;px verkleinern, um den Hamburger-Toggle
> in Aktion zu sehen.

[Alle Hinweise zur Barrierefreiheit ansehen &rarr;](/de/barrierefreiheit/) · [Farbpaletten durchstoebern &rarr;](/de/paletten/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Skeletonic-Stylus-Komponenten",
  "description": "Alle Komponenten aus Skeletonic Stylus v1.1.7.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Schaltflaechen",
      "url": "https://skeletonic.io/de/komponenten/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Badges",
      "url": "https://skeletonic.io/de/komponenten/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Hinweise",
      "url": "https://skeletonic.io/de/komponenten/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Karten",
      "url": "https://skeletonic.io/de/komponenten/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Formularfelder",
      "url": "https://skeletonic.io/de/komponenten/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Raster",
      "url": "https://skeletonic.io/de/komponenten/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Kopfzeile & Hamburger-Navigation",
      "url": "https://skeletonic.io/de/komponenten/#header"
    }
  ]
}
</script>
