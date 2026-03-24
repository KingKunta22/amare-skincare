/* ============================================================
   toast.js — Amare Skincare Toast Notifications
   ============================================================ */

function showToast(message, icon = 'fas fa-info-circle') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-icon"><i class="${icon}"></i></div>
    <div class="toast-message">${message}</div>
  `;
  container.appendChild(toast);

  // Auto-remove after 3 seconds
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}