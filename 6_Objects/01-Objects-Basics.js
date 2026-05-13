// Objects Basics
// An object is a collection of key-value pairs stored in a single variable.
// Keys (also called properties) are names, and values can be any data type.

const person = {
  name: "Sahil",
  age: 21,
  city: "Pune",
  isStudent: true
};

console.log(person);
console.log(person.name);
console.log(person["age"]);

// Dot notation vs bracket notation
person.email = "sahil@example.com";
console.log(person);

person["phone"] = "9876543210";
console.log(person);

// Objects with methods
const car = {
  brand: "Toyota",
  model: "Camry",
  start() {
    return "Engine started";
  }
};

console.log(car.start());

// Learning tip:
// Use objects when you need to store related properties together.
