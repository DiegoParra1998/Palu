const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.nav-dot');
let currentSlide = 0;

function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.slider').style.transform = `translateX(-${index * slideWidth}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function setSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

document.querySelectorAll('.nav-dot').forEach((dot, index) => {
    dot.addEventListener('click', () => setSlide(index));
});

setInterval(nextSlide, 5000);



document.querySelectorAll('.faq-title').forEach(faq => {
    faq.addEventListener('click', () => {
      const parent = faq.parentElement;
      parent.classList.toggle('active');
    });
  });
  
  
  
