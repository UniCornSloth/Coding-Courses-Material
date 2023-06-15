// Creating add functino to add numbers
// Can assign types as parameters
// Let TypeScript infere the type
function add(n1: number, n2: number) {
  // Returning the two values added and shows return type
  return n1 + n2;
}
// Use void if function does not return anything
function printResult(num: number) {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
printResult(add(5, 12));

// Function types describe function spesificity
let combineValues: (a: number, b: number) => number;
combineValues = add;
console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
