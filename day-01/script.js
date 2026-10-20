const faq = document.getElementById('faq');
const toggleBtn = document.getElementById('themeToggle');

// Accordion — event delegation
faq.addEventListener('click', (e) => {
  const btn = e.target.closest('.faq-question');
  if (!btn) return;

  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');

  // close all
  faq.querySelectorAll('.faq-item').forEach((el) => {
    el.classList.remove('open');
    el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
  });

  // open clicked (if wasn't open)
  if (!isOpen) {
    item.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
});

// Theme
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

toggleBtn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});