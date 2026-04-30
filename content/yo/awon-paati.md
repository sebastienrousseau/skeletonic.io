---
title: "Awọn Paati"
name: "Skeletonic Stylus"
description: "Awọn apẹẹrẹ HTML laaye ti gbogbo paati Skeletonic Stylus, ti a ṣe akojọpọ, ti a fi idi mulẹ, ti a si ṣe pẹlu iwe-aṣa kanna ti a n ṣafihan."
language: yo
layout: page
permalink: https://skeletonic.io/yo/awon-paati/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "awọn paati skeletonic, awọn bọtini, awọn kaadi, awọn fọọmu, awọn itaniji, awọn aami, akọle, navbar, hamburger css nikan"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

Gbogbo apẹẹrẹ ni isalẹ ni a **ṣe pẹlu iwe-aṣa kanna ti a n ṣafihan**.
Ko si preprocessor. Ko si JavaScript. Ko si awọn igbarale afikun. Daakọ
apakan eyikeyi sinu faili HTML tuntun ati pe o ṣiṣẹ.

<nav aria-label="Lori oju-iwe yii">
<p><strong>Lori oju-iwe yii</strong></p>
<ul>
<li><strong>Awọn igbewọle</strong> — <a href="#buttons">Awọn bọtini</a> · <a href="#badges">Awọn aami</a></li>
<li><strong>Esi</strong> — <a href="#alerts">Awọn itaniji</a></li>
<li><strong>Oju</strong> — <a href="#cards">Awọn kaadi</a></li>
<li><strong>Awọn fọọmu</strong> — <a href="#form-fields">Awọn aaye fọọmu</a></li>
<li><strong>Eto</strong> — <a href="#grid">Grid</a> · <a href="#header">Akọle &amp; lilọ kiri hamburger</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="Awọn igbewọle">

<h2 id="inputs">Awọn igbewọle</h2>

Awọn ẹya ibaraṣepọ ti alejo tẹ, fọwọkan, tabi dojukọ lati ṣe iwakọ
oju-iwe naa.

<h3 id="buttons">Awọn bọtini</h3>

Olupilẹṣẹ iṣe ti itumọ, ti a le ṣe aṣa. Awọn ẹya to lagbara ati
outline fi awọ ami iyasọtọ mẹfa kọọkan ranṣẹ.

```html
<a href="#" class="button primary">Primary</a>
<a href="#" class="button secondary">Secondary</a>
<a href="#" class="button tertiary">Tertiary</a>
```

<section aria-labelledby="buttons">
<p>
  <a href="#" class="button primary">Akọkọ</a>
  <a href="#" class="button secondary">Keji</a>
  <a href="#" class="button tertiary">Kẹta</a>
</p>
</section>

Awọn ẹya outline:

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">Outline</a>
  <a href="#" class="button secondary-outline">Outline</a>
</p>

> **Akiyesi irayẹ-si.** Gbogbo ẹya `.button` wa pẹlu oruka
> `:focus-visible` ati **agbegbe tẹ 24×24&nbsp;px ti o kere julọ**
> (WCAG&nbsp;2.2 SC&nbsp;2.5.8). Lo `<button type="button">` fun
> awọn iṣe inu-oju-iwe ati `<a href>` fun lilọ kiri nikan.

<h3 id="badges">Awọn aami</h3>

Aami kekere fun ipo, iye, tabi ẹka. Iwọn ọrọ ti wa ni ipo nitorinaa
awọn aami ba ọrọ agbegbe mu.

```html
<span class="badge">Default</span>
<span class="badge primary">Primary</span>
<span class="badge success">Success</span>
<span class="badge warning">Warning</span>
<span class="badge danger">Danger</span>
```

<section aria-labelledby="badges">
<p>
  <span class="badge">Aiyipada</span>
  <span class="badge primary">Akọkọ</span>
  <span class="badge success">Aṣeyọri</span>
  <span class="badge warning">Ikilọ</span>
  <span class="badge danger">Ewu</span>
