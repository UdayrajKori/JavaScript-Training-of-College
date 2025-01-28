// object is not a function. It is the key-value pair
// object have properties and methods. It is a collection of key-value pairs.
// object consists of collection of different datatype.

// const person = {
//   name: "Uday",
//   age: 25,
//   isMarital: false,
//   hobies: ["reading", "swimming", "cycling"],
// };

// console.log(person.name, person.age, person.isMarital, person.hobies[2]);

// const profileInfo = {
//   name: "Elon Musk",
//   sticker: "BlueTick",
//   username: "@elonmusk",
//   JoinDate: "2009-01-01",
//   follower: 10000000,
//   following: 1000,
//   increaseFlollowerCout: function () {
//     this.following++;
//   },
// };

// profileInfo.increaseFlollowerCout();
// console.log(profileInfo.following);

// const deleteAccount = {
//   name: "Elon Musk",
//   sticker: "BlueTick",
//   username: "@elonmusk",
//   JoinDate: "2009-01-01",
//   follower: 10000000,
//   following: 1000,
//   deletingData: function () {
//     this.name = " ";
//     this.sticker = " ";
//     this.username = " ";
//     this.JoinDate = " ";
//     this.follower = 0;
//     this.following = 0;
//   },
// };

// deleteAccount.deletingData();
// console.log(deleteAccount);

const car = {
  name: "Thar",
  model: "2022",
  color: "Red",
  price: 1000000,
  Wheel: 4,
  Engine: "V8",
  startEngine: function () {
    sound = "Vroom Vroom";
  },
  stopEngine: function () {
    console.log("Stop");
  },
};

console.log(car);

car.startEngine();
car.stopEngine();
