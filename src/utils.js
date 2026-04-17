function log(msg) {
  if (typeof PJSW_DEBUG !== 'undefined') {
    console.log(msg);
  }
}

function canUseCache(config, db) {
  return config.cache && typeof window !== 'undefined' && typeof db !== 'undefined'
}

export { log, canUseCache }