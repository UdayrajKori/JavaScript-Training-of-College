let name = document.getElementById("name");
let email = document.getElementById("email");
let pass = document.getElementById("password");
let form = document.querySelector("form");

let displayName = document.getElementById("displayName");
let displayEmail = document.getElementById("displayEmail");
let displayPass = document.getElementById("displayPass");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  name.value;
  email.value;
  pass.value;

  displayName.innerText = `Name: ${name.value}`;
  displayEmail.innerText = `Email: ${email.value}`;
  displayPass.innerText = `Password: ${pass.value}`;

  form.reset();
});
