---
title: "Journal des modifications"
name: "Skeletonic Stylus"
description: "Notes de version pour Skeletonic Stylus, avec la v1.1.7 détaillée."
layout: page
permalink: https://skeletonic.io/fr/journal/
author: Sebastien Rousseau
language: fr
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic changelog, notes de version, v1.1.7, semver"
---

## v1.1.7 — 2026-04 (actuelle)

La passe de « préparation au déploiement » : a11y, chaîne d'approvisionnement, hygiène du dépôt.

### Accessibilité (WCAG 2.2)
- **`$primary` assombri** à `hsl(210, 100%, 42%)` pour un contraste AA
  sur texte blanc dans les boutons / badges / liens.
- **`$secondary` assombri** à `hsl(195, 100%, 33%)`.
- Ajout d'anneaux **focus-visible** sur chaque élément interactif.
- Ajout du wrapper **`@media (prefers-reduced-motion)`** autour du
  module d'animations.
- Ajout du basculement de jetons **`prefers-color-scheme: dark`**.
- Ajout du mixin **target-size(24px)** pour satisfaire WCAG 2.2 SC 2.5.8.
- Ajout d'aides **focus-not-obscured** avec scroll-margin pour les en-têtes collants.

### Build et chaîne d'approvisionnement
- **Couches de cascade** — chaque bloc vit désormais dans
  `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}`.
- **SBOM CycloneDX** généré dans le tarball npm.
- **Budgets `size-limit`** appliqués en CI : plafond de 8 Ko gzippé
  sur la feuille de style principale.
- **CVE-2023-44270** (retour à la ligne postcss) corrigé via `pnpm.overrides`.
- Provenance et signature sur le workflow de publication npm
  (`--provenance --access public`).
- Suppression du plugin archivé `stylelint-a11y` de la configuration de lint.

### Hygiène du dépôt et paquet consommateur
- Suppression de l'ancien répertoire `package/` ; `dist/` est désormais
  la source unique de vérité pour les consommateurs.
- README réécrit pour refléter les chemins d'installation v1.1.7.
- `dist/` est commité ; `debug/` est généré et gitignored.
- Nouveau `.github/workflows/npm-publish.yml` déclenché par tag.

### Correctifs de bogues (P0)
- **Régression `row $:after` du sélecteur parent** — remplacement de
  `$` erroné par `&` dans `src/stylus/components/_grid.styl`.
- **`.alternate`** appliquait par erreur `animation-direction: reverse`
  au lieu de `alternate`.
- **Nommage `.alert-*`** — `.alert.success` → `.alert.alert-success`
  pour éviter les collisions avec les classes d'état.

[Notes de version complètes v1.1.7 sur GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases/tag/v1.1.7)

<hr class="hr-text" data-content="Historique">

## Versions antérieures

- **v1.1.6** — nettoyage interne, mises à jour de dépendances.
- **v1.1.5** — ajout de la palette Material.
- **v1.1.0** — palette Tachyons + refonte de la grille.
- **v1.0.5** — dernière version « legacy » avant le balayage WCAG 2.2.
- **v1.0.0** — première version publique (2018).

Pour un historique commit par commit, consultez la
[page des Releases GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases).
