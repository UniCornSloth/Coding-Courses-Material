// Union Types & literal types!!!!!!!!!!!!!!!!!!!!
// Creating the combine function
function combine(
  // Setting uinion types Can assign types to the params of functions
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
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
