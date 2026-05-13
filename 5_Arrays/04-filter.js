// filter
// filter creates a new array containing only the elements that pass a test.
// It does not modify the original array.

const numbers = [10, 15, 20, 25, 30];
const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(numbers);
console.log(evenNumbers);

// Practical example: filter adults
const ages = [12, 18, 21, 15, 30];
const adults = ages.filter((age) => age >= 18);
console.log(adults);

// Practical example: filter active users
const users = [
  { name: "Asha", active: true },
  { name: "Ravi", active: false },
  { name: "Mona", active: true }
];

const activeUsers = users.filter((user) => user.active);
console.log(activeUsers);

// Learning tip:
// Use filter when you want to keep only some items from an array.
