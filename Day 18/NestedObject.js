// // Write a program construct an object should have following data type

// const obj = {
//   name: "John",
//   rollNum: 30,
//   isMale: true,
//   marks: [90, 80, 70],
//   address: "Lumbini",
//   TempAddress: function () {
//     this.address = "Manigram";
//   },
// };
// console.log(obj);
// obj.TempAddress();

// for (let key in obj) {
//   document.write(obj[key]);
//   document.write(" <br> <br>");
// }

const obj1 = {
  name: "John",
  rollNum: 30,
  isMale: true,
  marks: [90, 80, 70],

  obj2: {
    name: "John",
    rollNum: 30,
    isMale: true,
    marks: [90, 80, 70],
  },
};

console.log(obj1);
