// General ideas: at their broadest level, functions do the following:

// 1) they take some input which the function will handle/process
// 2) they process the input given to them
// 3) they usually, but not always, return some value
// 4) they can be invoked  (used) as many times as we want, cutting down on code repetition

// example one:
function newFuc(num) {
  return num + 1;
}

console.log(newFuc(8));
console.log(newFuc(-3));
console.log(newFuc(3));

//example two:
function sentence(firstName, lastName) {
  return `My first name is ${firstName} and my last name is ${lastName}`;
}

console.log(sentence("Josh", "Hawkins"));
let superImportantSentence = sentence("Andrea", "Hawkins");
console.log(superImportantSentence);

// let's build a function that takes a complex type --an array in this case, and console.logs each item in the input array

let arr = [1, true, { key: "string" }, [0, false, null], "heya!"];
let arr2 = [5, 6, 7, 8, 9, 10];

function iteratorFunc(inputArr) {
  for (let element of inputArr) {
    console.log(element);
  }
}

iteratorFunc(arr);
iteratorFunc(arr2);
