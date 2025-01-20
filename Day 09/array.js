// const names = ["John", "Mary", "Jane", "Bob"];

// console.log(names);
// names.push("Uday"); // this is add element at the end of array

// console.log(names);

// names.pop(); // this is remove element at the end of array

// console.log(names);

// includes

// indexOf, isArray, join, lastIndexOf, reduce, reverse,
// shift, slice, splice, sort, findLastIndex, filter

// shift element

// let fruit = ["Apple", "Banana", "Cherry"];

// console.log(fruit);

// fruit.shift(); // this is remove element at the beginning of array

// console.log(fruit);

// unshift

let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits);

fruits.unshift("Orange"); // this is add element at the beginning of array

console.log(fruits);

let stars = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    console.log("*");
    stars = stars + "*";
  }
}
console.log(stars);
