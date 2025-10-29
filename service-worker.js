/* service-worker.js */
const SW_VERSION = 'v1.2.0';
const CACHE_PREFIX = 'terravest-pwa-';
const CACHE_NAME = `${CACHE_PREFIX}${SW_VERSION}`;
// Detect caches support (Safari private mode / older WebKit)
const HAS_CACHES = (typeof self !== 'undefined') && (typeof caches !== 'undefined');

// Keep core, lightweight assets only. Do not include large videos.
const CORE_ASSETS = [
  './',
  './map.html',
  './manifest.json',
  './assets/app_icon.png',
  './assets/terravest_logo.png',
  './assets/background_video_image.png'
];

// Install: pre-cache core assets
self.addEventListener('install', (event) => {
  console.log('[SW]', SW_VERSION, 'installing… HAS_CACHES=', HAS_CACHES);
  event.waitUntil(
    (async () => {
      if (!HAS_CACHES) {
        console.warn('[SW] caches API not available; skipping pre-cache');
        await self.skipWaiting();
        return;
      }
      try {
        const cache = await caches.open(CACHE_NAME);
        console.log('[SW] Caching core assets:', CORE_ASSETS);
        await cache.addAll(CORE_ASSETS);
        // Optionally try to cache index.html if it exists
        try {
          await cache.add('./index.html');
          console.log('[SW] Cached optional ./index.html');
        } catch (optErr) {
          console.warn('[SW] Optional ./index.html not cached (may not exist).');
        }
      } catch (e) {
        console.warn('[SW] Install cache warning:', e);
      }
      await self.skipWaiting();
    })()
  );
});

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW]', SW_VERSION, 'activating…');
  event.waitUntil(
    (async () => {
      if (!HAS_CACHES) {
        await self.clients.claim();
        console.log('[SW] Active without caches');
        return;
      }
      const keys = await caches.keys();
      const deletions = keys.map((k) => {
        if (k.startsWith(CACHE_PREFIX) && k !== CACHE_NAME) {
          console.log('[SW] Deleting old cache:', k);
          return caches.delete(k);
        }
        return Promise.resolve(false);
      });
      await Promise.all(deletions);
      await self.clients.claim();
      console.log('[SW] Active with cache:', CACHE_NAME);
    })()
  );
});

// Fetch: handle same-origin GET requests
self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method !== 'GET') return;

  // If caches are unavailable (Safari private mode), use network-only strategy with safe fallbacks
  if (!HAS_CACHES) {
    const reqUrl = new URL(request.url);
    if (reqUrl.origin !== self.location.origin) return;
    if (request.mode === 'navigate') {
      event.respondWith(
        fetch(request).catch(() => new Response('<h1>Offline</h1><p>Content not available offline.</p>', {
          headers: { 'Content-Type': 'text/html' }
        }))
      );
      return;
    }
    event.respondWith(
      fetch(request).catch(() => new Response('', { status: 504, statusText: 'Offline' }))
    );
    return;
  }

  const reqUrl = new URL(request.url);

  // Only control same-origin requests
  if (reqUrl.origin !== self.location.origin) return;

  // Navigation requests: cache-first with network fallback, then offline fallback to start page
  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_NAME);
        const cached = await cache.match(request);
        if (cached) {
          console.log('[SW] NAV cache hit:', request.url);
          return cached;
        }

        try {
          const response = await fetch(request);
          if (response && response.ok) {
            cache.put(request, response.clone());
            console.log('[SW] NAV cached from network:', request.url);
          }
          return response;
        } catch {
          const fallback = await cache.match('./map.html');
          console.warn('[SW] NAV offline, using fallback for', request.url);
          return (
            fallback ||
            new Response('<h1>Offline</h1><p>Content not available offline.</p>', {
              headers: { 'Content-Type': 'text/html' }
            })
          );
        }
      })()
    );
    return;
  }

  // Other same-origin GETs: cache-first, then network
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);
      if (cached) {
        // console.debug('[SW] cache hit:', request.url);
        return cached;
      }

      try {
        const response = await fetch(request);
        if (response && response.ok) {
          cache.put(request, response.clone());
          // console.debug('[SW] cached from network:', request.url);
        }
        return response;
      } catch {
        return new Response('', { status: 504, statusText: 'Offline' });
      }
    })()
  );
});
