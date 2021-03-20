const nav = document.getElementById('navigation');
const burger = document.getElementById('burger');

// Toggle navigation
const toggleNav = () => {
	// Toggle hidden class
	nav.classList.toggle('nav--hidden');

	// If nav is shown then hide the scroll bar
	if (!nav.className.includes('nav--hidden')) {
		document.body.style.overflowY = 'hidden';
	} else {
		document.body.style.overflowY = 'auto';
	}
}

// Close nav after link is clicked
const closeNav = () => {
	nav.classList.add('nav--hidden');
}

// Event listeners
burger.addEventListener('click', toggleNav);