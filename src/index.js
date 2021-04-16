import localForage from "localforage"

import endpoints from './endpoints.json'
import rootEndpoints from './rootEndpoints.json'
import { loadResource } from './getter.js'
import { installSW } from './installSW.js'
import { Config } from './config.js'

localForage.config({
    name: 'pokeapi-js-wrapper'
})

export class Pokedex {

    constructor(config) {
        this.config = new Config(config)

        // add to Pokedex.prototype all our endpoint functions
        endpoints.forEach(endpoint => {
            const endpointFullName = buildEndpointFullName(endpoint)
            this[endpointFullName] = input => { 
                if (input) {

                    // if the user has submitted a Name or an ID, return the JSON promise
                    if (typeof input === 'number' || typeof input === 'string') {
                        return loadResource(this.config, `${this.config.versionPath}${endpoint[2].replace(':id', input)}`) 
                    }
            
                    // if the user has submitted an Array
                    // return a new promise which will resolve when all loadResource calls are ended
                    else if (typeof input === 'object') {
                        return Promise.all(mapResources(this.config, endpoint, input))
                    }
                }
            }
            this[buildEndpointName(endpoint)] = this[endpointFullName]
        })

        rootEndpoints.forEach(rootEndpoint => {
            const rootEndpointFullName = buildRootEndpointFullName(rootEndpoint)
            this[rootEndpointFullName] = config => {
                var limit = this.config.limit
                var offset = this.config.offset
                if (config) {
                    if (config.hasOwnProperty('offset')) {
                        offset = config.offset
                    }
                    if (config.hasOwnProperty('limit')) {
                        limit = config.limit
                    }
                }
                return loadResource(this.config, `${this.config.versionPath}${rootEndpoint[1]}?limit=${limit}&offset=${offset}`)
            }
            this[rootEndpoint[0]] = this[rootEndpointFullName]
        })

        if (this.config.cacheImages) {
            installSW()
        }
    }

    getConfig() {
        return this.config
    }

    getCacheLength() {
        return localForage.length()
    }

    clearCache() {
        return localForage.clear()
    }

    resource(path) {
        if (typeof path === 'string') {
            return loadResource(this.config, path)
        } else if (Array.isArray(path)) {
            return Promise.all(path.map(p => loadResource(this.config, p)))
        } else {
            return 'String or Array is required'
        }
    }
}

function mapResources(config, endpoint, inputs) {
    return inputs.map(input => {
        return loadResource(config, `${config.versionPath}${endpoint[2].replace(':id', input)}`)
    })
}

function buildEndpointFullName(endpoint) {
    return `${endpoint[0]}By${capitalize(endpoint[1])}`
}

function buildEndpointName(endpoint) {
    return `${endpoint[0]}`
}

function buildRootEndpointFullName(endpoint) {
    return `${endpoint[0]}List`
}

function capitalize([first,...rest]) {
    return first.toUpperCase() + rest.join('').toLowerCase()
}
