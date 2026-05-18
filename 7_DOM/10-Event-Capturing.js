// Event Capturing
// Capturing means events move from the root down to the target.
// You can enable capturing by passing { capture: true } to addEventListener.

if (typeof document !== 'undefined') {
  const outer = document.querySelector('#outer');
  const inner = document.querySelector('#inner');

  if (outer) outer.addEventListener('click', () => console.log('Outer capture'), { capture: true });
  if (inner) inner.addEventListener('click', () => console.log('Inner capture'), { capture: true });

  // Order: outer capture -> inner capture -> inner bubble -> outer bubble
}

// Learning tip:
// Capturing is less commonly used than bubbling but useful in certain patterns.
