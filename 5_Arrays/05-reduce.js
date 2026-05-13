// reduce
// reduce converts an array into a single value.
// The result can be a number, string, object, or any other data type.

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);

// Practical example: find product
const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1); // ek inital value dena padta hai reduce ko, agar humne 0 diya hota to product hamesha 0 hota
console.log(product);

// Practical example: count items
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const wordCount = words.reduce((accumulator, word) => {
  accumulator[word] = (accumulator[word] || 0) + 1; //by default 0 hoga aur usme 1 add kar dega
  return accumulator;
}, {});

console.log(wordCount);

// Practical example: total order amount
const cart = [100, 250, 400];
const total = cart.reduce((accumulator, price) => accumulator + price, 0);
console.log(total);

// Learning tip:
// reduce is powerful for totals, summaries, grouping, and building new structures.
