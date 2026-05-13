// Array Methods
// JavaScript provides many built-in methods to work with arrays.
// Methods help you add, remove, transform, search, and iterate over data.

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.length);
console.log(numbers.includes(3));
console.log(numbers.indexOf(4));

numbers.push(6);
console.log(numbers);

numbers.splice(2, 1); // index 2 se 1 item remove karta hai
console.log(numbers);

const doubled = numbers.map(x => x * 2); // returns a new array with each element multiplied by 2
console.log("Doubled:", doubled);

const evens = numbers.filter(x => x % 2 === 0); // returns a new array with only even numbers
console.log("Even numbers:", evens);

const found = numbers.find(x => x === 3); // returns the first element that satisfies the condition
console.log("Found 3:", found);

console.log("ForEach results:");
numbers.forEach(x => console.log("Value divided by 2:", x / 2)); // har element pe function apply karta hai


// Common array methods include:
// push, pop, shift, unshift, slice, splice, map, filter, reduce, find, forEach, sort.

const names = ["Asha", "Ravi", "Karan"];
console.log(names.join(" - "));

// Learning tip:
// Learn the difference between mutating methods and non-mutating methods early.
