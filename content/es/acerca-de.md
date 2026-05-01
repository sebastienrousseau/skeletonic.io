---
title: "Acerca de Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus es una biblioteca CSS Stylus de codigo abierto para un estilizado de interfaces accesible, rapido y modular."
layout: page
permalink: https://skeletonic.io/es/acerca-de/
date: 2026-04-08
author: Sebastien Rousseau
language: es
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, acerca de, stylus, framework css, filosofia"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

<p class="badges">
  <img alt="GitHub Stars" src="https://img.shields.io/github/stars/sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Stars" height="28" loading="lazy">
  <img alt="Descargas mensuales" src="https://img.shields.io/npm/dm/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Downloads" height="28" loading="lazy">
  <img alt="Version npm" src="https://img.shields.io/npm/v/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=npm" height="28" loading="lazy">
  <img alt="Tamano del paquete" src="https://img.shields.io/badge/gzip-8.6%20KB-brightgreen?style=for-the-badge" height="28" loading="lazy">
  <img alt="Licencia" src="https://img.shields.io/npm/l/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=License" height="28" loading="lazy">
  <img alt="WCAG" src="https://img.shields.io/badge/WCAG-2.2%20AA-2e7d32?style=for-the-badge" height="28" loading="lazy">
</p>

## La version corta

**Skeletonic Stylus** es una biblioteca CSS [Stylus](https://stylus-lang.com)
de codigo abierto creada para hacer que el estilizado de interfaces
accesible, rapido y modular.

Nacio en 2018 como un experimento personal para **enviar menos CSS** sin
renunciar a la ergonomia de una biblioteca de componentes real. Ocho anos
despues, el objetivo sigue siendo el mismo.

## Lo que ofrece

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="Rayo" width="64" height="64" loading="lazy" decoding="async">
    <h3>Ultrarapido</h3>
    <p>Disena y personaliza interfaces responsivas en minutos. Variables CSS nativas, clases predefinidas, una cuadricula de 12 columnas que cubre cada elemento HTML semantico.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="Pluma" width="64" height="64" loading="lazy" decoding="async">
    <h3>Ligero</h3>
    <p>8,3&nbsp;KB gzipped. Las paginas cargan mas rapido. Cada bloque esencial se mantiene incluido.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="Dispositivos responsivos" width="64" height="64" loading="lazy" decoding="async">
    <h3>Diseno responsivo</h3>
    <p>Creado para escritorio y movil. Los layouts se adaptan a cualquier dispositivo. Optimizado para tactil, HTML semantico en todo momento.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="Persona con accesibilidad" width="64" height="64" loading="lazy" decoding="async">
    <h3>Accesibilidad</h3>
    <p>WCAG&nbsp;2.2 integrado: anillos focus-visible, contraste AA, skip-link helpers, componentes accesibles por teclado, soporte de movimiento reducido — sin hoja de estilos adicional, sin boilerplate <code>aria-*</code>.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="Bloques de componentes" width="64" height="64" loading="lazy" decoding="async">
    <h3>Biblioteca de componentes</h3>
    <p>Componentes CSS modulares y mixins Stylus. Botones, formularios, tarjetas, alertas, insignias, paletas y animaciones — limpios, modulares, listos para integrar.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="Logo de GitHub" width="64" height="64" loading="lazy" decoding="async">
    <h3>Gratuito y de codigo abierto</h3>
    <p>Disenado, construido y mantenido por Sebastien Rousseau. Con doble licencia <strong>MIT</strong> o <strong>Apache&nbsp;2.0</strong>. Sin tarifas, sin costes de licencia, incluso para uso comercial.</p>
  </article>
</div>

## Como se compara

Una sola hoja de estilos autoalojada cubre tipografia, botones, formularios,
tarjetas, tablas, paletas, animaciones y clases de utilidad. Sin JavaScript.
Sin paso de compilacion requerido. Sin dependencias de Bootstrap, Tailwind
o Bulma.

| Caracteristica | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| Tamano gzipped | **8,3&nbsp;KB** | ~30&nbsp;KB | ~10&nbsp;KB (varies) | ~30&nbsp;KB |
| Conformidad WCAG 2.2 | **Integrada** | Parcial | Manual | Parcial |
| Capas de cascada | **Si (`@layer`)** | No | No | No |
| Modo oscuro | **`prefers-color-scheme`** | Opcional | Basado en clases | Opcional |
| JavaScript requerido | **No** | Si (Popper) | No | No |
| SBOM CycloneDX | **Si** | No | No | No |
| Movimiento reducido | **Respetado** | Parcial | Manual | Parcial |
| Licencia | MIT o Apache 2.0 | MIT | MIT | MIT |

## Principios

1. **La accesibilidad es el piso, no el techo.** La conformidad con WCAG 2.2
   esta integrada en cada componente, nunca anadida como un "tema" opcional.
2. **Cada byte cuenta.** Una sola hoja de estilos no deberia exceder tu
   presupuesto de peso de pagina. El limite de 8&nbsp;KB gzipped se aplica en CI.
3. **Las capas de cascada superan las guerras de especificidad.** Sobrescribe
   cualquier cosa con confianza — sin `!important`, sin trucos de orden DOM.
4. **Stylus sigue siendo bueno.** Conciso, expresivo, y permite que la
   biblioteca se mantenga en ~3.000 lineas legibles.
5. **Lo aburrido es una ventaja.** Sin dependencias JS. Sin magia en tiempo
   de compilacion. Sin renombramientos disruptivos. Clases CSS que hacen
   exactamente lo que dicen.
6. **Personalizable en segundos.** Propiedades personalizadas CSS nativas
   para colores, espaciado, tipografia y radios.
7. **Cadena de suministro reforzada.** Procedencia npm firmada. Actualizaciones
   Dependabot fijadas. CVE-2023-44270 parcheado via overrides.

## Versionado y semver

Skeletonic Stylus sigue [Semantic Versioning 2.0](https://semver.org).

| Incremento | Cuando | Ejemplo |
|---|---|---|
| **Major** | Eliminar o renombrar una clase publica, mixin o token | 1.x → 2.0 |
| **Minor** | Anadir un nuevo componente, mixin o token | 1.1 → 1.2 |
| **Patch** | Correcciones de errores, mejoras de a11y, rendimiento, seguridad | 1.1.6 → 2.0.0 |

Todos los nombres de clases publicas, todas las propiedades personalizadas
CSS y todos los mixins Stylus exportados son parte de la API publica. Un
cambio disruptivo genera un incremento major y una guia de migracion.

## Responsabilidad

Skeletonic Stylus esta disenado, construido y mantenido por
[Sebastien Rousseau](https://sebastienrousseau.com). Con doble licencia
[MIT](https://opensource.org/licenses/MIT) y
[Apache 2.0](https://opensource.org/licenses/Apache-2.0).

Problemas, ideas y contribuciones son bienvenidos —
[consulta la guia de contribucion](/es/contribuir/).
