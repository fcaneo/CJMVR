// Registro del service worker
// Hace que el sitio sea instalable como PWA y funcione offline.
// La ruta se resuelve relativa a este script (assets/ -> raíz del sitio),
// así funciona igual en /CJMVR/ (GitHub Pages) que en un dominio propio.
(function () {
  if (!('serviceWorker' in navigator) || !document.currentScript) return;
  const siteRoot = new URL('../', document.currentScript.src);
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(new URL('service-worker.js', siteRoot), { scope: siteRoot.pathname })
      .catch(err => console.warn('SW registro falló', err));
  });
})();
