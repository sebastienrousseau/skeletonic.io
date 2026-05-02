---
title: "Komponenty"
name: "Skeletonic Stylus"
description: "Przyklady HTML na zywo kazdego komponentu Skeletonic Stylus, pogrupowane, zakotwiczone i renderowane z tym samym arkuszem stylow."
layout: page
permalink: https://skeletonic.io/pl/komponenty/
date: 2026-04-08
author: Sebastien Rousseau
language: pl
theme_color: "hsl(210, 100%, 42%)"
keywords: "komponenty skeletonic, przyciski, karty, formularze, alerty, odznaki, naglowek, nawigacja, hamburger css"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

Kazdy przyklad ponizej jest **renderowany z tym samym arkuszem stylow, ktory jest prezentowany**. Bez preprocesora. Bez JavaScript. Bez dodatkowych zaleznosci. Skopiuj dowolny fragment do nowego pliku HTML i zadziala.

<nav aria-label="Na tej stronie">
<p><strong>Na tej stronie</strong></p>
<ul>
<li><strong>Dane wejsciowe</strong> — <a href="#buttons">Przyciski</a> · <a href="#badges">Odznaki</a></li>
<li><strong>Informacje zwrotne</strong> — <a href="#alerts">Alerty</a></li>
<li><strong>Powierzchnia</strong> — <a href="#cards">Karty</a></li>
<li><strong>Formularze</strong> — <a href="#form-fields">Pola formularzy</a></li>
<li><strong>Uklad</strong> — <a href="#grid">Siatka</a> · <a href="#header">Naglowek &amp; nawigacja hamburger</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="Dane wejsciowe">

<h2 id="inputs">Dane wejsciowe</h2>

Elementy interaktywne, ktore odwiedzajacy klika, dotyka lub fokusuje, aby sterowac strona.

<h3 id="buttons">Przyciski</h3>

Semantyczny, tematowalny wyzwalacz akcji. Warianty pelne i konturowe w szesciu kolorach marki.

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

Warianty konturowe:

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">Outline</a>
  <a href="#" class="button secondary-outline">Outline</a>
</p>

> **Uwaga dot. dostepnosci.** Kazdy wariant `.button` posiada pierscien
> `:focus-visible` i **minimalny obszar dotyku 24×24&nbsp;px**
> (WCAG&nbsp;2.2 SC&nbsp;2.5.8). Uzywaj `<button type="button">` do
> akcji na stronie, a `<a href>` tylko do nawigacji.

<h3 id="badges">Odznaki</h3>

Kompaktowa etykieta dla statusu, licznika lub kategorii. Rozmiar tekstu jest staly, wiec odznaki wyrownuja sie z otaczajacym tekstem.

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

> **Uwaga dot. dostepnosci.** Odznaki sa domyslnie dekoracyjne. Gdy
> odznaka niesie jedyny sygnal (np. licznik nieprzeczytanych), opakuj ja
> w helper ukryty wizualnie: `<span class="visually-hidden">3 nieprzeczytane
> wiadomosci</span>`.

<hr class="hr-text" data-content="Informacje zwrotne">

<h2 id="feedback">Informacje zwrotne</h2>

Powierzchnie informujace odwiedzajacego, ze cos sie wydarzylo — lub ma sie wydarzyc.

<h3 id="alerts">Alerty</h3>

Wiadomosci statusowe z semantycznym przeznaczeniem. **W v2.0.0 kazdy wariant jest jawnie zamkniety w przestrzeni nazw** `.alert-{primary,secondary,info,success,warning,error}`, dzieki czemu klasa wariantu nie koliduje z klasami stanu w innych czesciach strony.

```html
<div class="alert alert-primary" role="alert">
  <strong>Uwaga.</strong> To jest alert glowny.
</div>
<div class="alert alert-success" role="status">
  <strong>Zapisano.</strong> Twoje zmiany zostaly utrwalone.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Ostroznosc.</strong> Ta akcja wplywa na wspoldzielony stan.
</div>
<div class="alert alert-error" role="alert">
  <strong>Blad.</strong> Nie udalo sie zapisac formularza.
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>Uwaga.</strong> To jest alert glowny.
</div>

<div class="alert alert-success" role="status">
<strong>Zapisano.</strong> Twoje zmiany zostaly utrwalone.
</div>

<div class="alert alert-warning" role="alert">
<strong>Ostroznosc.</strong> Ta akcja wplywa na wspoldzielony stan.
</div>

<div class="alert alert-error" role="alert">
<strong>Blad.</strong> Nie udalo sie zapisac formularza.
</div>
</section>

> **Uwaga dot. dostepnosci.** Uzywaj `role="alert"` dla wiadomosci wymagajacych
> natychmiastowej uwagi (bledy, ostrzezenia) i `role="status"` dla
> potwierdzien, ktore nie sa pilne. Oba udostepniaja wiadomosc technologiom
> asystujacym w momencie jej pojawienia sie.

<hr class="hr-text" data-content="Powierzchnia">

<h2 id="surface">Powierzchnia</h2>

Kontenery ramujace i grupujace powiazana zawartosc.

<h3 id="cards">Karty</h3>

Obramowany, wypelniony kontener dla pojedynczej spojnej jednostki. Polacz z siatka `flex-N` dla responsywnych scian kart.

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Lekki</h3>
      <p>45,7 KB zminifikowany, 8,3 KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Dostepny</h3>
      <p>Zgodny z WCAG 2.2 od razu po instalacji.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modularny</h3>
      <p>Warstwy kaskadowe ulatwiaja nadpisywanie.</p>
    </div>
  </article>
</section>
```

