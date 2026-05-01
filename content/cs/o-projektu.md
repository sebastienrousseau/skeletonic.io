---
title: "O projektu Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus je open-source knihovna CSS v preprocesoru Stylus pro pristupne, rychle a modularni stylovani rozhrani."
layout: page
permalink: https://skeletonic.io/cs/o-projektu/
date: 2026-04-08
author: Sebastien Rousseau
language: cs
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, o projektu, stylus, css framework, filosofie"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

<p class="badges">
  <img alt="GitHub Stars" src="https://img.shields.io/github/stars/sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Stars" height="28" loading="lazy">
  <img alt="Mesicni stahovani" src="https://img.shields.io/npm/dm/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Downloads" height="28" loading="lazy">
  <img alt="npm verze" src="https://img.shields.io/npm/v/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=npm" height="28" loading="lazy">
  <img alt="Velikost balicku" src="https://img.shields.io/badge/gzip-8.6%20KB-brightgreen?style=for-the-badge" height="28" loading="lazy">
  <img alt="Licence" src="https://img.shields.io/npm/l/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=License" height="28" loading="lazy">
  <img alt="WCAG" src="https://img.shields.io/badge/WCAG-2.2%20AA-2e7d32?style=for-the-badge" height="28" loading="lazy">
</p>

## Ve zkratce

**Skeletonic Stylus** je open-source knihovna
[Stylus](https://stylus-lang.com) CSS vytvorena pro pristupne, rychle
a modularni stylovani rozhrani.

Vznikla v roce 2018 jako osobni experiment v **dodavani minima CSS** bez
ztraty ergonomie skutecne komponentove knihovny. Po osmi letech zustavaji
cile nezmeneny.

## Co vam nabizi

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="Blesk" width="64" height="64" loading="lazy" decoding="async">
    <h3>Bleskove rychle</h3>
    <p>Navrhujte a prisposobujte responzivni rozhrani behem minut. Nativni CSS promenne, preddefinovane tridy, 12sloupcova mrizka pokryvajici kazdy semanticky HTML element.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="Pirko" width="64" height="64" loading="lazy" decoding="async">
    <h3>Lehke</h3>
    <p>8,3&nbsp;KB gzipped. Stranky se nacitaji rychleji. Kazdy zakladni stavebni blok zustava.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="Responzivni zarizeni" width="64" height="64" loading="lazy" decoding="async">
    <h3>Responzivni design</h3>
    <p>Navrzeno pro desktop i mobil. Rozvrzeni se prizpusobi kazdemu zarizeni. Optimalizovano pro dotyk, semanticke HTML v cele strukture.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="Pristupnost" width="64" height="64" loading="lazy" decoding="async">
    <h3>Pristupnost</h3>
    <p>WCAG&nbsp;2.2 integrovano: focus-visible ohraniceni, AA kontrast, skip-link pomocnici, ovladani klavesnici, podpora omezeneho pohybu — zadny extra stylesheet, zadny <code>aria-*</code> boilerplate.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="Bloky komponent" width="64" height="64" loading="lazy" decoding="async">
    <h3>Knihovna komponent</h3>
    <p>Modularni CSS komponenty a Stylus mixiny. Tlacitka, formulare, karty, upozorneni, stitky, palety a animace — ciste, modularni, pripravene k pouziti.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="GitHub" width="64" height="64" loading="lazy" decoding="async">
    <h3>Zdarma a open source</h3>
    <p>Navrzeno, vytvoreno a spravovano Sebastienem Rousseauem. Dualni licence pod <strong>MIT</strong> nebo <strong>Apache&nbsp;2.0</strong>. Zadne poplatky, zadne licencni naklady, ani pro komercni pouziti.</p>
  </article>
</div>

## Jak se srovnava

Jeden self-hosted stylesheet pokryva typografii, tlacitka, formulare,
karty, tabulky, palety, animace a utilitni tridy. Zadny JavaScript.
Zadny build krok. Zadne zavislosti na Bootstrap, Tailwind nebo Bulma.

| Vlastnost | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| Velikost gzipped | **8,3&nbsp;KB** | ~30&nbsp;KB | ~10&nbsp;KB (varies) | ~30&nbsp;KB |
| WCAG 2.2 soulad | **Integrovano** | Castecne | Manualne | Castecne |
| Kaskadove vrstvy | **Ano (`@layer`)** | Ne | Ne | Ne |
| Tmavy rezim | **`prefers-color-scheme`** | Volitelne | Na bazi trid | Volitelne |
| Vyzaduje JavaScript | **Ne** | Ano (Popper) | Ne | Ne |
| CycloneDX SBOM | **Ano** | Ne | Ne | Ne |
| Omezeny pohyb | **Respektovan** | Castecne | Manualne | Castecne |
| Licence | MIT nebo Apache 2.0 | MIT | MIT | MIT |

## Principy

1. **Pristupnost je zaklad, ne nadstavba.** Soulad s WCAG 2.2 je
   integrovany do kazde komponenty, nikdy neni pripojeny jako „tema".
2. **Na bajtech zalezi.** Jeden dodavany stylesheet by nemel vybuchnout
   vas rozpocet na velikost stranky. Strop 8&nbsp;KB gzipped je vynucovan v CI.
3. **Kaskadove vrstvy porazily valky o specificitu.** Cokoli prepiste
   s jistotou — zadne `!important`, zadne triky s poradim v DOM.
4. **Stylus je stale skvely.** Strucny, expresivni a umoznuje knihovne
   zustat v ~3 000 citelnych radcich.
5. **Nuda je vlastnost.** Zadne JS zavislosti. Zadna build magie.
   Zadne lamic prejmenovani. CSS tridy, ktere delaji presne to, co rikaji.
6. **Tema za par sekund.** Nativni CSS vlastni vlastnosti pro barvy,
   odsazeni, typografii a zaobleni.
7. **Zabezpeceny dodavatelsky retezec.** Podepsany npm provenance. Fixovane
   Dependabot aktualizace. CVE-2023-44270 opraveno pres overrides.

## Verzovani &amp; semver

Skeletonic Stylus se ridi [Semantickym verzovanim 2.0](https://semver.org).

| Zmena | Kdy | Priklad |
|---|---|---|
| **Major** | Odstraneni nebo prejmenovani verejne tridy, mixinu nebo tokenu | 1.x → 2.0 |
| **Minor** | Pridani nove komponenty, mixinu nebo tokenu | 1.1 → 1.2 |
| **Patch** | Opravy chyb, vylepseni pristupnosti, vykon, bezpecnost | 1.1.6 → 2.0.0 |

Vsechny verejne nazvy trid, vsechny CSS vlastni vlastnosti a vsechny
exportovane Stylus mixiny jsou soucasti verejneho API. Zpetne nekompatibilni
zmena si zaslizi major bump a pruvodce migraci.

## Sprava projektu

Skeletonic Stylus je navrzen, vytvoren a spravovan
[Sebastienem Rousseauem](https://sebastienrousseau.com). Dualni licence
pod [MIT](https://opensource.org/licenses/MIT) a
[Apache 2.0](https://opensource.org/licenses/Apache-2.0).

Problemy, napady a prispevky jsou vitany —
[prectete si pruvodce pro prispevky](/cs/prispet/).
