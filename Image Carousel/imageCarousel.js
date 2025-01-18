const container = document.querySelector(".image-container");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let count = 0;
const width = 500; // Width of each image
const totalImages = container.children.length; // Number of images

prev.addEventListener("click", () => {
  if (count > 0) {
    count--;
    container.style.transform = `translateX(-${width * count}px)`;
  }
});

next.addEventListener("click", () => {
  if (count < totalImages - 1) {
    count++;
    container.style.transform = `translateX(-${width * count}px)`;
  }
});
