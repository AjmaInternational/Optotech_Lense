document.addEventListener('DOMContentLoaded', () => {
    // Brand Carousel Logic
    const brands = [
        { id: 'sunshade', name: 'Sunshade', tagline: 'Premium Protection, Crystal Clarity', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800' },
        { id: 'rbs', name: 'RBS', tagline: 'Revolutionary Blue Shield Technology', image: 'https://images.unsplash.com/photo-1511499767390-90342f4b4ce1?auto=format&fit=crop&q=80&w=800' },
        { id: 'asahi-fuji', name: 'Asahi Fuji', tagline: 'Japanese Precision Optics', image: 'https://images.unsplash.com/photo-1582142839930-2233e73b21bd?auto=format&fit=crop&q=80&w=800' },
        { id: 'clex', name: 'Clex', tagline: 'The Ultimate Clear Experience', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800' }
    ];

    let currentIndex = 0;
    let autoSlideInterval;
    let isPaused = false;
    let pauseTimeout;

    const brandCard = document.getElementById('brand-card');
    const brandName = document.getElementById('brand-name');
    const brandTagline = document.getElementById('brand-tagline');
    const brandImage = document.getElementById('brand-image');
    const brandLink = document.getElementById('brand-link');
    const tabButtons = document.querySelectorAll('.brand-tab');

    const updateBrand = (index) => {
        const brand = brands[index];

        // GSAP transition
        gsap.to('#brand-content', { opacity: 0, x: -20, duration: 0.3, onComplete: () => {
            brandName.textContent = brand.name;
            brandTagline.textContent = brand.tagline;
            brandImage.src = brand.image;
            brandLink.href = brand.id + '.html';

            gsap.to('#brand-content', { opacity: 1, x: 0, duration: 0.3 });
        }});

        // Update tabs
        tabButtons.forEach((btn, i) => {
            if (i === index) {
                btn.classList.add('border-[#1e88e5]', 'text-[#1e88e5]');
                btn.classList.remove('border-transparent', 'text-gray-500');
            } else {
                btn.classList.remove('border-[#1e88e5]', 'text-[#1e88e5]');
                btn.classList.add('border-transparent', 'text-gray-500');
            }
        });

        currentIndex = index;
    };

    const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => {
            if (!isPaused) {
                let nextIndex = (currentIndex + 1) % brands.length;
                updateBrand(nextIndex);
            }
        }, 3000);
    };

    const pauseAutoSlide = () => {
        isPaused = true;
        clearTimeout(pauseTimeout);
        pauseTimeout = setTimeout(() => {
            isPaused = false;
        }, 5000);
    };

    tabButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            updateBrand(index);
            pauseAutoSlide();
        });
    });

    // Initialize first brand
    updateBrand(0);
    startAutoSlide();

    // Hero Parallax
    gsap.to(".hero-bg", {
        scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        y: 200,
        ease: "none"
    });

    // Hero Lens Rotation
    gsap.to(".hero-lens", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
    });

    // Lens Fitting Animation
    gsap.to("#fitting-lens", {
        scrollTrigger: {
            trigger: "#fitting-lens",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: "0%",
        opacity: 1,
        duration: 1.5,
        ease: "bounce.out"
    });
});
