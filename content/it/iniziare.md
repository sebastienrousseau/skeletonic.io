---
title: "Iniziare con Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Installa Skeletonic Stylus da npm o da un CDN, importalo nella tua build Stylus e sovrascrivi le variabili in pochi secondi."
layout: page
permalink: https://skeletonic.io/it/iniziare/
date: 2026-04-08
author: Sebastien Rousseau
language: it
theme_color: "hsl(210, 100%, 42%)"
keywords: "installare skeletonic, configurazione stylus, css cdn, iniziare"
---

## Introduzione

Nuovo a Skeletonic Stylus? Con la **v1.1.7** e piu facile che mai scegliere solo le funzionalita di cui hai bisogno. Grazie alla sua impronta minima (~7,5&nbsp;KB gzipped per il foglio di stile principale), si integra rapidamente in qualsiasi web app — nessun framework JavaScript richiesto, nessun build step se usi il CDN.

Ogni percorso e descritto qui sotto — scegli quello che preferisci.

## 1. Download e installazione

Puoi installare Skeletonic Stylus tramite **pnpm**, **npm** o **yarn**, oppure caricarlo direttamente da un CDN. Puoi anche ospitare i file di distribuzione in locale.

### Da un gestore di pacchetti (consigliato)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7

# npm
npm install @sebastienrousseau/skeletonic-stylus@1.1.7

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@1.1.7
```

### Da un CDN

Se ti serve solo il CSS compilato, inserisci uno di questi nel tuo `<head>`:

```html
<!-- jsDelivr -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">

<!-- unpkg -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">
```

Per la massima integrita, copia l'**hash SRI** dalle note di rilascio v1.1.7 e aggiungi un attributo `integrity="sha384-..."`.

### Posizioni CDN alternative

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css` | Si | Si |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css` | Si | No |

### Scarica il rilascio da GitHub

Preferisci un archivio con versione? Scarica l'ultimo rilascio da
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
e inserisci il contenuto di `dist/` direttamente nel tuo progetto.

### Clona il repository GitHub

Clona il repository principale per ottenere tutti i file sorgente, inclusi gli script di build:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **Suggerimento:** firma i tuoi commit — il progetto impone commit firmati nella CI.
> Usa `git commit -S -m "..."` (oppure imposta `commit.gpgsign = true` nella
> configurazione globale di git).

## 2. Utilizzare il CSS compilato

La libreria distribuisce diversi bundle precompilati sotto
`dist/css/` una volta installata:

| File | Scopo | Dimensione (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | Reset + token + layout + elementi + componenti + utility | 39,9 KB / 7,5 KB |
| `animations/skeletonic-animations.min.css` | Modulo animazioni opzionale | ≈213 KB / ≈6.9 KB |
| `palettes/material/skeletonic-material.min.css` | Palette colori Material | ≈17.4 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Palette utility Tachyons | 7,3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | Palette web-safe | ≈3.5 KB |

Ogni modulo e indipendente — scegli la combinazione piu leggera che ti serve.

## 3. Usarlo da Stylus

Se hai gia una pipeline Stylus, puoi importare i moduli sorgente e lasciare che il bundler escluda le parti inutilizzate:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

Oppure importa solo quello che ti serve:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. Sovrascrivere il colore del brand

Skeletonic espone i suoi design token come **proprieta CSS custom** cosi puoi personalizzarlo senza ricompilare Stylus:

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

Fatto — ogni componente che usa il colore primario si adattera automaticamente.

## 5. Verifica l'installazione

Un controllo minimo "ha funzionato?":

```html
<!doctype html>
<html lang="it">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>Funziona.</h1>
    <a href="#" class="button primary">Ciao, mondo</a>
  </body>
</html>
```

Se il titolo ha una dimensione fluida e il pulsante ha una forma a pillola blu, hai finito.

## 6. Cosa e incluso

All'interno del pacchetto troverai ogni file sorgente, i bundle CSS compilati e minificati, le source map e un albero Stylus completo organizzato per categoria:

```text
@sebastienrousseau/skeletonic-stylus@1.1.7
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
        ├── base/            reset, helper
        ├── components/      card, header, navbar, alert
        ├── configurations/  colori, variabili
        ├── elements/        button, form, table, link, list, code…
        ├── fonts/           dichiarazioni font-face
        ├── layout/          container, grid, media-queries
        ├── palettes/        material, tachyons, websafe
        ├── utilities/       mixin
        └── skeletonic.styl  ← import singolo che include tutto
```

Ogni modulo e indipendente — includi solo i bundle di cui hai bisogno per mantenere il payload CSS il piu leggero possibile.

## Domande frequenti

**Come si installa Skeletonic Stylus?**
Esegui `pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7`. Oppure carica il CSS compilato direttamente da un CDN — nessun build step richiesto.

**Richiede JavaScript?**
No. Il foglio di stile principale e puro CSS, con costo a runtime pari a zero. I componenti funzionano senza una singola riga di JS.

**E conforme a WCAG 2.2?**
Si. La v1.1.7 include contrasto conforme AA, anelli focus-visible, helper skip-link, supporto per il movimento ridotto e modalita scura di default.

**Qual e la dimensione gzipped?**
39,9&nbsp;KB minificati, **~7,5&nbsp;KB gzipped**, ~6,3&nbsp;KB brotli per il foglio di stile principale completo. Il limite di 8&nbsp;KB e imposto nella CI.

**Quale licenza utilizza?**
Doppia licenza MIT e Apache 2.0 — scegli quella che serve al tuo progetto. Gratuito per uso commerciale e personale.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Come si installa Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Esegui pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7. Oppure carica il CSS compilato direttamente da un CDN — nessun build step richiesto."
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus richiede JavaScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Il foglio di stile principale e puro CSS, con costo a runtime pari a zero. I componenti funzionano senza una singola riga di JavaScript."
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus e conforme a WCAG 2.2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Si. La v1.1.7 include contrasto conforme AA, anelli focus-visible, helper skip-link, supporto per il movimento ridotto e modalita scura di default."
      }
    },
    {
      "@type": "Question",
      "name": "Qual e la dimensione gzipped di Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "39,9 KB minificati, ~7,5 KB gzipped, ~6,3 KB brotli per il foglio di stile principale completo. Il limite di 8 KB e imposto nella CI ad ogni commit."
      }
    },
    {
      "@type": "Question",
      "name": "Quale licenza utilizza Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Doppia licenza MIT e Apache 2.0 — scegli quella che serve al tuo progetto. Gratuito per uso commerciale e personale."
      }
    }
  ]
}
</script>

[Esplora i componenti →](/it/componenti/)
