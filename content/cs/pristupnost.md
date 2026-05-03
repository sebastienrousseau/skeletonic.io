---
title: "Pristupnost — WCAG 2.2 ve v2.0.0"
name: "Skeletonic Stylus"
description: "Co v2.0.0 dodava hned po instalaci pro soulad s WCAG 2.2 — ohraniceni fokusu, kontrast, skip linky, pohyb a tmavy rezim."
layout: page
permalink: https://skeletonic.io/cs/pristupnost/
date: 2026-04-08
author: Sebastien Rousseau
language: cs
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, pristupnost, focus visible, skip link, prefers reduced motion, kontrast"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

> **Skeletonic Stylus v2.0.0 dodava soulad s WCAG 2.2 jako vychozi
> chovani, ne jako volitelne tema.** Tato stranka dokumentuje, co je
> integrovano a jake mixiny muzete volitelne pouzit pro jemnejsi kontrolu.

<hr class="hr-text" data-content="Hned po instalaci">

## Co dostanete zdarma

| WCAG 2.2 SC | Co v2.0.0 dela | Jak overit |
|---|---|---|
| **1.4.3 Kontrast (Minimum) — AA** | `--cl-primary` a `--cl-secondary` ztmaveny na ≥ 4,5:1 vuci bile | DevTools → kontrola kontrastu |
| **1.4.11 Kontrast netextovych prvku — AA** | Okraje formularu, tlacitka, stitky vse ≥ 3:1 | Totez |
| **2.4.7 Viditelny fokus — AA** | Kazdy fokusovatelny element ma `:focus-visible` ohraniceni (zlute na tmavem pozadi, modre na svetlem) | `Tab` pres libovolnou stranku |
| **2.4.11 Fokus nezakryty — AA (novy v 2.2)** | Fixni zahlavi ma snizenou vysku + focus scroll-margin | `Tab` za fixni zahlavi |
| **2.5.8 Velikost cile — AA (novy v 2.2)** | Tlacitka / odkazy: ≥ 24×24 CSS px dotykova plocha | DevTools box model |
| **1.4.12 Mezerovani textu — AA** | Vsechny elementy respektuji uzivatelske prepisy line-height / letter-spacing | Prepis v DevTools |
| **2.3.3 Animace z interakci — AAA** | Vsechny animacni tridy jsou obaleny v `@media (prefers-reduced-motion: no-preference)` | Omezeni pohybu na urovni OS |
| **1.4.10 Reflow — AA** | Rozvrzeni funguje na 320 px bez horizontalniho posouvani | DevTools uzky viewport |
| **Tmavy rezim** | `prefers-color-scheme: dark` automaticky zameni tokeny | Prepnuti tmaveho rezimu v OS |

<hr class="hr-text" data-content="Mixiny">

## Stylus mixiny, ktere muzete pouzit

Pokud kompilujete ze zdrojovych kodu, nasledujici mixiny jsou dostupne
v `src/stylus/utilities/mixins.styl`:

| Mixin | Pouziti |
|---|---|
| `focus-ring()` | Vysokokontrastni ohraniceni fokusu respektujici `:focus-visible` |
| `visually-hidden()` | Text pouze pro screen reader, ktery zustava fokusovatelny |
| `skip-link()` | Kotva, ktera se zobrazi pri fokusu |
| `reduced-motion()` | Obali jakykoli blok do `prefers-reduced-motion: no-preference` |
| `forced-colors()` | Upravy pro rezimu Vysokeho kontrastu Windows |
| `target-size(24px)` | Doplni odsazeni na jakykoliv klikatelny prvek pro minimalni dotykovy cil |

Priklad:

```stylus
// Aplikace silneho ohraniceni fokusu na vlastni tlacitko
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="Skip link">

## Pomocnik skip-link

Vlozte toto **jako prvni element do `<body>`**:

```html
<a href="#main-content" class="skip-link">Prejit na hlavni obsah</a>
```

Trida **neni** v zakladnim stylesheetu (takze velikost stranky se nezmeni);
je to 4radkovy ukazka, ktery sestavite sami, nebo pouzijete prilozeny
mixin `skip-link()`. Tento web ho pouziva — fokusujte stranku a stisknete
Tab, abyste jej videli v levem horním rohu.

<hr class="hr-text" data-content="Overeni">

## Overeni vasich stranek

Knihovna dodava skript `a11y-test.mjs` v adresari `scripts/`, ktery
spousti [axe-core](https://github.com/dequelabs/axe-core) na kazdou
zadanou URL.

```bash
node scripts/a11y-test.mjs https://example.com
```

CI spousti tento skript na ukazkove strance `dist/index.html` pri
kazdem pushi.

[Prectete si o vydani v2.0.0 →](/cs/zmeny/) ·
[Stranka bezpecnosti →](/cs/bezpecnost/)
