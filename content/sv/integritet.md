---
title: "Integritet"
name: "Skeletonic Stylus"
description: "Vilka data skeletonic.io samlar in, varfor, och hur du valjer bort det."
layout: page
permalink: https://skeletonic.io/sv/integritet/
date: 2026-04-08
author: Sebastien Rousseau
language: sv
theme_color: "hsl(210, 100%, 42%)"
keywords: "integritet, gdpr, kakor, ingen sparning"
---

## Kortfattat

> **skeletonic.io satter inga sparningskakor och kor ingen
> tredjepartsanalystagg.** Webbplatsen ar en statisk uppsattning av HTML, CSS
> och en enda service worker-fil. Ingen forfragan du gor loggas utover
> GitHub Pages standardaccessloggar.

<hr class="hr-text" data-content="Detaljer">

## Vilka data samlas in

1. **GitHub Pages accessloggar.** Nar du laddar valfri sida registrerar GitHub
   din IP-adress, forfragan-URL:en och tidpunkten. GitHubs integritetspolicy
   galler — se
   [docs.github.com/en/site-policy](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
2. **Kontaktformularet.** Om du skickar formularet pa `/sv/kontakt/` gar
   datan genom [Formspree](https://formspree.io), som vidarebefordrar det
   till forvaltar-e-posten. Formsprees integritetspolicy galler.
3. **Service worker.** `sw.js`-skriptet cachelagrar HTML, CSS, JS och
   bildresponser **lokalt i din webblasare** sa att webbplatsen fungerar
   offline. Inget skickas nagonannanstans.

## Vad som *inte* samlas in

- Ingen Google Analytics, Plausible, Fathom eller nagon annan analystagg.
- Inga kakor av nagot slag. Webbplatsen satter inga.
- Ingen lokal lagring eller IndexedDB utover service worker-cachen.
- Ingen fingeravtrycksidentifiering, inga annonanatverk eller tredjepartssparare.

## Dina rattigheter

Om du har anvant kontaktformularet och vill att ditt meddelande raderas,
skicka ett e-postmeddelande fran den adress du anvande sa raderar jag det
inom 30 dagar.

[Las villkoren →](/sv/villkor/) · [Kontakta oss →](/sv/kontakt/)
