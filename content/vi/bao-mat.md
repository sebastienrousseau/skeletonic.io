---
title: "Bao mat &amp; chuoi cung ung"
name: "Skeletonic Stylus"
description: "Cach Skeletonic Stylus v1.1.7 bao mat pipeline build, ky ban phat hanh va cung cap SBOM."
layout: page
language: vi
permalink: https://skeletonic.io/vi/bao-mat/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "bao mat css, sbom, cyclonedx, npm provenance, openssf scorecard, chuoi cung ung"
---

## Hieu suat

- **39,9&nbsp;KB nen · 7,5&nbsp;KB gzip · 6,3&nbsp;KB brotli** cho stylesheet chinh day du.
- **Khong JavaScript** — Stylus thuan → CSS thuan, khong ton chi phi thoi gian chay.
- **Phan tang cascade** — ghi de thang ma khong can `!important`.
- **Ngan sach `size-limit` duoc thuc thi** trong CI moi commit.

Hieu suat la mot kiem soat bao mat. Moi byte khong duoc giao la mot
byte it hon de kiem tra, ky va xac minh.

## Tom tat chuoi cung ung

| Kiem soat | Trang thai v1.1.7 |
|---|---|
| **CycloneDX SBOM** | Duoc tao moi ban phat hanh, luu tru tai `dist/sbom.json` |
| **npm provenance** | Da bat (`--provenance --access public`) |
| **Tag git duoc ky** | Duoc ky SSH boi khoa bao tri |
| **Dependabot ghim** | Cap nhat hang tuan, tu dong xem xet |
| **Ngan sach kich thuoc** | `size-limit` gioi han 8 KB gzip, that bai CI khi vuot |
| **Lint** | `stylelint` + kiem tra a11y moi lan push |
| **CodeQL** | Da bat cho `javascript` va cac tap cau hinh |
| **CVE-2023-44270** | **Da va** qua `pnpm.overrides` loai bo `postcss@7` |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

Moi tarball xuat ban deu bao gom CycloneDX SBOM tai `dist/sbom.json`.
Ban co the xac minh goi vua cai dat voi:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "1.1.7"
```

SBOM duoc tao bang `cyclonedx-npm` trong quy trinh xuat ban.

<hr class="hr-text" data-content="Provenance">

## npm provenance

San pham xuat ban duoc ky bang
[npm package provenance](https://docs.npmjs.com/generating-provenance-statements).

Ban co the xac minh sau khi cai dat voi:

```bash
npm view @sebastienrousseau/skeletonic-stylus@1.1.7 --json | \
  jq '.dist."npm-signature"'
```

Chung chi ky lien ket tarball tro lai chinh xac lan chay GitHub Actions
da tao ra no.

<hr class="hr-text" data-content="CVE">

## CVE da biet &amp; ban va

| CVE | Muc do | Trang thai |
|---|---|---|
| **CVE-2023-44270** (phan tich dong tra ve postcss) | Trung binh | **Da va** trong v1.1.7 qua `pnpm.overrides` nang cap `postcss` len ≥ 8.4.31 |

Co so du lieu khuyen cao Snyk va nguon cap GitHub Security Advisories
duoc theo doi lien tuc; cac ban va bao mat duoc phat hanh nhu **ban va
cap patch**.

<hr class="hr-text" data-content="Bao cao">

## Bao cao lo hong

Vui long **khong** mo issue cong khai tren GitHub cho bao cao bao mat.
Thay vao do, su dung kenh rieng tu tai:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

Bao cao duoc xac nhan trong **72 gio** va ban va duoc phat hanh
trong **14 ngay** cho cac van de trung binh, **48 gio** cho cac van de
nghiem trong.

[Quay ve trang chu →](/vi/) · [Doc nhat ky thay doi →](/vi/nhat-ky-thay-doi/)
