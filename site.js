// Shared behaviour for all pages: year, mobile menu, navbar state, reveal, audit form.
(function () {
    const currentYear = document.getElementById('currentYear');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    const hamburger = document.getElementById('hamburger');
    const mobileOverlay = document.getElementById('mobile-overlay');
    if (hamburger && mobileOverlay) {
        const setMenu = (open) => {
            hamburger.classList.toggle('active', open);
            mobileOverlay.classList.toggle('active', open);
            hamburger.setAttribute('aria-expanded', String(open));
            hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
            document.body.classList.toggle('menu-open', open);
        };

        hamburger.addEventListener('click', () => setMenu(!hamburger.classList.contains('active')));
        mobileOverlay.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => setMenu(false));
        });
        mobileOverlay.addEventListener('click', (event) => {
            if (event.target === mobileOverlay) {
                setMenu(false);
            }
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                setMenu(false);
            }
        });
    }

    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 80);
        }, { passive: true });
    }

    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.15 });
        reveals.forEach((element) => revealObserver.observe(element));
    } else {
        reveals.forEach((element) => element.classList.add('in-view'));
    }

    // Audit request form: posts to Web3Forms, which emails each submission to the
    // address tied to the access key. Without JS the form still submits normally.
    document.querySelectorAll('form.audit-form').forEach((form) => {
        const status = form.querySelector('.form-status');
        const button = form.querySelector('button[type="submit"]');

        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            button.disabled = true;
            status.className = 'form-status';
            status.textContent = 'Sending...';

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    headers: { Accept: 'application/json' },
                    body: new FormData(form)
                });
                const result = await response.json();
                if (response.ok && result.success) {
                    form.reset();
                    status.className = 'form-status ok';
                    status.textContent = 'Thanks, your request is in. I will reply to your work email.';
                } else {
                    throw new Error(result.message || 'Request failed');
                }
            } catch (error) {
                status.className = 'form-status err';
                status.textContent = 'Something went wrong. Please try again, or message me on LinkedIn.';
            } finally {
                button.disabled = false;
            }
        });
    });
})();
