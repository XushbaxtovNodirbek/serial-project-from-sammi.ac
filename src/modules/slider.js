function slider(){
    // SLIDER

    const slides = document.querySelectorAll('.offer__slide'),
    nextBtn = document.querySelector('.offer__slider-next'),
    prevBtn = document.querySelector('.offer__slider-prev'),
    indexSlides = document.querySelector('#current'),
    totalSlides = document.querySelector('#total'),
    slidesWrapper = document.querySelector('.offer__slider-wrapper'),
    slidesField = document.querySelector('.offer__slider-inner'),
    width = window.getComputedStyle(slidesWrapper).width,
    slider = document.querySelector('.offer__slider')


    // let sliderIndex = 1
    let offsetX  = 0

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function extractNumber(inputString) {
        const regex = /(\d+(\.\d+)?)/;
        const match = inputString.match(regex);
      
        if (match) {
          return parseFloat(match[0]);
        } else {
          console.log("No match found");
          return null;
        }
      }

// --------88888888888888888888888-----------
//          CARUSEL
// --------88888888888888888888888-----------

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex'
    slidesField.style.transition = '0.5s ease all'
    slidesWrapper.style.overflow = 'hidden'
    totalSlides.innerHTML = getZero(slides.length)
    indexSlides.innerHTML = getZero(offsetX/+extractNumber(width) + 1)

    slides.forEach(slide => slide.style.width = width)

    nextBtn.addEventListener('click',()=>{
        console.log(offsetX);
        if(offsetX == extractNumber(width)*(slides.length - 1)) offsetX =0
        else offsetX+= extractNumber(width)
        slidesField.style.transform = `translateX(-${offsetX}px)`
        indexSlides.innerHTML = getZero(offsetX/extractNumber(width) + 1)
    })
    prevBtn.addEventListener('click',()=>{
        if(offsetX == 0) offsetX = extractNumber(width)*(slides.length - 1)
        else offsetX -= extractNumber(width)
        slidesField.style.transform = `translateX(-${offsetX}px)`
        indexSlides.innerHTML = getZero(offsetX/extractNumber(width) + 1)
    })
}

export default slider;