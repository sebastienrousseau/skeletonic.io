---
title: "Primeros pasos con Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Instala Skeletonic Stylus desde npm o un CDN, importalo en tu build Stylus y sobrescribe variables en segundos."
layout: page
permalink: https://skeletonic.io/es/primeros-pasos/
date: 2026-04-08
author: Sebastien Rousseau
language: es
theme_color: "hsl(210, 100%, 42%)"
keywords: "instalar skeletonic, configuracion stylus, css cdn, primeros pasos"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## Introduccion

Nuevo en Skeletonic Stylus? En **v2.0.0** es mas facil que nunca elegir
solo las funcionalidades que necesitas. Gracias a su huella minima
(8,3&nbsp;KB gzipped para la hoja de estilos principal), se integra
rapidamente en cualquier aplicacion web — sin necesidad de framework
JavaScript, sin paso de compilacion si usas el CDN.

Cada metodo esta documentado a continuacion — elige el tuyo.

## 1. Descarga e instalacion

Puedes instalar Skeletonic Stylus mediante **pnpm**, **npm** o **yarn**, o
cargarlo directamente desde un CDN. Tambien puedes alojar los archivos de
distribucion localmente si lo prefieres.

### Desde un gestor de paquetes (recomendado)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0

# npm
npm install @sebastienrousseau/skeletonic-stylus@2.0.0

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@2.0.0
```

### Desde un CDN

Si solo necesitas el CSS compilado, anade una de estas lineas en tu `<head>`:

```html
<!-- jsDelivr -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css"
  crossorigin="anonymous">

<!-- unpkg -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css"
  crossorigin="anonymous">
```

Para maxima integridad, copia el **hash SRI** de las notas de la version
v2.0.0 y anade un atributo `integrity="sha384-…"`.

### Ubicaciones alternativas de CDN

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css` | Si | Si |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css` | Si | No |

### Descargar la release de GitHub

Prefieres un tarball versionado? Descarga la ultima release desde
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
y coloca el contenido de `dist/` directamente en tu proyecto.

### Clonar el repositorio de GitHub

Clona el repositorio principal para obtener todos los archivos fuente
incluyendo los scripts de compilacion:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **Consejo:** firma tus commits — el proyecto exige commits firmados en CI.
> Usa `git commit -S -m "..."` (o establece `commit.gpgsign = true` en tu
> configuracion global de git).

## 2. Usar el CSS compilado

La biblioteca incluye varios bundles preconstruidos bajo
`dist/css/` una vez instalada:

| Archivo | Proposito | Tamano (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | Reset + tokens + layout + elementos + componentes + utilidades | 45,7 KB / 8,3 KB |
| `animations/skeletonic-animations.min.css` | Modulo de animaciones opcional | ≈213 KB / ≈6.8 KB |
| `palettes/material/skeletonic-material.min.css` | Paleta de colores Material | ≈17.4 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Paleta de utilidades Tachyons | 7,3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | Paleta web-safe | ≈3.5 KB |

Cada modulo es independiente — elige la combinacion mas ligera que necesites.

## 3. Usarlo desde Stylus

Si ya tienes un pipeline Stylus, puedes importar los modulos fuente y
dejar que tu bundler elimine las partes no utilizadas:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

O importa solo lo que necesites:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. Sobrescribir el color de marca

Skeletonic expone sus design tokens como **propiedades personalizadas CSS**
para que puedas personalizarlo sin recompilar Stylus:

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

Eso es todo — cada componente que usa el color primario lo seguira.

## 5. Verificar la instalacion

Una comprobacion minima de "funciona?":

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>Funciona.</h1>
    <a href="#" class="button primary">Hola, mundo</a>
  </body>
</html>
```

Si el encabezado tiene tamano fluido y el boton tiene forma de pastilla
azul, has terminado.

## 6. Que incluye

Dentro del paquete encontraras cada archivo fuente, los bundles CSS
compilados y minificados, mapas de origen, y un arbol Stylus completo
organizado por categoria:

```text
@sebastienrousseau/skeletonic-stylus@2.0.0
├── CHANGELOG.md
├── LICENSE-APACHE
├── LICENSE-MIT
├── README.md
├── package.json
├── dist/
│   └── css/
│       ├── core/
│       │   ├── skeletonic.css
│       │   ├── skeletonic.css.map
│       │   └── skeletonic.min.css
│       ├── animations/
│       │   ├── skeletonic-animations.css
│       │   └── skeletonic-animations.min.css
│       └── palettes/
│           ├── material/skeletonic-material.min.css
│           ├── tachyons/skeletonic-tachyons.min.css
│           └── websafe/skeletonic-websafe.min.css
└── src/
    └── stylus/
        ├── animations/      bounce, fade, pulse, shake, vanish, zoom…
        ├── base/            reset, helpers
        ├── components/      card, header, navbar, alert
        ├── configurations/  colors, variables
        ├── elements/        button, form, table, link, list, code…
        ├── fonts/           font-face declarations
        ├── layout/          container, grid, media-queries
        ├── palettes/        material, tachyons, websafe
        ├── utilities/       mixins
        └── skeletonic.styl  ← import unico que incluye todo
```

Cada modulo es independiente — incluye solo los bundles que necesites para
mantener tu carga CSS lo mas ligera posible.

## Preguntas frecuentes

**Como instalo Skeletonic Stylus?**
Ejecuta `pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0`. O carga el
CSS compilado directamente desde un CDN — sin paso de compilacion requerido.

**Requiere JavaScript?**
No. La hoja de estilos principal es CSS puro, con cero coste en tiempo de
ejecucion. Los componentes funcionan sin una sola linea de JS.

**Es compatible con WCAG 2.2?**
Si. v2.0.0 incluye contraste conforme AA, anillos focus-visible, skip-link
helpers, soporte de movimiento reducido y modo oscuro por defecto.

**Cual es el tamano gzipped?**
45,7&nbsp;KB minificado, **8,3&nbsp;KB gzipped**, 6,9&nbsp;KB brotli para
la hoja de estilos principal completa. El limite de 8&nbsp;KB se aplica en CI.

**Que licencia utiliza?**
Doble licencia MIT y Apache 2.0 — elige la que tu proyecto necesite.
Gratuito para uso comercial y personal.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como instalo Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ejecuta pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0. O carga el CSS compilado directamente desde un CDN — sin paso de compilacion requerido."
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus requiere JavaScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. La hoja de estilos principal es CSS puro, con cero coste en tiempo de ejecucion. Los componentes funcionan sin una sola linea de JavaScript."
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus es compatible con WCAG 2.2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Si. v2.0.0 incluye contraste conforme AA, anillos focus-visible, skip-link helpers, soporte de movimiento reducido y modo oscuro por defecto."
      }
    },
    {
      "@type": "Question",
      "name": "Cual es el tamano gzipped de Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "45,7 KB minificado, 8,3 KB gzipped, 6,9 KB brotli para la hoja de estilos principal completa. El limite de 8 KB se aplica en CI en cada commit."
      }
    },
    {
      "@type": "Question",
      "name": "Que licencia utiliza Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Doble licencia MIT y Apache 2.0 — elige la que tu proyecto necesite. Gratuito para uso comercial y personal."
      }
    }
  ]
}
</script>

[Explorar los componentes →](/es/componentes/)
