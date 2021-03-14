const burgerBtn = document.getElementById('nav-button');
const nav = document.getElementById('navigation');

console.log(burgerBtn);

const toggleNav = () => {
	nav.classList.toggle('hidden');
}

burgerBtn.addEventListener('click', toggleNav);