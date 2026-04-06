// Intersection Observer for Reveal Animation
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // Once revealed, we can stop observing
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initialize Observer and Smooth Scrolling
document.addEventListener("DOMContentLoaded", () => {
    // Observe all elements with .reveal class
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach(el => observer.observe(el));

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
