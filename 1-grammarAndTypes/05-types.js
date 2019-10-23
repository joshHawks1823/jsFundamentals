// Types

// Boolean

var on = true;
console.log(on);

let off = false;
console.log(off);

// Boolean can represent: true/false, yes/no, on/off, 0/1

// Undefined

// Undefined usually means a variable has been declared, but it's not assigned a value

let grass;
console.log(grass);

let undef = undefined;
console.log(undef);

// Null
// Null means a variable has been declared and assigned a value of null

let empty = null;
console.log(empty);

// Null and undefined both represent variables with no value inside.  Think of it this way--null values are for gag gifts that are boxes intenionally given with nothing inside (because that's the gag).

//  Undefined values are gifts when the person giving the gift has forgotten to put the gift inside(oops!).

//  Numbers

let myLiteralAge = 90;
console.log(myLiteralAge);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//Strings
//Strings are any value within quotes; JS spits out the value within the quotes

let stringOne = "double quotes";
let stringTwo = "single quotes";
console.log(stringOne, stringTwo);

//String concatenation vs addition
let first = 1050 + 100;
let second = "1050" + "100";

console.log(first);
console.log(second);

let third = 1050 + "abcde";
console.log(third);
console.log(typeof third);

// Interpolation
// lets you use strings with dynamic content (they require backticks)

//Example 1:
let age = 32;
let string = `my age is ${age}.`;
console.log(string);

// Objects
// An object is a container that stores property names and their values fit can hold multiple data types)

// Denoted by {}
// have keys and values--color (key): 'blue' (value), seperated with a colon, each key-value pair is seperated with a comma

let hulk = {
  color: "green",
  age: 42,
  isStrong: true
};

console.log(hulk);
console.log(hulk.color);
console.log(typeof hulk);

// Arrays
// Arrays stores multiple values in an ordered way. They, too, hold multiple data types.

// Denoted by []
// Has values ('blue', 'yellow', 'green'), seperated by commas.

let stepsToBrushTeeth = [
  "uncap toothpaste",
  "squeeze toothpaste",
  "rinse brush",
  "brush teeth"
];
// array indexing
console.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[0]);
console.log(typeof stepsToBrushTeeth);
