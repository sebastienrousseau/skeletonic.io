---
title: "Privacidad"
name: "Skeletonic Stylus"
description: "Que datos recopila skeletonic.io, por que y como desactivarlo."
layout: page
permalink: https://skeletonic.io/es/privacidad/
date: 2026-04-08
author: Sebastien Rousseau
language: es
theme_color: "hsl(210, 100%, 42%)"
keywords: "privacidad, gdpr, cookies, sin rastreo"
---

## Resumen

> **skeletonic.io no establece cookies de rastreo y no ejecuta ningun
> tag de analitica de terceros.** El sitio es un conjunto estatico de
> HTML, CSS y un unico archivo de service worker. Ninguna solicitud que
> realices se registra mas alla de los registros de acceso estandar de
> GitHub Pages.

<hr class="hr-text" data-content="Detalles">

## Que datos se recopilan

1. **Registros de acceso de GitHub Pages.** Cuando cargas cualquier pagina,
   GitHub registra tu direccion IP, la URL de la solicitud y la hora. Se
   aplica la politica de privacidad de GitHub — consulta
   [docs.github.com/en/site-policy](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
2. **El formulario de contacto.** Si envias el formulario en `/es/contacto/`,
   los datos se transmiten a traves de [Formspree](https://formspree.io),
   que los reenvia al correo del mantenedor. Se aplica la politica de
   privacidad de Formspree.
3. **Service worker.** El script `sw.js` almacena en cache las respuestas
   HTML, CSS, JS e imagenes **localmente en tu navegador** para que el
   sitio funcione sin conexion. No se envia nada a ningun servidor.

## Que *no* se recopila

- Google Analytics, Plausible, Fathom, ni ningun otro tag de analitica.
- Cookies de ningun tipo. El sitio no establece ninguna.
- Local storage ni IndexedDB mas alla de la cache del service worker.
- Fingerprinting, redes publicitarias ni rastreadores de terceros.

## Tus derechos

Si has utilizado el formulario de contacto y deseas que tu mensaje sea
eliminado, enviame un correo desde la direccion con la que lo enviaste
y lo eliminare en un plazo de 30 dias.

[Leer los terminos →](/es/terminos/) · [Ponerse en contacto →](/es/contacto/)
