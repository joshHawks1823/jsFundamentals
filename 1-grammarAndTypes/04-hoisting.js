// Example 1
console.log(scisscors);
var scisscors = blue;

// example 1:
var scisscors;
console.log(scisscors);
scisscors = blue;

// example 2:

function hoistTest() {
  console.log(testVar);
  var testVar = 10;
  console.log(testVar);
}

hoistTest();

//example 2 breakdown:
function hoistTest() {
  var testVar;
  console.log(testVar);
  testVar = 10;
  console.log(testVar);
}

hoistTest();

//
