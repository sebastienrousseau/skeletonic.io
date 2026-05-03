---
title: "Aksesibilitas — WCAG 2.2 di v2.0.0"
name: "Skeletonic Stylus"
description: "Apa yang disertakan v2.0.0 secara bawaan untuk kesesuaian WCAG 2.2 — cincin fokus, kontras, skip link, gerakan, dan mode gelap."
layout: page
permalink: https://skeletonic.io/id/aksesibilitas/
date: 2026-04-08
author: Sebastien Rousseau
language: id
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, aksesibilitas, focus visible, skip link, prefers reduced motion, kontras"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

> **Skeletonic Stylus v2.0.0 menyertakan kesesuaian WCAG 2.2 sebagai perilaku bawaan, bukan sebagai tema opsional.** Halaman ini mendokumentasikan apa yang sudah bawaan dan mixin apa yang dapat Anda pilih untuk kontrol lebih halus.

<hr class="hr-text" data-content="Bawaan">

## Yang Anda dapatkan secara gratis

| WCAG 2.2 SC | Apa yang dilakukan v2.0.0 | Cara memverifikasi |
|---|---|---|
| **1.4.3 Kontras (Minimum) — AA** | `--cl-primary` dan `--cl-secondary` digelapkan ke >= 4,5:1 terhadap putih | DevTools → pemeriksa kontras |
| **1.4.11 Kontras Non-teks — AA** | Batas formulir, tombol, badge semua >= 3:1 | Sama |
| **2.4.7 Fokus Terlihat — AA** | Setiap elemen yang dapat difokuskan memiliki cincin `:focus-visible` (kuning di latar gelap, biru di latar terang) | `Tab` di halaman mana pun |
| **2.4.11 Fokus Tidak Tertutup — AA (baru di 2.2)** | Header sticky memiliki tinggi dikurangi + scroll-margin fokus | `Tab` melewati header sticky |
| **2.5.8 Ukuran Target — AA (baru di 2.2)** | Tombol / tautan: area sentuh >= 24x24 CSS px | DevTools box model |
| **1.4.12 Jarak Teks — AA** | Semua elemen menghormati penimpaan line-height / letter-spacing pengguna | Timpa di DevTools |
| **2.3.3 Animasi dari Interaksi — AAA** | Semua kelas animasi dibungkus dalam `@media (prefers-reduced-motion: no-preference)` | Kurangi gerakan tingkat OS |
| **1.4.10 Reflow — AA** | Tata letak berfungsi di 320 px tanpa scroll horizontal | DevTools viewport sempit |
| **Mode gelap** | `prefers-color-scheme: dark` menukar token secara otomatis | Toggle mode gelap OS |

<hr class="hr-text" data-content="Mixin">

## Mixin Stylus yang dapat Anda pilih

Jika Anda mengompilasi dari sumber, mixin berikut tersedia di `src/stylus/utilities/mixins.styl`:

| Mixin | Kegunaan |
|---|---|
| `focus-ring()` | Cincin fokus kontras tinggi yang menghormati `:focus-visible` |
| `visually-hidden()` | Teks hanya untuk screen reader yang tetap dapat difokuskan |
| `skip-link()` | Jangkar yang terlihat saat fokus |
| `reduced-motion()` | Membungkus blok apa pun dalam `prefers-reduced-motion: no-preference` |
| `forced-colors()` | Penyesuaian untuk Windows High Contrast Mode |
| `target-size(24px)` | Memberikan padding pada elemen yang dapat diklik ke target sentuh minimum |

Contoh:

```stylus
// Terapkan cincin fokus kuat pada tombol kustom
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="Skip link">

## Pembantu skip-link

Letakkan ini **sebagai hal pertama di dalam `<body>`**:

```html
<a href="#main-content" class="skip-link">Langsung ke konten utama</a>
```

Kelas ini **tidak** ada di stylesheet inti (sehingga berat halaman tidak bertambah); ini adalah cuplikan 4 baris yang Anda buat sendiri atau gunakan mixin `skip-link()` yang disertakan. Situs ini menggunakannya — fokuskan halaman dan tekan Tab untuk melihatnya muncul di kiri atas.

<hr class="hr-text" data-content="Verifikasi">

## Memverifikasi halaman Anda sendiri

Pustaka ini menyertakan skrip `a11y-test.mjs` di bawah `scripts/` yang menjalankan [axe-core](https://github.com/dequelabs/axe-core) terhadap setiap URL yang Anda berikan.

```bash
node scripts/a11y-test.mjs https://example.com
```

CI menjalankan skrip ini terhadap halaman showcase `dist/index.html` pada setiap push.

[Baca tentang rilis v2.0.0 →](/id/catatan-perubahan/) ·
[Lihat halaman keamanan →](/id/keamanan/)
