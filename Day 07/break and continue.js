// let counter = 0;

// while (counter < 5) {
//   console.log(`The current value of counter is ${counter}`);

//   if (counter === 3) {
//     break;
//   }

//   counter++;
// }

// Write a program to demonstrate break statement where you loop from 1 - 10 and search for a number

let counter = 10;

let i = 1;

while (i <= 50) {
  console.log(`The current value of counter is ${i}`);

  if (i === counter) {
    console.log(`Number found at ${counter}`);
    break;
  }

  i++;
}
