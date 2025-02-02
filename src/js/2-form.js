"use script"

form.addEventListener('input', eventInput);
form.addEventListener('submit', eventSubmit);

function openModal(source) {
    const instance = basicLightbox.create(`
      <img src="${source}" width="1112" height="600">
    `);
  
    instance.show();
  
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        instance.close();
        document.removeEventListener('keydown', closeOnEscape);
      }
    };
  
    document.addEventListener('keydown', closeOnEscape);
  }
  
  gallery.addEventListener('click', (event) => {
    event.preventDefault();
  