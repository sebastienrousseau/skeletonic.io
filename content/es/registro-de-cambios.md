---
title: "Registro de cambios"
name: "Skeletonic Stylus"
description: "Notas de version de Skeletonic Stylus, con v1.1.7 en detalle."
layout: page
permalink: https://skeletonic.io/es/registro-de-cambios/
author: Sebastien Rousseau
language: es
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic changelog, notas de version, v1.1.7, semver"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## v1.1.7 — 2026-04 (actual)

El pase de "preparacion para release": a11y, cadena de suministro, higiene del repositorio.

### Accesibilidad (WCAG 2.2)
- **`$primary` oscurecido** a `hsl(210, 100%, 42%)` para contraste AA
  contra texto blanco en botones / insignias / enlaces.
- **`$secondary` oscurecido** a `hsl(195, 100%, 33%)`.
- Se anadieron **anillos focus-visible** en cada elemento interactivo.
- Se anadio envoltorio **`@media (prefers-reduced-motion)`** alrededor del
  modulo de animaciones.
- Se anadio intercambio de tokens con **`prefers-color-scheme: dark`**.
- Se anadio mixin **target-size(24px)** para satisfacer WCAG 2.2 SC 2.5.8.
- Se anadieron helpers **focus-not-obscured** de scroll-margin para encabezados fijos.

### Build y cadena de suministro
- **Capas de cascada** — cada bloque ahora vive en
  `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}`.
- **SBOM CycloneDX** generado como parte del tarball npm.
- **Presupuestos `size-limit`** aplicados en CI: limite de 8 KB gzipped en la
  hoja de estilos principal.
- **CVE-2023-44270** (retorno de linea en postcss) parcheado via `pnpm.overrides`.
- Procedencia + firma en el workflow de publicacion npm
  (`--provenance --access public`).
- Se elimino el plugin archivado `stylelint-a11y` de la configuracion de lint.

### Higiene del repositorio y paquete para consumidores
- Se elimino el directorio legacy `package/`; `dist/` es ahora la unica
  fuente de verdad para los consumidores.
- README reescrito para reflejar las rutas de instalacion de v1.1.7.
- `dist/` se commitea; `debug/` se genera y se incluye en gitignore.
- Nuevo `.github/workflows/npm-publish.yml` dirigido por tags.

### Correcciones de errores (P0)
- **Regresion del selector padre `row $:after`** — se reemplazo el `$`
  erroneo por `&` en `src/stylus/components/_grid.styl`.
- **`.alternate`** aplicaba por error `animation-direction: reverse`
  en lugar de `alternate`.
- **Namespacing de `.alert-*`** — `.alert.success` → `.alert.alert-success`
  para evitar colisiones con clases de estado.

[Notas completas de la version v1.1.7 en GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases)

<hr class="hr-text" data-content="Historial">

## Versiones anteriores

- **v1.1.6** — limpieza interna, actualizaciones de dependencias.
- **v1.1.5** — se anadio la paleta Material.
- **v1.1.0** — paleta Tachyons + refactorizacion de la cuadricula.
- **v1.0.5** — ultima release "legacy" antes del barrido WCAG 2.2.
- **v1.0.0** — release publica inicial (2018).

Para un historial commit-a-commit, consulta la
[pagina de Releases en GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases).
