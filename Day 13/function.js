// callback function is the type of function

// function higherOrder(callback) {
//   callback();

//   function callback() {
//     console.log("Callback function is called");
//   }
// }

// higherOrder(callback);

// function returning function

// write a program to demo nested functions where the main function should take an arguments
// time. if time is greater than 4 then it should call a function that print "GGOD EVENING"
// if time is less than 4 then it should call a function that print "GOOD AFTERNOON"

let time;
function mainFunc(time) {
  if (time > 4) {
    goodEvening();
  } else {
    goodMorning();
  }
}

function goodEvening() {
  console.log("GOOD EVENING");
}

function goodMorning() {
  console.log("GOOD MORNING");
}

mainFunc(2);
