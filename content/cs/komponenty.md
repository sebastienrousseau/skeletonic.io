---
title: "Komponenty — Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Zive HTML priklady vsech komponent Skeletonic Stylus — seskupene, ukotvene a vykreslovane presne tim stylesheetem, ktery je zde prezentovan."
layout: page
permalink: https://skeletonic.io/cs/komponenty/
date: 2026-04-08
author: Sebastien Rousseau
language: cs
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic komponenty, tlacitka, karty, formulare, upozorneni, stitky, zahlavi, navigace, css hamburger menu"
---

Kazdy priklad nize je **vykreslovany presne tim stylesheetem, ktery je
zde prezentovan**. Zadny preprocesor. Zadny JavaScript. Zadne dalsi
zavislosti. Zkopirujte jakykoliv ukazku do prazdneho HTML souboru
a funguje.

<nav aria-label="Na teto strance">
<p><strong>Na teto strance</strong></p>
<ul>
<li><strong>Vstupy</strong> — <a href="#buttons">Tlacitka</a> · <a href="#badges">Stitky</a></li>
<li><strong>Zpetna vazba</strong> — <a href="#alerts">Upozorneni</a></li>
<li><strong>Povrchy</strong> — <a href="#cards">Karty</a></li>
<li><strong>Formulare</strong> — <a href="#form-fields">Formularova pole</a></li>
<li><strong>Rozvrzeni</strong> — <a href="#grid">Mrizka</a> · <a href="#header">Zahlavi &amp; hamburger navigace</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="Vstupy">

<h2 id="inputs">Vstupy</h2>

Interaktivni elementy, na ktere navstevnik klika, tapa nebo je fokusuje
pro ovladani stranky.

<h3 id="buttons">Tlacitka</h3>

Semanticky, temovatelny spoustec akce. Plne a obrysove varianty nabizeji
sest znackovych barev.

```html
<a href="#" class="button primary">Primary</a>
<a href="#" class="button secondary">Secondary</a>
<a href="#" class="button tertiary">Tertiary</a>
```

<section aria-labelledby="buttons">
<p>
  <a href="#" class="button primary">Primarni</a>
  <a href="#" class="button secondary">Sekundarni</a>
  <a href="#" class="button tertiary">Terciarni</a>
</p>
</section>

Obrysove varianty:

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">Outline</a>
  <a href="#" class="button secondary-outline">Outline</a>
</p>

> **Poznamka k pristupnosti.** Kazda `.button` varianta ma
> `:focus-visible` ohraniceni a **minimalni dotykovou plochu
> 24×24&nbsp;px** (WCAG&nbsp;2.2 SC&nbsp;2.5.8). Pouzijte
> `<button type="button">` pro akce na strance a `<a href>` pouze
> pro navigaci.

<h3 id="badges">Stitky</h3>

Kompaktni popisek pro stav, pocet nebo kategorii. Velikost pisma je
fixni, aby se stitky zarovnaly s okolnim textem.

```html
<span class="badge">Default</span>
<span class="badge primary">Primary</span>
<span class="badge success">Success</span>
<span class="badge warning">Warning</span>
<span class="badge danger">Danger</span>
```

<section aria-labelledby="badges">
<p>
  <span class="badge">Vychozi</span>
  <span class="badge primary">Primarni</span>
  <span class="badge success">Uspech</span>
  <span class="badge warning">Varovani</span>
  <span class="badge danger">Nebezpeci</span>
</p>
</section>

> **Poznamka k pristupnosti.** Stitky jsou ve vychozim stavu dekorativni.
> Pokud stitek nese jediny signal (napr. pocet neprectenych zprav),
> obalte jej vizualne skrytym pomocnikem:
> `<span class="visually-hidden">3 neprectene zpravy</span>`.

<hr class="hr-text" data-content="Zpetna vazba">

<h2 id="feedback">Zpetna vazba</h2>

Povrchy, ktere navstevnika informuji, ze se neco stalo — nebo se brzy
stane.

<h3 id="alerts">Upozorneni</h3>

Stavove zpravy se semantickym vyznamem. **Ve v1.1.7 je kazda varianta
explicitne pojmenovana** pod `.alert-{primary,secondary,info,success,warning,error}`,
aby trida varianty nekolidovala se stavovymi tridami jinde na strance.

