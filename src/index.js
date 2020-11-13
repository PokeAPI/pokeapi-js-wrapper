import localForage from "localforage";

import endpoints from './endpoints.json';
import rootEndpoints from './rootEndpoints.json';
import { loadResource } from './getter.js';
import { installSW } from './installSW.js';
import { Values } from './default.js';

export class Pokedex {

    constructor(config) {
        this.values = new Values(config)
        this.getConfig = function() {
            return this.values
        }

        // add to Pokedex.prototype all our endpoint functions
        endpoints.forEach(endpoint => {
            this[endpoint[0]] = input => { 
                if (input) {

                    // if the user has submitted a Name or an ID, return the JSON promise
                    if (typeof input === 'number' || typeof input === 'string') {
                        return loadResource(this.values, `${this.values.versionPath}${endpoint[1]}/${input}/`); 
                    }

                    // if the user has submitted an Array
                    // return a new promise which will resolve when all loadResource calls are ended
                    else if (typeof input === 'object') {
                        return Promise.all(mapResources(this.values, endpoint, input));
                    }
                }
            }
        });

        rootEndpoints.forEach(rootEndpoint => {
            this[rootEndpoint[0]] = config => {
                var limit = this.values.limit
                var offset = this.values.offset
                if (config) {
                    if (config.hasOwnProperty('offset')) {
                        offset = config.offset
                    }
                    if (config.hasOwnProperty('limit')) {
                        limit = config.limit
                    }
                }
                return loadResource(this.values, `${this.values.versionPath}${rootEndpoint[1]}?limit=${limit}&offset=${offset}`);
            }
        });

        localForage.config({
            name: 'pokeapi-js-wrapper'
        });

        if (this.values.cacheImages) {
            installSW()
        }
    }

    resource(path) {
        if (typeof path === 'string') {
            return loadResource(this.values, path)
        } else if (typeof path === 'object') {
            return Promise.all(path.map(p => loadResource(this.values, p)));
        } else {
            return 'String or Array is required'
        }
    }
};

function mapResources(values, endpoint, input) {
    return input.map(res => {
        return loadResource(values, `${values.versionPath}${endpoint[1]}/${res}/`);
    });
}