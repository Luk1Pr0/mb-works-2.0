const navContainer = document.getElementById('nav-container');

const nav = document.getElementById('navigation');
const navLinks = document.querySelectorAll('.nav-link');
const burger = document.getElementById('burger');

const sloganText = document.querySelectorAll('.animate-slide');
const dividerLine = document.querySelector('.divider-line');

const contentContainers = document.querySelectorAll('.content__container');
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById('formStatus');

const galleryImages = document.querySelectorAll('.gallery-img');
const imgModal = document.querySelector('.img-modal__container');
const closeModalBtn = document.querySelector('.btn--close-modal');

const beforeAfterContainer = document.querySelector('.progress-img__container');
const beforeImg = document.querySelector('.img__container--before');
const sliderLine = document.querySelector('.slider-line');

const mobileScreen = 1280;

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
		if (window.innerWidth > mobileScreen) {
			burger.style.marginRight = '10px';
		}

	} else {
		document.body.style.overflowY = 'auto';
		burger.style.marginRight = '0px';
	}
}

// Stretch the divider line of the slogan
const stretch = () => {
	dividerLine.classList.add('animate-stretch');
}

// Slide in slogan text
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
const slideinContainers = () => {

	// Page height divided to get a section of when the elements should slide in
	const pageHeight = window.innerHeight / 1.2;

	// For each container do the below
	contentContainers.forEach(container => {
		const containerTop = container.getBoundingClientRect().top;
		const containerHeight = container.getBoundingClientRect().height;

		// We need to include the transofrm TranslateY of the content container
		const containerPos = containerTop - containerHeight;

		// If container position becomes smaller than portion of the page height then slide element up
		if (pageHeight > containerPos) {
			container.classList.remove('slide-up');
		}
	});
}

// Show image modal along with the image
const showModal = (e) => {
	// Add the src and alt attributes to the modal image to be shown
	imgModal.children[0].src = e.target.src;
	imgModal.children[0].alt = e.target.alt;

	// Remove hidden class from the modal
	imgModal.classList.remove('hidden');
}

// Close the image modal on button click
const closeModal = () => {
	imgModal.classList.add('hidden');
}

// Show before or after image on user mouse or touch move
const resizeBeforeImg = (e) => {
	// Get the mouse positon in relation to the before after container
	let mousePos = e.layerX;

	// Set the image container width and slider line position to the mouse position
	beforeImg.style.width = mousePos + 'px';
	sliderLine.style.left = mousePos + 'px';
}

// Form submission @Formspreee
const handleSubmit = async (e) => {
	e.preventDefault();
	const data = new FormData(e.target);

	fetch(e.target.action, {
		method: 'post',
		body: data,
		headers: {
			'Accept': 'application/json'
		}
	}).then(resp => {
		formStatus.textContent = 'Your message has been sent. We will be in touch within 24 hours!';
		formStatus.classList.add('text--success');
		formStatus.classList.remove('hidden');
		contactForm.reset();
	}).catch(err => {
		formStatus.textContent = 'Could not send your message, please try again';
		formStatus.classList.add('form--fail');
		formStatus.classList.remove('hidden');
	})
}

// Event listeners
window.addEventListener('scroll', slideinContainers);
burger.addEventListener('click', toggleNav);
navLinks.forEach(link => link.addEventListener('click', toggleNav));
galleryImages.forEach((img, i) => img.addEventListener('click', showModal));
contactForm.addEventListener('submit', handleSubmit);

// Check page name and add event listener to elements if necessary
const checkPageName = () => {
	const page = window.location.pathname;
	if (page.includes('kitchen') || page.includes('patio') || page.includes('other')) {
		beforeAfterContainer.addEventListener('mousemove', resizeBeforeImg);
		beforeAfterContainer.addEventListener('touchmove', resizeBeforeImg);
	}

	// Add event listener to modal close btn if page names match
	if (page.includes('gallery') || page.includes('index')) {
		closeModalBtn.addEventListener('click', closeModal);
	}
}

// On load
checkPageName();
setTimeout(slideDown, 400);
setTimeout(stretch, 400);
setTimeout(slideRight, 1000);