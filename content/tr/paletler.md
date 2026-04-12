---
title: "Paletler — Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus v1.1.7 ile gelen Material, Tachyons ve web-safe renk paletleri."
layout: page
permalink: https://skeletonic.io/tr/paletler/
date: 2026-04-08
author: Sebastien Rousseau
language: tr
theme_color: "hsl(210, 100%, 42%)"
keywords: "css palet, material, tachyons, websafe, tasarim tokenlari"
---

Skeletonic Stylus v1.1.7, her biri ayri kucultulmus bir stil sayfasi
olarak dagitilan **uc istege bagli renk paleti** sunar; boylece yalnizca
kullandiginiz icin odeme yaparsiniz.

| Palet | Dosya | Boyut (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | ≈17.4 KB |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7,3 KB |
| Web-safe | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | ≈3.5 KB |

Bu sayfa **Tachyons** paletini yuklemektedir, boylece asagidaki renk
yardimci siniflari dogru sekilde render edilir.

<hr class="hr-text" data-content="Griler">

## Skeletonic cekirdek grileri

Cekirdek stil sayfasi, `--cl-grey-100` ... `--cl-grey-1000` olarak
acilan erisilebilir 11 adimli bir gri olcegi sunar.

<div class="row">
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-100);">
    100
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-300);">
    300
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-500); color: #fff;">
    500
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-700); color: #fff;">
    700
  </div>
</div>

<div class="row">
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-200);">
    200
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-400);">
    400
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-600); color: #fff;">
    600
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-900); color: #fff;">
    900
  </div>
</div>

<hr class="hr-text" data-content="Marka">

## Marka renkleri (v1.1.7 — AA kontrast)

v1.1.7'de birincil ve ikincil token'lar, beyaz metin uzerinde kutudan
ciktiginda **WCAG 4,5:1** kontrast oranini karsilamak icin
karartilmistir.

<div class="row margin-top-3">
  <div class="flex-4 padding-3 text-center" style="background-color: hsl(210, 100%, 42%); color: #fff;">
    <strong>--cl-primary</strong><br>hsl(210 100% 42%)
  </div>
  <div class="flex-4 padding-3 text-center" style="background-color: hsl(195, 100%, 33%); color: #fff;">
    <strong>--cl-secondary</strong><br>hsl(195 100% 33%)
  </div>
  <div class="flex-4 padding-3 text-center" style="background-color: #757c8a; color: #fff;">
    <strong>--cl-tertiary</strong><br>#757c8a
  </div>
</div>

> **Not.** `--cl-tertiary` (#757c8a) beyaza karsi 4.71:1 kontrast oranina
> ulasmaktadir — **buyuk metin** icin AA uyumludur (en az 18 px kalin /
> en az 24 px normal) ancak govde metni icin degil. Daha koyu arka
> planlarla eslestirin veya yalnizca zorunlu olmayan dekoratif ogeler
> icin kullanin.

<hr class="hr-text" data-content="Tachyons">

## Tachyons palet yardimci siniflari

`skeletonic-tachyons.min.css` dosyasini yuklediginizde, tam bir tek
amacli renk sinifi seti elde edersiniz — ayni gonderilen urun, istege
bagli modul.

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

Tam Tachyons palet spesifikasyonu
[tachyons.io/docs/themes/colors](https://tachyons.io/docs/themes/colors/)
adresinde belgelenmistir; burada gonderilen surum Skeletonic'in
derledigi surumudur.

[Bilesenlere don →](/tr/bilesenler/)
