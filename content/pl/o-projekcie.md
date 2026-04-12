---
title: "O projekcie Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus to biblioteka CSS open source oparta na Stylus do dostepnego, szybkiego i modularnego stylowania interfejsow."
layout: page
permalink: https://skeletonic.io/pl/o-projekcie/
date: 2026-04-08
author: Sebastien Rousseau
language: pl
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, o projekcie, stylus, framework css, filozofia"
---

<p class="badges">
  <img alt="Gwiazdki GitHub" src="https://img.shields.io/github/stars/sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Stars" height="28" loading="lazy">
  <img alt="Pobrania miesiecznie" src="https://img.shields.io/npm/dm/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Downloads" height="28" loading="lazy">
  <img alt="Wersja npm" src="https://img.shields.io/npm/v/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=npm" height="28" loading="lazy">
  <img alt="Rozmiar paczki" src="https://img.shields.io/badge/gzipped-7.5%20KB-brightgreen?style=for-the-badge" height="28" loading="lazy">
  <img alt="Licencja" src="https://img.shields.io/npm/l/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=License" height="28" loading="lazy">
  <img alt="WCAG" src="https://img.shields.io/badge/WCAG-2.2%20AA-2e7d32?style=for-the-badge" height="28" loading="lazy">
</p>

## W skrocie

**Skeletonic Stylus** to biblioteka CSS open source oparta na [Stylus](https://stylus-lang.com) do dostepnego, szybkiego i modularnego stylowania interfejsow.

Powstala w 2018 roku jako osobisty eksperyment w **dostarczaniu mniej CSS** — bez rezygnacji z ergonomii prawdziwej biblioteki komponentow. Osiem lat pozniej cel pozostaje niezmienny.

## Co oferuje

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="Blyskawica" width="64" height="64" loading="lazy" decoding="async">
    <h3>Blyskawicznie szybki</h3>
    <p>Projektuj i dostosowuj responsywne interfejsy w kilka minut. Natywne zmienne CSS, predefiniowane klasy, siatka 12-kolumnowa obejmujaca kazdy semantyczny element HTML.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="Pioro" width="64" height="64" loading="lazy" decoding="async">
    <h3>Lekki</h3>
    <p>~7,5&nbsp;KB gzipped. Strony laduja sie szybciej. Wszystkie niezbedne bloki konstrukcyjne pozostaja na miejscu.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="Urzadzenia responsywne" width="64" height="64" loading="lazy" decoding="async">
    <h3>Responsywny design</h3>
    <p>Stworzony z mysla o komputerach i urzadzeniach mobilnych. Uklady dostosowuja sie do kazdego urzadzenia. Zoptymalizowany pod dotyk, semantyczny HTML na wskros.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="Dostepnosc" width="64" height="64" loading="lazy" decoding="async">
    <h3>Dostepnosc</h3>
    <p>WCAG&nbsp;2.2 wbudowany: pierscienie focus-visible, kontrast AA, helpery skip-link, komponenty przyjazne klawiaturze, obsluga ograniczonego ruchu — bez dodatkowego arkusza stylow, bez szablonowego <code>aria-*</code>.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="Bloki komponentow" width="64" height="64" loading="lazy" decoding="async">
    <h3>Biblioteka komponentow</h3>
    <p>Modularne komponenty CSS i mixiny Stylus. Przyciski, formularze, karty, alerty, odznaki, palety i animacje — czyste, modularne, gotowe do uzycia.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="Logo GitHub" width="64" height="64" loading="lazy" decoding="async">
    <h3>Darmowy &amp; open source</h3>
    <p>Zaprojektowany, zbudowany i utrzymywany przez Sebastien Rousseau. Podwojna licencja: <strong>MIT</strong> lub <strong>Apache&nbsp;2.0</strong>. Bez oplat, bez kosztow licencyjnych, nawet do uzytku komercyjnego.</p>
  </article>
</div>

## Porownanie z alternatywami

Jeden, samodzielnie hostowany arkusz stylow obejmuje typografie, przyciski, formularze, karty, tabele, palety, animacje i klasy narzediowe. Bez JavaScript. Bez wymaganego kroku budowania. Bez zaleznosci peer od Bootstrap, Tailwind czy Bulma.

| Funkcja | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| Rozmiar gzipped | **~7,5&nbsp;KB** | ~30&nbsp;KB | ~10&nbsp;KB (varies) | ~30&nbsp;KB |
| Zgodnosc z WCAG 2.2 | **Wbudowana** | Czesciowa | Reczna | Czesciowa |
| Warstwy kaskadowe | **Tak (`@layer`)** | Nie | Nie | Nie |
| Tryb ciemny | **`prefers-color-scheme`** | Opt-in | Na bazie klas | Opt-in |
| Wymagany JavaScript | **Nie** | Tak (Popper) | Nie | Nie |
| CycloneDX SBOM | **Tak** | Nie | Nie | Nie |
| Ograniczony ruch | **Respektowany** | Czesciowo | Recznie | Czesciowo |
| Licencja | MIT lub Apache 2.0 | MIT | MIT | MIT |

## Zasady

1. **Dostepnosc to fundament, nie nadbudowa.** Zgodnosc z WCAG 2.2 jest wbudowana w kazdy komponent, nigdy nie dokladana jako „motyw".
2. **Kazdy bajt ma znaczenie.** Pojedynczy dostarczony arkusz stylow nie powinien przekraczac budzetu rozmiaru strony. Limit 8&nbsp;KB gzipped jest egzekwowany w CI.
3. **Warstwy kaskadowe wygrywaja z wojnami specyficznosci.** Nadpisuj cokolwiek z pewnoscia — bez `!important`, bez trikow z kolejnoscia DOM.
4. **Stylus wciaz jest dobry.** Zwiezly, ekspresyjny i pozwala utrzymac biblioteke w ~3000 czytelnych linii.
5. **Nudziarstwo to zaleta.** Brak zaleznosci JS. Brak magii na etapie budowania. Brak lamianych zmian nazw. Klasy CSS, ktore robia dokladnie to, co mowia.
6. **Dostosowalny w sekundy.** Natywne CSS custom properties dla kolorow, odstepow, typografii i zaokraglen.
7. **Utwardzony lancuch dostaw.** Podpisane provenance npm. Przypiete aktualizacje Dependabot. CVE-2023-44270 poprawione przez overrides.

## Wersjonowanie &amp; semver

Skeletonic Stylus stosuje [Semantic Versioning 2.0](https://semver.org).

| Poziom | Kiedy | Przyklad |
|---|---|---|
| **Major** | Usuniecie lub zmiana nazwy publicznej klasy, mixinu lub tokenu | 1.x → 2.0 |
| **Minor** | Dodanie nowego komponentu, mixinu lub tokenu | 1.1 → 1.2 |
| **Patch** | Poprawki bledow, polerowanie a11y, wydajnosc, bezpieczenstwo | 1.1.6 → 1.1.7 |

Wszystkie publiczne nazwy klas, wszystkie CSS custom properties i wszystkie eksportowane mixiny Stylus sa czescia publicznego API. Lamaca zmiana otrzymuje major bump i przewodnik migracji.

## Opieka nad projektem

Skeletonic Stylus jest projektowany, budowany i utrzymywany przez
[Sebastien Rousseau](https://sebastienrousseau.com). Podwojna licencja:
[MIT](https://opensource.org/licenses/MIT) i
[Apache 2.0](https://opensource.org/licenses/Apache-2.0).

Zgloszenia, pomysly i wklad mile widziane —
[zobacz przewodnik wspolpracy](/pl/wspolpraca/).
