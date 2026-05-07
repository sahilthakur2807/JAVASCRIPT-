// Operators
// Operators perform actions on values.

const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

console.log(a > b);
console.log(a === "10");
console.log(a === 10);
console.log(a > 5 && b < 5);

const result = a > b ? "a is greater" : "b is greater";
console.log(result);

function calculate(x, operator, y) {
  if (operator === "+") return x + y;
  if (operator === "-") return x - y;
  if (operator === "*") return x * y;
  if (operator === "/") return x / y;
  return "Unknown operator";
}

console.log(calculate(7, "+", 5));

// Learning tip:
// Prefer strict equality operators to avoid unexpected coercion.
