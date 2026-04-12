"use strict";

/**
 * skeletonic.io — main client script.
 *
 * Responsibilities:
 *   1. Theme toggle (light/dark with localStorage persistence).
 *   2. Mobile hamburger menu.
 *   3. Resources dropdown.
 *   4. Language switcher menu.
 *   5. Search overlay (Ctrl+K / ⌘K) with indexed pages.
 *   6. Copy-to-clipboard buttons on every <pre> block.
 *
 * Zero analytics, zero trackers, zero third-party network calls.
 */

// ----- 1. Theme toggle ----------------------------------------------------
(() => {
  const STORAGE_KEY = "theme";
  const root = document.documentElement;

  const setIconVisibility = (theme) => {
    const isDark = theme === "dark";
    document.querySelectorAll(".theme-icon-dark").forEach((el) => {
      el.style.display = isDark ? "none" : "";
    });
    document.querySelectorAll(".theme-icon-light").forEach((el) => {
      el.style.display = isDark ? "" : "none";
    });
  };

  const updateToggleButtons = (theme) => {
    const isDark = theme === "dark";
    document.querySelectorAll("#themeToggle").forEach((btn) => {
      const label = isDark ? (btn.dataset.labelLight || "Light") : (btn.dataset.labelDark || "Dark");
      const aria = isDark ? (btn.dataset.ariaLight || "Switch to light mode") : (btn.dataset.ariaDark || "Switch to dark mode");
      btn.querySelector(".theme-label").textContent = label;
      btn.setAttribute("aria-label", aria);
    });
  };

  const applyTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (_e) { /* storage unavailable */ }
    setIconVisibility(theme);
    updateToggleButtons(theme);
  };

  let stored;
  try { stored = localStorage.getItem(STORAGE_KEY); } catch (_e) { /* storage unavailable */ }
  if (stored) {
    applyTheme(stored);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    applyTheme("dark");
  }

  document.querySelectorAll("#themeToggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });
  });
})();

// ----- 2. Mobile hamburger ------------------------------------------------
(() => {
  const toggle = document.getElementById("navToggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) { return; }
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
})();

// ----- 3. Resources dropdown ----------------------------------------------
(() => {
  document.querySelectorAll("[data-dropdown]").forEach((dd) => {
    const btn = dd.querySelector(".dropdown-toggle");
    if (!btn) { return; }
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = dd.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
    });
  });
  document.addEventListener("click", () => {
    document.querySelectorAll("[data-dropdown].open").forEach((dd) => {
      dd.classList.remove("open");
      const btn = dd.querySelector(".dropdown-toggle");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
  });
})();

// ----- 4. Language switcher -----------------------------------------------
(() => {
  document.querySelectorAll(".lang-switcher").forEach((sw) => {
    const btn = sw.querySelector("button");
    const menu = sw.querySelector(".lang-menu");
    if (!btn || !menu) { return; }
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = menu.style.display === "block";
      menu.style.display = open ? "none" : "block";
      btn.setAttribute("aria-expanded", String(!open));
    });
    document.addEventListener("click", () => {
      menu.style.display = "none";
      btn.setAttribute("aria-expanded", "false");
    });
    menu.addEventListener("click", (e) => e.stopPropagation());
  });
})();

