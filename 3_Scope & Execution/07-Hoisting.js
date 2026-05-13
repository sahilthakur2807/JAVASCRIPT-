// Hoisting
// Hoisting is JavaScript's behavior of moving declarations to the top of their scope
// during the creation phase of execution context.

// Function declarations are hoisted completely, so this works:
showMessage();

function showMessage() {
  console.log("Function declarations are hoisted");
}

// var declarations are hoisted and initialized with undefined.
console.log(hoistedVar);
var hoistedVar = 10;
console.log(hoistedVar);

// let and const are hoisted too, but they are not accessible before declaration.
// This part is commented out because it would throw a ReferenceError.
// console.log(hoistedLet);
// let hoistedLet = 20;

// Learning tip:
// Hoisting is why function declarations behave differently from function expressions.
