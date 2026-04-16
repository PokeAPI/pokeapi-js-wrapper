import { log } from './log.js'

export function installSW() {
    if (navigator && window && 'serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('./pokeapi-js-wrapper-sw.js', { scope: './' })
                .catch(error => {
                    log('SW installation failed with the following error:')
                    log(error)
                })
        })
    }
}
