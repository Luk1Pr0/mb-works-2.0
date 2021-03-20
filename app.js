const nav = document.getElementById('navigation');
const burger = document.getElementById('burger');

// Toggle navigation
const toggleNav = () => {
	nav.classList.toggle('nav--hidden');
}

// Close nav after link is clicked
const closeNav = () => {
	nav.classList.add('nav--hidden');
}

// Event listeners
burger.addEventListener('click', toggleNav);

