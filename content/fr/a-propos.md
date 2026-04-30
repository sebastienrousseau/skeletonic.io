---
title: "À propos de Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus est une bibliothèque CSS Stylus open source conçue pour un stylage d'interfaces accessible, rapide et modulaire."
layout: page
permalink: https://skeletonic.io/fr/a-propos/
date: 2026-04-08
author: Sebastien Rousseau
language: fr
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, à propos, stylus, framework css, philosophie"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

<p class="badges">
  <img alt="Étoiles GitHub" src="https://img.shields.io/github/stars/sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Stars" height="28" loading="lazy">
  <img alt="Téléchargements mensuels" src="https://img.shields.io/npm/dm/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Downloads" height="28" loading="lazy">
  <img alt="Version npm" src="https://img.shields.io/npm/v/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=npm" height="28" loading="lazy">
  <img alt="Taille du bundle" src="https://img.shields.io/badge/gzip-8.3%20KB-brightgreen?style=for-the-badge" height="28" loading="lazy">
  <img alt="Licence" src="https://img.shields.io/npm/l/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=License" height="28" loading="lazy">
  <img alt="WCAG" src="https://img.shields.io/badge/WCAG-2.2%20AA-2e7d32?style=for-the-badge" height="28" loading="lazy">
</p>

## En bref

**Skeletonic Stylus** est une bibliothèque CSS
[Stylus](https://stylus-lang.com) open source conçue pour rendre le
stylage d'interfaces accessible, rapide et modulaire.

Née en 2018 comme expérience personnelle pour **livrer moins de CSS**
sans renoncer à l'ergonomie d'une vraie bibliothèque de composants.
Huit ans plus tard, l'objectif reste le même.

## Ce qu'elle vous apporte

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="Éclair" width="64" height="64" loading="lazy" decoding="async">
    <h3>Ultra rapide</h3>
    <p>Concevoir et personnaliser des interfaces responsives en quelques minutes. Variables CSS natives, classes prédéfinies, grille 12 colonnes couvrant chaque élément HTML sémantique.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="Plume" width="64" height="64" loading="lazy" decoding="async">
    <h3>Léger</h3>
    <p>8,3 Ko gzippé. Les pages chargent plus vite. Chaque brique essentielle reste incluse.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="Appareils responsifs" width="64" height="64" loading="lazy" decoding="async">
    <h3>Design responsive</h3>
    <p>Conçu pour le bureau et le mobile. Les mises en page s'adaptent à tout appareil. Optimisé pour le tactile, HTML sémantique partout.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="Personne accessibilité" width="64" height="64" loading="lazy" decoding="async">
    <h3>Accessibilité</h3>
    <p>WCAG 2.2 intégré : anneaux focus-visible, contraste AA, liens d'évitement, composants navigables au clavier, support du mouvement réduit — sans feuille de style supplémentaire, sans boilerplate <code>aria-*</code>.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="Blocs de composants" width="64" height="64" loading="lazy" decoding="async">
    <h3>Bibliothèque de composants</h3>
    <p>Composants CSS modulaires et mixins Stylus. Boutons, formulaires, cartes, alertes, badges, palettes et animations — propres, modulaires, prêts à intégrer.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="Logo GitHub" width="64" height="64" loading="lazy" decoding="async">
    <h3>Gratuit et open source</h3>
    <p>Conçu, développé et maintenu par Sebastien Rousseau. Double licence <strong>MIT</strong> ou <strong>Apache 2.0</strong>. Aucun frais, même pour un usage commercial.</p>
  </article>
</div>

## Comparaison

Une seule feuille de style auto-hébergée couvre la typographie, les
boutons, les formulaires, les cartes, les tableaux, les palettes, les
animations et les classes utilitaires. Zéro JavaScript. Aucune étape de
build requise. Aucune dépendance pair sur Bootstrap, Tailwind ou Bulma.

| Fonctionnalité | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| Taille gzippée | **8,3 Ko** | ~30 Ko | ~10 Ko JIT | ~30 Ko |
| Conformité WCAG 2.2 | **Intégrée** | Partielle | Manuelle | Partielle |
| Couches de cascade | **Oui (`@layer`)** | Non | Non | Non |
| Mode sombre | **`prefers-color-scheme`** | Opt-in | Classe | Opt-in |
| JavaScript requis | **Non** | Oui (Popper) | Non | Non |
| SBOM CycloneDX | **Oui** | Non | Non | Non |
| Mouvement réduit | **Respecté** | Partiel | Manuel | Partiel |
| Licence | MIT ou Apache 2.0 | MIT | MIT | MIT |

## Principes

1. **L'accessibilité est le plancher, pas le plafond.** La conformité
   WCAG 2.2 est intégrée à chaque composant, jamais boulonnée après
   coup comme un « thème ».
2. **Chaque octet compte.** Une seule feuille de style livrée ne doit
   pas exploser votre budget de poids de page. Le plafond de 8 Ko
   gzippé est appliqué en CI.
3. **Les couches de cascade battent les guerres de spécificité.**
   Surcharger quoi que ce soit en confiance — pas de `!important`, pas
   d'astuces d'ordre DOM.
4. **Stylus reste pertinent.** Concis, expressif, et permet à la
   bibliothèque de tenir en ~3 000 lignes lisibles.
5. **L'ennui est une fonctionnalité.** Aucune dépendance JS. Aucune
   magie au build. Aucun renommage cassant. Des classes CSS qui font
   exactement ce qu'elles annoncent.
6. **Personnalisable en quelques secondes.** Propriétés personnalisées
   CSS natives pour les couleurs, l'espacement, la typographie et les
   rayons.
7. **Chaîne d'approvisionnement renforcée.** Provenance npm signée.
   Mises à jour Dependabot épinglées. CVE-2023-44270 corrigée via
   overrides.

## Versionnement et semver

Skeletonic Stylus suit le [Versionnement Sémantique 2.0](https://semver.org).

| Incrément | Quand | Exemple |
|---|---|---|
| **Majeur** | Suppression ou renommage d'une classe, mixin ou jeton public | 1.x → 2.0 |
| **Mineur** | Ajout d'un nouveau composant, mixin ou jeton | 1.1 → 1.2 |
| **Patch** | Corrections de bogues, polish a11y, performance, sécurité | 1.1.6 → 1.1.7 |

Tous les noms de classe publics, toutes les propriétés personnalisées
CSS et tous les mixins Stylus exportés font partie de l'API publique.
Un changement incompatible entraîne un incrément majeur et un guide de
migration.

## Gouvernance

Skeletonic Stylus est conçu, développé et maintenu par
[Sebastien Rousseau](https://sebastienrousseau.com). Double licence
[MIT](https://opensource.org/licenses/MIT) et
[Apache 2.0](https://opensource.org/licenses/Apache-2.0).

Problèmes, idées et contributions sont les bienvenus —
[consulter le guide de contribution](/fr/contribuer/).
