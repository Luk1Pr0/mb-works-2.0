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
	// const containerOffsetTop = contentContainers[0].getBoundingClientRect().top;
	// const containerHeight = contentContainers[0].getBoundingClientRect().height;
	// const slideInPos = containerOffsetTop - (containerHeight * 3.5);

	if (slideInPos < window.pageYOffset) {
		contentContainers[0].classList.remove('slide-up')
	} else {
		contentContainers[0].classList.add('slide-up')
	}

	const containerTop = contentContainers[1].getBoundingClientRect().top;
	const containerBot = contentContainers[1].getBoundingClientRect().bottom;
	// const slideInPos = 

	console.log('top', containerTop);
	console.log('bottom', containerBot);


	contentContainers.forEach((container, i) => {
		// const containerTop = container.getBoundingClientRect().top;
		// const containerHeight = container.getBoundingClientRect().height;

		// console.log('top', containerTop);
		// console.log('height', containerHeight);

		// if (slideInPos < window.pageYOffset) {
		// 	container.classList.remove('slide-up');
		// } else {
		// 	container.classList.add('slide-up');
		// }
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
