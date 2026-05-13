// Default Parameters
// Default parameters provide fallback values when an argument is missing or undefined.

function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

greet("Sahil");
greet();

function calculateBill(amount, tax = 0.18) {
  return amount + amount * tax;
}

console.log(calculateBill(1000));
console.log(calculateBill(1000, 0.12));

// Practical example:
function createUser(username = "anonymous", role = "user") {
  return { username, role };
}

console.log(createUser());
console.log(createUser("adminUser", "admin"));

// Learning tip:
// Default parameters make functions easier to call and reduce the need for manual validation.
