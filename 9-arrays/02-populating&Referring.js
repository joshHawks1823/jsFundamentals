//what is an array?
//has [] brackets
//can hold multiple datatypes
//arrays can list datatypes in an ordered, numbered way

let students = ["Tony", "Marshall", "Ray", "Rhys", 23, true, ["Ryan", "Iesha"]];

console.log(typeof students);
console.log(students instanceof Array);
console.log(students[2]);
console.log(students[1]);
console.log(students[6][1]);

//recall for-of loop --> gives the values of the array
let food = ["pecan pie", "shrimp", "chicken", "cake", "pizza"];

// for (f of food) {
//   console.log(f + " is amazing!");
// }

// //array methods
// food.push("cookies"); // adds to the end of an array
// console.log(food);
// food.splice(1, 1, "apples"); // asks for an insertion point, how many things to remove, then the item or items to add
// console.log(food);
// food.pop(); // removes the last element of an array
// console.log(food);

// food = food.slice(3, 4);
// console.log(food);

food.forEach((food, index) => {
  console.log(`The ${food} food in our array is at position ${index}`);
});

console.log(food);

let movies = [
  "300",
  "smow white",
  "the phantom menace",
  "enter the dragon",
  "the godfather"
];

movies.push("the godfather 2");
console.log(movies);

movies.splice(3, 1, "pulp fiction");
console.log(movies);

movies.forEach(movie => console.log(movie));
console.log(movies.length);

//let's do the following with an array:
//we will check if we are working with an array
//flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
//using a method only, let's print the values of the newly arranged array

let arr = new Array(1, 2, 3, 4, 5);

if (arr instanceof Array) {
  let revArr = arr.reverse();
  revArr.forEach(numbers => console.log(numbers));
}
