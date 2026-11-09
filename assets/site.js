const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (toggle && navigation) {
  toggle.hidden = false;
  const close = () => { toggle.setAttribute('aria-expanded', 'false'); navigation.classList.remove('is-open'); };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('is-open', open);
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { close(); toggle.focus(); } });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  matchMedia('(min-width: 801px)').addEventListener('change', close);
  document.documentElement.classList.add('js');
}
document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
