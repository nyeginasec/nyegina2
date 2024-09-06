let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const intervalTime = 3000; // Time in milliseconds between slides

function showSlides(n) {
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  
  slides.forEach((slide, index) => {
    slide.style.opacity = '0';
    slide.classList.remove('active');
  });
  
  slides[slideIndex].style.opacity = '1';
  slides[slideIndex].classList.add('active');
}

function moveSlide(n) {
  showSlides(slideIndex += n);
}

// Automatic slideshow
let slideInterval = setInterval(() => moveSlide(1), intervalTime);

// Pause slideshow on hover
const carousel = document.querySelector('.horizontal-slider');

carousel.addEventListener('mouseover', () => clearInterval(slideInterval));
carousel.addEventListener('mouseout', () => {
  slideInterval = setInterval(() => moveSlide(1), intervalTime);
});

// Navigation buttons
document.querySelector('.prev').addEventListener('click', () => {
  moveSlide(-1);
  clearInterval(slideInterval); // Pause automatic slideshow
  slideInterval = setInterval(() => moveSlide(1), intervalTime); // Restart after user interaction
});

document.querySelector('.next').addEventListener('click', () => {
  moveSlide(1);
  clearInterval(slideInterval); // Pause automatic slideshow
  slideInterval = setInterval(() => moveSlide(1), intervalTime); // Restart after user interaction
});

showSlides(slideIndex); // Initial call
