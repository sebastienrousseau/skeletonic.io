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
    root.style.colorScheme = theme;
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (_e) { /* storage unavailable */ }
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

// ----- 5. Search overlay (lazy-loaded index) ------------------------------
//
// The 28-locale × 13-entry search dataset used to live as an
// ~50 KB literal in this file (gzipped ~10 KB) — every page paid
// for parsing it on first paint, even visitors who never opened
// `⌘K`. The data now ships as a separate static JSON
// (`/js/search-data.json`) and is fetched on first overlay open,
// cached in a module-level promise so subsequent opens reuse the
// in-memory copy without a network round-trip.
//
// On the home page this drops the parsed JS work item from
// ~5 ms to ~0 ms on a mid-tier mobile CPU and shaves ~9 KB off
// the gzipped bundle.
(() => {
  const overlay = document.getElementById("searchOverlay");
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");
  const trigger = document.getElementById("searchTrigger");
  if (!overlay || !input || !results) return;

  const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent || "");
  document.querySelectorAll(".search-shortcut").forEach((el) => {
    el.textContent = isMac ? "⌘K" : "Ctrl+K";
  });

  const lang = document.documentElement.getAttribute("lang") || "en";
  const prefix = lang === "en" ? "" : "/" + lang;
  const SEARCH_DATA_URL = "/js/search-data.json";

  // Compact map of "no results" templates. ~1 KB total — orders of
  // magnitude smaller than the full embedded i18n it replaced.
  const NO_RESULTS = {
    en: function (q) { return "No results for “" + q + "”"; },
    fr: function (q) { return "Aucun résultat pour « " + q + " »"; },
    de: function (q) { return "Keine Ergebnisse für „" + q + "“"; },
    ar: function (q) { return "لا نتائج لـ «" + q + "»"; },
    bn: function (q) { return "“" + q + "” এর জন্য কোনো ফলাফল নেই"; },
    cs: function (q) { return "Žádné výsledky pro „" + q + "“"; },
    es: function (q) { return "Sin resultados para «" + q + "»"; },
    fil: function (q) { return "Walang resulta para sa “" + q + "”"; },
    ha: function (q) { return "Babu sakamako don “" + q + "”"; },
    he: function (q) { return "אין תוצאות עבור „" + q + "“"; },
    hi: function (q) { return "“" + q + "” के लिए कोई परिणाम नहीं"; },
    id: function (q) { return "Tidak ada hasil untuk “" + q + "”"; },
    it: function (q) { return "Nessun risultato per “" + q + "”"; },
    ja: function (q) { return "「" + q + "」の検索結果はありません"; },
    ko: function (q) { return "“" + q + "”에 대한 검색 결과가 없습니다"; },
    nl: function (q) { return "Geen resultaten voor “" + q + "”"; },
    pl: function (q) { return "Brak wyników dla „" + q + "”"; },
    "pt-br": function (q) { return "Nenhum resultado para “" + q + "”"; },
    ro: function (q) { return "Niciun rezultat pentru „" + q + "”"; },
    ru: function (q) { return "Нет результатов для «" + q + "»"; },
    sv: function (q) { return "Inga resultat för ”" + q + "”"; },
    th: function (q) { return "ไม่พบผลลัพธ์สำหรับ “" + q + "”"; },
    tr: function (q) { return "“" + q + "” için sonuç bulunamadı"; },
    uk: function (q) { return "Немає результатів для «" + q + "»"; },
    vi: function (q) { return "Không có kết quả cho “" + q + "”"; },
    yo: function (q) { return "Kò sí àbájádé fún “" + q + "”"; },
    "zh-hans": function (q) { return "“" + q + "” 没有搜索结果"; },
    "zh-hant": function (q) { return "“" + q + "” 沒有搜尋結果"; },
  };
  const noResults = NO_RESULTS[lang] || NO_RESULTS.en;

  // Loading / pending status copy (shown for the brief moment between
  // first overlay open and the index arriving from the network).
  const LOADING = {
    en: "Loading…", fr: "Chargement…", de: "Lädt…",
    ar: "جاري التحميل…",
    bn: "লোড হচ্ছে…",
    cs: "Načítání…", es: "Cargando…",
    fil: "Naglo-load…", ha: "Ana lodi…",
    he: "טוען…",
    hi: "लोड हो रहा है…",
    id: "Memuat…", it: "Caricamento…",
    ja: "読み込み中…",
    ko: "로딩 중…",
    nl: "Laden…", pl: "Ładowanie…", "pt-br": "Carregando…",
    ro: "Se încarcă…",
    ru: "Загрузка…",
    sv: "Laddar…",
    th: "กำลังโหลด…",
    tr: "Yükleniyor…",
    uk: "Завантаження…",
    vi: "Đang tải…", yo: "Tóo gba…",
    "zh-hans": "加载中…",
    "zh-hant": "載入中…",
  };
  const loadingText = LOADING[lang] || LOADING.en;

  // Module-level cache: pages once resolved, the in-flight promise
  // while resolving. fetched at most once per page lifetime.
  let pages = null;
  let pagesPromise = null;

  function loadPages() {
    if (pages) return Promise.resolve(pages);
    if (pagesPromise) return pagesPromise;
    pagesPromise = fetch(SEARCH_DATA_URL, { credentials: "same-origin" })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(new Error("HTTP " + r.status)); })
      .then(function (data) {
        const base = (data && data.index && (data.index[lang] || data.index.en)) || [];
        pages = base.map(function (p) {
          return { t: p.t, d: p.d, u: prefix + p.u };
        });
        return pages;
      })
      .catch(function () {
        // Fail-soft: empty index so the overlay still opens / closes
        // and the empty state renders. Surface nothing to the user;
        // their browser network tab will show the 404 or net-error.
        pages = [];
        return pages;
      });
    return pagesPromise;
  }

  let activeIdx = -1;
  let lastQuery = "";

  function fuzzyMatch(needle, hay) {
    needle = needle.toLowerCase();
    hay = hay.toLowerCase();
    if (hay.indexOf(needle) !== -1) return true;
    let j = 0;
    for (let i = 0; i < hay.length && j < needle.length; i++) {
      if (hay[i] === needle[j]) j++;
    }
    return j === needle.length;
  }

  function renderLoading() {
    const empty = document.createElement("div");
    empty.className = "search-empty";
    empty.textContent = loadingText;
    results.replaceChildren(empty);
    activeIdx = -1;
  }

  function render(q) {
    lastQuery = q;
    if (q.length === 0) {
      results.replaceChildren();
      activeIdx = -1;
      return;
    }
    if (!pages) {
      renderLoading();
      // Re-render once the index has arrived if the user hasn't
      // already typed something else.
      loadPages().then(function () {
        if (lastQuery === q) render(q);
      });
      return;
    }
    const matches = [];
    pages.forEach(function (p) {
      if (fuzzyMatch(q, p.t) || fuzzyMatch(q, p.d)) matches.push(p);
    });
    if (matches.length === 0) {
      const empty = document.createElement("div");
      empty.className = "search-empty";
      empty.textContent = noResults(q);
      results.replaceChildren(empty);
      activeIdx = -1;
      return;
    }
    const frag = document.createDocumentFragment();
    matches.forEach(function (m, i) {
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
  }

  function open() {
    overlay.classList.add("open");
    input.value = "";
    input.focus();
    activeIdx = -1;
    lastQuery = "";
    render("");
    // Kick off the fetch in the background so that by the time the
    // user has typed even one character, the index is in memory.
    loadPages();
  }

  function close() {
    overlay.classList.remove("open");
    input.value = "";
    results.replaceChildren();
    activeIdx = -1;
    lastQuery = "";
  }

  function updateActive() {
    const items = results.querySelectorAll(".search-result");
    items.forEach(function (el, i) { el.classList.toggle("active", i === activeIdx); });
    if (items[activeIdx]) items[activeIdx].scrollIntoView({ block: "nearest" });
  }

  if (trigger) trigger.addEventListener("click", function (e) { e.preventDefault(); open(); });

  document.addEventListener("keydown", function (e) {
    if ((isMac ? e.metaKey : e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      overlay.classList.contains("open") ? close() : open();
      return;
    }
    if (!overlay.classList.contains("open")) return;
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
  input.addEventListener("input", function () { activeIdx = -1; render(input.value.trim()); });
  overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });
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

  // Shokunin's syntect highlight emits nested <pre>:
  //   <pre class="highlight"><code><pre style="…">code</pre></code></pre>
  // Without filtering, both pres get a copy button and they stack
  // visibly on hover. Skip any <pre> that has a positioned <pre>
  // ancestor — keep only the outermost block-level container.
  document.querySelectorAll("pre").forEach((pre) => {
    if (pre.closest("pre pre") === pre) { return; }
    if (pre.parentElement && pre.parentElement.closest("pre")) { return; }
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

// ----- 6.4 Token grid click-to-copy --------------------------------------
//
// /tokens/ has a `<ul class="token-grid">` of `<button class="token-card"
// data-token="--cl-primary">` cards. Clicking a card copies the token
// name (with the `--` prefix preserved) to the clipboard and flashes
// a confirmation. CSP-clean — async clipboard API with execCommand
// fallback shared with the .anim-card path.
(() => {
  const grids = document.querySelectorAll("[data-token-grid]");
  if (!grids.length) return;

  const flash = (card) => {
    card.classList.add("is-copied");
    setTimeout(() => card.classList.remove("is-copied"), 1500);
  };

  const copy = (text) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(
        () => true,
        () => false,
      );
    }
    return new Promise((resolve) => {
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.cssText = "position:fixed;left:-9999px";
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(ta);
        resolve(ok);
      } catch (_) { resolve(false); }
    });
  };

  grids.forEach((grid) => {
    grid.addEventListener("click", (e) => {
      const card = e.target && e.target.closest && e.target.closest(".token-card");
      if (!card) return;
      const token = card.getAttribute("data-token");
      if (!token) return;
      copy(token).then((ok) => { if (ok) flash(card); });
    });
  });
})();

// ----- 6.5 Palette switcher ----------------------------------------------
//
// Reads/writes a `data-palette` attribute on <html>. The CSS in
// chrome.css responds via `:root[data-palette="X"]` selectors that
// override exactly the brand-accent variables — the whole site
// reskins in one frame. Preference is persisted to localStorage so
// it sticks across navigations.
(() => {
  const KEY = "skeletonic-palette";
  const VALID = ["default", "ember", "iris", "lagoon"];
  const root = document.documentElement;

  // Apply the persisted choice as early as possible to avoid a flash.
  const initial = (() => {
    try { return localStorage.getItem(KEY); } catch { return null; }
  })();
  if (initial && VALID.includes(initial) && initial !== "default") {
    root.setAttribute("data-palette", initial);
  }

  const wrap = document.getElementById("paletteSwitcher");
  if (!wrap) return;
  const toggle = wrap.querySelector("#paletteToggle");
  const menu = wrap.querySelector("#paletteMenu");
  if (!toggle || !menu) return;

  // Mark the active swatch matching what's currently applied.
  const sync = () => {
    const cur = root.getAttribute("data-palette") || "default";
    menu.querySelectorAll(".palette-swatch").forEach((b) => {
      const v = b.getAttribute("data-palette");
      const active = v === cur;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-checked", active ? "true" : "false");
    });
  };
  sync();

  const open = () => {
    menu.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
  };
  const close = () => {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => (menu.hidden ? open() : close()));

  menu.addEventListener("click", (e) => {
    const btn = e.target && e.target.closest && e.target.closest(".palette-swatch");
    if (!btn) return;
    const v = btn.getAttribute("data-palette");
    if (!v || !VALID.includes(v)) return;
    if (v === "default") root.removeAttribute("data-palette");
    else root.setAttribute("data-palette", v);
    try { localStorage.setItem(KEY, v); } catch { /* storage may be denied */ }
    sync();
    close();
    toggle.focus();
  });

  // Click-outside or Escape closes the menu.
  document.addEventListener("click", (e) => {
    if (!menu.hidden && !wrap.contains(e.target)) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.hidden) {
      close();
      toggle.focus();
    }
  });
})();

// ----- 7. "Open in CodePen" button on every code block --------------------
//
// CodePen exposes a `prefill` API: POST a hidden form to
// https://codepen.io/pen/define with `data` containing a stringified
// JSON object describing the pen. We auto-link every code block (HTML
// or CSS) so a reader can open a live editor with skeletonic.min.css
// already in place. CSP-clean — pure DOM + form submit, no inline JS.
(() => {
  const PEN_ENDPOINT = "https://codepen.io/pen/define";
  const SKEL_CSS_HREF =
    "https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css";
  const SKEL_UI_HREF =
    "https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic-ui.min.css";

  const detectLang = (pre) => {
    const code = pre.querySelector("code") || pre;
    const cls = (code.className || "") + " " + (pre.className || "");
    if (/language-html|language-markup/.test(cls)) return "html";
    if (/language-css|language-stylus|language-scss/.test(cls)) return "css";
    return null; // skip bash, json, etc.
  };

  const buildPayload = (lang, source) => {
    const base = {
      title: "Skeletonic Stylus playground",
      description: "Live preview from skeletonic.io",
      head:
        `<link rel="stylesheet" href="${SKEL_CSS_HREF}">\n` +
        `<link rel="stylesheet" href="${SKEL_UI_HREF}">`,
      editors: lang === "css" ? "010" : "100",
      layout: "left",
    };
    if (lang === "html") base.html = source;
    if (lang === "css") base.css = source;
    return base;
  };

  document.querySelectorAll("pre").forEach((pre) => {
    if (pre.closest("pre pre") === pre) return;
    if (pre.parentElement && pre.parentElement.closest("pre")) return;
    if (pre.querySelector(".pen-btn")) return;
    const lang = detectLang(pre);
    if (!lang) return;

    const btn = document.createElement("button");
    btn.className = "pen-btn";
    btn.type = "button";
    btn.textContent = "Open in CodePen";
    // Unique accessible name per code block so WCAG SC 3.2.4
    // ("Consistent Identification" / WAVE F96) doesn't fire on
    // pages with many CodePen buttons sharing one label.
    let ordinal = 1;
    for (const p of document.querySelectorAll("pre")) {
      if (p === pre) break;
      if (detectLang(p)) ordinal++;
    }
    btn.setAttribute("aria-label", `Open code block ${ordinal} in a new CodePen tab`);
    btn.addEventListener("click", () => {
      // Strip the "Copy"/"Copied!"/"Open in CodePen" text the buttons
      // contribute to textContent. Take only what's inside <code>.
      const code = pre.querySelector("code");
      const source = (code ? code.textContent : pre.textContent)
        .replace(/^(Copy(ied!)?|Open in CodePen)\s*/m, "")
        .trim();
      if (!source) return;

      const form = document.createElement("form");
      form.action = PEN_ENDPOINT;
      form.method = "POST";
      form.target = "_blank";
      form.rel = "noopener noreferrer";
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "data";
      input.value = JSON.stringify(buildPayload(lang, source));
      form.appendChild(input);
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);
    });
    pre.appendChild(btn);
  });
})();

