const email = document.querySelector(".sign-up--form__email");
const password = document.querySelector(".sign-up--form__password");

email.removeAttribute("id");

email.addEventListener("click", function () {
  email.setAttribute("id", "active");
  password.removeAttribute("id");
});

password.addEventListener("click", function () {
  email.removeAttribute("id");
  password.setAttribute("id", "active");
});
