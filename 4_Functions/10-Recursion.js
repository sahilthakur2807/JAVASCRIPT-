// Recursion
// Recursion is when a function calls itself until a base condition is met.
// Every recursive function needs a base case to stop the loop.

function countdown(number) {
  if (number < 1) {
    console.log("Done");
    return;
  }

  console.log(number);
  countdown(number - 1);
}

countdown(5);

// Practical example: factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));

// Practical example: sum of numbers
function sumTo(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumTo(n - 1);
}

console.log(sumTo(10));

// Example: recursive array traversal
function printArray(arr, index = 0) {
  if (index >= arr.length) {
    return;
  }

  console.log(arr[index]);
  printArray(arr, index + 1);
}

printArray(["a", "b", "c"]);

// Learning tip:
// Use recursion when the problem naturally breaks into smaller versions of itself.