// ----- 8. Service worker registration -----------------------------------
//
// Registered AFTER the page has gone idle so it doesn't compete with
// first paint or critical-path JS. The SW (static/sw.js) caches CSS,
// JS, images, fonts and search-data.json with a cache-first strategy
// and HTML with network-first + 3 s timeout, so /offline/ is reachable
// when the network is unreachable. CSP is unaffected — the worker
// runs in a separate context governed by `worker-src 'self'`.
(() => {
  if (!("serviceWorker" in navigator)) return;
  if (location.protocol !== "https:" && location.hostname !== "localhost" && location.hostname !== "127.0.0.1") {
    return; // SW requires secure context
  }
  const register = () => {
    navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch(() => {
      // Swallow — the site works without the SW; this is enhancement.
    });
  };
  if (document.readyState === "complete") register();
  else window.addEventListener("load", register, { once: true });
})();

// ----- 9. Interactive OKLCH Theme Builder --------------------------------
(() => {
  const container = document.getElementById("oklchBuilder");
  if (!container) return;

  const lInput = document.getElementById("oklchL");
  const cInput = document.getElementById("oklchC");
  const hInput = document.getElementById("oklchH");
  const preview = document.getElementById("oklchPreview");
  const codeOut = document.getElementById("oklchCode");

  const update = () => {
    const l = lInput.value;
    const c = cInput.value;
    const h = hInput.value;
    const colorStr = `oklch(${l} ${c} ${h})`;
    if (preview) {
      preview.style.backgroundColor = colorStr;
      preview.textContent = colorStr;
    }
    if (codeOut) {
      codeOut.textContent = `:root {\n  --cl-primary: ${colorStr};\n}`;
    }
  };

  [lInput, cInput, hInput].forEach(el => el && el.addEventListener("input", update));
  update();
})();

