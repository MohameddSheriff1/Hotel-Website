// Menu  of mobile
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});



window.addEventListener('scroll', fixNavbar);

var navbar = document.getElementById("nav");
var navbarOffset = navbar.offsetTop;

function fixNavbar() {
    if (window.scrollY >= navbarOffset) {
        navbar.classList.add("fixed-navbar");
      

    } else {
        navbar.classList.remove("fixed-navbar");
     


    }
}