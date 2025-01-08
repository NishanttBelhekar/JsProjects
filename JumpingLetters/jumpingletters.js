const container = document.querySelectorAll('span');

container.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.classList.toggle('active');
  })
})