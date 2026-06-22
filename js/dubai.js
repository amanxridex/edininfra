// js/dubai.js - Ultra Premium Interactivity (v2.0)

document.addEventListener('DOMContentLoaded', () => {
    
    // Preloader Logic
    const preloader = document.querySelector('.dubai-preloader');
    const progressBar = document.querySelector('.dubai-loader-progress');
    
    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress > 100) progress = 100;
        if(progressBar) progressBar.style.width = `${progress}%`;
        
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                if(preloader) {
                    preloader.style.opacity = '0';
                    setTimeout(() => {
                        preloader.style.display = 'none';
                        initAnimations();
                    }, 1000);
                }
            }, 500);
        }
    }, 150);

    function initAnimations() {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            // SplitText Animation (using SplitType)
            if (typeof SplitType !== 'undefined') {
                const colossalTexts = new SplitType('.colossal-text', { types: 'lines, words, chars' });
                
                gsap.utils.toArray('.colossal-text').forEach(text => {
                    gsap.from(text.querySelectorAll('.char'), {
                        y: 100,
                        opacity: 0,
                        duration: 1.2,
                        stagger: 0.05,
                        ease: 'power4.out',
                        scrollTrigger: {
                            trigger: text,
                            start: 'top 85%',
                        }
                    });
                });
            }

            // Image Reveal & Parallax
            gsap.utils.toArray('.luxury-img-wrapper').forEach(wrapper => {
                // Reveal mask
                ScrollTrigger.create({
                    trigger: wrapper,
                    start: 'top 75%',
                    onEnter: () => wrapper.classList.add('is-revealed')
                });

                // Parallax inner image
                const img = wrapper.querySelector('.parallax-img');
                if(img) {
                    gsap.to(img, {
                        y: '10%',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: wrapper,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true
                        }
                    });
                }
            });

            // Text Content Fade Up
            gsap.utils.toArray('.luxury-content').forEach(content => {
                gsap.from(content.children, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: content,
                        start: 'top 80%'
                    }
                });
            });

            // Editorial Cards Staggered Reveal
            gsap.from('.editorial-card', {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.property-editorial',
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
                            top: devsSection.offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            }
            
        } else {
            console.warn('GSAP or ScrollTrigger not loaded properly.');
        }
    }
});
