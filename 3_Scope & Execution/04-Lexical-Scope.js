// Lexical Scope
// Lexical scope means inner functions can access variables from outer functions
// based on where the code is written, not where it is called.

function outerFunction() {
  const outerMessage = "I am from the outer function";

  function innerFunction() {
    console.log(outerMessage);
  }

  innerFunction();
}

outerFunction();

// Another example:
function createGreeter(name) {
  const greeting = "Hello";

  return function () {
    return `${greeting}, ${name}!`;
  };
}

const greetAsha = createGreeter("Asha");
console.log(greetAsha());

// Learning tip:
// Lexical scope is the foundation of closures in JavaScript.