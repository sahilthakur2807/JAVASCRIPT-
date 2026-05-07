// JavaScript Engines
// A JavaScript engine is the runtime component that reads and executes JavaScript code.
// Examples include V8 (Chrome and Node.js), SpiderMonkey (Firefox), and JavaScriptCore (Safari).

// What engines do:
// - Parse code into an abstract syntax tree
// - Optimize frequently used code
// - Use JIT compilation for performance
// - Manage memory and garbage collection

console.time("loop");
let sum = 0;
for (let index = 0; index < 100000; index += 1) {
  sum += index;
}
console.timeEnd("loop");
console.log(sum);

// Learning tip:
// Write clear code first, then measure performance if something is actually slow.
