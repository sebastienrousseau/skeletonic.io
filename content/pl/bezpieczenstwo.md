---
title: "Bezpieczenstwo &amp; lancuch dostaw"
name: "Skeletonic Stylus"
description: "Jak Skeletonic Stylus v2.0.0 zabezpiecza swoj pipeline budowania, podpisuje wydania i dostarcza SBOM."
layout: page
permalink: https://skeletonic.io/pl/bezpieczenstwo/
date: 2026-04-08
author: Sebastien Rousseau
language: pl
theme_color: "hsl(210, 100%, 42%)"
keywords: "bezpieczenstwo css, sbom, cyclonedx, npm provenance, openssf scorecard, lancuch dostaw"
---

## Wydajnosc

- **45,7&nbsp;KB zminifikowany · 8,3&nbsp;KB gzipped · 6,9&nbsp;KB brotli** dla pelnego glownego arkusza stylow.
- **Zero JavaScript** — czysty Stylus → czysty CSS, brak kosztow uruchomieniowych.
- **Warstwy kaskadowe** — nadpisania wygrywaja bez `!important`.
- **Budzet `size-limit` egzekwowany** w CI przy kazdym uaktualnieniu.

Wydajnosc to kontrola bezpieczenstwa. Kazdy niedostarczony bajt to o jeden bajt mniej do audytu, podpisu i weryfikacji.

## Lancuch dostaw — podsumowanie

| Kontrola | Status v2.0.0 |
|---|---|
| **CycloneDX SBOM** | Generowany przy kazdym wydaniu, commitowany do `dist/sbom.json` |
| **npm provenance** | Wlaczone (`--provenance --access public`) |
| **Podpisane tagi git** | Podpisane kluczem SSH maintainera |
| **Przypiete aktualizacje Dependabot** | Cotygodniowe bumpy, automatycznie recenzowane |
| **Budzety rozmiaru** | `size-limit` z limitem 8 KB gzipped, CI pada przy regresji |
| **Lint** | `stylelint` + asercje a11y przy kazdym uaktualnieniu |
| **CodeQL** | Wlaczone dla `javascript` i plikow konfiguracyjnych |
| **CVE-2023-44270** | **Poprawione** przez `pnpm.overrides` usuwajace `postcss@7` |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

Kazdy opublikowany tarball zawiera CycloneDX SBOM w `dist/sbom.json`. Mozesz zweryfikowac swiezo zainstalowana paczke za pomoca:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "2.0.0"
```

SBOM jest generowany za pomoca `cyclonedx-npm` podczas workflow publikacji.

<hr class="hr-text" data-content="Provenance">

## npm provenance

Opublikowany artefakt jest podpisany za pomoca
[npm package provenance](https://docs.npmjs.com/generating-provenance-statements).

Mozesz go zweryfikowac po instalacji za pomoca:

```bash
npm view @sebastienrousseau/skeletonic-stylus@2.0.0 --json | \
  jq '.dist."npm-signature"'
```

Podpisana atestacja laczy tarball z dokladnym przebiegiem GitHub Actions, ktory go wyprodukowal.

<hr class="hr-text" data-content="CVE">

## Znane CVE i poprawki

| CVE | Poziom waznosci | Status |
|---|---|---|
| **CVE-2023-44270** (parsowanie znakow nowej linii w postcss) | Umiarkowany | **Poprawiony** w v2.0.0 przez `pnpm.overrides` aktualizujace `postcss` do >= 8.4.31 |

Baza porad Snyk i feed GitHub Security Advisories sa monitorowane na biezaco; poprawki bezpieczenstwa sa dostarczane jako **wydania na poziomie patch**.

<hr class="hr-text" data-content="Zglaszanie">

## Zglaszanie podatnosci

Prosimy **nie** otwierac publicznego issue na GitHub w sprawie zgloszenia bezpieczenstwa. Zamiast tego uzyj prywatnego kanalu:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

Zgloszenia sa potwierdzane w ciagu **72 godzin**. Poprawki sa dostarczane w ciagu **14 dni** dla problemow umiarkowanych i **48 godzin** dla krytycznych.

[Powrot do strony glownej →](/pl/) · [Przeczytaj dziennik zmian →](/pl/dziennik-zmian/)
