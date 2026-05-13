// Spread Operator (...)
// The spread operator spreads the properties of an object into another object.
// It creates a shallow copy and can be used for merging objects.

const person1 = {
  name: "Asha",
  age: 22
};

const person2 = {
  ...person1,
  city: "Pune"
};

console.log(person2);

// Merge multiple objects
const defaults = {
  theme: "light",
  language: "en"
};

const userPrefs = {
  theme: "dark"
};

const finalSettings = { ...defaults, ...userPrefs };
console.log(finalSettings);

// Practical example: clone an object
const original = {
  id: 1,
  title: "JavaScript",
  completed: false
};

const copy = { ...original };
copy.completed = true;

console.log("Original:", original);
console.log("Copy:", copy);

// Spread in arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

// Learning tip:
// Spread operator is useful for shallow copying and merging without mutation.