import { log } from './utils.js'

export function installSW(swLocation) {
    if (navigator && window && 'serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register(`${swLocation}pokeapi-js-wrapper-sw.js`, { scope: './' })
                .catch(error => {
                    log('SW installation failed with the following error:')
                    log(error)
                })
        })
    }
}
