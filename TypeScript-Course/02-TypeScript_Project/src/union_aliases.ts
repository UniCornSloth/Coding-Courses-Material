// Union Types & literal types!!!!!!!!!!!!!!!!!!!!
// Creating the combine function
// Creating type aliases
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  // Setting uinion types with reusable type alias
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  // Creating the if check and decaliring variable result before if check
  let result;
  if (
    // Check if inputs are equal to 'number' or the conversion is set to 'number'
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    // Adding the rusult first before converting to string
    result = +input1 + +input2;
  } else {
    // Converting result to string
    result = input1.toString() + input2.toString();
  }
  // Returning the result before logging to the console
  return result;
  // if (resultConversion === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}
// Calling function after function creation on different values and numbers
const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combineName = combine("Max", "Anna", "as-text");
console.log(combineName);
// Example Greet function!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// type User = { name: string; age: number };
// const u1: User = { name: "Herling", age: 31 };
// // function greet(user: { name: string; age: number }) {
// //   console.log("Hi, I am " + user.name);
// // }

// // function isOlder(user: { name: string; age: number }, checkAge: number) {
// //   return checkAge > user.age;
// // }
// function greet(user: User) {
//   console.log("Hi, I am " + user.name);
// }

// function isOlder(user: User, checkAge: number) {
//   return checkAge > user.age;
// }
type User = { name: string } | string;
let u1: User = { name: "Max" };
u1 = "Michael";
