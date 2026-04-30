---
title: "Catatan Perubahan"
name: "Skeletonic Stylus"
description: "Catatan rilis untuk Skeletonic Stylus, dengan v1.1.7 secara lengkap."
layout: page
permalink: https://skeletonic.io/id/catatan-perubahan/
author: Sebastien Rousseau
language: id
theme_color: "hsl(210, 100%, 42%)"
keywords: "catatan perubahan skeletonic, catatan rilis, v1.1.7, semver"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## v1.1.7 — 2026-04 (terkini)

Tahap "kesiapan rilis": a11y, rantai pasokan, kebersihan repositori.

### Aksesibilitas (WCAG 2.2)
- **`$primary` digelapkan** ke `hsl(210, 100%, 42%)` untuk kontras AA terhadap teks putih di tombol / badge / tautan.
- **`$secondary` digelapkan** ke `hsl(195, 100%, 33%)`.
- Ditambahkan cincin **focus-visible** pada setiap elemen interaktif.
- Ditambahkan pembungkus **`@media (prefers-reduced-motion)`** di sekitar modul animasi.
- Ditambahkan pertukaran token **`prefers-color-scheme: dark`**.
- Ditambahkan mixin **target-size(24px)** untuk memenuhi WCAG 2.2 SC 2.5.8.
- Ditambahkan pembantu **focus-not-obscured** scroll-margin untuk header sticky.

### Build &amp; rantai pasokan
- **Cascade layers** — setiap blok sekarang berada di `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}`.
- **CycloneDX SBOM** dibuat sebagai bagian dari tarball npm.
- **Anggaran `size-limit`** ditegakkan di CI: batas 8 KB gzipped pada stylesheet inti.
- **CVE-2023-44270** (line return postcss) dipatch melalui `pnpm.overrides`.
- Provenance + penandatanganan pada alur kerja npm publish (`--provenance --access public`).
- Plugin `stylelint-a11y` yang diarsipkan dihapus dari konfigurasi lint.

### Kebersihan repositori &amp; paket konsumen
- Direktori legacy `package/` dihapus; `dist/` sekarang menjadi satu-satunya sumber kebenaran bagi konsumen.
- README ditulis ulang untuk mencerminkan jalur instal v1.1.7.
- `dist/` di-commit; `debug/` dihasilkan dan di-gitignore.
- `.github/workflows/npm-publish.yml` baru berbasis tag.

### Perbaikan bug (P0)
- **Regresi parent-selector `row $:after`** — `$` yang tersesat diganti dengan `&` di `src/stylus/components/_grid.styl`.
- **`.alternate`** salah menerapkan `animation-direction: reverse` alih-alih `alternate`.
- **Namespace `.alert-*`** — `.alert.success` → `.alert.alert-success` untuk menghindari tabrakan dengan kelas state.

[Catatan rilis v1.1.7 lengkap di GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases)

<hr class="hr-text" data-content="Riwayat">

## Rilis sebelumnya

- **v1.1.6** — pembersihan internal, pembaruan dependensi.
- **v1.1.5** — ditambahkan palet Material.
- **v1.1.0** — palet Tachyons + refaktor grid.
- **v1.0.5** — rilis "legacy" terakhir sebelum penyapuan WCAG 2.2.
- **v1.0.0** — rilis publik awal (2018).

Untuk riwayat commit-by-commit, lihat
[halaman GitHub Releases ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases).
