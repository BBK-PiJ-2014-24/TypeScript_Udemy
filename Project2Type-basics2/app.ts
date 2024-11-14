// PRIMAL TYPES
// ------------
// typeing n1 and n2 as number will throw a COMPILATION ERROR if we pass a string or any other type
// Checking the type of n1 and n2 and throwing an error at RUNTIME ERROR if the type is not a number
// Typescript allows us to avoid these runtime checks!!!! 
function add ( n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect Input')
    // }
    return n1 + n2
}
// TS uses type inference to determine the type of Constants and variables.
const text = 'The Result is: ';
const printResult = true;
let number1: number = 5; // This is bad practice as TS would have inferred the type of number1 as number
let number2: number; // Only use explicit type declaration when you want to just declare the variable and assign a value later.
number2 = 2.8;

const result = add(number1, number2, printResult, text);

console.log(result)

// CONVERTING STRING TYPES TO NUMBER TYPES
// ---------------------------------------
// The '+' operator is used to convert a string to a number.
const string5 = '5';
const number5 = +string5;
console.log("number5:", number5);

// OBJECT TYPES
// -------------
// Explicitly defining object property types is not necessary as TS can infer the type of the object 
//
// const person: { //     name: string; //     age: number;
//     hobbies: string[];
// } = {
//     name: 'Stewart',
//     age: 30

const person = {
  name: "Stewart",
  age: 30,
  hobbies: ["Swimming", "Reading"],
};
console.log(person.name);

// CUSTOM TYPES
// ------------
// Custom types are useful for defining complex types that can be reused throughout the code.
// The "type" keyword is used to define custom types.

type User = { name: string; role: string };
const user1: User = {name: 'Stewart', role: 'Admin'};
console.log(user1.name);

// ARRAY TYPES
// -----------
let favouriteActivities: string[];
let favouriteActivities2: any[]; // This is not a good practice as it defeats the purpose of using TS
favouriteActivities2 = ["Sports", 1];

// As hobby is a string array, we can use string methods on it.
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // This will throw an error as map is not a method of a string, "hobby". It is a method of the array, "hobbies"
}

// TUPLES
// -------
// Tuples are fixed length arrays with fixed types for each element. The data structure is not native to JS.

let myTuple: [number, boolean, string];
myTuple = [1, true, "Hello"];

// ENUMS
// ------
// Enums allow us to define a set of named constants i.e. a collection of related values that can be numeric or string values.
// Enums are not native to JS.

enum Role {
  ADMIN,
  USER,
  AUTHOR,
}
console.log(Role.ADMIN)

// TYPE UNIONS
// ------------
// Allows a variable to have multiple types.  However, number and strings have operators, one may have to 
// check the type of the variable before using it at runtime. 
function combine(input1: number | string, input2: number | string) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number') {
        result =  input1 + input2;
    } else {
        // if mixed types, Enforce both variables to be strings
        result = input1.toString() + input2.toString();
    }
  return result;
}
console.log(combine(1, 2));
console.log(combine("Stewart", "John"));
console.log(combine("Stewart", 1));

// FUNCTION RETURN TYPES
// -----------------------
// void for function return types actually returns "undefined" when the function is called in JS
function sayHello(): void {
    console.log('Hello');
}

// VARIABLES REFERENCING FUNCTIONS
// -------------------------------
// The type of a variable referencing a function is a function type.

function addition(n1: number, n2: number): number {
    return n1 + n2;
}

let referenceVariable: (a: number, b: number) => number;
referenceVariable = addition;    // Reference to the addition function
console.log(referenceVariable(5, 6));


// FIRST CLASS FUNCTIONS - CALLBACKS
// ---------------------------------
// Functions can be passed as arguments to other functions.

function callbackFunction(result: number) {
    console.log(result);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}   

console.log( addAndHandle(10, 20, callbackFunction));