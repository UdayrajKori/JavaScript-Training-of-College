console.log("we are learnign operator");

// Operator is a symbol that is used to perform operations on values. There are many types of operators in JavaScript,

// 1.) Arithmetic Operators
//  + - * / %  (addition, subtraction, multiplication, division, modulus)

let a = 10;
let b = 12;

let addition = a + b;
let subtract = a - b;
let multiplication = a * b;
let division = a / b;
let modulus = a % b;

console.log("The sum of two number is: " + addition);
console.log("The sub of two number is: " + subtract);
console.log("The mul of two number is: " + multiplication);
console.log("The div of two number is: " + division);
console.log("The mod of two number is: " + modulus);

// 2.) Relational Operators
// == != === !== > < >= <= (equal, not equal, equal value and type, not equal value and type, greater than, less than, greater than or equal to, less than or equal to)

let c = 10;
let d = 15;

console.log(15 > 10);
console.log(15 === 10);
console.log(15 != "10");

// 3.) Assignment Operators
// = += -= *= /= %= (assign, add and assign, subtract and assign, multiply and assign, divide and assign, modulus and assign)

let x = 10; // assign 10 to x
let y = 5; // assign 5 to y

let addAssign = (x += y); // add 5 to x and assign the result to x or x = x + y

console.log((x = x + y));
console.log(addAssign);

// 4.) Logical Operators
// && || ! (and, or, not)

let e = 10;
let f = 12;

let andOperator = e < f && f > e;

let OrOperator = e > f || f < e;

let NotOperator = !(f < e);

console.log(andOperator);
console.log(OrOperator);
console.log(NotOperator);

// 5.) Increament and Decrement or Unary Operators
//

let increament = 10;

console.log(++increament);

let decreament = 10;

console.log(--decreament);

// 6.) Type of Operators

console.log(typeof 1);

// 7.) Ternary Operator

let isTrue = 10 > 2 ? "true" : "false";

console.log(isTrue);
