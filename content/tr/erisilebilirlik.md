---
title: "Erisilebilirlik — v2.0.0'de WCAG 2.2"
name: "Skeletonic Stylus"
description: "v2.0.0'nin WCAG 2.2 uyumlulugu icin kutudan ne gonderdigini — odak halkalari, kontrast, atlama baglantilari, hareket ve karanlik mod."
layout: page
permalink: https://skeletonic.io/tr/erisilebilirlik/
date: 2026-04-08
author: Sebastien Rousseau
language: tr
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, erisilebilirlik, focus visible, atlama baglantisi, prefers reduced motion, kontrast"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

> **Skeletonic Stylus v2.0.0, WCAG 2.2 uyumlulugunu istege bagli bir
> tema olarak degil, varsayilan davranis olarak sunar.** Bu sayfa neyin
> yerlesik oldugunu ve daha ince kontrol icin hangi mixin'leri
> kullanabileceginizi belgeler.

<hr class="hr-text" data-content="Kutudan cikan">

## Ucretsiz olarak ne elde edersiniz

| WCAG 2.2 SC | v2.0.0 ne yapar | Nasil dogrulanir |
|---|---|---|
| **1.4.3 Kontrast (Minimum) — AA** | `--cl-primary` ve `--cl-secondary` beyaza karsi ≥ 4,5:1 icin karartildi | DevTools → kontrast denetleyicisi |
| **1.4.11 Metin-Disi Kontrast — AA** | Form kenarliklari, butonlar, rozetlerin tamami ≥ 3:1 | Ayni |
| **2.4.7 Gorunur Odak — AA** | Her odaklanabilir ogenin `:focus-visible` halkasi var (koyu arka planlarda sari, aciklarda mavi) | Herhangi bir sayfada `Tab` ile gezin |
| **2.4.11 Odak Kapanmadi — AA (2.2'de yeni)** | Yapisan baslik azaltilmis yukseklik + odak scroll-margin'e sahip | Yapisan basligin otesinde `Tab` ile ilerleyin |
| **2.5.8 Hedef Boyutu — AA (2.2'de yeni)** | Butonlar / baglantilar: ≥ 24x24 CSS px tiklanabilir alan | DevTools kutu modeli |
| **1.4.12 Metin Boslugu — AA** | Tum ogeler kullanicinin satir yuksekligi / harf araligi gecersiz kilmalarini destekler | DevTools'ta gecersiz kilin |
| **2.3.3 Etkilesimlerden Animasyon — AAA** | Tum animasyon siniflari `@media (prefers-reduced-motion: no-preference)` icine sarilmistir | IS duzeyinde hareket azaltma |
| **1.4.10 Yeniden Akis — AA** | Duzen 320 px'de yatay kayma olmadan calisir | DevTools dar gorunum alani |
| **Karanlik mod** | `prefers-color-scheme: dark` token'lari otomatik degistirir | IS karanlik mod gecisi |

<hr class="hr-text" data-content="Mixin'ler">

## Istege bagli Stylus mixin'leri

Kaynaktan derliyorsaniz, asagidaki mixin'ler
`src/stylus/utilities/mixins.styl` dosyasinda mevcuttur:

| Mixin | Kullanim |
|---|---|
| `focus-ring()` | `:focus-visible`'a uyan yuksek kontrastli odak halkasi |
| `visually-hidden()` | Odaklanabilir kalan yalnizca ekran okuyucu metni |
| `skip-link()` | Odaklandiginda gorunur hale gelen baglanti |
| `reduced-motion()` | Herhangi bir blogu `prefers-reduced-motion: no-preference` icine sarar |
| `forced-colors()` | Windows Yuksek Kontrast Modu icin ayarlamalar |
| `target-size(24px)` | Herhangi bir tiklanabilir ogeyi minimum dokunma hedefine doldurur |

Ornek:

```stylus
// Ozel bir butona guclu odak halkasi uygulama
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="Atlama baglantisi">

## Atlama baglantisi yardimcisi

Bunu **`<body>` icerisindeki ilk oge olarak** yerlestirin:

```html
<a href="#main-content" class="skip-link">Ana icerigi atla</a>
```

Sinif cekirdek stil sayfasinda **degildir** (bu sayede sayfa agirligi
degismez); kendiniz olusturdugunuz 4 satirlik bir kod parcasi veya
dahil edilen `skip-link()` mixin'idir. Bu site bunu kullaniyor —
sayfayi odaklayip Tab tusuna basarak sol ustte belirmesini gorun.

<hr class="hr-text" data-content="Dogrulama">

## Kendi sayfalarinizi dogrulama

Kutuphane, `scripts/` altinda verdigi her URL'de
[axe-core](https://github.com/dequelabs/axe-core) calistiran bir
`a11y-test.mjs` betigi sunar.

```bash
node scripts/a11y-test.mjs https://example.com
```

CI bu betigi her push'ta `dist/index.html` vitrin sayfasinda calistirir.

[v2.0.0 surumu hakkinda bilgi edinin →](/tr/degisiklik-gunlugu/) ·
[Guvenlik sayfasini gorun →](/tr/guvenlik/)
