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

// i18next.changeLanguage('en')

let arrItemMenuTranslate = document.querySelectorAll('.header__nav ul li a');
arrItemMenuTranslate.forEach((item, index) => item.innerHTML = i18next.t(`menuItem-${index}`));
