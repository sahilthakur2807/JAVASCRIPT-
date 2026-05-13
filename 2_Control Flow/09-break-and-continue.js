// break and continue
// break: exits a loop completely
// continue: skips the current iteration and goes to the next one

// === BREAK ===
// The break statement exits a loop when a condition is met.

console.log("--- break Example ---");

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Found 5! Exiting loop");
    break;
  }
  console.log(i);
}

// Practical example - find item in array:
function findItem(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log(`Found ${target} at index ${i}`);
      break;
    }
  }
}

findItem(["apple", "banana", "orange", "mango"], "orange");

// break in while loop:
let count = 0;

while (true) {
  count++;
  console.log(count);
  
  if (count === 5) {
    console.log("Breaking out of infinite loop");
    break;
  }
}

// === CONTINUE ===
// The continue statement skips current iteration and moves to next.

console.log("--- continue Example ---");

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping 3");
    continue;
  }
  console.log(i);
}

// Practical example - skip even numbers:
console.log("--- Odd Numbers Only ---");

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// Example - skip invalid items:
const items = ["valid", null, "valid", undefined, "valid"];

for (let i = 0; i < items.length; i++) {
  if (items[i] === null || items[i] === undefined) {
    continue;
  }
  console.log(`Processing: ${items[i]}`);
}

// Practical - skip certain users:
const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true },
  { name: "David", active: false }
];

console.log("--- Active Users Only ---");

for (let i = 0; i < users.length; i++) {
  if (!users[i].active) {
    continue;
  }
  console.log(users[i].name);
}

// Example - search with break:
function searchForValue(arr, target) {
  let found = false;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log(`Found ${target}`);
      found = true;
      break;
    }
  }
  
  return found;
}

searchForValue([10, 20, 30, 40], 30);

// Combined break and continue:
console.log("--- Processing Numbers ---");

for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0) {
    continue; // Skip multiples of 3
  }
  if (i === 10) {
    break; // Stop at 10
  }
  console.log(i);
}

// Learning tip:
// Overusing break and continue can make loops hard to follow; use them judiciously.
