// Creating Elements
// Use document.createElement, set attributes, then append with appendChild or append.

if (typeof document !== 'undefined') {
  const list = document.querySelector('#todo');
  if (list) {
    const li = document.createElement('li');
    li.textContent = 'New item created by JS';
    li.setAttribute('data-created', 'true');
    list.appendChild(li);
  }
}

// Example - create and prepend:
// const newEl = document.createElement('div');
// newEl.textContent = 'Top element';
// document.body.prepend(newEl);
