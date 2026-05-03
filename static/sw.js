/**
 * skeletonic.io — service worker.
 *
 * Strategy:
 *   1. Static assets (CSS / JS / images / fonts / search-data.json
 *      / manifest) — cache-first with revalidation. The asset URL
 *      paths include a fingerprint hash on most files so a content
 *      change always produces a new URL → automatic invalidation.
 *   2. HTML documents — network-first with a 3 s timeout, falling
 *      back to the cached copy and finally to the localised
 *      `/offline/` page when the network is unreachable.
 *   3. Cross-origin requests (cloudcdn.pro, cdn.jsdelivr.net,
 *      formspree.io) bypass the worker entirely — those resources
 *      are governed by their own caching headers.
 *
 * Lifecycle:
 *   - On install, prime the cache with the offline page and the
 *     core assets so a fresh install can serve the offline UI.
 *   - On activate, drop any cache version other than the current
 *     one so old fingerprints don't accumulate forever.
 */

const VERSION = "skel-1";
const CACHE = `skeletonic-${VERSION}`;

const PRECACHE = [
  "/",
  "/offline/",
  "/css/skeletonic.min.css",
  "/css/chrome.css",
  "/js/main.js",
  "/manifest.webmanifest",
  "/images/logo.svg",
  "/images/favicon.ico",
];

// Locale → offline page slug. fr uses `hors-ligne`; every other
// translated locale stays on the English `offline` slug. When a
// locale page can't be served fresh and isn't in the cache, the
// worker falls back to the matching localised offline page so a
// French user offline doesn't get an English error message.
const OFFLINE_BY_LOCALE = {
  ar: "/ar/offline/", bn: "/bn/offline/", cs: "/cs/offline/",
  de: "/de/offline/", es: "/es/offline/", fil: "/fil/offline/",
  fr: "/fr/hors-ligne/", ha: "/ha/offline/", he: "/he/offline/",
  hi: "/hi/offline/", id: "/id/offline/", it: "/it/offline/",
  ja: "/ja/offline/", ko: "/ko/offline/", nl: "/nl/offline/",
  pl: "/pl/offline/", "pt-br": "/pt-br/offline/", ro: "/ro/offline/",
  ru: "/ru/offline/", sv: "/sv/offline/", th: "/th/offline/",
  tr: "/tr/offline/", uk: "/uk/offline/", vi: "/vi/offline/",
  yo: "/yo/offline/", "zh-hans": "/zh-hans/offline/",
  "zh-hant": "/zh-hant/offline/",
};

// Pick the offline URL that best matches the requested page's
// locale. The locale is the first path segment when it's a known
// translation root.
const offlineFallbackFor = (pathname) => {
  const seg = pathname.split("/")[1] || "";
  return OFFLINE_BY_LOCALE[seg] || "/offline/";
};

// Asset extensions that get the cache-first treatment.
const STATIC_RE = /\.(?:css|js|json|svg|png|jpg|jpeg|gif|webp|avif|ico|woff2?|ttf)$/;
const HTML_TIMEOUT_MS = 3000;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      // `addAll` is atomic — if any single fetch fails, the entire
      // install rolls back. We swallow individual failures with
      // Promise.allSettled so one missing icon doesn't keep the
      // worker from installing.
      Promise.allSettled(
        PRECACHE.map((url) =>
          fetch(url, { credentials: "same-origin" })
            .then((res) => (res.ok ? cache.put(url, res) : null))
            .catch(() => null),
        ),
      ),
    ),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k.startsWith("skeletonic-") && k !== CACHE)
          .map((k) => caches.delete(k)),
      ),
    ),
  );
  self.clients.claim();
});

const isHTML = (req) => req.headers.get("accept") && req.headers.get("accept").includes("text/html");

const networkFirst = (req) =>
  Promise.race([
    fetch(req)
      .then((res) => {
        // Stash a fresh copy for offline.
        if (res.ok && req.method === "GET") {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }),
    new Promise((_resolve, reject) =>
      setTimeout(() => reject(new Error("timeout")), HTML_TIMEOUT_MS),
    ),
  ]).catch(() => {
    const fallback = offlineFallbackFor(new URL(req.url).pathname);
    return caches
      .match(req)
      .then(
        (hit) =>
          hit ||
          caches.match(fallback) ||
          caches.match("/offline/"),
      );
  });

const cacheFirst = (req) =>
  caches.match(req).then(
    (hit) =>
      hit ||
      fetch(req).then((res) => {
        if (res.ok && req.method === "GET") {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }),
  );

self.addEventListener("fetch", (event) => {
  const req = event.request;
  // Skip non-GET, cross-origin, and explicit no-store.
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.cache === "no-store") return;

  if (isHTML(req)) {
    event.respondWith(networkFirst(req));
  } else if (STATIC_RE.test(url.pathname)) {
    event.respondWith(cacheFirst(req));
  }
});
