// forEach
// forEach runs a function for each element in an array.
// It is mainly used for side effects like logging, updating the DOM, or calling other functions.

const fruits = ["apple", "banana", "mango"];

fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

// Practical example: sum values
let total = 0;
const numbers = [10, 20, 30];

numbers.forEach((number) => {
  total += number;
});

console.log(total);

// Practical example: print formatted output
const users = ["Asha", "Ravi", "Mona"];
users.forEach((user) => {
  console.log(`User: ${user}`);
});

// Learning tip:
// forEach does not return a new array, so use map if you need transformed values.
