---
title: "Irayẹ-si — WCAG 2.2 ninu v2.0.0"
name: "Skeletonic Stylus"
description: "Ohun ti v2.0.0 fi ranṣẹ lẹsẹkẹsẹ fun ibamu WCAG 2.2 — awọn oruka idojukọ, iyatọ, awọn ọna asọye, iṣipopada, ati ipo dudu."
language: yo
layout: page
permalink: https://skeletonic.io/yo/iraye-si/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, irayẹ-si, focus visible, skip link, prefers reduced motion, iyatọ"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

> **Skeletonic Stylus v2.0.0 fi ibamu WCAG 2.2 ranṣẹ bi ihuwasi
> aiyipada, kii ṣe bi aṣa yan.** Oju-iwe yii ṣe akọsilẹ ohun ti
> a fi sinu ati awọn adalu ti o le yan wọle fun iṣakoso ti o dara ju.

<hr class="hr-text" data-content="Lẹsẹkẹsẹ">

## Ohun ti o gba lọfẹ

| WCAG 2.2 SC | Ohun ti v2.0.0 ṣe | Bawo ni a ṣe le ṣayẹwo |
|---|---|---|
| **1.4.3 Iyatọ (Ti o kere julọ) — AA** | `--cl-primary` ati `--cl-secondary` ni a ṣe dudu si ≥ 4.5:1 si funfun | DevTools → olutọ iyatọ |
| **1.4.11 Iyatọ ti kii ṣe ọrọ — AA** | Awọn ala fọọmu, awọn bọtini, awọn aami gbogbo ≥ 3:1 | Kanna |
| **2.4.7 Idojukọ ti a le ri — AA** | Gbogbo ẹya ti a le dojukọ ni oruka `:focus-visible` (ofeefee lori ipilẹ dudu, buluu lori ina) | `Tab` nipasẹ oju-iwe eyikeyi |
| **2.4.11 Idojukọ ti ko pamọ — AA (tuntun ninu 2.2)** | Akọle didimu ni giga ti a dinku + scroll-margin idojukọ | `Tab` kọja akọle didimu |
| **2.5.8 Iwọn Ibi-afẹde — AA (tuntun ninu 2.2)** | Awọn bọtini / awọn ọna asopọ: ≥ 24×24 CSS px agbegbe tẹ | DevTools awoṣe apoti |
| **1.4.12 Aaye Ọrọ — AA** | Gbogbo awọn ẹya bu ọla fun awọn atunṣe line-height / letter-spacing olumulo | Ṣe atunṣe ninu DevTools |
| **2.3.3 Ere idasọnu lati Awọn ibaraṣepọ — AAA** | Gbogbo awọn kilasi ere idasọnu ni a fi sinu `@media (prefers-reduced-motion: no-preference)` | Idinku-iṣipopada ipele-OS |
| **1.4.10 Atunṣan — AA** | Eto ṣiṣẹ ni 320 px laisi iyipo petele | DevTools viewport dín |
| **Ipo dudu** | `prefers-color-scheme: dark` yi awọn ami pada ni aifọwọyi | Iyipada ipo dudu OS |

<hr class="hr-text" data-content="Awọn adalu">

## Awọn adalu Stylus ti o le yan wọle

Ti o ba ṣajọ lati orisun, awọn adalu wọnyi wa ninu
`src/stylus/utilities/mixins.styl`:

| Adalu | Lilo |
|---|---|
| `focus-ring()` | Oruka idojukọ iyatọ-giga ti o bu ọla fun `:focus-visible` |
| `visually-hidden()` | Ọrọ fun oluka-iboju nikan ti o wa ni idojukọ |
| `skip-link()` | Asopọ ti o han ni idojukọ |
| `reduced-motion()` | Fi bulọọki eyikeyi sinu `prefers-reduced-motion: no-preference` |
| `forced-colors()` | Awọn atunṣe fun Ipo Iyatọ Giga Windows |
| `target-size(24px)` | Ṣe afikun si eyikeyi ti a le tẹ si ibi-afẹde tẹ ti o kere julọ |

Apẹẹrẹ:

```stylus
// Fi oruka idojukọ to lagbara si bọtini aṣa
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="Ọna asọye">

## Oluranlọwọ skip-link

Fi eyi **ni akọkọ ninu `<body>`**:

```html
<a href="#main-content" class="skip-link">Fo lọ si akoonu akọkọ</a>
```

Kilasi naa **ko si** ninu iwe-aṣa ipilẹ (nitorinaa iwuwo oju-iwe ko
yipada); o jẹ apakan ila-4 ti o ṣajọ funrararẹ tabi lo adalu
`skip-link()` ti a pese. Aaye yii lo o — dojukọ oju-iwe ki o tẹ Tab
lati ri i han ni apa osi-oke.

<hr class="hr-text" data-content="Idaniloju">

## Ṣe idaniloju awọn oju-iwe tirẹ

Ile-ikawe naa fi iwe afọwọkọ `a11y-test.mjs` ranṣẹ labẹ `scripts/`
ti o ṣe [axe-core](https://github.com/dequelabs/axe-core) si gbogbo
URL ti o fun.

```bash
node scripts/a11y-test.mjs https://example.com
```

CI ṣiṣẹ iwe afọwọkọ yii si oju-iwe ifihan `dist/index.html` lori
igbewọle kọọkan.

[Ka nipa itusilẹ v2.0.0 →](/yo/iwe-iyipada/) ·
[Wo oju-iwe aabo →](/yo/aabo/)
