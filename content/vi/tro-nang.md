---
title: "Tro nang — WCAG 2.2 trong v1.1.7"
name: "Skeletonic Stylus"
description: "Nhung gi v1.1.7 cung cap san cho tuan thu WCAG 2.2 — vong focus, do tuong phan, lien ket bo qua, chuyen dong va che do toi."
layout: page
language: vi
permalink: https://skeletonic.io/vi/tro-nang/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, tro nang, focus visible, skip link, prefers reduced motion, do tuong phan"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

> **Skeletonic Stylus v1.1.7 cung cap tuan thu WCAG 2.2 nhu hanh vi
> mac dinh, khong phai chu de tuy chon.** Trang nay ghi lai nhung gi
> duoc tich hop san va nhung mixin ban co the chon su dung de kiem
> soat chi tiet hon.

<hr class="hr-text" data-content="San co">

## Nhung gi ban nhan duoc mien phi

| WCAG 2.2 SC | v1.1.7 lam gi | Cach xac minh |
|---|---|---|
| **1.4.3 Do tuong phan (Toi thieu) — AA** | `--cl-primary` va `--cl-secondary` duoc lam dam den ≥ 4,5:1 voi trang | DevTools → kiem tra do tuong phan |
| **1.4.11 Do tuong phan phi van ban — AA** | Vien bieu mau, nut bam, huy hieu deu ≥ 3:1 | Tuong tu |
| **2.4.7 Focus Hien thi — AA** | Moi phan tu co the focus deu co vong `:focus-visible` (vang tren nen toi, xanh tren nen sang) | `Tab` qua bat ky trang nao |
| **2.4.11 Focus Khong bi che — AA (moi trong 2.2)** | Header dinh co chieu cao giam + scroll-margin cho focus | `Tab` qua header dinh |
| **2.5.8 Kich thuoc muc tieu — AA (moi trong 2.2)** | Nut bam / lien ket: ≥ 24×24 px CSS vung cham | DevTools box model |
| **1.4.12 Gian cach van ban — AA** | Tat ca phan tu ton trong cac ghi de line-height / letter-spacing cua nguoi dung | Ghi de trong DevTools |
| **2.3.3 Hieu ung dong tu tuong tac — AAA** | Tat ca lop hieu ung dong duoc boc trong `@media (prefers-reduced-motion: no-preference)` | Giam chuyen dong cap he dieu hanh |
| **1.4.10 Tai bo cuc — AA** | Bo cuc hoat dong o 320 px khong co cuon ngang | DevTools viewport hep |
| **Che do toi** | `prefers-color-scheme: dark` tu dong chuyen doi token | Chuyen doi che do toi he dieu hanh |

<hr class="hr-text" data-content="Mixin">

## Stylus mixin ban co the chon su dung

Neu ban bien dich tu nguon, cac mixin sau co san trong
`src/stylus/utilities/mixins.styl`:

| Mixin | Su dung |
|---|---|
| `focus-ring()` | Vong focus do tuong phan cao ton trong `:focus-visible` |
| `visually-hidden()` | Van ban chi danh cho trinh doc man hinh van co the focus |
| `skip-link()` | Neo tro nen hien thi khi focus |
| `reduced-motion()` | Boc bat ky khoi nao trong `prefers-reduced-motion: no-preference` |
| `forced-colors()` | Dieu chinh cho Che do tuong phan cao Windows |
| `target-size(24px)` | Dem bat ky phan tu nhan duoc den kich thuoc tap toi thieu |

Vi du:

```stylus
// Ap dung vong focus manh cho nut tuy chinh
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="Lien ket bo qua">

## Tro giup lien ket bo qua

Dat dong nay **dau tien trong `<body>`**:

```html
<a href="#main-content" class="skip-link">Chuyen den noi dung chinh</a>
```

Lop nay **khong** co trong stylesheet chinh (de khong lam tang trong
luong trang); do la doan ma 4 dong ban tu tao hoac su dung mixin
`skip-link()` di kem. Trang web nay su dung no — focus trang va nhan
Tab de thay no xuat hien o goc tren ben trai.

<hr class="hr-text" data-content="Xac minh">

## Xac minh trang cua ban

Thu vien cung cap script `a11y-test.mjs` trong `scripts/` chay
[axe-core](https://github.com/dequelabs/axe-core) tren moi URL
ban cung cap.

```bash
node scripts/a11y-test.mjs https://example.com
```

CI chay script nay tren trang gioi thieu `dist/index.html` moi lan push.

[Doc ve ban phat hanh v1.1.7 →](/vi/nhat-ky-thay-doi/) ·
[Xem trang bao mat →](/vi/bao-mat/)
