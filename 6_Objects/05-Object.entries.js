// Object.entries()
// Object.entries() returns an array of [key, value] pairs from an object.

const person = {
  name: "Mona",
  age: 24,
  city: "Mumbai"
};

const entries = Object.entries(person);
console.log(entries);

// Practical example: transform object into a formatted string
const profile = {
  username: "john_doe",
  followers: 1500,
  posts: 42,
  verified: true
};

Object.entries(profile).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// Practical example: convert object to URL query string
const queryParams = {
  search: "javascript",
  page: 1,
  limit: 10
};

const queryString = Object.entries(queryParams)
  .map(([key, value]) => `${key}=${value}`)
  .join("&");

console.log("Query string:", queryString);

// Learning tip:
// Object.entries() is perfect when you need both keys and values together.
