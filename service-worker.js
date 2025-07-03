// service-worker.js
const CACHE_NAME = 'taskmaster-pro-cache-v6'; // Incrementamos la versión para forzar la actualización
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './main.js',
  './manual.html',
  './manifest.json',
  './favicon.ico',
  './icons/android-launchericon-192-192.png',
  './icons/android-launchericon-512-512.png',
  // Recursos de CDNs
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.js'
  // Nota: NO se cachean los archivos de audio. A veces causan que el service worker falle al instalar si son grandes.
  // La app funcionará offline, pero los sonidos solo se reproducirán si hay conexión.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Cache abierto, añadiendo archivos de la aplicación.');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Service Worker: Archivos principales cacheados exitosamente.');
        // Forzar al service worker en espera a convertirse en el activo.
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Falló al cachear los archivos durante la instalación.', error);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Si el nombre del caché no está en nuestra lista blanca, se elimina.
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Service Worker: Eliminando caché antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Activado y listo para tomar control.');
      // Tomar control de los clientes (pestañas) sin necesidad de recargar.
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', event => {
  // Estrategia: Cache primero, luego red. Ideal para rendimiento.
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si el recurso está en el caché, lo devuelve.
        // Si no, lo busca en la red.
        return response || fetch(event.request);
      })
  );
});

// Gestionar clics en notificaciones
self.addEventListener('notificationclick', event => {
  event.notification.close();
  // Abre la aplicación al hacer clic en la notificación
  event.waitUntil(
    clients.openWindow('./index.html')
  );
});