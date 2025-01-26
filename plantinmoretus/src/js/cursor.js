import { gsap } from "gsap";

// Select the header where the background image is located
const headerImage = document.querySelector(".header__image");

// Mousemove event listener
headerImage.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event; // Cursor position
  const { left, top, width, height } = headerImage.getBoundingClientRect(); // Header bounds

  // Calculate cursor position relative to the header
  const xPercent = ((clientX - left) / width) * 100; // Horizontal percentage
  const yPercent = ((clientY - top) / height) * 100; // Vertical percentage

  // Move the background position based on cursor
  gsap.to(headerImage, {
    backgroundPosition: `${xPercent}% ${yPercent}%`, // Dynamically adjust background position
    duration: 0.3, // Smooth transition
    ease: "power2.out", // Easing for natural motion
  });
});

// Optional: Reset background position when the cursor leaves the header
headerImage.addEventListener("mouseleave", () => {
  gsap.to(headerImage, {
    backgroundPosition: "center", // Reset to default
    duration: 0.5,
    ease: "power2.out",
  });
});
