---
title: "Componente"
name: "Skeletonic Stylus"
description: "Exemple HTML live pentru fiecare componentă Skeletonic Stylus, grupate, ancorate și randate cu stylesheet-ul demonstrat."
layout: page
permalink: https://skeletonic.io/ro/componente/
date: 2026-04-08
author: Sebastien Rousseau
language: ro
theme_color: "hsl(210, 100%, 42%)"
keywords: "componente skeletonic, butoane, carduri, formulare, alerte, badge-uri, header, navbar, hamburger css"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

Fiecare exemplu de mai jos este **randat cu stylesheet-ul demonstrat**.
Fără preprocesor. Fără JavaScript. Fără dependențe suplimentare. Copiază
orice fragment într-un fișier HTML gol și funcționează.

<nav aria-label="Pe această pagină">
<p><strong>Pe această pagină</strong></p>
<ul>
<li><strong>Intrări</strong> — <a href="#buttons">Butoane</a> · <a href="#badges">Badge-uri</a></li>
<li><strong>Feedback</strong> — <a href="#alerts">Alerte</a></li>
<li><strong>Suprafață</strong> — <a href="#cards">Carduri</a></li>
<li><strong>Formulare</strong> — <a href="#form-fields">Câmpuri de formular</a></li>
<li><strong>Layout</strong> — <a href="#grid">Grid</a> · <a href="#header">Header &amp; navigare hamburger</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="Intrări">

<h2 id="inputs">Intrări</h2>

Elemente interactive pe care vizitatorul le apasă, le atinge sau le focalizează pentru a interacționa cu pagina.

<h3 id="buttons">Butoane</h3>

Un declanșator de acțiune semantic și personalizabil. Variantele solide și outline au câte șase culori de brand fiecare.

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

Variante outline:

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">Outline</a>
  <a href="#" class="button secondary-outline">Outline</a>
</p>

> **Notă de accesibilitate.** Fiecare variantă `.button` include un
> inel `:focus-visible` și o **zonă minimă de atingere de 24×24&nbsp;px**
> (WCAG&nbsp;2.2 SC&nbsp;2.5.8). Folosește `<button type="button">` pentru
> acțiuni în pagină și `<a href>` doar pentru navigare.

<h3 id="badges">Badge-uri</h3>

O etichetă compactă pentru status, numărătoare sau categorie. Dimensiunea textului este fixă, astfel încât badge-urile se aliniază cu textul din jur.

```html
<span class="badge">Implicit</span>
<span class="badge primary">Primary</span>
<span class="badge success">Succes</span>
<span class="badge warning">Atenție</span>
<span class="badge danger">Pericol</span>
```

<section aria-labelledby="badges">
<p>
  <span class="badge">Implicit</span>
  <span class="badge primary">Primary</span>
  <span class="badge success">Succes</span>
  <span class="badge warning">Atenție</span>
  <span class="badge danger">Pericol</span>
</p>
</section>

> **Notă de accesibilitate.** Badge-urile sunt decorative în mod implicit.
> Când badge-ul transmite singurul semnal (de ex. un contor de necitite),
> înfășoară-l într-un helper ascuns vizual:
> `<span class="visually-hidden">3 mesaje necitite</span>`.

<hr class="hr-text" data-content="Feedback">

<h2 id="feedback">Feedback</h2>

Suprafețe care informează vizitatorul că ceva s-a întâmplat — sau urmează să se întâmple.

<h3 id="alerts">Alerte</h3>

Mesaje de status cu intenție semantică. **În v2.0.0 fiecare variantă este
explicit prefixată** sub `.alert-{primary,secondary,info,success,warning,error}`,
astfel încât clasa de variantă nu poate intra în conflict cu clasele de stare de pe pagină.

```html
<div class="alert alert-primary" role="alert">
  <strong>Atenție.</strong> Aceasta este o alertă primară.
</div>
<div class="alert alert-success" role="status">
  <strong>Salvat.</strong> Modificările tale au fost păstrate.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Grijă.</strong> Această acțiune afectează starea partajată.
</div>
<div class="alert alert-error" role="alert">
  <strong>Eroare.</strong> Formularul nu a putut fi salvat.
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>Atenție.</strong> Aceasta este o alertă primară.
</div>

<div class="alert alert-success" role="status">
<strong>Salvat.</strong> Modificările tale au fost păstrate.
</div>

<div class="alert alert-warning" role="alert">
<strong>Grijă.</strong> Această acțiune afectează starea partajată.
</div>

<div class="alert alert-error" role="alert">
<strong>Eroare.</strong> Formularul nu a putut fi salvat.
</div>
</section>

> **Notă de accesibilitate.** Folosește `role="alert"` pentru mesajele
> care necesită atenție imediată (erori, avertismente) și `role="status"`
> pentru confirmări neurgente. Ambele expun mesajul către tehnologiile
> de asistență în momentul în care apare.

<hr class="hr-text" data-content="Suprafață">

<h2 id="surface">Suprafață</h2>

Containere care încadrează și grupează conținut asociat.

<h3 id="cards">Carduri</h3>

Un container bordat și cu padding pentru o singură unitate coerentă.
Combină-l cu grid-ul `flex-N` pentru ziduri de carduri responsive.

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Ușoară</h3>
      <p>45,7 KB minificat, 8,3 KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Accesibilă</h3>
      <p>Conformă WCAG 2.2 din start.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modulară</h3>
      <p>Cascade-layered pentru suprascrierea ușoară.</p>
    </div>
  </article>
</section>
```

