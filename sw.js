// sw.js — Service Worker Cubiscan PWA
// ⚠️ NO necesitas cambiar nada aquí en cada deploy.
const CACHE_VERSION = 'v2';
const CACHE_NAME = `cubiscan-${CACHE_VERSION}`;

// Archivos que se cachean para funcionar offline
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/styles.css',
  './js/main.js',
  './js/data/database.js',
  './js/modules/modal.js',
  './js/modules/storage.js',
  './js/modules/ui.js',
  './assets/icons/icon-192x192.png',
  './assets/icons/icon-512x512.png',
];

// ── INSTALL ───────────────────────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting()) // Activa el SW nuevo de inmediato
  );
});

// ── ACTIVATE: eliminar cachés viejas ─────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((k) => k.startsWith('cubiscan-') && k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ── FETCH ─────────────────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // ── database.js: SIEMPRE desde la red, sin caché ──────────────
  // Así cualquier cambio en GitHub se ve de inmediato en todos los
  // dispositivos sin necesidad de borrar caché ni pulsar Actualizar.
  if (url.pathname.endsWith('database.js')) {
    event.respondWith(
      fetch(request, { cache: 'no-store' })
        .catch(() => caches.match(request)) // offline: usar copia en caché
    );
    return;
  }

  // ── HTML / JS / CSS: Network-first ───────────────────────────
  // Siempre intenta traer la versión más reciente de GitHub.
  // Si no hay red, sirve desde caché.
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
          const clone = response.clone();
          caches.open(CACHE_NAME).then((c) => c.put(request, clone));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // ── Imágenes / fuentes: Cache-first ──────────────────────────
  event.respondWith(
    caches.match(request).then((cached) =>
      cached || fetch(request).then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((c) => c.put(request, clone));
        return response;
      })
    )
  );
});

// ── MENSAJE desde la app (botón Actualizar) ───────────────────────
self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});