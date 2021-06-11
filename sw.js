self.addEventListener('install', function(event) {
    console.log('The service worker is being installed.');
    event.waitUntil(
        caches.open('MSC-TennisApp').then(function(cache) {
            return cache.addAll([
                '/index.html',
                '/main.html',
                '/addplayer.html',

                '/index.css',
                '/main.css',
                '/addplayer.css',

                '/index.js',
                '/src/addplayer.js',
                '/src/base.js',
                '/src/main.js',
                '/src/tbsort.js',

                '/manifest.json',
                '/favicon.png',

                '/assets/logo.png',
                '/assets/tennis-court-dimensions.jpg',

                '/images/cup1.png',
                '/images/ing2.png',
                '/images/logo.png',
                '/images/tennis_court.jpg',
                '/images/tennis_player.png',
                '/images/tennis3.png',
                '/images/world.png',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    console.log('The service worker is serving the asset.');
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || caches.match('/index.html');
        })
    );
});