/**
 * The time component module.
 *
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

// Define template.
const template = document.createElement('template')
template.innerHTML = `
    <time class="container"></time>
`

// Define custom element.
customElements.define('the-time',
  class extends HTMLElement {
    // Create instance of the type.
    constructor () {
      super()
      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
      this._container = this.shadowRoot.querySelector('.container')
    }

    connectedCallback () {
      const time = new Date()

      this._container.setAttribute('datetime', time.toISOString())

      this._container.textContent = `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`
    }
  }
)
