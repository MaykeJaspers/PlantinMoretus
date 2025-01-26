// Select all circles and the popup elements
const circles = document.querySelectorAll('.descendents__circle');
const popup = document.querySelector('.descendents__popup');
const popupContent = document.querySelector('.descendents__popup--content');
const popupClose = document.querySelector('.descendents__popup--close');

// Add event listeners to each circle
circles.forEach(circle => {
  circle.addEventListener('click', (event) => {
    const info = circle.getAttribute('data-info'); // Get the info from the data attribute
    popupContent.textContent = info; // Set the popup content
    popup.style.display = 'block'; // Show the popup
  });
});

// Close the popup when the close button is clicked
popupClose.addEventListener('click', () => {
  popup.style.display = 'none'; // Hide the popup
});

// Close the popup when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});
