// let, const, var
// JavaScript provides three main ways to declare variables.

// var:
// - function-scoped
// - can be redeclared and reassigned
// - older style, generally avoided in modern code

// let:
// - block-scoped
// - can be reassigned
// - cannot be redeclared in the same scope

// const:
// - block-scoped
// - cannot be reassigned
// - must be initialized immediately

var legacyCount = 1;
legacyCount = 2;

let currentCount = 10;
currentCount = 11;

const appName = "Learning JS";

console.log(legacyCount);
console.log(currentCount);
console.log(appName);

const user = { name: "Maya" };
user.name = "Laya";
console.log(user);

// Best practice:
// Use const first, let when needed, and avoid var in new code.
