// Object Destructuring
// Object destructuring lets you extract properties from an object into separate variables.

const person = {
  firstName: "Ravi",
  lastName: "Sharma",
  age: 25,
  city: "Delhi"
};

const { firstName, lastName, age } = person;
console.log(firstName);
console.log(lastName);
console.log(age);

// Rename variables during destructuring
const { firstName: fName, lastName: lName } = person;
console.log(fName, lName);

// Default values
const { firstName: f, country = "India" } = person;
console.log(f, country);

// Practical example: function parameters
function displayUser({ name, email, status }) {
  console.log(`${name} (${email}) - ${status}`);
}

displayUser({
  name: "Mona",
  email: "mona@example.com",
  status: "active"
});

// Nested destructuring
const user = {
  id: 1,
  profile: {
    name: "Karan",
    address: "Bangalore"
  }
};

const { profile: { name, address } } = user;
console.log(name, address);

// Learning tip:
// Object destructuring makes code cleaner and easier to read.
