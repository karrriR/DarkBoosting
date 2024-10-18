const progress = document.querySelector('#p1');
var previous_but = document.querySelector('.previous');
var next_but = document.querySelector('.next');
var transition = document.querySelector('.transition-box');


//registration
const line1 = document.querySelector('#line1');
const line2 = document.querySelector('#line2');
const line3 = document.querySelector('#line3');
const line4 = document.querySelector('#line4');
const circle2 = document.querySelector('#circle2');
const text2 = document.querySelector('#text-registration');

//order parameters
const line5 = document.querySelector('#line5');
const line6 = document.querySelector('#line6');
const line7 = document.querySelector('#line7');
const line8 = document.querySelector('#line8');
const circle3 = document.querySelector('#circle3');
const text3 = document.querySelector('#text-order-parameters'); 

//payment
const line9 = document.querySelector('#line9');
const line10 = document.querySelector('#line10');
const line11 = document.querySelector('#line11');
const line12 = document.querySelector('#line12');
const circle4 = document.querySelector('#circle4');
const text4 = document.querySelector('#text-payment');

//booster selection
const line13 = document.querySelector('#line13');
const line14 = document.querySelector('#line14');
const line15 = document.querySelector('#line15');
const line16 = document.querySelector('#line16');
const circle5 = document.querySelector('#circle5');
const text5 = document.querySelector('#text-booster-selection');

//bonuses
const line17 = document.querySelector('#line17');
const line18 = document.querySelector('#line18');
const line19 = document.querySelector('#line19');
const line20 = document.querySelector('#line20');
const circle6 = document.querySelector('#circle6');
const text6 = document.querySelector('#text-bonuses');


function progg_right() {
    progress.value = progress.value + 20;
    if (progress.value == 20) {
        //registration
        line1.style.fill = 'indigo';
        line1.style.opacity = '0.6';
        line2.style.fill = 'indigo';
        line2.style.opacity = '0.6';
        line3.style.fill = 'indigo';
        line3.style.opacity = '0.6';
        line4.style.fill = 'indigo';
        line4.style.opacity = '0.6';
        circle2.style.background = 'indigo';
        circle2.style.opacity = '0.6';
        text2.style.color = 'indigo';
        text2.style.opacity = '0.6';
    }
    if (progress.value == 40) {
        //order parameters
        line5.style.fill = 'indigo';
        line5.style.opacity = '0.6';
        line6.style.fill = 'indigo';
        line6.style.opacity = '0.6';
        line7.style.fill = 'indigo';
        line7.style.opacity = '0.6';
        line8.style.fill = 'indigo';
        line8.style.opacity = '0.6';
        circle3.style.background = 'indigo';
        circle3.style.opacity = '0.6';
        text3.style.color = 'indigo';
        text3.style.opacity = '0.6';
    }
    if (progress.value == 60) {
        //payment
        line9.style.fill = 'indigo';
        line9.style.opacity = '0.6';
        line10.style.fill = 'indigo';
        line10.style.opacity = '0.6';
        line11.style.fill = 'indigo';
        line11.style.opacity = '0.6';
        line12.style.fill = 'indigo';
        line12.style.opacity = '0.6';
        circle4.style.background = 'indigo';
        circle4.style.opacity = '0.6';
        text4.style.color = 'indigo';
        text4.style.opacity = '0.6';
    }
    if (progress.value == 80) {
        //booster selection
        line13.style.fill = 'indigo';
        line13.style.opacity = '0.6';
        line14.style.fill = 'indigo';
        line14.style.opacity = '0.6';
        line15.style.fill = 'indigo';
        line15.style.opacity = '0.6';
        line16.style.fill = 'indigo';
        line16.style.opacity = '0.6';
        circle5.style.background = 'indigo';
        circle5.style.opacity = '0.6';
        text5.style.color = 'indigo';
        text5.style.opacity = '0.6';
    }
    if (progress.value == 100) {
        //bonuses
        line17.style.fill = 'indigo';
        line17.style.opacity = '0.6';
        line18.style.fill = 'indigo';
        line18.style.opacity = '0.6';
        line19.style.fill = 'indigo';
        line19.style.opacity = '0.6';
        line20.style.fill = 'indigo';
        line20.style.opacity = '0.6';
        circle6.style.background = 'indigo';
        circle6.style.opacity = '0.6';
        text6.style.color = 'indigo';
        text6.style.opacity = '0.6';
        next_but.style.opacity = '0.5';
    }
   
     if (progress.value > 0) {
        previous_but.style.opacity = '1';
    }
}
function progg_left() {
    progress.value = progress.value - 20;
    if (progress.value < 100) {
        next_but.style.opacity = '1';
    }
    if (progress.value == 0) {
        //registration
        line1.style.fill = 'Silver';
        line1.style.opacity = '0.8';
        line2.style.fill = 'Silver';
        line2.style.opacity = '0.8';
        line3.style.fill = 'Silver';
        line3.style.opacity = '0.8';
        line4.style.fill = 'Silver';
        line4.style.opacity = '0.8';
        circle2.style.background = 'Silver';
        circle2.style.opacity = '0.8';
        text2.style.color = 'Silver';
        text2.style.opacity = '0.7';
        previous_but.style.opacity = '0.5';
    }
    if (progress.value == 20) {
        //order parameters
        line5.style.fill = 'Silver';
        line5.style.opacity = '0.8';
        line6.style.fill = 'Silver';
        line6.style.opacity = '0.8';
        line7.style.fill = 'Silver';
        line7.style.opacity = '0.8';
        line8.style.fill = 'Silver';
        line8.style.opacity = '0.8';
        circle3.style.background = 'Silver';
        circle3.style.opacity = '0.8';
        text3.style.color = 'Silver';
        text3.style.opacity = '0.7';
    }
    if (progress.value == 40) {
        //payment
        line9.style.fill = 'Silver';
        line9.style.opacity = '0.8';
        line10.style.fill = 'Silver';
        line10.style.opacity = '0.8';
        line11.style.fill = 'Silver';
        line11.style.opacity = '0.8';
        line12.style.fill = 'Silver';
        line12.style.opacity = '0.8';
        circle4.style.background = 'Silver';
        circle4.style.opacity = '0.8';
        text4.style.color = 'Silver';
        text4.style.opacity = '0.7';
    }
    if (progress.value == 60) {
        //booster selection
        line13.style.fill = 'Silver';
        line13.style.opacity = '0.8';
        line14.style.fill = 'Silver';
        line14.style.opacity = '0.8';
        line15.style.fill = 'Silver';
        line15.style.opacity = '0.8';
        line16.style.fill = 'Silver';
        line16.style.opacity = '0.8';
        circle5.style.background = 'Silver';
        circle5.style.opacity = '0.8';
        text5.style.color = 'Silver';
        text5.style.opacity = '0.7';
    }
    if (progress.value == 80) {
        //bonuses
        line17.style.fill = 'Silver';
        line17.style.opacity = '0.8';
        line18.style.fill = 'Silver';
        line18.style.opacity = '0.8';
        line19.style.fill = 'Silver';
        line19.style.opacity = '0.8';
        line20.style.fill = 'Silver';
        line20.style.opacity = '0.8';
        circle6.style.background = 'Silver';
        circle6.style.opacity = '0.8';
        text6.style.color = 'Silver';
        text6.style.opacity = '0.7';
    }
}