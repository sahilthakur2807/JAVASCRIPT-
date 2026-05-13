// Global Scope
// Variables declared outside any function or block are in the global scope.
// They can be accessed from anywhere in the same file.

const appName = "JavaScript Learning";
let version = 1;

function showAppInfo() {
  console.log(appName);
  console.log(version);
}

showAppInfo();

// Example: changing a global variable from inside a function.
function updateVersion() {
  version += 1;
}

updateVersion();
console.log(version);

// Learning tip:
// Too many global variables can cause naming conflicts and make debugging harder.
