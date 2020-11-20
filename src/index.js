import localForage from "localforage"

import endpoints from './endpoints.json'
import rootEndpoints from './rootEndpoints.json'
import { loadResource } from './getter.js'
import { installSW } from './installSW.js'
import { Config } from './config.js'

export class Pokedex {

    constructor(config) {
        this.config = new Config(config)
        this.getConfig = function() {
            return this.config
        }

        // add to Pokedex.prototype all our endpoint functions
        endpoints.forEach(endpoint => {
            this[endpoint[0]] = input => { 
                if (input) {

                    // if the user has submitted a Name or an ID, return the JSON promise
                    if (typeof input === 'number' || typeof input === 'string') {
                        return loadResource(this.config, `${this.config.versionPath}${endpoint[1]}/${input}/`) 
                    }

                    // if the user has submitted an Array
                    // return a new promise which will resolve when all loadResource calls are ended
                    else if (typeof input === 'object') {
                        return Promise.all(mapResources(this.config, endpoint, input))
                    }
                }
            }
        })

        rootEndpoints.forEach(rootEndpoint => {
            this[rootEndpoint[0]] = config => {
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
        })

        localForage.config({
            name: 'pokeapi-js-wrapper'
        })

        if (this.config.cacheImages) {
            installSW()
        }
    }

    resource(path) {
        if (typeof path === 'string') {
            return loadResource(this.config, path)
        } else if (typeof path === 'object') {
            return Promise.all(path.map(p => loadResource(this.config, p)))
        } else {
            return 'String or Array is required'
        }
    }
}

function mapResources(config, endpoint, input) {
    return input.map(res => {
        return loadResource(config, `${config.versionPath}${endpoint[1]}/${res}/`)
    })
}