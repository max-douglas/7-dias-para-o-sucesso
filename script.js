// script.js

// Functionality to open and close lesson modals
const lessonModals = document.querySelectorAll('.lesson-modal');

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Countdown timer for 48 hours offer
let countdown = 48 * 60 * 60; // 48 hours in seconds
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const hours = Math.floor(countdown / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;
    countdownElement.innerHTML = `${hours}:${minutes}:${seconds}`;
    if (countdown <= 0) {
        clearInterval(countdownInterval);
    } else {
        countdown--;
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Smooth scrolling for anchor links
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

const animatedElements = document.querySelectorAll('.animate-on-scroll');
animatedElements.forEach(element => {
    observer.observe(element);
});

// Lesson content for all 7 days
const lessonContents = [
    'Day 1: Financial Mindset - Understanding the difference between rich and poor.',
    'Day 2: Wealth Myths - Debunking common myths around wealth and success.',
    'Day 3: Barriers to Riches - Identifying problems preventing wealth accumulation.',
    'Day 4: Investment Basics - Introduction to smart investment strategies.',
    'Day 5: Psychological Aspects of Wealth - Mental blocks and financial success.',
    'Day 6: Pricing Strategies - How to value your offerings (from 97 reais to 9.99 reais).',
    'Day 7: Sustaining Wealth - Strategies for maintaining and growing your wealth over time.'
];

lessonContents.forEach((content, index) => {
    const lessonDiv = document.getElementById(`lesson-${index + 1}`);
    if (lessonDiv) lessonDiv.innerHTML = content;
});
