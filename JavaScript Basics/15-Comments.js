// Comments
// Comments are notes in code that the JavaScript engine ignores.
// They are useful for explaining why code exists, how tricky logic works, or what assumptions are made.

// Single-line comment example:
const userName = "Sam";

/*
  Multi-line comment example:
  This function calculates total price after tax.
  Inputs: basePrice and taxRate
*/
function totalPrice(basePrice, taxRate) {
  return basePrice + basePrice * taxRate;
}

console.log(userName);
console.log(totalPrice(100, 0.18));

// Best practice:
// Keep comments short, accurate, and focused on reasoning instead of obvious syntax.
