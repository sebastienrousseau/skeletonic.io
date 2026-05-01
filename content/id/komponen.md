---
title: "Komponen"
name: "Skeletonic Stylus"
description: "Contoh HTML langsung dari setiap komponen Skeletonic Stylus, dikelompokkan, diberi jangkar, dan dirender dengan stylesheet yang sama yang sedang didemonstrasikan."
layout: page
permalink: https://skeletonic.io/id/komponen/
date: 2026-04-08
author: Sebastien Rousseau
language: id
theme_color: "hsl(210, 100%, 42%)"
keywords: "komponen skeletonic, tombol, kartu, formulir, peringatan, badge, header, navbar, hamburger css"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

Setiap contoh di bawah ini **dirender dengan stylesheet yang sama yang sedang didemonstrasikan**. Tanpa preprocessor. Tanpa JavaScript. Tanpa dependensi tambahan. Salin cuplikan mana pun ke file HTML baru dan langsung berfungsi.

<nav aria-label="Di halaman ini">
<p><strong>Di halaman ini</strong></p>
<ul>
<li><strong>Input</strong> — <a href="#buttons">Tombol</a> · <a href="#badges">Badge</a></li>
<li><strong>Umpan balik</strong> — <a href="#alerts">Peringatan</a></li>
<li><strong>Permukaan</strong> — <a href="#cards">Kartu</a></li>
<li><strong>Formulir</strong> — <a href="#form-fields">Kolom formulir</a></li>
<li><strong>Tata letak</strong> — <a href="#grid">Grid</a> · <a href="#header">Header &amp; navigasi hamburger</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="Input">

<h2 id="inputs">Input</h2>

Elemen interaktif yang diklik, diketuk, atau difokuskan pengunjung untuk mengoperasikan halaman.

<h3 id="buttons">Tombol</h3>

Pemicu aksi semantik yang dapat disesuaikan temanya. Varian solid dan outline masing-masing menyertakan enam warna merek.

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

Varian outline:

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">Outline</a>
  <a href="#" class="button secondary-outline">Outline</a>
</p>

> **Catatan aksesibilitas.** Setiap varian `.button` dilengkapi dengan cincin `:focus-visible` dan **area sentuh minimum 44x44&nbsp;px** (WCAG&nbsp;2.2 SC&nbsp;2.5.8). Gunakan `<button type="button">` untuk aksi di dalam halaman dan `<a href>` hanya untuk navigasi.

<h3 id="badges">Badge</h3>

Label ringkas untuk status, jumlah, atau kategori. Ukuran teks tetap sehingga badge sejajar dengan teks di sekitarnya.

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

> **Catatan aksesibilitas.** Badge bersifat dekoratif secara bawaan. Ketika badge membawa satu-satunya sinyal (misalnya jumlah belum dibaca), bungkus dalam pembantu visually-hidden: `<span class="visually-hidden">3 pesan belum dibaca</span>`.

<hr class="hr-text" data-content="Umpan balik">

<h2 id="feedback">Umpan balik</h2>

Permukaan yang memberi tahu pengunjung bahwa sesuatu telah terjadi — atau akan terjadi.

<h3 id="alerts">Peringatan</h3>

Pesan status dengan maksud semantik. **Di v2.0.0 setiap varian diberi namespace secara eksplisit** di bawah `.alert-{primary,secondary,info,success,warning,error}` sehingga kelas varian tidak akan bentrok dengan kelas state lain di halaman.

```html
<div class="alert alert-primary" role="alert">
  <strong>Perhatian.</strong> Ini adalah peringatan primary.
</div>
<div class="alert alert-success" role="status">
  <strong>Tersimpan.</strong> Perubahan Anda telah disimpan.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Hati-hati.</strong> Tindakan ini memengaruhi state bersama.
</div>
<div class="alert alert-error" role="alert">
  <strong>Error.</strong> Formulir tidak dapat disimpan.
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>Perhatian.</strong> Ini adalah peringatan primary.
</div>

<div class="alert alert-success" role="status">
<strong>Tersimpan.</strong> Perubahan Anda telah disimpan.
</div>

<div class="alert alert-warning" role="alert">
<strong>Hati-hati.</strong> Tindakan ini memengaruhi state bersama.
</div>

<div class="alert alert-error" role="alert">
<strong>Error.</strong> Formulir tidak dapat disimpan.
</div>
</section>

> **Catatan aksesibilitas.** Gunakan `role="alert"` untuk pesan yang memerlukan perhatian segera (error, peringatan) dan `role="status"` untuk konfirmasi yang tidak mendesak. Keduanya mengekspos pesan ke teknologi bantu saat pesan muncul.

<hr class="hr-text" data-content="Permukaan">

<h2 id="surface">Permukaan</h2>

Kontainer yang membingkai dan mengelompokkan konten terkait.

<h3 id="cards">Kartu</h3>

Kontainer berbingkai dan berpadding untuk satu unit yang koheren. Padukan dengan grid `flex-N` untuk dinding kartu responsif.

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Ringan</h3>
      <p>45,7 KB diminifikasi, 8,3 KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Aksesibel</h3>
      <p>Sesuai WCAG 2.2 sejak awal.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modular</h3>
      <p>Cascade-layered untuk kemudahan penimpaan.</p>
    </div>
  </article>
</section>
```