</p>
</section>

> **Akiyesi irayẹ-si.** Awọn aami jẹ ohun ọṣọ nipa aiyipada. Nigba ti
> aami ba gbe ami nikan (fun apẹẹrẹ iye ti a ko ka), fi i sinu
> oluranlọwọ ti a fi pamọ ni oju: `<span class="visually-hidden">awọn
> ifiranṣẹ 3 ti a ko ka</span>`.

<hr class="hr-text" data-content="Esi">

<h2 id="feedback">Esi</h2>

Awọn oju ti o sọ fun alejo pe nkan kan ṣẹlẹ — tabi pe yoo ṣẹlẹ.

<h3 id="alerts">Awọn itaniji</h3>

Awọn ifiranṣẹ ipo pẹlu idi ti itumọ. **Ninu v1.1.7 gbogbo ẹya ni a
ṣe orukọ ni kedere** labẹ `.alert-{primary,secondary,info,success,warning,error}`
nitorinaa kilasi ẹya ko le kọlu pẹlu awọn kilasi ipo ni ibi miiran lori
oju-iwe naa.

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
<strong>Akiyesi.</strong> Eyi jẹ itaniji akọkọ.
</div>

<div class="alert alert-success" role="status">
<strong>Ti fipamọ.</strong> Awọn iyipada rẹ ti wa ni ipamọ.
</div>

<div class="alert alert-warning" role="alert">
<strong>Ṣọra.</strong> Iṣe yii kan ipo ti a pin.
</div>

<div class="alert alert-error" role="alert">
<strong>Aṣiṣe.</strong> Ko le fipamọ fọọmu naa.
</div>
</section>

> **Akiyesi irayẹ-si.** Lo `role="alert"` fun awọn ifiranṣẹ ti o
> beere akiyesi lẹsẹkẹsẹ (awọn aṣiṣe, awọn ikilọ) ati `role="status"`
> fun awọn ifidi ti ko ṣe pataki. Awọn mejeeji ṣafihan ifiranṣẹ naa
> si imọ-ẹrọ iranlọwọ ni kete ti o ba han.

<hr class="hr-text" data-content="Oju">

<h2 id="surface">Oju</h2>

Awọn apoti ti o ṣe agbekalẹ ati ṣe akojọpọ akoonu ti o ni ibatan.

<h3 id="cards">Awọn kaadi</h3>

Apoti ti a fi ala si, ti a fi idinku si fun ẹyọkan ti o ni ibamu. Darapọ
mọ grid `flex-N` fun awọn odi kaadi ti o dahun.

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Lightweight</h3>
      <p>45.7 KB minified, 8.3 KB gzipped.</p>
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
      <h3 class="card-title">Fẹẹrẹfẹ</h3>
      <p>45.7&nbsp;KB minified, 8.3&nbsp;KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Ti a le wọle si</h3>
      <p>Ibamu WCAG&nbsp;2.2 lẹsẹkẹsẹ.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modulu</h3>
      <p>Ti a fi cascade-layer ṣe fun atunṣe irọrun.</p>
    </div>
  </article>
</section>

> **Akiyesi irayẹ-si.** Fi kaadi kọọkan sinu ami ala-ilẹ ti itumọ
> (`<article>`, `<section>`) ki o si bẹrẹ akoonu rẹ pẹlu akọle
> (`<h3>`). Awọn olumulo oluka-iboju le lẹhinna rin irin-ajo nipasẹ
> atokọ kaadi bi awọn agbegbe lilọ kiri akọkọ.

<hr class="hr-text" data-content="Awọn fọọmu">

<h2 id="forms">Awọn fọọmu</h2>

Awọn igbewọle, awọn akole, ati awọn akojọpọ fun gbigba data olumulo.

<h3 id="form-fields">Awọn aaye fọọmu</h3>

