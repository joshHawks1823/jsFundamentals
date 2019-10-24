// IF ELSE

let weather = "75";

if (weather < 70) {
  console.log("wear a jacket");
} else {
  console.log("no jacket necessary");
}

// you can blend complex conditionals and if-else statements based upon your needs

if (weather > 70 && typeof weather === "number") {
  console.log("This weather is amazing!");
} else {
  console.log(
    "Either the is temperature is cool, the variable is not a string, or both"
  );
}

// ELSE IF

// elseif statements can be changed

let age = 15;
if (age >= 25) {
  console.log("vote");
} else if (age >= 21) {
  console.log("drink");
} else if (age >= 18) {
  console.log("vote");
} else {
  console.log("too young");
}
