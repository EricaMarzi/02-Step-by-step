const steps = document.querySelectorAll('.step');
const progress = document.querySelector('.progress-bar');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

prevButton.disabled = true;
let currentActive = 0
let currentWidth = 0

nextButton.addEventListener('click', () => {
    prevButton.disabled = false;

    currentActive++;
    steps[currentActive].classList.add('active');

    currentWidth += 30;
    progress.style.width = currentWidth + '%';
    if (currentActive > steps.length - 2) {
        nextButton.disabled = true;
        return
    }
})

prevButton.addEventListener('click', () => {
    nextButton.disabled = false

    currentActive--
    steps[currentActive + 1].classList.remove('active');

    currentWidth -= 30
    progress.style.width = currentWidth + '%';
    if (currentActive <= 0) {
        prevButton.disabled = true;
    }
})
