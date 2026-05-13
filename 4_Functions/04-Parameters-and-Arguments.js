// Parameters and Arguments
// Parameters are the named placeholders in a function definition.
// Arguments are the actual values passed when the function is called.

function introduce(name, age) {
  console.log(`My name is ${name} and I am ${age} years old.`);
}

introduce("Riya", 21);
introduce("Arjun", 24);

// Practical example:
function calculateTotal(price, tax) {
  return price + price * tax;
}

console.log(calculateTotal(1000, 0.18));

// Example with multiple arguments:
function logProduct(productName, category, inStock) {
  console.log(`Product: ${productName}, Category: ${category}, In Stock: ${inStock}`);
}

logProduct("Laptop", "Electronics", true);

// Learning tip:
// Use descriptive parameter names so the function purpose is easy to understand.
