const CACHE_NAME = 'taskmaster-pro-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/icons/icon-192x192.png', // Añade tus archivos de íconos aquí
  '/icons/icon-512x512.png'  // Añade tus archivos de íconos aquí
  // Aquí añadirías tus archivos CSS y otros JS si estuvieran separados
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Servir desde la caché
        }
        return fetch(event.request); // Obtener de la red
      }
    )
  );
});