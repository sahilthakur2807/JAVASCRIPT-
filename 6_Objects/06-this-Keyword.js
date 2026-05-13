// this Keyword
// The this keyword refers to the object that a method belongs to.
// The value of this depends on how the function is called.

const person = {
  name: "Sahil",
  age: 21,
  introduce() {
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
  }
};

person.introduce();

// Example with object method
const car = {
  brand: "Honda",
  model: "Civic",
  displayInfo() {
    return `${this.brand} ${this.model}`;
  }
};

console.log(car.displayInfo());

// this in different contexts
const obj = {
  value: 42,
  getValue() {
    return this.value;
  }
};

console.log(obj.getValue());

// Note: Arrow functions do not have their own this
const student = {
  name: "Asha",
  greet: () => {
    console.log(`Hello, ${this.name}`);
  }
};

student.greet();

// Learning tip:
// Use regular functions (not arrow functions) when you need this inside object methods.