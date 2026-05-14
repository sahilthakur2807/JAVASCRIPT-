// DOM Traversal
// Move between nodes using parentNode, children, nextElementSibling, previousElementSibling.

if (typeof document !== 'undefined') {
  const item = document.querySelector('.item');
  if (item) {
    console.log('Parent:', item.parentNode);
    console.log('Children:', item.children);
    console.log('Next sibling:', item.nextElementSibling);
    console.log('Previous sibling:', item.previousElementSibling);
  }
}

// Practical: find first input inside a form
// const form = document.querySelector('#myForm');
// const firstInput = form.querySelector('input');
// console.log(firstInput);
