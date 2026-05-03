---
title: "Composants"
name: "Skeletonic Stylus"
description: "Exemples HTML interactifs de chaque composant Skeletonic Stylus, regroupés, ancrés et rendus avec la feuille de style elle-même."
layout: page
permalink: https://skeletonic.io/fr/composants/
date: 2026-04-08
author: Sebastien Rousseau
language: fr
theme_color: "hsl(210, 100%, 42%)"
keywords: "composants skeletonic, boutons, cartes, formulaires, alertes, badges, en-tête, navbar, hamburger css"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

Chaque exemple ci-dessous est **rendu avec la feuille de style
elle-même**. Aucun préprocesseur. Aucun JavaScript. Aucune dépendance
supplémentaire. Copiez n'importe quel extrait dans un fichier HTML
vierge — il fonctionne.

<nav aria-label="Sur cette page">
<p><strong>Sur cette page</strong></p>
<ul>
<li><strong>Entrées</strong> — <a href="#buttons">Boutons</a> · <a href="#badges">Badges</a></li>
<li><strong>Retour d'information</strong> — <a href="#alerts">Alertes</a></li>
<li><strong>Surface</strong> — <a href="#cards">Cartes</a></li>
<li><strong>Formulaires</strong> — <a href="#form-fields">Champs de formulaire</a></li>
<li><strong>Mise en page</strong> — <a href="#grid">Grille</a> · <a href="#header">En-tête et navigation hamburger</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="Entrées">

<h2 id="inputs">Entrées</h2>

Éléments interactifs que le visiteur clique, touche ou sélectionne pour
piloter la page.

<h3 id="buttons">Boutons</h3>

Un déclencheur d'action sémantique et personnalisable. Les variantes
pleine et contour proposent six couleurs de marque chacune.

```html
<a href="#" class="button primary">Primary</a>
<a href="#" class="button secondary">Secondary</a>
<a href="#" class="button tertiary">Tertiary</a>
```

<section aria-labelledby="buttons">
<p>
  <a href="#" class="button primary">Primary</a>
  <a href="#" class="button secondary">Secondary</a>
  <a href="#" class="button tertiary">Tertiary</a>
</p>
</section>

Variantes contour :

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">Outline</a>
  <a href="#" class="button secondary-outline">Outline</a>
</p>

> **Note d'accessibilité.** Chaque variante `.button` dispose d'un
> anneau `:focus-visible` et d'une **zone de clic minimale de
> 24×24&nbsp;px** (WCAG&nbsp;2.2 SC&nbsp;2.5.8). Utilisez
> `<button type="button">` pour les actions sur la page et `<a href>`
> uniquement pour la navigation.

<h3 id="badges">Badges</h3>

Une étiquette compacte pour un statut, un compteur ou une catégorie. La
taille du texte est fixe pour aligner les badges avec le texte
environnant.

```html
<span class="badge">Default</span>
<span class="badge primary">Primary</span>
<span class="badge success">Success</span>
<span class="badge warning">Warning</span>
<span class="badge danger">Danger</span>
```

<section aria-labelledby="badges">
<p>
  <span class="badge">Default</span>
  <span class="badge primary">Primary</span>
  <span class="badge success">Success</span>
  <span class="badge warning">Warning</span>
  <span class="badge danger">Danger</span>
</p>
</section>

> **Note d'accessibilité.** Les badges sont décoratifs par défaut.
> Lorsque le badge porte le seul signal (par exemple un compteur de
> messages non lus), encadrez-le d'un texte masqué visuellement :
> `<span class="visually-hidden">3 messages non lus</span>`.

<hr class="hr-text" data-content="Retour d'information">

<h2 id="feedback">Retour d'information</h2>

Surfaces qui informent le visiteur qu'une action s'est produite — ou est
sur le point de se produire.

<h3 id="alerts">Alertes</h3>

Messages de statut à intention sémantique. **Dans la v2.0.0, chaque
variante est explicitement préfixée** sous
`.alert-{primary,secondary,info,success,warning,error}` afin que la
classe de variante ne puisse pas entrer en collision avec les classes
d'état ailleurs sur la page.

```html
<div class="alert alert-primary" role="alert">
  <strong>Attention.</strong> Ceci est une alerte primaire.
</div>
<div class="alert alert-success" role="status">
  <strong>Enregistré.</strong> Vos modifications sont sauvegardées.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Prudence.</strong> Cette action affecte un état partagé.
</div>
<div class="alert alert-error" role="alert">
  <strong>Erreur.</strong> Impossible d'enregistrer le formulaire.
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>Attention.</strong> Ceci est une alerte primaire.
</div>

<div class="alert alert-success" role="status">
<strong>Enregistré.</strong> Vos modifications sont sauvegardées.
</div>

<div class="alert alert-warning" role="alert">
<strong>Prudence.</strong> Cette action affecte un état partagé.
</div>

<div class="alert alert-error" role="alert">
<strong>Erreur.</strong> Impossible d'enregistrer le formulaire.
</div>
</section>

> **Note d'accessibilité.** Utilisez `role="alert"` pour les messages
> exigeant une attention immédiate (erreurs, avertissements) et
> `role="status"` pour les confirmations non urgentes. Les deux exposent
> le message aux technologies d'assistance dès son apparition.

<hr class="hr-text" data-content="Surface">

<h2 id="surface">Surface</h2>

Conteneurs qui encadrent et regroupent un contenu lié.

<h3 id="cards">Cartes</h3>

Un conteneur bordé et rembourré pour une unité de contenu cohérente.
Associez-le à la grille `flex-N` pour créer des murs de cartes
responsifs.

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Lightweight</h3>
      <p>38.8 KB minified, 7.7 KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Accessible</h3>
      <p>WCAG 2.2 conformant out of the box.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modular</h3>
      <p>Cascade-layered for easy overrides.</p>
    </div>
  </article>
</section>
```

