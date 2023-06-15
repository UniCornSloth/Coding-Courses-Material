// Unkown type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}
// Never type
function generateError(message: string, code: number) {
  throw { message: message, erroCode: code };
}
const result = generateError("An error occured!", 500);
console.log(result);
