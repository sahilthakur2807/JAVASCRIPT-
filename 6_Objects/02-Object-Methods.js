// Object Methods
// JavaScript provides built-in methods to work with objects.
// Common methods help you access, modify, and inspect object properties.

const user = {
  name: "Asha",
  age: 22,
  email: "asha@example.com"
};

console.log(user.name);
console.log(user.email);

// Delete a property
delete user.email;
console.log(user);

// Check if property exists
console.log("name" in user);
console.log("email" in user);
console.log("age" in user);

// Get all keys
console.log(Object.keys(user));

// Get all values
console.log(Object.values(user));

// Get key-value pairs
console.log(Object.entries(user));

// Merge objects
const user2 = { country: "India" };
const merged = Object.assign({}, user, user2);
console.log(merged);

// Learning tip:
// Object methods help you inspect and transform objects safely.
