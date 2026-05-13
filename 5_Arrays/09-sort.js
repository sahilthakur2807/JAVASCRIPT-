// sort
// sort arranges array elements in place.
// By default, it sorts values as strings, which can surprise beginners.

const names = ["Ravi", "Asha", "Mona"];
names.sort();
console.log(names);

const numbers = [40, 5, 100, 20];
numbers.sort();
console.log(numbers);

// Numeric sorting requires a compare function.
const sortedNumbers = [40, 5, 100, 20].sort((a, b) => a - b);
console.log(sortedNumbers);

const descending = [40, 5, 100, 20].sort((a, b) => b - a);
console.log(descending);

// Practical example: sort objects by age
const users = [
  { name: "Asha", age: 21 },
  { name: "Ravi", age: 19 },
  { name: "Mona", age: 25 }
];

users.sort((a, b) => a.age - b.age);
console.log(users);

// Learning tip:
// Always use a compare function for numbers and objects.
