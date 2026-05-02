---
title: "Gioi thieu Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus la thu vien CSS Stylus ma nguon mo, danh cho viec tao kieu giao dien tro nang, nhanh va mo-dun."
layout: page
language: vi
permalink: https://skeletonic.io/vi/gioi-thieu/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, gioi thieu, stylus, css framework, triet ly"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

<p class="badges">
  <img alt="GitHub Stars" src="https://img.shields.io/github/stars/sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Stars" height="28" loading="lazy">
  <img alt="Luot tai hang thang" src="https://img.shields.io/npm/dm/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Downloads" height="28" loading="lazy">
  <img alt="Phien ban npm" src="https://img.shields.io/npm/v/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=npm" height="28" loading="lazy">
  <img alt="Kich thuoc goi" src="https://img.shields.io/badge/gzip-7.8%20KB-brightgreen?style=for-the-badge" height="28" loading="lazy">
  <img alt="Giay phep" src="https://img.shields.io/npm/l/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=License" height="28" loading="lazy">
  <img alt="WCAG" src="https://img.shields.io/badge/WCAG-2.2%20AA-2e7d32?style=for-the-badge" height="28" loading="lazy">
</p>

## Tom tat ngan gon

**Skeletonic Stylus** la thu vien CSS [Stylus](https://stylus-lang.com)
ma nguon mo, danh cho viec tao kieu giao dien tro nang, nhanh va mo-dun.

Ra doi nam 2018 nhu mot thi nghiem ca nhan trong viec **giao it CSS hon**
ma khong mat di su tien loi cua mot thu vien component thuc thu. Tam
nam sau, muc tieu van khong thay doi.

## Nhung gi ban nhan duoc

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="Tia set" width="64" height="64" loading="lazy" decoding="async">
    <h3>Nhanh nhu chop</h3>
    <p>Thiet ke va tuy chinh giao dien responsive trong vai phut. Bien CSS goc, cac lop dinh nghia san, luoi 12 cot bao phu moi phan tu HTML ngu nghia.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="Long vu" width="64" height="64" loading="lazy" decoding="async">
    <h3>Nhe</h3>
    <p>8,3&nbsp;KB gzip. Trang tai nhanh hon. Moi thanh phan thiet yeu deu duoc giu lai.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="Thiet bi responsive" width="64" height="64" loading="lazy" decoding="async">
    <h3>Thiet ke responsive</h3>
    <p>Duoc tao cho may tinh va di dong. Bo cuc thich ung voi moi thiet bi. Toi uu cho cam ung, HTML ngu nghia xuyen suot.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="Tro nang" width="64" height="64" loading="lazy" decoding="async">
    <h3>Tro nang</h3>
    <p>WCAG&nbsp;2.2 duoc tich hop: vong focus-visible, do tuong phan AA, tro giup skip-link, thanh phan than thien ban phim, ho tro giam chuyen dong — khong can stylesheet bo sung, khong can <code>aria-*</code> mau.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="Khoi thanh phan" width="64" height="64" loading="lazy" decoding="async">
    <h3>Thu vien thanh phan</h3>
    <p>Cac thanh phan CSS mo-dun va Stylus mixin. Nut bam, bieu mau, the, canh bao, huy hieu, bang mau va hieu ung dong — sach se, mo-dun, san sang su dung.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="Logo GitHub" width="64" height="64" loading="lazy" decoding="async">
    <h3>Mien phi va ma nguon mo</h3>
    <p>Duoc thiet ke, xay dung va bao tri boi Sebastien Rousseau. Cap phep kep theo <strong>MIT</strong> hoac <strong>Apache&nbsp;2.0</strong>. Khong phi, khong chi phi ban quyen, ke ca cho muc dich thuong mai.</p>
  </article>
</div>

## So sanh

Mot stylesheet tu luu tru duy nhat bao gom typography, nut bam, bieu mau,
the, bang, bang mau, hieu ung dong va cac lop tien ich. Khong JavaScript.
Khong can buoc build. Khong phu thuoc Bootstrap, Tailwind hay Bulma.

| Tinh nang | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| Kich thuoc gzip | **8,3&nbsp;KB** | ~30&nbsp;KB | ~10&nbsp;KB (varies) | ~30&nbsp;KB |
| Tuan thu WCAG 2.2 | **Tich hop** | Mot phan | Thu cong | Mot phan |
| Cascade layers | **Co (`@layer`)** | Khong | Khong | Khong |
| Che do toi | **`prefers-color-scheme`** | Tuy chon | Dua tren class | Tuy chon |
| Can JavaScript | **Khong** | Co (Popper) | Khong | Khong |
| CycloneDX SBOM | **Co** | Khong | Khong | Khong |
| Giam chuyen dong | **Duoc ton trong** | Mot phan | Thu cong | Mot phan |
| Giay phep | MIT hoac Apache 2.0 | MIT | MIT | MIT |

## Nguyen tac

1. **Tro nang la nen tang, khong phai tran nha.** Tuan thu WCAG 2.2
   duoc tich hop vao moi thanh phan, khong bao gio duoc gan them nhu mot "chu de".
2. **Byte rat quan trong.** Mot stylesheet duoc giao khong nen vuot qua
   ngan sach trong luong trang. Gioi han 8&nbsp;KB gzip duoc thuc thi trong CI.
3. **Cascade layers thang cuoc chien do uu tien.** Ghi de bat cu dieu gi
   voi su tu tin — khong `!important`, khong thu thuat thu tu DOM.
4. **Stylus van tot.** Ngan gon, bieu cam va cho phep thu vien
   nam trong ~3.000 dong doc duoc.
5. **Don gian la mot tinh nang.** Khong phu thuoc JS. Khong phep mau build-time.
   Khong doi ten gay lo. Cac lop CSS lam dung nhung gi chung noi.
6. **Tuy chinh giao dien trong vai giay.** Thuoc tinh CSS tuy chinh goc cho mau sac,
   khoang cach, chu va bo tron.
7. **Chuoi cung ung duoc gia co.** npm provenance duoc ky. Cap nhat Dependabot
   duoc ghim. CVE-2023-44270 duoc va qua overrides.

## Phien ban &amp; semver

Skeletonic Stylus tuan theo [Semantic Versioning 2.0](https://semver.org).

| Tang | Khi nao | Vi du |
|---|---|---|
| **Major** | Xoa hoac doi ten mot lop cong khai, mixin, hoac token | 1.x → 2.0 |
| **Minor** | Them thanh phan, mixin, hoac token moi | 1.1 → 1.2 |
| **Patch** | Sua loi, cai thien a11y, hieu suat, bao mat | 1.1.6 → 2.0.0 |

Tat ca ten lop cong khai, tat ca thuoc tinh CSS tuy chinh, va tat ca
Stylus mixin duoc xuat la mot phan cua API cong khai. Mot thay doi khong
tuong thich se nhan mot tang major va huong dan di chuyen.

## Quan ly du an

Skeletonic Stylus duoc thiet ke, xay dung va bao tri boi
[Sebastien Rousseau](https://sebastienrousseau.com). Cap phep kep
theo [MIT](https://opensource.org/licenses/MIT) va
[Apache 2.0](https://opensource.org/licenses/Apache-2.0).

Van de, y tuong va dong gop deu duoc chao don —
[xem huong dan dong gop](/vi/dong-gop/).
