import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  const timelineEvents = document.querySelectorAll('.timeline__event');

  gsap.fromTo(
    timelineEvents,
    { opacity: 0, y: 50 }, // Starting state
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5, // Delay between each event's animation
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top center', // Start animation when .timeline is at the center of the viewport
        end: 'bottom center', // End animation when .timeline is out of the viewport
        scrub: true, // Smooth animation with scrolling
        markers: false, // Set to true to debug animation
      },
    }
  );
});
