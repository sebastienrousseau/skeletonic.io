---
title: "Contribuer"
name: "Skeletonic Stylus"
description: "Comment signaler un problème, proposer des modifications et soumettre des demandes de fusion pour Skeletonic Stylus."
layout: page
permalink: https://skeletonic.io/fr/contribuer/
date: 2026-04-08
author: Sebastien Rousseau
language: fr
theme_color: "hsl(210, 100%, 42%)"
keywords: "contribuer, open source, pull request, ticket, conventions"
---

Skeletonic Stylus est un projet open source ; toutes les contributions
sont les bienvenues — des corrections de coquilles aux nouveaux
composants.

<hr class="hr-text" data-content="Démarrage rapide">

## Démarrage rapide

```bash
# 1. Fork et clone
git clone git@github.com:VOTRE-UTILISATEUR/skeletonic-stylus.git
cd skeletonic-stylus

# 2. Installation (pnpm via corepack)
corepack enable
pnpm install

# 3. Build
pnpm run build           # pipeline complète (stylus → prettier → stylelint → autoprefixer → csso)

# 4. Lint et tests
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="Conventions">

## Conventions

- **Noms de branches :** `feat/description-courte`, `fix/description-courte`, `docs/description-courte`.
- **Commits :** [Conventional Commits](https://www.conventionalcommits.org).
  Tous les commits sont signés.
- **Stylus :** indentation de 4 espaces, pas de point-virgule, préférer
  les `$variables` aux valeurs en dur, chaque classe publique vit dans
  une couche de cascade.
- **Accessibilité :** tout nouveau composant doit satisfaire WCAG 2.2 AA
  de manière démontrable ; exécuter `node scripts/a11y-test.mjs` sur
  la vitrine avant d'ouvrir une PR.
- **Budget de taille :** la feuille de style principale doit rester sous
  **8 Ko gzippé**. Si votre modification dépasse ce seuil, justifiez-la
  dans la PR.

<hr class="hr-text" data-content="Pull requests">

## Pull requests

1. Ouvrir d'abord un ticket pour toute modification non triviale —
   cela évite le travail inutile.
2. Garder les PR ciblées : une modification logique par PR.
3. Mettre à jour le `CHANGELOG.md` dans la section « Unreleased ».
4. Vérifier que la CI est au vert avant de demander une revue.
5. Le squash-merge est la norme ; les messages de commit seront
   nettoyés lors de la fusion.

<hr class="hr-text" data-content="Code de conduite">

## Code de conduite

En participant, vous vous engagez à respecter le
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
Soyez bienveillant, patient et partez du principe que les intentions
sont bonnes.

[Ouvrir un ticket ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[Ouvrir une PR ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
