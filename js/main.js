// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Global Smooth Scroll (using native CSS is safer without external smooth scroll libraries, but we can enhance it)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-up animation for sections
const setupAnimations = () => {
    gsap.utils.toArray('.fade-up').forEach((elem) => {
        // Set initial state
        gsap.set(elem, { opacity: 0, y: 30 });

        gsap.to(elem, {
            scrollTrigger: {
                trigger: elem,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 1,
            y: 0,
            duration: 1,
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
