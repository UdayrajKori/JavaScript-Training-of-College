// When to use for loop.
// When you know how many times you want to run a loop.
// When you want to iterate over a collection of items.
// When you want to perform an action a certain number of times.

// syntax

// for (initialization; condition; increment) {.........}

// for (let i = 0; i < 5; i++) {
//   console.log("Hello Duniya", i);
// }

// nested loop

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     console.log("Hello Duniya", i, j);
//   }
// }

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    console.log("*");
  }
}
