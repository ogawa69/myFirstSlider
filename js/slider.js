document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.swiper-container');
  const isMobile = window.matchMedia("(max-width: 767.98px)");
  const isTabletAndDesktop = window.matchMedia("(min-width: 768px)");

  const mySwiper = new Swiper(slider, {
    slidesPerView: 1.2,
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
  if (isMobile.matches) {
      mySwiper();
    }
  
  if (isTabletAndDesktop.matches) {
        mySwiper.destroy();
    }
});
