---
title: "Accesibilidad — WCAG 2.2 en v2.0.0"
name: "Skeletonic Stylus"
description: "Lo que v2.0.0 incluye de serie para la conformidad con WCAG 2.2 — anillos de enfoque, contraste, skip links, movimiento y modo oscuro."
layout: page
permalink: https://skeletonic.io/es/accesibilidad/
date: 2026-04-08
author: Sebastien Rousseau
language: es
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, accesibilidad, focus visible, skip link, prefers reduced motion, contraste"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

> **Skeletonic Stylus v2.0.0 incluye conformidad con WCAG 2.2 como
> comportamiento predeterminado, no como un tema opcional.** Esta pagina
> documenta lo que viene integrado y que mixins puedes activar para un
> control mas preciso.

<hr class="hr-text" data-content="De serie">

## Lo que obtienes gratis

| WCAG 2.2 SC | Que hace v2.0.0 | Como verificar |
|---|---|---|
| **1.4.3 Contraste (Minimo) — AA** | `--cl-primary` y `--cl-secondary` oscurecidos a ≥ 4,5:1 contra blanco | DevTools → verificador de contraste |
| **1.4.11 Contraste No Textual — AA** | Bordes de formularios, botones, insignias todos ≥ 3:1 | Igual |
| **2.4.7 Foco Visible — AA** | Cada elemento enfocable tiene un anillo `:focus-visible` (amarillo en fondos oscuros, azul en claros) | Navegar con `Tab` por cualquier pagina |
| **2.4.11 Foco No Oculto — AA (nuevo en 2.2)** | El encabezado fijo tiene altura reducida + scroll-margin de enfoque | Navegar con `Tab` mas alla del encabezado fijo |
| **2.5.8 Tamano del Objetivo — AA (nuevo en 2.2)** | Botones / enlaces: area de toque ≥ 24x24 px CSS | DevTools modelo de caja |
| **1.4.12 Espaciado de Texto — AA** | Todos los elementos respetan las sobrescrituras de line-height / letter-spacing del usuario | Sobrescribir en DevTools |
| **2.3.3 Animacion por Interacciones — AAA** | Todas las clases de animacion estan envueltas en `@media (prefers-reduced-motion: no-preference)` | Reducir movimiento a nivel de SO |
| **1.4.10 Reflujo — AA** | El layout funciona a 320 px sin scroll horizontal | DevTools viewport estrecho |
| **Modo oscuro** | `prefers-color-scheme: dark` intercambia los tokens automaticamente | Cambiar modo oscuro del SO |

<hr class="hr-text" data-content="Mixins">

## Mixins Stylus que puedes activar

Si compilas desde el codigo fuente, los siguientes mixins estan
disponibles en `src/stylus/utilities/mixins.styl`:

| Mixin | Uso |
|---|---|
| `focus-ring()` | Anillo de enfoque de alto contraste que respeta `:focus-visible` |
| `visually-hidden()` | Texto solo para lectores de pantalla que sigue siendo enfocable |
| `skip-link()` | Ancla que se hace visible al recibir foco |
| `reduced-motion()` | Envuelve cualquier bloque en `prefers-reduced-motion: no-preference` |
| `forced-colors()` | Ajustes para el Modo de Alto Contraste de Windows |
| `target-size(24px)` | Anade padding a cualquier elemento clicable hasta un objetivo de toque minimo |

Ejemplo:

```stylus
// Aplicar un anillo de enfoque fuerte en un boton personalizado
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="Skip link">

## El helper skip-link

Coloca esto **como primer elemento dentro de `<body>`**:

```html
<a href="#main-content" class="skip-link">Saltar al contenido principal</a>
```

La clase **no** esta en la hoja de estilos principal (para que el peso de
la pagina no aumente); es un fragmento de 4 lineas que compones tu mismo
o usas el mixin `skip-link()` incluido. Este sitio lo utiliza — enfoca la
pagina y pulsa Tab para verlo aparecer en la esquina superior izquierda.

<hr class="hr-text" data-content="Verificacion">

## Verificar tus propias paginas

La biblioteca incluye un script `a11y-test.mjs` bajo `scripts/` que
ejecuta [axe-core](https://github.com/dequelabs/axe-core) contra cada
URL que le proporciones.

```bash
node scripts/a11y-test.mjs https://example.com
```

CI ejecuta este script contra la pagina de muestra `dist/index.html`
en cada push.

[Leer sobre la version v2.0.0 →](/es/registro-de-cambios/) ·
[Ver la pagina de seguridad →](/es/seguridad/)
