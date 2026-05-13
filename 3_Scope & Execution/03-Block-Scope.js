// Block Scope
// Variables declared with let and const are block-scoped.
// A block is any code wrapped in curly braces {}.

if (true) {
  let blockMessage = "Visible only inside this block";
  const blockValue = 42;
  console.log(blockMessage);
  console.log(blockValue);
}

// Uncommenting the next lines would throw errors.
// console.log(blockMessage);
// console.log(blockValue);

for (let i = 1; i <= 3; i++) {
  console.log(`Loop iteration ${i}`);
}

// i is not accessible here because it was declared with let inside the loop block.
// console.log(i);

// Learning tip:
// Use block scope to limit variables to the exact area where they are needed.
