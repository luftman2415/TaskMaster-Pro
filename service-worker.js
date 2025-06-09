// service-worker.js

// Incrementamos la versión para forzar la actualización del caché con los nuevos recursos.
const CACHE_NAME = 'taskmaster-pro-cache-v6'; 
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './favicon.ico',
  './icons/android-launchericon-192-192.png',
  './icons/android-launchericon-512-512.png',
  // Recursos de CDNs para una experiencia offline completa
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.js',
  // Recursos de audio
  'https://assets.mixkit.co/sfx/preview/mixkit-positive-notification-951.mp3',
  'https://assets.mixkit.co/sfx/preview/mixkit-video-game-win-2016.mp3',
  'https://cdn.freesound.org/previews/391/391659_5121236-lq.mp3',
  'https://cdn.freesound.org/previews/387/387212_5121236-lq.mp3',
  'https://cdn.freesound.org/previews/423/423429_5121236-lq.mp3',
  'https://cdn.freesound.org/previews/258/258020_4432924-lq.mp3'
];

self.addEventListener('install', event => {
  // Realiza los pasos de instalación
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Cache abierto, añadiendo URLs principales y recursos externos.');
        // Usar addAll para manejar las peticiones de forma atómica. Si una falla, ninguna se cachea.
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Service Worker: Todos los archivos fueron cacheados exitosamente.');
        // Forzar al nuevo Service Worker a activarse inmediatamente.
        return self.skipWaiting();
      })
      .catch(error => {
        // Esto es crucial para la depuración durante el desarrollo.
        console.error('Service Worker: Falló al cachear los archivos. Revisa que las rutas y nombres de archivo sean correctos y que haya conexión a internet durante la instalación.', error);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Si el nombre del caché no está en nuestra lista blanca, lo eliminamos.
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Service Worker: Eliminando caché antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Tomar control de los clientes (pestañas) abiertos inmediatamente.
      console.log('Service Worker: Activado y listo para tomar control.');
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', event => {
  // Estrategia: Cache-First. Ideal para PWAs donde la velocidad y la disponibilidad offline son prioritarias.
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si el recurso está en caché, lo devolvemos desde el caché.
        if (response) {
          // console.log('Service Worker: Sirviendo desde caché:', event.request.url);
          return response;
        }
        
        // Si no está en caché, lo buscamos en la red.
        // console.log('Service Worker: Buscando en la red:', event.request.url);
        return fetch(event.request).then(
          networkResponse => {
            // No cacheamos dinámicamente las respuestas para evitar que el caché crezca indefinidamente
            // con recursos no esenciales. Todas las dependencias críticas ya están en `urlsToCache`.
            return networkResponse;
          }
        ).catch(error => {
          console.error('Service Worker: Error de fetch. El usuario podría estar offline y el recurso no está en caché.', error);
          // Opcionalmente, podrías devolver una página de fallback offline aquí.
        });
      })
  );
});

// Listener para las notificaciones push.
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('./index.html')
  );
});
