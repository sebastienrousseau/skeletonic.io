---
title: "Bilesenler — Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus'un tum bilesenlerinin canli HTML ornekleri — gruplanmis, baglantili ve gosterilen stil sayfasiyla render edilmis."
layout: page
permalink: https://skeletonic.io/tr/bilesenler/
date: 2026-04-08
author: Sebastien Rousseau
language: tr
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic bilesenler, butonlar, kartlar, formlar, uyarilar, rozetler, baslik, navbar, css hamburger menu"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

Asagidaki her ornek **gosterilen stil sayfasiyla render edilmistir**.
On islemci yok. JavaScript yok. Ekstra bagimlilik yok. Herhangi bir
kod parcasini bos bir HTML dosyasina kopyalayin ve calisir.

<nav aria-label="Bu sayfada">
<p><strong>Bu sayfada</strong></p>
<ul>
<li><strong>Girisler</strong> — <a href="#buttons">Butonlar</a> · <a href="#badges">Rozetler</a></li>
<li><strong>Geri bildirim</strong> — <a href="#alerts">Uyarilar</a></li>
<li><strong>Yuzey</strong> — <a href="#cards">Kartlar</a></li>
<li><strong>Formlar</strong> — <a href="#form-fields">Form alanlari</a></li>
<li><strong>Duzen</strong> — <a href="#grid">Izgara</a> · <a href="#header">Baslik ve hamburger navigasyon</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="Girisler">

<h2 id="inputs">Girisler</h2>

Ziyaretcinin sayfayi yonlendirmek icin tikladigi, dokundugu veya
odakladigi etkilesimli ogeler.

<h3 id="buttons">Butonlar</h3>

Semantik, temalanabilir bir eylem tetikleyicisi. Dolu ve anahat
varyantlari alti marka rengi sunar.

```html
<a href="#" class="button primary">Primary</a>
<a href="#" class="button secondary">Secondary</a>
<a href="#" class="button tertiary">Tertiary</a>
```

<section aria-labelledby="buttons">
<p>
  <a href="#" class="button primary">Birincil</a>
  <a href="#" class="button secondary">Ikincil</a>
  <a href="#" class="button tertiary">Ucuncul</a>
</p>
</section>

Anahat varyantlari:

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">Anahat</a>
  <a href="#" class="button secondary-outline">Anahat</a>
</p>

> **Erisilebilirlik notu.** Her `.button` varyanti bir
> `:focus-visible` halkasi ve **minimum 44x44&nbsp;px tiklanabilir alan**
> (WCAG&nbsp;2.2 SC&nbsp;2.5.8) ile gelir. Sayfa ici eylemler icin
> `<button type="button">`, yalnizca navigasyon icin `<a href>`
> kullanin.

<h3 id="badges">Rozetler</h3>

Durum, sayi veya kategori icin kompakt bir etiket. Yazi boyutu sabit
oldugundan rozetler cevresindeki metinle hizalanir.

```html
<span class="badge">Default</span>
<span class="badge primary">Primary</span>
<span class="badge success">Success</span>
<span class="badge warning">Warning</span>
<span class="badge danger">Danger</span>
```

<section aria-labelledby="badges">
<p>
  <span class="badge">Varsayilan</span>
  <span class="badge primary">Birincil</span>
  <span class="badge success">Basarili</span>
  <span class="badge warning">Uyari</span>
  <span class="badge danger">Tehlike</span>
</p>
</section>

> **Erisilebilirlik notu.** Rozetler varsayilan olarak dekoratiftir.
> Rozet tek sinyali tasiyorsa (ornegin okunmamis sayi), gorsel olarak
> gizli bir yardimci ile sarin:
> `<span class="visually-hidden">3 okunmamis mesaj</span>`.

<hr class="hr-text" data-content="Geri bildirim">

<h2 id="feedback">Geri bildirim</h2>

Ziyaretciye bir seyin oldugunu — veya olmak uzere oldugunu bildiren
yuzeyler.

<h3 id="alerts">Uyarilar</h3>

Semantik amacli durum mesajlari. **v1.1.7'de her varyant acikca
`.alert-{primary,secondary,info,success,warning,error}` altinda
adlandirilmistir**, boylece varyant sinifi sayfadaki baska durum
siniflariyla catismaz.

