/* ============================================================
   toast.js — Amare Skincare
   ============================================================ */

/**
 * showToast(message, icon)
 * icon: FontAwesome class string e.g. 'fas fa-check'
 */
function showToast(message, icon = 'fas fa-check') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="${icon} toast-icon"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  // Auto-remove after 3s
  setTimeout(() => {
    toast.classList.add('removing');
    toast.addEventListener('animationend', () => toast.remove());
  }, 3000);
}