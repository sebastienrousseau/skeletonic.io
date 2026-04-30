---
title: "Dostepnosc — WCAG 2.2 w v1.1.7"
name: "Skeletonic Stylus"
description: "Co v1.1.7 dostarcza od razu dla zgodnosci z WCAG 2.2 — pierscienie fokusu, kontrast, skip links, ruch i tryb ciemny."
layout: page
permalink: https://skeletonic.io/pl/dostepnosc/
date: 2026-04-08
author: Sebastien Rousseau
language: pl
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, dostepnosc, focus visible, skip link, prefers reduced motion, kontrast"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

> **Skeletonic Stylus v1.1.7 dostarcza zgodnosc z WCAG 2.2 jako domyslne
> zachowanie, a nie jako opcjonalny motyw.** Ta strona dokumentuje, co jest
> wbudowane i jakie mixiny mozna dodatkowo wlaczyc dla precyzyjniejszej kontroli.

<hr class="hr-text" data-content="Od razu po instalacji">

## Co otrzymujesz za darmo

| WCAG 2.2 SC | Co robi v1.1.7 | Jak zweryfikowac |
|---|---|---|
| **1.4.3 Kontrast (Minimum) — AA** | `--cl-primary` i `--cl-secondary` przyciemnione do >= 4,5:1 na bialym tle | DevTools → sprawdzanie kontrastu |
| **1.4.11 Kontrast nietekstowy — AA** | Obramowania formularzy, przyciski, odznaki — wszystko >= 3:1 | Tak samo |
| **2.4.7 Widocznosc fokusu — AA** | Kazdy element fokusowalny ma pierscien `:focus-visible` (zolty na ciemnych tlach, niebieski na jasnych) | Przejdz `Tab` przez dowolna strone |
| **2.4.11 Fokus nie zasloniety — AA (nowe w 2.2)** | Staly naglowek ma zmniejszona wysokosc + scroll-margin dla fokusu | Przejdz `Tab` za staly naglowek |
| **2.5.8 Rozmiar celu — AA (nowe w 2.2)** | Przyciski / linki: >= 24×24 px CSS obszaru dotyku | DevTools — model pudelkowy |
| **1.4.12 Odstepy tekstu — AA** | Wszystkie elementy respektuja nadpisane uzytkowniku line-height / letter-spacing | Nadpisz w DevTools |
| **2.3.3 Animacja z interakcji — AAA** | Wszystkie klasy animacji sa opakowane w `@media (prefers-reduced-motion: no-preference)` | Ograniczenie ruchu na poziomie systemu |
| **1.4.10 Przeformatowanie — AA** | Uklad dziala przy 320 px bez poziomego przewijania | DevTools — waski viewport |
| **Tryb ciemny** | `prefers-color-scheme: dark` automatycznie zmienia tokeny | Przelacz tryb ciemny w systemie |

<hr class="hr-text" data-content="Mixiny">

## Mixiny Stylus do dodatkowego wlaczenia

Jesli kompilujesz ze zrodel, nastepujace mixiny sa dostepne w
`src/stylus/utilities/mixins.styl`:

| Mixin | Zastosowanie |
|---|---|
| `focus-ring()` | Wysokokontrastowy pierscien fokusu respektujacy `:focus-visible` |
| `visually-hidden()` | Tekst widoczny tylko dla czytnikow ekranu, pozostajacy fokusowalny |
| `skip-link()` | Kotwica stajaca sie widoczna po fokusie |
| `reduced-motion()` | Opakowuje dowolny blok w `prefers-reduced-motion: no-preference` |
| `forced-colors()` | Dostosowania dla trybu wysokiego kontrastu Windows |
| `target-size(24px)` | Rozszerza dowolny klikalny element do minimalnego celu dotykowego |

Przyklad:

```stylus
// Zastosuj mocny pierscien fokusu na wlasnym przycisku
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="Skip link">

## Helper skip-link

Umiesc to **jako pierwszy element wewnatrz `<body>`**:

```html
<a href="#main-content" class="skip-link">Przejdz do glownej tresci</a>
```

Klasa **nie** znajduje sie w glownym arkuszu stylow (wiec rozmiar strony sie nie zmienia); to 4-liniowy fragment, ktory tworzysz samodzielnie lub uzywasz dolaczonego mixinu `skip-link()`. Ta strona go uzywa — sfokusuj strone i nacisnij Tab, aby zobaczyc go w lewym gornym rogu.

<hr class="hr-text" data-content="Weryfikacja">

## Weryfikacja wlasnych stron

Biblioteka dostarcza skrypt `a11y-test.mjs` w katalogu `scripts/`, ktory uruchamia [axe-core](https://github.com/dequelabs/axe-core) na kazdym podanym URL.

```bash
node scripts/a11y-test.mjs https://example.com
```

CI uruchamia ten skrypt na stronie showcasowej `dist/index.html` przy kazdym uaktualnieniu.

[Przeczytaj o wydaniu v1.1.7 →](/pl/dziennik-zmian/) ·
[Zobacz strone bezpieczenstwa →](/pl/bezpieczenstwo/)
