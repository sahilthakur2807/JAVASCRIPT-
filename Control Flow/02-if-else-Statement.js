// if-else Statement
// The if-else statement executes one block if condition is true,
// and a different block if the condition is false.

// Syntax:
// if (condition) {
//   code runs if true
// } else {
//   code runs if false
// }

const age = 15;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// Another example:
const grade = 45;

if (grade >= 50) {
  console.log("You passed");
} else {
  console.log("You failed");
}

// Practical implementation:
function checkPassword(password) {
  if (password.length >= 8) {
    console.log("Strong password");
  } else {
    console.log("Weak password, minimum 8 characters required");
  }
}

checkPassword("abc123");
checkPassword("mySecurePass123");

// Example with boolean:
const isLoggedIn = false;

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in first");
}

// Learning tip:
// Always provide an else block to handle the false case explicitly.
