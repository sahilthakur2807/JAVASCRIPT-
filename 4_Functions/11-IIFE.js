// IIFE (Immediately Invoked Function Expression)
// An IIFE is a function that runs immediately after it is defined.
// It is useful for creating a private scope.

(function () {
  console.log("This runs immediately");
})();

// IIFE with parameters:
(function (name) {
  console.log(`Hello, ${name}`);
})("Sahil");

// IIFE using arrow function:
(() => {
  const secret = "private value";
  console.log("Inside arrow IIFE");
  console.log(secret);
})();

// Practical example: avoid polluting the global scope
const result = (function () {
  const a = 10;
  const b = 20;
  return a + b;
})();

console.log(result);

// Learning tip:
// IIFEs were very common before modules were widely used, and they still help when you need local scope immediately.
