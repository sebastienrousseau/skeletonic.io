---
title: "Bang mau"
name: "Skeletonic Stylus"
description: "Bang mau Material, Tachyons va web-safe duoc tich hop trong Skeletonic Stylus v2.0.0."
layout: page
language: vi
permalink: https://skeletonic.io/vi/bang-mau/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "bang mau css, material, tachyons, websafe, design token"
---

Skeletonic Stylus v2.0.0 cung cap **ba bang mau tuy chon**, moi bang
duoc phan phoi nhu stylesheet nen rieng de ban chi tra cho nhung gi
ban su dung.

| Bang mau | Tap | Kich thuoc (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | ≈17.4 KB |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7,3 KB |
| Web-safe | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | ≈3.5 KB |

Trang nay dang tai bang mau **Tachyons** de cac lop tien ich mau ben
duoi hien thi chinh xac.

<hr class="hr-text" data-content="Xam">

## Thang xam cot loi Skeletonic

Stylesheet chinh cung cap thang xam 11 buoc tro nang duoc pho bay
nhu `--cl-grey-100` … `--cl-grey-1000`.

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

<hr class="hr-text" data-content="Thuong hieu">

## Mau thuong hieu (v2.0.0 — do tuong phan AA)

Trong v2.0.0, cac token primary va secondary da duoc lam dam hon de dat
**WCAG 4,5:1** do tuong phan voi chu trang ngay tu dau.

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

> **Luu y.** `--cl-tertiary` (#757c8a) dat ty le tuong phan 4.71:1
> so voi mau trang — dat chuan AA cho **van ban lon** (tu 18 px dam /
> tu 24 px binh thuong) nhung khong dat cho van ban noi dung. Ket hop voi
> nen toi hon hoac chi su dung cho cac yeu to trang tri khong thiet yeu.

<hr class="hr-text" data-content="Tachyons">

## Cac lop tien ich bang mau Tachyons

Khi ban tai `skeletonic-tachyons.min.css`, ban se co bo day du cac lop
mau don muc dich — cung san pham, mo-dun tuy chon.

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

Dac ta day du cua bang mau Tachyons duoc ghi tai
[tachyons.io/docs/themes/skins](https://tachyons.io/docs/themes/skins/);
phien ban duoc cung cap o day la phien ban Skeletonic bien dich.

[Quay lai thanh phan →](/vi/thanh-phan/)
