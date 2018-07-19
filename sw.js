


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

/* on service worker install event add items to cache */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheID).then(function(cache) {
      console.log('cache opened!');
      return cache.addAll(cacheURLs);
    })
  );
});

/* fetch the network request */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {    /* if match in cache return that */
          console.log(response.url);
          return response;
        }
        return fetch(event.request);    /* or just return network request as usual */
      }
    )
  );
});











