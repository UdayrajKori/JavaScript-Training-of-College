/* Write a program to find if a student got distintion (>=80), 
   1st division (>=60), 2nd division (>=40) 
   and (=40) or fail (<40) in the exam. */

let mark = 65;

if (mark >= 80) {
  console.log("Distinction");
} else if (mark >= 60 && mark < 80) {
  console.log("1st Division");
} else if (mark > 40 && mark < 60) {
  console.log("2nd Division");
} else if (mark == 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// switch case for the same problem

switch (mark >= 60 && mark < 80) {
  case mark >= 80:
    console.log("Distinction");
    break;
  case mark >= 60 && mark < 80:
    console.log("1st Division");
    break;
  case mark > 40 && mark < 60:
    console.log("2nd Division");
    break;
  case mark == 40:
    console.log("Pass");
    break;
  default:
    console.log("Fail");
}
