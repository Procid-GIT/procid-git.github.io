// Note: Vibe coded, I told AI to make this and I understand it
// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Check if element is in viewport
        if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
            element.classList.add('revealed');
        }
    });
};

// Trigger on scroll
window.addEventListener('scroll', revealOnScroll);

// Trigger on page load in case element is already in view
revealOnScroll();

// Smooth scroll when About me button is clicked
document.querySelector('.Intro-Section button').addEventListener('click', () => {
    const aboutSection = document.querySelector('.card');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

const button = document.getElementById('click_me');
let count=0;


button.addEventListener('click', ()=>{
    count++;
    button.textContent = "Times Clicked: " + count;
})
