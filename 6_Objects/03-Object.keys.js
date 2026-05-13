// Object.keys()
// Object.keys() returns an array of all the property names (keys) of an object.

const student = {
  name: "Ravi",
  rollNumber: 101,
  grade: "A",
  subject: "Mathematics"
};

const keys = Object.keys(student);
console.log(keys);

// Practical example: iterate through object properties
const product = {
  id: 1,
  title: "Laptop",
  price: 50000,
  inStock: true
};

const productKeys = Object.keys(product);
console.log("Product keys:", productKeys);

// Iterate and display
productKeys.forEach((key) => {
  console.log(`${key}: ${product[key]}`);
});

// Check if object is empty
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmpty({}));
console.log(isEmpty(product));

// Learning tip:
// Object.keys() is useful for getting an array of property names to loop through.
