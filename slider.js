let offest = 0;

const sliderLine = document.querySelector('.slider-line');

function nextSlide() {
    offest = offest +=1305;
    if(offest > 7260){
        offest = 6525; 
    }
    sliderLine.style.left = -offest + 'px';
    
}

function previousSlide() {
    offest = offest -=1305;
    if(offest < 0){
        offest = 0;
    }
    sliderLine.style.left = -offest + 'px';
}

