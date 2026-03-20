const app = document.getElementById('app');
const navLinks = document.querySelectorAll('[data-page]');
let currentPage = window.location.pathname || '/';

async function loadPage(path) {
  let page = path === '/' ? 'home' : path.replace('/', '');
  if (!page) page = 'home';
  
  try {
    const response = await fetch(`pages/${page}.html`);
    if (!response.ok) throw new Error('Page not found');
    const html = await response.text();
    
    app.classList.add('page-exit');
    setTimeout(() => {
      app.innerHTML = html;
      app.classList.remove('page-exit');
      
      navLinks.forEach(link => {
        const linkPage = link.dataset.page;
        if (linkPage === page || (page === 'home' && linkPage === 'home')) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      document.dispatchEvent(new CustomEvent('page-loaded', { detail: page }));
    }, 300);
  } catch (error) {
    app.innerHTML = '<h1>404 - Page Not Found</h1>';
  }
}

function navigateTo(path) {
  if (path === currentPage) return;
  currentPage = path;
  history.pushState(null, null, path);
  loadPage(path);
}

document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-page]');
  if (link) {
    e.preventDefault();
    const path = link.getAttribute('href');
    navigateTo(path);
  }
});

window.addEventListener('popstate', () => {
  loadPage(window.location.pathname);
});

loadPage(window.location.pathname);