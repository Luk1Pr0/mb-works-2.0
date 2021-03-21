const nav = document.getElementById('navigation');
const burger = document.getElementById('burger');

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

// Event listeners
burger.addEventListener('click', toggleNav);