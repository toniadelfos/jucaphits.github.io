self.addEventListener('install', function(event) {
  event.waitUntil(caches.open('jucap-hits-cache').then(function(cache) {
    return cache.addAll([
      '/',
      '/index.html',
      '/logo.jpg',
      '/favicon.ico',
      '/icon-192.png',
      '/icon-512.png',
      '/manifest.json'
    ]);
  }));
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
