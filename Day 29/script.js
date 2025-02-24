let height = document.getElementById("height");
let weight = document.getElementById("weight");
let calculate = document.getElementById("calculate");

let result = document.getElementById("result");

calculate.addEventListener("click", function () {
  let bmi;
  let h = Number(height.value);
  let w = Number(weight.value);

  if (h === 0 || h < 0) {
    result.textContent = `Please enter valid height ${h}`;
  } else if (w === 0 || w < 0) {
    result.textContent = `Please enter valid weight ${w}`;
  } else {
    bmi = (w / ((h * h) / 10000)).toFixed(2);
    result.innerHTML = bmi;
  }

  if (bmi <= 18.5) {
    document.getElementById("condition").innerHTML = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById("condition").innerHTML = "Normal";
  } else if (bmi >= 25) {
    document.getElementById("condition").innerHTML = "Overweight";
  }
});
