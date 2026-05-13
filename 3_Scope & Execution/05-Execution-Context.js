// Execution Context
// Execution context is the environment in which JavaScript code is evaluated and executed.
// It includes variables, functions, and the value of this.

// JavaScript has:
// - Global execution context
// - Function execution context

const firstName = "Sahil";

function sayHello() {
  const lastName = "Thakur";
  console.log(`Hello, ${firstName} ${lastName}`);
}

sayHello();

// Conceptually, JavaScript goes through:
// 1. Creation phase: variables and functions are set up.
// 2. Execution phase: code runs line by line.

function add(a, b) {
  return a + b;
}

console.log(add(5, 7));

// Learning tip:
// Understanding execution context helps you understand scope, hoisting, and the call stack.
