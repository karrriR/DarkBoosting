let myImageSl = new Swiper('.scroll-box-reviews', {
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
    },
    speed: 800,
    effect: 'flip',
    flipEffect: {
        slideShadows: true,
        limitRotation: true
    },
    grabCursor: true,

});

let mySlAllSl = document.querySelector('.image-slider__t');
let mySlCurSl = document.querySelector('.image-slider__c')

mySlAllSl.innerHTML = myImageSl.slides.length;

 myImageSl.on('slideChange', function () {
    let curSlide = ++myImageSl.realIndex;
    mySlCurSl.innerHTML = curSlide;
})
   