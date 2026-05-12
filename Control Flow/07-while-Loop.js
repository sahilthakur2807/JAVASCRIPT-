// while Loop
// The while loop repeats a block of code while a condition is true.
// It's useful when you don't know exactly how many iterations are needed.

// Syntax:
// while (condition) {
//   code to repeat
//   update condition
// }

// Simple example: count from 1 to 5
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

// Example - user input validation (simulated):
let isValid = false;
let attempts = 0;

while (!isValid && attempts < 3) {
  attempts++;
  console.log(`Attempt ${attempts}: Checking credentials...`);
  
  if (attempts === 2) {
    isValid = true;
  }
}

if (isValid) {
  console.log("Login successful");
} else {
  console.log("Maximum attempts exceeded");
}

// Practical example - generating random numbers until condition:
let randomNumber = 0;
let iterations = 0;

while (randomNumber < 0.8) {
  randomNumber = Math.random();
  iterations++;
  console.log(`Iteration ${iterations}: ${randomNumber.toFixed(3)}`);
}

console.log(`Needed ${iterations} iterations to get above 0.8`);

// Example - sum until limit:
let sum = 0;
let number = 1;

while (sum < 50) {
  sum += number;
  console.log(`Adding ${number}, sum is now ${sum}`);
  number++;
}

// Example - process items from a list:
const tasks = ["Read", "Code", "Exercise", "Sleep"];
let taskIndex = 0;

while (taskIndex < tasks.length) {
  console.log(`Task: ${tasks[taskIndex]}`);
  taskIndex++;
}

// Practical - password strength checker:
function checkPasswordStrength() {
  let strength = 0;
  const password = "MyPassword123!";
  
  let index = 0;
  while (index < password.length) {
    if (/[A-Z]/.test(password[index])) strength++;
    if (/[a-z]/.test(password[index])) strength++;
    if (/[0-9]/.test(password[index])) strength++;
    if (/[!@#$%^&*]/.test(password[index])) strength++;
    index++;
  }
  
  return strength;
}

console.log("Password strength score:", checkPasswordStrength());

// Learning tip:
// Be careful with while loops - ensure the condition will eventually become false.
