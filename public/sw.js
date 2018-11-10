
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('venuesdata01').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/ring.jpg',
        './src/App.css',
        './src/App.js',
        './src/index.css',
        './src/index.js',
        './src/infowindowcontent.js',
        './src/list.js',
        './src/map.js',
        './src/YelpAPI.js',
        './node_modules',
        './package-lock.json',
        './package.json'
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
