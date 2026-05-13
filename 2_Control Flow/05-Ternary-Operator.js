// Ternary Operator
// The ternary operator (conditional operator) is a shorthand for if-else.
// It returns one of two values based on a condition.

// Syntax:
// condition ? valueIfTrue : valueIfFalse

const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);

// Simple example:
const score = 85;
const result = score >= 50 ? "Pass" : "Fail";
console.log(result);

// Using with console.log:
const temperature = 25;
console.log(temperature > 20 ? "Warm" : "Cold");

// Nested ternary (use with caution - can be hard to read):
const marks = 75;
const grade = marks >= 80 ? "A" : marks >= 60 ? "B" : marks >= 40 ? "C" : "F";
console.log(grade);

// Practical implementation - checking user role:
function getUserPermission(role) {
  const permission = role === "admin" ? "Full access" : role === "user" ? "Limited access" : "No access";
  return permission;
}

console.log(getUserPermission("admin"));
console.log(getUserPermission("user"));
console.log(getUserPermission("guest"));

// Real-world example - determining discount:
function calculateDiscount(isMember, purchaseAmount) {
  const discount = isMember ? purchaseAmount * 0.1 : purchaseAmount * 0.02;
  return discount;
}

console.log("Member discount:", calculateDiscount(true, 1000));
console.log("Non-member discount:", calculateDiscount(false, 1000));

// Example - validation message:
const email = "user@example.com";
const message = email.includes("@") ? "Valid email" : "Invalid email";
console.log(message);

// Learning tip:
// Use ternary for simple conditions; for complex logic, use if-else for readability.
