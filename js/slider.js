const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;

nextBtn.addEventListener('click', () => {
  if (counter === 2) {
    counter = 0;
  } else {
    counter++;
  }
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  if (counter === 0) {
    counter = 2;
  } else {
    counter--;
  }
  updateSlider();
});

function updateSlider() {
  slider.style.transform = `translateX(-${counter * 100}%)`;
}