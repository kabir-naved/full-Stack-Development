
// GSAP Hover Effects
const headings = document.querySelectorAll('.hover-heading');
const links = document.querySelectorAll('.hover-link');
const images = document.querySelectorAll('.hover-image');

// Hover effect for headings
headings.forEach(heading => {
  heading.addEventListener('mouseenter', () => {
    gsap.to(heading, { color: "#ff0000", duration: 0.3 });
  });

  heading.addEventListener('mouseleave', () => {
    gsap.to(heading, { color: "#ffffff", duration: 0.3 });
  });
});

// Hover effect for links
links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    gsap.to(link, { color: "#ff0000", duration: 0.3 });
  });

  link.addEventListener('mouseleave', () => {
    gsap.to(link, { color: "#ffffff", duration: 0.3 });
  });
});

// Hover effects for images
images.forEach(image => {
  image.addEventListener('mouseenter', () => {
    gsap.to(image, { scale: 1.1, duration: 0.3 });
  });

  image.addEventListener('mouseleave', () => {
    gsap.to(image, { scale: 1, duration: 0.3 });
  });
});

      const hoverLinks = document.querySelectorAll('.hover-link');

hoverLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    gsap.to(link, {
      rotation: 15, // Rotate the icon slightly
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)", // Add shadow
      duration: 0.3
    });
  });

  link.addEventListener('mouseleave', () => {
    gsap.to(link, {
      rotation: 0, // Reset rotation
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)", // Remove shadow
      duration: 0.3
    });
  });
});



// Scroll animations
document.addEventListener("DOMContentLoaded", function () {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // General animation function
  const animateSection = (selector) => {
    gsap.from(selector, {
      scrollTrigger: {
        trigger: selector,
        start: "top 80%", // When the top of the section hits 80% of the viewport
        end: "top 50%", // When the top of the section hits 50% of the viewport
        scrub: true, // Smooth scrubbing
      },
      y: 50, // Move down
      opacity: 0, // Start invisible
      duration: 1,
    });
  };

  // Animations for each section
  animateSection("#hero h1");
  animateSection("#hero img");
  animateSection("#how-it-works img");
  animateSection("#how-it-works h2");
  animateSection("#about");
  animateSection("#testimonials h2");
  animateSection("#testimonials > div"); // The testimonials container
  animateSection("#contact");
});
