// Type Conversion
// Type conversion is when you explicitly change one type into another.

const numberValue = Number("123");
const stringValue = String(456);
const booleanValue = Boolean("hello");

console.log(numberValue, typeof numberValue);
console.log(stringValue, typeof stringValue);
console.log(booleanValue, typeof booleanValue);

console.log(Number("abc"));
console.log(Number(""));
console.log(Boolean(""));
console.log(Boolean("0"));//truthy because it's a non-empty string

function parseAge(input) {
  const age = Number(input);

  if (Number.isNaN(age)) {
    return "Invalid age";
  }

  return age;
}

console.log(parseAge("21"));
console.log(parseAge("abc"));

// Learning tip:
// Convert values intentionally instead of depending on hidden behavior.
text = '123abc'
num = Number(text)
console.log(typeof num) // "number"
console.log(num)