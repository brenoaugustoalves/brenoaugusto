const toggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') document.body.classList.add('light');
const updateThemeLabel = () => {
  const isLight = document.body.classList.contains('light');
  toggle.setAttribute('aria-pressed', String(isLight));
  toggle.setAttribute('aria-label', isLight ? 'Ativar tema escuro' : 'Ativar tema claro');
  toggle.textContent = isLight ? '☀' : '◐';
};
updateThemeLabel();
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('portfolio-theme', document.body.classList.contains('light') ? 'light' : 'dark');
  updateThemeLabel();
});
document.getElementById('year').textContent = new Date().getFullYear();
