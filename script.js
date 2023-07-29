let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let isHomeActive = true;
  
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        if (id !== "home") {
          document.querySelector('header nav a[href=' + id + ']').classList.add('active');
          isHomeActive = false;
        }
      });
    }
  });
};

// Smooth scrolling for navigation links
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Smooth scroll to top when "footer-iconTop" is clicked
document.getElementById('scrollToTop').addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
});

// Smooth scroll to top when "Home" link is clicked
document.getElementById('homeLink').addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});