class LoadingIndicator extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="loading-spinner">
          <span>Loading...</span>
        </div>
      `;
    }
  }
  
  customElements.define('loading-indicator', LoadingIndicator);
  