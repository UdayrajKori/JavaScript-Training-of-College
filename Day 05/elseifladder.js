// console.log("Else if else statement ");
// else if statement or ladder

let age = 25;

if (age < 13) {
  console.log("You are an child");
} else if (age >= 13 && age < 18) {
  console.log("You are a teenager");
} else if (age >= 18 && age < 65) {
  console.log("You are an adult");
} else {
  console.log("You are a senior citizen");
}

// switch case statement

switch (age) {
  case age < 13:
    console.log("You are an child");
    break;
  case age >= 13 && age < 18:
    console.log("You are a teenager");
    break;
  case age >= 18 && age < 65:
    console.log("You are an adult.");
    break;
  default:
    console.log("You are a senior citizen");
}
