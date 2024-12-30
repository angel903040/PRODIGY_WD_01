// script.js
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
  
    // Change navbar style on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  
    // Add smooth hover transitions (if needed dynamically)
    const menuItems = document.querySelectorAll(".menu a");
    menuItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        item.style.transition = "background-color 0.3s, color 0.3s";
      });
      item.addEventListener("mouseleave", () => {
        item.style.transition = "";
      });
    });
  });
  