const imgRe = /https:\/\/raw\.githubusercontent\.com\/PokeAPI\/sprites\/[\/-\w\d]+\/[\d\w-]+\.(?:png|svg|gif)/
const version = 1

self.addEventListener('fetch', function (event) {
    if (event.request.url.match(imgRe)) {
        event.respondWith(caches.match(event.request).then(function (response) {
            if (response) {
                return response
            }

            return fetch(event.request).then(function (response) {
                if (event.request.url.match(imgRe) && response.status.toString().startsWith("2")) {
                    caches.open("pokeapi-js-wrapper-images-" + version).then(function (cache) {
                        cache.add(event.request.url)
                    })
                }
                return response;
            }).catch(function (error) {
                console.log(error)
            })
        }))
    }
})

self.addEventListener('install', function(event) {
    self.skipWaiting()
})
