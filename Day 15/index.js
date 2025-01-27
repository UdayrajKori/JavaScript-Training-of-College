// fun();

// function fun() {
//   console.log("Hlo Duniya");
// }

// arrowFunction

const myFun = () => {
  console.log("Hello, World!");
};

myFun();

const sub = () => "H! Uday";
console.log(sub());

// setTime out function

console.log("Start");

setTimeout(() => {
  console.log("Golu");
}, 20000);

console.log("End");


// home practice

function meroFunction(callback)
{
    callback();
    console.log("Hello Duniya");
}

function myFunction()
{
    console.log("Hello World");
}

meroFunction(myFunction);



let heyfun = function heyFunc()
{
    console.log("i am heyFunction");
}

heyfun();


// Arrow Functions
const arrowFunction = (a, b) => {
    
    console.log("Hello Uday");
    // let a = fun;
    console.log(a+b);
    
};

arrowFunction(1, 2);


// Set Time Out Function

// function setTime()
// {
//     console.log("hi i am set time out");
    
// }

// setTimeout(setTime, 2000);

setTimeout(function setTime()
{
    console.log("hi i am set time out function");
}, 2000);

console.log("End");


