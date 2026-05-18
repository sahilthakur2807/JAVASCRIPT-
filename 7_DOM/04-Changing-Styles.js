// Changing Styles
// You can modify styles via .style or by toggling CSS classes.

if (typeof document !== 'undefined') {
  const box = document.querySelector('.box');
  if (box) {
    box.style.backgroundColor = 'lightblue';
    box.style.padding = '12px';
  }
}

// Learning tip:
// Prefer classes for style changes to keep CSS centralized and maintainable.
