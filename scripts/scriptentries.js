window.addEventListener("scroll", function () {
  const popup = document.querySelector(".popup");
  const rect = popup.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    popup.classList.add("in-view");
  }
});
