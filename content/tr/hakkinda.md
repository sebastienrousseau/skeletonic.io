---
title: "Skeletonic Stylus Hakkinda"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus, erisilebilir, hizli ve moduler arayuz stillemesi icin olusturulmus acik kaynakli bir Stylus CSS kutuphanesidir."
layout: page
permalink: https://skeletonic.io/tr/hakkinda/
date: 2026-04-08
author: Sebastien Rousseau
language: tr
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, hakkinda, stylus, css framework, felsefe"
---

<p class="badges">
  <img alt="GitHub Yildizlari" src="https://img.shields.io/github/stars/sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Stars" height="28" loading="lazy">
  <img alt="Aylik Indirmeler" src="https://img.shields.io/npm/dm/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Downloads" height="28" loading="lazy">
  <img alt="npm Surumu" src="https://img.shields.io/npm/v/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=npm" height="28" loading="lazy">
  <img alt="Paket Boyutu" src="https://img.shields.io/badge/gzipped-7.5%20KB-brightgreen?style=for-the-badge" height="28" loading="lazy">
  <img alt="Lisans" src="https://img.shields.io/npm/l/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=License" height="28" loading="lazy">
  <img alt="WCAG" src="https://img.shields.io/badge/WCAG-2.2%20AA-2e7d32?style=for-the-badge" height="28" loading="lazy">
</p>

## Kisa ozet

