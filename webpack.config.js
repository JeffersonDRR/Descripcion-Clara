const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  // Configuración del modo (puedes usar 'development' o 'production')
  mode: 'production',  // Cambia a 'production' cuando estés listo para producción

  // Entrada del archivo principal
  entry: './src/index.js',

  // Salida del archivo empaquetado
  output: {
    filename: 'bundle.js',  // El nombre del archivo generado
    path: path.resolve(__dirname, 'docs'), // Carpeta donde se guardará el archivo generado (usamos 'docs')
  },

  // Configuración de plugins
  plugins: [
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,  // Los service workers asumirán el control de inmediato
      skipWaiting: true    // El service worker se activará inmediatamente después de la instalación
    })
  ],

  // Configuración para servir contenido estático desde la carpeta public
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),  // Carpeta donde se servirán los archivos estáticos
    },
    compress: true,  // Habilita la compresión de archivos
    port: 8081,      // Puerto en el que se ejecutará el servidor
    open: true       // Abre automáticamente el navegador cuando se inicie el servidor
  }
};