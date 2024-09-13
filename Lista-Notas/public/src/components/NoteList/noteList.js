import '../note/note.js';

class NoteList extends HTMLElement {
    constructor() {
        super();
        // Usamos attachShadow para crear un Shadow DOM encapsulado
        this.attachShadow({ mode: 'open' });
        // Creamos un array vacío para almacenar las notas, como parte de la instancia de la clase
        this.notes = [];
    }

    connectedCallback() {
        this.render();
        
        // Seleccionamos el formulario y le añadimos un listener para gestionar el envío de nuevas notas
        const form = this.shadowRoot.querySelector('.note-list');
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Obtenemos los valores de los inputs del formulario
            const title = this.shadowRoot.querySelector('.input-title').value;
            const description = this.shadowRoot.querySelector('.input-description').value;
            
            console.log(title, description);

            // Añadimos la nueva nota al array de notas
            this.notes.push({ title, description });
            
            // Añadimos la nueva nota a la lista visualmente llamando a `addNote`
            this.addNote({ title, description });

            // Reiniciamos el formulario para que quede vacío después de añadir la nota
            form.reset();
        });
    }

    // Método para renderizar el HTML inicial del componente
    render() {
        this.shadowRoot.innerHTML = `
            <h2>New Note</h2>
            <form class="note-list">
                <input type="text" placeholder="title" class="input-title" required>
                <input type="text" placeholder="description" class="input-description" required>
                <button type="submit">Add Note</button>
            </form>
            <ul class="notes-container">
            </ul>
        `;
    }

    // Método para agregar visualmente una nota a la lista
    addNote({ title, description }) {
        // Creamos un nuevo elemento de tipo `note-item`
        const note = document.createElement('note-item');
        
        // Le pasamos los atributos necesarios al nuevo elemento
        note.setAttribute('title', title);
        note.setAttribute('description', description);
        
        // Añadimos la nueva nota al contenedor de notas
        this.shadowRoot.querySelector('.notes-container').appendChild(note);
    }
}

customElements.define('note-list', NoteList);
export default NoteList;
