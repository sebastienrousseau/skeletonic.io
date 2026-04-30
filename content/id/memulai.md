---
title: "Memulai dengan Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Instal Skeletonic Stylus dari npm atau CDN, impor ke dalam build Stylus Anda, dan timpa variabel dalam hitungan detik."
layout: page
permalink: https://skeletonic.io/id/memulai/
date: 2026-04-08
author: Sebastien Rousseau
language: id
theme_color: "hsl(210, 100%, 42%)"
keywords: "instal skeletonic, setup stylus, css cdn, memulai"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## Pendahuluan

Baru mengenal Skeletonic Stylus? Di **v1.1.7** lebih mudah dari sebelumnya untuk memilih fitur yang Anda butuhkan. Berkat jejak yang kecil (8,3&nbsp;KB gzipped untuk stylesheet inti), ia terintegrasi dengan cepat ke dalam aplikasi web apa pun — tidak perlu framework JavaScript, tidak perlu langkah build jika Anda menggunakan CDN.

Setiap jalur dibahas di bawah — pilih yang sesuai.

## 1. Unduh dan instal

Anda dapat menginstal Skeletonic Stylus melalui **pnpm**, **npm**, atau **yarn**, atau memuatnya langsung dari CDN. Anda juga dapat meng-host sendiri file distribusi secara lokal jika diinginkan.

### Dari pengelola paket (direkomendasikan)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7

# npm
npm install @sebastienrousseau/skeletonic-stylus@1.1.7

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@1.1.7
```

### Dari CDN

Jika Anda hanya membutuhkan CSS yang sudah dikompilasi, masukkan salah satu ini ke dalam `<head>` Anda:

```html
<!-- jsDelivr -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">

<!-- unpkg -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">
```

Untuk integritas maksimum, salin **hash SRI** dari catatan rilis v1.1.7 dan tambahkan atribut `integrity="sha384-..."`.

### Lokasi CDN alternatif

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css` | Ya | Ya |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css` | Ya | Tidak |

### Unduh rilis GitHub

Lebih suka tarball berversi? Ambil rilis terbaru dari
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
dan letakkan isi `dist/` langsung ke dalam proyek Anda.

### Clone repositori GitHub

Clone repositori utama untuk mendapatkan semua file sumber termasuk skrip build:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **Tips:** tandatangani commit Anda — proyek ini mewajibkan commit yang ditandatangani di CI.
> Gunakan `git commit -S -m "..."` (atau atur `commit.gpgsign = true` di konfigurasi git global Anda).

## 2. Gunakan CSS yang sudah dikompilasi

Pustaka ini menyediakan beberapa bundle yang sudah dibuat sebelumnya di bawah `dist/css/` setelah diinstal:

| File | Tujuan | Ukuran (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | Reset + token + layout + elemen + komponen + utilitas | 45,7 KB / 8,3 KB |
| `animations/skeletonic-animations.min.css` | Modul animasi opsional | ≈213 KB / ≈6.9 KB |
| `palettes/material/skeletonic-material.min.css` | Palet warna Material | ≈17.4 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Palet utilitas Tachyons | 7,3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | Palet web-safe | ≈3.5 KB |

Setiap modul berdiri sendiri — pilih kombinasi terkecil yang Anda butuhkan.

## 3. Gunakan dari Stylus

Jika Anda sudah memiliki pipeline Stylus, Anda dapat mengimpor modul sumber dan membiarkan bundler Anda melakukan tree-shake pada bagian yang tidak digunakan:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

Atau impor hanya bagian yang Anda butuhkan:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. Timpa warna merek

Skeletonic mengekspos token desainnya sebagai **CSS custom properties** sehingga Anda dapat menyesuaikan tema tanpa mengompilasi ulang Stylus:

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

Selesai — setiap komponen yang menggunakan warna primer akan mengikuti.

## 5. Verifikasi instalasi

Pemeriksaan minimal "apakah berhasil?":

```html
<!doctype html>
<html lang="id">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>Berhasil.</h1>
    <a href="#" class="button primary">Halo, dunia</a>
  </body>
