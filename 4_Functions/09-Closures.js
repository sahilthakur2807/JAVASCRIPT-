// Closures
// A closure is created when a function remembers variables from its outer scope,
// even after the outer function has finished executing.

function outerFunction() {
  const message = "Hello from outer scope";

  return function innerFunction() {
    console.log(message);
  };
}

const myClosure = outerFunction();
myClosure();

// Practical example: counter using closure
function createCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

// Another example: private data
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.getBalance());

// Learning tip:
// Closures are useful for data privacy, factories, and maintaining state.

