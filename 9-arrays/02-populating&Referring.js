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

for (f of food) {
  console.log(f + " is amazing!");
}

//array methods
food.push("cookies"); // adds to the end of an array
console.log(food);
food.splice(1, 1, "apples"); // asks for an insertion point, how many things to remove, then the item or items to add
console.log(food);
food.pop(); // removes the last element of an array
console.log(food);
