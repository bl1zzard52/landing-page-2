const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const bookingForm = document.querySelector('.booking-form');
const formStatus = document.querySelector('.form-status');
const animatedSections = document.querySelectorAll('.section');

if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = siteNav.classList.toggle('is-open');

        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            siteNav.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

if (bookingForm && formStatus) {
    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        formStatus.textContent = 'Спасибо! Заявка принята в учебном режиме.';
        bookingForm.reset();
    });
}

if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    animatedSections.forEach((section) => {
        section.classList.add('reveal');
        sectionObserver.observe(section);
    });
}