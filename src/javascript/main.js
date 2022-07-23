// Open mobile menu
let body = document.querySelector('body');
let mobMenu = document.querySelector('#mob-menu');
let nav = document.querySelector('.header__nav');

mobMenu.onclick = function(){
	this.classList.toggle('is-close');
	nav.classList.toggle('is-active');
	if (nav.classList.contains('is-active')) {
		body.style.overflow = 'hidden';
	} else {
		body.style.overflow = 'auto';
	}
};

