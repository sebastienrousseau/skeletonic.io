---
title: "Barrierefreiheit — WCAG 2.2 in v2.0.0"
name: "Skeletonic Stylus"
description: "Was v2.0.0 standardmäßig für WCAG-2.2-Konformität mitbringt — Fokusringe, Kontrast, Skip-Links, Bewegung und Dunkelmodus."
layout: page
language: de
permalink: https://skeletonic.io/de/barrierefreiheit/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, accessibility, focus visible, skip link, prefers reduced motion, contrast"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

> **Skeletonic Stylus v2.0.0 liefert WCAG-2.2-Konformität als
> Standardverhalten — nicht als optionales Theme.** Diese Seite
> dokumentiert, was bereits integriert ist und welche Mixins Sie für
> eine feinere Steuerung aktivieren können.

<hr class="hr-text" data-content="Standardmäßig enthalten">

## Was Sie ohne Zusatzaufwand erhalten

| WCAG 2.2 SC | Was v2.0.0 bietet | So prüfen Sie es |
|---|---|---|
| **1.4.3 Contrast (Minimum) — AA** | `--cl-primary` und `--cl-secondary` auf ≥ 4,5:1 gegenüber Weiß abgedunkelt | DevTools → Kontrastprüfung |
| **1.4.11 Non-text Contrast — AA** | Formularrahmen, Buttons und Badges durchgehend ≥ 3:1 | Ebenso |
| **2.4.7 Focus Visible — AA** | Jedes fokussierbare Element hat einen `:focus-visible`-Ring (Gelb auf dunklem Hintergrund, Blau auf hellem) | Mit `Tab` durch die Seite navigieren |
| **2.4.11 Focus Not Obscured — AA (neu in 2.2)** | Sticky-Header mit reduzierter Höhe + Focus-Scroll-Margin | `Tab` über den Sticky-Header hinaus |
| **2.5.8 Target Size — AA (neu in 2.2)** | Buttons / Links: ≥ 24×24 CSS px Trefferfläche | DevTools-Boxmodell |
| **1.4.12 Text Spacing — AA** | Alle Elemente respektieren benutzerdefinierte Zeilenhöhe / Zeichenabstände | In DevTools überschreiben |
| **2.3.3 Animation from Interactions — AAA** | Alle Animationsklassen in `@media (prefers-reduced-motion: no-preference)` eingebettet | Bewegung reduzieren auf OS-Ebene |
| **1.4.10 Reflow — AA** | Layout funktioniert bei 320 px ohne horizontales Scrollen | DevTools mit schmalem Viewport |
| **Dunkelmodus** | `prefers-color-scheme: dark` tauscht Tokens automatisch | Dunkelmodus im Betriebssystem umschalten |

<hr class="hr-text" data-content="Mixins">

## Stylus-Mixins zur optionalen Nutzung

Wenn Sie aus dem Quellcode kompilieren, stehen Ihnen die folgenden Mixins
in `src/stylus/utilities/mixins.styl` zur Verfügung:

| Mixin | Verwendung |
|---|---|
| `focus-ring()` | Kontrastreicher Fokusring mit `:focus-visible`-Unterstützung |
| `visually-hidden()` | Nur für Screenreader sichtbarer Text, der fokussierbar bleibt |
| `skip-link()` | Anker, der beim Fokussieren sichtbar wird |
| `reduced-motion()` | Umschließt jeden Block mit `prefers-reduced-motion: no-preference` |
| `forced-colors()` | Anpassungen für den Windows-Modus „Hoher Kontrast" |
| `target-size(24px)` | Vergrößert jedes klickbare Element auf eine Mindest-Trefferfläche |

Beispiel:

```stylus
// Einen starken Fokusring auf einen eigenen Button anwenden
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="Skip-Link">

## Der Skip-Link-Helfer

Fügen Sie dieses Element **als erstes innerhalb von `<body>`** ein:

```html
<a href="#main-content" class="skip-link">Zum Hauptinhalt springen</a>
```

Die Klasse ist **nicht** im Kern-Stylesheet enthalten (die Seitengröße
bleibt also unverändert); es handelt sich um ein 4-Zeilen-Snippet, das
Sie selbst erstellen oder über das mitgelieferte `skip-link()`-Mixin
einbinden. Diese Website nutzt es — fokussieren Sie die Seite und
drücken Sie Tab, um es oben links erscheinen zu sehen.

<hr class="hr-text" data-content="Überprüfung">

## Eigene Seiten überprüfen

Die Bibliothek enthält ein `a11y-test.mjs`-Skript unter `scripts/`, das
[axe-core](https://github.com/dequelabs/axe-core) gegen jede URL
ausführt, die Sie angeben.

```bash
node scripts/a11y-test.mjs https://example.com
```

Die CI-Pipeline führt dieses Skript bei jedem Push gegen die
`dist/index.html`-Showcase-Seite aus.

[Mehr zum v2.0.0-Release erfahren →](/de/aenderungsprotokoll/) ·
[Zur Sicherheitsseite →](/de/sicherheit/)
