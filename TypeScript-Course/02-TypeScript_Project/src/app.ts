let appId = "abc";
const button = document.querySelector("button");

button?.addEventListener("click", () => {
  console.log("Ek is n knoppie");
});

function clickHandler(message: string) {
  let userName = "Harry";
  console.log("Clicked!" + message);
}
if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
}
