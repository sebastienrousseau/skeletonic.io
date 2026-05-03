---
title: "Sicurezza &amp; supply chain"
name: "Skeletonic Stylus"
description: "Come Skeletonic Stylus v2.0.0 protegge la pipeline di build, firma i rilasci e distribuisce un SBOM."
layout: page
permalink: https://skeletonic.io/it/sicurezza/
date: 2026-04-08
author: Sebastien Rousseau
language: it
theme_color: "hsl(210, 100%, 42%)"
keywords: "sicurezza css, sbom, cyclonedx, provenienza npm, openssf scorecard, supply chain"
---

## Prestazioni

- **45,7&nbsp;KB minificati · 8,3&nbsp;KB gzipped · 6,9&nbsp;KB brotli** per il foglio di stile principale completo.
- **Zero JavaScript** — puro Stylus → puro CSS, nessun costo a runtime.
- **Cascade-layered** — le sovrascritture vincono senza `!important`.
- **Budget `size-limit` imposto** nella CI ad ogni commit.

Le prestazioni sono un controllo di sicurezza. Ogni byte non distribuito e un byte in meno da verificare, firmare e controllare.

## Supply chain in sintesi

| Controllo | Stato v2.0.0 |
|---|---|
| **CycloneDX SBOM** | Generato ad ogni rilascio, committato sotto `dist/sbom.json` |
| **Provenienza npm** | Abilitata (`--provenance --access public`) |
| **Tag git firmati** | Firmati con chiave SSH dal maintainer |
| **Dependabot bloccato** | Aggiornamenti settimanali, autorevisionati |
| **Budget di dimensione** | `size-limit` con limite di 8 KB gzipped, la CI fallisce in caso di regressione |
| **Lint** | `stylelint` + asserzioni a11y ad ogni push |
| **CodeQL** | Abilitato per `javascript` e file di configurazione |
| **CVE-2023-44270** | **Corretta** tramite `pnpm.overrides` che aggiorna `postcss@7` |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

Ogni archivio pubblicato include un SBOM CycloneDX in `dist/sbom.json`. Puoi verificare un pacchetto appena installato con:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "2.0.0"
```

Il SBOM viene generato con `cyclonedx-npm` durante il workflow di pubblicazione.

<hr class="hr-text" data-content="Provenienza">

## Provenienza npm

L'artefatto pubblicato e firmato utilizzando la [provenienza dei pacchetti npm](https://docs.npmjs.com/generating-provenance-statements).

Puoi verificarlo dopo l'installazione con:

```bash
npm view @sebastienrousseau/skeletonic-stylus@2.0.0 --json | \
  jq '.dist."npm-signature"'
```

L'attestazione firmata collega l'archivio all'esatta esecuzione di GitHub Actions che lo ha prodotto.

<hr class="hr-text" data-content="CVE">

## CVE note &amp; patch

| CVE | Gravita | Stato |
|---|---|---|
| **CVE-2023-44270** (parsing line return di postcss) | Moderata | **Corretta** nella v2.0.0 tramite `pnpm.overrides` che aggiorna `postcss` a ≥ 8.4.31 |

Il database di advisory Snyk e il feed GitHub Security Advisories vengono monitorati costantemente; le patch di sicurezza vengono distribuite come **rilasci patch**.

<hr class="hr-text" data-content="Segnalazioni">

## Segnalare una vulnerabilita

Per favore **non** aprire una issue pubblica su GitHub per una segnalazione di sicurezza. Utilizza invece il canale privato:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

Le segnalazioni vengono confermate entro **72 ore**. Le correzioni vengono rilasciate entro **14 giorni** per problemi moderati, **48 ore** per quelli critici.

[Torna alla home →](/it/) · [Leggi il registro modifiche →](/it/registro-modifiche/)
