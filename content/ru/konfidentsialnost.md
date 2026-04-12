---
title: "Конфиденциальность"
name: "Skeletonic Stylus"
description: "Какие данные собирает skeletonic.io, зачем и как отказаться."
layout: page
permalink: https://skeletonic.io/ru/konfidentsialnost/
date: 2026-04-08
author: Sebastien Rousseau
language: ru
theme_color: "hsl(210, 100%, 42%)"
keywords: "конфиденциальность, gdpr, cookies, без отслеживания"
---

## Коротко

> **skeletonic.io не устанавливает отслеживающие cookie и не использует
> сторонние аналитические теги.** Сайт представляет собой статический набор
> HTML, CSS и один файл service worker. Ни один ваш запрос не логируется
> сверх стандартных журналов доступа GitHub Pages.

<hr class="hr-text" data-content="Подробности">

## Какие данные собираются

1. **Журналы доступа GitHub Pages.** При загрузке любой страницы GitHub записывает ваш IP-адрес, URL запроса и время. Применяется политика конфиденциальности GitHub — смотрите
   [docs.github.com/en/site-policy](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
2. **Контактная форма.** Если вы отправите форму на `/ru/kontakt/`, данные пройдут через [Formspree](https://formspree.io), который перенаправит их на почту мейнтейнера. Применяется политика конфиденциальности Formspree.
3. **Service worker.** Скрипт `sw.js` кеширует HTML, CSS, JS и изображения **локально в вашем браузере**, чтобы сайт работал офлайн. Ничего никуда не отправляется.

## Что *не* собирается

- Google Analytics, Plausible, Fathom или любые другие аналитические теги.
- Cookie любого вида. Сайт не устанавливает их.
- Local storage или IndexedDB сверх кеша service worker.
- Фингерпринтинг, рекламные сети или сторонние трекеры.

## Ваши права

Если вы использовали контактную форму и хотите удалить ваше сообщение, напишите мне с того же адреса, и я удалю его в течение 30 дней.

[Читать условия использования →](/ru/usloviya/) · [Связаться →](/ru/kontakt/)
