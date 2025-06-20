const CACHE_NAME = 'taskmaster-pro-cache-v4'; // ¡NUEVA VERSIÓN PARA FORZAR LA ACTUALIZACIÓN!

// Archivos locales que son el núcleo de la app. Estos DEBEN funcionar.
const CORE_APP_SHELL = [
  './',
  './index.html',
  './manual.html',
  './style.css',
  './script.js',
  './manifest.json',
  './favicon.ico',
  './icons/android-launchericon-192-192.png',
  './icons/android-launchericon-512-512.png',
  './audio/classic-notification.mp3',
  './audio/classic-achievement.mp3',
  './audio/digital-notification.mp3',
  './audio/digital-achievement.mp3',
  './audio/relaxing-notification.mp3',
  './audio/relaxing-achievement.mp3'
];

// Archivos externos. Si uno falla, no debe romper la instalación.
const EXTERNAL_RESOURCES = [
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Service Worker: Caching core app shell.');
      // 1. Cachear el núcleo de la app. Esto es crítico, si falla, la instalación falla.
      const coreInstall = cache.addAll(CORE_APP_SHELL).catch(error => {
          console.error('Failed to cache core app shell:', error);
          throw error; // Propagar el error para que la instalación falle si el núcleo no se puede cachear.
      });

      // 2. Cachear recursos externos de forma individual y no crítica.
      const externalInstall = EXTERNAL_RESOURCES.forEach(url => {
        // Usamos una solicitud separada para cada recurso externo.
        // `no-cors` puede ser útil para recursos de terceros que no tienen CORS correctos,
        // aunque limita lo que puedes hacer con la respuesta.
        // Para CDNs conocidas, una solicitud normal debería estar bien.
        fetch(url, { mode: 'cors' })
          .then(response => {
            if (response.ok) {
              cache.put(url, response);
            } else {
              console.warn(`Failed to cache external resource: ${url}. Status: ${response.status}`);
            }
          })
          .catch(error => {
            console.warn(`Failed to fetch and cache external resource: ${url}`, error);
          });
      });

      return Promise.all([coreInstall, externalInstall]).then(() => {
        console.log('Service Worker: Installation complete.');
        return self.skipWaiting();
      });
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
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            // Si el recurso está en el caché, devuélvelo.
            if (cachedResponse) {
                return cachedResponse;
            }
            // Si no, ve a la red.
            return fetch(event.request);
        })
    );
});