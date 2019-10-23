// Literals

let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
console.log(weekDays.toString());
console.log(weekDays[3]);

let soup = {
  a: "chicken noodle",
  b: "tomato",
  c: "beef and barley"
};

console.log(soup.c);

// array and object literals can hold primitive and complex types

let complexArrLiteral = [
  1,
  "Academy",
  [1, 2, 3],
  { key: "test" },
  function() {
    return "yes";
  }
];

console.log(complexArrLiteral[4]);
console.log(complexArrLiteral[2]);

complexObjLiteral = {
  num: 1,
  boolean: true,
  string: "Academy",
  arr: [1, 2, 3],
  obj: { key: "test" },
  func: function() {
    return "yes";
  }
};

console.log(complexObjLiteral.func);
console.log(complexObjLiteral.arr);
//
