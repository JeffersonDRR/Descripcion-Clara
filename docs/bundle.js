if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swPath = location.pathname.includes('github.io') 
      ? '/DescripcionClara.Web/docs/service-worker.js'
      : '/service-worker.js';
      
    navigator.serviceWorker.register(swPath)
      .then((registration) => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch((error) => {
        console.log('Error al registrar el Service Worker:', error);
      });
  });
}

console.log('PWA funcionando');