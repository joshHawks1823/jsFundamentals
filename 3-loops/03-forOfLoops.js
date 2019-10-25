let student = { name: "Peter", isAwesome: true, degree: "javascript", week: 1 };

// of requires that your 'thing' your'e looping through be iterable--that means it needs to be numbered.
for (item of student) {
  console.log(item);
}

let catArray = [
  "tabby",
  "britsh shorthair",
  "burmese",
  "maine coon",
  "rag doll"
];

for (cat of catArray) {
  console.log(cat, "says meow");
}
