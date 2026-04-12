---
title: "Datenschutz"
name: "Skeletonic Stylus"
description: "Welche Daten skeletonic.io erhebt, warum, und wie sich die Erhebung deaktivieren laesst."
layout: page
language: de
permalink: https://skeletonic.io/de/datenschutz/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "datenschutz, dsgvo, cookies, kein tracking"
---

## Zusammenfassung

> **skeletonic.io setzt keine Tracking-Cookies und verwendet keine
> Analyse-Tags von Drittanbietern.** Die Website besteht aus statischem HTML,
> CSS und einer einzelnen Service-Worker-Datei. Keine Anfrage wird ueber die
> standardmaessigen GitHub-Pages-Zugriffsprotokolle hinaus protokolliert.

<hr class="hr-text" data-content="Details">

## Welche Daten erhoben werden

1. **GitHub-Pages-Zugriffsprotokolle.** Beim Laden einer Seite erfasst GitHub
   die IP-Adresse, die Anfrage-URL und den Zeitstempel. Die Datenschutzrichtlinie
   von GitHub gilt — siehe
   [docs.github.com/en/site-policy](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
2. **Das Kontaktformular.** Bei Absenden des Formulars auf `/contact/` werden
   die Daten ueber [Formspree](https://formspree.io) an die E-Mail-Adresse
   des Maintainers weitergeleitet. Die Datenschutzrichtlinie von Formspree gilt.
3. **Service Worker.** Das `sw.js`-Skript speichert HTML-, CSS-, JS- und
   Bild-Antworten **lokal im Browser**, damit die Website offline funktioniert.
   Es werden keine Daten uebertragen.

## Was *nicht* erhoben wird

- Kein Google Analytics, Plausible, Fathom oder sonstiger Analyse-Tag.
- Keine Cookies jeglicher Art. Die Website setzt keine.
- Kein Local Storage oder IndexedDB ueber den Service-Worker-Cache hinaus.
- Kein Fingerprinting, keine Werbenetzwerke, keine Drittanbieter-Tracker.

## Rechte der Nutzer

Falls das Kontaktformular verwendet wurde und eine Loeschung der Nachricht
gewuenscht ist, genuegt eine E-Mail von der urspruenglich verwendeten Adresse.
Die Loeschung erfolgt innerhalb von 30 Tagen.

[Nutzungsbedingungen lesen](/de/nutzungsbedingungen/) · [Kontakt aufnehmen](/de/kontakt/)
