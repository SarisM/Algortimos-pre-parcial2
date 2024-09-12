class NoteItem extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.title = this.getAttribute('title');
      this.content = this.getAttribute('content');
      this.render();
      this.shadowRoot.querySelector('button').addEventListener('click', () => {
        this.remove();
      });
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          .note {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 5px 0;
          }
          .note h3 {
            margin: 0 0 5px;
          }
        </style>
        <div class="note">
          <h3>${this.title}</h3>
          <p>${this.content}</p>
          <button>Delete</button>
        </div>
      `;
    }
  }
  
  customElements.define('note-item', NoteItem);
  