// Object.values()
// Object.values() returns an array of all the values of an object.

const settings = {
  brightness: 80,
  volume: 60,
  theme: "dark",
  notifications: true
};

const values = Object.values(settings);
console.log(values);

// Practical example: get all user ages
const users = {
  alice: 25,
  bob: 30,
  charlie: 28,
  diana: 26
};

const ages = Object.values(users);
console.log("Ages:", ages);

// Calculate average
const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;
console.log("Average age:", averageAge);

// Practical example: collect all prices
const inventory = {
  apple: 50,
  banana: 30,
  orange: 40,
  mango: 80
};

const prices = Object.values(inventory);
const totalPrice = prices.reduce((sum, price) => sum + price, 0);
console.log("Total inventory value:", totalPrice);

// Learning tip:
// Object.values() is useful when you need to work with all values without caring about keys.
