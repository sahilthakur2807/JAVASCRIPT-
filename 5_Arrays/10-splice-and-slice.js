// splice and slice
// slice returns a shallow copy of part of an array and does not modify the original.
// splice modifies the original array by adding/removing elements.

const fruits = ["apple", "banana", "mango", "orange", "grape"];

const part = fruits.slice(1, 4);
console.log(part);
console.log(fruits);

// splice: remove 2 items starting from index 1
const fruitsCopy = ["apple", "banana", "mango", "orange", "grape"];
const removed = fruitsCopy.splice(1, 2);

console.log(removed);
console.log(fruitsCopy);

// splice can also insert items
const colors = ["red", "blue", "green"];
colors.splice(1, 0, "yellow");
console.log(colors);

// Practical example: replace items
const letters = ["a", "b", "c", "d"];
letters.splice(2, 1, "x");
console.log(letters);

// Learning tip:
// Use slice when you want a copy; use splice when you want to mutate the array.
