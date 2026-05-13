// Rest Operator (...)
// The rest operator collects multiple items into a single array or object.
// It is often used in function parameters and destructuring.

// Rest in function parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// Rest in destructuring - array
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first);
console.log(second);
console.log(rest);

// Rest in destructuring - object
const person = {
  name: "Ravi",
  age: 25,
  city: "Mumbai",
  country: "India"
};

const { name, age, ...otherInfo } = person;
console.log(name);
console.log(age);
console.log(otherInfo);

// Practical example: separate first few items
function processItems(first, second, ...remaining) {
  console.log(`First: ${first}`);
  console.log(`Second: ${second}`);
  console.log(`Remaining:`, remaining);
}

processItems("a", "b", "c", "d", "e");

// Learning tip:
// Rest operator is useful for handling variable number of arguments or extracting specific items.
