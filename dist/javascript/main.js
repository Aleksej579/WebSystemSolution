// Open mobile menu
let body = document.querySelector('body');
let mobMenu = document.querySelector('#mob-menu');
let nav = document.querySelector('.header__nav');

if (window.screen.width <= 768 ) {
	mobMenu.onclick = function(){
		this.classList.toggle('is-close');
		nav.classList.toggle('is-active');
		if (nav.classList.contains('is-active')) {
			body.style.overflow = 'hidden';
		} else {
			body.style.overflow = 'auto';
		}
	};
	nav.querySelector("ul").addEventListener("click", () => {
		mobMenu.classList.toggle('is-close');
		nav.classList.toggle('is-active');
		if (nav.classList.contains('is-active')) {
			body.style.overflow = 'hidden';
		} else {
			body.style.overflow = 'auto';
		}
	})
}

// Read more
let blockShortText = document.querySelector('#service-description__wrapper');
let btnReadMore = document.querySelector('#read-more');

btnReadMore.onclick = function(){
	blockShortText.style.maxHeight = "100%";
	btnReadMore.style.display = 'none';
};

//Hightlight item select menu
let arrLi = nav.querySelectorAll('ul li')
nav.addEventListener('click', e => {
	arrLi.forEach(item => item.classList.remove('is-select_nav'))
	if (e.target.tagName == "A") {
		e.target.parentElement.classList.add('is-select_nav');
	}
})

//Hightlight item select language button
let blockLangSwitch = document.querySelector('.header__language-switch');

let arrBtn = blockLangSwitch.querySelectorAll('li')
blockLangSwitch.addEventListener('click', e => {
	arrBtn.forEach(item => item.classList.remove('is-select_lang'))
	if (e.target.tagName == "BUTTON") {
		e.target.parentElement.classList.add('is-select_lang');
	}
})

// Video control
let btnVideo = document.querySelector('.play-control');
let video = document.querySelector('video');
let btnPause = document.querySelector('.pause');
let btnPlay = document.querySelector('.play');

btnPlay.style.display = 'none';

btnVideo.addEventListener('click', () => {
	if (video.paused) {
        video.play();
		btnPlay.style.display = 'none';
		btnPause.style.display = 'block';
    } else {
        video.pause();
		btnPause.style.display = 'none';
		btnPlay.style.display = 'block';
    }
})

// translate interface
i18next.init({
	lng: 'ru',
    debug: true,
    resources: {
		ru: {
			translation: {
				"menuItem-0": "Про студию",
				"menuItem-1": "Портфолио",
				"menuItem-2": "Этапы работы",
				"menuItem-3": "Стоимость",
				"menuItem-4": "Эко-материалы",
				"menuItem-5": "Контакты",
            }
        },
		en: {
			translation: {
				"menuItem-0": "About Studio",
				"menuItem-1": "Portfolio",
				"menuItem-2": "Stages of work",
				"menuItem-3": "Price",
				"menuItem-4": "Eco-materials",
				"menuItem-5": "Contact",
            }
        },
		pol: {
			translation: {
				"menuItem-0": "O studiu",
				"menuItem-1": "Portfolio",
				"menuItem-2": "Etapy pracy",
				"menuItem-3": "Koszt",
				"menuItem-4": "Eko-materiały",
				"menuItem-5": "Kontakt",
            }
        },
    }
});

let btn_wrapper = document.querySelector('.header__language-switch');
let btn_en = document.querySelector('#btn_en');
let btn_ru = document.querySelector('#btn_ru');
let btn_pol = document.querySelector('#btn_pol');

btn_wrapper.addEventListener("click", (e) => {
	let locVariable;

	if (e.target == btn_en) {
		locVariable = btn_en.value;
	} else if (e.target == btn_ru){
		locVariable = btn_ru.value;
	} else if (e.target == btn_pol) {
		locVariable = btn_pol.value;
	}

	i18next.changeLanguage(locVariable);

	let arrItemMenuTranslate = document.querySelectorAll('.header__nav ul li a');
	arrItemMenuTranslate.forEach((item, index) => item.innerHTML = i18next.t(`menuItem-${index}`));
})
