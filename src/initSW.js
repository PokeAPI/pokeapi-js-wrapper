function installSW() {
    if (navigator && window && 'serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('./pokeapi-js-wrapper-sw.js', { scope: './' })
                .catch(error => {
                    console.log('Pokeapi-js-wrapper SW installation failed with the following error:')
                    console.error(error)
                })
        })
    }
}

export { installSW }
