let myImageSlider = new Swiper('.lifehacks-cards-box', {
    mousewheel: {
        sensitivity: 1,
    },
    speed: 600,
    grabCursor: true,

    slidesPerView: 4,
    spaceBetween: 20,
    effect: 'slide',
    slideEffect: {
        slideShadows: true,
    },
}
);

let mySliderAllSlides = document.querySelector('.image-slider__total');
let mySliderCurrentSlide = document.querySelector('.image-slider__current')

mySliderAllSlides.innerHTML = myImageSlider.slides.length;

myImageSlider.on('slideChange', function () {
    let currentSlide = ++myImageSlider.realIndex;
    mySliderCurrentSlide.innerHTML = currentSlide;
})