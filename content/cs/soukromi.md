---
title: "Ochrana soukromi — Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Jake udaje skeletonic.io shromazduje, proc a jak se odhlasit."
layout: page
permalink: https://skeletonic.io/cs/soukromi/
date: 2026-04-08
author: Sebastien Rousseau
language: cs
theme_color: "hsl(210, 100%, 42%)"
keywords: "soukromi, gdpr, cookies, bez sledovani"
---

## Ve zkratce

> **skeletonic.io nenastavuje sledovaci cookies a nespousti analyticky
> tag treti strany.** Web je staticka sada HTML, CSS a jedineho souboru
> service worker. Zadny pozadavek, ktery odeslede, neni zaznamenavan
> nad ramec standardnich pristupovych logu GitHub Pages.

<hr class="hr-text" data-content="Podrobnosti">

## Jake udaje jsou shromazdovany

1. **Pristupove logy GitHub Pages.** Pri nactení libovolne stranky
   GitHub zaznamena vasi IP adresu, URL pozadavku a cas. Plati zasady
   ochrany soukromi GitHubu — viz
   [docs.github.com/en/site-policy](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
2. **Kontaktni formular.** Pokud odeslede formular na `/cs/kontakt/`,
   udaje putují pres [Formspree](https://formspree.io), ktery je
   preposlal na e-mail spravce. Plati zasady ochrany soukromi Formspree.
3. **Service worker.** Skript `sw.js` uklada HTML, CSS, JS a obrazky
   **lokalne ve vasem prohlizeci**, aby web fungoval offline. Nic se
   nikam neodesila.

## Co *neni* shromazdovano

- Google Analytics, Plausible, Fathom ani zadny jiny analyticky tag.
- Cookies jakehokoliv druhu. Web zadne nenastavuje.
- Local storage nebo IndexedDB mimo cache service workeru.
- Fingerprinting, reklamni site ani trackery tretich stran.

## Vase prava

Pokud jste pouzili kontaktni formular a chcete svou zpravu smazat,
napiste mi z adresy, kterou jste odeslali, a zpravu smazu do 30 dnu.

[Prectete si podminky →](/cs/podminky/) · [Spojte se s nami →](/cs/kontakt/)
