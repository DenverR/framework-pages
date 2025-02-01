
// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#000';
    } else {
        navbar.style.background = 'transparent';
    }
});

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
let isMenuOpen = false;

hamburger.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        isMenuOpen = false;
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (isMenuOpen && !e.target.closest('.nav-links') && !e.target.closest('.hamburger')) {
        isMenuOpen = false;
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Handle resize events
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && isMenuOpen) {
        isMenuOpen = false;
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    }
});
// Add this to script.js if you want to switch between black/white versions on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const logomark = document.querySelector('.logomark');
    const wordmark = document.querySelector('.wordmark-img');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        logomark.src = 'img/logomark-white-svg.svg';
        wordmark.src = 'img/wordmark-white-svg.svg';
    } else {
        navbar.classList.remove('scrolled');
        logomark.src = 'img/logomark-white-svg.svg';
        wordmark.src = 'img/wordmark-white-svg.svg';
    }
});
// Reading progress bar
function updateProgressBar() {
    const progressBar = document.querySelector('#progressBar');
    const articleContent = document.querySelector('.company-card');
    const scrollTop = window.scrollY;
    const scrollHeight = articleContent.offsetHeight;
    const clientHeight = document.documentElement.clientHeight;
    
    // Calculate scroll progress percentage
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    
    // Ensure the progress bar doesn't exceed 100%
    const progress = Math.min(scrollPercentage, 100);
    
    // Update progress bar width
    progressBar.style.width = `${progress}%`;
}

// Add scroll event listener for progress bar
window.addEventListener('scroll', updateProgressBar);
window.addEventListener('resize', updateProgressBar);