// // template literals
// const name = "John";
// const age = 30;
// const person = `My name is ${name} and I am ${age} years old.`;
// console.log(person); // Output: "My name is John and I am 30 years old."

//destructuring

// let books = ["book1", "book2", "book3"];

// let fBook = books[0];
// console.log(fBook);

// // or

// const [firstBook, secondBook, thirdBook] = books;
// console.log(firstBook); // Output: "book1"
// console.log(secondBook); // Output: "book2"
// console.log(thirdBook); // Output: "book3"

// let person = {
//   name: "John",
//   age: 30,
//   isMarried: true,
//   eats: function () {
//     console.log("I am eating");
//   },
// };

// // console.log(person.name); // Output: "John"

// //let personName = person.name;

// const { name, age, isMarried, eats } = person;
// console.log(name); // Output: "John"
// console.log(age); // Output: 30
// console.log(isMarried); // Output: true
// console.log(eats); // Output: function ()

// spread and rest operator
// spread:

// let books = ["book1", "book2", "book3"];

// books.push("book4");

// let newBook = [...books, "book5"];

// let newBook2 = ["book6", ...books];
// console.log(newBook2);

// rest:-

// let person = {
//   name: "John",
//   age: 30,
//   isMarried: true,
//   eats: function () {
//     console.log("I am eating");
//   },
// };

// // person.address = "ktm";

// let newPerson = { ...person, address: "ktm" };

// console.log(newPerson);

// rest operator in uused in function parameter

const sum = (...add) => {
  console.log(add);
  let sum;
  for (let i = 0; i < add.length; i++) {
    sum += add[i];
    console.log(sum);
  }
};

sum(1, 2, 3, 4, 5);
