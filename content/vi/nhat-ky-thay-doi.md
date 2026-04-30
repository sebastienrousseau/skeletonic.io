---
title: "Nhat ky thay doi"
name: "Skeletonic Stylus"
description: "Ghi chu phat hanh cho Skeletonic Stylus, voi v1.1.7 day du."
layout: page
language: vi
permalink: https://skeletonic.io/vi/nhat-ky-thay-doi/
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "nhat ky thay doi skeletonic, ghi chu phat hanh, v1.1.7, semver"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## v1.1.7 — 2026-04 (hien tai)

Dot ra soat "san sang phat hanh": tro nang, chuoi cung ung, ve sinh kho.

### Tro nang (WCAG 2.2)
- **`$primary` duoc lam dam** thanh `hsl(210, 100%, 42%)` cho do tuong
  phan AA voi chu trang trong nut bam / huy hieu / lien ket.
- **`$secondary` duoc lam dam** thanh `hsl(195, 100%, 33%)`.
- Them vong **focus-visible** tren moi phan tu tuong tac.
- Them bo boc **`@media (prefers-reduced-motion)`** xung quanh mo-dun
  hieu ung dong.
- Them chuyen doi token **`prefers-color-scheme: dark`**.
- Them mixin **target-size(24px)** de dap ung WCAG 2.2 SC 2.5.8.
- Them tro giup scroll-margin **focus-not-obscured** cho header dinh.

### Build &amp; chuoi cung ung
- **Cascade layers** — moi khoi hien nam trong
  `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}`.
- **CycloneDX SBOM** duoc tao nhu mot phan cua tarball npm.
- **Ngan sach `size-limit`** duoc thuc thi trong CI: gioi han 8 KB gzip
  cho stylesheet chinh.
- **CVE-2023-44270** (phan tich dong tra ve postcss) duoc va qua `pnpm.overrides`.
- Provenance + ky tren quy trinh xuat ban npm
  (`--provenance --access public`).
- Xoa plugin `stylelint-a11y` da luu tru khoi cau hinh lint.

### Ve sinh kho &amp; goi nguoi dung
- Thu muc `package/` cu da bi xoa; `dist/` hien la nguon duy nhat
  cho nguoi dung.
- README duoc viet lai phan anh duong cai dat v1.1.7.
- `dist/` duoc commit; `debug/` duoc tao va gitignore.
- `.github/workflows/npm-publish.yml` moi chay theo tag.

### Sua loi (P0)
- **Hoi quy bo chon cha `row $:after`** — thay the ky tu `$` lac boi
  `&` trong `src/stylus/components/_grid.styl`.
- **`.alternate`** nham ap dung `animation-direction: reverse`
  thay vi `alternate`.
- **Dat ten `.alert-*`** — `.alert.success` → `.alert.alert-success`
  de tranh xung dot voi cac lop trang thai.

[Ghi chu phat hanh v1.1.7 day du tren GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases/tag/v1.1.7)

<hr class="hr-text" data-content="Lich su">

## Cac ban phat hanh truoc

- **v1.1.6** — don dep noi bo, cap nhat phu thuoc.
- **v1.1.5** — them bang mau Material.
- **v1.1.0** — bang mau Tachyons + tai cau truc luoi.
- **v1.0.5** — ban phat hanh "ke thua" cuoi cung truoc dot quet WCAG 2.2.
- **v1.0.0** — ban phat hanh cong khai dau tien (2018).

De xem lich su commit-by-commit, truy cap
[trang GitHub Releases ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases).
