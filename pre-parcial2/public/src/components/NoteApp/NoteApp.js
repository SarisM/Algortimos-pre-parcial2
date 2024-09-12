class NoteApp extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
      this.shadowRoot.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        this.addNote();
      });
    }
  
    addNote() {
      const title = this.shadowRoot.querySelector('#title').value;
      const content = this.shadowRoot.querySelector('#content').value;
  
      if (title && content) {
        const note = document.createElement('note-item');
        note.setAttribute('title', title);
        note.setAttribute('content', content);
        this.shadowRoot.querySelector('.notes-list').appendChild(note);
  
        // Limpiar campos
        this.shadowRoot.querySelector('#title').value = '';
        this.shadowRoot.querySelector('#content').value = '';
      }
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          .container {
            width: 300px;
            margin: 0 auto;
          }
          form {
            margin-bottom: 10px;
          }
          input, textarea {
            display: block;
            width: 100%;
            margin-bottom: 10px;
          }
          .notes-list {
            list-style-type: none;
            padding: 0;
          }
        </style>
        <div class="container">
          <h2>Note App</h2>
          <form>
            <input type="text" id="title" placeholder="Note Title" required />
            <textarea id="content" placeholder="Note Content" required></textarea>
            <button type="submit">Add Note</button>
          </form>
          <ul class="notes-list"></ul>
        </div>
      `;
    }
  }
  
  customElements.define('note-app', NoteApp);
  