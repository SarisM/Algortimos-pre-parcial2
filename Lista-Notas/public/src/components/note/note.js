class Note extends HTMLElement {
    constructor() {
        super();
        // Usamos attachShadow para crear un Shadow DOM encapsulado
        this.attachShadow({ mode: 'open' });
    }

    // Especificamos qué atributos deben ser observados para hacer un seguimiento de los cambios
    static get observedAttributes() {
        return ['title', 'description'];
    }

    // Este método es llamado cuando un atributo observado cambia
    attributeChangedCallback(propName, oldValue, newValue) {
        // Si el nuevo valor es diferente del anterior, lo actualizamos y re-renderizamos el componente
        if (oldValue !== newValue) {
            this[propName] = newValue;
            this.render();
        }
    }

    connectedCallback() {
        this.render();
    }

    // Método que elimina la tarea del DOM
    deleteNote() {
        this.remove();
    }

    // Renderizamos el HTML dentro del Shadow DOM
    render() {
        this.shadowRoot.innerHTML = `
            <li>
                <h3>${this.title}</h3>
                <p>${this.description}</p>
                <button class="delete-task">Eliminar</button>
            </li>
        `;
        
        // Agregamos el evento al botón de eliminar para que funcione al hacer click
        const deleteButton = this.shadowRoot.querySelector('.delete-task');
        deleteButton.addEventListener('click', () => this.deleteNote());
    }
}

customElements.define('note-item', Note);
export default Note;
