(function() {
    // Initialize EmailJS with your User ID
    emailjs.init("service_rjn2m59"); // Replace with your EmailJS User ID
})();

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navContainer = document.querySelector('.nav-container');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', toggleMenu);
hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
    }
});

function toggleMenu() {
    navContainer.classList.toggle('active');
    navLinks.classList.toggle('active');
    const isExpanded = navLinks.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
    if (isExpanded) {
        navLinks.querySelector('a').focus();
    }
}

// Form submission with EmailJS
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Collect form data
    const formData = {
        name: form.querySelector('#name').value,
        email: form.querySelector('#email').value,
        phone: form.querySelector('#phone').value,
        project_type: form.querySelector('#project-type').value,
        description: form.querySelector('#description').value,
        budget: form.querySelector('#budget').value
    };

    // Send email via EmailJS
    emailjs.send("service_rjn2m59", "template_okrilse", formData)
        .then(() => {
            alert('Project request submitted! We’ll contact you soon to kick things off.');
            form.reset();
        }, (error) => {
            console.error('EmailJS error:', error);
            alert('Failed to send email. Please try again later.');
        });
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTop.style.display = 'block';
        backToTop.style.opacity = '1';
    } else {
        backToTop.style.opacity = '0';
        setTimeout(() => backToTop.style.display = 'none', 300);
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fade-in animation on scroll
const fadeInElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

fadeInElements.forEach(el => observer.observe(el));