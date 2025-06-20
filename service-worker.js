// service-worker.js

const CACHE_NAME = 'taskmaster-pro-cache-v8'; // Versión incrementada para forzar actualización
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

  // ARCHIVOS DE SONIDO FUNCIONALES
  'https://cdn.pixabay.com/audio/2022/03/15/audio_751c20dae0.mp3', // classic-notification
  'https://cdn.pixabay.com/audio/2022/11/17/audio_822d645a27.mp3', // classic-achievement
  'https://cdn.pixabay.com/audio/2022/03/10/audio_c893d736b2.mp3', // digital-notification
  'https://cdn.pixabay.com/audio/2022/03/22/audio_6b43549923.mp3', // digital-achievement
  'https://cdn.pixabay.com/audio/2021/08/04/audio_2bbe625b15.mp3', // relaxing-notification
  'https://cdn.pixabay.com/audio/2022/05/27/audio_3439b1a067.mp3'  // relaxing-achievement
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