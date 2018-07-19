


var cacheID = "restaurant-reviews-v1";
var cacheURLs = [
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

/* on service worker install event populate the cache */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheID).then(function(cache) {
      console.log('Cache opened!');
      return cache.addAll(cacheURLs);
    })
  );
});

/* fetch the network request, update cache, return response */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request).then(function(respond) {
        let clone = respond.clone();
        caches.open('restaurant-reviews-v1').then(function(cache) {
          cache.put(event.request, clone);
        });
        return respond;
      });
    }).catch(function() {
      return new Response("Unable to update");
    })
  );
});












