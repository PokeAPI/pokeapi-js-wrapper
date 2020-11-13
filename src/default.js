class Values {
    constructor(config={}) {
        this.protocol = 'https';
        this.hostName = 'pokeapi.co';
        this.versionPath = '/api/v2/';
        this.offset = 0;
        this.limit = 100000;
        this.timeout = 20 * 1000; // 20 seconds
        this.cache = true;
        this.cacheImages = true;

        if (config.hasOwnProperty('protocol')) {
            this.protocol = config.protocol;
        }
        if (config.hasOwnProperty('hostName')) {
            this.hostName = config.hostName;
        }
        if (config.hasOwnProperty('versionPath')) {
            this.versionPath = config.versionPath;
        }
        if (config.hasOwnProperty('offset')) {
            this.offset = config.offset - 1;
        }
        if (config.hasOwnProperty('limit')) {
            this.limit = config.limit;
        }
        if (config.hasOwnProperty('timeout')) {
            this.timeout = config.timeout;
        }
        if (config.hasOwnProperty('cache')) {
            this.cache = config.cache;
        }
        if (config.hasOwnProperty('cacheImages')) {
            this.cacheImages = config.cacheImages;
        }
    }
}
export { Values };
