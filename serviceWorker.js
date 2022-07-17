const staticColorPicker = 'PWA' // cache key
const assets = [ // cache assets
    '/',
    '/index.html',
    '/css/style.css',
    '/js/script.js',
]

self.addEventListener('install', installEvent => {
    installEvent.waitUntil(
        caches.open(staticColorPicker).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener('fetch', cacheEvent => {
    cacheEvent.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request)
        })
    )
})