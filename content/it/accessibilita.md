---
title: "Accessibilita — WCAG 2.2 nella v1.1.7"
name: "Skeletonic Stylus"
description: "Cosa include la v1.1.7 per la conformita WCAG 2.2 — anelli di focus, contrasto, skip link, movimento e modalita scura."
layout: page
permalink: https://skeletonic.io/it/accessibilita/
date: 2026-04-08
author: Sebastien Rousseau
language: it
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, accessibilita, focus visible, skip link, prefers reduced motion, contrasto"
---

> **Skeletonic Stylus v1.1.7 include la conformita WCAG 2.2 come
> comportamento predefinito, non come tema opzionale.** Questa pagina
> documenta cosa e integrato e quali mixin puoi attivare per un
> controllo piu fine.

<hr class="hr-text" data-content="Incluso di serie">

## Cosa ottieni gratuitamente

| WCAG 2.2 SC | Cosa fa la v1.1.7 | Come verificare |
|---|---|---|
| **1.4.3 Contrasto (Minimo) — AA** | `--cl-primary` e `--cl-secondary` scuriti a ≥ 4,5:1 contro il bianco | DevTools → verifica contrasto |
| **1.4.11 Contrasto Non-Testo — AA** | Bordi dei form, pulsanti, badge tutti ≥ 3:1 | Idem |
| **2.4.7 Focus Visibile — AA** | Ogni elemento attivabile ha un anello `:focus-visible` (giallo su sfondi scuri, blu su chiari) | `Tab` attraverso qualsiasi pagina |
| **2.4.11 Focus Non Oscurato — AA (novita 2.2)** | L'header fisso ha altezza ridotta + scroll-margin per il focus | `Tab` oltre l'header fisso |
| **2.5.8 Dimensione Target — AA (novita 2.2)** | Pulsanti / link: area di tocco ≥ 24x24 CSS px | Box model nei DevTools |
| **1.4.12 Spaziatura del Testo — AA** | Tutti gli elementi rispettano le sovrascritture utente di line-height / letter-spacing | Sovrascrittura nei DevTools |
| **2.3.3 Animazione dalle Interazioni — AAA** | Tutte le classi di animazione sono racchiuse in `@media (prefers-reduced-motion: no-preference)` | Riduzione movimento a livello OS |
| **1.4.10 Reflow — AA** | Il layout funziona a 320 px senza scroll orizzontale | Viewport stretta nei DevTools |
| **Modalita scura** | `prefers-color-scheme: dark` scambia i token automaticamente | Toggle modalita scura del sistema operativo |

<hr class="hr-text" data-content="Mixin">

## Mixin Stylus opzionali

Se compili dai sorgenti, i seguenti mixin sono disponibili in `src/stylus/utilities/mixins.styl`:

| Mixin | Utilizzo |
|---|---|
| `focus-ring()` | Anello di focus ad alto contrasto che rispetta `:focus-visible` |
| `visually-hidden()` | Testo solo per screen reader che resta attivabile |
| `skip-link()` | Ancora che diventa visibile al focus |
| `reduced-motion()` | Racchiude qualsiasi blocco in `prefers-reduced-motion: no-preference` |
| `forced-colors()` | Adattamenti per la modalita Alto Contrasto di Windows |
| `target-size(24px)` | Aggiunge padding a qualsiasi cliccabile per un target di tocco minimo |

Esempio:

```stylus
// Applica un anello di focus evidente su un pulsante personalizzato
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="Skip link">

## L'helper skip-link

Inserisci questo **come primo elemento dentro `<body>`**:

```html
<a href="#main-content" class="skip-link">Vai al contenuto principale</a>
```

La classe **non** e nel foglio di stile principale (cosi il peso della pagina non cambia); e uno snippet di 4 righe che componi tu stesso o usi il mixin `skip-link()` incluso. Questo sito lo utilizza — metti a fuoco la pagina e premi Tab per vederlo apparire in alto a sinistra.

<hr class="hr-text" data-content="Verifica">

## Verificare le tue pagine

La libreria include uno script `a11y-test.mjs` sotto `scripts/` che esegue [axe-core](https://github.com/dequelabs/axe-core) su ogni URL che gli fornisci.

```bash
node scripts/a11y-test.mjs https://example.com
```

La CI esegue questo script sulla pagina showcase `dist/index.html` ad ogni push.

[Leggi il rilascio v1.1.7 →](/it/registro-modifiche/) ·
[Vedi la pagina sicurezza →](/it/sicurezza/)
