document.addEventListener("DOMContentLoaded", function() {
    // Hamburger Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("open");
        navLinks.classList.toggle("active");
    });

    // Hulpbronne Panel Toggle
    const hulpbronneToggle = document.querySelector("#hulpbronne-toggle");
    const hulpbronnePanel = document.querySelector(".hulpbronne-panel");

    hulpbronneToggle.addEventListener("click", function() {
        hulpbronnePanel.classList.toggle("active");
    });

    // Close panel when clicking a link inside it (optional)
    const panelLinks = document.querySelectorAll(".hulpbronne-panel ul li a");
    panelLinks.forEach(link => {
        link.addEventListener("click", function() {
            hulpbronnePanel.classList.remove("active");
        });
    });
});