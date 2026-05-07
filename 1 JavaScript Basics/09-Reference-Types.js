// Reference Types
// Objects, arrays, and functions are reference types.
// A variable stores a reference to the value rather than the value itself.

const user1 = { name: "Mia" };
const user2 = user1;

user2.name = "Noah";
console.log(user1.name);

const original = { score: 99 };
const copy = { ...original };
copy.score = 100;

console.log(original.score);
console.log(copy.score);

const numbers = [1, 2, 3];
const numbersCopy = [...numbers];
numbersCopy.push(4);
console.log(numbers);
console.log(numbersCopy);

// Learning tip:
// Use shallow copies when you want to avoid accidental mutation of the original reference.
