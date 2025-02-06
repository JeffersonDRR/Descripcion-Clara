if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/DescripcionClara.Web/docs/service-worker.js', {
      scope: '/DescripcionClara.Web/docs/'
    })
      .then((registration) => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch((error) => {
        console.log('Error al registrar el Service Worker:', error);
      });
  });
}

console.log('PWA funcionando');