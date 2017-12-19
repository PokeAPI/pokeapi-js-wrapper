import localForage from "localforage";

import { values } from './default.js';

const configurator = {};

configurator.setPokedexConfiguration = (config) => {
    if (config) {
        if (config.hasOwnProperty('protocol')) {
            values.setProtocol(config.protocol);
        }
        if (config.hasOwnProperty('hostName')) {
            values.setHostName(config.hostName);
        }
        if (config.hasOwnProperty('versionPath')) {
            values.setVersionPath(config.versionPath);
        }
        if (config.hasOwnProperty('timeout')) {
            values.setTimeout(config.timeout);
        }
        if (config.hasOwnProperty('cache')) {
            values.setCache(config.cache);
        }
    }
}

configurator.setRootEndpointConfiguration = (config) => {
	if (config) {
        if (config.hasOwnProperty('offset')) {
            values.setOffset(config.offset);
        }
        if (config.hasOwnProperty('limit')) {
            values.setLimit(config.limit);
        }
    }
}

localForage.config({
    name: 'pokeapi-js-wrapper'
});

export { configurator };
