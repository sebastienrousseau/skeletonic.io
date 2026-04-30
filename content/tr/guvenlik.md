---
title: "Guvenlik ve tedarik zinciri"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus v1.1.7'nin derleme hattini nasil guvence altina aldigi, surumleri nasil imzaladigi ve SBOM nasil gonderdigi."
layout: page
permalink: https://skeletonic.io/tr/guvenlik/
date: 2026-04-08
author: Sebastien Rousseau
language: tr
theme_color: "hsl(210, 100%, 42%)"
keywords: "css guvenlik, sbom, cyclonedx, npm provenance, openssf scorecard, tedarik zinciri"
---

## Performans

- **45,7&nbsp;KB kucultulmus · 8,3&nbsp;KB gzipped · 6,9&nbsp;KB brotli** tam cekirdek stil sayfasi icin.
- **Sifir JavaScript** — saf Stylus → saf CSS, calisma zamani maliyeti yok.
- **Cascade-layered** — gecersiz kilmalar `!important` olmadan kazanir.
- **`size-limit` butcesi** her commit'te CI'da zorunlu kilinir.

Performans bir guvenlik kontroludur. Gonderilmeyen her bayt, denetlenmesi,
imzalanmasi ve dogrulanmasi gereken bir bayt azdir.

## Tedarik zinciri ozeti

| Kontrol | v1.1.7 durumu |
|---|---|
| **CycloneDX SBOM** | Her surumde olusturulur, `dist/sbom.json` altinda commit edilir |
| **npm provenance** | Etkin (`--provenance --access public`) |
| **Imzali git etiketleri** | Bakimci anahtariyla SSH-imzali |
| **Sabitlenmis Dependabot** | Haftalik guncellemeler, otomatik incelenmis |
| **Boyut butceleri** | `size-limit` 8 KB gzipped tavani, gerileme durumunda CI basarisiz |
| **Lint** | `stylelint` + her push'ta erisilebilirlik kontrolleri |
| **CodeQL** | `javascript` ve yapilandirma dosyalari icin etkin |
| **CVE-2023-44270** | **Yamali** — `pnpm.overrides` ile `postcss@7` yukseltildi |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

Yayinlanan her tarball, `dist/sbom.json` konumunda bir CycloneDX SBOM
icerir. Yeni kurulan bir paketi soyle dogrulayabilirsiniz:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "1.1.7"
```

SBOM, yayinlama is akisi sirasinda `cyclonedx-npm` ile olusturulur.

<hr class="hr-text" data-content="Provenance">

## npm provenance

Yayinlanan urun,
[npm paket provenance](https://docs.npmjs.com/generating-provenance-statements)
kullanilarak imzalanir.

Kurulumdan sonra soyle dogrulayabilirsiniz:

```bash
npm view @sebastienrousseau/skeletonic-stylus@1.1.7 --json | \
  jq '.dist."npm-signature"'
```

Imzali onay, tarball'i onu ureten GitHub Actions calistirmasina geri
baglar.

<hr class="hr-text" data-content="CVE'ler">

## Bilinen CVE'ler ve yamalar

| CVE | Siddet | Durum |
|---|---|---|
| **CVE-2023-44270** (postcss satir donus ayrisitrma) | Orta | **Yamali** — v1.1.7'de `pnpm.overrides` ile `postcss` ≥ 8.4.31'e yukseltildi |

Snyk danisma veritabani ve GitHub Guvenlik Danisman beslemesi surekli
izlenmektedir; guvenlik yamalari **yama duzeyinde surumler** olarak
gonderilir.

<hr class="hr-text" data-content="Raporlama">

## Bir acik bildirme

Guvenlik raporu icin lutfen **genel** bir GitHub sorunu **acmayin**.
Bunun yerine ozel kanali kullanin:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

Raporlar **72 saat** icinde kabul edilir ve orta duzey sorunlar icin
**14 gun**, kritik olanlar icin **48 saat** icinde duzeltme gonderilir.

[Ana sayfaya don →](/tr/) · [Degisiklik gunlugunu okuyun →](/tr/degisiklik-gunlugu/)
