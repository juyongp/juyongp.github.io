  // Add event listeners when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");
    let scrollToTopButton = document.getElementById("scrollToTop");
    let homeLink = document.querySelector(".homeLink");

    // Toggle mobile menu
    menuIcon.onclick = function () {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };

    // Smooth scroll function
    function smoothScroll(target) {
      const headerOffset = 0; // Set this to 0 to scroll all the way to the top
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Add smooth scroll behavior to navigation links
    document.querySelectorAll("header nav a").forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          smoothScroll(target);
        }
      });
    });

    // Scroll to top when the "footer-iconTop" is clicked
    scrollToTopButton.addEventListener("click", function (event) {
      event.preventDefault();
      smoothScroll(document.querySelector("#home"));
    });

    // Scroll to top when the "Home" link is clicked
    homeLink.addEventListener("click", function (event) {
      event.preventDefault();
      smoothScroll(document.querySelector("#home"));
    });

    // Add sticky header on scroll
    window.addEventListener("scroll", function () {
      const header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 100);

      // Hide mobile menu when clicking outside
      if (navbar.classList.contains("active") && !menuIcon.contains(event.target)) {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
      }
    });
  });
