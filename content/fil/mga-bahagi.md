---
title: "Mga Bahagi"
name: "Skeletonic Stylus"
description: "Mga live HTML na halimbawa ng bawat Skeletonic Stylus component, nakagrupong, naka-anchor, at nire-render gamit ang mismong stylesheet na dine-demo."
layout: page
permalink: https://skeletonic.io/fil/mga-bahagi/
date: 2026-04-08
author: Sebastien Rousseau
language: fil
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic component, button, card, form, alert, badge, header, navbar, css only hamburger"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

Bawat halimbawa sa ibaba ay **nire-render gamit ang mismong stylesheet na dine-demo**. Walang preprocessor. Walang JavaScript. Walang dagdag na dependency. Kopyahin ang anumang snippet sa isang bagong HTML file at gagana ito.

<nav aria-label="Sa pahinang ito">
<p><strong>Sa pahinang ito</strong></p>
<ul>
<li><strong>Mga Input</strong> — <a href="#buttons">Mga Button</a> · <a href="#badges">Mga Badge</a></li>
<li><strong>Feedback</strong> — <a href="#alerts">Mga Alert</a></li>
<li><strong>Surface</strong> — <a href="#cards">Mga Card</a></li>
<li><strong>Mga Form</strong> — <a href="#form-fields">Mga field ng form</a></li>
<li><strong>Layout</strong> — <a href="#grid">Grid</a> · <a href="#header">Header &amp; hamburger nav</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="Mga Input">

<h2 id="inputs">Mga Input</h2>

Mga interactive na element na kini-click, tina-tap, o fini-focus ng bisita upang kontrolin ang pahina.

<h3 id="buttons">Mga Button</h3>

Isang semantic, na-the-theme na action trigger. Ang solid at outline na variant ay may anim na brand na kulay bawat isa.

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

Mga outline variant:

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">Outline</a>
  <a href="#" class="button secondary-outline">Outline</a>
</p>

> **Tala sa aksesibilidad.** Bawat `.button` na variant ay may kasamang
> `:focus-visible` ring at isang **24×24&nbsp;px na minimum hit area**
> (WCAG&nbsp;2.2 SC&nbsp;2.5.8). Gamitin ang `<button type="button">` para sa
> mga aksyon sa pahina at `<a href>` para lamang sa nabigasyon.

<h3 id="badges">Mga Badge</h3>

Isang compact na label para sa status, bilang, o kategorya. Nakatakda ang laki ng text kaya ang mga badge ay naka-align sa nakapalibot na text.

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

> **Tala sa aksesibilidad.** Ang mga badge ay dekoratibo bilang default. Kapag ang
> badge ang tanging nagdadala ng signal (hal. bilang ng hindi pa nabasa), balutin ito sa isang
> visually-hidden na helper: `<span class="visually-hidden">3 hindi pa nababasang
> mensahe</span>`.

<hr class="hr-text" data-content="Feedback">

<h2 id="feedback">Feedback</h2>

Mga surface na nagsasabi sa bisita na may nangyari — o malapit nang mangyari.

<h3 id="alerts">Mga Alert</h3>

Mga mensahe ng status na may semantic na layunin. **Sa v1.1.7 bawat variant ay
tahasang naka-namespace** sa ilalim ng `.alert-{primary,secondary,info,success,warning,error}`
kaya ang variant na klase ay hindi magko-collide sa mga state class sa ibang bahagi
ng pahina.

```html
<div class="alert alert-primary" role="alert">
  <strong>Pansinin.</strong> Ito ay isang primary alert.
</div>
<div class="alert alert-success" role="status">
  <strong>Na-save.</strong> Ang iyong mga pagbabago ay nai-persist.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Mag-ingat.</strong> Ang aksyon na ito ay nakakaapekto sa shared state.
</div>
<div class="alert alert-error" role="alert">
  <strong>Error.</strong> Hindi mai-save ang form.
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>Pansinin.</strong> Ito ay isang primary alert.
</div>

<div class="alert alert-success" role="status">
<strong>Na-save.</strong> Ang iyong mga pagbabago ay nai-persist.
</div>

<div class="alert alert-warning" role="alert">
<strong>Mag-ingat.</strong> Ang aksyon na ito ay nakakaapekto sa shared state.
</div>

<div class="alert alert-error" role="alert">
<strong>Error.</strong> Hindi mai-save ang form.
</div>
</section>

> **Tala sa aksesibilidad.** Gamitin ang `role="alert"` para sa mga mensaheng nangangailangan
> ng agarang pansin (mga error, babala) at `role="status"` para sa
> mga hindi urgenteng kumpirmasyon. Parehong inilalantad ang mensahe sa assistive tech
> sa sandaling lumabas ito.

<hr class="hr-text" data-content="Surface">

<h2 id="surface">Surface</h2>

Mga container na nagba-frame at naggu-grupo ng magkakaugnay na nilalaman.

<h3 id="cards">Mga Card</h3>

Isang bordered, padded na container para sa isang koherenteng yunit. Ipares sa
`flex-N` grid para sa responsive na card wall.

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Magaan</h3>
      <p>45.7 KB minified, 8.3 KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Accessible</h3>
      <p>WCAG 2.2 conformant agad mula sa kahon.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modular</h3>
      <p>Cascade-layered para sa madaling override.</p>
    </div>
  </article>
</section>
```

