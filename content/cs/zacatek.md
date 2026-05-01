---
title: "Jak zacit se Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Nainstalujte Skeletonic Stylus z npm nebo CDN, importujte do sve Stylus pipeline a prepiste promenne behem par sekund."
layout: page
permalink: https://skeletonic.io/cs/zacatek/
date: 2026-04-08
author: Sebastien Rousseau
language: cs
theme_color: "hsl(210, 100%, 42%)"
keywords: "instalace skeletonic, nastaveni stylus, css cdn, jak zacit"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## Uvod

Jste noví ve Skeletonic Stylus? Ve **v2.0.0** je snazsi nez kdy predtim
vybrat si jen funkce, ktere potrebujete. Diky malemu otisku (8,3&nbsp;KB
gzipped pro zakladni stylesheet) se rychle integruje do libovolne webove
aplikace — zadny JavaScript framework neni potreba, zadny build krok
neni nutny, pokud pouzivate CDN.

Kazda cesta je popsana nize — vyberte si tu svou.

## 1. Stahnete a nainstalujte

Skeletonic Stylus muzete nainstalovat pres **pnpm**, **npm** nebo **yarn**,
nebo jej nacist primo z CDN. Distribucni soubory muzete take hostovat
lokalne.

### Ze spravce balicku (doporuceno)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0

# npm
npm install @sebastienrousseau/skeletonic-stylus@2.0.0

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@2.0.0
```

### Z CDN

Pokud potrebujete pouze zkompilovane CSS, vlozte jeden z techto odkazu do `<head>`:

```html
<!-- jsDelivr -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">

<!-- unpkg -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">
```

Pro maximalni integritu zkopirujte **SRI hash** z poznamek k vydani v2.0.0
a pridejte atribut `integrity="sha384-…"`.

### Alternativni CDN umisteni

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css` | Ano | Ano |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css` | Ano | Ne |

### Stahnete vydani z GitHubu

Preferujete verzovany tarball? Stahnete posledni vydani z
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
a obsah `dist/` vlozite primo do sveho projektu.

### Klonujte GitHub repozitar

Klonujte hlavni repozitar pro ziskani vsech zdrojovych souboru vcetne
build skriptu:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **Tip:** podepisujte sve commity — projekt vynucuje podepsane commity v CI.
> Pouzijte `git commit -S -m "..."` (nebo nastavte `commit.gpgsign = true`
> ve sve globalni git konfiguraci).

## 2. Pouzijte zkompilovane CSS

Knihovna dodava nekolik predpripravenych svazku v
`dist/css/` po instalaci:

| Soubor | Ucel | Velikost (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | Reset + tokeny + rozvrzeni + elementy + komponenty + utility | 45,7 KB / 8,3 KB |
| `animations/skeletonic-animations.min.css` | Volitelny modul animaci | ≈213 KB / ≈7.2 KB |
| `palettes/material/skeletonic-material.min.css` | Barevna paleta Material | ≈17.4 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Utilitni paleta Tachyons | 7,3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | Web-safe paleta | ≈3.5 KB |

Kazdy modul je nezavisly — vyberte si nejmensí kombinaci, kterou potrebujete.

## 3. Pouzijte ve Stylus

Pokud jiz mate Stylus pipeline, muzete importovat zdrojove moduly
a nechat svuj bundler odstranit nepouzite casti:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

Nebo importujte pouze to, co potrebujete:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. Prepiste hlavni barvu

Skeletonic zpristupnuje sve navrhove tokeny jako **CSS vlastni vlastnosti**,
takze tema muzete zmenit bez rekompilace Stylus:

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

To je vse — kazda komponenta pouzivajici primarni barvu se automaticky prizpusobi.

## 5. Overte instalaci

Minimalni kontrola „fungovalo to?":

```html
<!doctype html>
<html lang="cs">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>Funguje to.</h1>
    <a href="#" class="button primary">Ahoj, svete</a>
  </body>
</html>
```

Pokud je nadpis plynule dimenzovany a tlacitko ma modry pilulkovy tvar,
jste hotovi.

## 6. Co je obsazeno

Uvnitr balicku najdete kazdy zdrojovy soubor, zkompilovane a minifikovane
CSS svazky, source mapy a kompletni strom Stylus organizovany podle
kategorii:

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
        ├── fonts/           font-face deklarace
        ├── layout/          container, grid, media-queries
        ├── palettes/        material, tachyons, websafe
        ├── utilities/       mixins
        └── skeletonic.styl  ← jediny import, ktery stahne vse
```

Kazdy modul je nezavisly — pouzijte pouze svazky, ktere potrebujete,
aby vase CSS zustavalo co nejmensí.

## Casto kladene dotazy

**Jak nainstaluji Skeletonic Stylus?**
Spustte `pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0`. Nebo nactete
zkompilovane CSS primo z CDN — zadny build krok neni potreba.

**Vyzaduje JavaScript?**
Ne. Zakladni stylesheet je ciste CSS, s nulovymi naklady za behu. Komponenty
funguji bez jedineho radku JS.

**Je pripraven na WCAG 2.2?**
Ano. v2.0.0 dodava AA kontrast, focus-visible ohraniceni, skip-link
pomocniky, podporu omezeneho pohybu a tmavy rezim ve vychozim nastaveni.

**Jaka je velikost gzipped?**
45,7&nbsp;KB minifikovano, **8,3&nbsp;KB gzipped**, 6,9&nbsp;KB brotli pro
kompletni zakladni stylesheet. Strop 8&nbsp;KB je vynucovan v CI.

**Jakou licenci pouziva?**
Dualni licence pod MIT a Apache 2.0 — vyberte si tu, kterou vas projekt
potrebuje. Zdarma pro komercni i osobni pouziti.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Jak nainstaluji Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spustte pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0. Nebo nactete zkompilovane CSS primo z CDN — zadny build krok neni potreba."
      }
    },
    {
      "@type": "Question",
      "name": "Vyzaduje Skeletonic Stylus JavaScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ne. Zakladni stylesheet je ciste CSS, s nulovymi naklady za behu. Komponenty funguji bez jedineho radku JavaScriptu."
      }
    },
    {
      "@type": "Question",
      "name": "Je Skeletonic Stylus pripraven na WCAG 2.2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ano. v2.0.0 dodava AA kontrast, focus-visible ohraniceni, skip-link pomocniky, podporu omezeneho pohybu a tmavy rezim ve vychozim nastaveni."
      }
    },
    {
      "@type": "Question",
      "name": "Jaka je velikost gzipped u Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "45,7 KB minifikovano, 8,3 KB gzipped, 6,9 KB brotli pro kompletni zakladni stylesheet. Strop 8 KB je vynucovan v CI pri kazdem commitu."
      }
    },
    {
      "@type": "Question",
      "name": "Jakou licenci Skeletonic Stylus pouziva?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dualni licence pod MIT a Apache 2.0 — vyberte si tu, kterou vas projekt potrebuje. Zdarma pro komercni i osobni pouziti."
      }
    }
  ]
}
</script>

[Prohledejte komponenty →](/cs/komponenty/)
