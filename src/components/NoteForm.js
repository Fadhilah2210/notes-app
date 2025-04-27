import { addNote } from '../main.js';  

class NoteForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <form id="note-form">
        <input type="text" id="note-title" placeholder="Title" required />
        <textarea id="note-body" rows="4" placeholder="Your note..." required></textarea>
        <button type="submit">Add Note</button>
      </form>
    `;

    const form = this.querySelector('#note-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const title = this.querySelector('#note-title').value;
      const body = this.querySelector('#note-body').value;
      
      const newNote = { title, body }; // Membuat objek baru untuk catatan

      // fungsi untuk menambahkan catatan baru
      addNote(newNote);

      // Reset form setelah pengiriman yok bisaaaa
      form.reset();
    });
  }
}

customElements.define('note-form', NoteForm);
