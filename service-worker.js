// Service Worker del Club Juegos de Mesa Quinta Región
// Estrategia: network-first con fallback a cache. Si la red falla,
// servimos lo que tengamos cacheado (asegura uso offline después
// de la primera visita).

const CACHE_VERSION = 'cjmvr-v1';
const CORE_ASSETS = [
  '/CJMVR/',
  '/CJMVR/index.html',
  '/CJMVR/mesa.html',
  '/CJMVR/dado.html',
  '/CJMVR/sorteo.html',
  '/CJMVR/marcador.html',
  '/CJMVR/temporizador.html',
  '/CJMVR/dados.html',
  '/CJMVR/tichu.html',
  '/CJMVR/404.html',
  '/CJMVR/privacidad.html',
  '/CJMVR/terminos.html',
  '/CJMVR/manifest.json',
  '/CJMVR/assets/tools.css',
  '/CJMVR/assets/icon.svg',
  '/CJMVR/assets/logo/cjmvr-logo-blanco.png'
];

// Install: precache de recursos críticos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
      .catch(err => console.warn('SW install: precache parcial', err))
  );
});

// Activate: limpia caches viejos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch: network-first, cache fallback
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Solo cacheamos GETs same-origin (ignoramos Google Fonts, Tailwind CDN)
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(req)
      .then(response => {
        // Solo cacheamos respuestas válidas
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(req, clone));
        }
        return response;
      })
      .catch(() => {
        // Sin red: tratar de servir desde cache
        return caches.match(req).then(cached => {
          if (cached) return cached;
          // Si la página no está cacheada, devolver 404 cacheada
          if (req.mode === 'navigate') {
            return caches.match('/CJMVR/404.html');
          }
          return new Response('', { status: 504, statusText: 'Offline' });
        });
      })
  );
});
