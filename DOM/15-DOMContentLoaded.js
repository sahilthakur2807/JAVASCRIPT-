// DOMContentLoaded
// The DOMContentLoaded event fires when the initial HTML is fully parsed.
// Use it to run setup code that depends on DOM elements being available.

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    // Initialize UI, attach listeners, and hydrate dynamic content here
  });
}

// Learning tip:
// Use DOMContentLoaded for setup; use window.load if you must wait for images and external resources.
