// Type Coercion
// Type coercion happens automatically when JavaScript converts values during an operation.

console.log("5" + 2);
console.log("5" - 2);
console.log(true + 1);
console.log(false + 1);

console.log(0 == false);
console.log("" == 0);
console.log(null == undefined);
console.log(0 === false);

function safeCompare(input) {
  const value = Number(input);

  if (Number.isNaN(value)) {
    return "Invalid number";
  }

  return value === 42;
}

console.log(safeCompare("42"));
console.log(safeCompare("hello"));

// Learning tip:
// Use explicit conversion and strict equality to reduce surprises.
