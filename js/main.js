// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Global Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Fade-up animation for sections
const setupAnimations = () => {
    gsap.utils.toArray('.fade-up').forEach((elem) => {
        // Set initial state
        gsap.set(elem, { opacity: 0, y: 40 });

        gsap.to(elem, {
            scrollTrigger: {
                trigger: elem,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 1,
            y: 0,
            duration: 1.4, // Slower for classic luxury feel
            ease: 'power3.out'
        });
    });

    // Parallax effects
    gsap.utils.toArray('.parallax').forEach((elem) => {
        const depth = elem.dataset.depth || 0.2;
        gsap.to(elem, {
            scrollTrigger: {
                trigger: elem,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            },
            y: (i, target) => -ScrollTrigger.maxScroll(window) * depth,
            ease: 'none'
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    setupAnimations();
});
