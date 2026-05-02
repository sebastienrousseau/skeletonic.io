---
title: "Abubuwan Hadi"
name: "Skeletonic Stylus"
description: "Misalan HTML masu rai na kowane abun hadi na Skeletonic Stylus, an haɗa su, an sanya masu maƙala, kuma an nuna su da stylesheet ɗin da ake nunawa."
layout: page
permalink: https://skeletonic.io/ha/abubuwan-hadi/
date: 2026-04-08
author: Sebastien Rousseau
language: ha
theme_color: "hsl(210, 100%, 42%)"
keywords: "abubuwan hadi na skeletonic, maballin, katunan, sifofi, faɗakarwa, alamomi, kanun shafi, navbar, css only hamburger"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

Ana nuna kowane misali da ke ƙasa **da stylesheet ɗin da ake nunawa**. Babu preprocessor. Babu JavaScript. Babu ƙarin abubuwan dogaro. Kwafa kowane ɓangare zuwa sabon fayil na HTML kuma ya yi aiki.

<nav aria-label="A wannan shafi">
<p><strong>A wannan shafi</strong></p>
<ul>
<li><strong>Shigarwa</strong> — <a href="#buttons">Maballin</a> · <a href="#badges">Alamomi</a></li>
<li><strong>Amsa</strong> — <a href="#alerts">Faɗakarwa</a></li>
<li><strong>Saman</strong> — <a href="#cards">Katunan</a></li>
<li><strong>Sifofi</strong> — <a href="#form-fields">Filayen sifofi</a></li>
<li><strong>Tsari</strong> — <a href="#grid">Grid</a> · <a href="#header">Kanun shafi &amp; hamburger nav</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="Shigarwa">

<h2 id="inputs">Shigarwa</h2>

Abubuwan hulɗa da mai ziyara ke danna, taɓawa, ko mai da hankali don tafiyar da shafin.

<h3 id="buttons">Maballin</h3>

Abubuwan fara aiki masu ma'ana, waɗanda ake iya canza yanayin su. Iri-irin Solid da outline suna zuwa da launuka shida na alama kowanne.

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

Iri-irin outline:

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">Outline</a>
  <a href="#" class="button secondary-outline">Outline</a>
</p>

> **Bayanan samun dama.** Kowane nau'in `.button` yana zuwa da zoben `:focus-visible` da **mafi ƙarancin yankin bugu na 24×24&nbsp;px** (WCAG&nbsp;2.2 SC&nbsp;2.5.8). Yi amfani da `<button type="button">` don ayyuka a cikin shafi kuma `<a href>` don kewayawa kawai.

<h3 id="badges">Alamomi</h3>

Lakabi mai taƙaitawa don matsayi, ƙidaya, ko rukunin. Girman rubutu an gyara shi don alamomi su daidaita da rubutun da ke kewaye.

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

> **Bayanan samun dama.** Alamomi suna don ado ne ta tsoho. Lokacin da alamar ke ɗauke da sigina ɗaya tilo (misali ƙidayar da ba a karanta ba), nannaɗe ta a cikin taimako da aka ɓoye: `<span class="visually-hidden">Saƙonni 3 da ba a karanta ba</span>`.

<hr class="hr-text" data-content="Amsa">

<h2 id="feedback">Amsa</h2>

Saman da ke gaya wa mai ziyara cewa wani abu ya faru — ko kuma yana shirin faruwa.

<h3 id="alerts">Faɗakarwa</h3>

Saƙonnin matsayi da niyyar ma'ana. **A cikin v2.0.0 an sanya kowane nau'i a ƙarƙashin sunan yanki** a ƙarƙashin `.alert-{primary,secondary,info,success,warning,error}` don haka ajin nau'i ba zai yi karo da azuzuwan yanayi a wani wuri a shafin ba.

```html
<div class="alert alert-primary" role="alert">
  <strong>Ku lura.</strong> Wannan faɗakarwa ce ta farko.
</div>
<div class="alert alert-success" role="status">
  <strong>An ajiye.</strong> An adana canje-canjen ku.
</div>
<div class="alert alert-warning" role="alert">
  <strong>A hankali.</strong> Wannan aikin yana shafar yanayin da ake raba.
</div>
<div class="alert alert-error" role="alert">
  <strong>Kuskure.</strong> Ba a iya ajiye sigar ba.
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>Ku lura.</strong> Wannan faɗakarwa ce ta farko.
</div>

<div class="alert alert-success" role="status">
<strong>An ajiye.</strong> An adana canje-canjen ku.
</div>

<div class="alert alert-warning" role="alert">
<strong>A hankali.</strong> Wannan aikin yana shafar yanayin da ake raba.
</div>

<div class="alert alert-error" role="alert">
<strong>Kuskure.</strong> Ba a iya ajiye sigar ba.
</div>
</section>

> **Bayanan samun dama.** Yi amfani da `role="alert"` don saƙonnin da ke buƙatar kulawa nan take (kurakurai, gargaɗi) da `role="status"` don tabbatarwa marasa gaggawa. Duka biyun suna fallasa saƙon ga fasahar taimako a lokacin da ya bayyana.

<hr class="hr-text" data-content="Saman">

<h2 id="surface">Saman</h2>

Kwantena da ke ƙirƙira da haɗa abubuwan da ke da alaƙa.

<h3 id="cards">Katunan</h3>

Kwantenan da ke da iyaka da padding don raka'a guda mai jituwa. Haɗa shi da grid ɗin `flex-N` don bangon katuna masu amsa.

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Mai saukin nauyi</h3>
      <p>42.3 KB da aka ƙaranta, 7.9 KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Mai saukin amfani</h3>
      <p>Daidaitaccen WCAG 2.2 daga cikin akwatin.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Mai tsari</h3>
      <p>Cascade-layered don sauƙin soke.</p>
    </div>
  </article>
</section>
```

