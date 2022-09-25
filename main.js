var swiper = new Swiper('.swiper-container',{
	slidesPerViev: 1,
	spaceBetween: 20,
	effect: 'fade',
	loop: true,
	speed: 300,
	mousewheel:{
		invert: false,
	},
	pagination:{
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true
	},
	navigation:{
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});


var imgSlider = document.getElementById('img-slider');

	var numImg = 1;

const nextImg = () =>{
	numImg++;
	imgSlider.setAttribute('src', `img/${numImg}.jpeg`);

	if (numImg === 80) {
		numImg = 1;
		imgSlider.setAttribute('src', `img/${numImg}.jpeg`);
	}else{
		imgSlider.setAttribute('src', `img/${numImg}.jpeg`);
	}

}
let timerId = setInterval(() => {
		numImg++;
		imgSlider.setAttribute('src', `img/${numImg}.jpeg`);
	if (numImg === 80) {
		numImg = 1;
		imgSlider.setAttribute('src', `img/${numImg}.jpeg`);
	}else{
		imgSlider.setAttribute('src', `img/${numImg}.jpeg`);
	}}, 1500);




2   