// js/dubai.js - Ultra Premium Interactivity (v3.0)

document.addEventListener('DOMContentLoaded', () => {
    
    // Init Animations after a short delay (simulating load)
    setTimeout(() => {
        initAnimations();
    }, 500);

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
            gsap.utils.toArray('.dev-strip-content').forEach(content => {
                gsap.from(content, {
                    y: 60,
                    opacity: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: content,
                        start: 'top 80%'
                    }
                });
            });

            // Staggered Reveal for "Why Dubai?" Cards
            gsap.from('.why-card', {
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.why-dubai-grid',
                    start: 'top 80%'
                }
            });

            // Magazine Property Cards
            gsap.from('.mag-prop-card', {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.property-magazine-grid',
                    start: 'top 75%'
                }
            });

            // 5-Step Process Timeline Stagger
            gsap.from('.process-step', {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'back.out(1.2)',
                scrollTrigger: {
                    trigger: '.process-timeline',
                    start: 'top 80%'
                }
            });

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
