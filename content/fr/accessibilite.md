---
title: "Accessibilité — WCAG 2.2 dans la v2.0.0"
name: "Skeletonic Stylus"
description: "Ce que la v2.0.0 propose nativement pour la conformité WCAG 2.2 — anneaux de focus, contraste, liens d'évitement, mouvement et mode sombre."
layout: page
permalink: https://skeletonic.io/fr/accessibilite/
date: 2026-04-08
author: Sebastien Rousseau
language: fr
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, accessibilité, focus visible, lien d'évitement, prefers reduced motion, contraste"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

> **Skeletonic Stylus v2.0.0 livre la conformité WCAG 2.2 comme
> comportement par défaut, pas en tant que thème optionnel.** Cette page
> documente ce qui est intégré et les mixins auxquels vous pouvez
> souscrire pour un contrôle plus fin.

<hr class="hr-text" data-content="Inclus par défaut">

## Ce que vous obtenez gratuitement

| SC WCAG 2.2 | Ce que fait la v2.0.0 | Comment vérifier |
|---|---|---|
| **1.4.3 Contraste (Minimum) — AA** | `--cl-primary` et `--cl-secondary` assombris à ≥ 4,5:1 contre le blanc | DevTools → vérificateur de contraste |
| **1.4.11 Contraste non textuel — AA** | Bordures de formulaires, boutons, badges tous ≥ 3:1 | Idem |
| **2.4.7 Focus visible — AA** | Chaque élément focusable a un anneau `:focus-visible` (jaune sur fond sombre, bleu sur fond clair) | Appuyer sur `Tab` sur n'importe quelle page |
| **2.4.11 Focus non masqué — AA (nouveau en 2.2)** | L'en-tête collant a une hauteur réduite + scroll-margin pour le focus | Appuyer sur `Tab` au-delà de l'en-tête collant |
| **2.5.8 Taille de cible — AA (nouveau en 2.2)** | Boutons / liens : zone cliquable ≥ 24×24 px CSS | DevTools modèle de boîte |
| **1.4.12 Espacement du texte — AA** | Tous les éléments respectent les surcharges de hauteur de ligne / espacement des lettres | Surcharger dans DevTools |
| **2.3.3 Animation depuis les interactions — AAA** | Toutes les classes d'animation sont encapsulées dans `@media (prefers-reduced-motion: no-preference)` | Réduire le mouvement au niveau OS |
| **1.4.10 Redistribution — AA** | La mise en page fonctionne à 320 px sans défilement horizontal | DevTools viewport étroit |
| **Mode sombre** | `prefers-color-scheme: dark` bascule les jetons automatiquement | Basculer le mode sombre de l'OS |

<hr class="hr-text" data-content="Mixins">

## Mixins Stylus optionnels

Si vous compilez depuis les sources, les mixins suivants sont
disponibles dans `src/stylus/utilities/mixins.styl` :

| Mixin | Usage |
|---|---|
| `focus-ring()` | Anneau de focus à haut contraste respectant `:focus-visible` |
| `visually-hidden()` | Texte réservé aux lecteurs d'écran, restant focusable |
| `skip-link()` | Ancre qui devient visible au focus |
| `reduced-motion()` | Encapsule n'importe quel bloc dans `prefers-reduced-motion: no-preference` |
| `forced-colors()` | Ajustements pour le mode contraste élevé de Windows |
| `target-size(24px)` | Augmente la zone cliquable de tout élément interactif |

Exemple :

```stylus
// Appliquer un anneau de focus prononcé sur un bouton personnalisé
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="Lien d'évitement">

## L'aide au lien d'évitement

Placez ceci **en tout premier dans `<body>`** :

```html
<a href="#main-content" class="skip-link">Aller au contenu principal</a>
```

La classe n'est **pas** dans la feuille de style principale (le poids
de page n'augmente pas) ; c'est un extrait de 4 lignes que vous
composez vous-même ou que vous utilisez via le mixin `skip-link()`
inclus. Ce site l'utilise — cliquez sur la page puis appuyez sur Tab
pour le voir apparaître en haut à gauche.

<hr class="hr-text" data-content="Vérification">

## Vérifier vos propres pages

La bibliothèque fournit un script `a11y-test.mjs` sous `scripts/` qui
exécute [axe-core](https://github.com/dequelabs/axe-core) sur chaque
URL que vous lui fournissez.

```bash
node scripts/a11y-test.mjs https://example.com
```

La CI exécute ce script sur la page vitrine `dist/index.html` à
chaque push.

[Lire les notes de version v2.0.0 →](/fr/journal/) ·
[Voir la page Sécurité →](/fr/securite/)
