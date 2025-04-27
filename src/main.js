import './style.css';
import './loadingindicator.js';
import './components/AppHeader.js';
import './components/NoteForm.js';
import './components/NoteItem.js';

const listContainer = document.querySelector('#note-list');

// Fungsi untuk mengambil catatan dari API
async function fetchNotes() {
  const loadingIndicator = document.createElement('loading-indicator');
  document.body.appendChild(loadingIndicator);

  try {
    const response = await fetch('https://notes-api.dicoding.dev/v2/notes');
    const { data } = await response.json();

    // Menampilkan setiap catatan
    data.forEach(note => {
      const noteElement = document.createElement('note-item');
      noteElement.setAttribute('id', note.id); 
      noteElement.setAttribute('title', note.title);
      noteElement.setAttribute('body', note.body);
      noteElement.setAttribute('createdAt', note.createdAt);
      listContainer.appendChild(noteElement);
    });
  } catch (error) {
    console.error('Error fetching notes:', error);
    listContainer.innerHTML = `<p style="color:red;">Gagal memuat catatan 😢</p>`;
  } finally {
    document.body.removeChild(loadingIndicator);
  }
}

// Fungsi untuk menambahkan catatan baru
export async function addNote(newNote) {
  const loadingIndicator = document.createElement('loading-indicator');
  document.body.appendChild(loadingIndicator);

  try {
    // Log data yang akan dikirim
    console.log('Request Data:', newNote);

    const response = await fetch('https://notes-api.dicoding.dev/v2/notes', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(newNote), // Kirim data dalam format JSON
    });

    const result = await response.json(); 
    console.log('Response:', result); // Log response dari API

    if (response.ok) {
      alert('Catatan berhasil ditambahkan!');
      fetchNotes(); // Refresh data notes setelah tambah
    } else {
      alert(`Gagal menambahkan catatan: ${result.message}`);
    }
  } catch (error) {
    console.error('Error adding note:', error);
    alert('Gagal menambahkan catatan.');
  } finally {
    document.body.removeChild(loadingIndicator); 
  }
}

fetchNotes();

//BISMILLAH DH BENERRRRRRRR!!!!