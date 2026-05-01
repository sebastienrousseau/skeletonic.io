---
title: "Bezpecnost a dodavatelsky retezec"
name: "Skeletonic Stylus"
description: "Jak Skeletonic Stylus v2.0.0 zabezpecuje svou build pipeline, podepisuje vydani a dodava SBOM."
layout: page
permalink: https://skeletonic.io/cs/bezpecnost/
date: 2026-04-08
author: Sebastien Rousseau
language: cs
theme_color: "hsl(210, 100%, 42%)"
keywords: "css bezpecnost, sbom, cyclonedx, npm provenance, openssf scorecard, dodavatelsky retezec"
---

## Vykon

- **45,7&nbsp;KB minifikovano · 8,3&nbsp;KB gzipped · 6,9&nbsp;KB brotli** pro kompletni zakladni stylesheet.
- **Zadny JavaScript** — cisty Stylus → ciste CSS, zadne naklady za behu.
- **Kaskadove vrstvy** — prepsani vyhravaji bez `!important`.
- **Rozpocet `size-limit`** vynucovan v CI pri kazdem commitu.

Vykon je bezpecnostni opatreni. Kazdy nedodany bajt je o jeden bajt mene
k auditu, podpisu a overeni.

## Dodavatelsky retezec ve zkratce

| Opatreni | Stav v2.0.0 |
|---|---|
| **CycloneDX SBOM** | Generovano pri kazdem vydani, ulozeno v `dist/sbom.json` |
| **npm provenance** | Povoleno (`--provenance --access public`) |
| **Podepsane git tagy** | SSH podepsane klícem spravce |
| **Fixovany Dependabot** | Tydenni aktualizace, automaticky kontrolovano |
| **Rozpocty velikosti** | `size-limit` strop 8 KB gzipped, selhani CI pri regresi |
| **Lint** | `stylelint` + kontroly pristupnosti pri kazdem pushi |
| **CodeQL** | Povoleno pro `javascript` a konfiguracni soubory |
| **CVE-2023-44270** | **Opraveno** pres `pnpm.overrides` nahrazenim `postcss@7` |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

Kazdy publikovany tarball obsahuje CycloneDX SBOM v `dist/sbom.json`.
Cerstve nainstalovan balicek muzete overit pomoci:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "2.0.0"
```

SBOM je generovan nastrojem `cyclonedx-npm` behem publikacniho workflow.

<hr class="hr-text" data-content="Provenance">

## npm provenance

Publikovany artefakt je podepsan pomoci
[npm package provenance](https://docs.npmjs.com/generating-provenance-statements).

Po instalaci jej muzete overit pomoci:

```bash
npm view @sebastienrousseau/skeletonic-stylus@2.0.0 --json | \
  jq '.dist."npm-signature"'
```

Podepsane osvedceni propojuje tarball s presnym behem GitHub Actions,
ktery jej vytvoril.

<hr class="hr-text" data-content="CVE">

## Zname CVE a opravy

| CVE | Zavaznost | Stav |
|---|---|---|
| **CVE-2023-44270** (postcss parsovani konce radku) | Stredni | **Opraveno** ve v2.0.0 pres `pnpm.overrides` aktualizaci `postcss` na ≥ 8.4.31 |

Databaze Snyk a feed GitHub Security Advisories jsou prubezne
sledovany; bezpecnostni opravy jsou dodavany jako **patch vydani**.

<hr class="hr-text" data-content="Nahlaseni">

## Nahlaseni zranitelnosti

Prosime, **neotvirejte** verejny GitHub issue pro bezpecnostni hlasenÍ.
Misto toho pouzijte soukromy kanal na:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

Hlaseni jsou potvrzovana do **72 hodin** a oprava je dodana behem
**14 dnu** pro stredne zavazne problemy, **48 hodin** pro kriticke.

[Zpet na domovskou stranku →](/cs/) · [Prectete si seznam zmen →](/cs/zmeny/)
