// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  const init = () => {
    // Show "JavaScript Enabled" for debugging
    document.querySelector('.js').innerHTML = "Enabled";

    // Cache elements
    const $nav = document.querySelector('.nav');
    const $navButton = document.querySelector('.nav__button');
    const $navList = document.querySelector('.nav__list');
    const $iconLink = document.querySelector('#iconlink');
    const listItems = $navList.querySelectorAll("li a");

    // Make the button visible and hide the navigation list initially
    $navButton.classList.remove('hidden');
    $navList.classList.add("hidden");

    // Open navigation menu
    const openNavigation = () => {
      $navButton.setAttribute("aria-expanded", "true");
      $iconLink.setAttribute("xlink:href", "#close"); // Switch to close icon
      $navList.classList.remove("hidden");
      $nav.classList.add('nav--fixed'); // Optional: for sticky/fixed styles
    };

    // Close navigation menu
    const closeNavigation = () => {
      $navButton.setAttribute("aria-expanded", "false");
      $iconLink.setAttribute("xlink:href", "#navicon"); // Switch back to menu icon
      $navList.classList.add("hidden");
      $nav.classList.remove('nav--fixed');
    };

    // Toggle navigation menu
    const toggleNavigation = () => {
      const isOpen = $navButton.getAttribute("aria-expanded") === "true";
      isOpen ? closeNavigation() : openNavigation();
    };

    // Handle focus blur event to close the menu when tabbing out
    const handleBlur = (event) => {
      if (!event.relatedTarget || !$navList.contains(event.relatedTarget)) {
        closeNavigation();
      }
    };

    // Add click event listener to the button
    $navButton.addEventListener("click", toggleNavigation);

    // Add blur event to the last item in the navigation list
    listItems[listItems.length - 1].addEventListener("blur", handleBlur);

    // Close the menu when the Escape key is pressed
    window.addEventListener("keyup", (event) => {
      if (event.key === "Escape") {
        $navButton.focus(); // Focus back on the button
        closeNavigation();
      }
    });
  };

  // Initialize the script
  init();
});
