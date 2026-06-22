// js/dubai.js - Ultra Premium Interactivity (v3.0)

document.addEventListener('DOMContentLoaded', () => {
    
    // Init Animations after window loads completely to ensure heights are calculated correctly
    window.addEventListener('load', () => {
        setTimeout(() => {
            initAnimations();
            if (typeof ScrollTrigger !== 'undefined') {
                ScrollTrigger.refresh();
            }
        }, 500);
    });

    function initAnimations() {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            // SplitText Animation (using SplitType if available)
            if (typeof SplitType !== 'undefined') {
                gsap.utils.toArray('.colossal-text').forEach(text => {
                    const split = new SplitType(text, { types: 'lines, words, chars' });
                    gsap.from(split.chars, {
                        y: 50,
                        opacity: 0,
                        duration: 1,
                        stagger: 0.02,
                        ease: 'power4.out',
                        scrollTrigger: {
                            trigger: text,
                            start: 'top 85%',
                        }
                    });
                });
            }

            // Stats Counters Animation
            gsap.utils.toArray('.counter').forEach(counter => {
                const targetVal = parseFloat(counter.innerText);
                const isFloat = counter.innerText.includes('.');
                
                ScrollTrigger.create({
                    trigger: counter,
                    start: 'top 85%',
                    once: true,
                    onEnter: () => {
                        gsap.fromTo(counter, 
                            { innerHTML: 0 }, 
                            { 
                                innerHTML: targetVal, 
                                duration: 2, 
                                ease: 'power2.out',
                                snap: { innerHTML: isFloat ? 0.1 : 1 },
                                onUpdate: function() {
                                    counter.innerHTML = isFloat ? Number(this.targets()[0].innerHTML).toFixed(1) : Math.round(this.targets()[0].innerHTML);
                                }
                            }
                        );
                    }
                });
            });

            // Parallax Images in Developer Strips
            gsap.utils.toArray('.dev-strip-bg').forEach(wrapper => {
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

            // Fade Up for Developer Content
            gsap.fromTo('.dev-strip-content', 
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.dev-strips-wrapper',
                        start: 'top 85%'
                    }
                }
            );

            // Staggered Reveal for "Why Dubai?" Cards
            gsap.fromTo('.why-card', 
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.why-dubai-grid',
                        start: 'top 90%'
                    }
                }
            );

            // Magazine Property Cards
            gsap.fromTo('.mag-prop-card', 
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.property-magazine-grid',
                        start: 'top 90%'
                    }
                }
            );

            // 5-Step Process Timeline Stagger
            gsap.fromTo('.process-step', 
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'back.out(1.2)',
                    scrollTrigger: {
                        trigger: '.process-timeline',
                        start: 'top 90%'
                    }
                }
            );

            // Scroll indicator smooth scroll
            const scrollInd = document.querySelector('.scroll-indicator');
            if(scrollInd) {
                scrollInd.addEventListener('click', () => {
                    const nextSection = document.querySelector('.dubai-stats') || document.querySelector('.dubai-developers');
                    if(nextSection) {
                        window.scrollTo({
                            top: nextSection.offsetTop,
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
