/* ============================================================
   router.js — Amare Skincare SPA Router
   ============================================================ */

const Router = {
  routes: {
    '/':             'pages/home.html',
    '/products':     'pages/products.html',
    '/about':        'pages/about.html',
    '/contact':      'pages/contact.html',
    '/team':         'pages/team.html',
    '/cart':         'pages/cart.html',
    '/checkout':     'pages/checkout.html',
    '/order-status': 'pages/order-status.html',
    '/suppliers':    'pages/suppliers.html',
    '/reviews':      'pages/reviews.html',
  },

  async navigate(path) {
    const app = document.getElementById('app');
    if (!app) return;

    // Fade out
    app.style.opacity = '0';
    app.style.transition = 'opacity 0.2s ease';

    const file = this.routes[path] || this.routes['/'];

    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`Failed to load ${file}`);
      const html = await res.text();

      setTimeout(async () => {
        app.innerHTML = html;
        window.history.pushState({}, '', path);
        this.updateNav(path);
        this.bindLinks();
        app.style.opacity = '1';
        app.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollTo(0, 0);

        // Run page init after render
        if (typeof PageInit === 'function') PageInit(path);
        initFadeUps();
      }, 200);

    } catch (err) {
      console.error('Router error:', err);
      app.innerHTML = `<div style="padding:5rem 5%;text-align:center;">
        <h2>Page not found</h2>
        <p style="margin-top:1rem;color:var(--text-muted);">Could not load: ${file}</p>
      </div>`;
      app.style.opacity = '1';
    }
  },

  updateNav(path) {
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === path);
    });
  },

  bindLinks() {
    document.querySelectorAll('[data-link]').forEach(el => {
      el.removeEventListener('click', el._routerHandler);
      el._routerHandler = (e) => {
        e.preventDefault();
        const href = el.getAttribute('href');
        if (href) Router.navigate(href);
      };
      el.addEventListener('click', el._routerHandler);
    });
  },

  init() {
    // Bind all initial links
    this.bindLinks();

    // Handle back/forward
    window.addEventListener('popstate', () => {
      this.navigate(window.location.pathname);
    });

    // Initial load
    this.navigate(window.location.pathname || '/');
  }
};

// Intersection Observer for fade-up
function initFadeUps() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  Router.init();
});