let InsetBtn = document.getElementById("btn");

let section = document.getElementById("section");

InsetBtn.addEventListener("click", function () {
  let createElement = document.createElement("p");
  console.log(createElement);
  createElement.innerText = "Hello, World!";
  section.append(createElement);
});
