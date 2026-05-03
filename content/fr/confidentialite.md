---
title: "Confidentialité"
name: "Skeletonic Stylus"
description: "Quelles données skeletonic.io collecte, pourquoi et comment les refuser."
layout: page
permalink: https://skeletonic.io/fr/confidentialite/
date: 2026-04-08
author: Sebastien Rousseau
language: fr
theme_color: "hsl(210, 100%, 42%)"
keywords: "confidentialité, rgpd, cookies, pas de suivi"
---

## En bref

> **skeletonic.io ne dépose aucun cookie de suivi et n'exécute aucune
> balise analytique tierce.** Le site est un ensemble statique de
> fichiers HTML, CSS et un unique fichier de service worker. Aucune
> requête n'est journalisée au-delà des journaux d'accès standard de
> GitHub Pages.

<hr class="hr-text" data-content="Détails">

## Quelles données sont collectées

1. **Journaux d'accès GitHub Pages.** Lorsque vous chargez une page,
   GitHub enregistre votre adresse IP, l'URL demandée et l'horodatage.
   La politique de confidentialité de GitHub s'applique — voir
   [docs.github.com/en/site-policy](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
2. **Le formulaire de contact.** Si vous soumettez le formulaire sur
   `/contact/`, les données transitent par
   [Formspree](https://formspree.io) et sont transmises à l'adresse
   courriel du mainteneur. La politique de confidentialité de Formspree
   s'applique.
3. **Service worker.** Le script `sw.js` met en cache les réponses
   HTML, CSS, JS et images **localement dans votre navigateur** pour
   permettre la navigation hors ligne. Rien n'est envoyé nulle part.

## Ce qui n'est *pas* collecté

- ❌ Google Analytics, Plausible, Fathom ou tout autre outil analytique.
- ❌ Cookies d'aucune sorte. Le site n'en dépose aucun.
- ❌ Stockage local ou IndexedDB au-delà du cache du service worker.
- ❌ Empreinte numérique, réseaux publicitaires ou traqueurs tiers.

## Vos droits

Si vous avez utilisé le formulaire de contact et souhaitez supprimer
votre message, écrivez-moi depuis l'adresse utilisée pour l'envoi et
je le purgerai sous 30 jours.

[Lire les conditions →](/fr/conditions/) · [Nous contacter →](/fr/contact/)