// ----- 10. Live Framework Comparison Calculator ---------------------------
(() => {
  const container = document.getElementById("frameworkCalc");
  if (!container) return;

  const select = document.getElementById("calcFramework");
  const pagesInput = document.getElementById("calcPages");
  const savingsBytesEl = document.getElementById("calcSavedBytes");
  const savingsPercentEl = document.getElementById("calcSavedPercent");

  const SKELETONIC_GZIP = 7.7; // KB
  const FRAMEWORKS = {
    pico: 11.6,
    bootstrap: 30.9,
    bulma: 64.9,
    tailwind: 123.1
  };

  const update = () => {
    const fwKey = select ? select.value : "bootstrap";
    const pages = pagesInput ? Math.max(1, parseInt(pagesInput.value, 10) || 1) : 1;
    const targetGzip = FRAMEWORKS[fwKey] || 30.9;
    const diffPerLoad = targetGzip - SKELETONIC_GZIP;
    const totalSavedKB = diffPerLoad * pages * 1000; // assuming 1000 visitors per page

    if (savingsBytesEl) {
      savingsBytesEl.textContent = `${(totalSavedKB / 1024).toFixed(1)} MB`;
    }
    if (savingsPercentEl) {
      const pct = ((1 - SKELETONIC_GZIP / targetGzip) * 100).toFixed(0);
      savingsPercentEl.textContent = `${pct}% lighter`;
    }
  };

  if (select) select.addEventListener("change", update);
  if (pagesInput) pagesInput.addEventListener("input", update);
  update();
})();