<section class="row" aria-labelledby="cards">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Léger</h3>
      <p>45,7&nbsp;Ko minifié, 8,3&nbsp;Ko gzippé.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Accessible</h3>
      <p>Conforme WCAG&nbsp;2.2 par défaut.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modulaire</h3>
      <p>Organisé en couches de cascade pour des surcharges faciles.</p>
    </div>
  </article>
</section>

> **Note d'accessibilité.** Encadrez chaque carte dans un repère
> sémantique (`<article>`, `<section>`) et commencez son contenu par un
> titre (`<h3>`). Les utilisateurs de lecteurs d'écran peuvent alors
> parcourir la liste de cartes comme des régions navigables de premier
> ordre.

<hr class="hr-text" data-content="Formulaires">

<h2 id="forms">Formulaires</h2>

Entrées, libellés et regroupements pour collecter les données
utilisateur.

<h3 id="form-fields">Champs de formulaire</h3>

Libellés, champs texte, zones de texte, fieldsets et légendes — tous
dimensionnés de manière cohérente avec le reste du design system.

```html
<form>
  <label for="name">Name</label>
  <input id="name" type="text" required>

  <label for="email">Email</label>
  <input id="email" type="email" required class="input-primary">

  <label for="msg">Message</label>
  <textarea id="msg" rows="4"></textarea>

  <button type="submit" class="button primary">Send</button>
</form>
```

<section aria-labelledby="form-fields">
<div role="group" aria-label="Form fields demo">
  <label for="demo-name">Nom</label>
  <input id="demo-name" type="text">

  <label for="demo-email">Courriel</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">Message</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">Envoyer (démo)</button></p>
</div>
</section>

> **Note d'accessibilité.** Chaque champ doit posséder un `<label for="…">`
> associé par programmation. Regroupez les contrôles liés dans un
> `<fieldset>` avec une `<legend>`. Marquez les champs obligatoires avec
> `required` (et un astérisque visible dans le texte du libellé).

<hr class="hr-text" data-content="Mise en page">

<h2 id="layout">Mise en page</h2>

Primitives structurelles — grille, conteneur, en-tête — qui encadrent
la page entière.

<h3 id="grid">Grille</h3>

Une grille responsive `flex-N` (1 → 12 colonnes) construite sur
flexbox. Le parent `.row` gère automatiquement les espaces et les
retours à la ligne.

```html
<div class="row">
  <div class="flex-6">Half</div>
  <div class="flex-6">Half</div>
</div>
<div class="row">
  <div class="flex-4">Third</div>
  <div class="flex-4">Third</div>
  <div class="flex-4">Third</div>
</div>
```

<section aria-labelledby="grid">
<div style="display:flex;flex-wrap:wrap;gap:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Moitié</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Moitié</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Tiers</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">Tiers</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">Tiers</div>
</div>
</section>

> **Note d'accessibilité.** L'ordre visuel doit correspondre à l'ordre
> du DOM. Évitez de réordonner les lignes avec
> `flex-direction: row-reverse` ou `order:` — les lecteurs d'écran et
> les utilisateurs au clavier suivent la source, pas l'affichage.

<h3 id="header">En-tête et navigation hamburger</h3>

Un en-tête complet, entièrement en CSS, avec un toggle hamburger
responsive. **Zéro JavaScript.** Copiez l'extrait ci-dessous dans une
page HTML vierge qui charge déjà `skeletonic.min.css` — le menu se
réduit, s'ouvre et gère le focus correctement tout seul.

