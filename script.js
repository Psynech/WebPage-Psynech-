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
/*caserol*/
const interval = 
    setInterval(() => { const next = document.querySelector('input[type=radio]:checked').nextElementSibling;
     if (next) next.checked = true;
 else document.querySelector('input[type=radio]').checked = true; }, 4000); /* Change every 4 seconds */
  /*caserol(ends)*/
