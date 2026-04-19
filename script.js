// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile navigation toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Sticky navigation background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 15, 35, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 15, 35, 0.8)';
        navbar.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.1)';
    }
});

// Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to sections
document.querySelectorAll('.section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Add fade-in to gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
    item.classList.add('fade-in');
    observer.observe(item);
});

// Add fade-in to event card
document.querySelector('.event-card').classList.add('fade-in');
observer.observe(document.querySelector('.event-card'));

// Add fade-in to mission and vision
document.querySelectorAll('.mission, .vision').forEach(item => {
    item.classList.add('fade-in');
    observer.observe(item);
});

// Button hover glow effect (additional enhancement)
document.querySelectorAll('.cta-button, .social-link').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.boxShadow = button.classList.contains('cta-button') 
            ? '0 12px 35px rgba(255, 215, 0, 0.6)' 
            : '0 5px 15px rgba(255, 215, 0, 0.4)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.boxShadow = button.classList.contains('cta-button') 
            ? '0 8px 25px rgba(255, 215, 0, 0.3)' 
            : 'none';
    });
});

// Preloader (optional enhancement)
window.addEventListener('load', () => {
    // Remove any loading states if implemented
    document.body.classList.add('loaded');
});

// Gallery Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Prevent form submission on iframe (for demo purposes)
document.querySelector('iframe').addEventListener('load', () => {
    // This is just a placeholder - in a real scenario, you'd handle form submission properly
    console.log('Google Form loaded');
});