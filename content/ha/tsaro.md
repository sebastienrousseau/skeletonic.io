---
title: "Tsaro &amp; sarkar samarwa"
name: "Skeletonic Stylus"
description: "Yadda Skeletonic Stylus v2.0.0 ke tabbatar da bututun ginin sa, sanya hannu a kan sakinsa, kuma aika SBOM."
layout: page
permalink: https://skeletonic.io/ha/tsaro/
date: 2026-04-08
author: Sebastien Rousseau
language: ha
theme_color: "hsl(210, 100%, 42%)"
keywords: "tsaron css, sbom, cyclonedx, tabbacin npm, openssf scorecard, sarkar samarwa"
---

## Aiki

- **42.3&nbsp;KB da aka ƙaranta · 7.9&nbsp;KB gzipped · 6.8&nbsp;KB brotli** don dukan stylesheet na tushe.
- **Babu JavaScript** — Stylus tsantsa → CSS tsantsa, babu kuɗin lokacin aiki.
- **Cascade-layered** — soke suna cin nasara ba tare da `!important` ba.
- **An tilasta kasafin `size-limit`** a CI a kan kowanne commit.

Aiki ikon tsaro ne. Kowane byte da ba a aika shi ba ɗaya ne da ba za a duba shi ba, a sanya hannu, kuma a tabbatar.

## Taƙaitaccen sarkar samarwa

| Iko | Matsayin v2.0.0 |
|---|---|
| **CycloneDX SBOM** | An ƙirƙira shi a kowanne sakin, an adana shi a ƙarƙashin `dist/sbom.json` |
| **Tabbacin npm** | An kunna (`--provenance --access public`) |
| **Alamomin git da aka sanya hannu** | SSH da mai kula da makulli ya sanya hannu |
| **Dependabot da aka ƙulla** | Sabuntawa na mako-mako, bita ta atomatik |
| **Kasafin girma** | `size-limit` iyakar 8 KB gzipped, CI yana gazawa a kan rashin kyau |
| **Lint** | `stylelint` + tabbatarwar a11y a kowanne turawa |
| **CodeQL** | An kunna don `javascript` da fayilolin daidaitawa |
| **CVE-2023-44270** | **An gyara** ta hanyar `pnpm.overrides` da ke sabunta `postcss@7` |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

Kowanne tarball da aka buga ya haɗa da CycloneDX SBOM a `dist/sbom.json`. Kuna iya tabbatar da fakiti da aka sabo shigar da:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "2.0.0"
```

Ana ƙirƙira SBOM da `cyclonedx-npm` yayin aikin buga.

<hr class="hr-text" data-content="Tabbaci">

## Tabbacin npm

An sanya hannu a kan kayan da aka buga ta amfani da [tabbacin fakitin npm](https://docs.npmjs.com/generating-provenance-statements).

Kuna iya tabbatar da shi bayan shigarwa da:

```bash
npm view @sebastienrousseau/skeletonic-stylus@2.0.0 --json | \
  jq '.dist."npm-signature"'
```

Shaida da aka sanya hannu tana haɗa tarball zuwa ainihin gudanar da GitHub Actions da ya samar da shi.

<hr class="hr-text" data-content="CVEs">

## CVEs da aka sani &amp; gyare-gyare

| CVE | Tsanani | Matsayi |
|---|---|---|
| **CVE-2023-44270** (matsalar sakin layi ta postcss) | Matsakaici | **An gyara** a v2.0.0 ta hanyar `pnpm.overrides` da ke sabunta `postcss` zuwa ≥ 8.4.31 |

Ana sa ido kan bayanan shawarwarin Snyk da bayanan Shawarwarin Tsaro na GitHub a kullum; gyare-gyaren tsaro ana aika su azaman **sakin matakin gyara**.

<hr class="hr-text" data-content="Rahotanni">

## Bayar da rahoton rauni

Don Allah **kada** ku buɗe matsalar GitHub ta jama'a don rahoton tsaro. Maimakon haka, yi amfani da hanyar sirri a:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

Ana amsa rahotanni a cikin **sa'o'i 72** kuma ana aika gyara a cikin **kwanaki 14** don matsaloli masu matsakaici, **sa'o'i 48** don masu muhimmanci.

[Komawa gida →](/ha/) · [Karanta tarihin canje-canje →](/ha/tarihin-canje-canje/)
