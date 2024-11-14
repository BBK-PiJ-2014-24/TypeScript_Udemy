// The ! tells TS that the element will always be there and that it will never be null
var button = document.querySelector("button");
// HTMLInputElement tells TS that the element will always be an input element, which means that it will have a value property  (this is called type casting)     
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
// The + in front of the input.value converts the string to a number
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
