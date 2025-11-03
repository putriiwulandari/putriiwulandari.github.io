/**
 * Custom Skills Section - Simple Animation
 * Minimalist and Clean
 */

(function () {
    'use strict';

    // Configuration
    const config = {
        animationDelay: 80,
        progressDuration: 1000,
    };

    /**
     * Animate Skills on Scroll
     */
    function initScrollAnimation() {
        const skillCards = document.querySelectorAll('.skill-card-modern');
        const softSkillItems = document.querySelectorAll('.soft-skill-item');

        function checkVisibility() {
            const windowHeight = window.innerHeight;

            // Animate skill cards
            skillCards.forEach((card, index) => {
                const elementTop = card.getBoundingClientRect().top;
                if (elementTop < windowHeight - 100) {
                    setTimeout(() => {
                        card.classList.add('animate-in');

                        // Animate progress bar
                        const progressBar = card.querySelector('.skill-progress-bar');
                        if (progressBar && !progressBar.classList.contains('animated')) {
                            const progress = progressBar.getAttribute('data-progress');
                            animateProgress(progressBar, progress);
                        }
                    }, index * config.animationDelay);
                }
            });

            // Animate soft skills
            softSkillItems.forEach((item, index) => {
                const elementTop = item.getBoundingClientRect().top;
                if (elementTop < windowHeight - 100) {
                    setTimeout(() => {
                        item.classList.add('animate-in');
                    }, index * config.animationDelay);
                }
            });
        }

        // Check on load and scroll
        checkVisibility();
        window.addEventListener('scroll', checkVisibility);
    }

    /**
     * Animate Progress Bar
     */
    function animateProgress(element, targetWidth) {
        element.classList.add('animated');
        setTimeout(() => {
            element.style.width = targetWidth + '%';
        }, 100);
    }

    /**
     * Initialize on DOM Ready
     */
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initScrollAnimation);
        } else {
            initScrollAnimation();
        }
    }

    // Start
    init();
})();
