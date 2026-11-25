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
const ccMenuButton = document.querySelector('.cc-menu-button');
const ccMenu = document.getElementById('cc-menu');
ccMenuButton.addEventListener('click', () => {
  const open = ccMenu.classList.toggle('cc-open');
  ccMenuButton.setAttribute('aria-expanded', String(open));
  ccMenuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
ccMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  ccMenu.classList.remove('cc-open');
  ccMenuButton.setAttribute('aria-expanded', 'false');
}));
const interestForm = document.getElementById('cc-interest-form');
interestForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = encodeURIComponent(document.getElementById('cc-name').value.trim());
  const email = encodeURIComponent(document.getElementById('cc-email').value.trim());
  window.location.href = `mailto:brenoaugustoalves@gmail.com?subject=Lista%20de%20espera%20C%C3%A2mbio%20Claro&body=Nome:%20${name}%0AE-mail:%20${email}`;
});
