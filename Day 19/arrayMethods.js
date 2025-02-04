// Higher-order array method(array)

// const fruits = ["apple", "banana", "cherry"];

// fruits.toSorted();

// fruits.forEach((fruits) => {
//   console.log(fruits);
// });

// Higher-order array method

let nameList = ["Udayraj", "Golu", "Surendra", "Ram"];

// it takes function as  an arguments
// and that function is anonymous callback function
nameList.forEach((nameList) => {
  console.log(nameList);
});

let nameList1 = ["Udayraj", "Golu", "Surendra", "Ram"];

nameList1.forEach((values, index, arrayString) => {
  console.log(values, index, arrayString);
});

// array of map method

// const arr = ["Good", "Morning", "Hello", "Hi"];

// const newArr = arr.map((up) => up + "s");

// console.log(newArr);

// const marks = [1, 2, 3, 4, 5];

// const newMarks = marks.map((mark) => {
//   return mark + 1;
// });
// console.log(marks);
// console.log(newMarks);

const name1 = ["Uday", "Golu", "Surendra", "Ram"];

const newName = name1.map((upername) => {
  return upername.toUpperCase();
});

console.log(newName);

// array of filter method

// const arr1 = [5, 8, 10, 12, 15, 20];

// const newArr1 = arr1.filter((f) => f <= 10);

// console.log(newArr1);

const marks1 = [10, 15, 20, 25, 30];

const newMarks = marks1.filter((marks) => {
  return marks < 20;
});

console.log(marks1);
console.log(newMarks);

// assignment

const redomizedArray = [1, true, "a", [1, 2, 3], () => {}, { name: "idk" }, 8];

const newRendomized = redomizedArray.filter((value) => {
  //   return isNaN(value === n);

  if (!isNaN(value)) {
    return value;
  }
});

console.log(redomizedArray);
console.log(newRendomized);

// destructuring

let obj = {
  name: "Uday",
  age: 25,
  isMarried: false,
};

const { name, age } = obj;
console.log(name);
console.log(age);

const arr = [1, 2, 3];

const [a, b] = arr;

console.log(a);
console.log(b);
