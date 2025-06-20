const CACHE_NAME = 'taskmaster-pro-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manual.html',
  './style.css',
  './script.js',
  './manifest.json',
  './favicon.ico',
  './icons/android-launchericon-192-192.png',
  './icons/android-launchericon-512-512.png',
  
  // Archivos de audio locales
  './audio/classic-notification.mp3',
  './audio/classic-achievement.mp3',
  './audio/digital-notification.mp3',
  './audio/digital-achievement.mp3',
  './audio/relaxing-notification.mp3',
  './audio/relaxing-achievement.mp3',
  
  // Librerías Externas
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Cache opened.');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Service Worker: All files were cached successfully.');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Failed to cache files.', error);
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
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // Estrategia "Cache first" para los recursos de la app
  if (urlsToCache.some(url => event.request.url.endsWith(url.replace('./', '')))) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        return cachedResponse || fetch(event.request);
      })
    );
    return;
  }
  
  // Estrategia "Network first" para la navegación principal
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match('./index.html');
      })
    );
    return;
  }

  // Para cualquier otra petición (API de terceros, etc.), ir a la red
  event.respondWith(fetch(event.request));
});