const loadingbar = document.querySelector(".loading-bar");
const percentage = document.querySelector('.percentage');

window.addEventListener("DOMContentLoaded", () => {
  console.log("Inside dom cotent load");
  let progress = 0;
  setInterval(() => {
    if (progress < 100) {
      progress++;
      loadingbar.style.width = `${progress}%`
      percentage.textContent = `${progress}%`
    }
  }, 30)
})