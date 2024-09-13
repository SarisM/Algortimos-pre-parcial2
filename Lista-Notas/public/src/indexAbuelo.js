import * as components from './components/indexPadre.js'

//primer creamos la clase
class AppContainer extends HTMLElement {
    constructor () {
        super()
        //el attachShadow me sirve para que todo se pueda ver en el DOM 
        this.attachShadow ({ mode: 'open' });
    }

    connectedCallback() {
        this.render()
    }


    render() {
        this.shadowRoot.innerHTML = `
        <h1>App Container</h1>
        <note-List></note-List>
        `
    }
    }

    customElements.define('app-container', AppContainer)






