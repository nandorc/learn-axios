/**
 * @param {string} label
 * @param {Function} handler
 * @return {HTMLButtonElement}
 */
export function buildAction(label, handler) {
  const actionBtn = document.createElement('button')
  actionBtn.innerText = label
  actionBtn.setAttribute('type', 'button')
  actionBtn.onclick = handler
  return actionBtn
}