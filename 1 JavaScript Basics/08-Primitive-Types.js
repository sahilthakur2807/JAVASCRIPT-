// Primitive Types
// Primitive values are immutable and include:
// string, number, bigint, boolean, undefined, symbol, and null.

let text = "hello";
console.log(text.toUpperCase());
console.log(text);

text = text.toUpperCase(); // reassigning text to the new value
console.log(text);

const age = 25;
const isStudent = true;
const missingValue = null;

console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof missingValue);

// Learning tip:
// Primitive values are copied by value, not by reference.
