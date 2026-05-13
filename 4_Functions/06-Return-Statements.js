// Return Statements
// The return statement ends a function and sends a value back to the caller.

function add(a, b) {
  return a + b;
}

const total = add(10, 20);
console.log(total);

function isAdult(age) {
  if (age >= 18) {
    return true;
  }
  return false;
}

console.log(isAdult(20));
console.log(isAdult(15));

// Practical example:
function getDiscount(price) {
  if (price > 1000) {
    return price * 0.2;
  }
  return price * 0.1;
}

console.log(getDiscount(1500));

// Important note:
// Once return runs, the function stops executing.

function testReturn() {
  console.log("Before return");
  return "done";
  // This line will never run
}

console.log(testReturn());

// Learning tip:
// Use return to make functions reusable and to separate logic from output.