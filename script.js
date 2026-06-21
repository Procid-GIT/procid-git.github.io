// Note: Vibe coded, I told AI to make this and I understand it
// lowkey, ai kinda designed the logic, im sorry :( if im kinda dumb like that
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

// Smooth scroll when buttons are clicked
const buttons = document.querySelectorAll('.buttons-section button');
const scrollTargets = {
    0: '#about-section',      // About me button
    1: '#projects-section',   // Projects button
    2: '#skills-section',      // Skills button
    3: '#js'    //js stuff
};

// loops through each button, and adds a listener for them
// the listener then instructs each button to scroll to the target, in
// scrolltargets, to then find each one and then scroll into view for each.
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const targetId = scrollTargets[index];
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const button = document.getElementById('click_me');
let count=0;


button.addEventListener('click', ()=>{
    count++;
    button.textContent = "Times Clicked: " + count;
})
