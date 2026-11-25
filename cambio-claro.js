const ccTheme = document.querySelector('.cc-theme');
if (localStorage.getItem('cambio-claro-theme') === 'light') document.body.classList.add('cc-light');
const updateCcTheme = () => {
  const light = document.body.classList.contains('cc-light');
  ccTheme.setAttribute('aria-pressed', String(light));
  ccTheme.setAttribute('aria-label', light ? 'Ativar tema escuro' : 'Ativar tema claro');
  ccTheme.textContent = light ? '☀' : '◐';
};
updateCcTheme();
ccTheme.addEventListener('click', () => {
  document.body.classList.toggle('cc-light');
  localStorage.setItem('cambio-claro-theme', document.body.classList.contains('cc-light') ? 'light' : 'dark');
  updateCcTheme();
});
document.getElementById('cc-year').textContent = new Date().getFullYear();
