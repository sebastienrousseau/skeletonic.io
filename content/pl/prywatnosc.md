---
title: "Prywatnosc"
name: "Skeletonic Stylus"
description: "Jakie dane zbiera skeletonic.io, dlaczego i jak sie wypisac."
layout: page
permalink: https://skeletonic.io/pl/prywatnosc/
date: 2026-04-08
author: Sebastien Rousseau
language: pl
theme_color: "hsl(210, 100%, 42%)"
keywords: "prywatnosc, rodo, ciasteczka, brak sledzenia"
---

## Podsumowanie

> **skeletonic.io nie ustawia ciasteczek sledzacych i nie uruchamia tagów
> analitycznych stron trzecich.** Strona to statyczny zestaw HTML, CSS
> i pojedynczego pliku service worker. Zadne Twoje zapytanie nie jest
> rejestrowane poza standardowymi logami dostepu GitHub Pages.

<hr class="hr-text" data-content="Szczegoly">

## Jakie dane sa zbierane

1. **Logi dostepu GitHub Pages.** Gdy laduesz dowolna strone, GitHub rejestruje Twoj adres IP, URL zapytania i czas. Obowiazuje polityka prywatnosci GitHub — zobacz
   [docs.github.com/en/site-policy](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
2. **Formularz kontaktowy.** Jesli przeslesz formularz na `/kontakt/`, dane przechodza przez [Formspree](https://formspree.io), ktory przekazuje je na email maintainera. Obowiazuje polityka prywatnosci Formspree.
3. **Service worker.** Skrypt `sw.js` cachuje odpowiedzi HTML, CSS, JS i obrazow **lokalnie w Twojej przegladarce**, aby strona dzialala offline. Nic nie jest nigdzie wysylane.

## Czego *nie* zbieramy

- Google Analytics, Plausible, Fathom ani zaden inny tag analityczny.
- Ciasteczka jakiegokolwiek rodzaju. Strona nie ustawia zadnych.
- Local storage ani IndexedDB poza cache service workera.
- Fingerprinting, sieci reklamowe ani trackery stron trzecich.

## Twoje prawa

Jesli skorzystales z formularza kontaktowego i chcialbys, aby Twoja wiadomosc zostala usunieta, wyslij email z adresu, ktory podales, a usune ja w ciagu 30 dni.

[Przeczytaj regulamin →](/pl/regulamin/) · [Skontaktuj sie →](/pl/kontakt/)
