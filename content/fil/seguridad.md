---
title: "Seguridad &amp; supply chain"
name: "Skeletonic Stylus"
description: "Paano sinisiguro ng Skeletonic Stylus v1.1.7 ang build pipeline nito, nilalagdaan ang mga release, at nagpapadala ng SBOM."
layout: page
permalink: https://skeletonic.io/fil/seguridad/
date: 2026-04-08
author: Sebastien Rousseau
language: fil
theme_color: "hsl(210, 100%, 42%)"
keywords: "css security, sbom, cyclonedx, npm provenance, openssf scorecard, supply chain"
---

## Performance

- **39.9&nbsp;KB minified · 7.5&nbsp;KB gzipped · 6.3&nbsp;KB brotli** para sa buong core stylesheet.
- **Walang JavaScript** — purong Stylus → purong CSS, walang runtime cost.
- **Cascade-layered** — nananalo ang mga override nang walang `!important`.
- **`size-limit` budget na ipinatutupad** sa CI sa bawat commit.

Ang performance ay isang security control. Bawat byte na hindi ipinapadala ay isang byte na mas kaunti ang kailangang i-audit, lagdaan, at i-verify.

## Supply-chain TL;DR

| Kontrol | Status sa v1.1.7 |
|---|---|
| **CycloneDX SBOM** | Ginagawa sa bawat release, kinokompromiso sa ilalim ng `dist/sbom.json` |
| **npm provenance** | Naka-enable (`--provenance --access public`) |
| **Signed git tag** | SSH-signed ng maintainer key |
| **Naka-pin na Dependabot** | Lingguhang bump, awtomatikong nire-review |
| **Size budget** | `size-limit` 8 KB gzipped na limitasyon, nabigo ang CI sa regression |
| **Lint** | `stylelint` + a11y assertion sa bawat push |
| **CodeQL** | Naka-enable para sa `javascript` at config file |
| **CVE-2023-44270** | **Na-patch** sa pamamagitan ng `pnpm.overrides` na nagfu-flush ng `postcss@7` |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

Bawat na-publish na tarball ay may kasamang CycloneDX SBOM sa `dist/sbom.json`.
Maaari mong i-verify ang isang bagong na-install na package gamit ang:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "1.1.7"
```

Ang SBOM ay ginagawa gamit ang `cyclonedx-npm` sa panahon ng publish workflow.

<hr class="hr-text" data-content="Provenance">

## npm provenance

Ang na-publish na artefact ay nilalagdaan gamit ang
[npm package provenance](https://docs.npmjs.com/generating-provenance-statements).

Maaari mo itong i-verify pagkatapos ng pag-install gamit ang:

```bash
npm view @sebastienrousseau/skeletonic-stylus@1.1.7 --json | \
  jq '.dist."npm-signature"'
```

Ikinokonekta ng signed attestation ang tarball pabalik sa eksaktong GitHub Actions run na gumawa nito.

<hr class="hr-text" data-content="Mga CVE">

## Mga kilalang CVE &amp; patch

| CVE | Kalubhaan | Status |
|---|---|---|
| **CVE-2023-44270** (postcss line return parsing) | Katamtaman | **Na-patch** sa v1.1.7 sa pamamagitan ng `pnpm.overrides` na nag-a-upgrade ng `postcss` sa ≥ 8.4.31 |

Patuloy na minomonitor ang Snyk advisory database at ang GitHub Security Advisories feed; ang mga security patch ay ipinapadala bilang **patch-level na release**.

<hr class="hr-text" data-content="Pag-ulat">

## Pag-ulat ng isang kahinaan

Mangyaring **huwag** magbukas ng pampublikong GitHub issue para sa isang ulat ng seguridad.
Sa halip, gamitin ang pribadong channel sa:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

Ang mga ulat ay kinikilala sa loob ng **72 oras** at ang pag-aayos ay ipinapadala sa loob ng
**14 na araw** para sa mga katamtamang isyu, **48 oras** para sa mga kritikal.

[Bumalik sa home →](/fil/) · [Basahin ang talaan ng pagbabago →](/fil/talaan-ng-pagbabago/)
