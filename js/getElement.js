export function getElement(dataJsValue) {
  return document.querySelector(`[data-js= "${dataJsValue}"]`);
}

export function getElementsAll(dataJsValue) {
  return document.querySelectorAll(`[data-js= "${dataJsValue}"]`);
}
