---
title: "Aabo &amp; ẹwọn ipese"
name: "Skeletonic Stylus"
description: "Bawo ni Skeletonic Stylus v1.1.7 ṣe ni aabo fun opo ikọ rẹ, fọwọsi awọn itusilẹ, ati fi SBOM ranṣẹ."
language: yo
layout: page
permalink: https://skeletonic.io/yo/aabo/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "aabo css, sbom, cyclonedx, npm provenance, openssf scorecard, ẹwọn ipese"
---

## Iṣẹ-ṣiṣe

- **45.7&nbsp;KB minified · 8.3&nbsp;KB gzipped · 6.9&nbsp;KB brotli** fun iwe-aṣa ipilẹ ni kikun.
- **JavaScript kankan** — Stylus mimọ → CSS mimọ, ko si iye owo iṣiṣẹ.
- **Ti a fi cascade-layer ṣe** — awọn atunṣe bori laisi `!important`.
- **Isuna `size-limit` ti a fi ipa mu** ninu CI lori adehun kọọkan.

Iṣẹ-ṣiṣe jẹ iṣakoso aabo. Baiti kọọkan ti a ko fi ranṣẹ jẹ baiti
kan ti o dinku lati ṣe ayẹwo, fọwọsi, ati ṣe idaniloju.

## Ẹwọn ipese ni ṣoki

| Iṣakoso | Ipo v1.1.7 |
|---|---|
| **CycloneDX SBOM** | Ti a ṣẹda lori itusilẹ kọọkan, ti a fi sinu `dist/sbom.json` |
| **Ẹri npm** | Ti a mu ṣiṣẹ (`--provenance --access public`) |
| **Awọn ami git ti a fọwọsi** | SSH-signed nipasẹ bọtini olutọju |
| **Dependabot ti a fi idi mulẹ** | Awọn imudojuiwọn ọsẹ, ti a ṣe atunyẹwo ni aifọwọyi |
| **Awọn isuna iwọn** | `size-limit` opin 8 KB gzipped, kuna CI lori ipadabọ |
| **Lint** | `stylelint` + awọn idaniloju a11y lori igbewọle kọọkan |
| **CodeQL** | Ti a mu ṣiṣẹ fun `javascript` ati awọn faili iṣeto |
| **CVE-2023-44270** | **Ti a ṣe atunṣe** nipasẹ `pnpm.overrides` ti o mu `postcss@7` ṣe imudojuiwọn |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

Gbogbo tarball ti a tẹ jade pẹlu CycloneDX SBOM ni `dist/sbom.json`.
O le ṣayẹwo package ti a fi sori ẹrọ tuntun pẹlu:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "1.1.7"
```

SBOM ni a ṣẹda pẹlu `cyclonedx-npm` lakoko opo iṣẹ tẹ jade.

<hr class="hr-text" data-content="Ẹri">

## Ẹri npm

Ohun elo ti a tẹ jade ni a fọwọsi nipa lilo
[ẹri package npm](https://docs.npmjs.com/generating-provenance-statements).

O le ṣe idaniloju rẹ lẹhin ifisori ẹrọ pẹlu:

```bash
npm view @sebastienrousseau/skeletonic-stylus@1.1.7 --json | \
  jq '.dist."npm-signature"'
```

Ẹri ti a fọwọsi so tarball pada si iṣiṣẹ GitHub Actions gangan ti o
ṣe agbejade rẹ.

<hr class="hr-text" data-content="Awọn CVE">

## Awọn CVE ti a mọ &amp; awọn atunṣe

| CVE | Biba | Ipo |
|---|---|---|
| **CVE-2023-44270** (postcss line return parsing) | Alabọde | **Ti a ṣe atunṣe** ninu v1.1.7 nipasẹ `pnpm.overrides` ti o mu `postcss` ga si ≥ 8.4.31 |

Ibi-ipamọ data imọran Snyk ati atokọ Awọn Imọran Aabo GitHub ni a ṣe
abojuto nigbagbogbo; awọn atunṣe aabo ni a fi ranṣẹ bi **awọn itusilẹ ipele-atunṣe**.

<hr class="hr-text" data-content="Ijabọ">

## Jabo ailagbara kan

Jọwọ **maṣe** ṣii ọran GitHub ti gbogbo eniyan fun ijabọ aabo. Dipo,
lo ọna aṣiri ni:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

Awọn ijabọ ni a jẹwọ laarin **wakati 72** ati atunṣe ni a fi ranṣẹ
laarin **ọjọ 14** fun awọn ọran alabọde, **wakati 48** fun awọn ti o ṣe
pataki.

[Pada si ile →](/yo/) · [Ka iwe iyipada →](/yo/iwe-iyipada/)
