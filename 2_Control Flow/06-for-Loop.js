// for Loop
// The for loop repeats a block of code a specific number of times.
// It's useful when you know exactly how many times to repeat.

// Syntax:
// for (initialization; condition; increment/decrement) {
//   code to repeat
// }

// Simple example: count from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Print a table of numbers:
console.log("--- Multiplication Table of 5 ---");
for (let i = 1; i <= 10; i++) {
  console.log(`5 × ${i} = ${5 * i}`);
}

// Loop through an array:
const fruits = ["apple", "banana", "orange", "mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Practical example - sum numbers:
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log("Sum of 1 to 10:", sum);

// Example - print even numbers:
console.log("--- Even Numbers ---");
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// Nested loops - print a pattern:
console.log("--- Star Pattern ---");
for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "* ";
  }
  console.log(stars);
}

// Example - check if number exists in array:
function findInArray(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return `Found at index ${i}`;
    }
  }
  return "Not found";
}

console.log(findInArray([10, 20, 30, 40], 30));

// Learning tip:
// Make sure loop condition will eventually be false, otherwise you'll have an infinite loop.
