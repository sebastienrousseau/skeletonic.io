---
title: "Bat dau voi Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Cai dat Skeletonic Stylus tu npm hoac CDN, nhap vao pipeline Stylus cua ban va ghi de cac bien trong vai giay."
layout: page
language: vi
permalink: https://skeletonic.io/vi/bat-dau/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "cai dat skeletonic, thiet lap stylus, css cdn, bat dau"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## Gioi thieu

Moi lam quen voi Skeletonic Stylus? Trong **v2.0.0** viec chon dung
nhung tinh nang ban can de dang hon bao gio het. Nho dung luong nho
(8,3&nbsp;KB gzip cho stylesheet chinh), no tich hop nhanh chong vao
bat ky ung dung web nao — khong can JavaScript framework, khong can
buoc build neu ban su dung CDN.

San sang cai dat? Moi cach deu duoc trinh bay ben duoi — chon cach phu hop voi ban.

## 1. Tai va cai dat

Ban co the cai dat Skeletonic Stylus qua **pnpm**, **npm** hoac **yarn**,
hoac tai truc tiep tu CDN. Ban cung co the tu luu tru cac tap phan phoi
neu muon.

### Tu trinh quan ly goi (khuyen nghi)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0

# npm
npm install @sebastienrousseau/skeletonic-stylus@2.0.0

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@2.0.0
```

### Tu CDN

Neu ban chi can CSS da bien dich, them mot trong nhung dong nay vao `<head>`:

```html
<!-- jsDelivr -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">

<!-- unpkg -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">
```

De dam bao toan ven toi da, sao chep **ma bam SRI** tu ghi chu phat hanh
v2.0.0 va them thuoc tinh `integrity="sha384-…"`.

### Cac vi tri CDN thay the

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css` | Co | Co |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css` | Co | Khong |

### Tai tu ban phat hanh GitHub

Thich tarball phien ban? Lay ban phat hanh moi nhat tu
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
va bo noi dung cua `dist/` truc tiep vao du an cua ban.

### Sao chep kho GitHub

Sao chep kho chinh de lay tat ca tap nguon bao gom cac script build:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **Meo:** ky cac commit cua ban — du an yeu cau commit duoc ky trong CI.
> Su dung `git commit -S -m "..."` (hoac dat `commit.gpgsign = true` trong
> cau hinh git toan cuc).

## 2. Su dung CSS da bien dich

Thu vien cung cap mot so goi CSS tien tao trong
`dist/css/` sau khi cai dat:

| Tap | Muc dich | Kich thuoc (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | Reset + token + layout + phan tu + thanh phan + tien ich | 45,7 KB / 8,3 KB |
| `animations/skeletonic-animations.min.css` | Mo-dun hieu ung dong tuy chon | ≈213 KB / ≈7.2 KB |
| `palettes/material/skeletonic-material.min.css` | Bang mau Material | ≈17.4 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Bang mau tien ich Tachyons | 7,3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | Bang mau web-safe | ≈3.5 KB |

Moi mo-dun deu doc lap — chon to hop nho nhat ma ban can.

## 3. Su dung tu Stylus

Neu ban da co pipeline Stylus, ban co the nhap cac mo-dun nguon
va de bundler tree-shake nhung phan khong dung:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

Hoac chi nhap nhung phan ban can:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. Ghi de mau thuong hieu

Skeletonic cung cap cac design token duoi dang **thuoc tinh CSS tuy chinh**
de ban co the tuy chinh giao dien ma khong can bien dich lai Stylus:

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

Vay thoi — moi thanh phan su dung mau chinh se tu dong cap nhat.

## 5. Kiem tra cai dat

Kiem tra nhanh "da hoat dong chua?":

```html
<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>Da hoat dong.</h1>
    <a href="#" class="button primary">Xin chao</a>
  </body>
</html>
```

Neu tieu de duoc thay doi kich thuoc linh hoat va nut bam co hinh vien
nang xanh, ban da hoan tat.

## 6. Noi dung bao gom

Ben trong goi ban se tim thay moi tap nguon, cac goi CSS da bien dich
va nen, source map, va mot cay Stylus day du duoc to chuc theo danh muc:

```text
@sebastienrousseau/skeletonic-stylus@2.0.0
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
        └── skeletonic.styl  ← mot import duy nhat keo tat ca
```

Moi mo-dun deu doc lap — chi keo nhung goi ban can de giu CSS
nho nhat co the.

## Cau hoi thuong gap

**Lam the nao de cai dat Skeletonic Stylus?**
Chay `pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0`. Hoac tai
CSS da bien dich truc tiep tu CDN — khong can buoc build.

**No co yeu cau JavaScript khong?**
Khong. Stylesheet chinh la CSS thuan, khong ton chi phi thoi gian chay.
Cac thanh phan hoat dong ma khong can mot dong JS nao.

**No da san sang cho WCAG 2.2 chua?**
Co. v2.0.0 cung cap do tuong phan tuan thu AA, vong focus-visible,
tro giup skip-link, ho tro giam chuyen dong va che do toi mac dinh.

**Kich thuoc gzip la bao nhieu?**
45,7&nbsp;KB nen, **8,3&nbsp;KB gzip**, 6,9&nbsp;KB brotli cho
stylesheet chinh day du. Gioi han 8&nbsp;KB duoc thuc thi trong CI.

**Su dung giay phep nao?**
Cap phep kep theo MIT va Apache 2.0 — chon giay phep phu hop voi du an
cua ban. Mien phi cho ca muc dich thuong mai va ca nhan.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Lam the nao de cai dat Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chay pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0. Hoac tai CSS da bien dich truc tiep tu CDN — khong can buoc build."
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus co yeu cau JavaScript khong?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Khong. Stylesheet chinh la CSS thuan, khong ton chi phi thoi gian chay. Cac thanh phan hoat dong ma khong can mot dong JavaScript nao."
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus da san sang cho WCAG 2.2 chua?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Co. v2.0.0 cung cap do tuong phan tuan thu AA, vong focus-visible, tro giup skip-link, ho tro giam chuyen dong va che do toi mac dinh."
      }
    },
    {
      "@type": "Question",
      "name": "Kich thuoc gzip cua Skeletonic Stylus la bao nhieu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "45,7 KB nen, 8,3 KB gzip, 6,9 KB brotli cho stylesheet chinh day du. Gioi han 8 KB duoc thuc thi trong CI moi commit."
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus su dung giay phep nao?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cap phep kep theo MIT va Apache 2.0 — chon giay phep phu hop voi du an cua ban. Mien phi cho ca muc dich thuong mai va ca nhan."
      }
    }
  ]
}
</script>

[Duyet cac thanh phan →](/vi/thanh-phan/)
