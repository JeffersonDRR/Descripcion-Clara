const CACHE_NAME = 'descripcion-clara-cache';
const urlsToCache = [
  '/DescripcionClara.Web/',
  '/DescripcionClara.Web/index.html',
  '/DescripcionClara.Web/styles.css',
  '/DescripcionClara.Web/index.js',
  '/DescripcionClara.Web/icon-192x192.png',
  '/DescripcionClara.Web/icon-512x512.png',
  '/DescripcionClara.Web/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});