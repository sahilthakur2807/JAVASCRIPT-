// Removing Elements
// You can remove elements with remove(), removeChild(), or replaceChild().

if (typeof document !== 'undefined') {
  const toRemove = document.querySelector('.remove-me');
  if (toRemove) {
    toRemove.remove();
  }

  // removeChild example
  const parent = document.querySelector('#list');
  if (parent && parent.firstElementChild) {
    parent.removeChild(parent.firstElementChild);
  }
}

// Learning tip:
// Removing elements frees memory but detach event listeners if not careful.
