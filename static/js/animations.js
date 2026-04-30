// /animations/ page — replays demo keyframes on click and auto-plays
// once on first paint, but only when the user has not requested
// reduce-motion. Loaded via <script src> so the page complies with
// `script-src 'self'` CSP without needing inline-script hashes.

(function () {
  'use strict';

  function replayAnim(target, name) {
    if (!target) return;
    target.className = 'anim-target';
    void target.offsetWidth; // force reflow so the keyframe restarts
    target.classList.add(name);
  }

  function onCardClick(event) {
    var btn = event.target.closest('button[data-anim]');
    if (!btn) return;
    var card = btn.closest('.anim-card');
    if (!card) return;
    var target = card.querySelector('.anim-target');
    var name = btn.getAttribute('data-anim');
    if (target && name) replayAnim(target, name);
  }

  function autoPlay() {
    if (!window.matchMedia) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.querySelectorAll('.anim-target').forEach(function (t) {
      var name = t.getAttribute('data-anim');
      if (!name) return;
      setTimeout(function () { t.classList.add(name); }, 200);
    });
  }

  function init() {
    document.addEventListener('click', onCardClick);
    autoPlay();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
