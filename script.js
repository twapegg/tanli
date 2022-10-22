const toggle = document.getElementById("toggleTheme");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "1.5s";
  } else body.style.background = "black";
  body.style.color = "white";
  body.style.transition = "1.5s";
});