<section class="row" aria-labelledby="cards">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Ringan</h3>
      <p>45,7&nbsp;KB diminifikasi, 8,3&nbsp;KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Aksesibel</h3>
      <p>Sesuai WCAG&nbsp;2.2 sejak awal.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modular</h3>
      <p>Cascade-layered untuk kemudahan penimpaan.</p>
    </div>
  </article>
</section>

> **Catatan aksesibilitas.** Bungkus setiap kartu dalam landmark semantik (`<article>`, `<section>`) dan mulai kontennya dengan heading (`<h3>`). Pengguna screen reader kemudian dapat menelusuri daftar kartu sebagai wilayah yang dapat dinavigasi.

<hr class="hr-text" data-content="Formulir">

<h2 id="forms">Formulir</h2>

Input, label, dan pengelompokan untuk mengumpulkan data pengguna.

<h3 id="form-fields">Kolom formulir</h3>

Label, input teks, textarea, fieldset, dan legend — semua berukuran konsisten dengan seluruh sistem desain.

```html
<form>
  <label for="name">Nama</label>
  <input id="name" type="text" required>

  <label for="email">Email</label>
  <input id="email" type="email" required class="input-primary">

  <label for="msg">Pesan</label>
  <textarea id="msg" rows="4"></textarea>

  <button type="submit" class="button primary">Kirim</button>
</form>
```

<section aria-labelledby="form-fields">
<form>
  <label for="demo-name">Nama</label>
  <input id="demo-name" type="text">

  <label for="demo-email">Email</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">Pesan</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">Kirim (demo)</button></p>
</form>
</section>

> **Catatan aksesibilitas.** Setiap input harus memiliki `<label for="...">` yang terhubung secara programatik. Kelompokkan kontrol terkait di dalam `<fieldset>` dengan `<legend>`. Tandai kolom wajib dengan `required` (dan tanda bintang yang terlihat di teks label).

<hr class="hr-text" data-content="Tata letak">

<h2 id="layout">Tata letak</h2>

Primitif struktural — grid, kontainer, header — yang membingkai seluruh halaman.

<h3 id="grid">Grid</h3>

Grid `flex-N` responsif (1 → 12 kolom) yang dibangun di atas flexbox. Parent `.row` memberikan gap dan wrap secara otomatis.

```html
<div class="row">
  <div class="flex-6">Setengah</div>
  <div class="flex-6">Setengah</div>
</div>
<div class="row">
  <div class="flex-4">Sepertiga</div>
  <div class="flex-4">Sepertiga</div>
  <div class="flex-4">Sepertiga</div>
</div>
```

<section aria-labelledby="grid">
<div style="display:flex;flex-wrap:wrap;gap:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Setengah</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Setengah</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Sepertiga</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Sepertiga</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Sepertiga</div>
</div>
</section>

> **Catatan aksesibilitas.** Urutan visual harus sesuai dengan urutan DOM. Hindari menyusun ulang baris dengan `flex-direction: row-reverse` atau `order:` — screen reader dan pengguna keyboard mengikuti sumber, bukan tampilan.

<h3 id="header">Header &amp; navigasi hamburger</h3>

Header lengkap khusus CSS dengan toggle hamburger responsif. **Tanpa JavaScript.** Salin cuplikan di bawah ke halaman HTML baru yang sudah memuat `skeletonic.min.css` dan menu akan melipat, mengembang, dan menangkap fokus dengan benar secara mandiri.

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
  <a class="sk-brand" href="#">Merek</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Buka/tutup navigasi">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Beranda</a></li>
    <li><a href="#">Dokumentasi</a></li>
    <li><a href="#">Komponen</a></li>
    <li><a href="#">Tentang</a></li>
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
  <a class="sk-brand" href="#">Merek</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Buka/tutup navigasi">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Beranda</a></li>
    <li><a href="#">Dokumentasi</a></li>
    <li><a href="#">Komponen</a></li>
    <li><a href="#">Tentang</a></li>
  </ul>
</header>
</section>

> **Catatan aksesibilitas.** Checkbox tersembunyi tetap dalam urutan tab sehingga pengguna keyboard dapat membuka menu dengan `Space` atau `Enter`. `<label>` menggunakan `aria-hidden` karena checkbox itu sendiri adalah sumber accessible name. Ubah ukuran jendela di bawah 640&nbsp;px untuk melihat toggle burger mengambil alih.

[Lihat catatan a11y lengkap →](/id/aksesibilitas/) · [Jelajahi palet →](/id/palet/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Komponen Skeletonic Stylus",
  "description": "Setiap komponen yang disertakan dalam Skeletonic Stylus v2.0.0.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Tombol",
      "url": "https://skeletonic.io/id/komponen/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Badge",
      "url": "https://skeletonic.io/id/komponen/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Peringatan",
      "url": "https://skeletonic.io/id/komponen/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Kartu",
      "url": "https://skeletonic.io/id/komponen/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Kolom formulir",
      "url": "https://skeletonic.io/id/komponen/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Grid",
      "url": "https://skeletonic.io/id/komponen/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Header & navigasi hamburger",
      "url": "https://skeletonic.io/id/komponen/#header"
    }
  ]
}
</script>
