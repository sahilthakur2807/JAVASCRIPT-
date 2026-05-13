// if Statement
// The if statement executes a block of code only if a condition is true.
// It allows your program to make decisions based on conditions.

// Syntax:
// if (condition) {
//   code runs if condition is true
// }

const age = 18;

if (age >= 18) {
  console.log("You are an adult");
}

// Another example:
const score = 85;

if (score > 80) {
  console.log("Great score!");
}

// Practical implementation:
function checkUserAccess(userRole) {
  if (userRole === "admin") {
    console.log("Admin access granted");
  }
}

checkUserAccess("admin");
checkUserAccess("user");

// Example with numbers:
const temperature = 35;

if (temperature > 30) {
  console.log("It's hot outside");
}

// Learning tip:
// Use meaningful variable names and clear conditions for readability.
