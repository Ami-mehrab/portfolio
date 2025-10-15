// Mobile Menu Functionality
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

// Header Background on Scroll
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

// Close Mobile Menu on Link Click
menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// Background Image Slider for Hero Section
const slides = document.querySelectorAll('.hero-bg-slide');
let currentSlide = 0;

function changeSlide() {
	// Remove active class from current slide
	slides[currentSlide].classList.remove('active');
	
	// Move to next slide (loop back to 0 if at the end)
	currentSlide = (currentSlide + 1) % slides.length;
	
	// Add active class to new slide
	slides[currentSlide].classList.add('active');
}

// Change slide every 5 seconds (5000ms)
// You can adjust this timing as needed
if (slides.length > 1) {
	setInterval(changeSlide, 5000);
}

// Optional: Pause slider when page is not visible
document.addEventListener('visibilitychange', () => {
	if (document.hidden) {
		// Page is hidden, you could pause the slider here if needed
	}
});


