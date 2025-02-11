let form = document.querySelector("form");
let btn = document.getElementById("btn");
let Name = document.getElementById("name");
let email = document.getElementById("email");
let dob = document.getElementById("dob");
// let address = document.getElementById("address");

let displayInfo1 = document.getElementById("displayInfo1");
let displayInfo2 = document.getElementById("displayInfo2");
let displayInfo3 = document.getElementById("displayInfo3");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(Name.value);
  console.log(email.value);
  console.log(dob.value);
  //   console.log(address.value);

  displayInfo1.innerHTML = `${Name.value} <br>`;
  displayInfo2.innerHTML = `${email.value} <br>`;
  displayInfo3.innerHTML = `${dob.value} <br>`;
  //   displayInfo.innerHTML = `${address.value} <br>`;
});
