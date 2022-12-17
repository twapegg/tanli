let index = 0;
const images = ["entry-images/Culture/1.1.jpg", "entry-images/pass.jpg"];

const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const slideshowImage = document.getElementById("slideshow-image");

leftButton.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  slideshowImage.src = images[index];
});

rightButton.addEventListener("click", () => {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  slideshowImage.src = images[index];
});

index = 0;
const images2 = ["entry-images/Culture/2.jpg", "entry-images/pass.jpg"];

leftButton.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = images2.length - 1;
  }
  slideshowImage.src = images2[index];
});

rightButton.addEventListener("click", () => {
  index++;
  if (index >= images2.length) {
    index = 0;
  }
  slideshowImage.src = images2[index];
});
