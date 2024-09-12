import * as components from './components/indexPadre.js';

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <section class="app-container"> 
        <h1>Note Manager</h1>
        <note-app></note-app>
      </section>
    `;
  }
}

customElements.define('app-container', AppContainer);
