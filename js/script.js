// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Toggle mobile menu
const menuToggle = document.getElementById("menuToggle");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const nav = document.querySelector(".navbar");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });
}

// Typed.js text animation
document.addEventListener("DOMContentLoaded", function () {
  if (typeof Typed !== "undefined") {
    new Typed("#typedRoles", {
      strings: [
        "Software Developer",
        "Backend Engineer",
        "Prompt Engineer",
        "Java · Spring Boot",
      ],
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 1800,
      loop: true,
      cursorChar: "|",
    });
  }
});