```html
<div class="alert alert-primary" role="alert">
  <strong>Pozor.</strong> Toto je primarni upozorneni.
</div>
<div class="alert alert-success" role="status">
  <strong>Ulozeno.</strong> Vase zmeny byly ulozeny.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Opatrne.</strong> Tato akce ovlivnuje sdileny stav.
</div>
<div class="alert alert-error" role="alert">
  <strong>Chyba.</strong> Formular se nepodarilo ulozit.
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>Pozor.</strong> Toto je primarni upozorneni.
</div>

<div class="alert alert-success" role="status">
<strong>Ulozeno.</strong> Vase zmeny byly ulozeny.
</div>

<div class="alert alert-warning" role="alert">
<strong>Opatrne.</strong> Tato akce ovlivnuje sdileny stav.
</div>

<div class="alert alert-error" role="alert">
<strong>Chyba.</strong> Formular se nepodarilo ulozit.
</div>
</section>

> **Poznamka k pristupnosti.** Pouzijte `role="alert"` pro zpravy
> vyzadujici okamzitou pozornost (chyby, varovani) a `role="status"`
> pro nenarocne potvrzeni. Oba zpristupni zpravu pro asistivni
> technologie v okamziku jejiho zobrazeni.

<hr class="hr-text" data-content="Povrchy">

<h2 id="surface">Povrchy</h2>

Kontejnery, ktere rami a seskupuji souvisejici obsah.

<h3 id="cards">Karty</h3>

Oramovany kontejner s odsazenim pro jednu soudrznou jednotku. Kombinujte
s mrizkou `flex-N` pro responzivni steny karet.

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
      <h3 class="card-title">Lehke</h3>
      <p>39,9&nbsp;KB minifikovano, 7,5&nbsp;KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Pristupne</h3>
      <p>WCAG&nbsp;2.2 soulad hned po instalaci.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modularni</h3>
      <p>Kaskadove vrstvy pro snadne prepsani.</p>
    </div>
  </article>
</section>

> **Poznamka k pristupnosti.** Kazdou kartu obalte do semantickeho
> landmarku (`<article>`, `<section>`) a obsah zacnete nadpisem
> (`<h3>`). Uzivatele screen readeru pak mohou procházet seznam
> karet jako plnohodnotne navigovatelne oblasti.

<hr class="hr-text" data-content="Formulare">

<h2 id="forms">Formulare</h2>

Vstupy, popisky a seskupeni pro sber uzivatelsych dat.

<h3 id="form-fields">Formularova pole</h3>

Popisky, textove vstupy, textove oblasti, fieldsety a legendy — vse
dimenzovane konzistentne se zbytkem navrhoveho systemu.

```html
<form>
  <label for="name">Jmeno</label>
  <input id="name" type="text" required>

  <label for="email">E-mail</label>
  <input id="email" type="email" required class="input-primary">

  <label for="msg">Zprava</label>
  <textarea id="msg" rows="4"></textarea>

  <button type="submit" class="button primary">Odeslat</button>
</form>
```

<section aria-labelledby="form-fields">
<form>
  <label for="demo-name">Jmeno</label>
  <input id="demo-name" type="text">

  <label for="demo-email">E-mail</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">Zprava</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">Odeslat (demo)</button></p>
</form>
</section>

> **Poznamka k pristupnosti.** Kazdy vstup musi mit programove
> propojeny `<label for="…">`. Souvisejici ovladaci prvky seskupte
> do `<fieldset>` s `<legend>`. Povinná pole oznacte atributem
> `required` (a viditelnou hvezdickou v textu popisku).

<hr class="hr-text" data-content="Rozvrzeni">

<h2 id="layout">Rozvrzeni</h2>

Strukturalni primitivy — mrizka, kontejner, zahlavi — ktere tvorí
celkovy ramec stranky.

<h3 id="grid">Mrizka</h3>

Responzivni mrizka `flex-N` (1 az 12 sloupcu) postavena na flexboxu.
Rodicovsky `.row` automaticky pridava mezery a zalamuje.

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
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Polovina</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Polovina</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Tretina</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Tretina</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Tretina</div>
</div>
</section>

> **Poznamka k pristupnosti.** Vizualni poradi by melo odpovidat
> poradi v DOM. Neprehazujte radky pomoci `flex-direction: row-reverse`
> nebo `order:` — screen readery a uzivatele klavesnice nasleduji
> zdrojovy kod, ne vizualni zobrazeni.

<h3 id="header">Zahlavi &amp; hamburger navigace</h3>

Kompletni zahlavi ciste v CSS s responzivnim hamburger prepinacem. **Zadny
JavaScript.** Zkopirujte nasledujici ukazku do prazdne HTML stranky, ktera
jiz nacita `skeletonic.min.css` — menu se spravne sklada, rozklada
a spravuje fokus samo.

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
  <a class="sk-brand" href="#">Znacka</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Prepnout navigaci">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Domov</a></li>
    <li><a href="#">Dokumentace</a></li>
    <li><a href="#">Komponenty</a></li>
    <li><a href="#">O projektu</a></li>
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
  <a class="sk-brand" href="#">Znacka</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Prepnout navigaci">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Domov</a></li>
    <li><a href="#">Dokumentace</a></li>
    <li><a href="#">Komponenty</a></li>
    <li><a href="#">O projektu</a></li>
  </ul>
</header>
</section>

> **Poznamka k pristupnosti.** Skryty checkbox zustava v tab poradi,
> aby uzivatele klavesnice mohli otevrít menu mezernikem nebo Enterem.
> `<label>` nese `aria-hidden`, protoze checkbox sam je zdrojem
> pristupneho nazvu. Zmensete okno prohlizece pod 640&nbsp;px, abyste
> videli hamburger prepinac v akci.

[Poznamky k pristupnosti →](/cs/pristupnost/) · [Prohledejte palety →](/cs/palety/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Komponenty Skeletonic Stylus",
  "description": "Vsechny komponenty dodavane ve Skeletonic Stylus v1.1.7.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Tlacitka",
      "url": "https://skeletonic.io/cs/komponenty/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Stitky",
      "url": "https://skeletonic.io/cs/komponenty/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Upozorneni",
      "url": "https://skeletonic.io/cs/komponenty/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Karty",
      "url": "https://skeletonic.io/cs/komponenty/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Formularova pole",
      "url": "https://skeletonic.io/cs/komponenty/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Mrizka",
      "url": "https://skeletonic.io/cs/komponenty/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Zahlavi a hamburger navigace",
      "url": "https://skeletonic.io/cs/komponenty/#header"
    }
  ]
}
</script>
