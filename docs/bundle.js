if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swPath = '/DescripcionClara.Web/docs/service-worker.js';
    const swScope = '/DescripcionClara.Web/docs/';
    
    navigator.serviceWorker.register(swPath, { scope: swScope })
      .then((registration) => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch((error) => {
        console.log('Error al registrar el Service Worker:', error);
      });
  });
}

console.log('PWA funcionando');