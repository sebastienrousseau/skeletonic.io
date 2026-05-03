---
title: "Tentang Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus adalah pustaka CSS Stylus sumber terbuka untuk penataan UI yang aksesibel, cepat, dan modular."
layout: page
permalink: https://skeletonic.io/id/tentang/
date: 2026-04-08
author: Sebastien Rousseau
language: id
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, tentang, stylus, css framework, filosofi"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

<dl class="stat-strip" aria-label="Project facts">
  <div><dt>Version</dt><dd>2.0.0</dd></div>
  <div><dt>Gzip</dt><dd>7.7 KB</dd></div>
  <div><dt>Brotli</dt><dd>6.7 KB</dd></div>
  <div><dt>License</dt><dd>MIT or Apache-2.0</dd></div>
  <div><dt>Standard</dt><dd>WCAG 2.2 AA</dd></div>
</dl>

## Versi singkat

**Skeletonic Stylus** adalah pustaka CSS [Stylus](https://stylus-lang.com) sumber terbuka untuk penataan UI yang aksesibel, cepat, dan modular.

Lahir pada 2018 sebagai eksperimen pribadi dalam **mengirimkan lebih sedikit CSS** tanpa mengorbankan ergonomi pustaka komponen sesungguhnya. Delapan tahun kemudian, tujuannya tidak berubah.

## Yang Anda dapatkan

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="Kilat" width="64" height="64" loading="lazy" decoding="async">
    <h3>Secepat kilat</h3>
    <p>Desain dan sesuaikan antarmuka responsif dalam hitungan menit. Variabel CSS native, kelas predefinisi, grid 12 kolom untuk setiap elemen HTML semantik.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="Bulu" width="64" height="64" loading="lazy" decoding="async">
    <h3>Ringan</h3>
    <p>8,3&nbsp;KB gzipped. Halaman dimuat lebih cepat. Setiap blok bangunan esensial tetap ada.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="Perangkat responsif" width="64" height="64" loading="lazy" decoding="async">
    <h3>Desain responsif</h3>
    <p>Dirancang untuk desktop dan perangkat seluler. Tata letak menyesuaikan perangkat apa pun. Dioptimalkan untuk sentuhan, HTML semantik menyeluruh.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="Aksesibilitas" width="64" height="64" loading="lazy" decoding="async">
    <h3>Aksesibilitas</h3>
    <p>WCAG&nbsp;2.2 sudah terintegrasi: cincin focus-visible, kontras AA, pembantu skip-link, komponen ramah keyboard, dukungan reduced-motion — tanpa stylesheet tambahan, tanpa boilerplate <code>aria-*</code>.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="Blok komponen" width="64" height="64" loading="lazy" decoding="async">
    <h3>Pustaka komponen</h3>
    <p>Komponen CSS modular dan mixin Stylus. Tombol, formulir, kartu, peringatan, badge, palet, dan animasi — bersih, modular, siap pakai.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="Logo GitHub" width="64" height="64" loading="lazy" decoding="async">
    <h3>Gratis &amp; sumber terbuka</h3>
    <p>Dirancang, dibangun, dan dipelihara oleh Sebastien Rousseau. Berlisensi ganda di bawah <strong>MIT</strong> atau <strong>Apache&nbsp;2.0</strong>. Tanpa biaya, tanpa biaya lisensi, termasuk untuk penggunaan komersial.</p>
  </article>
</div>

## Perbandingan

Satu stylesheet mandiri mencakup tipografi, tombol, formulir, kartu, tabel, palet, animasi, dan kelas utilitas. Tanpa JavaScript. Tanpa langkah build yang diperlukan. Tanpa dependensi peer terhadap Bootstrap, Tailwind, atau Bulma.

| Fitur | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| Ukuran gzipped | **8,3&nbsp;KB** | ~30&nbsp;KB | ~10&nbsp;KB (varies) | ~30&nbsp;KB |
| Kesesuaian WCAG 2.2 | **Bawaan** | Sebagian | Manual | Sebagian |
| Cascade layers | **Ya (`@layer`)** | Tidak | Tidak | Tidak |
| Mode gelap | **`prefers-color-scheme`** | Opsional | Berbasis kelas | Opsional |
| JavaScript diperlukan | **Tidak** | Ya (Popper) | Tidak | Tidak |
| CycloneDX SBOM | **Ya** | Tidak | Tidak | Tidak |
| Reduced-motion | **Dihormati** | Sebagian | Manual | Sebagian |
| Lisensi | MIT atau Apache 2.0 | MIT | MIT | MIT |

## Prinsip

1. **Aksesibilitas adalah fondasi, bukan tambahan.** Kesesuaian WCAG 2.2 tertanam di setiap komponen, tidak pernah ditempelkan sebagai "tema".
2. **Setiap byte penting.** Satu stylesheet yang dikirimkan tidak boleh membengkakkan anggaran berat halaman. Batas 8&nbsp;KB gzipped ditegakkan di CI.
3. **Cascade layers mengalahkan perang spesifisitas.** Timpa apa pun dengan percaya diri — tanpa `!important`, tanpa trik urutan DOM.
4. **Stylus tetap bagus.** Ringkas, ekspresif, dan memungkinkan pustaka tetap dalam ~3.000 baris yang mudah dibaca.
5. **Membosankan itu fitur.** Tanpa dependensi JS. Tanpa sihir build-time. Tanpa perubahan nama yang merusak. Kelas CSS yang melakukan persis seperti namanya.
6. **Dapat disesuaikan dalam hitungan detik.** CSS custom properties native untuk warna, spasi, tipografi, dan radius.
7. **Rantai pasokan yang diperkuat.** Provenance npm yang ditandatangani. Pembaruan Dependabot yang dikunci. CVE-2023-44270 dipatch melalui overrides.

## Versioning &amp; semver

Skeletonic Stylus mengikuti [Semantic Versioning 2.0](https://semver.org).

| Level | Kapan | Contoh |
|---|---|---|
| **Major** | Menghapus atau mengganti nama kelas publik, mixin, atau token | 1.x → 2.0 |
| **Minor** | Menambahkan komponen, mixin, atau token baru | 1.1 → 1.2 |
| **Patch** | Perbaikan bug, penyempurnaan a11y, performa, keamanan | 1.1.6 → 2.0.0 |

Semua nama kelas publik, semua CSS custom properties, dan semua mixin Stylus yang diekspor adalah bagian dari API publik. Perubahan yang merusak mendapat bump major dan panduan migrasi.

## Pengelolaan

Skeletonic Stylus dirancang, dibangun, dan dipelihara oleh
[Sebastien Rousseau](https://sebastienrousseau.com). Berlisensi ganda
di bawah [MIT](https://opensource.org/licenses/MIT) dan
[Apache 2.0](https://opensource.org/licenses/Apache-2.0).

Isu, ide, dan kontribusi dipersilakan —
[lihat panduan kontribusi](/id/kontribusi/).
