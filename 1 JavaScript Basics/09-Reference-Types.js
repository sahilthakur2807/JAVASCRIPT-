// Reference Types
// Objects, arrays, and functions are reference types.
// A variable stores a reference to the value rather than the value itself.

const user1 = { name: "Mia" };
const user2 = user1;

console.log(user1.name); // "Mia"
console.log(user2.name); // "Mia"

// Modifying user2 also modifies user1 because they reference the same object
user2.name = "Noah";
console.log(user1.name);

// To create a copy of an object, we can use the spread operator or Object.assign

const original = { score: 99 };
const copy = { ...original };// to copy the properties of original into a new object we use spread operator ...
copy.score = 100;

console.log(original.score);
console.log(copy.score);

const numbers = [1, 2, 3];
const numbers2 = numbers; // This creates a reference, not a copy
numbers2.push(4);

console.log(numbers);// [1, 2, 3, 4] because numbers and numbers2 reference the same array
console.log(numbers2);// [1, 2, 3, 4]


const numbersCopy = [...numbers];
numbersCopy.push(5);

console.log(numbers);// [1, 2, 3, 4] because numbers and numbers2 reference the same array
console.log(numbersCopy);// [1, 2, 3, 4, 5] because numbersCopy is a new array with the same elements as numbers

// Learning tip:
// Use shallow copies when you want to avoid accidental mutation of the original reference.