</html>
```

Jika heading berukuran fleksibel dan tombol berbentuk pil biru, Anda sudah selesai.

## 6. Apa saja yang termasuk

Di dalam paket Anda akan menemukan setiap file sumber, bundle CSS yang dikompilasi dan diminifikasi, source map, dan pohon Stylus lengkap yang diatur berdasarkan kategori:

```text
@sebastienrousseau/skeletonic-stylus@1.1.7
├── CHANGELOG.md
├── LICENSE-APACHE
├── LICENSE-MIT
├── README.md
├── package.json
├── dist/
│   └── css/
│       ├── core/
│       │   ├── skeletonic.css
│       │   ├── skeletonic.css.map
│       │   └── skeletonic.min.css
│       ├── animations/
│       │   ├── skeletonic-animations.css
│       │   └── skeletonic-animations.min.css
│       └── palettes/
│           ├── material/skeletonic-material.min.css
│           ├── tachyons/skeletonic-tachyons.min.css
│           └── websafe/skeletonic-websafe.min.css
└── src/
    └── stylus/
        ├── animations/      bounce, fade, pulse, shake, vanish, zoom…
        ├── base/            reset, helpers
        ├── components/      card, header, navbar, alert
        ├── configurations/  colors, variables
        ├── elements/        button, form, table, link, list, code…
        ├── fonts/           font-face declarations
        ├── layout/          container, grid, media-queries
        ├── palettes/        material, tachyons, websafe
        ├── utilities/       mixins
        └── skeletonic.styl  ← satu impor yang menarik semuanya
```

Setiap modul berdiri sendiri — ambil hanya bundle yang Anda butuhkan untuk menjaga payload CSS sekecil mungkin.

## Pertanyaan yang sering diajukan

**Bagaimana cara menginstal Skeletonic Stylus?**
Jalankan `pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7`. Atau muat CSS yang sudah dikompilasi langsung dari CDN — tidak perlu langkah build.

**Apakah memerlukan JavaScript?**
Tidak. Stylesheet inti adalah CSS murni, tanpa biaya runtime. Komponen bekerja tanpa satu baris pun JS.

**Apakah siap WCAG 2.2?**
Ya. v1.1.7 menyertakan kontras sesuai AA, cincin focus-visible, pembantu skip-link, dukungan reduced-motion, dan mode gelap secara bawaan.

**Berapa ukuran gzipped-nya?**
45,7&nbsp;KB diminifikasi, **8,3&nbsp;KB gzipped**, 6,9&nbsp;KB brotli untuk stylesheet inti lengkap. Batas 8&nbsp;KB ditegakkan di CI.

**Lisensi apa yang digunakan?**
Berlisensi ganda di bawah MIT dan Apache 2.0 — pilih yang sesuai kebutuhan proyek Anda. Gratis untuk penggunaan komersial dan pribadi.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Bagaimana cara menginstal Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jalankan pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7. Atau muat CSS yang sudah dikompilasi langsung dari CDN — tidak perlu langkah build."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah Skeletonic Stylus memerlukan JavaScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tidak. Stylesheet inti adalah CSS murni, tanpa biaya runtime. Komponen bekerja tanpa satu baris pun JavaScript."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah Skeletonic Stylus siap WCAG 2.2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya. v1.1.7 menyertakan kontras sesuai AA, cincin focus-visible, pembantu skip-link, dukungan reduced-motion, dan mode gelap secara bawaan."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa ukuran gzipped Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "45,7 KB diminifikasi, 8,3 KB gzipped, 6,9 KB brotli untuk stylesheet inti lengkap. Batas 8 KB ditegakkan di CI pada setiap commit."
      }
    },
    {
      "@type": "Question",
      "name": "Lisensi apa yang digunakan Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Berlisensi ganda di bawah MIT dan Apache 2.0 — pilih yang sesuai kebutuhan proyek Anda. Gratis untuk penggunaan komersial dan pribadi."
      }
    }
  ]
}
</script>

[Jelajahi komponen →](/id/komponen/)
