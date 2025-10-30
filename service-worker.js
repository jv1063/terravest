// service-worker.js (balanced strategy)
const CACHE_NAME = "v6";
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/style.css",
  "/main.js",
  "/icons/icon-192.png",
  // Project-specific entries to ensure map works when directly opened
  "./map.html",
  "./manifest.json",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(STATIC_ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)))
    )
  );
});

// Dynamic caching strategy
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // 1️⃣ Never intercept/caches for map tiles or GeoJSON; let network handle directly
  if (url.href.includes("ArcGIS") || url.hostname.includes("arcgisonline") || url.pathname.includes("tile") || url.pathname.endsWith(".geojson")) {
    return; // bypass SW, avoids stale/hung promises
  }

  // 2️⃣ Cache-first for other static assets
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
