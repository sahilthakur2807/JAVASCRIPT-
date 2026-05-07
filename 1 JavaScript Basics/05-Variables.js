// Variables
// A variable is a named storage location used to hold values in a program.

// Good variable names are descriptive and readable.

const courseName = "JavaScript Basics";
let lessonCount = 15;
let completedLessons = 3;

completedLessons += 1;

console.log(courseName);
console.log(lessonCount);
console.log(completedLessons);

function showProfile(name, age, city) {
  return `${name} is ${age} years old and lives in ${city}.`;
}

console.log(showProfile("Asha", 21, "Pune"));

// Learning tip:
// Use const by default, and switch to let only when reassignment is required.