<section class="row" aria-labelledby="cards">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Ușoară</h3>
      <p>45,7&nbsp;KB minificat, 8,3&nbsp;KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Accesibilă</h3>
      <p>Conformă WCAG&nbsp;2.2 din start.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modulară</h3>
      <p>Cascade-layered pentru suprascrierea ușoară.</p>
    </div>
  </article>
</section>

> **Notă de accesibilitate.** Înfășoară fiecare card într-un landmark
> semantic (`<article>`, `<section>`) și începe conținutul cu un heading
> (`<h3>`). Utilizatorii de screen reader pot parcurge lista de carduri
> ca regiuni navigabile de primă clasă.

<hr class="hr-text" data-content="Formulare">

<h2 id="forms">Formulare</h2>

Intrări, etichete și grupări pentru colectarea datelor de la utilizatori.

<h3 id="form-fields">Câmpuri de formular</h3>

Etichete, câmpuri text, textarea-uri, fieldset-uri și legend-uri — toate dimensionate consistent cu restul sistemului de design.

```html
<form>
  <label for="name">Nume</label>
  <input id="name" type="text" required>

  <label for="email">Email</label>
  <input id="email" type="email" required class="input-primary">

  <label for="msg">Mesaj</label>
  <textarea id="msg" rows="4"></textarea>

  <button type="submit" class="button primary">Trimite</button>
</form>
```

<section aria-labelledby="form-fields">
<form>
  <label for="demo-name">Nume</label>
  <input id="demo-name" type="text">

  <label for="demo-email">Email</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">Mesaj</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">Trimite (demo)</button></p>
</form>
</section>

> **Notă de accesibilitate.** Fiecare intrare trebuie să aibă un
> `<label for="…">` asociat programatic. Grupează controalele asociate
> într-un `<fieldset>` cu un `<legend>`. Marchează câmpurile obligatorii
> cu `required` (și un asterisc vizibil în textul etichetei).

<hr class="hr-text" data-content="Layout">

<h2 id="layout">Layout</h2>

Primitive structurale — grid, container, header — care încadrează
întreaga pagină.

<h3 id="grid">Grid</h3>

Un grid responsive `flex-N` (de la 1 la 12 coloane) bazat pe flexbox.
Părintele `.row` adaugă gap-urile și face wrap automat.

```html
<div class="row">
  <div class="flex-6">Jumătate</div>
  <div class="flex-6">Jumătate</div>
</div>
<div class="row">
  <div class="flex-4">Treime</div>
  <div class="flex-4">Treime</div>
  <div class="flex-4">Treime</div>
</div>
```

<section aria-labelledby="grid">
<div style="display:flex;flex-wrap:wrap;gap:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Jumătate</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Jumătate</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Treime</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Treime</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Treime</div>
</div>
</section>

> **Notă de accesibilitate.** Ordinea vizuală trebuie să corespundă cu
> ordinea DOM. Evită reordonarea rândurilor cu `flex-direction: row-reverse`
> sau `order:` — screen readere și utilizatorii de tastatură urmează
> sursa, nu afișarea vizuală.

<h3 id="header">Header &amp; navigare hamburger</h3>

Un header complet doar CSS cu un toggle hamburger responsive. **Zero
JavaScript.** Copiază fragmentul de mai jos într-o pagină HTML nouă care
încarcă deja `skeletonic.min.css` și meniul se prăbușește, se expandează
și gestionează focusul corect de la sine.

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
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Comutare navigare">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Acasă</a></li>
    <li><a href="#">Documentație</a></li>
    <li><a href="#">Componente</a></li>
    <li><a href="#">Despre</a></li>
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
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Comutare navigare">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Acasă</a></li>
    <li><a href="#">Documentație</a></li>
    <li><a href="#">Componente</a></li>
    <li><a href="#">Despre</a></li>
  </ul>
</header>
</section>

> **Notă de accesibilitate.** Checkbox-ul ascuns rămâne în ordinea de
> tabulare, astfel încât utilizatorii de tastatură pot deschide meniul
> cu `Space` sau `Enter`. `<label>` poartă `aria-hidden` deoarece
> checkbox-ul în sine este sursa numelui accesibil. Redimensionează
> fereastra sub 640&nbsp;px pentru a vedea toggle-ul hamburger în acțiune.

[Vezi notele complete de accesibilitate →](/ro/accesibilitate/) · [Explorează paletele →](/ro/palete/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Componente Skeletonic Stylus",
  "description": "Fiecare componentă livrată în Skeletonic Stylus v2.0.0.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Butoane",
      "url": "https://skeletonic.io/ro/componente/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Badge-uri",
      "url": "https://skeletonic.io/ro/componente/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Alerte",
      "url": "https://skeletonic.io/ro/componente/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Carduri",
      "url": "https://skeletonic.io/ro/componente/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Câmpuri de formular",
      "url": "https://skeletonic.io/ro/componente/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Grid",
      "url": "https://skeletonic.io/ro/componente/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Header și navigare hamburger",
      "url": "https://skeletonic.io/ro/componente/#header"
    }
  ]
}
</script>
