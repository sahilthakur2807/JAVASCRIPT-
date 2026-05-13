// Arrow Functions
// Arrow functions provide a shorter syntax for writing functions.
// They are commonly used for callbacks and small utility functions.

const square = (number) => number * number;
console.log(square(6));

const greet = (name) => {
  return `Hello, ${name}`;
};

console.log(greet("Asha"));

const sum = (a, b) => {
  const total = a + b;
  return total;
};

console.log(sum(4, 9));

// Practical example with array methods:
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((value) => value * 2);
console.log(doubled);

const rectangle = (height, width) => height * width;
console.log(rectangle(5, 3)); 

const isarray = (value) => Array.isArray(value);
console.log(isarray(numbers));
console.log(isarray(123));

// advanced usage of arrow functions with implicit return:
const add = (a, b) => a + b;
console.log(add(10, 15));

// Note: Arrow functions do not have their own "this" context, so they are not suitable for methods in objects or classes that rely on "this".
// Example of "this" behavior in arrow functions:

const object = {
    name : "Sahil",
    age: 22,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    greetwithArrow:() => {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. This is 2nd arrow function.`);
    }
}
object.greet(); // Works as expected
object.greetwithArrow(); // "this" does not refer to the object, so it will not work as expected    

// const result = (addition((5,7) => {
//     console.log();
// }));

// Learning tip:
// Arrow functions do not have their own "this" binding, so they behave differently in objects and classes.
