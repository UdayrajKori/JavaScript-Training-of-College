// let myArray = [1, 2, 3, 4, 5];

// console.log(myArray);

// let mySecondArray = myArray;

// console.log(mySecondArray);

// mySecondArray[0] = 1000;

// console.log(myArray);

//  Example pass b value

let a;
let b;
let result;

function passByValue(a, b) {
  console.log("Hello");

  return (result = a + b);
}

passByValue(10, 5);

console.log(result);

// Example pass by reference

let arr = [1, 2];

function passByReference(brr) {
  brr[0] = 1000;
}

passByReference(arr);
console.log(arr);
