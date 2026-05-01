---
title: "Thanh phan"
name: "Skeletonic Stylus"
description: "Vi du HTML truc tiep cua moi thanh phan Skeletonic Stylus, duoc nhom lai, neo va hien thi voi chinh stylesheet dang duoc gioi thieu."
layout: page
language: vi
permalink: https://skeletonic.io/vi/thanh-phan/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "thanh phan skeletonic, nut bam, the, bieu mau, canh bao, huy hieu, header, navbar, hamburger css"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

Moi vi du ben duoi duoc **hien thi voi chinh stylesheet dang duoc
gioi thieu**. Khong preprocessor. Khong JavaScript. Khong phu thuoc bo
sung. Sao chep bat ky doan ma nao vao tap HTML moi va no hoat dong.

<nav aria-label="Tren trang nay">
<p><strong>Tren trang nay</strong></p>
<ul>
<li><strong>Dau vao</strong> — <a href="#buttons">Nut bam</a> · <a href="#badges">Huy hieu</a></li>
<li><strong>Phan hoi</strong> — <a href="#alerts">Canh bao</a></li>
<li><strong>Be mat</strong> — <a href="#cards">The</a></li>
<li><strong>Bieu mau</strong> — <a href="#form-fields">Truong bieu mau</a></li>
<li><strong>Bo cuc</strong> — <a href="#grid">Luoi</a> · <a href="#header">Header &amp; menu hamburger</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="Dau vao">

<h2 id="inputs">Dau vao</h2>

Cac phan tu tuong tac ma nguoi dung nhan, cham hoac focus de dieu khien
trang.

<h3 id="buttons">Nut bam</h3>

Mot nut hanh dong ngu nghia, co the tuy chinh giao dien. Bien the dac va
vien co sau mau thuong hieu moi loai.

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

Bien the vien:

```html
<a href="#" class="button primary-outline">Vien</a>
<a href="#" class="button secondary-outline">Vien</a>
```

<p>
  <a href="#" class="button primary-outline">Vien</a>
  <a href="#" class="button secondary-outline">Vien</a>
</p>

> **Luu y tro nang.** Moi bien the `.button` deu co vong
> `:focus-visible` va **vung cham toi thieu 24×24&nbsp;px**
> (WCAG&nbsp;2.2 SC&nbsp;2.5.8). Su dung `<button type="button">` cho
> hanh dong trong trang va `<a href>` chi cho dieu huong.

<h3 id="badges">Huy hieu</h3>

Nhan nho gon cho trang thai, so luong hoac danh muc. Kich thuoc chu co
dinh de huy hieu thang hang voi van ban xung quanh.

```html
<span class="badge">Mac dinh</span>
<span class="badge primary">Primary</span>
<span class="badge success">Thanh cong</span>
<span class="badge warning">Canh bao</span>
<span class="badge danger">Nguy hiem</span>
```

<section aria-labelledby="badges">
<p>
  <span class="badge">Mac dinh</span>
  <span class="badge primary">Primary</span>
  <span class="badge success">Thanh cong</span>
  <span class="badge warning">Canh bao</span>
  <span class="badge danger">Nguy hiem</span>
</p>
</section>

> **Luu y tro nang.** Huy hieu mac dinh la trang tri. Khi huy hieu
> mang tin hieu duy nhat (v.d. so chua doc), boc no trong
> tro giup an truc quan: `<span class="visually-hidden">3 tin nhan
> chua doc</span>`.

<hr class="hr-text" data-content="Phan hoi">

<h2 id="feedback">Phan hoi</h2>

Cac be mat thong bao cho nguoi dung biet dieu gi da xay ra — hoac sap
xay ra.

<h3 id="alerts">Canh bao</h3>

Thong bao trang thai voi y nghia ngu nghia. **Trong v2.0.0 moi bien the
duoc dat ten ro rang** trong `.alert-{primary,secondary,info,success,warning,error}`
de lop bien the khong xung dot voi cac lop trang thai khac tren trang.

```html
<div class="alert alert-primary" role="alert">
  <strong>Luu y.</strong> Day la canh bao primary.
</div>
<div class="alert alert-success" role="status">
  <strong>Da luu.</strong> Cac thay doi cua ban da duoc luu.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Can than.</strong> Hanh dong nay anh huong den trang thai chung.
</div>
<div class="alert alert-error" role="alert">
  <strong>Loi.</strong> Khong the luu bieu mau.
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>Luu y.</strong> Day la canh bao primary.
</div>

<div class="alert alert-success" role="status">
<strong>Da luu.</strong> Cac thay doi cua ban da duoc luu.
</div>

<div class="alert alert-warning" role="alert">
<strong>Can than.</strong> Hanh dong nay anh huong den trang thai chung.
</div>

<div class="alert alert-error" role="alert">
<strong>Loi.</strong> Khong the luu bieu mau.
</div>
</section>

> **Luu y tro nang.** Su dung `role="alert"` cho thong bao can chu y
> ngay (loi, canh bao) va `role="status"` cho xac nhan khong khan cap.
> Ca hai deu pho bay thong bao cho cong nghe ho tro ngay khi xuat hien.

<hr class="hr-text" data-content="Be mat">

<h2 id="surface">Be mat</h2>

Cac container dong khung va nhom noi dung lien quan.

<h3 id="cards">The</h3>

Container co vien va dem cho mot don vi nhat quan. Ket hop voi luoi
`flex-N` de tao tuong the responsive.

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Nhe</h3>
      <p>45,7 KB nen, 8,3 KB gzip.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Tro nang</h3>
      <p>Tuan thu WCAG 2.2 ngay tu dau.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Mo-dun</h3>
      <p>Phan tang cascade de de ghi de.</p>
    </div>
  </article>
</section>
```

