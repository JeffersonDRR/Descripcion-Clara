// Verificar si el navegador soporta Service Workers
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Intentar registrar el Service Worker
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('Service Worker registrado con éxito:', registration);
    }).catch((error) => {
      console.log('Error al registrar el Service Worker:', error);
    });
  });
}

// Mensaje básico de prueba para asegurarnos de que el archivo está siendo cargado
console.log("PWA funcionando");

// Puedes agregar más código aquí para la lógica de tu aplicación