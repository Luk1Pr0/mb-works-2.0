const navContainer = document.getElementById('nav-container');

const nav = document.getElementById('navigation');
const burger = document.getElementById('burger');

const sloganText = document.querySelectorAll('.animate-slide');
const dividerLine = document.querySelector('.divider-line');

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

// Close nav after link is clicked
const closeNav = () => {
	nav.classList.add('nav--hidden');
}

// Stretch the divider line of the slogan
const stretch = () => {
	dividerLine.classList.add('stretch');
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

// Event listeners
burger.addEventListener('click', toggleNav);

// On load
setTimeout(slideDown, 500);
setTimeout(stretch, 500);
setTimeout(slideRight, 1000);
