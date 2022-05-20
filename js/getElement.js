export function getElement(dataJsValue) {
  return document.querySelector(`[data-js= "${dataJsValue}"]`);
}
