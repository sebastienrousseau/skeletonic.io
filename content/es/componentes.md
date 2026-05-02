---
title: "Componentes"
name: "Skeletonic Stylus"
description: "Ejemplos HTML en vivo de cada componente de Skeletonic Stylus, agrupados, anclados y renderizados con la misma hoja de estilos que se demuestra."
layout: page
permalink: https://skeletonic.io/es/componentes/
date: 2026-04-08
author: Sebastien Rousseau
language: es
theme_color: "hsl(210, 100%, 42%)"
keywords: "componentes skeletonic, botones, tarjetas, formularios, alertas, insignias, encabezado, navbar, hamburguesa css"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

Cada ejemplo a continuacion se **renderiza con la misma hoja de estilos que
se demuestra**. Sin preprocesador. Sin JavaScript. Sin dependencias
adicionales. Copia cualquier fragmento en un archivo HTML nuevo y funciona.

<nav aria-label="En esta pagina">
<p><strong>En esta pagina</strong></p>
<ul>
<li><strong>Entradas</strong> — <a href="#buttons">Botones</a> · <a href="#badges">Insignias</a></li>
<li><strong>Retroalimentacion</strong> — <a href="#alerts">Alertas</a></li>
<li><strong>Superficie</strong> — <a href="#cards">Tarjetas</a></li>
<li><strong>Formularios</strong> — <a href="#form-fields">Campos de formulario</a></li>
<li><strong>Layout</strong> — <a href="#grid">Cuadricula</a> · <a href="#header">Encabezado y nav hamburguesa</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="Entradas">

<h2 id="inputs">Entradas</h2>

Elementos interactivos que el visitante clica, toca o enfoca para
controlar la pagina.

<h3 id="buttons">Botones</h3>

Un disparador de accion semantico y personalizable. Las variantes solidas
y outline incluyen seis colores de marca cada una.

```html
<a href="#" class="button primary">Primary</a>
<a href="#" class="button secondary">Secondary</a>
<a href="#" class="button tertiary">Tertiary</a>
```

<section aria-labelledby="buttons">
<p>
  <a href="#" class="button primary">Primary</a>
  <a href="#" class="button secondary">Secondary</a>
  <a href="#" class="button tertiary">Tertiary</a>
</p>
</section>

Variantes outline:

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">Outline</a>
  <a href="#" class="button secondary-outline">Outline</a>
</p>

> **Nota de accesibilidad.** Cada variante `.button` incluye un anillo
> `:focus-visible` y un **area de toque minima de 44x44&nbsp;px**
> (WCAG&nbsp;2.2 SC&nbsp;2.5.8). Usa `<button type="button">` para
> acciones en la pagina y `<a href>` solo para navegacion.

<h3 id="badges">Insignias</h3>

Una etiqueta compacta para estado, conteo o categoria. El tamano de
texto es fijo para que las insignias se alineen con el texto circundante.

```html
<span class="badge">Default</span>
<span class="badge primary">Primary</span>
<span class="badge success">Success</span>
<span class="badge warning">Warning</span>
<span class="badge danger">Danger</span>
```

<section aria-labelledby="badges">
<p>
  <span class="badge">Default</span>
  <span class="badge primary">Primary</span>
  <span class="badge success">Success</span>
  <span class="badge warning">Warning</span>
  <span class="badge danger">Danger</span>
</p>
</section>

> **Nota de accesibilidad.** Las insignias son decorativas por defecto.
> Cuando la insignia es la unica senal (por ejemplo, un conteo de no
> leidos), envuelvela en un helper visualmente oculto:
> `<span class="visually-hidden">3 mensajes sin leer</span>`.

<hr class="hr-text" data-content="Retroalimentacion">

<h2 id="feedback">Retroalimentacion</h2>

Superficies que informan al visitante de que algo ocurrio — o esta a
punto de ocurrir.

<h3 id="alerts">Alertas</h3>

Mensajes de estado con intencion semantica. **En v2.0.0 cada variante
esta explicitamente bajo el espacio de nombres** `.alert-{primary,secondary,info,success,warning,error}`
para que la clase de variante no colisione con clases de estado en
otras partes de la pagina.

