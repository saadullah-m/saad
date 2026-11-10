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

function revealArchiveTarget(){
 const id=decodeURIComponent(location.hash.slice(1)); if(!id)return;
 const target=document.getElementById(id); if(!target)return;
 let parent=target.parentElement; while(parent){if(parent.tagName==="DETAILS")parent.open=true;parent=parent.parentElement;}
 requestAnimationFrame(()=>target.scrollIntoView({block:"start"}));
}
window.addEventListener("hashchange",revealArchiveTarget);
revealArchiveTarget();
