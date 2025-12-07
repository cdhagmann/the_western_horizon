// The Western Horizon — Campaign Framework Scripts

document.addEventListener('DOMContentLoaded', function() {
    initProgressTracking();
    initNavigationHighlighting();
    initMobileNavigation();
});

/**
 * Progress Tracking
 * Counts completed sections and updates the progress bar
 */
function initProgressTracking() {
    const navLinks = document.querySelectorAll('.nav-link[data-status]');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const progressTotal = document.getElementById('progress-total');

    if (!progressFill || !progressText || !progressTotal) return;

    let complete = 0;
    let total = navLinks.length;

    navLinks.forEach(link => {
        if (link.dataset.status === 'complete') complete++;
    });

    progressTotal.textContent = total;
    progressText.textContent = complete;
    progressFill.style.width = (complete / total * 100) + '%';
}

/**
 * Navigation Highlighting
 * Handles click highlighting and scroll-based active state
 */
function initNavigationHighlighting() {
    const navLinks = document.querySelectorAll('.nav-link[data-status]');
    const sections = document.querySelectorAll('section[id]');

    // Click handler for active state
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Intersection Observer for scroll-based highlighting
    const observerOptions = {
        rootMargin: '-20% 0px -80% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

/**
 * Mobile Navigation
 * Toggle sidebar on mobile and close on link click
 */
function initMobileNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sidebar = document.querySelector('.sidebar');
    const mobileToggle = document.querySelector('.mobile-nav-toggle');

    // Close sidebar on link click (mobile only)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900 && sidebar) {
                sidebar.classList.remove('open');
            }
        });
    });

    // Toggle button handler
    if (mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }
}

