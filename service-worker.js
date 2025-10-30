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

  // 1️⃣ Cache map tiles (Esri, ArcGIS, etc.) for up to 6 months
  if (url.hostname.includes("arcgisonline") || url.pathname.includes("tile")) {
    event.respondWith(
      caches.open("map-tiles").then((cache) =>
        cache.match(event.request).then((cached) => {
          const fetchPromise = fetch(event.request)
            .then((response) => {
              cache.put(event.request, response.clone());
              return response;
            })
            .catch(() => cached);
          return cached || fetchPromise;
        })
      )
    );
    return;
  }

  // 2️⃣ Always fetch fresh GeoJSON (property layer)
  if (url.pathname.endsWith(".geojson")) {
    event.respondWith(fetch(event.request));
    return;
  }

  // 3️⃣ Cache-first for static assets
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
