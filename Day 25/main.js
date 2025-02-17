// let count = document.getElementById("count");
// let start = document.getElementById("start");
// let stop = document.getElementById("stop");

// start.addEventListener("click")

async function asyncFun() {
  console.log("Star");
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  data = await response.json();
  console.log(data);
  console.log("end");
}

asyncFun();
