self.addEventListener('install', function(event) {
    console.log('The service worker is being installed.');
    event.waitUntil(
        caches.open('UoM_MSC_tennisApp').then(function(cache) {
            return cache.addAll([
                './addplayer.css',
                './addplayer.html',
                './common.js',
                './favico.png',
                './index.css',
                './index.html',
                './index.js',
                './main.css',
                './main.html',
                './manifest.webmanifest',
                './tbsort.css',
                './assets/logo.png',
                './assets/tennis-court-dimensions.jpg',
                './assets/96.png',
                './assets/192.png',
                './assets/512.png',
                './images/cup1.png',
                './images/ing2.png',
                './images/logo.png',
                './images/tennis_court.jpg',
                './images/tennis_player.png',
                './images/tennis3.png',
                './images/world.png',
                './src/addplayer.js',
                './src/base.js',
                './src/main.js',
                './src/tbsort.js',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    console.log('The service worker is serving the asset.');
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || caches.match('/UoM_MSC_tennisApp/index.html');
        })
    );
});