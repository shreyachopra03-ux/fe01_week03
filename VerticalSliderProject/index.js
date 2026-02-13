const containerSlider = document.querySelector('.slider-container');
const slideLeft = document.querySelector('.left-slide');
const slideRight = document.querySelector('.right-slide');
const buttonDown = document.querySelector('.down-button');
const buttonUp = document.querySelector('.up-button');
const slidesLength = slideRight.querySelectorAll('.div');

let activeSlidesLength = 0;

// This top css property tells how much the element has to be shifted from top
slideLeft.style.top = `${(slidesLength - 1) * 100}vh`;

buttonUp.addEventListener('click', () => changeSlide('up'));
buttonDown.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = containerSlider.clientHeight;
    if(direction == 'up') {
        activeSlidesLength++;
        if(activeSlidesLength > slidesLength - 1) {
            activeSlidesLength = 0;
        }
    }

    else if(direction == 'down') {
        activeSlidesLength--;
        if(activeSlidesLength < 0) {
             activeSlidesLength = slidesLength - 1;
        }
    }

    


    
}