```html
<div class="alert alert-primary" role="alert">
  <strong>Atencion.</strong> Esta es una alerta primaria.
</div>
<div class="alert alert-success" role="status">
  <strong>Guardado.</strong> Tus cambios se han conservado.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Cuidado.</strong> Esta accion afecta al estado compartido.
</div>
<div class="alert alert-error" role="alert">
  <strong>Error.</strong> No se pudo guardar el formulario.
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>Atencion.</strong> Esta es una alerta primaria.
</div>

<div class="alert alert-success" role="status">
<strong>Guardado.</strong> Tus cambios se han conservado.
</div>

<div class="alert alert-warning" role="alert">
<strong>Cuidado.</strong> Esta accion afecta al estado compartido.
</div>

<div class="alert alert-error" role="alert">
<strong>Error.</strong> No se pudo guardar el formulario.
</div>
</section>

> **Nota de accesibilidad.** Usa `role="alert"` para mensajes que
> requieren atencion inmediata (errores, advertencias) y `role="status"`
> para confirmaciones no urgentes. Ambos exponen el mensaje a la
> tecnologia asistiva en el momento en que aparece.

<hr class="hr-text" data-content="Superficie">

<h2 id="surface">Superficie</h2>

Contenedores que enmarcan y agrupan contenido relacionado.

<h3 id="cards">Tarjetas</h3>

Un contenedor con borde y padding para una unidad coherente. Combina
con la cuadricula `flex-N` para muros de tarjetas responsivos.

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Lightweight</h3>
      <p>42.3 KB minified, 7.9 KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Accessible</h3>
      <p>WCAG 2.2 conformant out of the box.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modular</h3>
      <p>Cascade-layered for easy overrides.</p>
    </div>
  </article>
</section>
```

<section class="row" aria-labelledby="cards">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Ligero</h3>
      <p>45,7&nbsp;KB minificado, 8,3&nbsp;KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Accesible</h3>
      <p>Conforme con WCAG&nbsp;2.2 desde el primer momento.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modular</h3>
      <p>Organizado en capas de cascada para sobrescrituras sencillas.</p>
    </div>
  </article>
</section>

> **Nota de accesibilidad.** Envuelve cada tarjeta en un landmark
> semantico (`<article>`, `<section>`) y comienza su contenido con un
> encabezado (`<h3>`). Los usuarios de lectores de pantalla podran
> recorrer la lista de tarjetas como regiones navegables de primera clase.

<hr class="hr-text" data-content="Formularios">

<h2 id="forms">Formularios</h2>

Entradas, etiquetas y agrupaciones para recopilar datos del usuario.

<h3 id="form-fields">Campos de formulario</h3>

Etiquetas, campos de texto, textareas, fieldsets y legends — todo
dimensionado de forma consistente con el resto del sistema de diseno.

```html
<form>
  <label for="name">Name</label>
  <input id="name" type="text" required>

  <label for="email">Email</label>
  <input id="email" type="email" required class="input-primary">

  <label for="msg">Message</label>
  <textarea id="msg" rows="4"></textarea>

  <button type="submit" class="button primary">Send</button>
</form>
```

<section aria-labelledby="form-fields">
<div role="group" aria-label="Form fields demo">
  <label for="demo-name">Nombre</label>
  <input id="demo-name" type="text">

  <label for="demo-email">Correo electronico</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">Mensaje</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">Enviar (demo)</button></p>
</div>
</section>

> **Nota de accesibilidad.** Cada input debe tener un `<label for="…">`
> asociado programaticamente. Agrupa controles relacionados dentro de un
> `<fieldset>` con un `<legend>`. Marca los campos obligatorios con
> `required` (y un asterisco visible en el texto de la etiqueta).

<hr class="hr-text" data-content="Layout">

<h2 id="layout">Layout</h2>

Primitivas estructurales — cuadricula, contenedor, encabezado — que
enmarcan toda la pagina.

<h3 id="grid">Cuadricula</h3>

Una cuadricula responsiva `flex-N` (1 → 12 columnas) construida con
flexbox. El padre `.row` gestiona espaciado y ajuste automaticamente.

```html
<div class="row">
  <div class="flex-6">Half</div>
  <div class="flex-6">Half</div>
</div>
<div class="row">
  <div class="flex-4">Third</div>
  <div class="flex-4">Third</div>
  <div class="flex-4">Third</div>
</div>
```

<section aria-labelledby="grid">
<div style="display:flex;flex-wrap:wrap;gap:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Mitad</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Mitad</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Tercio</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Tercio</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Tercio</div>
</div>
</section>

> **Nota de accesibilidad.** El orden visual debe coincidir con el orden
> del DOM. Evita reordenar filas con `flex-direction: row-reverse` u
> `order:` — los lectores de pantalla y los usuarios de teclado siguen
> el codigo fuente, no la representacion visual.

<h3 id="header">Encabezado y nav hamburguesa</h3>

Un encabezado completo solo con CSS con un toggle hamburguesa responsivo.
**Cero JavaScript.** Copia el fragmento a continuacion en una pagina HTML
nueva que ya cargue `skeletonic.min.css` y el menu se contrae, expande
y gestiona el foco correctamente por si solo.

