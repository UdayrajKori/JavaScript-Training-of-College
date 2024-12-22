// Write a program to check if a person can vote or not based on their age.
// Note: whose nail has painted is not allowed to vote.

let age = 20;
let nail = false;

if (age >= 18) {
  if (nail == true) {
    console.log("You are voted already");
  } else {
    console.log("You are eligible for vote");
  }
} else {
  console.log("You are not eligible for vote");
}

// Write a program to find largest in three numbers.

let a = 10;
let b = 20;
let c = 30;

if (a > b) {
  if (a > c) {
    console.log("a is largest");
  } else {
    console.log("c is largest");
  }
}

if (b > a) {
  if (b > c) {
    console.log("b is largest");
  } else {
    console.log("c is largest");
  }
}
