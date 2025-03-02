let slideIndex = 0;
const slides = document.querySelectorAll(".producto");
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? "flex" : "none";
    });
}

function moveSlide(step) {
    slideIndex += step;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    showSlide(slideIndex);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(slideIndex);
});