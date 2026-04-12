---
title: "Accesibilitate — WCAG 2.2 în v1.1.7"
name: "Skeletonic Stylus"
description: "Ce livrează v1.1.7 implicit pentru conformitatea WCAG 2.2 — inele de focus, contrast, skip links, mișcare și mod întunecat."
layout: page
permalink: https://skeletonic.io/ro/accesibilitate/
date: 2026-04-08
author: Sebastien Rousseau
language: ro
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, accesibilitate, focus visible, skip link, prefers reduced motion, contrast"
---

> **Skeletonic Stylus v1.1.7 livrează conformitatea WCAG 2.2 ca
> comportament implicit, nu ca temă opțională.** Această pagină
> documentează ce este integrat și ce mixin-uri poți activa opțional
> pentru un control mai fin.

<hr class="hr-text" data-content="Din start">

## Ce primești gratuit

| WCAG 2.2 SC | Ce face v1.1.7 | Cum verifici |
|---|---|---|
| **1.4.3 Contrast (Minim) — AA** | `--cl-primary` și `--cl-secondary` întunecate la ≥ 4,5:1 pe text alb în butoane / badge-uri / linkuri | DevTools → verificator de contrast |
| **1.4.11 Contrast non-text — AA** | Borduri formulare, butoane, badge-uri, toate ≥ 3:1 | La fel |
| **2.4.7 Focus vizibil — AA** | Fiecare element focalizabil are un inel `:focus-visible` (galben pe fundal întunecat, albastru pe fundal deschis) | `Tab` prin orice pagină |
| **2.4.11 Focus neobscurat — AA (nou în 2.2)** | Header-ul sticky are înălțime redusă + scroll-margin de focus | `Tab` dincolo de header-ul sticky |
| **2.5.8 Dimensiune țintă — AA (nou în 2.2)** | Butoane / linkuri: zonă de atingere ≥ 24×24 px CSS | DevTools box model |
| **1.4.12 Spațiere text — AA** | Toate elementele respectă suprascrierile utilizatorului pentru line-height / letter-spacing | Suprascrie în DevTools |
| **2.3.3 Animație din interacțiuni — AAA** | Toate clasele de animație sunt înfășurate în `@media (prefers-reduced-motion: no-preference)` | Reducere mișcare la nivel de SO |
| **1.4.10 Reflow — AA** | Layout-ul funcționează la 320 px fără scroll orizontal | DevTools viewport îngust |
| **Mod întunecat** | `prefers-color-scheme: dark` comută token-urile automat | Comutare mod întunecat SO |

<hr class="hr-text" data-content="Mixin-uri">

## Mixin-uri Stylus pe care le poți activa

Dacă compilezi din sursă, următoarele mixin-uri sunt disponibile în
`src/stylus/utilities/mixins.styl`:

| Mixin | Utilizare |
|---|---|
| `focus-ring()` | Inel de focus cu contrast ridicat care respectă `:focus-visible` |
| `visually-hidden()` | Text doar pentru screen reader care rămâne focalizabil |
| `skip-link()` | Ancoră care devine vizibilă la focus |
| `reduced-motion()` | Înfășoară orice bloc în `prefers-reduced-motion: no-preference` |
| `forced-colors()` | Ajustări pentru modul High Contrast din Windows |
| `target-size(24px)` | Adaugă padding oricărui element clickabil pentru o țintă minimă de atingere |

Exemplu:

```stylus
// Aplică un inel de focus puternic pe un buton personalizat
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="Skip link">

## Helper-ul skip-link

Adaugă aceasta **primul lucru în `<body>`**:

```html
<a href="#main-content" class="skip-link">Sari la conținutul principal</a>
```

Clasa **nu** se află în stylesheet-ul principal (deci greutatea paginii nu
crește); este un fragment de 4 linii pe care îl compui singur sau
folosind mixin-ul inclus `skip-link()`. Acest site îl utilizează —
focalizează pagina și apasă Tab pentru a-l vedea apărând în colțul
din stânga sus.

<hr class="hr-text" data-content="Verificare">

## Verificarea propriilor pagini

Biblioteca livrează un script `a11y-test.mjs` sub `scripts/` care
rulează [axe-core](https://github.com/dequelabs/axe-core) pe fiecare
URL furnizat.

```bash
node scripts/a11y-test.mjs https://example.com
```

CI rulează acest script pe pagina showcase `dist/index.html` la fiecare
push.

[Citește despre lansarea v1.1.7 →](/ro/jurnal-modificari/) ·
[Vezi pagina de securitate →](/ro/securitate/)
