function showToast(message, icon = 'fa-check-circle') {
  const toast = document.getElementById('toast');
  toast.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}