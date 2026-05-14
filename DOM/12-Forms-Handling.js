// Forms Handling
// Prevent default submission, validate inputs, and collect form data.

if (typeof document !== 'undefined') {
  const form = document.querySelector('#myForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const obj = Object.fromEntries(data.entries());
      console.log('Form data:', obj);
    });
  }
}

// Example: validate required fields before sending to server.
