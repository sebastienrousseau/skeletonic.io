---
title: "Sécurité et chaîne d'approvisionnement"
name: "Skeletonic Stylus"
description: "Comment Skeletonic Stylus v1.1.7 sécurise sa pipeline de build, signe ses versions et livre un SBOM."
layout: page
permalink: https://skeletonic.io/fr/securite/
date: 2026-04-08
author: Sebastien Rousseau
language: fr
theme_color: "hsl(210, 100%, 42%)"
keywords: "sécurité css, sbom, cyclonedx, provenance npm, openssf scorecard, chaîne d'approvisionnement"
---

## Performance

- **45,7 Ko minifié · 8,3 Ko gzippé · 6,9 Ko brotli** pour la feuille de style principale complète.
- **Zéro JavaScript** — Stylus pur → CSS pur, aucun coût à l'exécution.
- **Couches de cascade** — les surcharges l'emportent sans `!important`.
- **Budget `size-limit` appliqué** en CI sur chaque commit.

La performance est un contrôle de sécurité. Chaque octet non livré est
un octet de moins à auditer, signer et vérifier.

## Résumé de la chaîne d'approvisionnement

| Contrôle | Statut v1.1.7 |
|---|---|
| **SBOM CycloneDX** | Généré à chaque version, commité sous `dist/sbom.json` |
| **Provenance npm** | Activée (`--provenance --access public`) |
| **Tags git signés** | Signés par clé SSH du mainteneur |
| **Dependabot épinglé** | Mises à jour hebdomadaires, auto-revues |
| **Budgets de taille** | `size-limit` plafond 8 Ko gzippé, échoue en CI en cas de régression |
| **Lint** | `stylelint` + assertions a11y à chaque push |
| **CodeQL** | Activé pour `javascript` et les fichiers de config |
| **CVE-2023-44270** | **Corrigé** via `pnpm.overrides` éliminant `postcss@7` |

<hr class="hr-text" data-content="SBOM">

## SBOM CycloneDX

Chaque tarball publié inclut un SBOM CycloneDX à `dist/sbom.json`.
Vérification d'un paquet fraîchement installé :

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "1.1.7"
```

Le SBOM est généré avec `cyclonedx-npm` lors du workflow de publication.

<hr class="hr-text" data-content="Provenance">

## Provenance npm

L'artefact publié est signé via la
[provenance de paquet npm](https://docs.npmjs.com/generating-provenance-statements).

Vérification après installation :

```bash
npm view @sebastienrousseau/skeletonic-stylus@1.1.7 --json | \
  jq '.dist."npm-signature"'
```

L'attestation signée lie le tarball à l'exécution exacte de GitHub
Actions qui l'a produit.

<hr class="hr-text" data-content="CVE">

## CVE connues et correctifs

| CVE | Gravité | Statut |
|---|---|---|
| **CVE-2023-44270** (analyse de retour à la ligne postcss) | Modérée | **Corrigée** en v1.1.7 via `pnpm.overrides` mettant à jour `postcss` vers ≥ 8.4.31 |

La base de données Snyk et les avis de sécurité GitHub sont surveillés
en continu ; les correctifs de sécurité sont livrés en **versions patch**.

<hr class="hr-text" data-content="Signalement">

## Signaler une vulnérabilité

Merci de **ne pas** ouvrir de ticket GitHub public pour un signalement
de sécurité. Utilisez plutôt le canal privé :

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

Les signalements sont accusés de réception sous **72 heures** et un
correctif est livré sous **14 jours** pour les problèmes modérés,
**48 heures** pour les problèmes critiques.

[Retour à l'accueil →](/fr/) · [Lire le journal des modifications →](/fr/journal/)
