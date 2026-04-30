---
title: "Securitate &amp; lanț de aprovizionare"
name: "Skeletonic Stylus"
description: "Cum Skeletonic Stylus v1.1.7 securizează pipeline-ul de build, semnează lansările și livrează un SBOM."
layout: page
permalink: https://skeletonic.io/ro/securitate/
date: 2026-04-08
author: Sebastien Rousseau
language: ro
theme_color: "hsl(210, 100%, 42%)"
keywords: "securitate css, sbom, cyclonedx, proveniență npm, openssf scorecard, lanț de aprovizionare"
---

## Performanță

- **45,7&nbsp;KB minificat · 8,3&nbsp;KB gzipped · 6,9&nbsp;KB brotli** pentru stylesheet-ul principal complet.
- **Zero JavaScript** — pur Stylus → pur CSS, fără cost la runtime.
- **Cascade-layered** — suprascrierea câștigă fără `!important`.
- **Buget `size-limit` impus** în CI la fiecare commit.

Performanța este un control de securitate. Fiecare octet nelivrat este un octet mai puțin de auditat, semnat și verificat.

## Rezumatul lanțului de aprovizionare

| Control | Stare v1.1.7 |
|---|---|
| **CycloneDX SBOM** | Generat la fiecare lansare, salvat sub `dist/sbom.json` |
| **Proveniență npm** | Activată (`--provenance --access public`) |
| **Tag-uri git semnate** | Semnate SSH de cheia maintainer-ului |
| **Dependabot fixat** | Actualizări săptămânale, auto-revizuite |
| **Bugete de dimensiune** | `size-limit` limită 8 KB gzipped, CI eșuează la regresie |
| **Lint** | `stylelint` + aserțiuni a11y la fiecare push |
| **CodeQL** | Activat pentru `javascript` și fișiere de configurare |
| **CVE-2023-44270** | **Rezolvat** prin `pnpm.overrides` care elimină `postcss@7` |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

Fiecare tarball publicat include un CycloneDX SBOM la `dist/sbom.json`.
Poți verifica un pachet proaspăt instalat cu:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "1.1.7"
```

SBOM-ul este generat cu `cyclonedx-npm` în timpul workflow-ului de publicare.

<hr class="hr-text" data-content="Proveniență">

## Proveniență npm

Artefactul publicat este semnat folosind
[proveniența pachetului npm](https://docs.npmjs.com/generating-provenance-statements).

Poți verifica după instalare cu:

```bash
npm view @sebastienrousseau/skeletonic-stylus@1.1.7 --json | \
  jq '.dist."npm-signature"'
```

Atestarea semnată leagă tarball-ul de execuția exactă a GitHub Actions
care l-a produs.

<hr class="hr-text" data-content="CVE-uri">

## CVE-uri cunoscute &amp; patch-uri

| CVE | Severitate | Stare |
|---|---|---|
| **CVE-2023-44270** (parsare linie nouă postcss) | Moderată | **Rezolvat** în v1.1.7 prin `pnpm.overrides` care actualizează `postcss` la ≥ 8.4.31 |

Baza de date a consultanțelor Snyk și feed-ul GitHub Security
Advisories sunt monitorizate continuu; patch-urile de securitate sunt
livrate ca **lansări de nivel patch**.

<hr class="hr-text" data-content="Raportare">

## Raportarea unei vulnerabilități

Te rugăm **să nu** deschizi un issue public pe GitHub pentru un raport de securitate. În schimb, folosește canalul privat la:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

Rapoartele sunt confirmate în **72 de ore**. Remedierile sunt livrate în **14 zile** pentru probleme moderate și în **48 de ore** pentru cele critice.

[Înapoi la pagina principală →](/ro/) · [Citește jurnalul de modificări →](/ro/jurnal-modificari/)
