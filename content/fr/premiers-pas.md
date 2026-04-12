---
title: "Premiers pas avec Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Installer Skeletonic Stylus depuis npm ou un CDN, l'importer dans votre pipeline Stylus et personnaliser les variables en quelques secondes."
layout: page
permalink: https://skeletonic.io/fr/premiers-pas/
date: 2026-04-08
author: Sebastien Rousseau
language: fr
theme_color: "hsl(210, 100%, 42%)"
keywords: "installer skeletonic, configuration stylus, css cdn, premiers pas"
---

## Introduction

Nouveau sur Skeletonic Stylus ? Avec la **v1.1.7**, choisir les
fonctionnalités nécessaires n'a jamais été aussi simple. Grâce à son
empreinte minuscule (~7,5 Ko gzippé pour la feuille de style
principale), il s'intègre rapidement dans n'importe quelle application
web — aucun framework JavaScript requis, aucune étape de build si vous
utilisez le CDN.

Chaque méthode est documentée ci-dessous — choisissez celle qui convient.

## 1. Télécharger et installer

Skeletonic Stylus peut être installé via **pnpm**, **npm** ou **yarn**,
ou chargé directement depuis un CDN. Vous pouvez également héberger les
fichiers de distribution localement.

### Depuis un gestionnaire de paquets (recommandé)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7

# npm
npm install @sebastienrousseau/skeletonic-stylus@1.1.7

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@1.1.7
```

### Depuis un CDN

Si vous n'avez besoin que du CSS compilé, ajoutez l'une de ces lignes
dans votre `<head>` :

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

Pour une intégrité maximale, copiez le **hash SRI** depuis les notes de
version v1.1.7 et ajoutez un attribut `integrity="sha384-…"`.

### CDN alternatifs

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css` | Oui | Oui |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css` | Oui | Non |

### Télécharger la release GitHub

Vous préférez un tarball versionné ? Récupérez la dernière version sur
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
et déposez le contenu de `dist/` directement dans votre projet.

### Cloner le dépôt GitHub

Clonez le dépôt principal pour obtenir tous les fichiers sources, y
compris les scripts de build :

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **Astuce :** signez vos commits — le projet impose les commits signés
> en CI. Utilisez `git commit -S -m "..."` (ou définissez
> `commit.gpgsign = true` dans votre configuration git globale).

## 2. Utiliser le CSS compilé

La bibliothèque livre plusieurs bundles pré-compilés sous `dist/css/`
après installation :

| Fichier | Usage | Taille (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | Reset + jetons + layout + éléments + composants + utilitaires | 39,9 Ko / 7,5 Ko |
| `animations/skeletonic-animations.min.css` | Module d'animations optionnel | ≈18 Ko / ≈4 Ko |
| `palettes/material/skeletonic-material.min.css` | Palette Material | ≈8 Ko |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Palette utilitaire Tachyons | 7,3 Ko |
| `palettes/websafe/skeletonic-websafe.min.css` | Palette web-safe | ≈4 Ko |

Chaque module est indépendant — choisissez la combinaison la plus légère
pour vos besoins.

## 3. Utiliser depuis Stylus

Si vous disposez déjà d'un pipeline Stylus, importez les modules sources
et laissez votre bundler éliminer les parties inutilisées :

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

Ou n'importez que les parties nécessaires :

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. Personnaliser la couleur de marque

Skeletonic expose ses jetons de design en tant que **propriétés
personnalisées CSS**, ce qui permet de le personnaliser sans recompiler
Stylus :

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

C'est tout — chaque composant utilisant la couleur primaire suivra.

## 5. Vérifier l'installation

Un test minimal « est-ce que ça marche ? » :

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>Ça fonctionne.</h1>
    <a href="#" class="button primary">Bonjour, le monde</a>
  </body>
</html>
```

Si le titre s'adapte de façon fluide et que le bouton adopte une forme
de pilule bleue, c'est terminé.

## 6. Contenu du paquet

À l'intérieur du paquet, vous trouverez tous les fichiers sources, les
bundles CSS compilés et minifiés, les source maps et une arborescence
Stylus organisée par catégorie :

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
        ├── base/            reset, helpers
        ├── components/      card, header, navbar, alert
        ├── configurations/  colors, variables
        ├── elements/        button, form, table, link, list, code…
        ├── fonts/           font-face declarations
        ├── layout/          container, grid, media-queries
        ├── palettes/        material, tachyons, websafe
        ├── utilities/       mixins
        └── skeletonic.styl  ← import unique qui inclut tout
```

Chaque module est indépendant — n'incluez que les bundles nécessaires
pour garder votre charge CSS aussi légère que possible.

## Foire aux questions

**Comment installer Skeletonic Stylus ?**
Exécutez `pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7`. Ou
chargez le CSS compilé directement depuis un CDN — aucune étape de build
requise.

**Nécessite-t-il du JavaScript ?**
Non. La feuille de style principale est du CSS pur, sans aucun coût à
l'exécution. Les composants fonctionnent sans une seule ligne de JS.

**Est-il conforme WCAG 2.2 ?**
Oui. La v1.1.7 livre un contraste conforme AA, des anneaux
focus-visible, des liens d'évitement, le support du mouvement réduit et
le mode sombre par défaut.

**Quelle est la taille gzippée ?**
39,9 Ko minifié, **~7,5 Ko gzippé**, ~6,3 Ko brotli pour la feuille
de style principale complète. Le plafond de 8 Ko est appliqué en CI.

**Quelle licence utilise-t-il ?**
Double licence MIT et Apache 2.0 — choisissez celle qui convient à votre
projet. Gratuit pour un usage commercial et personnel.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Comment installer Skeletonic Stylus ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Exécutez pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7. Ou chargez le CSS compilé directement depuis un CDN — aucune étape de build requise."
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus nécessite-t-il du JavaScript ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. La feuille de style principale est du CSS pur, sans aucun coût à l'exécution. Les composants fonctionnent sans une seule ligne de JavaScript."
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus est-il conforme WCAG 2.2 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. La v1.1.7 livre un contraste conforme AA, des anneaux focus-visible, des liens d'évitement, le support du mouvement réduit et le mode sombre par défaut."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est la taille gzippée de Skeletonic Stylus ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "39,9 Ko minifié, ~7,5 Ko gzippé, ~6,3 Ko brotli pour la feuille de style principale complète. Le plafond de 8 Ko est appliqué en CI à chaque commit."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle licence utilise Skeletonic Stylus ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Double licence MIT et Apache 2.0 — choisissez celle qui convient à votre projet. Gratuit pour un usage commercial et personnel."
      }
    }
  ]
}
</script>

[Parcourir les composants →](/fr/composants/)
