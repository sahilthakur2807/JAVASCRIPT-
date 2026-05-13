// switch Statement
// The switch statement executes different code blocks based on different conditions.
// It's cleaner than multiple if-else statements when checking one variable.

// Syntax:
// switch (expression) {
//   case value1:
//     code if expression === value1
//     break;
//   case value2:
//     code if expression === value2
//     break;
//   default:
//     code if no cases match
// }

const day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend");
}

// Practical example - grade evaluation:
function getGradeDescription(grade) {
  switch (grade) {
    case "A":
      console.log("Excellent performance");
      break;
    case "B":
      console.log("Good performance");
      break;
    case "C":
      console.log("Average performance");
      break;
    case "D":
      console.log("Below average");
      break;
    case "F":
      console.log("Failed");
      break;
    default:
      console.log("Invalid grade");
  }
}

getGradeDescription("A");
getGradeDescription("C");
getGradeDescription("Z");

// Example with user action:
function processUserAction(action) {
  switch (action) {
    case "delete":
      console.log("Deleting item...");
      break;
    case "update":
      console.log("Updating item...");
      break;
    case "view":
      console.log("Viewing item...");
      break;
    default:
      console.log("Unknown action");
  }
}

processUserAction("delete");
processUserAction("update");

// Learning tip:
// Don't forget the break statement; without it, code will "fall through" to the next case.
