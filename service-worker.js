// service-worker.js

// Usamos un nombre de caché para la versión actual. Cambiarlo forzará la actualización.
const CACHE_NAME = 'taskmaster-pro-cache-v2'; 
const urlsToCache = [
  './', // Representa el directorio raíz del proyecto
  './index.html',
  // Nombres de archivo corregidos según tu descripción
  './icons/android-launchericon-192-192.png',
  './icons/android-launchericon-512-512.png',
  './manifest.json' // Es buena idea cachear el manifest también
];

self.addEventListener('install', event => {
  // Realiza la instalación: abre un caché y añade todos los recursos especificados.
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Cache abierto y listo para añadir archivos.');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Service Worker: Todos los archivos fueron cacheados exitosamente.');
      })
      .catch(error => {
        console.error('Service Worker: Falló al cachear los archivos durante la instalación.', error);
      })
  );
});

self.addEventListener('fetch', event => {
  // Estrategia: Cache First, then Network
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si el recurso está en caché, lo devuelve.
        if (response) {
          return response;
        }
        
        // Si no está en caché, lo busca en la red.
        return fetch(event.request).then(
          networkResponse => {
            // No es necesario cachear todo lo que se pide, solo los assets principales.
            // Si quisieras cachear dinámicamente, aquí lo harías.
            return networkResponse;
          }
        ).catch(() => {
           // Si la red falla y no hay caché, puedes devolver una página de "offline".
           console.warn('Service Worker: Fallo en la solicitud de red y no hay recurso en caché para:', event.request.url);
           // Podrías devolver una página offline predefinida aquí si la hubieras creado
           // return caches.match('./offline.html');
        });
      })
  );
});

// Limpiar cachés antiguos para liberar espacio y asegurar que se use la nueva versión.
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Elimina cachés que no están en la lista blanca
            console.log('Service Worker: Eliminando caché antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
