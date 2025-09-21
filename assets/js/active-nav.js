active-nav.js
// highlight active nav link automatically
document.addEventListener("DOMContentLoaded", function () {
  const currentLocation = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(link => {
    let linkPath = link.getAttribute("href");
    if (linkPath === currentLocation || (linkPath === "index.html" && currentLocation === "")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});


