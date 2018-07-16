
/* Register Service Worker */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js', {
    scope: '/'
  }).then(function() {
    console.log('Yay! Service Worker Registered!');
  }).catch(function() {
    console.log('Service Worker Registration Failed');
  });
}
