---
title: "Seguridad y cadena de suministro"
name: "Skeletonic Stylus"
description: "Como Skeletonic Stylus v2.0.0 asegura su pipeline de compilacion, firma las releases y distribuye un SBOM."
layout: page
permalink: https://skeletonic.io/es/seguridad/
date: 2026-04-08
author: Sebastien Rousseau
language: es
theme_color: "hsl(210, 100%, 42%)"
keywords: "seguridad css, sbom, cyclonedx, procedencia npm, openssf scorecard, cadena de suministro"
---

## Rendimiento

- **45,7&nbsp;KB minificado · 8,3&nbsp;KB gzipped · 6,9&nbsp;KB brotli** para la hoja de estilos principal completa.
- **Cero JavaScript** — Stylus puro → CSS puro, sin coste en tiempo de ejecucion.
- **Organizado en capas de cascada** — las sobrescrituras prevalecen sin `!important`.
- **Presupuesto `size-limit` aplicado** en CI en cada commit.

El rendimiento es un control de seguridad. Cada byte que no se envia es
un byte menos que auditar, firmar y verificar.

## Resumen de cadena de suministro

| Control | Estado en v2.0.0 |
|---|---|
| **SBOM CycloneDX** | Generado en cada release, incluido en `dist/sbom.json` |
| **Procedencia npm** | Activada (`--provenance --access public`) |
| **Tags git firmados** | Firmados con SSH por la clave del mantenedor |
| **Dependabot fijado** | Actualizaciones semanales, auto-revisadas |
| **Presupuestos de tamano** | `size-limit` limite de 8 KB gzipped, falla CI en regresion |
| **Lint** | `stylelint` + aserciones de a11y en cada push |
| **CodeQL** | Activado para `javascript` y archivos de configuracion |
| **CVE-2023-44270** | **Parcheado** via `pnpm.overrides` eliminando `postcss@7` |

<hr class="hr-text" data-content="SBOM">

## SBOM CycloneDX

Cada tarball publicado incluye un SBOM CycloneDX en `dist/sbom.json`.
Puedes verificar un paquete recien instalado con:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "2.0.0"
```

El SBOM se genera con `cyclonedx-npm` durante el workflow de publicacion.

<hr class="hr-text" data-content="Procedencia">

## Procedencia npm

El artefacto publicado esta firmado usando
[procedencia de paquetes npm](https://docs.npmjs.com/generating-provenance-statements).

Puedes verificarlo tras la instalacion con:

```bash
npm view @sebastienrousseau/skeletonic-stylus@2.0.0 --json | \
  jq '.dist."npm-signature"'
```

La atestacion firmada vincula el tarball con la ejecucion exacta de
GitHub Actions que lo produjo.

<hr class="hr-text" data-content="CVEs">

## CVEs conocidos y parches

| CVE | Severidad | Estado |
|---|---|---|
| **CVE-2023-44270** (analisis de retorno de linea en postcss) | Moderada | **Parcheado** en v2.0.0 via `pnpm.overrides` actualizando `postcss` a ≥ 8.4.31 |

La base de datos de avisos de Snyk y el feed de GitHub Security
Advisories se monitorizan de forma continua; los parches de seguridad
se publican como **releases de nivel patch**.

<hr class="hr-text" data-content="Reportar">

## Reportar una vulnerabilidad

Por favor, **no** abras un issue publico en GitHub para un reporte de
seguridad. En su lugar, utiliza el canal privado en:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

Los reportes se confirman en **72 horas** y se publica una correccion en
**14 dias** para problemas moderados, **48 horas** para problemas criticos.

[Volver al inicio →](/es/) · [Leer el registro de cambios →](/es/registro-de-cambios/)
