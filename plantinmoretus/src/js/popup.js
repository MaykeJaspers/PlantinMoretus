const circles = document.querySelectorAll('.descendents__circle');
const popup = document.querySelector('.descendents__popup');
const popupContent = document.querySelector('.descendents__popup--content');
const popupClose = document.querySelector('.descendents__popup--close');


circles.forEach(circle => {
  circle.addEventListener('click', (event) => {
    const info = circle.getAttribute('data-info');
    popupContent.textContent = info;
    popup.style.display = 'block'; 
  });
});


popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
});


window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});
