// Selecting Elements
// Ways to select elements:
// - getElementById
// - getElementsByClassName
// - getElementsByTagName
// - querySelector
// - querySelectorAll

if (typeof document !== 'undefined') {
  const byId = document.getElementById('app');
  const byClass = document.getElementsByClassName('item');
  const byTag = document.getElementsByTagName('p');
  const qs = document.querySelector('.container');
  const qsa = document.querySelectorAll('ul li');

  console.log({ byId, byClass, byTag, qs, qsa });
}

// Example usage:
// const button = document.querySelector('#submitBtn');
// button.addEventListener('click', () => console.log('clicked'));
