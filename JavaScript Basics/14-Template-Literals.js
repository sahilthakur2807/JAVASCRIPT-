// Template Literals
// Template literals are strings written with backticks.
// They support interpolation with ${...} and multi-line text.

const name = "Riya";
const score = 95;

const message = `Hello ${name}, your score is ${score}.`;
console.log(message);

const receipt = `Order Summary:
- Item: Notebook
- Quantity: 2
- Total: $20`;

console.log(receipt);

function makeProfileCard(personName, age, city) {
  return `Name: ${personName}
Age: ${age}
City: ${city}`;
}

console.log(makeProfileCard("Aman", 22, "Delhi"));

// Learning tip:
// Template literals are usually cleaner than string concatenation for dynamic text.