**Skeletonic Stylus**, erisilebilir, hizli ve moduler arayuz stillemesi
icin olusturulmus acik kaynakli bir
[Stylus](https://stylus-lang.com) CSS kutuphanesidir.

2018'de, gercek bir bilesen kutuphanesinin ergonomisinden vazgecmeden
**daha az CSS gondermek** uzerine kisisel bir deney olarak dogdu. Sekiz
yil sonra hedef degismedi.

## Size ne saglar

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="Yildirim" width="64" height="64" loading="lazy" decoding="async">
    <h3>Son derece hizli</h3>
    <p>Duyarli arayuzleri dakikalar icinde tasarlayin ve ozellestirin. Yerel CSS degiskenleri, onceden tanimlanmis siniflar, her semantik HTML ogesini kapsayan 12 sutunlu izgara.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="Tuy" width="64" height="64" loading="lazy" decoding="async">
    <h3>Hafif</h3>
    <p>~7,5&nbsp;KB gzipped. Sayfalar daha hizli yuklenir. Tum temel yapi taslari yerinde kalir.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="Duyarli cihazlar" width="64" height="64" loading="lazy" decoding="async">
    <h3>Duyarli tasarim</h3>
    <p>Masaustu ve mobil icin ozenle hazirlanmistir. Duzenler her cihaza uyum saglar. Dokunmatik optimize, bastan sona semantik HTML.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="Erisilebilirlik simgesi" width="64" height="64" loading="lazy" decoding="async">
    <h3>Erisilebilirlik</h3>
    <p>WCAG&nbsp;2.2 yerlesik: focus-visible halkalari, AA kontrast, atlama baglantisi yardimcilari, klavye dostu bilesenler, azaltilmis hareket destegi — ekstra stil sayfasi yok, <code>aria-*</code> sablonu yok.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="Bilesen bloklari" width="64" height="64" loading="lazy" decoding="async">
    <h3>Bilesen kutuphanesi</h3>
    <p>Moduler CSS bilesenleri ve Stylus mixin'leri. Butonlar, formlar, kartlar, uyarilar, rozetler, paletler ve animasyonlar — temiz, moduler, kullanima hazir.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="GitHub logosu" width="64" height="64" loading="lazy" decoding="async">
    <h3>Ucretsiz ve acik kaynak</h3>
    <p>Sebastien Rousseau tarafindan tasarlanmis, gelistirilmis ve bakimi yapilmaktadir. <strong>MIT</strong> veya <strong>Apache&nbsp;2.0</strong> cift lisansli. Ticari kullanim dahil ucret yok, lisans maliyeti yok.</p>
  </article>
</div>

## Nasil karsilastirilir

Tek bir barindirilan stil sayfasi tipografi, butonlar, formlar, kartlar,
tablolar, paletler, animasyonlar ve yardimci siniflari kapsar. JavaScript
yok. Derleme adimi gerekmez. Bootstrap, Tailwind veya Bulma'ya bagimlilik
yok.

| Ozellik | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| Gzipped boyut | **~7,5&nbsp;KB** | ~30&nbsp;KB | ~10&nbsp;KB (varies) | ~30&nbsp;KB |
| WCAG 2.2 uyumlulugu | **Yerlesik** | Kismi | Manuel | Kismi |
| Cascade layers | **Evet (`@layer`)** | Hayir | Hayir | Hayir |
| Karanlik mod | **`prefers-color-scheme`** | Istege bagli | Sinif tabanli | Istege bagli |
| JavaScript gerekli | **Hayir** | Evet (Popper) | Hayir | Hayir |
| CycloneDX SBOM | **Evet** | Hayir | Hayir | Hayir |
| Azaltilmis hareket | **Desteklenir** | Kismi | Manuel | Kismi |
| Lisans | MIT veya Apache 2.0 | MIT | MIT | MIT |

## Ilkeler

1. **Erisilebilirlik taban, tavan degil.** WCAG 2.2 uyumlulugu her
   bilesene yerlesiktir, asla bir "tema" olarak sonradan eklenmez.
2. **Baytlar onemlidir.** Tek gonderilen stil sayfasi sayfa agirligi
   butcenizi asmamaldir. 8&nbsp;KB gzipped tavani CI'da zorunlu kilindi.
3. **Cascade layer'lar ozgunluk savaslarini yener.** Herhangi bir seyi
   guvenle gecersiz kilin — `!important` yok, DOM sirasi hileleri yok.
4. **Stylus hala iyidir.** Ozlu, ifadeli ve kutuphanenin ~3.000 okunabilir
   satirda kalmasini saglar.
5. **Sikici olmak bir ozelliktir.** JS bagimliligi yok. Derleme zamani
   sihri yok. Kirici yeniden adlandirma yok. Tam olarak soylediklerini
   yapan CSS siniflari.
6. **Saniyeler icinde temalayin.** Renkler, bosluklar, yazi tipi ve
   yaricap icin yerel CSS ozel ozellikleri.
7. **Tedarik zinciri guclenmis.** Imzali npm provenance. Sabitlenmis
   Dependabot guncellemeleri. CVE-2023-44270 override'lar ile yamali.

## Surumleme ve semver

Skeletonic Stylus, [Semantik Surumleme 2.0](https://semver.org) standartlarini takip eder.

| Artis | Ne zaman | Ornek |
|---|---|---|
| **Major** | Genel bir sinifi, mixin'i veya token'i kaldirma veya yeniden adlandirma | 1.x → 2.0 |
| **Minor** | Yeni bir bilesen, mixin veya token ekleme | 1.1 → 1.2 |
| **Patch** | Hata duzeltmeleri, a11y iyilestirmeleri, performans, guvenlik | 1.1.6 → 1.1.7 |

Tum genel sinif adlari, tum CSS ozel ozellikleri ve tum ihrac edilen
Stylus mixin'leri genel API'nin parcasidir. Kirici bir degisiklik major
artis ve bir gecis rehberi gerektirir.

## Yonetim

Skeletonic Stylus, [Sebastien Rousseau](https://sebastienrousseau.com)
tarafindan tasarlanmis, gelistirilmis ve bakimi yapilmaktadir.
[MIT](https://opensource.org/licenses/MIT) ve
[Apache 2.0](https://opensource.org/licenses/Apache-2.0) cift lisanslidir.

Sorunlar, fikirler ve katkilar memnuniyetle karsilanir —
[katki rehberine bakin](/tr/katki/).
