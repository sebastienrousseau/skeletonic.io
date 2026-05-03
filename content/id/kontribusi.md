---
title: "Kontribusi"
name: "Skeletonic Stylus"
description: "Cara mengajukan isu, mengusulkan perubahan, dan mengirimkan pull request ke Skeletonic Stylus."
layout: page
permalink: https://skeletonic.io/id/kontribusi/
date: 2026-04-08
author: Sebastien Rousseau
language: id
theme_color: "hsl(210, 100%, 42%)"
keywords: "kontribusi, sumber terbuka, pull request, isu, konvensi"
---

Skeletonic Stylus adalah proyek sumber terbuka; kontribusi dalam berbagai ukuran dipersilakan — dari perbaikan typo hingga komponen baru.

<hr class="hr-text" data-content="Mulai cepat">

## Mulai cepat

```bash
# 1. Fork &amp; clone
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. Instal (pnpm via corepack)
corepack enable
pnpm install

# 3. Build
pnpm run build           # pipeline lengkap (stylus → prettier → stylelint → autoprefixer → csso)

# 4. Lint &amp; uji
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="Konvensi">

## Konvensi

- **Nama branch:** `feat/deskripsi-singkat`, `fix/deskripsi-singkat`, `docs/deskripsi-singkat`.
- **Commit:** [Conventional Commits](https://www.conventionalcommits.org). Semua commit ditandatangani.
- **Stylus:** indentasi 4 spasi, tanpa titik koma, utamakan `$variables` daripada angka ajaib, setiap kelas publik berada dalam cascade layer.
- **Aksesibilitas:** setiap komponen baru harus terbukti memenuhi WCAG 2.2 AA; jalankan `node scripts/a11y-test.mjs` terhadap showcase sebelum membuka PR.
- **Anggaran ukuran:** stylesheet inti harus tetap di bawah **8 KB gzipped**. Jika perubahan Anda melebihi batas, berikan justifikasi di PR.

<hr class="hr-text" data-content="Pull request">

## Pull request

1. Buka isu terlebih dahulu untuk hal yang tidak sepele — menghemat pengerjaan ulang.
2. Jaga PR tetap fokus: satu perubahan logis per PR.
3. Perbarui `CHANGELOG.md` di bawah "Unreleased".
4. Pastikan CI hijau sebelum meminta review.
5. Squash-merge adalah default; pesan commit akan dibersihkan saat merge.

<hr class="hr-text" data-content="Kode etik">

## Kode etik

Dengan berpartisipasi, Anda setuju untuk mematuhi
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
Bersikap baik, bersabar, berasumsi niat baik.

[Buka isu ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[Buka PR ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
