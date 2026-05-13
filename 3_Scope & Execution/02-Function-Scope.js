// Function Scope
// Variables declared with var inside a function are scoped to that function.
// They cannot be accessed outside the function body.

function greetUser() {
  var message = "Hello from function scope";
  console.log(message);
}

greetUser();

// Uncommenting the next line would cause an error because message is not accessible here.
// console.log(message);

function calculateSum(a, b) {
  var total = a + b;
  return total;
}

console.log(calculateSum(10, 20));

// Learning tip:
// Function scope helps keep temporary values private to the function that uses them.