Awọn akole, awọn igbewọle ọrọ, awọn aaye ọrọ, awọn akojọ aaye ati
awọn akọle — gbogbo wọn ni iwọn kanna pẹlu iyoku eto apẹrẹ naa.

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
  <label for="demo-name">Orukọ</label>
  <input id="demo-name" type="text">

  <label for="demo-email">Imeeli</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">Ifiranṣẹ</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">Firanṣẹ (afihan)</button></p>
</form>
</section>

> **Akiyesi irayẹ-si.** Gbogbo igbewọle gbọdọ ni `<label for="…">`
> ti a so mọ rẹ nipa eto. Ṣe akojọpọ awọn iṣakoso ti o ni ibatan
> ninu `<fieldset>` pẹlu `<legend>`. Samisi awọn aaye ti o nilo pẹlu
> `required` (ati irawọ ti a le ri ninu ọrọ akole).

<hr class="hr-text" data-content="Eto">

<h2 id="layout">Eto</h2>

Awọn ipilẹ igbekalẹ — grid, apoti, akọle — ti o ṣe agbekalẹ gbogbo
oju-iwe.

<h3 id="grid">Grid</h3>

Grid `flex-N` ti o dahun (1 → 12 ọwọn) ti a kọ lori flexbox. Obi
`.row` ṣe aaye ati yi ni aifọwọyi.

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
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Idaji</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Idaji</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Idamẹta</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Idamẹta</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Idamẹta</div>
</div>
</section>

> **Akiyesi irayẹ-si.** Aṣẹ oju yẹ ki o baamu aṣẹ DOM. Yẹra fun
> atunto awọn ila pẹlu `flex-direction: row-reverse` tabi `order:` —
> awọn oluka iboju ati awọn olumulo itẹwe tẹle orisun, kii ṣe kikun.

<h3 id="header">Akọle &amp; lilọ kiri hamburger</h3>

Akọle CSS-nikan ti o pe pẹlu iyipada hamburger ti o dahun. **JavaScript
kankan.** Daakọ apakan ni isalẹ sinu oju-iwe HTML tuntun ti o ti gba
`skeletonic.min.css` tẹlẹ ati pe akojọ aṣayan yoo ṣubu, faagun, ati
mu idojukọ mu ni deede funrarẹ.

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
  <a class="sk-brand" href="#">Ami iyasọtọ</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Yipada lilọ kiri">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Ile</a></li>
    <li><a href="#">Iwe-ẹkọ</a></li>
    <li><a href="#">Awọn paati</a></li>
    <li><a href="#">Nipa</a></li>
  </ul>
</header>
</section>

> **Akiyesi irayẹ-si.** Apoti iṣayẹwo ti a fi pamọ wa ninu aṣẹ
> taabu nitorinaa awọn olumulo itẹwe le ṣii akojọ aṣayan pẹlu
> `Space` tabi `Enter`. `<label>` gbe `aria-hidden` nitoripe apoti
> iṣayẹwo funrarẹ ni orisun orukọ ti a le wọle si. Ṣe atunṣe iwọn
> ferese ni isalẹ 640&nbsp;px lati ri iyipada hamburger gba iṣẹ.

[Wo gbogbo awọn akiyesi a11y →](/yo/iraye-si/) · [Ṣawari awọn palẹti →](/yo/awon-paleti/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Awọn paati Skeletonic Stylus",
  "description": "Gbogbo paati ti a fi ranṣẹ ninu Skeletonic Stylus v1.1.7.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Awọn bọtini",
      "url": "https://skeletonic.io/yo/awon-paati/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Awọn aami",
      "url": "https://skeletonic.io/yo/awon-paati/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Awọn itaniji",
      "url": "https://skeletonic.io/yo/awon-paati/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Awọn kaadi",
      "url": "https://skeletonic.io/yo/awon-paati/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Awọn aaye fọọmu",
      "url": "https://skeletonic.io/yo/awon-paati/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Grid",
      "url": "https://skeletonic.io/yo/awon-paati/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Akọle ati lilọ kiri hamburger",
      "url": "https://skeletonic.io/yo/awon-paati/#header"
    }
  ]
}
</script>
