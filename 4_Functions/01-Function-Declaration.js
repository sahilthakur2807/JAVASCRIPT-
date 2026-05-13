// Function Declaration
// A function declaration defines a reusable block of code with a name.
// It can be called before its definition because it is hoisted.

// Syntax:
// function functionName(parameters) {
//   code to execute
// }

sayHello();

function sayHello() {
  console.log("Hello from a function declaration");
}

function greetUser(name) {
  return `Hello, ${name}`;
}

console.log(greetUser("Sahil"));

// Practical example:
function calculateArea(length, width) {
  return length * width;
}

console.log("Area:", calculateArea(10, 5));

// Learning tip:
// Use function declarations when you want named, reusable functions with hoisting behavior.
