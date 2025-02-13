// function asyncFunc() {
//   console.log("I am async Function");

//   let setTime = setTimeout(() => {
//     console.log("Hey i am setTimeOut function");
//   }, 1000);

//   console.log(setTime);
//   console.log("End");
// }

// asyncFunc();

let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let number = document.getElementById("number");

let count = 0;

increase.addEventListener("click", () => {
  count++;
  number.innerHTML = count;
});

decrease.addEventListener("click", () => {
  count--;
  number.innerHTML = count;
});
