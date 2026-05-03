---
title: "Pagkapribado"
name: "Skeletonic Stylus"
description: "Anong data ang kinokolekta ng skeletonic.io, bakit, at paano mag-opt out."
layout: page
permalink: https://skeletonic.io/fil/pagkapribado/
date: 2026-04-08
author: Sebastien Rousseau
language: fil
theme_color: "hsl(210, 100%, 42%)"
keywords: "pagkapribado, gdpr, cookie, walang tracking"
---

## TL;DR

> **Ang skeletonic.io ay hindi naglalagay ng tracking cookie at hindi nagpapatakbo ng
> third-party na analytics tag.** Ang site ay isang static na set ng HTML, CSS,
> at isang solong service-worker file. Walang kahilingan na ginagawa mo ang nata-talaga
> maliban sa karaniwang GitHub Pages access log.

<hr class="hr-text" data-content="Mga Detalye">

## Anong data ang kinokolekta

1. **GitHub Pages access log.** Kapag nag-load ka ng anumang pahina, itinatala ng GitHub
   ang iyong IP address, ang URL ng kahilingan, at ang oras. Naaangkop ang privacy
   policy ng GitHub — tingnan ang
   [docs.github.com/en/site-policy](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
2. **Ang contact form.** Kung isinumite mo ang form sa `/fil/makipag-ugnayan/`, ang
   data ay dumadaan sa [Formspree](https://formspree.io), na nagpapasa
   nito sa email ng maintainer. Naaangkop ang privacy policy ng Formspree.
3. **Service worker.** Ang `sw.js` na script ay nagca-cache ng HTML, CSS, JS, at
   image response **nang lokal sa iyong browser** upang gumana ang site nang
   offline. Walang ipinapadala kahit saan.

## Ano ang *hindi* kinokolekta

- Hindi: Google Analytics, Plausible, Fathom, o anumang iba pang analytics tag.
- Hindi: Anumang uri ng cookie. Wala itong inilalagay.
- Hindi: Local storage o IndexedDB maliban sa service-worker cache.
- Hindi: Fingerprinting, ad network, o mga third-party tracker.

## Ang iyong mga karapatan

Kung ginamit mo ang contact form at gusto mong ma-delete ang iyong mensahe,
mag-email sa akin mula sa address na isinumite mo at buburahin ko ito sa loob ng
30 araw.

[Basahin ang mga tuntunin →](/fil/mga-tuntunin/) · [Makipag-ugnayan →](/fil/makipag-ugnayan/)
