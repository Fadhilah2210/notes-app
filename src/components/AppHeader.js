class AppHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header class="app-header">
          <h1>📝 Notes App</h1>
        </header>
      `;
    }
  }
  customElements.define('app-header', AppHeader);
  