<section class="row" aria-labelledby="cards">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Mai saukin nauyi</h3>
      <p>42.3&nbsp;KB da aka ƙaranta, 7.9&nbsp;KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Mai saukin amfani</h3>
      <p>WCAG&nbsp;2.2 daidaitacce daga cikin akwatin.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Mai tsari</h3>
      <p>Cascade-layered don sauƙin soke.</p>
    </div>
  </article>
</section>

> **Bayanan samun dama.** Nannaɗe kowanne katuna a cikin wurin ma'ana (`<article>`, `<section>`) kuma fara abubuwan cikin sa da kanun (`<h3>`). Masu amfani da screen-reader za su iya kewaya jerin katuna a matsayin yankuna masu kewayawa.

<hr class="hr-text" data-content="Sifofi">

<h2 id="forms">Sifofi</h2>

Shigarwa, lakabai, da rabe-rabe don tattara bayanan mai amfani.

<h3 id="form-fields">Filayen sifofi</h3>

Lakabai, shigarwa na rubutu, textareas, fieldsets da legends — duk an daidaita girman su da sauran tsarin ƙira.

```html
<form>
  <label for="name">Suna</label>
  <input id="name" type="text" required>

  <label for="email">Imel</label>
  <input id="email" type="email" required class="input-primary">

  <label for="msg">Saƙo</label>
  <textarea id="msg" rows="4"></textarea>

  <button type="submit" class="button primary">Aika</button>
</form>
```

<section aria-labelledby="form-fields">
<div role="group" aria-label="Form fields demo">
  <label for="demo-name">Suna</label>
  <input id="demo-name" type="text">

  <label for="demo-email">Imel</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">Saƙo</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">Aika (demo)</button></p>
</div>
</section>

> **Bayanan samun dama.** Kowane shigarwa dole ne ya kasance da `<label for="…">` da aka danganta. Tara abubuwan sarrafa masu alaƙa a cikin `<fieldset>` tare da `<legend>`. Yi alamar filayen da ake buƙata da `required` (da tauraron da ake gani a cikin rubutun lakabi).

<hr class="hr-text" data-content="Tsari">

<h2 id="layout">Tsari</h2>

Ginshiƙan tsari — grid, container, header — da ke ƙirƙira dukan shafin.

<h3 id="grid">Grid</h3>

Grid ɗin `flex-N` mai amsa (1 → 12 ginshiƙi) da aka gina a kan flexbox. `.row` mai iyaye yana yin gap da nannaɗe ta atomatik.

```html
<div class="row">
  <div class="flex-6">Rabi</div>
  <div class="flex-6">Rabi</div>
</div>
<div class="row">
  <div class="flex-4">Sulusi</div>
  <div class="flex-4">Sulusi</div>
  <div class="flex-4">Sulusi</div>
</div>
```

<section aria-labelledby="grid">
<div style="display:flex;flex-wrap:wrap;gap:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Rabi</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Rabi</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Sulusi</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Sulusi</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Sulusi</div>
</div>
</section>

> **Bayanan samun dama.** Tsarin gani ya kamata ya daidaita da tsarin DOM. Guji sake tsara layuka da `flex-direction: row-reverse` ko `order:` — screen readers da masu amfani da maɓalli suna bin tushen, ba fenti ba.

<h3 id="header">Kanun shafi &amp; hamburger nav</h3>

Cikakken kanun shafi na CSS kawai tare da hamburger toggle mai amsa. **Babu JavaScript.** Kwafa ɓangaren da ke ƙasa zuwa sabon shafin HTML da ya riga ya loda `skeletonic.min.css` kuma menu ɗin zai naɗe, faɗaɗa, da sarrafa mayar da hankali daidai da kansa.

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
  <a class="sk-brand" href="#">Alama</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Canza kewayawa">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Gida</a></li>
    <li><a href="#">Takardun</a></li>
    <li><a href="#">Abubuwan hadi</a></li>
    <li><a href="#">Game da</a></li>
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
  <a class="sk-brand" href="#">Alama</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Canza kewayawa">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Gida</a></li>
    <li><a href="#">Takardun</a></li>
    <li><a href="#">Abubuwan hadi</a></li>
    <li><a href="#">Game da</a></li>
  </ul>
</header>
</section>

> **Bayanan samun dama.** Checkbox ɗin da aka ɓoye yana cikin tsarin tab don masu amfani da maɓalli su iya buɗe menu ɗin da `Space` ko `Enter`. `<label>` yana ɗauke da `aria-hidden` saboda checkbox ɗin kansa shine tushen sunan samun dama. Canza girman window ƙasa da 640&nbsp;px don ganin burger toggle yana karɓar mulki.

[Duba bayanan a11y cikakku →](/ha/samun-dama/) · [Duba launuka →](/ha/launuka/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Abubuwan hadi na Skeletonic Stylus",
  "description": "Kowane abun hadi da Skeletonic Stylus v2.0.0 ke aikawa.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Maballin",
      "url": "https://skeletonic.io/ha/abubuwan-hadi/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Alamomi",
      "url": "https://skeletonic.io/ha/abubuwan-hadi/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Faɗakarwa",
      "url": "https://skeletonic.io/ha/abubuwan-hadi/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Katunan",
      "url": "https://skeletonic.io/ha/abubuwan-hadi/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Filayen sifofi",
      "url": "https://skeletonic.io/ha/abubuwan-hadi/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Grid",
      "url": "https://skeletonic.io/ha/abubuwan-hadi/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Kanun shafi & hamburger nav",
      "url": "https://skeletonic.io/ha/abubuwan-hadi/#header"
    }
  ]
}
</script>
