// Nested Conditions
// Nested conditions are if/else statements inside other if/else statements.
// They allow for more complex decision-making with multiple checks.

// Syntax:
// if (condition1) {
//   if (condition2) {
//     code if both are true
//   }
// }

const age = 25;
const hasLicense = true;

if (age >= 18) {
  console.log("Age requirement met");
  
  if (hasLicense) {
    console.log("You can drive");
  } else {
    console.log("Get a driving license first");
  }
} else {
  console.log("You are too young to drive");
}

// Practical example - checking user eligibility:
function checkJobEligibility(age, experience, degree) {
  if (age >= 18) {
    if (degree === true) {
      if (experience >= 1) {
        console.log("You are eligible for the job");
      } else {
        console.log("You need at least 1 year of experience");
      }
    } else {
      console.log("Degree is required");
    }
  } else {
    console.log("You must be 18 or older");
  }
}

checkJobEligibility(25, 2, true);
checkJobEligibility(20, 0, true);
checkJobEligibility(16, 3, true);

// Another example - nested if-else:
const score = 75;
const attempts = 2;

if (score >= 80) {
  console.log("Excellent!");
} else if (score >= 60) {
  if (attempts < 3) {
    console.log("Good, but you can try again");
  } else {
    console.log("Maximum attempts reached");
  }
} else {
  console.log("Need improvement");
}

// Learning tip:
// Too many nested levels make code hard to read. Consider using logical operators instead.
