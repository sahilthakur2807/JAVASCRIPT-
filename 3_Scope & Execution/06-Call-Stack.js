// Call Stack
// The call stack is a data structure that keeps track of function calls.
// JavaScript uses a Last In, First Out (LIFO) order.

function first() {
  console.log("First function");
  second();
}

first();

function second() {
  console.log("Second function");
  third();
}

function third() {
  console.log("Third function");
}

first();

// The stack grows when functions are called and shrinks when they return.

function calculateArea(length, width) {
  return length * width;
}

function calculateRectangle() {
  const area = calculateArea(10, 5);
  console.log(area);
}

calculateRectangle();

// Learning tip:
// If recursion never reaches a base case, the call stack can overflow.
