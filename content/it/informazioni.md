---
title: "Informazioni su Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus e una libreria CSS Stylus open source per uno styling UI accessibile, veloce e modulare."
layout: page
permalink: https://skeletonic.io/it/informazioni/
date: 2026-04-08
author: Sebastien Rousseau
language: it
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, informazioni, stylus, framework css, filosofia"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

<dl class="stat-strip" aria-label="Project facts">
  <div><dt>Version</dt><dd>2.0.0</dd></div>
  <div><dt>Gzip</dt><dd>7.7 KB</dd></div>
  <div><dt>Brotli</dt><dd>6.7 KB</dd></div>
  <div><dt>License</dt><dd>MIT or Apache-2.0</dd></div>
  <div><dt>Standard</dt><dd>WCAG 2.2 AA</dd></div>
</dl>

## In breve

**Skeletonic Stylus** e una libreria CSS [Stylus](https://stylus-lang.com) open source per uno styling UI accessibile, veloce e modulare.

Nata nel 2018 come esperimento personale per **distribuire meno CSS** senza rinunciare all'ergonomia di una vera libreria di componenti. Otto anni dopo, l'obiettivo non e cambiato.

## Cosa offre

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="Fulmine" width="64" height="64" loading="lazy" decoding="async">
    <h3>Velocissimo</h3>
    <p>Progetta e personalizza interfacce responsive in pochi minuti. Variabili CSS native, classi predefinite, una griglia a 12 colonne per ogni elemento HTML semantico.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="Piuma" width="64" height="64" loading="lazy" decoding="async">
    <h3>Leggero</h3>
    <p>8,3&nbsp;KB gzipped. Le pagine si caricano piu velocemente. Ogni elemento essenziale e incluso.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="Dispositivi responsive" width="64" height="64" loading="lazy" decoding="async">
    <h3>Design responsive</h3>
    <p>Realizzato per desktop e dispositivi mobili. I layout si adattano a qualsiasi dispositivo. Ottimizzato per il touch, HTML semantico in tutto il progetto.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="Accessibilita" width="64" height="64" loading="lazy" decoding="async">
    <h3>Accessibilita</h3>
    <p>WCAG&nbsp;2.2 integrato: anelli focus-visible, contrasto AA, helper skip-link, componenti navigabili da tastiera, supporto per il movimento ridotto — nessun foglio di stile aggiuntivo, nessun boilerplate <code>aria-*</code>.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="Blocchi componenti" width="64" height="64" loading="lazy" decoding="async">
    <h3>Libreria di componenti</h3>
    <p>Componenti CSS modulari e mixin Stylus. Pulsanti, form, card, alert, badge, palette e animazioni — puliti, modulari, pronti all'uso.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="Logo GitHub" width="64" height="64" loading="lazy" decoding="async">
    <h3>Gratuito &amp; open source</h3>
    <p>Progettato, sviluppato e mantenuto da Sebastien Rousseau. Doppia licenza <strong>MIT</strong> o <strong>Apache&nbsp;2.0</strong>. Nessun costo, nessuna spesa di licenza, anche per uso commerciale.</p>
  </article>
</div>

## Confronto con le alternative

Un unico foglio di stile self-hosted copre tipografia, pulsanti, form, card, tabelle, palette, animazioni e classi utility. Nessun JavaScript. Nessun build step richiesto. Nessuna dipendenza da Bootstrap, Tailwind o Bulma.

| Caratteristica | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| Dimensione gzipped | **8,3&nbsp;KB** | ~30&nbsp;KB | ~10&nbsp;KB (varies) | ~30&nbsp;KB |
| Conformita WCAG 2.2 | **Integrata** | Parziale | Manuale | Parziale |
| Cascade layers | **Si (`@layer`)** | No | No | No |
| Modalita scura | **`prefers-color-scheme`** | Opt-in | Basata su classi | Opt-in |
| JavaScript richiesto | **No** | Si (Popper) | No | No |
| CycloneDX SBOM | **Si** | No | No | No |
| Movimento ridotto | **Rispettato** | Parziale | Manuale | Parziale |
| Licenza | MIT o Apache 2.0 | MIT | MIT | MIT |

## Principi

1. **L'accessibilita e il punto di partenza, non il traguardo.** La conformita WCAG 2.2 e integrata in ogni componente, mai aggiunta come "tema" opzionale.
2. **Ogni byte conta.** Un singolo foglio di stile distribuito non deve sforare il budget di peso della pagina. Il limite di 8&nbsp;KB gzipped e imposto nella CI.
3. **I cascade layer battono le guerre di specificita.** Sovrascrivi qualsiasi cosa con sicurezza — nessun `!important`, nessun trucco sull'ordine del DOM.
4. **Stylus e ancora valido.** Conciso, espressivo e permette di mantenere la libreria in ~3.000 righe leggibili.
5. **La semplicita e una feature.** Nessuna dipendenza JS. Nessuna magia in fase di build. Nessuna rinomina che rompe la compatibilita. Classi CSS che fanno esattamente quello che dicono.
6. **Personalizzabile in pochi secondi.** Proprieta CSS custom native per colori, spaziature, tipografia e raggi.
7. **Supply chain blindata.** Provenienza npm firmata. Aggiornamenti Dependabot bloccati. CVE-2023-44270 corretta tramite override.

## Versionamento &amp; semver

Skeletonic Stylus segue il [Semantic Versioning 2.0](https://semver.org).

| Livello | Quando | Esempio |
|---|---|---|
| **Major** | Rimozione o rinomina di una classe pubblica, mixin o token | 1.x → 2.0 |
| **Minor** | Aggiunta di un nuovo componente, mixin o token | 1.1 → 1.2 |
| **Patch** | Correzioni di bug, miglioramenti a11y, performance, sicurezza | 1.1.6 → 2.0.0 |

Tutti i nomi di classe pubblici, tutte le proprieta CSS custom e tutti i mixin Stylus esportati fanno parte dell'API pubblica. Una modifica che rompe la compatibilita comporta un major bump e una guida alla migrazione.

## Gestione del progetto

Skeletonic Stylus e progettato, sviluppato e mantenuto da
[Sebastien Rousseau](https://sebastienrousseau.com). Doppia licenza
[MIT](https://opensource.org/licenses/MIT) e
[Apache 2.0](https://opensource.org/licenses/Apache-2.0).

Segnalazioni, idee e contributi sono benvenuti —
[consulta la guida per contribuire](/it/contribuire/).
