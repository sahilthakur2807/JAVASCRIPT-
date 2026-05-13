// Temporal Dead Zone
// The Temporal Dead Zone (TDZ) is the time between entering a scope
// and the point where let or const variables are declared.
// During this time, those variables cannot be accessed.

// Example:
// console.log(name); // ReferenceError if uncommented
// let name = "Sahil";

{
  // console.log(city); // ReferenceError if uncommented
  let city = "Pune";
  console.log(city);
}

const score = 100;
console.log(score);

// Practical example:
function showResult() {
  // console.log(message); // ReferenceError if uncommented
  const message = "Initialized after declaration";
  console.log(message);
}

showResult();

// Learning tip:
// TDZ is one reason to declare variables near the top of their block before using them.
