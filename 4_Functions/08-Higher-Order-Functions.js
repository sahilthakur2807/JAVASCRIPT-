// Higher Order Functions
// A higher order function is a function that either:
// - takes another function as an argument, or
// - returns a function.

const operation = (x,y) => x + y;

function operate(a, b, operation) {
  return operation(a, b);
}
console.log(operate(4, 5, operation));


const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(operate(4, 5, add));
console.log(operate(4, 5, multiply));

// Practical example: create a reusable formatter
function createFormatter(prefix) {
  return function order(value) {
    return `${prefix}${value}`;
  };
}
console.log(createFormatter('at')('tension')); 

const addDollar = createFormatter;
console.log(addDollar(100));

// Practical example with array method:
const names = ["anu", "rahul", "simran"];
const upperCaseNames = names.map((name) => name.toUpperCase());
console.log(upperCaseNames);

// Learning tip:
// Higher order functions help you write flexible, reusable, and composable code.
