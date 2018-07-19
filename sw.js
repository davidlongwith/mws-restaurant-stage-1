


var cacheID = "restaurant-reviews-v1";

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheID).then(function(cache) {
      console.log('cache opened!');
      return cache.addAll(
        [
          '/',
          '/index.html',
          '/restaurant.html',
          '/css/styles.css',
          '/js/dbhelper.js',
          '/js/main.js',
          '/js/restaurant_info.js',
          '/register_sw.js',
          '/sw.js',
          '/data/restaurants.json'
        ]
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {    /* if match in cache return that */
          return response;
        }
        return fetch(event.request);    /* or just return network request as usual */
      }
    )
  );
});











