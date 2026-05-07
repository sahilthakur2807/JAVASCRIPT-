// How JavaScript Works
// JavaScript code is parsed and executed by an engine.
// In browsers, JavaScript usually runs on a single thread, but async behavior is handled through the event loop.

// Core pieces:
// - Call stack: keeps track of currently running functions
// - Heap: stores objects and data in memory
// - Event loop: coordinates when queued callbacks are executed

console.log("Start");

setTimeout(() => {
  console.log("Timer callback");
}, 0);

console.log("End");

// Expected output order:
// Start
// End
// Timer callback

function greet(name) {
  return `Hello, ${name}`;
}

console.log(greet("Student"));

// Learning tip:
// Understand the call stack and event loop before moving to promises and async/await.
