// Data Types
// JavaScript values belong to different data types.
// The two major groups are primitive types and reference types.

console.log(typeof 42);
console.log(typeof "hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

// Primitive types: number, string, boolean, null, undefined, symbol
// Reference types: objects, arrays, functions

// Example of reference type:
const person = {
  name: "Alice",
  age: 30,
};

console.log(typeof person); // "object"

// Example of array:
const numbers = [1, 2, 3];
console.log(typeof numbers); // "object"



// Example of function:
function printType(value) {
  if (Array.isArray(value)) {
    return "array";
  }

  if (value === null) {
    return "null";
  }

  return typeof value;
}

console.log(printType([1, 2, 3]));
console.log(printType(null));
console.log(printType(100));

// Learning tip:
// Use explicit checks like Array.isArray for arrays instead of relying only on typeof.
