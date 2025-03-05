self.addEventListener('install', (event) => {
    console.log('Service Worker installé.');
    event.waitUntil(
        caches.open('culture-play-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/styles.css', // Ajoute d'autres fichiers ici
                '/script.js',
                '/icon.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