<section class="row" aria-labelledby="cards">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Magaan</h3>
      <p>45.7&nbsp;KB minified, 8.3&nbsp;KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Accessible</h3>
      <p>WCAG&nbsp;2.2 conformant agad mula sa kahon.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modular</h3>
      <p>Cascade-layered para sa madaling override.</p>
    </div>
  </article>
</section>

> **Tala sa aksesibilidad.** Balutin ang bawat card sa isang semantic na landmark
> (`<article>`, `<section>`) at simulan ang nilalaman nito ng heading
> (`<h3>`). Ang mga gumagamit ng screen reader ay maaaring mag-traverse sa listahan ng card bilang
> first-class na navigable region.

<hr class="hr-text" data-content="Mga Form">

<h2 id="forms">Mga Form</h2>

Mga input, label, at grouping para sa pagkolekta ng data ng gumagamit.

<h3 id="form-fields">Mga field ng form</h3>

Mga label, text input, textarea, fieldset at legend — lahat ay naka-size nang
pare-pareho sa natitirang bahagi ng design system.

```html
<form>
  <label for="name">Pangalan</label>
  <input id="name" type="text" required>

  <label for="email">Email</label>
  <input id="email" type="email" required class="input-primary">

  <label for="msg">Mensahe</label>
  <textarea id="msg" rows="4"></textarea>

  <button type="submit" class="button primary">Ipadala</button>
</form>
```

<section aria-labelledby="form-fields">
<form>
  <label for="demo-name">Pangalan</label>
  <input id="demo-name" type="text">

  <label for="demo-email">Email</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">Mensahe</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">Ipadala (demo)</button></p>
</form>
</section>

> **Tala sa aksesibilidad.** Bawat input ay dapat may programmatically
> na naka-associate na `<label for="…">`. I-grupo ang mga magkakaugnay na kontrol sa loob ng isang
> `<fieldset>` na may `<legend>`. Markahan ang mga required field ng
> `required` (at isang nakikitang asterisk sa label text).

<hr class="hr-text" data-content="Layout">

<h2 id="layout">Layout</h2>

Mga structural na primitive — grid, container, header — na nagba-frame sa
buong pahina.

<h3 id="grid">Grid</h3>

Isang responsive na `flex-N` grid (1 → 12 column) na binuo sa flexbox. Ang
`.row` na parent ay awtomatikong nagga-gap at nagra-wrap.

```html
<div class="row">
  <div class="flex-6">Kalahati</div>
  <div class="flex-6">Kalahati</div>
</div>
<div class="row">
  <div class="flex-4">Katlo</div>
  <div class="flex-4">Katlo</div>
  <div class="flex-4">Katlo</div>
</div>
```

<section aria-labelledby="grid">
<div style="display:flex;flex-wrap:wrap;gap:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Kalahati</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Kalahati</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Katlo</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Katlo</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Katlo</div>
</div>
</section>

> **Tala sa aksesibilidad.** Ang visual na pagkakasunod-sunod ay dapat tumugma sa DOM order. Iwasan
> ang pag-reorder ng mga row gamit ang `flex-direction: row-reverse` o `order:` —
> ang mga screen reader at keyboard user ay sumusunod sa source, hindi sa paint.

<h3 id="header">Header &amp; hamburger nav</h3>

Isang kumpletong CSS-only na header na may responsive na hamburger toggle. **Walang
JavaScript.** Kopyahin ang snippet sa ibaba sa isang bagong HTML page na
naka-load na ng `skeletonic.min.css` at ang menu ay magco-collapse, mag-e-expand,
at mag-ta-trap ng focus nang tama nang mag-isa.

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
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="I-toggle ang nabigasyon">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Docs</a></li>
    <li><a href="#">Mga Bahagi</a></li>
    <li><a href="#">Tungkol</a></li>
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
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="I-toggle ang nabigasyon">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Docs</a></li>
    <li><a href="#">Mga Bahagi</a></li>
    <li><a href="#">Tungkol</a></li>
  </ul>
</header>
</section>

> **Tala sa aksesibilidad.** Ang nakatagong checkbox ay nananatili sa tab order
> kaya ang mga keyboard user ay maaaring buksan ang menu gamit ang `Space` o `Enter`. Ang
> `<label>` ay may `aria-hidden` dahil ang checkbox mismo ang
> accessible name source. I-resize ang window sa ibaba ng 640&nbsp;px upang makita
> ang burger toggle na pumalit.

[Tingnan ang buong a11y na tala →](/fil/aksesibilidad/) · [Tingnan ang mga paleta →](/fil/mga-paleta/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Mga component ng Skeletonic Stylus",
  "description": "Bawat component na kasama sa Skeletonic Stylus v1.1.7.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Mga Button",
      "url": "https://skeletonic.io/fil/mga-bahagi/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Mga Badge",
      "url": "https://skeletonic.io/fil/mga-bahagi/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Mga Alert",
      "url": "https://skeletonic.io/fil/mga-bahagi/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Mga Card",
      "url": "https://skeletonic.io/fil/mga-bahagi/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Mga field ng form",
      "url": "https://skeletonic.io/fil/mga-bahagi/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Grid",
      "url": "https://skeletonic.io/fil/mga-bahagi/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Header & hamburger nav",
      "url": "https://skeletonic.io/fil/mga-bahagi/#header"
    }
  ]
}
</script>
