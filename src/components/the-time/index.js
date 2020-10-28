/**
 * The Time component module.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

/**
 * Define template.
 */
const template = document.createElement('template')
template.innerHTML = `
  <time class="container"></time>
`

/**
 * Define custom element.
 */
customElements.define('the-time',
  class extends HTMLElement {
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      // Get the message board element in the shadow root.
      this._container = this.shadowRoot.querySelector('.container')
    }

    /**
     * Called after the element is inserted into the DOM.
     */
    connectedCallback () {
      const now = new Date()
      this._container.setAttribute('datetime', now.toISOString())
      this._container.innerText = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    }
  }
)
