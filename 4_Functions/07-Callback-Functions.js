// Callback Functions
// A callback is a function passed into another function as an argument.
// The outer function decides when to execute the callback.

function greetUser(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function afterGreeting() {
  console.log("This runs after the greeting");
}

greetUser("Sahil", afterGreeting);

// Practical example:
function processOrder(orderId, onSSuccess) {
  console.log(`Processing order ${orderId}`);
  console.log(typeof onSSuccess);
  onSSuccess(orderId);
}

const onSSuccess = (id) => {
  console.log(`Order ${id} completed successfully`);
};

processOrder(1050, onSSuccess);

function dateofbirth(year, newbirth) {
    if (year < 2000) {
        ("You are born in the 20th century");
    } else {
        newbirth("You are born in the 21st century");
    }
}

// Example with array method callbacks:
const numbers = [1, 2, 3];
const doubled = numbers.map((value) => value * 2);
console.log(doubled);

// Learning tip:
// Callbacks are central to event handling, timers, and asynchronous JavaScript.
