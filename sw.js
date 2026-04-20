// sw.js — Service Worker Cubiscan PWA
// Incrementa CACHE_VERSION con cada deploy para forzar actualización automática
const CACHE_VERSION = 'v1.0.0';
const CACHE_NAME = `cubiscan-${CACHE_VERSION}`;

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/styles.css',
  './js/main.js',
  './js/data/database.js',
  './js/modules/generator.js',
  './js/modules/modal.js',
  './js/modules/storage.js',
  './js/modules/ui.js',
  './assets/icons/icon-192x192.png',
  './assets/icons/icon-512x512.png',
  'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;600;700&display=swap'
];

// ── INSTALL: precachear assets ────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting()) // Activa el nuevo SW inmediatamente
  );
});

// ── ACTIVATE: limpiar caches antiguas ────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name.startsWith('cubiscan-') && name !== CACHE_NAME)
          .map((name) => {
            console.log('[SW] Eliminando caché antigua:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim()) // Toma control de todos los clientes
  );
});

// ── FETCH: Network-first para HTML/JS/CSS, Cache-first para assets ─
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Solo interceptar peticiones del mismo origen o assets conocidos
  if (request.method !== 'GET') return;

  // Estrategia Network-First para archivos JS, HTML, CSS (código fuente)
  if (
    url.pathname.endsWith('.html') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.css') ||
    url.pathname === '/' ||
    url.pathname === ''
  ) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Guardar copia fresca en caché
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          return response;
        })
        .catch(() => caches.match(request)) // Fallback a caché si hay error de red
    );
    return;
  }

  // Cache-First para imágenes y fuentes
  event.respondWith(
    caches.match(request).then((cached) => {
      return cached || fetch(request).then((response) => {
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
        return response;
      });
    })
  );
});

// ── MENSAJE: forzar actualización desde la app ───────────────────
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
