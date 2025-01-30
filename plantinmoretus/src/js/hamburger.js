document.addEventListener("DOMContentLoaded", () => {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarMenu = document.querySelector('.navbar-menu');


  navbarToggler.addEventListener('click', () => {
    const isOpen = navbarMenu.classList.toggle('show');
    navbarToggler.setAttribute('aria-expanded', isOpen);
    

    if (isOpen) {
      navbarToggler.innerHTML = `<svg class="navbar-toggler-icon"><use href="#close"></use></svg>`;
    } else {
      navbarToggler.innerHTML = `<svg class="navbar-toggler-icon"><use href="#navicon"></use></svg>`;
    }
  });
});