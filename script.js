const email = document.getElementById("email");
const invalidEmail = document.getElementById("invalid-email");
const register = document.getElementById("register");
const submitted = document.getElementById("submitted");
const enteredEmail = document.getElementById("entered-email");
const viewportWidth = document.documentElement.clientWidth;

function invalid() {
  email.classList.add("you-wrong");

  invalidEmail.style.visibility = "visible";
}

function hide() {
  register.style.display = "none";
  submitted.style.display = "block";
  enteredEmail.innerHTML = email.value;
}

function show() {
  submitted.style.display = "none";
  email.classList.remove("you-wrong");
  invalidEmail.style.visibility = "hidden";

  if (viewportWidth < 768) {
    register.style.display = "flex";
  } else {
    register.style.display = "grid";
  }
}

function validateEmail() {
  const validEmail = email.value
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  validEmail ? hide() : invalid();
}

email.addEventListener("keypress", function (e) {
  e.key === "Enter" && validateEmail();
});
