// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Restaurant Tabs Function
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

const variable = tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        // Hide all tab contents
        contents.forEach((content) => (content.style.display = 'none'));

        // Show the selected tab content
        const selectedTab = tab.getAttribute('data-tab');
        document.getElementById(selectedTab).style.display = 'block';
    });
});

// Hide Top Header on Scroll
const body = document.getElementById("body");
const topHead = document.getElementById('topHead');

body.addEventListener('scroll', () => {
    topHead.style.display = 'none';
    body.style.margin = '0';
    body.style.padding = '0';
});

// Slideshow Functionality
let slideIndex = 1;
showSlides(slideIndex);

// Navigate slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Show the current slide
function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Hide all slides
    Array.from(slides).forEach(slide => {
        slide.style.display = "none";
    });
    slides[slideIndex - 1].style.display = "block";
}

// Fix Navbar on Scroll
const navbar = document.getElementById("nav");
const navbarOffset = navbar.offsetTop;

window.addEventListener('scroll', fixNavbar);

function fixNavbar() {
    if (window.scrollY >= navbarOffset) {
        navbar.classList.add("fixed-navbar");
    } else {
        navbar.classList.remove("fixed-navbar");
    }
}

// Validate Booking Function
function validateBooking() {
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    if (!checkin || !checkout) {
        alert("Please select both check-in and check-out dates.");
        return;
    }

    if (new Date(checkin) >= new Date(checkout)) {
        alert("Check-out date must be after the check-in date.");
        return;
    }

    alert("Booking successful!");
}