// Truthy and Falsy Values
// In conditions, JavaScript converts values to boolean automatically.
// Falsy values: false, 0, -0, 0n, "", null, undefined, NaN

if ("hello") {
  console.log("Truthy");
}

if (0) {
  console.log("This will not run");
}

const userInput = "";
const displayName = userInput || "Guest";
console.log(displayName);

const count = 0;
console.log(count || 10);
console.log(count ?? 10);

function describeValue(value) {
  return value ? "truthy" : "falsy";
}

console.log(describeValue([]));
console.log(describeValue(""));

// Learning tip:
// Use ?? when you only want to fall back for null or undefined, not for 0 or empty strings.
