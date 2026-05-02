---
title: "Skeletonic Stylus ile Baslarken"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus'u npm veya CDN'den kurun, Stylus derlemenize aktarin ve saniyeler icinde degiskenleri gecersiz kilin."
layout: page
permalink: https://skeletonic.io/tr/baslarken/
date: 2026-04-08
author: Sebastien Rousseau
language: tr
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic kurulum, stylus ayarlama, css cdn, baslarken"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## Giris

Skeletonic Stylus'ta yeni misiniz? **v2.0.0** ile ihtiyaciniz olan
ozellikleri secmek her zamankinden daha kolay. Kucuk ayak izi sayesinde
(cekirdek stil sayfasi icin 8,3&nbsp;KB gzipped), herhangi bir web
uygulamasina hizla entegre olur — JavaScript framework gerektirmez,
CDN kullaniyorsaniz derleme adimi gerekmez.

Kurmaya hazir misiniz? Tum yollar asagida aciklaniyor — size uygun olani secin.

## 1. Indirme ve kurulum

Skeletonic Stylus'u **pnpm**, **npm** veya **yarn** ile kurabilir ya da
dogrudan bir CDN'den yukleyebilirsiniz. Tercih ederseniz dagitim
dosyalarini yerel olarak da barindirebilirsiniz.

### Paket yoneticisinden (onerilen)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0

# npm
npm install @sebastienrousseau/skeletonic-stylus@2.0.0

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@2.0.0
```

### CDN'den

Yalnizca derlenmmis CSS'e ihtiyaciniz varsa, bunlardan birini `<head>` icerisine ekleyin:

```html
<!-- jsDelivr -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css"
  crossorigin="anonymous">

<!-- unpkg -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css"
  crossorigin="anonymous">
```

Maksimum butunluk icin v2.0.0 surum notlarindan **SRI hash**'ini
kopyalayin ve bir `integrity="sha384-..."` ozeligi ekleyin.

### Alternatif CDN konumlari

| CDN | URL | HTTPS | Kombo |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css` | Evet | Evet |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css` | Evet | Hayir |

### GitHub surumunu indirin

Surumlu bir tarball mi tercih ediyorsunuz?
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
adresinden en son surumu alin ve `dist/` icerigini dogrudan projenize
yerlestirin.

### GitHub deposunu klonlayin

Derleme betikleri dahil tum kaynak dosyalari almak icin ana depoyu
klonlayin:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **Ipucu:** commit'lerinizi imzalayin — proje CI'da imzali commit'leri
> zorunlu kilar. `git commit -S -m "..."` kullanin (veya genel git
> yapilandirmanizda `commit.gpgsign = true` ayarlayin).

## 2. Derlenmis CSS'i kullanin

Kutuphane, kurulumdan sonra `dist/css/` altinda birkac onceden
derlenmis paket sunar:

| Dosya | Amac | Boyut (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | Reset + token'lar + duzen + ogeler + bilesenler + yardimcilar | 45,7 KB / 8,3 KB |
| `animations/skeletonic-animations.min.css` | Istege bagli animasyonlar modulu | ≈213 KB / ≈6.8 KB |
| `palettes/material/skeletonic-material.min.css` | Material renk paleti | ≈17.4 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Tachyons yardimci paleti | 7,3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | Web-safe paleti | ≈3.5 KB |

Her modul bagimsizdir — ihtiyaciniz olan en kucuk kombinasyonu secin.

## 3. Stylus'tan kullanin

Zaten bir Stylus pipeline'iniz varsa, kaynak modulleri iceri aktarabilir
ve paketleyicinizin kullanilmayan parcalari budamasini saglayabilirsiniz:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

Veya yalnizca ihtiyaciniz olan parcalari iceri aktarin:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. Marka rengini gecersiz kilin

Skeletonic, tasarim token'larini **CSS ozel ozellikleri** olarak sunar,
boylece Stylus'u yeniden derlemeden temalayabilirsiniz:

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

Bu kadar — birincil rengi kullanan her bilesen bunu takip edecektir.

## 5. Kurulumu dogrulayin

Minimal bir "calisiyor mu?" kontrolu:

```html
<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>Calisiyor.</h1>
    <a href="#" class="button primary">Merhaba, dunya</a>
  </body>
</html>
```

Baslik akici boyutlandirilmis ve buton mavi hap seklindeyse,
hazirsiniz.

## 6. Neler dahil

Paketin icinde her kaynak dosyayi, derlenmis ve kucultulmus CSS
paketlerini, kaynak haritalarini ve kategorilere gore duzenlenmis tam
bir Stylus agacini bulacaksiniz:

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
        ├── animations/      bounce, fade, pulse, shake, vanish, zoom...
        ├── base/            reset, yardimcilar
        ├── components/      card, header, navbar, alert
        ├── configurations/  renkler, degiskenler
        ├── elements/        buton, form, tablo, baglanti, liste, kod...
        ├── fonts/           font-face tanimlari
        ├── layout/          container, grid, media-queries
        ├── palettes/        material, tachyons, websafe
        ├── utilities/       mixin'ler
        └── skeletonic.styl  ← her seyi ceken tekil import
```

Her modul bagimsizdir — CSS yukununuzu olabildigince kucuk tutmak
icin yalnizca ihtiyaciniz olan paketleri dahil edin.

## Sikca sorulan sorular

**Skeletonic Stylus'u nasil kurabilirim?**
`pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0` komutunu calistirin.
Veya derlenmis CSS'i dogrudan CDN'den yukleyin — derleme adimi gerekmez.

**JavaScript gerektirir mi?**
Hayir. Cekirdek stil sayfasi saf CSS'tir, sifir calisma zamani maliyeti.
Bilesenler tek bir satir JS olmadan calisir.

**WCAG 2.2'ye uyumlu mu?**
Evet. v2.0.0, AA uyumlu kontrast, focus-visible halkalari, atlama
baglantisi yardimcilari, azaltilmis hareket destegi ve varsayilan
karanlik mod ile gelir.

**Gzipped boyutu nedir?**
45,7&nbsp;KB kucultulmus, **8,3&nbsp;KB gzipped**, 6,9&nbsp;KB brotli
tam cekirdek stil sayfasi icin. 8&nbsp;KB tavani CI'da zorunlu kilinir.

**Hangi lisansi kullaniyor?**
MIT ve Apache 2.0 cift lisansli — projenize uygun olani secin. Ticari
ve kisisel kullanim icin ucretsiz.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Skeletonic Stylus nasil kurulur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0 komutunu calistirin. Veya derlenmis CSS'i dogrudan bir CDN'den yukleyin — derleme adimi gerekmez."
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus JavaScript gerektirir mi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hayir. Cekirdek stil sayfasi saf CSS'tir, sifir calisma zamani maliyeti. Bilesenler tek bir satir JavaScript olmadan calisir."
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus WCAG 2.2'ye uyumlu mu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet. v2.0.0, AA uyumlu kontrast, focus-visible halkalari, atlama baglantisi yardimcilari, azaltilmis hareket destegi ve varsayilan karanlik mod ile gelir."
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus'un gzipped boyutu nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "45,7 KB kucultulmus, 8,3 KB gzipped, 6,9 KB brotli tam cekirdek stil sayfasi icin. 8 KB tavani her commit'te CI'da zorunlu kilinir."
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus hangi lisansi kullaniyor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MIT ve Apache 2.0 cift lisansli — projenize uygun olani secin. Ticari ve kisisel kullanim icin ucretsiz."
      }
    }
  ]
}
</script>

[Bilesenlere goz atin →](/tr/bilesenler/)
