// what ever number you passed, the respective table should be ploted.

function plot_table(num1, num2) {
  for (let i = 1; i <= num2; i++) {
    console.log(`${num1} * ${i} = ${num1 * i}`);
  }
}

plot_table(12, 10);

console.log("__________________________________________________");

// find largest number by using function

function find_largest(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is largest number`);
  } else {
    console.log(`${num2} is largest number`);
  }
}

find_largest(12, 10);
