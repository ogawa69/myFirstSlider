const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
	slidesPerView: 1.2,
	spaceBetween: 16,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

if (window.innerWidth < 768 && slider.dataset.mobile == 'false') {
    mySwiper();

    slider.dataset.mobile = 'true';
  }

if (window.innerWidth >= 768) {
    slider.dataset.mobile = 'false';
    if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }