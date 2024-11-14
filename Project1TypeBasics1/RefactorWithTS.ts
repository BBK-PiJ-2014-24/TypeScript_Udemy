// The ! tells TS that the element will always be there and that it will never be null
const button = document.querySelector("button")!;
// HTMLInputElement tells TS that the element will always be an input element, which means that it will have a value property  (this is called type casting)     
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;


function add(num1: number, num2: number) {  
  return num1 + num2;
}
// The + in front of the input.value converts the string to a number
button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});

// Compiling the TS file to JS with the command tsc RefactorWithTS.ts
// This will create a new file called RefactorWithTS.js
// In the index.html file, we can now link the RefactorWithTS.js file instead of the Refactor.js file