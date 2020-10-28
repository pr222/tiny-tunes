/**
 * The tiny-tune web component module.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */
import * as Tone from 'tone'
import notes from './notes.json'

/**
 * Define template.
 */
const template = document.createElement('template')
template.innerHTML = `
  <div class="container">
    <button>Click Me!</button>
  </div>
`

/**
 * Define custom element.
 */
customElements.define('tiny-tune',
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
      this._button = this.shadowRoot.querySelector('.container button')
    }

    /**
     * Called after the element is inserted into the DOM.
     */
    connectedCallback () {
      this._button.addEventListener('click', this._playTunes)
    }

    /**
     * Called after the element has been removed from the DOM.
     */
    disconnectedCallback () {
      this._button.removeEventListener('click', this._playTunes)
    }

    _playTunes () {
      const synth = new Tone.Synth().toDestination()
      let now = Tone.now()
      notes.forEach(note => {
        synth.triggerAttackRelease(note.f, note.d, now)
        now += 0.4
      })
    }
  }
)
