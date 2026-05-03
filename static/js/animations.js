// /animations/ — interactive gallery for skeletonic-animations.min.css.
//
// Behaviours, all CSP-clean (loaded via <script src> under
// `script-src 'self'` — no inline event handlers, no inline scripts):
//
//   1. Detect prefers-reduced-motion:
//      - off → autoplay each card once when scrolled into view
//      - on  → show explanatory banner with a "Show animations anyway"
//              opt-in that fetches /css/skeletonic-animations.min.css,
//              strips the @media gate, and re-injects the keyframes so
//              the demo runs even under OS-level reduce-motion.
//   2. Hover or focus a card → replays the animation (animate.style style).
//   3. Click or Enter on a card → copies `.{name}` to the clipboard
//      with a toast confirmation.
//   4. Search input → live-filters cards by name (case-insensitive).
//   5. Category chips → filter to a single family.
//
// All DOM mutations use classList; no innerHTML on user content.
//
// Browser support: ES2018 (async/await, fetch, IntersectionObserver,
// matchMedia, classList). All Safari 14+, Firefox 90+, Chrome 90+.

(function () {
  'use strict';

  var ANIM_CSS_URL = '/css/skeletonic-animations.min.css';
  var TOAST_MS = 1500;

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  // ── 1. Replay engine ──────────────────────────────────────────────
  // v2.0.0 ships sensible animation-duration / iteration-count /
  // fill-mode / timing-function defaults on every class, so the
  // class alone is enough under no-preference. Under force-play we
  // still need the inline `!important` longhands because the library
  // reset's universal `* { animation-duration:.01ms !important }`
  // rule under prefers-reduced-motion: reduce trumps the class rules.
  function replay(target, name) {
    // Caller (replayCard) has already null-checked `target` and gated
    // on `name` being non-empty, so no defensive guard here.
    target.classList.remove(name);
    /* eslint-disable-next-line no-unused-expressions */
    target.offsetWidth;  // force reflow so the keyframe restarts
    if (forceInjected) {
      target.style.setProperty('animation-name', name, 'important');
      target.style.setProperty('animation-duration', '1s', 'important');
      target.style.setProperty('animation-iteration-count', '1', 'important');
      target.style.setProperty('animation-fill-mode', 'both', 'important');
      target.style.setProperty('animation-timing-function', 'ease-in-out', 'important');
    }
    target.classList.add(name);
  }

  function replayCard(card) {
    var t = card && card.querySelector('.anim-target');
    if (!t) return;
    var name = t.getAttribute('data-anim');
    if (name) replay(t, name);
  }

  // ── 2. Force-play under reduce-motion ─────────────────────────────
  // Library gates EVERYTHING (keyframes + animation-name mappings)
  // behind @media (prefers-reduced-motion: no-preference). When the
  // user opts in via the banner button we fetch the CSS, strip that
  // outer @media wrapper, and inject the resulting CSS so every
  // keyframe + class becomes available regardless of OS preference.
  // We never silently override the user — only when they click.
  var forceInjected = false;
  async function forcePlay() {
    if (forceInjected) return;
    try {
      var res = await fetch(ANIM_CSS_URL, { credentials: 'same-origin' });
      if (!res.ok) throw new Error('fetch failed: ' + res.status);
      var css = await res.text();
      var unscoped = unwrapReducedMotionGate(css);
      var style = document.createElement('style');
      style.id = 'anim-force-style';
      style.textContent = unscoped;
      document.head.appendChild(style);
      forceInjected = true;
      document.documentElement.classList.add('anim-force-on');
      // Replay every card with a small stagger now that the user has
      // opted in. We bypass the IntersectionObserver path because the
      // user just explicitly asked for motion — no point gating on
      // viewport visibility.
      $$('.anim-card').forEach(function (card, i) {
        setTimeout(function () { replayCard(card); }, (i % 18) * 35);
      });
    } catch (err) {
      /* swallow — banner stays visible, user can retry */
    }
  }

  function unwrapReducedMotionGate(css) {
    // Strip BOTH the outer `@layer skeletonic` wrapper AND the inner
    // `@media (prefers-reduced-motion: no-preference)` gate so the
    // resulting CSS is unscoped (no layer, no media). The library's
    // already-loaded sheet keeps its layer assignment; we just need a
    // higher-priority unlayered copy of the same rules.
    var out = css;
    out = stripWrapper(out, /@media\s*\(\s*prefers-reduced-motion\s*:\s*no-preference\s*\)\s*\{/);
    out = stripWrapper(out, /@layer\s+skeletonic\s*\{/);
    return out;
  }

  function stripWrapper(css, openRe) {
    var match = css.match(openRe);
    if (!match) return css;
    var open = match.index;
    var bodyStart = open + match[0].length;
    var depth = 1;
    var i = bodyStart;
    while (i < css.length && depth > 0) {
      var c = css.charAt(i);
      if (c === '{') depth++;
      else if (c === '}') depth--;
      i++;
    }
    if (depth !== 0) return css;
    var bodyEnd = i - 1;
    return css.slice(0, open) + css.slice(bodyStart, bodyEnd) + css.slice(bodyEnd + 1);
  }

  // ── 3. Reduce-motion detection + banner wiring ────────────────────
  function isReduceMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  function wireBanner() {
    var banner = $('#anim-rm-banner');
    if (!banner) return;
    if (isReduceMotion()) banner.removeAttribute('hidden');
    var btn = banner.querySelector('[data-anim-toolbar="force"]');
    if (btn) {
      btn.addEventListener('click', function () {
        forcePlay();
        btn.disabled = true;
        btn.textContent = 'Animations enabled — replaying';
      });
    }
  }

  // ── 4. Autoplay (only when motion is allowed) ─────────────────────
  // Above-the-fold cards play immediately; below-the-fold cards play
  // when scrolled into view. Stagger by 30ms per card so the page
  // doesn't strobe when 45 keyframes start in the same paint.
  function autoplayInView() {
    if (isReduceMotion() && !forceInjected) return;
    var cards = $$('.anim-card');
    if (!('IntersectionObserver' in window)) {
      cards.forEach(function (c, i) { setTimeout(function () { replayCard(c); }, i * 30); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var idx = cards.indexOf(entry.target);
        setTimeout(function () { replayCard(entry.target); }, Math.max(0, idx % 12) * 40);
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -5% 0px', threshold: 0.25 });
    cards.forEach(function (card) { io.observe(card); });
  }

  // ── 5. Hover / focus → replay ─────────────────────────────────────
  function wireHoverPlay() {
    document.addEventListener('mouseenter', function (e) {
      if (e.target && e.target.classList && e.target.classList.contains('anim-card')) {
        replayCard(e.target);
      }
    }, true);
    document.addEventListener('focusin', function (e) {
      if (e.target && e.target.classList && e.target.classList.contains('anim-card')) {
        replayCard(e.target);
      }
    });
  }

  // ── 6. Click / Enter → copy class name ────────────────────────────
  function wireCopyClass() {
    function trigger(card) {
      var name = card.getAttribute('data-name');
      if (!name) return;
      var snippet = '.' + name;
      copyToClipboard(snippet).then(function (ok) {
        if (ok) showToast(snippet);
      });
    }
    document.addEventListener('click', function (e) {
      var card = e.target && e.target.closest && e.target.closest('.anim-card');
      if (card) trigger(card);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var card = e.target && e.target.closest && e.target.closest('.anim-card');
      if (!card) return;
      e.preventDefault();
      trigger(card);
    });
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(function () { return true; }).catch(function () { return false; });
    }
    /* execCommand fallback */
    return new Promise(function (resolve) {
      try {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'absolute';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        var ok = document.execCommand('copy');
        document.body.removeChild(ta);
        resolve(ok);
      } catch (err) {
        resolve(false);
      }
    });
  }

  var toastTimer = null;
  function showToast(snippet) {
    var toast = $('#anim-toast');
    var label = $('#anim-toast-class');
    if (!toast || !label) return;
    label.textContent = snippet;
    toast.removeAttribute('hidden');
    toast.classList.add('is-visible');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove('is-visible');
      setTimeout(function () { toast.setAttribute('hidden', ''); }, 200);
    }, TOAST_MS);
  }

  // ── 7. Search + category filter ───────────────────────────────────
  function wireFilters() {
    var search = $('#anim-search');
    var grid = $('#anim-grid');
    var empty = $('#anim-empty');
    var chips = $$('.anim-chip');
    var cards = $$('.anim-card', grid);
    var state = { q: '', family: 'all' };

    function apply() {
      var q = state.q.trim().toLowerCase();
      var fam = state.family;
      var visible = 0;
      cards.forEach(function (card) {
        var matchFam = fam === 'all' || card.getAttribute('data-family') === fam;
        var name = (card.getAttribute('data-name') || '').toLowerCase();
        var matchQ = q === '' || name.indexOf(q) !== -1;
        var show = matchFam && matchQ;
        card.toggleAttribute('hidden', !show);
        if (show) visible++;
      });
      if (empty) empty.toggleAttribute('hidden', visible !== 0);
    }

    if (search) {
      search.addEventListener('input', function () { state.q = search.value; apply(); });
    }
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) {
          c.classList.remove('is-active');
          c.setAttribute('aria-selected', 'false');
        });
        chip.classList.add('is-active');
        chip.setAttribute('aria-selected', 'true');
        state.family = chip.getAttribute('data-anim-filter') || 'all';
        apply();
      });
    });
  }

  // ── 8. Init ───────────────────────────────────────────────────────
  function init() {
    wireBanner();
    wireHoverPlay();
    wireCopyClass();
    wireFilters();
    autoplayInView();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
