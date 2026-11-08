// iOS viewport height fix — screen.height doesn't change on scroll, unlike window.innerHeight
(function () {
    if (window.innerWidth <= 768) {
        document.documentElement.style.setProperty('--real-vh', `${window.screen.height * 0.01}px`);
    }
})();

document.addEventListener('DOMContentLoaded', () => {

    // --- Element references (null-safe throughout) ---
    const bg         = document.querySelector('.parallax-bg');
    const navBar     = document.querySelector('.nav-bar');
    const heroShrink = document.querySelectorAll('.hero-shrink');

    // --- Internal navigation detection ---
    let isInternal = false;
    try {
        if (document.referrer) {
            isInternal = new URL(document.referrer).origin === location.origin;
        }
    } catch {}

    let lastScrollTop = 0;

    // --- Image colour filter (scroll-based grayscale/saturation) ---
    function updateImageFilters() {
        const images = document.querySelectorAll('.service-image');
        if (!images.length) return;
        const center = window.innerHeight / 2;
        images.forEach(img => {
            const rect      = img.getBoundingClientRect();
            const closeness = 1 - Math.min(Math.abs(center - (rect.top + rect.height / 2)) / center, 1);
            img.style.filter = `grayscale(${1 - closeness}) saturate(${1 + closeness})`;
        });
    }

    // --- Single merged scroll handler ---
    function onScroll() {
        const scrollY      = window.scrollY;
        const windowHeight = window.innerHeight;

        // Parallax background
        if (bg) bg.style.transform = `translateY(${scrollY * 0.15}px)`;

        // Hero text shrink effect
        if (heroShrink.length) {
            const pct = Math.max(0, Math.min(100, 185 - (scrollY / windowHeight) * 600));
            heroShrink.forEach(el => {
                el.style.fontSize = `${pct}%`;
                el.style.opacity  = `${pct}%`;
            });
        }

        // Nav bar state
        if (navBar) {
            navBar.classList.toggle('scrolled', scrollY > 20 || isInternal);

            if (scrollY > 100) {
                navBar.classList.toggle('nav-hidden', scrollY > lastScrollTop);
            } else {
                navBar.classList.remove('nav-hidden');
            }
        }

        updateImageFilters();

        lastScrollTop = Math.max(0, scrollY);
    }

    // passive: true lets the browser optimise scroll without waiting for JS to finish
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateImageFilters, { passive: true });
    onScroll(); // run once on load so state is correct without scrolling

    // --- Collapsible service/FAQ boxes ---
    document.querySelectorAll('.service-cta').forEach(cta => {
        cta.addEventListener('click', e => {
            e.preventDefault();
            const container = cta.closest('.collapse-holder') || document;

            // Close all in this container
            container.querySelectorAll('.service-cta').forEach(b => b.classList.remove('hidden'));
            container.querySelectorAll('.service-hidden').forEach(h => h.classList.add('hidden'));

            // Open the clicked one
            const section = cta.closest('.service-info')?.querySelector('.service-hidden');
            if (section) {
                section.classList.remove('hidden');
                cta.classList.add('hidden');
            }
        });
    });

});
