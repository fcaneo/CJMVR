// Registro del service worker
// Hace que el sitio sea instalable como PWA y funcione offline.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/CJMVR/service-worker.js', { scope: '/CJMVR/' })
      .catch(err => console.warn('SW registro falló', err));
  });
}