// ----- 5. Search overlay --------------------------------------------------
(() => {
  const overlay = document.getElementById("searchOverlay");
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");
  const trigger = document.getElementById("searchTrigger");
  if (!overlay || !input || !results) { return; }

  const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent || "");
  document.querySelectorAll(".search-shortcut").forEach((el) => {
    el.textContent = isMac ? "⌘K" : "Ctrl+K";
  });

  // Locale-aware search: detect lang from <html lang="…">, prefix URLs,
  // and use translated titles/descriptions when available.
  const lang = document.documentElement.getAttribute("lang") || "en";
  const prefix = lang === "en" ? "" : "/" + lang;

  const i18n = {
    en: [
      { t: "Home",            d: "Skeletonic Stylus — accessible CSS, ~7.5 KB gzipped",                   u: "/" },
      { t: "About",           d: "What is Skeletonic Stylus, history, philosophy, semver promise",        u: "/about/" },
      { t: "Getting Started", d: "Install via npm/pnpm/yarn or CDN, importing in Stylus",                 u: "/getting-started/" },
      { t: "Components",      d: "Buttons, badges, alerts, cards, forms, grid, navbar",                   u: "/components/" },
      { t: "Palettes",        d: "Material, Tachyons and WebSafe colour palette demos",                   u: "/palettes/" },
      { t: "Animations",      d: "Reduced-motion-aware animation utilities",                              u: "/animations/" },
      { t: "Accessibility",   d: "WCAG 2.2 features: focus-visible, contrast, skip-links, mixins",        u: "/accessibility/" },
      { t: "Changelog",       d: "Full v1.1.7 release notes and prior version history",                   u: "/changelog/" },
      { t: "Security",        d: "SBOM, size budgets, CVE-2023-44270 fix, supply-chain hardening",        u: "/security/" },
      { t: "Contribute",      d: "How to contribute, CONTRIBUTING.md, GitHub link",                       u: "/contribute/" },
      { t: "Contact",         d: "Get in touch via the contact form",                                     u: "/contact/" },
      { t: "Privacy",         d: "Privacy policy",                                                        u: "/privacy/" },
      { t: "Terms",           d: "Terms of use",                                                          u: "/terms/" },
    ],
    fr: [
      { t: "Accueil",          d: "Skeletonic Stylus — CSS accessible, ~7,5 Ko gzippé",                    u: "/" },
      { t: "À propos",         d: "Skeletonic Stylus : historique, philosophie, promesse semver",           u: "/a-propos/" },
      { t: "Premiers pas",     d: "Installer via npm/pnpm/yarn ou CDN, importer dans Stylus",              u: "/premiers-pas/" },
      { t: "Composants",       d: "Boutons, badges, alertes, cartes, formulaires, grille, navbar",         u: "/composants/" },
      { t: "Palettes",         d: "Démos des palettes Material, Tachyons et web-safe",                     u: "/palettes/" },
      { t: "Animations",       d: "Animations CSS protégées par prefers-reduced-motion",                   u: "/animations/" },
      { t: "Accessibilité",    d: "WCAG 2.2 : focus-visible, contraste, liens d'évitement, mixins",       u: "/accessibilite/" },
      { t: "Changelog",        d: "Notes de version v1.1.7 et historique complet",                         u: "/journal/" },
      { t: "Sécurité",         d: "SBOM, budgets de taille, CVE-2023-44270, chaîne d'approvisionnement",  u: "/securite/" },
      { t: "Contribuer",       d: "Comment contribuer, guide de contribution, lien GitHub",                u: "/contribuer/" },
      { t: "Contact",          d: "Envoyer un message via le formulaire de contact",                       u: "/contact/" },
      { t: "Confidentialité",  d: "Politique de confidentialité",                                          u: "/confidentialite/" },
      { t: "Conditions",       d: "Conditions d'utilisation",                                              u: "/conditions/" },
    ],
    de: [
      { t: "Startseite",        d: "Skeletonic Stylus — barrierefreies CSS, ~7,5 KB gzippt",               u: "/" },
      { t: "Über uns",          d: "Was ist Skeletonic Stylus, Geschichte, Philosophie, Semver-Versprechen", u: "/ueber-uns/" },
      { t: "Erste Schritte",    d: "Installation via npm/pnpm/yarn oder CDN, Import in Stylus",             u: "/erste-schritte/" },
      { t: "Komponenten",       d: "Buttons, Badges, Alerts, Cards, Formulare, Grid, Navbar",               u: "/komponenten/" },
      { t: "Paletten",          d: "Material-, Tachyons- und WebSafe-Farbpaletten-Demos",                   u: "/paletten/" },
      { t: "Animationen",       d: "Animationen mit prefers-reduced-motion-Unterstützung",                  u: "/animationen/" },
      { t: "Barrierefreiheit",  d: "WCAG 2.2: focus-visible, Kontrast, Sprunglinks, Mixins",                u: "/barrierefreiheit/" },
      { t: "Änderungsprotokoll", d: "Vollständige v1.1.7-Versionshinweise und Versionshistorie",            u: "/aenderungsprotokoll/" },
      { t: "Sicherheit",        d: "SBOM, Größenbudgets, CVE-2023-44270, Lieferkettenhärtung",              u: "/sicherheit/" },
      { t: "Mitwirken",         d: "Beitragen, CONTRIBUTING.md, GitHub-Link",                               u: "/mitwirken/" },
      { t: "Kontakt",           d: "Kontaktformular",                                                       u: "/kontakt/" },
      { t: "Datenschutz",       d: "Datenschutzerklärung",                                                  u: "/datenschutz/" },
      { t: "Nutzungsbedingungen", d: "Nutzungsbedingungen",                                                 u: "/nutzungsbedingungen/" },
    ],
    ar: [
      { t: "\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",           d: "Skeletonic Stylus \u2014 CSS \u0645\u062a\u0627\u062d\u060c ~7.5 KB gzipped",                         u: "/" },
      { t: "\u062d\u0648\u0644",                d: "Skeletonic Stylus: \u0627\u0644\u062a\u0627\u0631\u064a\u062e\u060c \u0627\u0644\u0641\u0644\u0633\u0641\u0629\u060c \u0648\u0639\u062f semver",                       u: "/hawla/" },
      { t: "\u0627\u0644\u0628\u062f\u0627\u064a\u0629",             d: "\u0627\u0644\u062a\u062b\u0628\u064a\u062a \u0639\u0628\u0631 npm/pnpm/yarn \u0623\u0648 CDN",                                    u: "/al-bidaya/" },
      { t: "\u0627\u0644\u0645\u0643\u0648\u0651\u0646\u0627\u062a",          d: "\u0623\u0632\u0631\u0627\u0631\u060c \u0634\u0627\u0631\u0627\u062a\u060c \u062a\u0646\u0628\u064a\u0647\u0627\u062a\u060c \u0628\u0637\u0627\u0642\u0627\u062a\u060c \u0646\u0645\u0627\u0630\u062c\u060c \u0634\u0628\u0643\u0629",                           u: "/al-mukawwinat/" },
      { t: "\u0627\u0644\u0623\u0644\u0648\u0627\u0646",            d: "\u0639\u0631\u0648\u0636 Material \u0648Tachyons \u0648WebSafe",                                        u: "/al-alwan/" },
      { t: "\u0627\u0644\u062d\u0631\u0643\u0627\u062a",           d: "\u0623\u062f\u0648\u0627\u062a \u062d\u0631\u0643\u0629 \u0645\u0639 \u062f\u0639\u0645 prefers-reduced-motion",                          u: "/al-harakaat/" },
      { t: "\u0625\u0645\u0643\u0627\u0646\u064a\u0629 \u0627\u0644\u0648\u0635\u0648\u0644",    d: "WCAG 2.2: focus-visible\u060c \u0627\u0644\u062a\u0628\u0627\u064a\u0646\u060c \u0631\u0648\u0627\u0628\u0637 \u0627\u0644\u062a\u062e\u0637\u064a",                              u: "/imkaniyyat-al-wusul/" },
      { t: "\u0633\u062c\u0644 \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a",      d: "\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u0625\u0635\u062f\u0627\u0631 v1.1.7 \u0648\u0627\u0644\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0643\u0627\u0645\u0644",                                u: "/sijil-al-taghyirat/" },
      { t: "\u0627\u0644\u0623\u0645\u0627\u0646",              d: "SBOM\u060c \u0645\u064a\u0632\u0627\u0646\u064a\u0627\u062a \u0627\u0644\u062d\u062c\u0645\u060c CVE-2023-44270",                                 u: "/al-aman/" },
      { t: "\u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629",           d: "\u0643\u064a\u0641\u064a\u0629 \u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629\u060c GitHub",                                                u: "/al-musahama/" },
      { t: "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627",           d: "\u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629 \u0639\u0628\u0631 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u0627\u062a\u0635\u0627\u0644",                                       u: "/ittisal/" },
      { t: "\u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629",          d: "\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629",                                                       u: "/al-khususiyya/" },
      { t: "\u0627\u0644\u0634\u0631\u0648\u0637",             d: "\u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",                                                          u: "/al-shurut/" },
    ],
    bn: [
      { t: "\u09b9\u09cb\u09ae",               d: "Skeletonic Stylus \u2014 \u09aa\u09cd\u09b0\u09ac\u09c7\u09b6\u09af\u09cb\u0997\u09cd\u09af CSS, ~7.5 KB gzipped",                      u: "/" },
      { t: "\u09b8\u09ae\u09cd\u09aa\u09b0\u09cd\u0995\u09c7",            d: "Skeletonic Stylus: \u0987\u09a4\u09bf\u09b9\u09be\u09b8, \u09a6\u09b0\u09cd\u09b6\u09a8, semver \u09aa\u09cd\u09b0\u09a4\u09bf\u09b6\u09cd\u09b0\u09c1\u09a4\u09bf",                       u: "/somporke/" },
      { t: "\u09b6\u09c1\u09b0\u09c1",               d: "npm/pnpm/yarn \u09ac\u09be CDN \u09a6\u09bf\u09df\u09c7 \u0987\u09a8\u09b8\u09cd\u099f\u09b2 \u0995\u09b0\u09c1\u09a8",                                     u: "/shuru/" },
      { t: "\u0989\u09aa\u09be\u09a6\u09be\u09a8",             d: "\u09ac\u09be\u099f\u09a8, \u09ac\u09cd\u09af\u09be\u099c, \u09b8\u09a4\u09b0\u09cd\u0995\u09a4\u09be, \u0995\u09be\u09b0\u09cd\u09a1, \u09ab\u09b0\u09cd\u09ae, \u0997\u09cd\u09b0\u09bf\u09a1",                              u: "/upadan/" },
      { t: "\u09b0\u0999 \u09aa\u09cd\u09af\u09be\u09b2\u09c7\u099f",         d: "Material, Tachyons \u098f\u09ac\u0982 WebSafe \u09aa\u09cd\u09af\u09be\u09b2\u09c7\u099f \u09a1\u09c7\u09ae\u09cb",                         u: "/rong-palat/" },
      { t: "\u0985\u09cd\u09af\u09be\u09a8\u09bf\u09ae\u09c7\u09b6\u09a8",         d: "prefers-reduced-motion \u09b8\u09b9 \u0985\u09cd\u09af\u09be\u09a8\u09bf\u09ae\u09c7\u09b6\u09a8 \u099f\u09c1\u09b2",                        u: "/animations/" },
      { t: "\u09aa\u09cd\u09b0\u09ac\u09c7\u09b6\u09be\u09a7\u09bf\u0995\u09be\u09b0",       d: "WCAG 2.2: focus-visible, \u0995\u09a8\u09cd\u099f\u09cd\u09b0\u09be\u09b8\u09cd\u099f, \u09b8\u09cd\u0995\u09bf\u09aa \u09b2\u09bf\u0982\u0995",                           u: "/probeshadhikar/" },
      { t: "\u09aa\u09b0\u09bf\u09ac\u09b0\u09cd\u09a4\u09a8 \u09a4\u09be\u09b2\u09bf\u0995\u09be",     d: "v1.1.7 \u09b0\u09bf\u09b2\u09bf\u099c \u09a8\u09cb\u099f \u098f\u09ac\u0982 \u09aa\u09c2\u09b0\u09cd\u09ac\u09ac\u09b0\u09cd\u09a4\u09c0 \u09b8\u0982\u09b8\u09cd\u0995\u09b0\u09a3 \u0987\u09a4\u09bf\u09b9\u09be\u09b8",                     u: "/poriborton-talika/" },
      { t: "\u09a8\u09bf\u09b0\u09be\u09aa\u09a4\u09cd\u09a4\u09be",           d: "SBOM, \u0986\u0995\u09be\u09b0 \u09ac\u09be\u099c\u09c7\u099f, CVE-2023-44270",                                      u: "/nirapotta/" },
      { t: "\u0985\u09ac\u09a6\u09be\u09a8",             d: "\u0995\u09bf\u09ad\u09be\u09ac\u09c7 \u0985\u09ac\u09a6\u09be\u09a8 \u09b0\u09be\u0996\u09ac\u09c7\u09a8, GitHub",                                        u: "/yogdan/" },
      { t: "\u09af\u09cb\u0997\u09be\u09af\u09cb\u0997",           d: "\u09af\u09cb\u0997\u09be\u09af\u09cb\u0997 \u09ab\u09b0\u09cd\u09ae\u09c7\u09b0 \u09ae\u09be\u09a7\u09cd\u09af\u09ae\u09c7 \u09ac\u09be\u09b0\u09cd\u09a4\u09be \u09aa\u09be\u09a0\u09be\u09a8",                                 u: "/jogajog/" },
      { t: "\u0997\u09cb\u09aa\u09a8\u09c0\u09df\u09a4\u09be",          d: "\u0997\u09cb\u09aa\u09a8\u09c0\u09df\u09a4\u09be \u09a8\u09c0\u09a4\u09bf",                                                        u: "/goponioyota/" },
      { t: "\u09b6\u09b0\u09cd\u09a4\u09be\u09ac\u09b2\u09c0",           d: "\u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0\u09c7\u09b0 \u09b6\u09b0\u09cd\u09a4\u09be\u09ac\u09b2\u09c0",                                                       u: "/shartaboli/" },
    ],
    cs: [
      { t: "Dom\u016f",              d: "Skeletonic Stylus \u2014 p\u0159\u00edstupn\u00e9 CSS, ~7,5 KB gzipov\u00e1no",                    u: "/" },
      { t: "O projektu",        d: "Co je Skeletonic Stylus, historie, filozofie, semver",              u: "/o-projektu/" },
      { t: "Za\u010d\u00e1tek",          d: "Instalace p\u0159es npm/pnpm/yarn nebo CDN, import do Stylus",            u: "/zacatek/" },
      { t: "Komponenty",        d: "Tla\u010d\u00edtka, odznaky, alerty, karty, formul\u00e1\u0159e, grid, navbar",     u: "/komponenty/" },
      { t: "Palety",            d: "Uk\u00e1zky palet Material, Tachyons a WebSafe",                       u: "/palety/" },
      { t: "Animace",           d: "Animace s podporou prefers-reduced-motion",                      u: "/animace/" },
      { t: "P\u0159\u00edstupnost",      d: "WCAG 2.2: focus-visible, kontrast, p\u0159eskakovac\u00ed odkazy, mixiny",  u: "/pristupnost/" },
      { t: "Zm\u011bny",             d: "Kompletn\u00ed pozn\u00e1mky k verzi v1.1.7 a historie verz\u00ed",           u: "/zmeny/" },
      { t: "Bezpe\u010dnost",        d: "SBOM, rozpo\u010dty velikosti, CVE-2023-44270",                        u: "/bezpecnost/" },
      { t: "P\u0159isp\u011bt",          d: "Jak p\u0159isp\u011bt, CONTRIBUTING.md, odkaz na GitHub",                  u: "/prispet/" },
      { t: "Kontakt",           d: "Kontaktn\u00ed formul\u00e1\u0159",                                                u: "/kontakt/" },
      { t: "Soukrom\u00ed",          d: "Z\u00e1sady ochrany osobn\u00edch \u00fadaj\u016f",                                           u: "/soukromi/" },
      { t: "Podm\u00ednky",          d: "Podm\u00ednky pou\u017eit\u00ed",                                                     u: "/podminky/" },
    ],
    es: [
      { t: "Inicio",            d: "Skeletonic Stylus \u2014 CSS accesible, ~7,5 KB gzipped",               u: "/" },
      { t: "Acerca de",         d: "Qu\u00e9 es Skeletonic Stylus, historia, filosof\u00eda, semver",           u: "/acerca-de/" },
      { t: "Primeros pasos",    d: "Instalar v\u00eda npm/pnpm/yarn o CDN, importar en Stylus",              u: "/primeros-pasos/" },
      { t: "Componentes",       d: "Botones, badges, alertas, tarjetas, formularios, grid, navbar",   u: "/componentes/" },
      { t: "Paletas",           d: "Demos de paletas Material, Tachyons y WebSafe",                   u: "/paletas/" },
      { t: "Animaciones",       d: "Animaciones con soporte prefers-reduced-motion",                  u: "/animaciones/" },
      { t: "Accesibilidad",     d: "WCAG 2.2: focus-visible, contraste, enlaces de salto, mixins",    u: "/accesibilidad/" },
      { t: "Registro de cambios", d: "Notas de la versi\u00f3n v1.1.7 e historial completo",              u: "/registro-de-cambios/" },
      { t: "Seguridad",         d: "SBOM, presupuestos de tama\u00f1o, CVE-2023-44270",                      u: "/seguridad/" },
      { t: "Contribuir",        d: "C\u00f3mo contribuir, CONTRIBUTING.md, enlace a GitHub",                  u: "/contribuir/" },
      { t: "Contacto",          d: "Enviar un mensaje a trav\u00e9s del formulario de contacto",               u: "/contacto/" },
      { t: "Privacidad",        d: "Pol\u00edtica de privacidad",                                              u: "/privacidad/" },
      { t: "T\u00e9rminos",          d: "T\u00e9rminos de uso",                                                     u: "/terminos/" },
    ],
    fil: [
      { t: "Home",              d: "Skeletonic Stylus \u2014 accessible na CSS, ~7.5 KB gzipped",            u: "/" },
      { t: "Tungkol",           d: "Ano ang Skeletonic Stylus, kasaysayan, pilosopiya, semver",        u: "/tungkol/" },
      { t: "Pagsisimula",       d: "I-install sa pamamagitan ng npm/pnpm/yarn o CDN",                 u: "/pagsisimula/" },
      { t: "Mga Bahagi",        d: "Buttons, badges, alerts, cards, forms, grid, navbar",             u: "/mga-bahagi/" },
      { t: "Mga Paleta",        d: "Mga demo ng Material, Tachyons at WebSafe na paleta",             u: "/mga-paleta/" },
      { t: "Mga Animasyon",     d: "Mga animation na may prefers-reduced-motion",                     u: "/mga-animasyon/" },
      { t: "Aksesibilidad",     d: "WCAG 2.2: focus-visible, contrast, skip links, mixins",           u: "/aksesibilidad/" },
      { t: "Talaan ng Pagbabago", d: "Mga tala ng bersyon v1.1.7 at buong kasaysayan",                u: "/talaan-ng-pagbabago/" },
      { t: "Seguridad",         d: "SBOM, budget sa laki, CVE-2023-44270",                            u: "/seguridad/" },
      { t: "Mag-ambag",         d: "Paano mag-ambag, CONTRIBUTING.md, link sa GitHub",                u: "/mag-ambag/" },
      { t: "Makipag-ugnayan",   d: "Magpadala ng mensahe sa pamamagitan ng contact form",             u: "/makipag-ugnayan/" },
      { t: "Pagkapribado",      d: "Patakaran sa pagkapribado",                                       u: "/pagkapribado/" },
      { t: "Mga Tuntunin",      d: "Mga tuntunin sa paggamit",                                       u: "/mga-tuntunin/" },
    ],
    ha: [
      { t: "Gida",              d: "Skeletonic Stylus \u2014 CSS mai saukin dama, ~7.5 KB gzipped",          u: "/" },
      { t: "Game da",           d: "Me ne Skeletonic Stylus, tarihi, falsafa, semver",                u: "/game-da/" },
      { t: "Fara",              d: "Shigar da ta hanyar npm/pnpm/yarn ko CDN",                        u: "/fara/" },
      { t: "Abubuwan Ha\u0257i",    d: "Maballin, alamun, fa\u0257akarwa, katunan, nau'o'i, grid, navbar",  u: "/abubuwan-hadi/" },
      { t: "Launuka",           d: "Nuna launukan Material, Tachyons da WebSafe",                     u: "/launuka/" },
      { t: "Motsin Rai",        d: "Motsin rai tare da tallafin prefers-reduced-motion",              u: "/motsin-rai/" },
      { t: "Sau\u0199in Dama",       d: "WCAG 2.2: focus-visible, bambanci, tsalle-hanyoyi, mixins",      u: "/samun-dama/" },
      { t: "Tarihin Canje-canje", d: "Cikakken bayanin sigar v1.1.7 da tarihin sigogi",              u: "/tarihin-canje-canje/" },
      { t: "Tsaro",             d: "SBOM, kasafin girma, CVE-2023-44270",                             u: "/tsaro/" },
      { t: "Ba da Gudummawa",   d: "Yadda za a ba da gudummawa, CONTRIBUTING.md, GitHub",             u: "/ba-da-gudummawa/" },
      { t: "Tuntu\u0253i",           d: "Aika sako ta hanyar fomin tuntu\u0253i",                              u: "/tuntubi/" },
      { t: "Sirri",             d: "Manufar sirri",                                                   u: "/sirri/" },
      { t: "Sharu\u0257\u0257a",          d: "Sharu\u0257\u0257an amfani",                                                 u: "/sharudda/" },
    ],
    he: [
      { t: "\u05d3\u05e3 \u05d4\u05d1\u05d9\u05ea",            d: "Skeletonic Stylus \u2014 CSS \u05e0\u05d2\u05d9\u05e9, ~7.5 KB gzipped",                         u: "/" },
      { t: "\u05d0\u05d5\u05d3\u05d5\u05ea",             d: "Skeletonic Stylus: \u05d4\u05d9\u05e1\u05d8\u05d5\u05e8\u05d9\u05d4, \u05e4\u05d9\u05dc\u05d5\u05e1\u05d5\u05e4\u05d9\u05d4, \u05d4\u05d1\u05d8\u05d7\u05ea semver",                u: "/odot/" },
      { t: "\u05d4\u05ea\u05d7\u05dc\u05d4",            d: "\u05d4\u05ea\u05e7\u05e0\u05d4 \u05d3\u05e8\u05da npm/pnpm/yarn \u05d0\u05d5 CDN",                                       u: "/hatkhala/" },
      { t: "\u05e8\u05db\u05d9\u05d1\u05d9\u05dd",            d: "\u05db\u05e4\u05ea\u05d5\u05e8\u05d9\u05dd, \u05ea\u05d2\u05d9\u05dd, \u05d4\u05ea\u05e8\u05d0\u05d5\u05ea, \u05db\u05e8\u05d8\u05d9\u05e1\u05d9\u05dd, \u05d8\u05e4\u05e1\u05d9\u05dd, \u05e8\u05e9\u05ea",                       u: "/rekhivim/" },
      { t: "\u05e4\u05dc\u05d8\u05d5\u05ea",            d: "\u05d4\u05d3\u05d2\u05de\u05d5\u05ea Material, Tachyons \u05d5-WebSafe",                                    u: "/paleta/" },
      { t: "\u05d0\u05e0\u05d9\u05de\u05e6\u05d9\u05d5\u05ea",          d: "\u05d0\u05e0\u05d9\u05de\u05e6\u05d9\u05d5\u05ea \u05e2\u05dd \u05ea\u05de\u05d9\u05db\u05d4 \u05d1-prefers-reduced-motion",                       u: "/animatsyot/" },
      { t: "\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea",           d: "WCAG 2.2: focus-visible, \u05e0\u05d9\u05d2\u05d5\u05d3\u05d9\u05d5\u05ea, \u05e7\u05d9\u05e9\u05d5\u05e8\u05d9 \u05d3\u05d9\u05dc\u05d5\u05d2, mixins",              u: "/negishut/" },
      { t: "\u05d9\u05d5\u05de\u05df \u05e9\u05d9\u05e0\u05d5\u05d9\u05d9\u05dd",       d: "\u05d4\u05e2\u05e8\u05d5\u05ea \u05d2\u05e8\u05e1\u05d4 v1.1.7 \u05d5\u05d4\u05d9\u05e1\u05d8\u05d5\u05e8\u05d9\u05d4 \u05de\u05dc\u05d0\u05d4",                              u: "/yoman-shinuyim/" },
      { t: "\u05d0\u05d1\u05d8\u05d7\u05d4",            d: "SBOM, \u05ea\u05e7\u05e6\u05d9\u05d1\u05d9 \u05d2\u05d5\u05d3\u05dc, CVE-2023-44270",                                   u: "/avtakha/" },
      { t: "\u05ea\u05e8\u05d5\u05de\u05d4",             d: "\u05d0\u05d9\u05da \u05dc\u05ea\u05e8\u05d5\u05dd, CONTRIBUTING.md, GitHub",                                 u: "/truma/" },
      { t: "\u05e6\u05d5\u05e8 \u05e7\u05e9\u05e8",           d: "\u05e9\u05dc\u05d7 \u05d4\u05d5\u05d3\u05e2\u05d4 \u05d3\u05e8\u05da \u05d8\u05d5\u05e4\u05e1 \u05d9\u05e6\u05d9\u05e8\u05ea \u05e7\u05e9\u05e8",                                  u: "/kesher/" },
      { t: "\u05e4\u05e8\u05d8\u05d9\u05d5\u05ea",           d: "\u05de\u05d3\u05d9\u05e0\u05d9\u05d5\u05ea \u05e4\u05e8\u05d8\u05d9\u05d5\u05ea",                                                       u: "/pratiyut/" },
      { t: "\u05ea\u05e0\u05d0\u05d9\u05dd",             d: "\u05ea\u05e0\u05d0\u05d9 \u05e9\u05d9\u05de\u05d5\u05e9",                                                         u: "/tnaim/" },
    ],
    hi: [
      { t: "\u0939\u094b\u092e",               d: "Skeletonic Stylus \u2014 \u0938\u0941\u0932\u092d \u0938\u0940\u090f\u0938\u090f\u0938, ~7.5 KB gzipped",                       u: "/" },
      { t: "\u092a\u0930\u093f\u091a\u092f",            d: "Skeletonic Stylus: \u0907\u0924\u093f\u0939\u093e\u0938, \u0926\u0930\u094d\u0936\u0928, semver \u0935\u091a\u0928",                           u: "/parichay/" },
      { t: "\u0936\u0941\u0930\u0941\u0906\u0924",            d: "npm/pnpm/yarn \u092f\u093e CDN \u0938\u0947 \u0907\u0902\u0938\u094d\u099f\u0949\u0932 \u0915\u0930\u0947\u0902",                                    u: "/shuruat/" },
      { t: "\u0918\u091f\u0915",              d: "\u092c\u091f\u0928, \u092c\u0948\u091c, \u0905\u0932\u0930\u094d\u091f, \u0915\u093e\u0930\u094d\u0921, \u092b\u0949\u0930\u094d\u092e, \u0917\u094d\u0930\u093f\u0921",                                 u: "/ghatak/" },
      { t: "\u0930\u0902\u0917 \u092a\u091f\u094d\u091f\u0940",          d: "Material, Tachyons \u0914\u0930 WebSafe \u092a\u0948\u0932\u0947\u091f \u0921\u0947\u092e\u094b",                           u: "/rang-patti/" },
      { t: "\u090f\u0928\u093f\u092e\u0947\u0936\u0928",          d: "prefers-reduced-motion \u0938\u092e\u0930\u094d\u0925\u093f\u0924 \u090f\u0928\u093f\u092e\u0947\u0936\u0928 \u091f\u0942\u0932",                       u: "/animations/" },
      { t: "\u0938\u0941\u0932\u092d\u0924\u093e",           d: "WCAG 2.2: focus-visible, \u0915\u0949\u0928\u094d\u091f\u094d\u0930\u093e\u0938\u094d\u091f, \u0938\u094d\u0915\u093f\u092a \u0932\u093f\u0902\u0915, mixins",              u: "/sulabhata/" },
      { t: "\u092a\u0930\u093f\u0935\u0930\u094d\u0924\u0928 \u0932\u0949\u0917",       d: "v1.1.7 \u0930\u093f\u0932\u0940\u091c\u093c \u0928\u094b\u091f\u094d\u0938 \u0914\u0930 \u092a\u0942\u0930\u094d\u0923 \u0938\u0902\u0938\u094d\u0915\u0930\u0923 \u0907\u0924\u093f\u0939\u093e\u0938",                      u: "/parivartan-log/" },
      { t: "\u0938\u0941\u0930\u0915\u094d\u0937\u093e",           d: "SBOM, \u0906\u0915\u093e\u0930 \u092c\u091c\u091f, CVE-2023-44270",                                       u: "/suraksha/" },
      { t: "\u092f\u094b\u0917\u0926\u093e\u0928",            d: "\u0915\u0948\u0938\u0947 \u092f\u094b\u0917\u0926\u093e\u0928 \u0915\u0930\u0947\u0902, CONTRIBUTING.md, GitHub",                         u: "/yogdan/" },
      { t: "\u0938\u0902\u092a\u0930\u094d\u0915",            d: "\u0938\u0902\u092a\u0930\u094d\u0915 \u092b\u0949\u0930\u094d\u092e \u0915\u0947 \u092e\u093e\u0927\u094d\u092f\u092e \u0938\u0947 \u0938\u0902\u0926\u0947\u0936 \u092d\u0947\u091c\u0947\u0902",                              u: "/sampark/" },
      { t: "\u0917\u094b\u092a\u0928\u0940\u092f\u0924\u093e",          d: "\u0917\u094b\u092a\u0928\u0940\u092f\u0924\u093e \u0928\u0940\u0924\u093f",                                                        u: "/gopaniyata/" },
      { t: "\u0928\u093f\u092f\u092e",              d: "\u0909\u092a\u092f\u094b\u0917 \u0915\u0940 \u0936\u0930\u094d\u0924\u0947\u0902",                                                        u: "/niyam/" },
    ],
    id: [
      { t: "Beranda",           d: "Skeletonic Stylus \u2014 CSS aksesibel, ~7,5 KB gzipped",             u: "/" },
      { t: "Tentang",           d: "Apa itu Skeletonic Stylus, sejarah, filosofi, semver",            u: "/tentang/" },
      { t: "Memulai",           d: "Instalasi via npm/pnpm/yarn atau CDN, impor di Stylus",           u: "/memulai/" },
      { t: "Komponen",          d: "Tombol, badge, alert, kartu, formulir, grid, navbar",              u: "/komponen/" },
      { t: "Palet",             d: "Demo palet Material, Tachyons dan WebSafe",                        u: "/palet/" },
      { t: "Animasi",           d: "Animasi dengan dukungan prefers-reduced-motion",                   u: "/animasi/" },
      { t: "Aksesibilitas",     d: "WCAG 2.2: focus-visible, kontras, skip links, mixins",            u: "/aksesibilitas/" },
      { t: "Catatan Perubahan", d: "Catatan rilis v1.1.7 dan riwayat versi lengkap",                  u: "/catatan-perubahan/" },
      { t: "Keamanan",          d: "SBOM, anggaran ukuran, CVE-2023-44270",                            u: "/keamanan/" },
      { t: "Kontribusi",        d: "Cara berkontribusi, CONTRIBUTING.md, GitHub",                      u: "/kontribusi/" },
      { t: "Kontak",            d: "Kirim pesan melalui formulir kontak",                              u: "/kontak/" },
      { t: "Privasi",           d: "Kebijakan privasi",                                                u: "/privasi/" },
      { t: "Ketentuan",         d: "Ketentuan penggunaan",                                             u: "/ketentuan/" },
    ],
    it: [
      { t: "Home",              d: "Skeletonic Stylus \u2014 CSS accessibile, ~7,5 KB gzipped",        u: "/" },
      { t: "Informazioni",      d: "Cos'\u00e8 Skeletonic Stylus, storia, filosofia, semver",          u: "/informazioni/" },
      { t: "Iniziare",          d: "Installazione via npm/pnpm/yarn o CDN, importare in Stylus",      u: "/iniziare/" },
      { t: "Componenti",        d: "Pulsanti, badge, alert, card, form, grid, navbar",                u: "/componenti/" },
      { t: "Palette",           d: "Demo palette Material, Tachyons e WebSafe",                       u: "/palette/" },
      { t: "Animazioni",        d: "Animazioni con supporto prefers-reduced-motion",                  u: "/animazioni/" },
      { t: "Accessibilit\u00e0",d: "WCAG 2.2: focus-visible, contrasto, skip links, mixins",          u: "/accessibilita/" },
      { t: "Registro modifiche",d: "Note di rilascio v1.1.7 e cronologia completa",                   u: "/registro-modifiche/" },
      { t: "Sicurezza",         d: "SBOM, budget dimensione, CVE-2023-44270",                         u: "/sicurezza/" },
      { t: "Contribuire",       d: "Come contribuire, CONTRIBUTING.md, GitHub",                        u: "/contribuire/" },
      { t: "Contatti",          d: "Invia un messaggio tramite il modulo di contatto",                 u: "/contatti/" },
      { t: "Privacy",           d: "Informativa sulla privacy",                                        u: "/privacy/" },
      { t: "Termini",           d: "Termini di utilizzo",                                              u: "/termini/" },
    ],
    ja: [
      { t: "\u30db\u30fc\u30e0",              d: "Skeletonic Stylus \u2014 \u30a2\u30af\u30bb\u30b7\u30d6\u30eb\u306aCSS\u3001~7.5 KB gzipped",             u: "/" },
      { t: "\u6982\u8981",               d: "Skeletonic Stylus\u3068\u306f\u3001\u6b74\u53f2\u3001\u54f2\u5b66\u3001semver",                        u: "/gaiyo/" },
      { t: "\u306f\u3058\u3081\u306b",            d: "npm/pnpm/yarn\u307e\u305f\u306fCDN\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",                           u: "/hajimeni/" },
      { t: "\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",       d: "\u30dc\u30bf\u30f3\u3001\u30d0\u30c3\u30b8\u3001\u30a2\u30e9\u30fc\u30c8\u3001\u30ab\u30fc\u30c9\u3001\u30d5\u30a9\u30fc\u30e0\u3001\u30b0\u30ea\u30c3\u30c9",                    u: "/konponentsu/" },
      { t: "\u30d1\u30ec\u30c3\u30c8",           d: "Material\u3001Tachyons\u3001WebSafe\u30d1\u30ec\u30c3\u30c8\u30c7\u30e2",                       u: "/paretto/" },
      { t: "\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3",       d: "prefers-reduced-motion\u5bfe\u5fdc\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3",                    u: "/animeshon/" },
      { t: "\u30a2\u30af\u30bb\u30b7\u30d3\u30ea\u30c6\u30a3",    d: "WCAG 2.2: focus-visible\u3001\u30b3\u30f3\u30c8\u30e9\u30b9\u30c8\u3001\u30b9\u30ad\u30c3\u30d7\u30ea\u30f3\u30af",          u: "/akseshibirithi/" },
      { t: "\u5909\u66f4\u5c65\u6b74",            d: "v1.1.7\u30ea\u30ea\u30fc\u30b9\u30ce\u30fc\u30c8\u3068\u30d0\u30fc\u30b8\u30e7\u30f3\u5c65\u6b74",                       u: "/henkou-rireki/" },
      { t: "\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3",        d: "SBOM\u3001\u30b5\u30a4\u30ba\u4e88\u7b97\u3001CVE-2023-44270",                                u: "/sekiyurithi/" },
      { t: "\u8ca2\u732e",               d: "\u8ca2\u732e\u65b9\u6cd5\u3001CONTRIBUTING.md\u3001GitHub",                              u: "/kouken/" },
      { t: "\u304a\u554f\u3044\u5408\u308f\u305b",         d: "\u304a\u554f\u3044\u5408\u308f\u305b\u30d5\u30a9\u30fc\u30e0\u304b\u3089\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1",                       u: "/otoiawase/" },
      { t: "\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc",        d: "\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc",                                            u: "/puraibashi/" },
      { t: "\u5229\u7528\u898f\u7d04",            d: "\u5229\u7528\u898f\u7d04",                                                          u: "/riyou-kiyaku/" },
    ],
    ko: [
      { t: "\ud648",               d: "Skeletonic Stylus \u2014 \uc811\uadfc\uc131 \ub192\uc740 CSS, ~7.5 KB gzipped",           u: "/" },
      { t: "\uc18c\uac1c",              d: "Skeletonic Stylus\ub780, \uc5ed\uc0ac, \ucca0\ud559, semver",                        u: "/sogae/" },
      { t: "\uc2dc\uc791\ud558\uae30",           d: "npm/pnpm/yarn \ub610\ub294 CDN\uc73c\ub85c \uc124\uce58",                                  u: "/sijak/" },
      { t: "\ucef4\ud3ec\ub10c\ud2b8",          d: "\ubc84\ud2bc, \ubc30\uc9c0, \uc54c\ub9bc, \uce74\ub4dc, \ud3fc, \uadf8\ub9ac\ub4dc",                            u: "/kuseong-yoso/" },
      { t: "\ud314\ub808\ud2b8",           d: "Material, Tachyons, WebSafe \ud314\ub808\ud2b8 \ub370\ubaa8",                       u: "/palleteu/" },
      { t: "\uc560\ub2c8\uba54\uc774\uc158",        d: "prefers-reduced-motion \uc9c0\uc6d0 \uc560\ub2c8\uba54\uc774\uc158",                       u: "/aenimeisyeon/" },
      { t: "\uc811\uadfc\uc131",            d: "WCAG 2.2: focus-visible, \ub300\ube44, \uc2a4\ud0b5 \ub9c1\ud06c, \ubbf9\uc2a4\uc778",            u: "/jeobgeun-seong/" },
      { t: "\ubcc0\uacbd \uc77c\uc9c0",          d: "v1.1.7 \ub9b4\ub9ac\uc2a4 \ub178\ud2b8 \ubc0f \uc804\uccb4 \ubc84\uc804 \uae30\ub85d",                        u: "/byeongyeong-ilji/" },
      { t: "\ubcf4\uc548",              d: "SBOM, \ud06c\uae30 \uc608\uc0b0, CVE-2023-44270",                                u: "/boaan/" },
      { t: "\uae30\uc5ec",              d: "\uae30\uc5ec \ubc29\ubc95, CONTRIBUTING.md, GitHub",                              u: "/giyeo/" },
      { t: "\ubb38\uc758",              d: "\uc5f0\ub77d \uc591\uc2dd\uc73c\ub85c \uba54\uc2dc\uc9c0 \ubcf4\ub0b4\uae30",                                    u: "/munui/" },
      { t: "\uac1c\uc778\uc815\ubcf4",          d: "\uac1c\uc778\uc815\ubcf4 \ubcf4\ud638\uc815\ucc45",                                              u: "/gaeinjeongbo/" },
      { t: "\uc774\uc6a9\uc57d\uad00",          d: "\uc774\uc6a9 \uc57d\uad00",                                                        u: "/iyong-yakgwan/" },
    ],
    nl: [
      { t: "Home",              d: "Skeletonic Stylus \u2014 toegankelijke CSS, ~7,5 KB gzipped",      u: "/" },
      { t: "Over ons",          d: "Wat is Skeletonic Stylus, geschiedenis, filosofie, semver",        u: "/over-ons/" },
      { t: "Aan de slag",       d: "Installeren via npm/pnpm/yarn of CDN, importeren in Stylus",      u: "/aan-de-slag/" },
      { t: "Componenten",       d: "Knoppen, badges, alerts, kaarten, formulieren, grid, navbar",      u: "/componenten/" },
      { t: "Paletten",          d: "Material-, Tachyons- en WebSafe-paletdemo's",                      u: "/paletten/" },
      { t: "Animaties",         d: "Animaties met prefers-reduced-motion ondersteuning",               u: "/animaties/" },
      { t: "Toegankelijkheid",  d: "WCAG 2.2: focus-visible, contrast, skiplinks, mixins",            u: "/toegankelijkheid/" },
      { t: "Wijzigingslogboek", d: "Volledige v1.1.7 release-opmerkingen en versiegeschiedenis",      u: "/wijzigingslogboek/" },
      { t: "Beveiliging",       d: "SBOM, groottebudgetten, CVE-2023-44270",                          u: "/beveiliging/" },
      { t: "Bijdragen",         d: "Hoe bij te dragen, CONTRIBUTING.md, GitHub",                       u: "/bijdragen/" },
      { t: "Contact",           d: "Stuur een bericht via het contactformulier",                       u: "/contact/" },
      { t: "Privacy",           d: "Privacybeleid",                                                    u: "/privacy/" },
      { t: "Voorwaarden",       d: "Gebruiksvoorwaarden",                                              u: "/voorwaarden/" },
    ],
    pl: [
      { t: "Strona g\u0142\u00f3wna",    d: "Skeletonic Stylus \u2014 dost\u0119pny CSS, ~7,5 KB gzipped",            u: "/" },
      { t: "O projekcie",       d: "Czym jest Skeletonic Stylus, historia, filozofia, semver",         u: "/o-projekcie/" },
      { t: "Pierwsze kroki",    d: "Instalacja przez npm/pnpm/yarn lub CDN, import w Stylus",         u: "/pierwsze-kroki/" },
      { t: "Komponenty",        d: "Przyciski, odznaki, alerty, karty, formularze, grid, navbar",      u: "/komponenty/" },
      { t: "Palety",            d: "Demo palet Material, Tachyons i WebSafe",                          u: "/palety/" },
      { t: "Animacje",          d: "Animacje z obs\u0142ug\u0105 prefers-reduced-motion",                     u: "/animacje/" },
      { t: "Dost\u0119pno\u015b\u0107",       d: "WCAG 2.2: focus-visible, kontrast, skip linki, mixiny",             u: "/dostepnosc/" },
      { t: "Dziennik zmian",    d: "Pe\u0142ne notatki wydania v1.1.7 i historia wersji",                  u: "/dziennik-zmian/" },
      { t: "Bezpiecze\u0144stwo",    d: "SBOM, bud\u017cety rozmiaru, CVE-2023-44270",                          u: "/bezpieczenstwo/" },
      { t: "Wsp\u00f3\u0142praca",       d: "Jak wsp\u00f3\u0142pracowa\u0107, CONTRIBUTING.md, GitHub",                      u: "/wspolpraca/" },
      { t: "Kontakt",           d: "Wy\u015blij wiadomo\u015b\u0107 przez formularz kontaktowy",                     u: "/kontakt/" },
      { t: "Prywatno\u015b\u0107",        d: "Polityka prywatno\u015bci",                                               u: "/prywatnosc/" },
      { t: "Regulamin",         d: "Regulamin korzystania",                                            u: "/regulamin/" },
    ],
    "pt-br": [
      { t: "In\u00edcio",           d: "Skeletonic Stylus \u2014 CSS acess\u00edvel, ~7,5 KB gzipped",          u: "/" },
      { t: "Sobre",             d: "O que \u00e9 Skeletonic Stylus, hist\u00f3ria, filosofia, semver",       u: "/sobre/" },
      { t: "Primeiros passos",  d: "Instalar via npm/pnpm/yarn ou CDN, importar no Stylus",           u: "/primeiros-passos/" },
      { t: "Componentes",       d: "Bot\u00f5es, badges, alertas, cards, formul\u00e1rios, grid, navbar",     u: "/componentes/" },
      { t: "Paletas",           d: "Demos de paletas Material, Tachyons e WebSafe",                    u: "/paletas/" },
      { t: "Anima\u00e7\u00f5es",        d: "Anima\u00e7\u00f5es com suporte a prefers-reduced-motion",                u: "/animacoes/" },
      { t: "Acessibilidade",    d: "WCAG 2.2: focus-visible, contraste, skip links, mixins",          u: "/acessibilidade/" },
      { t: "Registro de altera\u00e7\u00f5es", d: "Notas da vers\u00e3o v1.1.7 e hist\u00f3rico completo",         u: "/registro-de-alteracoes/" },
      { t: "Seguran\u00e7a",         d: "SBOM, or\u00e7amentos de tamanho, CVE-2023-44270",                     u: "/seguranca/" },
      { t: "Contribuir",        d: "Como contribuir, CONTRIBUTING.md, GitHub",                         u: "/contribuir/" },
      { t: "Contato",           d: "Envie uma mensagem pelo formul\u00e1rio de contato",                     u: "/contato/" },
      { t: "Privacidade",       d: "Pol\u00edtica de privacidade",                                          u: "/privacidade/" },
      { t: "Termos",            d: "Termos de uso",                                                    u: "/termos/" },
    ],
    ro: [
      { t: "Acas\u0103",            d: "Skeletonic Stylus \u2014 CSS accesibil, ~7,5 KB gzipped",           u: "/" },
      { t: "Despre",            d: "Ce este Skeletonic Stylus, istorie, filozofie, semver",            u: "/despre/" },
      { t: "Primii pa\u0219i",       d: "Instalare prin npm/pnpm/yarn sau CDN, import \u00een Stylus",        u: "/primii-pasi/" },
      { t: "Componente",        d: "Butoane, insigne, alerte, carduri, formulare, grid, navbar",       u: "/componente/" },
      { t: "Palete",            d: "Demo-uri palete Material, Tachyons \u0219i WebSafe",                   u: "/palete/" },
      { t: "Anima\u021bii",          d: "Anima\u021bii cu suport prefers-reduced-motion",                       u: "/animatii/" },
      { t: "Accesibilitate",    d: "WCAG 2.2: focus-visible, contrast, skip links, mixins",           u: "/accesibilitate/" },
      { t: "Jurnal modific\u0103ri", d: "Note de lansare v1.1.7 \u0219i istoricul complet al versiunilor",    u: "/jurnal-modificari/" },
      { t: "Securitate",        d: "SBOM, bugete de dimensiune, CVE-2023-44270",                       u: "/securitate/" },
      { t: "Contribuie",        d: "Cum s\u0103 contribui, CONTRIBUTING.md, GitHub",                        u: "/contribuie/" },
      { t: "Contact",           d: "Trimite un mesaj prin formularul de contact",                      u: "/contact/" },
      { t: "Confiden\u021bialitate", d: "Politica de confiden\u021bialitate",                                     u: "/confidentialitate/" },
      { t: "Termeni",           d: "Termeni de utilizare",                                             u: "/termeni/" },
    ],
    ru: [
      { t: "\u0413\u043b\u0430\u0432\u043d\u0430\u044f",           d: "Skeletonic Stylus \u2014 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0439 CSS, ~7,5 \u041a\u0411 gzipped",              u: "/" },
      { t: "\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435",          d: "\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 Skeletonic Stylus, \u0438\u0441\u0442\u043e\u0440\u0438\u044f, \u0444\u0438\u043b\u043e\u0441\u043e\u0444\u0438\u044f, semver",          u: "/o-proekte/" },
      { t: "\u041d\u0430\u0447\u0430\u043b\u043e",            d: "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 npm/pnpm/yarn \u0438\u043b\u0438 CDN",                               u: "/nachalo/" },
      { t: "\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b",       d: "\u041a\u043d\u043e\u043f\u043a\u0438, \u0431\u0435\u0439\u0434\u0436\u0438, \u0430\u043b\u0435\u0440\u0442\u044b, \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438, \u0444\u043e\u0440\u043c\u044b, \u0433\u0440\u0438\u0434",                     u: "/komponenty/" },
      { t: "\u041f\u0430\u043b\u0438\u0442\u0440\u044b",          d: "\u0414\u0435\u043c\u043e \u043f\u0430\u043b\u0438\u0442\u0440 Material, Tachyons \u0438 WebSafe",                        u: "/palitry/" },
      { t: "\u0410\u043d\u0438\u043c\u0430\u0446\u0438\u0438",        d: "\u0410\u043d\u0438\u043c\u0430\u0446\u0438\u0438 \u0441 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 prefers-reduced-motion",                   u: "/animatsii/" },
      { t: "\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c",     d: "WCAG 2.2: focus-visible, \u043a\u043e\u043d\u0442\u0440\u0430\u0441\u0442, \u0441\u043a\u0438\u043f-\u0441\u0441\u044b\u043b\u043a\u0438, \u043c\u0438\u043a\u0441\u0438\u043d\u044b",            u: "/dostupnost/" },
      { t: "\u0416\u0443\u0440\u043d\u0430\u043b \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439",  d: "\u041f\u043e\u043b\u043d\u044b\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0438 \u043a \u0440\u0435\u043b\u0438\u0437\u0443 v1.1.7 \u0438 \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u0432\u0435\u0440\u0441\u0438\u0439",                  u: "/zhurnal-izmeneniy/" },
      { t: "\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c",    d: "SBOM, \u0431\u044e\u0434\u0436\u0435\u0442\u044b \u0440\u0430\u0437\u043c\u0435\u0440\u0430, CVE-2023-44270",                            u: "/bezopasnost/" },
      { t: "\u0412\u043a\u043b\u0430\u0434",             d: "\u041a\u0430\u043a \u0432\u043d\u0435\u0441\u0442\u0438 \u0432\u043a\u043b\u0430\u0434, CONTRIBUTING.md, GitHub",                       u: "/vklad/" },
      { t: "\u041a\u043e\u043d\u0442\u0430\u043a\u0442",          d: "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0443\u044e \u0444\u043e\u0440\u043c\u0443",                        u: "/kontakt/" },
      { t: "\u041a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c", d: "\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438",                               u: "/konfidentsialnost/" },
      { t: "\u0423\u0441\u043b\u043e\u0432\u0438\u044f",          d: "\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",                                                  u: "/usloviya/" },
    ],
    sv: [
      { t: "Hem",               d: "Skeletonic Stylus \u2014 tillg\u00e4nglig CSS, ~7,5 KB gzipped",        u: "/" },
      { t: "Om oss",            d: "Vad \u00e4r Skeletonic Stylus, historia, filosofi, semver",             u: "/om-oss/" },
      { t: "Kom ig\u00e5ng",         d: "Installera via npm/pnpm/yarn eller CDN, importera i Stylus",      u: "/kom-igang/" },
      { t: "Komponenter",       d: "Knappar, badges, alerts, kort, formul\u00e4r, grid, navbar",           u: "/komponenter/" },
      { t: "Paletter",          d: "Material-, Tachyons- och WebSafe-palettdemos",                     u: "/paletter/" },
      { t: "Animationer",       d: "Animationer med prefers-reduced-motion-st\u00f6d",                      u: "/animationer/" },
      { t: "Tillg\u00e4nglighet",    d: "WCAG 2.2: focus-visible, kontrast, hoppa-\u00f6ver-l\u00e4nkar, mixins",  u: "/tillganglighet/" },
      { t: "\u00c4ndringslogg",       d: "Fullst\u00e4ndiga versionsanteckningar f\u00f6r v1.1.7 och versionshistorik", u: "/andringslogg/" },
      { t: "S\u00e4kerhet",          d: "SBOM, storleksbudgetar, CVE-2023-44270",                           u: "/sakerhet/" },
      { t: "Bidra",             d: "Hur man bidrar, CONTRIBUTING.md, GitHub",                          u: "/bidra/" },
      { t: "Kontakt",           d: "Skicka ett meddelande via kontaktformul\u00e4ret",                      u: "/kontakt/" },
      { t: "Integritet",        d: "Integritetspolicy",                                                u: "/integritet/" },
      { t: "Villkor",           d: "Anv\u00e4ndningsvillkor",                                                u: "/villkor/" },
    ],
    th: [
      { t: "\u0e2b\u0e19\u0e49\u0e32\u0e41\u0e23\u0e01",            d: "Skeletonic Stylus \u2014 CSS \u0e17\u0e35\u0e48\u0e40\u0e02\u0e49\u0e32\u0e16\u0e36\u0e07\u0e44\u0e14\u0e49, ~7.5 KB gzipped",    u: "/" },
      { t: "\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a",           d: "Skeletonic Stylus \u0e04\u0e37\u0e2d\u0e2d\u0e30\u0e44\u0e23, \u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34, \u0e1b\u0e23\u0e31\u0e0a\u0e0d\u0e32, semver",          u: "/kiao-kap/" },
      { t: "\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19",            d: "\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07\u0e1c\u0e48\u0e32\u0e19 npm/pnpm/yarn \u0e2b\u0e23\u0e37\u0e2d CDN, \u0e19\u0e33\u0e40\u0e02\u0e49\u0e32\u0e43\u0e19 Stylus",       u: "/roem-ton/" },
      { t: "\u0e2a\u0e48\u0e27\u0e19\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a",        d: "\u0e1b\u0e38\u0e48\u0e21, \u0e41\u0e1a\u0e14\u0e08\u0e4c, alerts, \u0e01\u0e32\u0e23\u0e4c\u0e14, \u0e1f\u0e2d\u0e23\u0e4c\u0e21, grid, navbar",            u: "/suan-prakop/" },
      { t: "\u0e08\u0e32\u0e19\u0e2a\u0e35",              d: "\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e08\u0e32\u0e19\u0e2a\u0e35 Material, Tachyons \u0e41\u0e25\u0e30 WebSafe",                u: "/chan-si/" },
      { t: "\u0e41\u0e2d\u0e19\u0e34\u0e40\u0e21\u0e0a\u0e31\u0e19",          d: "\u0e41\u0e2d\u0e19\u0e34\u0e40\u0e21\u0e0a\u0e31\u0e19\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a prefers-reduced-motion",                u: "/aeni-mechan/" },
      { t: "\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e16\u0e36\u0e07",        d: "WCAG 2.2: focus-visible, \u0e04\u0e2d\u0e19\u0e17\u0e23\u0e32\u0e2a\u0e15\u0e4c, skip links, mixins",       u: "/kan-khao-thueng/" },
      { t: "\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e01\u0e32\u0e23\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e41\u0e1b\u0e25\u0e07", d: "\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e40\u0e27\u0e2d\u0e23\u0e4c\u0e0a\u0e31\u0e19\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a v1.1.7 \u0e41\u0e25\u0e30\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34\u0e40\u0e27\u0e2d\u0e23\u0e4c\u0e0a\u0e31\u0e19",    u: "/banthuek-kan-plian/" },
      { t: "\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22",     d: "SBOM, \u0e07\u0e1a\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13\u0e02\u0e19\u0e32\u0e14, CVE-2023-44270",                     u: "/khwam-plodphai/" },
      { t: "\u0e21\u0e35\u0e2a\u0e48\u0e27\u0e19\u0e23\u0e48\u0e27\u0e21",         d: "\u0e27\u0e34\u0e18\u0e35\u0e21\u0e35\u0e2a\u0e48\u0e27\u0e19\u0e23\u0e48\u0e27\u0e21, CONTRIBUTING.md, GitHub",                   u: "/mi-suan-ruam/" },
      { t: "\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d",             d: "\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e1c\u0e48\u0e32\u0e19\u0e41\u0e1a\u0e1a\u0e1f\u0e2d\u0e23\u0e4c\u0e21\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d",                          u: "/tittoe/" },
      { t: "\u0e04\u0e27\u0e32\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e48\u0e27\u0e19\u0e15\u0e31\u0e27",    d: "\u0e19\u0e42\u0e22\u0e1a\u0e32\u0e22\u0e04\u0e27\u0e32\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e48\u0e27\u0e19\u0e15\u0e31\u0e27",                                     u: "/khwam-pen-suan-tua/" },
      { t: "\u0e02\u0e49\u0e2d\u0e01\u0e33\u0e2b\u0e19\u0e14",           d: "\u0e02\u0e49\u0e2d\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19",                                        u: "/kho-kamnot/" },
    ],
    tr: [
      { t: "Ana Sayfa",         d: "Skeletonic Stylus \u2014 eri\u015filebilir CSS, ~7,5 KB gzipped",       u: "/" },
      { t: "Hakk\u0131nda",          d: "Skeletonic Stylus nedir, tarih\u00e7e, felsefe, semver",              u: "/hakkinda/" },
      { t: "Ba\u015flarken",          d: "npm/pnpm/yarn veya CDN ile kurulum, Stylus\u2019a aktarma",          u: "/baslarken/" },
      { t: "Bile\u015fenler",         d: "D\u00fc\u011fmeler, rozetler, uyar\u0131lar, kartlar, formlar, grid, navbar",    u: "/bilesenler/" },
      { t: "Paletler",          d: "Material, Tachyons ve WebSafe palet demolar\u0131",                u: "/paletler/" },
      { t: "Animasyonlar",      d: "prefers-reduced-motion destekli animasyonlar",                    u: "/animasyonlar/" },
      { t: "Eri\u015filebilirlik",    d: "WCAG 2.2: focus-visible, kontrast, atlama ba\u011flant\u0131lar\u0131, mixins", u: "/erisilebilirlik/" },
      { t: "De\u011fi\u015fiklik G\u00fcnl\u00fc\u011f\u00fc", d: "v1.1.7 s\u00fcr\u00fcm notlar\u0131 ve s\u00fcr\u00fcm ge\u00e7mi\u015fi",                       u: "/degisiklik-gunlugu/" },
      { t: "G\u00fcvenlik",           d: "SBOM, boyut b\u00fct\u00e7eleri, CVE-2023-44270",                         u: "/guvenlik/" },
      { t: "Katk\u0131",              d: "Nas\u0131l katk\u0131da bulunulur, CONTRIBUTING.md, GitHub",                u: "/katki/" },
      { t: "\u0130leti\u015fim",           d: "Mesaj g\u00f6ndermek i\u00e7in ileti\u015fim formunu kullan\u0131n",                 u: "/iletisim/" },
      { t: "Gizlilik",          d: "Gizlilik politikas\u0131",                                          u: "/gizlilik/" },
      { t: "Ko\u015fullar",           d: "Kullan\u0131m ko\u015fullar\u0131",                                            u: "/kosullar/" },
    ],
    uk: [
      { t: "\u0413\u043e\u043b\u043e\u0432\u043d\u0430",           d: "Skeletonic Stylus \u2014 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0439 CSS, ~7,5 KB gzipped",       u: "/" },
      { t: "\u041f\u0440\u043e \u043d\u0430\u0441",            d: "\u0429\u043e \u0442\u0430\u043a\u0435 Skeletonic Stylus, \u0456\u0441\u0442\u043e\u0440\u0456\u044f, \u0444\u0456\u043b\u043e\u0441\u043e\u0444\u0456\u044f, semver",        u: "/pro-nas/" },
      { t: "\u041f\u043e\u0447\u0430\u0442\u043e\u043a",           d: "\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0447\u0435\u0440\u0435\u0437 npm/pnpm/yarn \u0430\u0431\u043e CDN, \u0456\u043c\u043f\u043e\u0440\u0442 \u0443 Stylus",    u: "/pochatok/" },
      { t: "\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0438",       d: "\u041a\u043d\u043e\u043f\u043a\u0438, \u0431\u0435\u0439\u0434\u0436\u0456, \u0441\u043f\u043e\u0432\u0456\u0449\u0435\u043d\u043d\u044f, \u043a\u0430\u0440\u0442\u043a\u0438, \u0444\u043e\u0440\u043c\u0438, grid, navbar",    u: "/komponenty/" },
      { t: "\u041f\u0430\u043b\u0456\u0442\u0440\u0438",           d: "\u0414\u0435\u043c\u043e \u043f\u0430\u043b\u0456\u0442\u0440 Material, Tachyons \u0442\u0430 WebSafe",                   u: "/palitry/" },
      { t: "\u0410\u043d\u0456\u043c\u0430\u0446\u0456\u0457",          d: "\u0410\u043d\u0456\u043c\u0430\u0446\u0456\u0457 \u0437 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u043a\u043e\u044e prefers-reduced-motion",                 u: "/animatsii/" },
      { t: "\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0456\u0441\u0442\u044c",       d: "WCAG 2.2: focus-visible, \u043a\u043e\u043d\u0442\u0440\u0430\u0441\u0442, skip links, mixins",       u: "/dostupnist/" },
      { t: "\u0416\u0443\u0440\u043d\u0430\u043b \u0437\u043c\u0456\u043d",       d: "\u041f\u043e\u0432\u043d\u0456 \u043d\u043e\u0442\u0430\u0442\u043a\u0438 \u0434\u043e v1.1.7 \u0442\u0430 \u0456\u0441\u0442\u043e\u0440\u0456\u044f \u0432\u0435\u0440\u0441\u0456\u0439",                  u: "/zhurnal-zmin/" },
      { t: "\u0411\u0435\u0437\u043f\u0435\u043a\u0430",            d: "SBOM, \u0431\u044e\u0434\u0436\u0435\u0442\u0438 \u0440\u043e\u0437\u043c\u0456\u0440\u0443, CVE-2023-44270",                        u: "/bezpeka/" },
      { t: "\u0412\u043d\u0435\u0441\u043e\u043a",             d: "\u042f\u043a \u0437\u0440\u043e\u0431\u0438\u0442\u0438 \u0432\u043d\u0435\u0441\u043e\u043a, CONTRIBUTING.md, GitHub",                  u: "/vnesok/" },
      { t: "\u041a\u043e\u043d\u0442\u0430\u043a\u0442",            d: "\u041d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0443 \u0444\u043e\u0440\u043c\u0443",                    u: "/kontakt/" },
      { t: "\u041a\u043e\u043d\u0444\u0456\u0434\u0435\u043d\u0446\u0456\u0439\u043d\u0456\u0441\u0442\u044c", d: "\u041f\u043e\u043b\u0456\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0456\u0434\u0435\u043d\u0446\u0456\u0439\u043d\u043e\u0441\u0442\u0456",                                       u: "/konfidentsiinist/" },
      { t: "\u0423\u043c\u043e\u0432\u0438",              d: "\u0423\u043c\u043e\u0432\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",                                            u: "/umovy/" },
    ],
    vi: [
      { t: "Trang ch\u1ee7",         d: "Skeletonic Stylus \u2014 CSS d\u1ec5 ti\u1ebfp c\u1eadn, ~7,5 KB gzipped",      u: "/" },
      { t: "Gi\u1edbi thi\u1ec7u",         d: "Skeletonic Stylus l\u00e0 g\u00ec, l\u1ecbch s\u1eed, tri\u1ebft l\u00fd, semver",           u: "/gioi-thieu/" },
      { t: "B\u1eaft \u0111\u1ea7u",            d: "C\u00e0i \u0111\u1eb7t qua npm/pnpm/yarn ho\u1eb7c CDN, nh\u1eadp v\u00e0o Stylus",       u: "/bat-dau/" },
      { t: "Th\u00e0nh ph\u1ea7n",          d: "N\u00fat, huy hi\u1ec7u, c\u1ea3nh b\u00e1o, th\u1ebb, bi\u1ec3u m\u1eabu, grid, navbar",       u: "/thanh-phan/" },
      { t: "B\u1ea3ng m\u00e0u",           d: "Demo b\u1ea3ng m\u00e0u Material, Tachyons v\u00e0 WebSafe",                 u: "/bang-mau/" },
      { t: "Hi\u1ec7u \u1ee9ng",           d: "Hi\u1ec7u \u1ee9ng h\u1ed7 tr\u1ee3 prefers-reduced-motion",                       u: "/hieu-ung/" },
      { t: "Tr\u1ee3 n\u0103ng",           d: "WCAG 2.2: focus-visible, t\u01b0\u01a1ng ph\u1ea3n, skip links, mixins",  u: "/tro-nang/" },
      { t: "Nh\u1eadt k\u00fd thay \u0111\u1ed5i",   d: "Ghi ch\u00fa phi\u00ean b\u1ea3n v1.1.7 v\u00e0 l\u1ecbch s\u1eed phi\u00ean b\u1ea3n",              u: "/nhat-ky-thay-doi/" },
      { t: "B\u1ea3o m\u1eadt",             d: "SBOM, ng\u00e2n s\u00e1ch k\u00edch th\u01b0\u1edbc, CVE-2023-44270",                   u: "/bao-mat/" },
      { t: "\u0110\u00f3ng g\u00f3p",           d: "C\u00e1ch \u0111\u00f3ng g\u00f3p, CONTRIBUTING.md, GitHub",                       u: "/dong-gop/" },
      { t: "Li\u00ean h\u1ec7",             d: "G\u1eedi tin nh\u1eafn qua bi\u1ec3u m\u1eabu li\u00ean h\u1ec7",                            u: "/lien-he/" },
      { t: "Quy\u1ec1n ri\u00eang t\u01b0",       d: "Ch\u00ednh s\u00e1ch quy\u1ec1n ri\u00eang t\u01b0",                                      u: "/quyen-rieng-tu/" },
      { t: "\u0110i\u1ec1u kho\u1ea3n",          d: "\u0110i\u1ec1u kho\u1ea3n s\u1eed d\u1ee5ng",                                            u: "/dieu-khoan/" },
    ],
    yo: [
      { t: "Il\u00e9",               d: "Skeletonic Stylus \u2014 CSS t\u00ed \u00e0 l\u00e8 \u00e0\u00e0y\u00e8, ~7.5 KB gzipped",       u: "/" },
      { t: "N\u00edpa",              d: "K\u00ed ni Skeletonic Stylus, \u00edt\u00e0n, \u00ecm\u00f2r\u00e0n, semver",             u: "/nipa/" },
      { t: "B\u1eb9\u0300r\u1eb9\u0300 N\u00edb\u00ed",         d: "Fi sori \u1eb9\u0300 n\u00edp\u00e0 npm/pnpm/yarn t\u00e0b\u00ed CDN, gbe w\u1ecdl\u00e9 Stylus",  u: "/bere-nibi/" },
      { t: "\u00c0w\u1ecdn P\u00e0\u00e0t\u00ec",        d: "B\u1ecd\u0301t\u00ecn\u00ec, badges, \u00eck\u00ecl\u1ecd\u0300, k\u00e1\u00e0d\u00ec, f\u1ecd\u0301\u1ecd\u0300m\u00f9, grid, navbar",    u: "/awon-paati/" },
      { t: "\u00c0w\u1ecdn Pal\u1eb9\u0301t\u00ec",     d: "\u00c0p\u1eb9\u1eb9r\u1eb9 pal\u1eb9\u0301t\u00ec Material, Tachyons \u00e0ti WebSafe",              u: "/awon-paleti/" },
      { t: "\u00c8re \u00ccd\u00e0s\u1ecdn\u00f9",        d: "\u00c8re \u00ecd\u00e0s\u1ecdn\u00f9 p\u1eb9\u0300l\u00fa prefers-reduced-motion",                  u: "/ere-idasonu/" },
      { t: "\u00ccr\u00e0y\u00e8 S\u00ed",           d: "WCAG 2.2: focus-visible, \u00ecyat\u1ecd\u0300, skip links, mixins",      u: "/iraye-si/" },
      { t: "\u00ccw\u00e9 \u00ccy\u00edpad\u00e0",        d: "\u00c0k\u1ecds\u00edl\u1eb9\u0300 \u1eb9\u0300ya v1.1.7 \u00e0ti \u00edt\u00e0n \u1eb9\u0300ya",                       u: "/iwe-iyipada/" },
      { t: "Aabo",               d: "SBOM, \u00e0w\u1ecdn \u00ecpam\u1ecd\u0301 iw\u1ecdnn\u00fa, CVE-2023-44270",                  u: "/aabo/" },
      { t: "\u1e62e Al\u00e0b\u00e0\u00e1\u015fi\u015f\u1eb9\u0301p\u1ecd\u0300",  d: "B\u00ed a \u015fe \u00e0l\u00e0b\u00e0\u015f\u00e9, CONTRIBUTING.md, GitHub",                 u: "/se-alabapin/" },
      { t: "K\u00e0n S\u00ed Wa",          d: "Fi \u00ecfir\u00e1n\u015f\u1eb9\u0301 r\u00e1n\u015f\u1eb9\u0301 n\u00edp\u00e0 f\u1ecd\u0301\u1ecd\u0300m\u00f9 kan-s\u00ed-wa",                  u: "/kan-si-wa/" },
      { t: "\u00c0\u015f\u00edr\u00ed",             d: "\u00ccl\u00e0n\u00e0 \u00e0\u015f\u00edr\u00ed",                                                   u: "/asiri/" },
      { t: "\u00c0w\u1ecdn \u00d2fin",          d: "\u00c0w\u1ecdn \u00f2fin l\u00edl\u00f2",                                              u: "/awon-ofin/" },
    ],
    "zh-hans": [
      { t: "\u9996\u9875",               d: "Skeletonic Stylus \u2014 \u65e0\u969c\u788d CSS\uff0c~7.5 KB gzipped",       u: "/" },
      { t: "\u5173\u4e8e",               d: "Skeletonic Stylus \u662f\u4ec0\u4e48\uff0c\u5386\u53f2\uff0c\u7406\u5ff5\uff0csemver",              u: "/guan-yu/" },
      { t: "\u5feb\u901f\u5165\u95e8",            d: "\u901a\u8fc7 npm/pnpm/yarn \u6216 CDN \u5b89\u88c5\uff0c\u5bfc\u5165 Stylus",          u: "/kuai-su-ru-men/" },
      { t: "\u7ec4\u4ef6",               d: "\u6309\u94ae\u3001\u5fbd\u7ae0\u3001\u63d0\u793a\u3001\u5361\u7247\u3001\u8868\u5355\u3001grid\u3001navbar",         u: "/zu-jian/" },
      { t: "\u8272\u677f",               d: "Material\u3001Tachyons \u548c WebSafe \u8272\u677f\u6f14\u793a",                u: "/se-ban/" },
      { t: "\u52a8\u753b",               d: "\u652f\u6301 prefers-reduced-motion \u7684\u52a8\u753b",                       u: "/dong-hua/" },
      { t: "\u65e0\u969c\u788d",              d: "WCAG 2.2: focus-visible\u3001\u5bf9\u6bd4\u5ea6\u3001\u8df3\u8fc7\u94fe\u63a5\u3001mixins",  u: "/wu-zhang-ai/" },
      { t: "\u66f4\u65b0\u65e5\u5fd7",            d: "v1.1.7 \u5b8c\u6574\u7248\u672c\u8bf4\u660e\u53ca\u7248\u672c\u5386\u53f2",                       u: "/geng-xin-ri-zhi/" },
      { t: "\u5b89\u5168",               d: "SBOM\u3001\u5927\u5c0f\u9884\u7b97\u3001CVE-2023-44270",                        u: "/an-quan/" },
      { t: "\u8d21\u732e",               d: "\u5982\u4f55\u8d21\u732e\uff0cCONTRIBUTING.md\uff0cGitHub",                       u: "/gong-xian/" },
      { t: "\u8054\u7cfb",               d: "\u901a\u8fc7\u8054\u7cfb\u8868\u5355\u53d1\u9001\u6d88\u606f",                                 u: "/lian-xi/" },
      { t: "\u9690\u79c1",               d: "\u9690\u79c1\u653f\u7b56",                                                u: "/yin-si/" },
      { t: "\u6761\u6b3e",               d: "\u4f7f\u7528\u6761\u6b3e",                                                u: "/tiao-kuan/" },
    ],
    "zh-hant": [
      { t: "\u9996\u9801",               d: "Skeletonic Stylus \u2014 \u7121\u969c\u7919 CSS\uff0c~7.5 KB gzipped",       u: "/" },
      { t: "\u95dc\u65bc",               d: "Skeletonic Stylus \u662f\u4ec0\u9ebc\uff0c\u6b77\u53f2\uff0c\u7406\u5ff5\uff0csemver",              u: "/guan-yu/" },
      { t: "\u5feb\u901f\u5165\u9580",            d: "\u900f\u904e npm/pnpm/yarn \u6216 CDN \u5b89\u88dd\uff0c\u532f\u5165 Stylus",          u: "/kuai-su-ru-men/" },
      { t: "\u7d44\u4ef6",               d: "\u6309\u9215\u3001\u5fbd\u7ae0\u3001\u63d0\u793a\u3001\u5361\u7247\u3001\u8868\u55ae\u3001grid\u3001navbar",         u: "/zu-jian/" },
      { t: "\u8272\u677f",               d: "Material\u3001Tachyons \u548c WebSafe \u8272\u677f\u7bc4\u4f8b",                u: "/se-ban/" },
      { t: "\u52d5\u756b",               d: "\u652f\u63f4 prefers-reduced-motion \u7684\u52d5\u756b",                       u: "/dong-hua/" },
      { t: "\u7121\u969c\u7919",              d: "WCAG 2.2: focus-visible\u3001\u5c0d\u6bd4\u5ea6\u3001\u8df3\u904e\u9023\u7d50\u3001mixins",  u: "/wu-zhang-ai/" },
      { t: "\u66f4\u65b0\u65e5\u8a8c",            d: "v1.1.7 \u5b8c\u6574\u7248\u672c\u8aaa\u660e\u53ca\u7248\u672c\u6b77\u53f2",                       u: "/geng-xin-ri-zhi/" },
      { t: "\u5b89\u5168",               d: "SBOM\u3001\u5927\u5c0f\u9810\u7b97\u3001CVE-2023-44270",                        u: "/an-quan/" },
      { t: "\u8ca2\u737b",               d: "\u5982\u4f55\u8ca2\u737b\uff0cCONTRIBUTING.md\uff0cGitHub",                       u: "/gong-xian/" },
      { t: "\u806f\u7e6b",               d: "\u900f\u904e\u806f\u7e6b\u8868\u55ae\u50b3\u9001\u8a0a\u606f",                                 u: "/lian-xi/" },
      { t: "\u96b1\u79c1",               d: "\u96b1\u79c1\u653f\u7b56",                                                u: "/yin-si/" },
      { t: "\u689d\u6b3e",               d: "\u4f7f\u7528\u689d\u6b3e",                                                u: "/tiao-kuan/" },
    ],
  };

  const base = i18n[lang] || i18n.en;
  const pages = base.map(function(p) {
    return { t: p.t, d: p.d, u: prefix + p.u };
  });

  const noResults = lang === "fr"
    ? function(q) { return "Aucun r\u00e9sultat pour \u00ab\u202f" + q + "\u202f\u00bb"; }
    : lang === "de"
    ? function(q) { return "Keine Ergebnisse f\u00fcr \u201e" + q + "\u201c"; }
    : lang === "ar"
    ? function(q) { return "\u0644\u0627 \u0646\u062a\u0627\u0626\u062c \u0644\u0640 \u00ab" + q + "\u00bb"; }
    : lang === "bn"
    ? function(q) { return "\u201c" + q + "\u201d \u098f\u09b0 \u099c\u09a8\u09cd\u09af \u0995\u09cb\u09a8\u09cb \u09ab\u09b2\u09be\u09ab\u09b2 \u09a8\u09c7\u0987"; }
    : lang === "cs"
    ? function(q) { return "\u017d\u00e1dn\u00e9 v\u00fdsledky pro \u201e" + q + "\u201c"; }
    : lang === "es"
    ? function(q) { return "Sin resultados para \u00ab" + q + "\u00bb"; }
    : lang === "fil"
    ? function(q) { return "Walang resulta para sa \u201c" + q + "\u201d"; }
    : lang === "ha"
    ? function(q) { return "Babu sakamako don \u201c" + q + "\u201d"; }
    : lang === "he"
    ? function(q) { return "\u05d0\u05d9\u05df \u05ea\u05d5\u05e6\u05d0\u05d5\u05ea \u05e2\u05d1\u05d5\u05e8 \u201e" + q + "\u201c"; }
    : lang === "hi"
    ? function(q) { return "\u201c" + q + "\u201d \u0915\u0947 \u0932\u093f\u090f \u0915\u094b\u0908 \u092a\u0930\u093f\u0923\u093e\u092e \u0928\u0939\u0940\u0902"; }
    : lang === "id"
    ? function(q) { return "Tidak ada hasil untuk \u201c" + q + "\u201d"; }
    : lang === "it"
    ? function(q) { return "Nessun risultato per \u201c" + q + "\u201d"; }
    : lang === "ja"
    ? function(q) { return "\u300c" + q + "\u300d\u306e\u691c\u7d22\u7d50\u679c\u306f\u3042\u308a\u307e\u305b\u3093"; }
    : lang === "ko"
    ? function(q) { return "\u201c" + q + "\u201d\uc5d0 \ub300\ud55c \uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4"; }
    : lang === "nl"
    ? function(q) { return "Geen resultaten voor \u201c" + q + "\u201d"; }
    : lang === "pl"
    ? function(q) { return "Brak wynik\u00f3w dla \u201e" + q + "\u201d"; }
    : lang === "pt-br"
    ? function(q) { return "Nenhum resultado para \u201c" + q + "\u201d"; }
    : lang === "ro"
    ? function(q) { return "Niciun rezultat pentru \u201e" + q + "\u201d"; }
    : lang === "ru"
    ? function(q) { return "\u041d\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u0434\u043b\u044f \u00ab" + q + "\u00bb"; }
    : lang === "sv"
    ? function(q) { return "Inga resultat f\u00f6r \u201d" + q + "\u201d"; }
    : lang === "th"
    ? function(q) { return "\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a \u201c" + q + "\u201d"; }
    : lang === "tr"
    ? function(q) { return "\u201c" + q + "\u201d i\u00e7in sonu\u00e7 bulunamad\u0131"; }
    : lang === "uk"
    ? function(q) { return "\u041d\u0435\u043c\u0430\u0454 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456\u0432 \u0434\u043b\u044f \u00ab" + q + "\u00bb"; }
    : lang === "vi"
    ? function(q) { return "Kh\u00f4ng c\u00f3 k\u1ebft qu\u1ea3 cho \u201c" + q + "\u201d"; }
    : lang === "yo"
    ? function(q) { return "K\u00f2 s\u00ed \u00e0b\u00e1j\u00e1d\u00e9 f\u00fan \u201c" + q + "\u201d"; }
    : lang === "zh-hans"
    ? function(q) { return "\u201c" + q + "\u201d \u6ca1\u6709\u641c\u7d22\u7ed3\u679c"; }
    : lang === "zh-hant"
    ? function(q) { return "\u201c" + q + "\u201d \u6c92\u6709\u641c\u5c0b\u7d50\u679c"; }
    : function(q) { return "No results for \u201c" + q + "\u201d"; };

  let activeIdx = -1;

  const fuzzyMatch = (needle, hay) => {
    needle = needle.toLowerCase();
    hay = hay.toLowerCase();
    if (hay.indexOf(needle) !== -1) return true;
    let j = 0;
    for (let i = 0; i < hay.length && j < needle.length; i++) {
      if (hay[i] === needle[j]) j++;
    }
    return j === needle.length;
  };

  const open = () => {
    overlay.classList.add("open");
    input.value = "";
    input.focus();
    activeIdx = -1;
    render("");
  };
  const close = () => {
    overlay.classList.remove("open");
    input.value = "";
    results.replaceChildren();
    activeIdx = -1;
  };

  const render = (q) => {
    const matches = [];
    if (q.length > 0) {
      pages.forEach((p) => {
        if (fuzzyMatch(q, p.t) || fuzzyMatch(q, p.d)) matches.push(p);
      });
    }
    if (q.length === 0) {
      results.replaceChildren();
      activeIdx = -1;
      return;
    }
    if (matches.length === 0) {
      const empty = document.createElement("div");
      empty.className = "search-empty";
      empty.textContent = noResults(q);
      results.replaceChildren(empty);
      activeIdx = -1;
      return;
    }
    const frag = document.createDocumentFragment();
    matches.forEach((m, i) => {
      const a = document.createElement("a");
      a.className = "search-result" + (i === 0 ? " active" : "");
      a.href = m.u;
      a.dataset.idx = i;
      const title = document.createElement("div");
      title.className = "search-result-title";
      title.textContent = m.t;
      const desc = document.createElement("div");
      desc.className = "search-result-desc";
      desc.textContent = m.d;
      a.appendChild(title);
      a.appendChild(desc);
      frag.appendChild(a);
    });
    results.replaceChildren(frag);
    activeIdx = 0;
  };

  const updateActive = () => {
    const items = results.querySelectorAll(".search-result");
    items.forEach((el, i) => el.classList.toggle("active", i === activeIdx));
    if (items[activeIdx]) items[activeIdx].scrollIntoView({ block: "nearest" });
  };

  if (trigger) trigger.addEventListener("click", (e) => { e.preventDefault(); open(); });

  document.addEventListener("keydown", (e) => {
    if ((isMac ? e.metaKey : e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      overlay.classList.contains("open") ? close() : open();
      return;
    }
    if (!overlay.classList.contains("open")) { return; }
    if (e.key === "Escape") { e.preventDefault(); close(); return; }
    const items = results.querySelectorAll(".search-result");
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (items.length) { activeIdx = (activeIdx + 1) % items.length; updateActive(); }
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (items.length) { activeIdx = (activeIdx - 1 + items.length) % items.length; updateActive(); }
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      if (items[activeIdx]) window.location.href = items[activeIdx].getAttribute("href");
    }
  });
  input.addEventListener("input", () => { activeIdx = -1; render(input.value.trim()); });
  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
})();

// ----- 6. Copy-to-clipboard on <pre> blocks -------------------------------
(() => {
  const COPY = "Copy";
  const COPIED = "Copied!";
  const RESET_MS = 2000;

  const fallbackCopy = (text, btn) => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.cssText = "position:fixed;left:-9999px";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      btn.textContent = COPIED;
      setTimeout(() => { btn.textContent = COPY; }, RESET_MS);
    } catch (_e) { /* execCommand may be unsupported */ }
    document.body.removeChild(ta);
  };

  document.querySelectorAll("pre").forEach((pre) => {
    if (pre.querySelector(".copy-btn")) { return; }
    const btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.type = "button";
    btn.textContent = COPY;
    btn.setAttribute("aria-label", "Copy code to clipboard");
    btn.addEventListener("click", () => {
      const text = pre.textContent.replace(/^Copy(ied!)?/, "").trim();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(
          () => {
            btn.textContent = COPIED;
            setTimeout(() => { btn.textContent = COPY; }, RESET_MS);
          },
          () => fallbackCopy(text, btn)
        );
      } else {
        fallbackCopy(text, btn);
      }
    });
    pre.appendChild(btn);
  });
})();
