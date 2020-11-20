import axios from 'axios'
import localForage from "localforage"

const CACHE_PREFIX = "pokeapi-js-wrapper-"

function loadResource(config, url) {
    return new Promise((resolve, reject) => {
        localForage.ready()
            .then(() => {
                localForage.getItem(`${CACHE_PREFIX}${url}`)
                    .then(value => {
                        if (value === null) {
                            loadUrl(config, url).then(res => {resolve(res)})
                                .catch(err => {reject(err)})
                        } else {
                            resolve(addCacheMark(value))
                        }
                    })
                    .catch(err => {
                        loadUrl(config, url).then(res => {resolve(res)})
                            .catch(err => {reject(err)})
                    })
            })
            .catch(err => {
                loadUrl(config, url).then(res => {resolve(res)})
                    .catch(err => {reject(err)})
            })
    })
}

function loadUrl(config, url) {
    return new Promise((resolve, reject) => {
        let options = {
            baseURL: `${config.protocol}://${config.hostName}/`,
            timeout: config.timeout
        }
        axios.get(url, options)
            .then(response => {
                // if there was an error
                if (response.status >= 400) {
                    reject(response)
                } else {
                    // if everything was good
                    // cache the object in browser memory
                    // only if cache is true
                    if (config.cache) {
                        localForage.setItem(`${CACHE_PREFIX}${url}`, response.data)
                    }
                    resolve(response.data)
                }  
            })
            .catch(err => { reject(err) }) 
    })
}

export { loadResource }
