const burgerBtn = document.getElementById('nav-button');
const nav = document.getElementById('navigation');

// Toggle open/close nav
const toggleNav = () => {
	nav.classList.toggle('hidden');
}

// Close nav on link click
const closeNav = () => {
	nav.classList.add('hidden');
	console.log('closed');
}

burgerBtn.addEventListener('click', toggleNav);