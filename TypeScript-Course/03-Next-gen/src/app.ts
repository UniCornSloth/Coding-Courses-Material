// // Code goes here!
// const userName = "Harry";

// let age = 31;
// age = 29;

function add1(a: number, b: number) {
  let result;
  result = a + b;
  return result;
}
// console.log(result);
// const add2 = (a: number, b: number) => {
//   return a + b;
// };
// console.log(add2(2, 5));

// const add3 = (a: number, b: number = 5) => a + b;

// const printOut: (a: number | string) => void = (output) => console.log(output);

// const button = document.querySelector("button");
// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

// printOut(add3(5));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

// Key value pairs
const person = {
  name1: "Max",
  age: 30,
};
const copiedPerson = { ...person };
// Rest params
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

// Array destructuring
const [hobby1, hobby2] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { name1: userName, age } = person;
console.log(userName, age, person);
