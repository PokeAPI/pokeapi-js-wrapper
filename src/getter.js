import { log, canUseCache } from './utils.js'

var db

function openCache(config) {
    if (config.cache && typeof window !== 'undefined') {
        const request = window.indexedDB.open("pokeapi-js-wrapper", 8);
        return new Promise((resolve, reject) => {
            request.onerror = (event) => {
                log('IndexedDB not available')
                reject()
            }
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                const transaction = event.target.transaction;
                let objectStore;

                if (!db.objectStoreNames.contains('cache')) {
                    objectStore = db.createObjectStore("cache", { autoIncrement: false });
                    log('Object store "cache" created');
                } else {
                    objectStore = transaction.objectStore("cache");
                }

                if (!objectStore.indexNames.contains("deploy_date_index")) {
                    objectStore.createIndex("deploy_date_index", "meta.deploy_date", { unique: false });
                    log('Index "deploy_date_index" created');
                }
            }
            request.onsuccess = (event) => {
                db = event.target.result;
                log('db opened')
                resolve(db)
            }
            request.onversionchange = (event) => {
                db.close()
                reject()
            }
            request.onblocked = (event) => {
                db.close()
                reject()
            }
        });
    }
}

function getFromDB(objectStore, url) {
    return new Promise((resolve, reject) => {
        const cachedObject = objectStore.get(url)
        cachedObject.onsuccess = () => resolve(cachedObject.result);
        cachedObject.onerror = () => reject(cachedObject.error);
    });
}

async function loadResource(config, url) {
    if (! url.includes('://')) {
        url = url.replace(/^\//, '');
        url = `${config.protocol}://${config.hostName}${config.versionPath}${url}`
    }
    if (canUseCache(config, db)) {
        const transaction = db.transaction("cache", "readonly");
        const objectStore = transaction.objectStore("cache");
        const data = await getFromDB(objectStore, url);
        if (data) {
            log(`read from cache ${url}`)
            return data
        } else {
            return await loadUrl(config, url)
        }
    } else {
        return await loadUrl(config, url)
    }
}

async function loadUrl(config, url) {
    const response = await fetch(url);
    const body = await response.json()
    if (response.status === 200) {
        if (canUseCache(config, db)) {
            const deploy_date = parseInt(response.headers.get('X-PokeAPI-Deploy-Date'))
            body.meta = { deploy_date }
            const transaction = db.transaction("cache", "readwrite");
            const objectStore = transaction.objectStore("cache");
            const request = objectStore.add(body, url)
            request.onsuccess = () => {
                log(`object cached ${url}`);
            }
            request.onerror = () => {
                log(request.error)
            }
        }
    }

    return body
}

function sizeCache(config) {
    if (canUseCache(config, db)) {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction("cache", "readwrite");
            const objectStore = transaction.objectStore("cache");
            const request = objectStore.count()
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    } else {
        return Promise.reject()
    }
}

async function invalidateCache(config) {
    if (canUseCache(config, db)) {
        const meta = await loadResource({...config, cache: false}, 'meta')
        const upstream_deploy_date = parseInt(meta.deploy_date)
        const transaction = db.transaction("cache", "readwrite");
        const objectStore = transaction.objectStore("cache");
        const index = objectStore.index("deploy_date_index")
        const range = IDBKeyRange.upperBound(upstream_deploy_date, true);
        const request = index.getAllKeys(range);

        request.onsuccess = () => {
            const keys = request.result;
            keys.forEach(pk => {
                objectStore.delete(pk);
                log(`invalidated ${pk}`);
            });
            return true
        };
        request.onerror = () => {throw new Error(request.error);
        };
    } else {
        throw new Error('cache not available')
    }
}

function clearCache(config) {
    if (canUseCache(config, db)) {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction("cache", "readwrite");
            const objectStore = transaction.objectStore("cache");
            const request = objectStore.clear()
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    } else {
        return Promise.reject()
    }
}

export { loadResource, openCache, sizeCache, clearCache, invalidateCache }
