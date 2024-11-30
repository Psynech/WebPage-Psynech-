const sliders = document.querySelectorAll('.game-slider');
const leftArrows = document.querySelectorAll('.left-arrow');
const rightArrows = document.querySelectorAll('.right-arrow');

// Attach event listeners to the left arrows
leftArrows.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
        sliders[index].scrollBy({
            left: -300, // Adjust this value based on card width
            behavior: 'smooth',
        });
    });
});

// Attach event listeners to the right arrows
rightArrows.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
        sliders[index].scrollBy({
            left: 300, // Adjust this value based on card width
            behavior: 'smooth',
        });
    });
});
