// service-worker.js

const CACHE_NAME = 'taskmaster-pro-cache-v9'; // Versión incrementada
const urlsToCache = [
  './',
  './index.html',
  './manual.html',
  './style.css',      // <-- AÑADIDO
  './script.js',      // <-- AÑADIDO
  './manifest.json',
  './favicon.ico',
  './icons/android-launchericon-192-192.png',
  './icons/android-launchericon-512-512.png',
  
  // Librerías y Sonidos
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdn.pixabay.com/audio/2022/03/15/audio_751c20dae0.mp3',
  'https://cdn.pixabay.com/audio/2022/11/17/audio_822d645a27.mp3',
  'https://cdn.pixabay.com/audio/2022/03/10/audio_c893d736b2.mp3',
  'https://cdn.pixabay.com/audio/2022/03/22/audio_6b43549923.mp3',
  'https://cdn.pixabay.com/audio/2021/08/04/audio_2bbe625b15.mp3',
  'https://cdn.pixabay.com/audio/2022/05/27/audio_3439b1a067.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Cache abierto.');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Service Worker: Archivos cacheados exitosamente.');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Falló al cachear los archivos.', error);
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
    // Para las navegaciones (cargar páginas), intentar ir a la red primero.
    // Si falla (offline), servir la app principal desde la caché.
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).catch(() => {
                return caches.match('./index.html');
            })
        );
        return;
    }

    // Para todos los demás recursos (CSS, JS, imágenes, etc.), usar "Cache First".
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});