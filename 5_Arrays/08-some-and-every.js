// some and every
// some checks whether at least one element passes the test.
// every checks whether all elements pass the test.

const numbers = [2, 4, 6, 8];

const hasOdd = numbers.some((number) => number % 2 !== 0);
const allEven = numbers.every((number) => number % 2 === 0);

console.log(hasOdd);
console.log(allEven);

// Practical example: age checks
const ages = [18, 21, 16, 30];
console.log(ages.some((age) => age < 18));
console.log(ages.every((age) => age >= 18));

// Practical example: object validation
const users = [
  { name: "Asha", active: true },
  { name: "Ravi", active: true }
];

console.log(users.every((user) => user.active));

// Learning tip:
// Use some when you need one true result, and every when you need all true.
