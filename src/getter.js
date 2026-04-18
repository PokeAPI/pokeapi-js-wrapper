import { log, canUseCache } from './utils.js'

var db

function openDB(config) {
    if (config.cache && typeof window !== 'undefined') {
        const request = window.indexedDB.open("pokeapi-js-wrapper", 3);
        return new Promise((resolve, reject) => {
            request.onerror = (event) => {
                log('IndexedDB not available')
                reject()
            }
            request.onupgradeneeded = (event) => {
                db = event.target.result;
                log('db opened and cache created')
                db.createObjectStore("cache", { autoIncrement: false });
                resolve(db)
            }
            request.onsuccess = (event) => {
                log('db opened')
                db = event.target.result;
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
        url = `${config.protocol}://${config.hostName}/${url}`
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
            const transaction = db.transaction("cache", "readwrite");
            const objectStore = transaction.objectStore("cache");
            const request = objectStore.add(body, url)
            request.onsuccess = () => log(`object cached ${url}`);
            request.onerror = () => {
                log(request.error)
            }
        }
    }

    return body
}

function sizeDB(config) {
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

function clearDB(config) {
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

export { loadResource, openDB, sizeDB, clearDB }
