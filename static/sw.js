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
  ]).catch(() =>
    caches.match(req).then((hit) => hit || caches.match("/offline/")),
  );

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
