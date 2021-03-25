const navContainer = document.getElementById('nav-container');

const nav = document.getElementById('navigation');
const navLinks = document.querySelectorAll('.nav-link');
const burger = document.getElementById('burger');

const sloganText = document.querySelectorAll('.animate-slide');
const dividerLine = document.querySelector('.divider-line');

const sectionTitles = document.querySelectorAll('.section-title');
const contentContainers = document.querySelectorAll('.content__container');

// Toggle navigation
const toggleNav = () => {
	// Toggle hidden class
	nav.classList.toggle('nav--hidden');

	// Change the burger lines to cross each other when nav is open
	burger.classList.toggle('burger--cross');

	// If nav is shown then hide the scroll bar
	if (!nav.className.includes('nav--hidden')) {
		document.body.style.overflowY = 'hidden';

		// Add margin as the width of the scrollbar
		burger.style.marginRight = '10px';
	} else {
		document.body.style.overflowY = 'auto';
		burger.style.marginRight = '0px';
	}
}

// Stretch the divider line of the slogan
const stretch = () => {
	dividerLine.classList.add('animate-stretch');
}

// Slide elements
const slideRight = () => {
	sloganText.forEach((text, i) => {
		text.style.transitionDelay = `${i / 2}s`
		text.classList.add('animate-slide--active');
	});
}

// Show nav logo and burger menu
const slideDown = () => {
	navContainer.classList.add('nav--show');
}

// Elements that slide in when scroll reaches them
const slideInElements = () => {

	// Get page height 
	const pageHeight = window.innerHeight;

	contentContainers.forEach((container, i) => {
		// Get each containers top offset
		const sectionTop = container.getBoundingClientRect().top;

		// If page height becomes bigger than section top offset then show container
		if ((pageHeight / 4) > (sectionTop / 2.5)) {
			container.classList.remove('slide-up');
		} else {
			container.classList.add('slide-up');
		}
	})
}

// Event listeners
window.addEventListener('scroll', slideInElements);
burger.addEventListener('click', toggleNav);
navLinks.forEach(link => link.addEventListener('click', toggleNav));

// On load
setTimeout(slideDown, 400);
setTimeout(stretch, 400);
setTimeout(slideRight, 1000);
