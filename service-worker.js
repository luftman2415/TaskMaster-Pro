// service-worker.js

const CACHE_NAME = 'taskmaster-pro-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/icons/icon-192x192.png', // Asegúrate de que estos archivos existan en tu carpeta 'icons'
  '/icons/icon-512x512.png'
  // Si tuvieras un archivo CSS externo, lo añadirías aquí, por ejemplo: '/style.css'
  // Si tuvieras un archivo JS externo (distinto del que está en index.html), lo añadirías aquí, por ejemplo: '/script.js'
];

self.addEventListener('install', event => {
  // Realiza la instalación: abre un caché y añade todos los recursos especificados.
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Cache abierto');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('Service Worker: Error al abrir el caché o añadir URLs', error);
      })
  );
});

self.addEventListener('fetch', event => {
  // Intercepta las solicitudes de red
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si el recurso está en caché, lo devuelve
        if (response) {
          return response;
        }
        // Si no está en caché, lo busca en la red
        return fetch(event.request)
          .then(networkResponse => {
            // Clona la respuesta para poder almacenarla en caché y devolverla al navegador
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            return networkResponse;
          })
          .catch(() => {
            // Si la red falla y no hay caché, puedes devolver una página de "offline"
            // Por ahora, simplemente imprime un error
            console.warn('Service Worker: Fallo en la solicitud de red y no hay recurso en caché para:', event.request.url);
            // Podrías devolver una página offline predefinida aquí si la hubieras creado
            // return caches.match('/offline.html');
          });
      })
  );
});

// Opcional: Limpiar cachés antiguos
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
