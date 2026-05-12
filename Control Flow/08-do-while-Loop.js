// do-while Loop
// The do-while loop executes code first, then checks the condition.
// It runs at least once, even if the condition is false.

// Syntax:
// do {
//   code to repeat
// } while (condition);

// Simple example: count from 1 to 5
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);

// Example - runs at least once even if condition is false:
let counter = 10;

do {
  console.log("This runs once");
  counter++;
} while (counter < 5);

// Practical example - user menu (simulated):
let userChoice = "exit";
let menuRuns = 0;

do {
  menuRuns++;
  console.log(`Menu display #${menuRuns}`);
  
  if (menuRuns === 1) {
    userChoice = "continue";
  } else if (menuRuns === 3) {
    userChoice = "exit";
  }
  
  console.log(`User choice: ${userChoice}`);
} while (userChoice !== "exit");

// Example - generate random numbers until specific condition:
let randomNum = 0;
let attempts = 0;

do {
  randomNum = Math.floor(Math.random() * 10);
  attempts++;
  console.log(`Attempt ${attempts}: Got ${randomNum}`);
} while (randomNum !== 7);

console.log("Found 7!");

// Practical - form submission retry:
function submitForm() {
  let submitted = false;
  let tries = 0;
  
  do {
    tries++;
    console.log(`Form submission attempt ${tries}`);
    
    if (tries >= 2) {
      submitted = true;
    }
  } while (!submitted);
  
  return "Form submitted successfully";
}

console.log(submitForm());

// Example - input validation (simulated):
let validInput = false;
let inputAttempts = 0;

do {
  inputAttempts++;
  console.log(`Input attempt ${inputAttempts}`);
  
  if (inputAttempts === 2) {
    validInput = true;
  }
} while (!validInput);

console.log("Valid input received");

// Learning tip:
// Use do-while when you need the code to run at least once regardless of the condition.
