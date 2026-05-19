import { log } from './utils.js'

export async function installSW(swLocation) {
    if (navigator && window && 'serviceWorker' in navigator) {
        try {
            const r = await navigator.serviceWorker.register(`${swLocation}pokeapi-js-wrapper-sw.js`, { scope: './' })
        } catch (error) {
            log('SW installation failed with the following error:')
            log(error)
        }
    }
}
