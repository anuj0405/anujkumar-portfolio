document.addEventListener('DOMContentLoaded', function () {

    // ── Mobile menu toggle ──────────────────────────────────────────────────
    const hamburger = document.querySelector('.hamburger');
    const navMenu   = document.querySelector('.nav-menu');
    const navLinks  = document.querySelectorAll('.nav-menu a');

    if (hamburger) {
        hamburger.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        });
    });

    // ── Active nav link (dynamic, based on current page) ───────────────────
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) link.classList.add('active');
    });

    // ── Smooth scroll for in-page anchor links ──────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // ── Scroll-in animation ─────────────────────────────────────────────────
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity    = '1';
                entry.target.style.transform  = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

    document.querySelectorAll(
        '.education-item, .publication-item, .highlight-card, ' +
        '.contact-item, .news-item, .research-area-item'
    ).forEach(el => {
        el.style.opacity   = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
        observer.observe(el);
    });

    // ── Back-to-top button ──────────────────────────────────────────────────
    const btn = document.createElement('button');
    btn.id        = 'back-to-top';
    btn.title     = 'Back to top';
    btn.innerHTML = '&#8679;';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 300);
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ── Copy email to clipboard ─────────────────────────────────────────────
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const email = this.getAttribute('href').replace('mailto:', '');
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    showToast('Email copied to clipboard!');
                });
            }
        });
    });

    // ── Auto-update footer year ─────────────────────────────────────────────
    document.querySelectorAll('footer p').forEach(p => {
        p.innerHTML = p.innerHTML.replace(/\d{4}(?= Anuj Kumar)/, new Date().getFullYear());
    });

    // ── Button click feedback ───────────────────────────────────────────────
    document.addEventListener('click', function (e) {
        if (e.target.matches('.btn-link, .social-btn, .quick-link')) {
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => { e.target.style.transform = ''; }, 150);
        }
    });

    // ── Lazy load images ────────────────────────────────────────────────────
    document.querySelectorAll('img[data-src]').forEach(img => {
        new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    obs.unobserve(img);
                }
            });
        }).observe(img);
    });
});

// ── Toast notification ──────────────────────────────────────────────────────
function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ── Print: force white background ──────────────────────────────────────────
window.addEventListener('beforeprint', () => {
    document.body.style.backgroundColor = 'white';
});