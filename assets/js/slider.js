let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(n) {
    currentSlide = (currentSlide + n + totalSlides) % totalSlides;
    updateSlider();
}

function updateSlider() {
    const offset = -currentSlide * 100;
    document.querySelector('.slider-wrapper').style.transform = `translateX(${offset}%)`;
}

// Auto slide change every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);

// Initial slider setup
updateSlider();

