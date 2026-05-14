// Introduction to DOM
// The DOM (Document Object Model) is a tree-like representation of a web page.
// It lets JavaScript read and modify HTML and CSS dynamically.

// Basic concept:
// - Document: the root object representing the page
// - Nodes: elements, text nodes, comments
// - You can traverse, create, update, and remove nodes

// Example (to run in browser console or injected script):
if (typeof document !== 'undefined') {
  console.log('Document title:', document.title);
  // show number of elements
  console.log('Total elements:', document.getElementsByTagName('*').length);
}

// Learning tip:
// Open DevTools Elements panel and inspect the DOM while running scripts to see live changes.
