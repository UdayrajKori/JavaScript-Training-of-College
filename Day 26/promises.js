// promises is prat of handling asynchronous operation in js
// promises have three states pending,fulfilled and rejected
// pending is the initial state of promise
// fulfilled is the state when promise is resolved
// rejected is the state when promise is rejected
// we can use then() and catch() methods to handle the promise states
// then() method is used to handle the fulfilled state of promise
// catch() method is used to handle the rejected state of promise

// fetch(); // spwcial type of function that is used to handle asynch operation.
console.log("start");

const res = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    return response.json(); // response.json() is also a promise
  })
  .then((response) => {
    console.log(response);
  });
//   .catch(() => {
//     console.log("data not fetched" + res);
//   });
console.log(res);

console.log("end");
