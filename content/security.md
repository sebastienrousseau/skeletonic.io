---
title: "Security &amp; supply chain"
name: "Skeletonic Stylus"
description: "How Skeletonic Stylus v2.0.0 secures its build pipeline, signs releases, and ships an SBOM."
layout: page
permalink: https://skeletonic.io/security/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "css security, sbom, cyclonedx, npm provenance, openssf scorecard, supply chain"
---

## Performance

- **39.9&nbsp;KB minified · 7.5&nbsp;KB gzipped · 6.3&nbsp;KB brotli** for the full core stylesheet.
- **Zero JavaScript** — pure Stylus → pure CSS, no runtime cost.
- **Cascade-layered** — overrides win without `!important`.
- **`size-limit` budget enforced** in CI on every commit.

Performance is a security control. Every byte not shipped is one fewer
byte to audit, sign, and verify.

## Supply-chain TL;DR

| Control | v2.0.0 status |
|---|---|
| **CycloneDX SBOM** | Generated on every release, committed under `dist/sbom.json` |
| **npm provenance** | Enabled (`--provenance --access public`) |
| **Signed git tags** | SSH-signed by maintainer key |
| **Pinned Dependabot** | Weekly bumps, autoreviewed |
| **Size budgets** | `size-limit` 8 KB gzipped ceiling, fails CI on regression |
| **Lint** | `stylelint` + a11y assertions on every push |
| **CodeQL** | Enabled for `javascript` and config files |
| **CVE-2023-44270** | **Patched** via `pnpm.overrides` flushing `postcss@7` |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

Every published tarball includes a CycloneDX SBOM at `dist/sbom.json`.
You can verify a freshly installed package with:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "2.0.0"
```

The SBOM is generated with `cyclonedx-npm` during the publish workflow.

<hr class="hr-text" data-content="Provenance">

## npm provenance

The published artefact is signed using
[npm package provenance](https://docs.npmjs.com/generating-provenance-statements).

You can verify it after installation with:

```bash
npm view @sebastienrousseau/skeletonic-stylus@2.0.0 --json | \
  jq '.dist."npm-signature"'
```

The signed attestation links the tarball back to the exact GitHub
Actions run that produced it.

<hr class="hr-text" data-content="CVEs">

## Known CVEs &amp; patches

| CVE | Severity | Status |
|---|---|---|
| **CVE-2023-44270** (postcss line return parsing) | Moderate | **Patched** in v2.0.0 via `pnpm.overrides` upgrading `postcss` to ≥ 8.4.31 |

The Snyk advisory database and GitHub Security Advisories feed are
monitored continuously. Security patches ship as **patch-level releases**.

<hr class="hr-text" data-content="Reporting">

## Reporting a vulnerability

Please **do not** open a public GitHub issue for a security report.
Instead, use the private channel at:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

Reports are acknowledged within **72 hours**. Fixes ship within
**14 days** for moderate issues, **48 hours** for critical ones.

[Back to home →](/) · [Read the changelog →](/changelog/)
