// Arrays Basics
// An array is an ordered list of values stored in a single variable.
// Arrays can hold numbers, strings, objects, functions, or even other arrays.

const fruits = ["apple", "banana", "orange"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits.length);

// Arrays are zero-indexed, so the first item is at index 0.

fruits.push("mango");
console.log(fruits);

fruits.pop(); // removes the last item
console.log(fruits);

fruits.unshift("grape"); // beginning me add karta hai
console.log(fruits);

fruits.shift(); // age se hatata hai 
console.log(fruits);

// Mixed array example:
const mixed = [1, "hello", true, { name: "Sahil" }, [10, 20]];
console.log(mixed);

// Learning tip:
// Use arrays when you need to store multiple related values in one variable.
