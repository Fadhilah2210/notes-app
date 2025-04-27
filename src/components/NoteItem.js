class NoteItem extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title');
    const body = this.getAttribute('body');
    const createdAt = new Date(this.getAttribute('createdAt')).toLocaleDateString();
    const id = this.getAttribute('id'); 

    this.innerHTML = `
      <div class="note-card">
        <h3>${title}</h3>
        <p class="note-date">${createdAt}</p>
        <p>${body}</p>
        <button class="delete-button">Delete</button>
      </div>
    `;

    //event click untuk tombol delete
    this.querySelector('.delete-button').addEventListener('click', async () => {
      const confirmDelete = confirm('Are you sure you want to delete this note?');
      if (confirmDelete) {
        await this.deleteNote(id);
      }
    });
  }

  async deleteNote(id) {
    try {
      const response = await fetch(`https://notes-api.dicoding.dev/v2/notes/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        this.remove(); 
        alert('Note deleted successfully!');
      } else {
        alert('Failed to delete note.');
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  }
}

customElements.define('note-item', NoteItem);
