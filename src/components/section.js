/**
 * @param {string} title
 * @return {HTMLElement}
 */
export function buildSection(title) {
  const wrapper = document.createElement('section')
  const heading = document.createElement('h2')
  heading.innerText = title
  wrapper.appendChild(heading)
  return wrapper
}