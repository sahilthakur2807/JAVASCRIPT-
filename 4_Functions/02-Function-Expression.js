// Function Expression
// A function expression stores a function inside a variable.
// It is not hoisted the same way as function declarations.

const add = function (a, b) {
  return a + b;
};

const substract = function (x, y) {
  return x - y;
};
console.log(add(5, 3));
console.log(substract(10, 4));

const multiply = function multiplyNumbers(x, y) {
  return x * y;
};

console.log(multiply(4, 6));

// Practical example:
const isEven = function (number) {
  return number % 2 === 0;
};

console.log(isEven(10));
console.log(isEven(7));

// Learning tip:
// Use function expressions when you want functions stored as values or passed around.
