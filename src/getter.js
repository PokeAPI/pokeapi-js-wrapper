import { log } from './log.js'

var db

function openDB() {
    if (typeof window !== 'undefined') {
        const request = window.indexedDB.open("pokeapi-js-wrapper", 1);

        request.onerror = (event) => {
            log('IndexedDB not available')
        }
        request.onupgradeneeded = (event) => {
            db = event.target.result;
            log('db opened and cache created')
            db.createObjectStore("cache", { autoIncrement: false });
        }
        request.onsuccess = (event) => {
            log('db opened')
            db = event.target.result;
        }
        request.onversionchange = (event) => {
            db.close()
        }
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

    if (config.cache && typeof window !== 'undefined' && typeof db !== 'undefined') {
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
        if (config.cache) {
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

function sizeDB() {
    if (typeof window !== 'undefined' && typeof db !== 'undefined') {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction("cache", "readwrite");
            const objectStore = transaction.objectStore("cache");
            const request = objectStore.count()
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }
}

function clearDB() {
    if (typeof window !== 'undefined' && typeof db !== 'undefined') {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction("cache", "readwrite");
            const objectStore = transaction.objectStore("cache");
            const request = objectStore.clear()
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }
}

export { loadResource, openDB, sizeDB, clearDB }
