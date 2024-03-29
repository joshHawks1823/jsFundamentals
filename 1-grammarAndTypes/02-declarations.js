// Variables

// What is a variable?

var a = 1;
var b = 2;

console.log(a + b);

// Notes on naming a variable:
//1) a variable must begin with a letter, underscore, or dollar sign
//2) numbers may follow the above characters, but cannot come first
//3) Javascript is case sensitive-- 'hello' and 'Hello' are different variables

// Declarations, Initializations, Assignment

// Declarations refer to when we 'declare' a variable
// Initializations refer to when a variable is assigned a value
// Assignment refers to giving a variable a value. This can be after initialization

var x;

console.log(x);

//Initialization
x = 10;
console.log(x);

x = 33;
console.log(x);

var y;
console.log(y);

y = "hello";

console.log(y);

y = "You are my friend";
console.log(y);

// var, let, const:

// var = "old" keyword for variables
// let "new" keyword for variables (introduced with ES6)
// const = also "new", declares unchangeable variables

let tonight = "great";
const elevenFifty = "Amazing";
console.log(tonight, elevenFifty);

tonight = "lovely";
console.log(tonight, elevenFifty);

elevenFifty = "super";
console.log(tonight, elevenFifty);