```html
<style>
  .sk-header{position:relative;display:flex;align-items:center;gap:1rem;padding:.75rem 1rem;border:1px solid #e4e4e7;border-radius:.5rem;background:#fff;}
  .sk-header .sk-brand{font-weight:600;color:#0a0a0a;text-decoration:none;}
  .sk-header .sk-toggle{position:absolute;left:-9999px;}
  .sk-header .sk-burger{display:none;margin-left:auto;cursor:pointer;padding:.625rem .75rem;border:1px solid #e4e4e7;border-radius:.375rem;font-size:1.125rem;line-height:1;min-width:2.75rem;min-height:2.75rem;}
  .sk-header .sk-burger:focus-within,.sk-header .sk-toggle:focus-visible+.sk-burger{outline:2px solid hsl(210,100%,42%);outline-offset:2px;}
  .sk-header .sk-menu{list-style:none;display:flex;gap:.25rem;margin:0 0 0 auto;padding:0;}
  .sk-header .sk-menu a{display:inline-flex;align-items:center;min-height:2.75rem;padding:.5rem .875rem;border-radius:.375rem;color:#1a1a1a;text-decoration:none;}
  .sk-header .sk-menu a:hover{background:#f4f4f5;}
  @media (max-width:640px){
    .sk-header .sk-burger{display:inline-flex;align-items:center;justify-content:center;}
    .sk-header .sk-menu{display:none;flex-direction:column;gap:0;position:absolute;top:calc(100% + .25rem);left:0;right:0;background:#fff;border:1px solid #e4e4e7;border-radius:.5rem;padding:.375rem;box-shadow:0 4px 24px rgba(0,0,0,.08);z-index:10;}
    .sk-header .sk-menu a{padding:.75rem 1rem;border-bottom:1px solid #f4f4f5;}
    .sk-header .sk-menu li:last-child a{border-bottom:0;}
    .sk-header .sk-toggle:checked ~ .sk-menu{display:flex;}
  }
</style>
<header class="sk-header">
  <a class="sk-brand" href="#">Brand</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Toggle navigation">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Docs</a></li>
    <li><a href="#">Components</a></li>
    <li><a href="#">About</a></li>
  </ul>
</header>
```

<section aria-labelledby="header">
<style>
  .sk-header{position:relative;display:flex;align-items:center;gap:1rem;padding:.75rem 1rem;border:1px solid #e4e4e7;border-radius:.5rem;background:#fff;}
  .sk-header .sk-brand{font-weight:600;color:#0a0a0a;text-decoration:none;}
  .sk-header .sk-toggle{position:absolute;left:-9999px;}
  .sk-header .sk-burger{display:none;margin-left:auto;cursor:pointer;padding:.625rem .75rem;border:1px solid #e4e4e7;border-radius:.375rem;font-size:1.125rem;line-height:1;min-width:2.75rem;min-height:2.75rem;}
  .sk-header .sk-burger:focus-within,.sk-header .sk-toggle:focus-visible+.sk-burger{outline:2px solid hsl(210,100%,42%);outline-offset:2px;}
  .sk-header .sk-menu{list-style:none;display:flex;gap:.25rem;margin:0 0 0 auto;padding:0;}
  .sk-header .sk-menu a{display:inline-flex;align-items:center;min-height:2.75rem;padding:.5rem .875rem;border-radius:.375rem;color:#1a1a1a;text-decoration:none;}
  .sk-header .sk-menu a:hover{background:#f4f4f5;}
  @media (max-width:640px){
    .sk-header .sk-burger{display:inline-flex;align-items:center;justify-content:center;}
    .sk-header .sk-menu{display:none;flex-direction:column;gap:0;position:absolute;top:calc(100% + .25rem);left:0;right:0;background:#fff;border:1px solid #e4e4e7;border-radius:.5rem;padding:.375rem;box-shadow:0 4px 24px rgba(0,0,0,.08);z-index:10;}
    .sk-header .sk-menu a{padding:.75rem 1rem;border-bottom:1px solid #f4f4f5;}
    .sk-header .sk-menu li:last-child a{border-bottom:0;}
    .sk-header .sk-toggle:checked ~ .sk-menu{display:flex;}
  }
</style>
<header class="sk-header">
  <a class="sk-brand" href="#">Brand</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Toggle navigation">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Accueil</a></li>
    <li><a href="#">Documentation</a></li>
    <li><a href="#">Composants</a></li>
    <li><a href="#">À propos</a></li>
  </ul>
</header>
</section>

> **Note d'accessibilité.** La case à cocher masquée reste dans l'ordre
> de tabulation afin que les utilisateurs au clavier puissent ouvrir le
> menu avec `Espace` ou `Entrée`. Le `<label>` porte `aria-hidden` car
> la case à cocher elle-même est la source du nom accessible.
> Redimensionnez la fenêtre sous 640&nbsp;px pour voir le toggle
> hamburger prendre le relais.

[Voir les notes d'accessibilité →](/fr/accessibilite/) · [Parcourir les palettes →](/fr/palettes/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Composants Skeletonic Stylus",
  "description": "Chaque composant livré dans Skeletonic Stylus v2.0.0.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Boutons",
      "url": "https://skeletonic.io/fr/composants/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Badges",
      "url": "https://skeletonic.io/fr/composants/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Alertes",
      "url": "https://skeletonic.io/fr/composants/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Cartes",
      "url": "https://skeletonic.io/fr/composants/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Champs de formulaire",
      "url": "https://skeletonic.io/fr/composants/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Grille",
      "url": "https://skeletonic.io/fr/composants/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "En-tête et navigation hamburger",
      "url": "https://skeletonic.io/fr/composants/#header"
    }
  ]
}
</script>
