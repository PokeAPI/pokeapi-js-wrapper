export function log(msg) {
  if (typeof PJSW_DEBUG !== 'undefined') {
    console.log(msg);
  }
}