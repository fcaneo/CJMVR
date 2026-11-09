// Service Worker del Club Juegos de Mesa Quinta Región
// Estrategias:
//  - Páginas (navegación): network-first con timeout; si la red falla o tarda,
//    se sirve la copia en caché (y si no existe, la 404 cacheada).
//  - Assets estáticos (css, js, imágenes, manifest): stale-while-revalidate:
//    respuesta inmediata desde caché y actualización en segundo plano.
// Las rutas son relativas a este archivo, así funciona en /CJMVR/ y en un dominio propio.
// IMPORTANTE: al agregar/renombrar páginas o assets, actualizar CORE_ASSETS y subir CACHE_VERSION.

const CACHE_VERSION = 'cjmvr-v2';
const NETWORK_TIMEOUT_MS = 3000;
const CORE_ASSETS = [
  './',
  'index.html',
  'mesa.html',
  'dado.html',
  'sorteo.html',
  'marcador.html',
  'temporizador.html',
  'dados.html',
  'tichu.html',
  '404.html',
  'privacidad.html',
  'terminos.html',
  'manifest.json',
  'assets/site.css',
  'assets/tools.css',
  'assets/register-sw.js',
  'assets/common.js',
  'assets/juegos.js',
  'assets/icon.svg',
  'assets/icon-192.png',
  'assets/icon-512.png',
  'assets/icon-180.png',
  'assets/logo/cjmvr-logo-blanco.png'
];
const SCOPE = new URL('./', self.location).href;

// Install: precache individual (si un archivo falla, el resto igual queda cacheado)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => Promise.allSettled(CORE_ASSETS.map(path => cache.add(path))))
      .then(results => {
        const fallidos = results.filter(r => r.status === 'rejected').length;
        if (fallidos) console.warn(`SW install: ${fallidos} recursos sin precachear`);
      })
      .then(() => self.skipWaiting())
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

// Clave de caché sin query string: evita entradas duplicadas (?utm=..., ?fbclid=...)
function cacheKey(request) {
  const url = new URL(request.url);
  return url.origin + url.pathname;
}

function guardar(request, response) {
  if (response && response.status === 200 && response.type === 'basic') {
    const copia = response.clone();
    caches.open(CACHE_VERSION).then(cache => cache.put(cacheKey(request), copia));
  }
  return response;
}

async function paginaNetworkFirst(event) {
  const { request } = event;
  const red = fetch(request).then(res => guardar(request, res));
  try {
    return await Promise.race([
      red,
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), NETWORK_TIMEOUT_MS))
    ]);
  } catch (e) {
    // Si la red tarda, igual dejamos que termine para actualizar la caché
    event.waitUntil(red.catch(() => {}));
    const cached = await caches.match(cacheKey(request));
    if (cached) return cached;
    try { return await red; } catch (err) {
      return (await caches.match(new URL('404.html', SCOPE).href)) ||
        new Response('Sin conexión', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    }
  }
}

async function assetStaleWhileRevalidate(event) {
  const { request } = event;
  const cached = await caches.match(cacheKey(request));
  const red = fetch(request).then(res => guardar(request, res));
  if (cached) {
    event.waitUntil(red.catch(() => {}));
    return cached;
  }
  try { return await red; } catch (e) {
    return new Response('', { status: 504, statusText: 'Offline' });
  }
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  // Solo GETs dentro del alcance del sitio (ignoramos Google Fonts y otros orígenes)
  if (req.method !== 'GET' || !req.url.startsWith(SCOPE)) return;

  if (req.mode === 'navigate') {
    event.respondWith(paginaNetworkFirst(event));
  } else {
    event.respondWith(assetStaleWhileRevalidate(event));
  }
});
