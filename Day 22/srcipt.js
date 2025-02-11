// let elem = document.getElementById("btn1");

// elem.addEventListener("mouseenter", function () {
//   document.body.style.background = "red";
// });

let elem2 = document.getElementById("btn2");

elem2.addEventListener("click", function () {
  //   document.body.style.background = "white";

  let paragraph = document.querySelector("p");

  let inputFontSize = document.getElementById("textbox").value;
  paragraph.style.fontSize = `${inputFontSize}px`;
});

let selectBtn = document.getElementById("btn1");

selectBtn.addEventListener("click", function () {
  let paragraph = document.querySelector("p");
  let TxtColor = document.getElementById("textcolor").value;
  //   alert(TxtColor);
  paragraph.style.color = `${TxtColor}`;
});
