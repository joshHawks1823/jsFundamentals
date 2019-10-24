// equality comparison operator
console.log("3" == 3);

// strict equality
console.log("4" === 4);

// not equal comparison operator

console.log(3 != 4);
console.log("3" !== 3);

// less than
console.log(2 <= 3);
console.log(3 <= 2);

// greater than

console.log(2 >= 3);
console.log(4 >= 3);

// And (both operators must be true for And to return true)

console.log(1 < 2 && 3 < 4);
console.log(1 < 2 && 3 < 4);
console.log(3 > 2 && 2 < 1);

// Or either expression on one side must be true.

console.log(1 < 2 || 3 < 0);
console.log(1 > 2 || 32 < 0);

let obj = { key: "test" };
console.log(obj == { key: "test" });

console.log(obj == obj);
