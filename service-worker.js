// service-worker.js

const CACHE_NAME = 'taskmaster-pro-cache-v7'; // Versión incrementada para forzar actualización
const urlsToCache = [
  './',
  './index.html',
  './manual.html',  // <-- ARCHIVO DEL MANUAL AÑADIDO AQUÍ
  './manifest.json',
  './favicon.ico',
  './icons/android-launchericon-192-192.png',
  './icons/android-launchericon-512-512.png',
  
  // LIBRERÍAS CRÍTICAS
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',

  // ARCHIVOS DE SONIDO
  'https://assets.mixkit.co/sfx/preview/mixkit-positive-notification-951.mp3',
  'https://assets.mixkit.co/sfx/preview/mixkit-video-game-win-2016.mp3',
  'https://cdn.freesound.org/previews/391/391659_5121236-lq.mp3',
  'https://cdn.freesound.org/previews/387/387212_5121236-lq.mp3',
  'https://cdn.freesound.org/previews/423/423429_5121236-lq.mp3',
  'https://cdn.freesound.org/previews/258/258020_4432924-lq.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Cache abierto, añadiendo URLs principales y librerías.');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Service Worker: Todos los archivos fueron cacheados exitosamente.');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Falló al cachear los archivos. Revisa que las rutas y nombres de archivo sean correctos.', error);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Service Worker: Eliminando caché antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(event.request);
        })
    );
});