---
title: "Keamanan &amp; rantai pasokan"
name: "Skeletonic Stylus"
description: "Bagaimana Skeletonic Stylus v2.0.0 mengamankan pipeline build-nya, menandatangani rilis, dan menyertakan SBOM."
layout: page
permalink: https://skeletonic.io/id/keamanan/
date: 2026-04-08
author: Sebastien Rousseau
language: id
theme_color: "hsl(210, 100%, 42%)"
keywords: "keamanan css, sbom, cyclonedx, provenance npm, openssf scorecard, rantai pasokan"
---

## Performa

- **45,7&nbsp;KB diminifikasi · 8,3&nbsp;KB gzipped · 6,9&nbsp;KB brotli** untuk stylesheet inti lengkap.
- **Tanpa JavaScript** — Stylus murni → CSS murni, tanpa biaya runtime.
- **Cascade-layered** — penimpaan menang tanpa `!important`.
- **Anggaran `size-limit` ditegakkan** di CI pada setiap commit.

Performa adalah kontrol keamanan. Setiap byte yang tidak dikirimkan adalah satu byte yang lebih sedikit untuk diaudit, ditandatangani, dan diverifikasi.

## Ringkasan rantai pasokan

| Kontrol | Status v2.0.0 |
|---|---|
| **CycloneDX SBOM** | Dibuat pada setiap rilis, disimpan di `dist/sbom.json` |
| **Provenance npm** | Diaktifkan (`--provenance --access public`) |
| **Tag git yang ditandatangani** | Ditandatangani SSH oleh kunci pengelola |
| **Dependabot yang dikunci** | Bump mingguan, ditinjau otomatis |
| **Anggaran ukuran** | `size-limit` batas 8 KB gzipped, gagalkan CI saat regresi |
| **Lint** | `stylelint` + asersi a11y pada setiap push |
| **CodeQL** | Diaktifkan untuk `javascript` dan file konfigurasi |
| **CVE-2023-44270** | **Dipatch** melalui `pnpm.overrides` yang memperbarui `postcss@7` |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

Setiap tarball yang dipublikasikan menyertakan CycloneDX SBOM di `dist/sbom.json`. Anda dapat memverifikasi paket yang baru diinstal dengan:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "2.0.0"
```

SBOM dibuat dengan `cyclonedx-npm` selama alur kerja publikasi.

<hr class="hr-text" data-content="Provenance">

## Provenance npm

Artefak yang dipublikasikan ditandatangani menggunakan
[provenance paket npm](https://docs.npmjs.com/generating-provenance-statements).

Anda dapat memverifikasinya setelah instalasi dengan:

```bash
npm view @sebastienrousseau/skeletonic-stylus@2.0.0 --json | \
  jq '.dist."npm-signature"'
```

Attestation yang ditandatangani menghubungkan tarball kembali ke run GitHub Actions yang tepat yang memproduksinya.

<hr class="hr-text" data-content="CVE">

## CVE yang diketahui &amp; patch

| CVE | Keparahan | Status |
|---|---|---|
| **CVE-2023-44270** (parsing line return postcss) | Sedang | **Dipatch** di v2.0.0 melalui `pnpm.overrides` yang memperbarui `postcss` ke >= 8.4.31 |

Basis data advisory Snyk dan feed GitHub Security Advisories dipantau secara berkelanjutan; patch keamanan dikirimkan sebagai **rilis level patch**.

<hr class="hr-text" data-content="Pelaporan">

## Melaporkan kerentanan

Harap **jangan** membuka isu GitHub publik untuk laporan keamanan. Sebagai gantinya, gunakan kanal privat di:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

Laporan dikonfirmasi dalam **72 jam**. Perbaikan dikirimkan dalam **14 hari** untuk masalah sedang dan **48 jam** untuk masalah kritis.

[Kembali ke beranda →](/id/) · [Baca catatan perubahan →](/id/catatan-perubahan/)
