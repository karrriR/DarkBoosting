var btn = document.querySelector('.button-profile');
var blockHidden = document.querySelector('.block');
var btn2 = document.querySelector('.register-button');
var blockHidden2 = document.querySelector('.blocktwo');
var btn3 = document.querySelector('.entrancebutton');
var btnClose = document.querySelector('.close-autoriz');
var btnClose2 = document.querySelector('.close-register');


function showBlock() {
    blockHidden.classList.add('b-show');
}

function hideBlock() {
    blockHidden.classList.remove('b-show');
}

function showBlocktwo() {
    blockHidden2.classList.add('b-show-two'); 
    blockHidden.classList.remove('b-show');
}

function hideBlocktwo() {
    blockHidden2.classList.remove('b-show-two');
}

function showBlockthree() {
    blockHidden2.classList.remove('b-show-two');
    blockHidden.classList.add('b-show');
}

btn.addEventListener('click', showBlock);
btn2.addEventListener('click', showBlocktwo);
btn3.addEventListener('click', showBlockthree);
btnClose.addEventListener('click', hideBlock);
btnClose2.addEventListener('click', hideBlocktwo);