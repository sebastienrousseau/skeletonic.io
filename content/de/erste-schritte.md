---
title: "Erste Schritte mit Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus per npm oder CDN installieren, in den Stylus-Build einbinden und Variablen in Sekunden überschreiben."
layout: page
permalink: https://skeletonic.io/de/erste-schritte/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
language: de
keywords: "skeletonic installieren, stylus einrichten, css cdn, erste schritte"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## Einführung

Neu bei Skeletonic Stylus? Mit **v2.0.0** lassen sich genau die
Funktionen auswählen, die ein Projekt benötigt. Dank des minimalen
Footprints (8,3&nbsp;KB gzipped für das Kern-Stylesheet) fügt sich die
Bibliothek nahtlos in jede Webanwendung ein — kein JavaScript-Framework
erforderlich, kein Build-Schritt nötig bei Nutzung des CDN.

Jeder Weg ist unten beschrieben — den passenden auswählen.

## 1. Herunterladen und installieren

Skeletonic Stylus kann über **pnpm**, **npm** oder **yarn** installiert
oder direkt von einem CDN geladen werden. Alternativ lassen sich die
Distributionsdateien auch lokal hosten.

### Über einen Paketmanager (empfohlen)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0

# npm
npm install @sebastienrousseau/skeletonic-stylus@2.0.0

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@2.0.0
```

### Über ein CDN

Falls nur das kompilierte CSS benötigt wird, genügt eine dieser Zeilen
im `<head>`:

```html
<!-- jsDelivr -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css"
  crossorigin="anonymous">

<!-- unpkg -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css"
  crossorigin="anonymous">
```

Für maximale Integrität den **SRI-Hash** aus den v2.0.0-Release-Notes
kopieren und als `integrity="sha384-…"`-Attribut hinzufügen.

### Alternative CDN-Quellen

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css` | Ja | Ja |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css` | Ja | Nein |

### GitHub-Release herunterladen

Ein versionierter Tarball ist verfügbar unter
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases).
Den Inhalt von `dist/` direkt in das Projekt kopieren.

### GitHub-Repository klonen

Das Hauptrepository klonen, um alle Quelldateien inklusive der
Build-Skripte zu erhalten:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **Tipp:** Commits signieren — das Projekt erzwingt signierte Commits in
> der CI. Dazu `git commit -S -m "..."` verwenden (oder
> `commit.gpgsign = true` in der globalen Git-Konfiguration setzen).

## 2. Das kompilierte CSS verwenden

Die Bibliothek enthält nach der Installation mehrere vorkompilierte
Bundles unter `dist/css/`:

| Datei | Zweck | Größe (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | Reset + Tokens + Layout + Elemente + Komponenten + Hilfsmittel | 45,7 KB / 8,3 KB |
| `animations/skeletonic-animations.min.css` | Optionales Animationsmodul | ≈213 KB / ≈6.8 KB |
| `palettes/material/skeletonic-material.min.css` | Material-Farbpalette | ≈17.4 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Tachyons-Hilfspalette | 7,3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | Websichere Palette | ≈3.5 KB |

Jedes Modul ist unabhängig — die kleinstmögliche Kombination auswählen.

## 3. Direkt in Stylus verwenden

Bei einer bestehenden Stylus-Pipeline können die Quellmodule importiert
werden, damit der Bundler ungenutzte Teile per Tree-Shaking entfernt:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

Oder gezielt nur die benötigten Teile importieren:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. Die Markenfarbe überschreiben

Skeletonic stellt seine Design-Tokens als **CSS Custom Properties**
bereit, sodass ein Theme ohne erneute Stylus-Kompilierung angepasst
werden kann:

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

Damit folgt jede Komponente, die die Primärfarbe nutzt, automatisch dem
neuen Farbschema.

## 5. Die Installation überprüfen

Ein minimaler Funktionstest:

```html
<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>Es funktioniert.</h1>
    <a href="#" class="button primary">Hallo, Welt</a>
  </body>
</html>
```

Wenn die Überschrift fließend skaliert und der Button eine blaue
Pillenform aufweist, ist die Einrichtung abgeschlossen.

## 6. Lieferumfang

Das Paket enthält alle Quelldateien, die kompilierten und minifizierten
CSS-Bundles, Source Maps und einen vollständigen Stylus-Baum, gegliedert
nach Kategorie:

```text
@sebastienrousseau/skeletonic-stylus@2.0.0
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
        ├── base/            reset, helpers
        ├── components/      card, header, navbar, alert
        ├── configurations/  colors, variables
        ├── elements/        button, form, table, link, list, code…
        ├── fonts/           font-face declarations
        ├── layout/          container, grid, media-queries
        ├── palettes/        material, tachyons, websafe
        ├── utilities/       mixins
        └── skeletonic.styl  ← einzelner Import, der alles einbindet
```

Jedes Modul ist unabhängig — nur die benötigten Bundles einbinden, um
die CSS-Nutzlast so gering wie möglich zu halten.

## Häufig gestellte Fragen

**Wie wird Skeletonic Stylus installiert?**
`pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0` ausführen. Oder
das kompilierte CSS direkt von einem CDN laden — kein Build-Schritt
erforderlich.

**Wird JavaScript benötigt?**
Nein. Das Kern-Stylesheet ist reines CSS ohne Laufzeitkosten. Alle
Komponenten funktionieren ohne eine einzige Zeile JavaScript.

**Ist es WCAG-2.2-konform?**
Ja. v2.0.0 liefert AA-konforme Kontraste, focus-visible-Ringe,
Skip-Link-Hilfen, Unterstützung für reduzierte Bewegung und einen
Dark Mode standardmäßig.

**Wie groß ist das gzipped-Paket?**
45,7&nbsp;KB minifiziert, **8,3&nbsp;KB gzipped**, 6,9&nbsp;KB Brotli
für das vollständige Kern-Stylesheet. Die 8&nbsp;KB-Obergrenze wird in
der CI bei jedem Commit überprüft.

**Welche Lizenz wird verwendet?**
Doppelt lizenziert unter MIT und Apache 2.0 — die jeweils passende
Lizenz für das Projekt auswählen. Frei für kommerzielle und persönliche
Nutzung.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wie wird Skeletonic Stylus installiert?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0 ausführen. Oder das kompilierte CSS direkt von einem CDN laden — kein Build-Schritt erforderlich."
      }
    },
    {
      "@type": "Question",
      "name": "Benötigt Skeletonic Stylus JavaScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein. Das Kern-Stylesheet ist reines CSS ohne Laufzeitkosten. Alle Komponenten funktionieren ohne eine einzige Zeile JavaScript."
      }
    },
    {
      "@type": "Question",
      "name": "Ist Skeletonic Stylus WCAG-2.2-konform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. v2.0.0 liefert AA-konforme Kontraste, focus-visible-Ringe, Skip-Link-Hilfen, Unterstützung für reduzierte Bewegung und einen Dark Mode standardmäßig."
      }
    },
    {
      "@type": "Question",
      "name": "Wie groß ist das gzipped-Paket von Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "45,7 KB minifiziert, 8,3 KB gzipped, 6,9 KB Brotli für das vollständige Kern-Stylesheet. Die 8-KB-Obergrenze wird in der CI bei jedem Commit überprüft."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Lizenz verwendet Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Doppelt lizenziert unter MIT und Apache 2.0 — die jeweils passende Lizenz für das Projekt auswählen. Frei für kommerzielle und persönliche Nutzung."
      }
    }
  ]
}
</script>

[Zu den Komponenten →](/de/komponenten/)