```html
<style>
  .sk-header{position:relative;display:flex;align-items:center;gap:1rem;padding:.75rem 1rem;border:1px solid #e4e4e7;border-radius:.5rem;background:#fff;}
  .sk-header .sk-brand{font-weight:600;color:#0a0a0a;text-decoration:none;}
  .sk-header .sk-toggle{position:absolute;left:-9999px;}
  .sk-header .sk-burger{display:none;margin-left:auto;cursor:pointer;padding:.625rem .75rem;border:1px solid #e4e4e7;border-radius:.375rem;font-size:1.125rem;line-height:1;min-width:2.75rem;min-height:2.75rem;}
  .sk-header .sk-burger:focus-within,.sk-header .sk-toggle:focus-visible+.sk-burger{outline:2px solid hsl(210,100%,42%);outline-offset:2px;}
  .sk-header .sk-menu{list-style:none;display:flex;gap:.25rem;margin:0 0 0 auto;padding:0;}
  .sk-header .sk-menu a{display:inline-flex;align-items:center;min-height:2.75rem;padding:.5rem .875rem;border-radius:.375rem;color:#1a1a1a;text-decoration:none;}
  .sk-header .sk-menu a:hover{background:#f4f4f5;}
  @media (max-width:640px){
    .sk-header .sk-burger{display:inline-flex;align-items:center;justify-content:center;}
    .sk-header .sk-menu{display:none;flex-direction:column;gap:0;position:absolute;top:calc(100% + .25rem);left:0;right:0;background:#fff;border:1px solid #e4e4e7;border-radius:.5rem;padding:.375rem;box-shadow:0 4px 24px rgba(0,0,0,.08);z-index:10;}
    .sk-header .sk-menu a{padding:.75rem 1rem;border-bottom:1px solid #f4f4f5;}
    .sk-header .sk-menu li:last-child a{border-bottom:0;}
    .sk-header .sk-toggle:checked ~ .sk-menu{display:flex;}
  }
</style>
<header class="sk-header">
  <a class="sk-brand" href="#">Brand</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Toggle navigation">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Docs</a></li>
    <li><a href="#">Components</a></li>
    <li><a href="#">About</a></li>
  </ul>
</header>
```

<section aria-labelledby="header">
<style>
  .sk-header{position:relative;display:flex;align-items:center;gap:1rem;padding:.75rem 1rem;border:1px solid #e4e4e7;border-radius:.5rem;background:#fff;}
  .sk-header .sk-brand{font-weight:600;color:#0a0a0a;text-decoration:none;}
  .sk-header .sk-toggle{position:absolute;left:-9999px;}
  .sk-header .sk-burger{display:none;margin-left:auto;cursor:pointer;padding:.625rem .75rem;border:1px solid #e4e4e7;border-radius:.375rem;font-size:1.125rem;line-height:1;min-width:2.75rem;min-height:2.75rem;}
  .sk-header .sk-burger:focus-within,.sk-header .sk-toggle:focus-visible+.sk-burger{outline:2px solid hsl(210,100%,42%);outline-offset:2px;}
  .sk-header .sk-menu{list-style:none;display:flex;gap:.25rem;margin:0 0 0 auto;padding:0;}
  .sk-header .sk-menu a{display:inline-flex;align-items:center;min-height:2.75rem;padding:.5rem .875rem;border-radius:.375rem;color:#1a1a1a;text-decoration:none;}
  .sk-header .sk-menu a:hover{background:#f4f4f5;}
  @media (max-width:640px){
    .sk-header .sk-burger{display:inline-flex;align-items:center;justify-content:center;}
    .sk-header .sk-menu{display:none;flex-direction:column;gap:0;position:absolute;top:calc(100% + .25rem);left:0;right:0;background:#fff;border:1px solid #e4e4e7;border-radius:.5rem;padding:.375rem;box-shadow:0 4px 24px rgba(0,0,0,.08);z-index:10;}
    .sk-header .sk-menu a{padding:.75rem 1rem;border-bottom:1px solid #f4f4f5;}
    .sk-header .sk-menu li:last-child a{border-bottom:0;}
    .sk-header .sk-toggle:checked ~ .sk-menu{display:flex;}
  }
</style>
<header class="sk-header">
  <a class="sk-brand" href="#">Brand</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Toggle navigation">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Docs</a></li>
    <li><a href="#">Componentes</a></li>
    <li><a href="#">Acerca de</a></li>
  </ul>
</header>
</section>

> **Nota de accesibilidad.** El checkbox oculto permanece en el orden de
> tabulacion para que los usuarios de teclado puedan abrir el menu con
> `Espacio` o `Enter`. El `<label>` lleva `aria-hidden` porque el
> checkbox en si es la fuente del nombre accesible. Reduce el tamano de
> la ventana por debajo de 640&nbsp;px para ver el toggle hamburguesa
> en accion.

[Ver notas completas de a11y →](/es/accesibilidad/) · [Explorar paletas →](/es/paletas/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Componentes de Skeletonic Stylus",
  "description": "Cada componente incluido en Skeletonic Stylus v2.0.0.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Botones",
      "url": "https://skeletonic.io/es/componentes/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Insignias",
      "url": "https://skeletonic.io/es/componentes/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Alertas",
      "url": "https://skeletonic.io/es/componentes/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Tarjetas",
      "url": "https://skeletonic.io/es/componentes/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Campos de formulario",
      "url": "https://skeletonic.io/es/componentes/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Cuadricula",
      "url": "https://skeletonic.io/es/componentes/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Encabezado y nav hamburguesa",
      "url": "https://skeletonic.io/es/componentes/#header"
    }
  ]
}
</script>