<section class="row" aria-labelledby="cards">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Nhe</h3>
      <p>45,7&nbsp;KB nen, 8,3&nbsp;KB gzip.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Tro nang</h3>
      <p>Tuan thu WCAG&nbsp;2.2 ngay tu dau.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Mo-dun</h3>
      <p>Phan tang cascade de de ghi de.</p>
    </div>
  </article>
</section>

> **Luu y tro nang.** Boc moi the trong mot landmark ngu nghia
> (`<article>`, `<section>`) va bat dau noi dung voi tieu de
> (`<h3>`). Nguoi dung trinh doc man hinh co the duyet danh sach the
> nhu cac vung dieu huong hang dau.

<hr class="hr-text" data-content="Bieu mau">

<h2 id="forms">Bieu mau</h2>

Dau vao, nhan va nhom de thu thap du lieu nguoi dung.

<h3 id="form-fields">Truong bieu mau</h3>

Nhan, o van ban, vung van ban, fieldset va legend — tat ca deu co kich
thuoc nhat quan voi phan con lai cua he thong thiet ke.

```html
<form>
  <label for="name">Ho ten</label>
  <input id="name" type="text" required>

  <label for="email">Email</label>
  <input id="email" type="email" required class="input-primary">

  <label for="msg">Tin nhan</label>
  <textarea id="msg" rows="4"></textarea>

  <button type="submit" class="button primary">Gui</button>
</form>
```

<section aria-labelledby="form-fields">
<form>
  <label for="demo-name">Ho ten</label>
  <input id="demo-name" type="text">

  <label for="demo-email">Email</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">Tin nhan</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">Gui (demo)</button></p>
</form>
</section>

> **Luu y tro nang.** Moi o nhap phai co `<label for="…">` duoc lien
> ket theo chuong trinh. Nhom cac dieu khien lien quan trong
> `<fieldset>` voi `<legend>`. Danh dau truong bat buoc bang
> `required` (va dau hoa thi hien thi trong nhan).

<hr class="hr-text" data-content="Bo cuc">

<h2 id="layout">Bo cuc</h2>

Cac primitives cau truc — luoi, container, header — dong khung toan
bo trang.

<h3 id="grid">Luoi</h3>

Luoi `flex-N` responsive (1 → 12 cot) xay tren flexbox. Cha `.row`
tu dong gap va wrap.

```html
<div class="row">
  <div class="flex-6">Nua</div>
  <div class="flex-6">Nua</div>
</div>
<div class="row">
  <div class="flex-4">Mot phan ba</div>
  <div class="flex-4">Mot phan ba</div>
  <div class="flex-4">Mot phan ba</div>
</div>
```

<section aria-labelledby="grid">
<div style="display:flex;flex-wrap:wrap;gap:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Nua</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Nua</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">1/3</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">1/3</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">1/3</div>
</div>
</section>

> **Luu y tro nang.** Thu tu hien thi phai khop voi thu tu DOM. Tranh
> sap xep lai hang voi `flex-direction: row-reverse` hoac `order:` —
> trinh doc man hinh va nguoi dung ban phim theo nguon, khong phai hinh anh.

<h3 id="header">Header &amp; menu hamburger</h3>

Mot header CSS-only hoan chinh voi nut chuyen doi hamburger responsive.
**Khong JavaScript.** Sao chep doan ma ben duoi vao trang HTML moi da
tai `skeletonic.min.css` va menu se thu gon, mo rong va giu focus dung
cach.

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
  <a class="sk-brand" href="#">Thuong hieu</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Chuyen doi dieu huong">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Trang chu</a></li>
    <li><a href="#">Tai lieu</a></li>
    <li><a href="#">Thanh phan</a></li>
    <li><a href="#">Gioi thieu</a></li>
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
  <a class="sk-brand" href="#">Thuong hieu</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Chuyen doi dieu huong">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Trang chu</a></li>
    <li><a href="#">Tai lieu</a></li>
    <li><a href="#">Thanh phan</a></li>
    <li><a href="#">Gioi thieu</a></li>
  </ul>
</header>
</section>

> **Luu y tro nang.** Checkbox an van nam trong thu tu tab de nguoi
> dung ban phim co the mo menu bang `Space` hoac `Enter`. `<label>`
> mang `aria-hidden` vi checkbox la nguon ten tro nang.
> Thu nho cua so duoi 640&nbsp;px de thay nut hamburger hoat dong.

[Xem ghi chu a11y day du →](/vi/tro-nang/) · [Duyet bang mau →](/vi/bang-mau/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Cac thanh phan Skeletonic Stylus",
  "description": "Moi thanh phan duoc cung cap trong Skeletonic Stylus v2.0.0.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Nut bam",
      "url": "https://skeletonic.io/vi/thanh-phan/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Huy hieu",
      "url": "https://skeletonic.io/vi/thanh-phan/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Canh bao",
      "url": "https://skeletonic.io/vi/thanh-phan/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "The",
      "url": "https://skeletonic.io/vi/thanh-phan/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Truong bieu mau",
      "url": "https://skeletonic.io/vi/thanh-phan/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Luoi",
      "url": "https://skeletonic.io/vi/thanh-phan/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Header va menu hamburger",
      "url": "https://skeletonic.io/vi/thanh-phan/#header"
    }
  ]
}
</script>
