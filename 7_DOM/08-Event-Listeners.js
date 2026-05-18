// browser par koi bhi harkat karne ke liye event listeners ka use hota hai, jaise click, hover, form submit, etc.
// Event Listeners
// Use addEventListener to attach events and removeEventListener to detach.

if (typeof document !== 'undefined') {
  const btn = document.querySelector('#clickMe');
  function handleClick(e) {
    console.log('Button clicked', e.type);
  }

  if (btn) {
    btn.addEventListener('click', handleClick);

    // remove after 5 seconds (example)
    setTimeout(() => {
      btn.removeEventListener('click', handleClick);
      console.log('Listener removed');
    }, 5000);
  }
}

// Learning tip:
// Always keep references to handlers if you plan to remove them later.
