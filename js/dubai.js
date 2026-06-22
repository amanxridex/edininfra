// js/dubai.js - Custom interactivity for the Dubai experience page

document.addEventListener('DOMContentLoaded', () => {
    // Wait for GSAP and ScrollTrigger to load
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Parallax Effect
        gsap.to('.dubai-hero-content', {
            y: 150,
            opacity: 0,
            scrollTrigger: {
                trigger: '.dubai-hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            }
        });

        // Developer Cards Staggered Reveal
        gsap.from('.dev-card', {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.dubai-developers',
                start: 'top 70%',
            }
        });

        // Properties Slide Up Reveal
        gsap.from('.prop-slide', {
            y: 80,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.dubai-properties',
                start: 'top 75%',
            }
        });

        // Scroll indicator smooth scroll
        const scrollInd = document.querySelector('.scroll-indicator');
        if(scrollInd) {
            scrollInd.addEventListener('click', () => {
                const devsSection = document.querySelector('.dubai-developers');
                if(devsSection) {
                    window.scrollTo({
                        top: devsSection.offsetTop - 50,
                        behavior: 'smooth'
                    });
                }
            });
        }
        
    } else {
        console.warn('GSAP or ScrollTrigger not loaded properly.');
    }
});
