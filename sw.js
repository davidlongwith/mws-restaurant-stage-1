


var cacheID = "restaurant-reviews-v1";

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheID).then(function(cache) {
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













