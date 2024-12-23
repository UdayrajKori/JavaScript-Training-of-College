console.log("Looping");

// do-while loop.
// while loop.
// for loop.

// Write a program to print the numbers from 1 to 10 using a for loop.

let i = 1;

// while loop exmple

while (i <= 10) {
  console.log("Hello World by while loop", i);
  i++;
}

// do-while loop example

do {
  console.log("Hello World by using do while", i);
  i++;
} while (i <= 10);

// for loop example

for (let i = 1; i <= 10; i++) {
  console.log("Hello World by using for loop", i);
}

// write a program to print a trianle of stars using a for loop.

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
