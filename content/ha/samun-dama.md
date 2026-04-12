---
title: "Samun Dama — WCAG 2.2 a v1.1.7"
name: "Skeletonic Stylus"
description: "Abin da v1.1.7 ke aikawa daga cikin akwatin don daidaiton WCAG 2.2 — zoben mayar da hankali, bambanci, hanyoyin tsallake, motsi, da yanayin dare."
layout: page
permalink: https://skeletonic.io/ha/samun-dama/
date: 2026-04-08
author: Sebastien Rousseau
language: ha
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, samun dama, focus visible, skip link, prefers reduced motion, bambanci"
---

> **Skeletonic Stylus v1.1.7 yana aika daidaiton WCAG 2.2 a matsayin halayen tsoho, ba a matsayin jigo na zaɓi ba.** Wannan shafin yana rubuta abin da aka gina a ciki da mixins ɗin da za ku iya zaɓa don ƙarin sarrafawa.

<hr class="hr-text" data-content="Daga cikin akwatin">

## Abin da kuke samu kyauta

| WCAG 2.2 SC | Abin da v1.1.7 ke yi | Yadda ake tabbatarwa |
|---|---|---|
| **1.4.3 Bambanci (Mafi ƙaranci) — AA** | An duhunta `--cl-primary` da `--cl-secondary` zuwa ≥ 4.5:1 akan fari | DevTools → mai binciken bambanci |
| **1.4.11 Bambancin da ba rubutu ba — AA** | Iyakokin sifofi, maballin, alamomi duk ≥ 3:1 | Iri ɗaya |
| **2.4.7 Ganin mayar da hankali — AA** | Kowane abun da ake iya mayar da hankali yana da zoben `:focus-visible` (rawaya a kan bango mai duhu, shuɗi a kan haske) | Matsa `Tab` a kan kowanne shafi |
| **2.4.11 Ba a ɓoye mayar da hankali ba — AA (sabon a 2.2)** | Kanun shafi mai manne yana da ƙarancin tsayi + scroll-margin na mayar da hankali | Matsa `Tab` bayan kanun shafin da ya manne |
| **2.5.8 Girman Manufa — AA (sabon a 2.2)** | Maballin / hanyoyi: ≥ 24×24 CSS px yankin bugu | DevTools box model |
| **1.4.12 Tazarar Rubutu — AA** | Duk abubuwa suna mutunta soke na line-height / letter-spacing na mai amfani | Soke a cikin DevTools |
| **2.3.3 Motsin rai daga Hulɗa — AAA** | An nannaɗe duk azuzuwan motsin rai a cikin `@media (prefers-reduced-motion: no-preference)` | Rage motsi a matakin OS |
| **1.4.10 Sake kwararowa — AA** | Tsarin yana aiki a 320 px ba tare da gungura a kwance ba | DevTools kunkuntar viewport |
| **Yanayin dare** | `prefers-color-scheme: dark` yana sauya alamomi ta atomatik | Kunna yanayin dare na OS |

<hr class="hr-text" data-content="Mixins">

## Stylus mixins da za ku iya zaɓa

Idan kuna tattarawa daga tushe, waɗannan mixins suna samuwa a cikin `src/stylus/utilities/mixins.styl`:

| Mixin | Amfani |
|---|---|
| `focus-ring()` | Zoben mayar da hankali mai bambancin da ke mutunta `:focus-visible` |
| `visually-hidden()` | Rubutu na screen-reader kawai da ke ci gaba da iya mayar da hankali |
| `skip-link()` | Maƙala da ke bayyana a kan mayar da hankali |
| `reduced-motion()` | Yana nannaɗe kowanne tubali a cikin `prefers-reduced-motion: no-preference` |
| `forced-colors()` | Daidaitawa don Yanayin Bambancin Windows |
| `target-size(24px)` | Yana ƙara padding ga kowanne abun da ake dannawa zuwa mafi ƙarancin manufar taɓawa |

Misali:

```stylus
// Sanya zoben mayar da hankali mai ƙarfi a kan maɓalli na musamman
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="Hanyar tsallake">

## Taimako na skip-link

Saka wannan **abu na farko a cikin `<body>`**:

```html
<a href="#main-content" class="skip-link">Tsallaka zuwa babban abun ciki</a>
```

Ajin **ba** ya cikin stylesheet na tushe ba (don haka nauyin shafin bai ƙaru ba); ɓangare ne na layukan 4 da kuke haɗa da kanku ko amfani da `skip-link()` mixin da ke cikin sa. Wannan gidan yanar gizon yana amfani da shi — mayar da hankali ga shafin kuma matsa Tab don ganin sa a saman-hagu.

<hr class="hr-text" data-content="Tabbatarwa">

## Tabbatar da shafukan ku

Dakin karatu yana aika rubutun `a11y-test.mjs` a ƙarƙashin `scripts/` wanda ke gudanar da [axe-core](https://github.com/dequelabs/axe-core) akan kowane URL da kuka ba shi.

```bash
node scripts/a11y-test.mjs https://example.com
```

CI yana gudanar da wannan rubutun akan shafin nunin `dist/index.html` a kowane turawa.

[Karanta game da sakin v1.1.7 →](/ha/tarihin-canje-canje/) ·
[Duba shafin tsaro →](/ha/tsaro/)