<section class="row" aria-labelledby="cards">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Lekki</h3>
      <p>45,7&nbsp;KB zminifikowany, 8,3&nbsp;KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Dostepny</h3>
      <p>Zgodny z WCAG&nbsp;2.2 od razu po instalacji.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modularny</h3>
      <p>Warstwy kaskadowe ulatwiaja nadpisywanie.</p>
    </div>
  </article>
</section>

> **Uwaga dot. dostepnosci.** Opakuj kazda karte w semantyczny element
> (`<article>`, `<section>`) i rozpocznij jej zawartosc od naglowka
> (`<h3>`). Uzytkownicy czytnikow ekranu moga wtedy nawigowac po liscie
> kart jako pelnowartosc regiony.

<hr class="hr-text" data-content="Formularze">

<h2 id="forms">Formularze</h2>

Pola wejsciowe, etykiety i grupowania do zbierania danych uzytkownikow.

<h3 id="form-fields">Pola formularzy</h3>

Etykiety, pola tekstowe, textareas, fieldsety i legendy — wszystko spatne rozmiarowo z reszta systemu projektowego.

```html
<form>
  <label for="name">Imie</label>
  <input id="name" type="text" required>

  <label for="email">Email</label>
  <input id="email" type="email" required class="input-primary">

  <label for="msg">Wiadomosc</label>
  <textarea id="msg" rows="4"></textarea>

  <button type="submit" class="button primary">Wyslij</button>
</form>
```

<section aria-labelledby="form-fields">
<div role="group" aria-label="Form fields demo">
  <label for="demo-name">Imie</label>
  <input id="demo-name" type="text">

  <label for="demo-email">Email</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">Wiadomosc</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">Wyslij (demo)</button></p>
</div>
</section>

> **Uwaga dot. dostepnosci.** Kazde pole musi miec programowo powiazana
> etykiete `<label for="…">`. Grupuj powiazane kontrolki wewnatrz
> `<fieldset>` z `<legend>`. Oznaczaj wymagane pola atrybutem
> `required` (i widoczna gwiazdka w tekscie etykiety).

<hr class="hr-text" data-content="Uklad">

<h2 id="layout">Uklad</h2>

Prymitywy strukturalne — siatka, kontener, naglowek — ktore ramuja cala strone.

<h3 id="grid">Siatka</h3>

Responsywna siatka `flex-N` (1 → 12 kolumn) zbudowana na flexbox. Rodzic `.row` automatycznie dodaje odstepy i zawijanie.

```html
<div class="row">
  <div class="flex-6">Polowa</div>
  <div class="flex-6">Polowa</div>
</div>
<div class="row">
  <div class="flex-4">Trzecia czesc</div>
  <div class="flex-4">Trzecia czesc</div>
  <div class="flex-4">Trzecia czesc</div>
</div>
```

<section aria-labelledby="grid">
<div style="display:flex;flex-wrap:wrap;gap:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Polowa</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Polowa</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Trzecia czesc</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Trzecia czesc</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Trzecia czesc</div>
</div>
</section>

> **Uwaga dot. dostepnosci.** Kolejnosc wizualna powinna odpowiadac kolejnosci w DOM. Unikaj
> zmiany kolejnosci wierszy za pomoca `flex-direction: row-reverse` lub `order:` —
> czytniki ekranu i uzytkownicy klawiatury podazaja za zrodlem, nie za wyswietlaniem.

<h3 id="header">Naglowek &amp; nawigacja hamburger</h3>

Kompletny naglowek oparty wylacznie na CSS z responsywnym przyciskiem hamburger. **Zero JavaScript.** Skopiuj ponizszy fragment do nowego pliku HTML, ktory juz laduje `skeletonic.min.css`, a menu bedzie sie zwijac, rozwijac i prawidlowo przechwytywac fokus.

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
  <a class="sk-brand" href="#">Marka</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Przelacz nawigacje">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Start</a></li>
    <li><a href="#">Dokumentacja</a></li>
    <li><a href="#">Komponenty</a></li>
    <li><a href="#">O projekcie</a></li>
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
  <a class="sk-brand" href="#">Marka</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Przelacz nawigacje">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Start</a></li>
    <li><a href="#">Dokumentacja</a></li>
    <li><a href="#">Komponenty</a></li>
    <li><a href="#">O projekcie</a></li>
  </ul>
</header>
</section>

> **Uwaga dot. dostepnosci.** Ukryty checkbox pozostaje w kolejnosci tabulacji,
> wiec uzytkownicy klawiatury moga otworzyc menu za pomoca `Space` lub `Enter`. Element
> `<label>` posiada `aria-hidden`, poniewaz sam checkbox jest zrodlem
> dostepnej nazwy. Zmien rozmiar okna ponizej 640&nbsp;px, aby zobaczyc
> jak przycisk hamburger przejmuje kontrole.

[Zobacz pelne notatki a11y →](/pl/dostepnosc/) · [Przegladaj palety →](/pl/palety/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Komponenty Skeletonic Stylus",
  "description": "Kazdy komponent dostarczany w Skeletonic Stylus v2.0.0.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Przyciski",
      "url": "https://skeletonic.io/pl/komponenty/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Odznaki",
      "url": "https://skeletonic.io/pl/komponenty/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Alerty",
      "url": "https://skeletonic.io/pl/komponenty/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Karty",
      "url": "https://skeletonic.io/pl/komponenty/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Pola formularzy",
      "url": "https://skeletonic.io/pl/komponenty/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Siatka",
      "url": "https://skeletonic.io/pl/komponenty/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Naglowek i nawigacja hamburger",
      "url": "https://skeletonic.io/pl/komponenty/#header"
    }
  ]
}
</script>