```html
<div class="alert alert-primary" role="alert">
  <strong>Dikkat.</strong> Bu birincil bir uyaridir.
</div>
<div class="alert alert-success" role="status">
  <strong>Kaydedildi.</strong> Degisiklikleriniz kaydedildi.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Dikkatli olun.</strong> Bu eylem paylasilan durumu etkiler.
</div>
<div class="alert alert-error" role="alert">
  <strong>Hata.</strong> Form kaydedilemedi.
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>Dikkat.</strong> Bu birincil bir uyaridir.
</div>

<div class="alert alert-success" role="status">
<strong>Kaydedildi.</strong> Degisiklikleriniz kaydedildi.
</div>

<div class="alert alert-warning" role="alert">
<strong>Dikkatli olun.</strong> Bu eylem paylasilan durumu etkiler.
</div>

<div class="alert alert-error" role="alert">
<strong>Hata.</strong> Form kaydedilemedi.
</div>
</section>

> **Erisilebilirlik notu.** Aninda dikkat gerektiren mesajlar (hatalar,
> uyarilar) icin `role="alert"`, acil olmayan onaylar icin
> `role="status"` kullanin. Her ikisi de mesaji gostuldugu anda
> yardimci teknolojilere acik hale getirir.

<hr class="hr-text" data-content="Yuzey">

<h2 id="surface">Yuzey</h2>

Ilgili icerigi cerceveleyen ve gruplayan konteynerler.

<h3 id="cards">Kartlar</h3>

Tek bir tutarli birim icin kenarlikh, dolgulu bir konteyner. Duyarli
kart duvarlari icin `flex-N` izgarasiyla birlestirebilirsiniz.

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
      <h3 class="card-title">Hafif</h3>
      <p>45,7&nbsp;KB kucultulmus, 8,3&nbsp;KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Erisilebilir</h3>
      <p>WCAG&nbsp;2.2 kutudan ciktiginda uyumlu.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Moduler</h3>
      <p>Kolay gecersiz kilma icin cascade-layered.</p>
    </div>
  </article>
</section>

> **Erisilebilirlik notu.** Her karti semantik bir isaretci
> (`<article>`, `<section>`) icerisine yerlestirin ve icerigini bir
> baslikla (`<h3>`) baslatsin. Ekran okuyucu kullanicilari boylece
> kart listesini birinci sinif gezilebilir bolgeler olarak
> dolasabilir.

<hr class="hr-text" data-content="Formlar">

<h2 id="forms">Formlar</h2>

Kullanici verilerini toplamak icin giris alanlari, etiketler ve
gruplamalar.

<h3 id="form-fields">Form alanlari</h3>

Etiketler, metin girisleri, metin alanlari, fieldset'ler ve
legend'ler — tamami tasarim sisteminin geri kalasiyla tutarli
boyutlandirilmistir.

```html
<form>
  <label for="name">Ad</label>
  <input id="name" type="text" required>

  <label for="email">E-posta</label>
  <input id="email" type="email" required class="input-primary">

  <label for="msg">Mesaj</label>
  <textarea id="msg" rows="4"></textarea>

  <button type="submit" class="button primary">Gonder</button>
</form>
```

<section aria-labelledby="form-fields">
<form>
  <label for="demo-name">Ad</label>
  <input id="demo-name" type="text">

  <label for="demo-email">E-posta</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">Mesaj</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">Gonder (demo)</button></p>
</form>
</section>

> **Erisilebilirlik notu.** Her giris alaninin programatik olarak
> iliskilendirilmis bir `<label for="...">` ogelesi olmalidir.
> Iliskili kontrolleri bir `<legend>` ile `<fieldset>` icerisine
> gruplayin. Zorunlu alanlari `required` (ve etiket metninde gorsel
> bir yildiz) ile isaretleyin.

<hr class="hr-text" data-content="Duzen">

<h2 id="layout">Duzen</h2>

Tum sayfayi cerceveleyen yapisal temel ogeler — izgara, konteyner,
baslik.

<h3 id="grid">Izgara</h3>

Flexbox uzerine kurulu duyarli bir `flex-N` izgarasi (1 → 12 sutun).
`.row` ebeveyn ogeleri bosluk ve satirlama islemlerini otomatik yapar.

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
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Yarim</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Yarim</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Ucte bir</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Ucte bir</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Ucte bir</div>
</div>
</section>

> **Erisilebilirlik notu.** Gorsel sira DOM sirasina uygun olmalidir.
> Satirlari `flex-direction: row-reverse` veya `order:` ile yeniden
> siralamaktan kacinin — ekran okuyuculari ve klavye kullanicilari
> goruntulemeyi degil kaynagi takip eder.

<h3 id="header">Baslik ve hamburger navigasyon</h3>

Duyarli hamburger acma/kapama ile tam bir salt-CSS baslik. **Sifir
JavaScript.** Asagidaki kod parcasini zaten `skeletonic.min.css`
yukleyen bos bir HTML sayfasina kopyalayin — menu kendi basina
dogru sekilde acilir, kapanir ve odagi yakalar.

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
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Navigasyonu ac/kapat">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Ana sayfa</a></li>
    <li><a href="#">Dokumanlar</a></li>
    <li><a href="#">Bilesenler</a></li>
    <li><a href="#">Hakkinda</a></li>
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
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Navigasyonu ac/kapat">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Ana sayfa</a></li>
    <li><a href="#">Dokumanlar</a></li>
    <li><a href="#">Bilesenler</a></li>
    <li><a href="#">Hakkinda</a></li>
  </ul>
</header>
</section>

> **Erisilebilirlik notu.** Gizli onay kutusu sekme sirasinda kalir,
> boylece klavye kullanicilari menuyu `Bosluk` veya `Enter` ile
> acabilir. `<label>`, `aria-hidden` tasir cunku onay kutusunun
> kendisi erisilebilir ad kaynagidir. Hamburger acma/kapama'yi
> calisir halde gormek icin pencereyi 640&nbsp;px'in altina
> daraltsin.

[Tum erisilebilirlik notlarini gorun →](/tr/erisilebilirlik/) · [Paletlere goz atin →](/tr/paletler/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Skeletonic Stylus bilesenleri",
  "description": "Skeletonic Stylus v1.1.7 ile gelen tum bilesenler.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Butonlar",
      "url": "https://skeletonic.io/tr/bilesenler/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Rozetler",
      "url": "https://skeletonic.io/tr/bilesenler/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Uyarilar",
      "url": "https://skeletonic.io/tr/bilesenler/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Kartlar",
      "url": "https://skeletonic.io/tr/bilesenler/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Form alanlari",
      "url": "https://skeletonic.io/tr/bilesenler/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Izgara",
      "url": "https://skeletonic.io/tr/bilesenler/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Baslik ve hamburger navigasyon",
      "url": "https://skeletonic.io/tr/bilesenler/#header"
    }
  ]
}
</script>
