let themeToggler = document.querySelector(".themes-toggler");

themeToggler.onclick = () => {
  themeToggler.classList.toggle("active");
  if (themeToggler.classList.contains("active")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};

document.querySelectorAll(".themes-colors .colors").forEach((colors) => {
  colors.onclick = () => {
    let background = colors.style.background;
    document
      .querySelector(":root")
      .style.setProperty("--main-color", background);
  };
});

let theme = document.querySelector(".themes-container");

document.querySelector("#theme-open").onclick = () => {
  theme.classList.add("active");
  document.body.style.paddingRight = "350px";
  document.getElementById("theme-open").style.display = "none";
};
document.querySelector("#themes-close").onclick = () => {
  theme.classList.remove("active");
  document.body.style.paddingRight = "0px";
  document.getElementById("theme-open").style.display = "block";
};

let login = document.querySelector(".login-form");
document.querySelector(".log-in-box").onclick = () => {
  login.classList.add("active");
};
document.querySelector(".login-exit").onclick = () => {
  login.classList.remove("active");
};

function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username >= 100 && username <= 999 && password == "wonderful") {
    alert("You have successfully logged in!");
  } else {
    alert(
      "Log in failed. Hint: Username is any number within 100-999. Password is 'wonderful'"
    );
  }
}
