var appId = "abc";
var button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log("Ek is n knoppie");
});
function clickHandler(message) {
    var userName = "Harry";
    console.log("Clicked!" + message);
}
if (button) {
    button.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
}
