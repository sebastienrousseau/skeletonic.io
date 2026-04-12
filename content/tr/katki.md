---
title: "Katki Saglama"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus'a sorun bildirme, degisiklik onerme ve pull request gonderme rehberi."
layout: page
permalink: https://skeletonic.io/tr/katki/
date: 2026-04-08
author: Sebastien Rousseau
language: tr
theme_color: "hsl(210, 100%, 42%)"
keywords: "katki, acik kaynak, pull request, sorun, kurallar"
---

Skeletonic Stylus acik kaynakli bir projedir; yazim hatasi
duzeltmelerinden yeni bilesenlere kadar her boyutta katki
memnuniyetle karsilanir.

<hr class="hr-text" data-content="Hizli baslangic">

## Hizli baslangic

```bash
# 1. Fork ve klonlama
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. Kurulum (pnpm via corepack)
corepack enable
pnpm install

# 3. Derleme
pnpm run build           # tam pipeline (stylus → prettier → stylelint → autoprefixer → csso)

# 4. Lint ve test
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="Kurallar">

## Kurallar

- **Dal adlari:** `feat/kisa-aciklama`, `fix/kisa-aciklama`, `docs/kisa-aciklama`.
- **Commit'ler:** [Conventional Commits](https://www.conventionalcommits.org).
  Tum commit'ler imzalidir.
- **Stylus:** 4 bosluk girintisi, noktali virgul yok, sihirli sayilar
  yerine `$variables` tercih edilir, her genel sinif bir cascade layer
  icinde bulunur.
- **Erisilebilirlik:** her yeni bilesen WCAG 2.2 AA'yi kanitlanabilir
  sekilde karsilamalidir; PR acmadan once vitrine karsi
  `node scripts/a11y-test.mjs` calistirin.
- **Boyut butcesi:** cekirdek stil sayfasi **8 KB gzipped** altinda
  kalmalidir. Degisilkiginiz bunu asarsa, PR'da gerekcelendirin.

<hr class="hr-text" data-content="Pull request'ler">

## Pull request'ler

1. Onemli her sey icin once bir sorun acin — gereksiz isi onler.
2. PR'lari odakli tutun: PR basina tek bir mantiksal degisiklik.
3. `CHANGELOG.md` dosyasini "Unreleased" altinda guncelleyin.
4. Inceleme istemeden once CI'nin yesil oldugundan emin olun.
5. Squash-merge varsayilandir; commit mesajlari birlestirme sirasinda temizlenir.

<hr class="hr-text" data-content="Davranis kurallari">

## Davranis kurallari

Katilimda bulunarak
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)
kurallarini kabul etmis sayilirsiniz. Nazik olun, sabir gosterin, iyi
niyet varsayin.

[Sorun acin ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[PR acin ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
