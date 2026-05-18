// Changing Content
// You can change content using textContent, innerText, innerHTML, value (for inputs).

if (typeof document !== 'undefined') {
  const el = document.querySelector('#title'); //# is used for id selector
  if (el) {
    el.textContent = 'Updated Title from JS'; // text content sab badal deta hai 
  }

  const container = document.querySelector('#container');
  if (container) {
    container.innerHTML = '<p>New paragraph added via innerHTML</p>'; // inner html sirf text badlata hai does not touch hidden elemnts,
    // but it can be used to add naye elements.
  }
}

// Warning: use innerHTML carefully to avoid XSS when inserting user content.
