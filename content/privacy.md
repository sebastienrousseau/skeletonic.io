---
title: "Privacy"
name: "Skeletonic Stylus"
description: "What data skeletonic.io collects, why, and how to opt out."
layout: page
permalink: https://skeletonic.io/privacy/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "privacy, gdpr, cookies, no tracking"
---

## TL;DR

> **skeletonic.io does not set tracking cookies and does not run a
> third-party analytics tag.** The site is a static set of HTML, CSS,
> and a single service-worker file. No request you make is logged
> beyond the standard GitHub Pages access logs.

<hr class="hr-text" data-content="Details">

## What data is collected

1. **GitHub Pages access logs.** When you load any page, GitHub records
   your IP address, the request URL, and the time. GitHub's privacy
   policy applies — see
   [docs.github.com/en/site-policy](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
2. **The contact form.** If you submit the form on `/contact/`, the
   data goes through [Formspree](https://formspree.io), which forwards
   it to the maintainer's email. Formspree's privacy policy applies.
3. **Service worker.** The `sw.js` script caches HTML, CSS, JS, and
   image responses **locally in your browser** so the site works
   offline. Nothing is sent anywhere.

## What is *not* collected

- ❌ Google Analytics, Plausible, Fathom, or any other analytics tag.
- ❌ Cookies of any kind. The site sets none.
- ❌ Local storage or IndexedDB beyond the service-worker cache.
- ❌ Fingerprinting, ad networks, or third-party trackers.

## Your rights

If you've used the contact form and would like your message deleted,
email me from the address you submitted with and I will purge it within
30 days.

[Read the terms →](/terms/) · [Get in touch →](/contact/)
