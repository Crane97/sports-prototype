/**
 * Header: pasa de transparente a sólido al hacer scroll y gestiona el menú
 * móvil a pantalla completa (accesible: aria-expanded, Esc, foco atrapado).
 */
export function initHeader() {
  const header = document.querySelector('[data-header]');
  if (!header) return;

  /* --- Transparente → sólido ------------------------------------------- */
  // Un "centinela" de 1 px al inicio de la página: cuando sale de la vista,
  // el header pasa a sólido. Más eficiente que escuchar el evento scroll.
  const sentinel = document.createElement('div');
  sentinel.setAttribute('aria-hidden', 'true');
  sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:80px;pointer-events:none';
  document.body.prepend(sentinel);

  new IntersectionObserver(([entry]) => {
    header.classList.toggle('is-solid', !entry.isIntersecting);
  }).observe(sentinel);

  /* --- Menú móvil -------------------------------------------------------- */
  const toggle = header.querySelector('[data-menu-toggle]');
  const menu = header.querySelector('[data-mobile-menu]');
  const label = header.querySelector('[data-menu-label]');
  if (!toggle || !menu) return;

  const focusables = () => [toggle, ...menu.querySelectorAll('a[href], button')];
  let closeTimer;

  const open = () => {
    clearTimeout(closeTimer);
    menu.hidden = false;
    requestAnimationFrame(() => menu.classList.add('is-open'));
    header.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    label.textContent = 'Cerrar menú';
    document.body.classList.add('is-locked');
    document.addEventListener('keydown', onKeydown);
  };

  const close = ({ restoreFocus = true } = {}) => {
    menu.classList.remove('is-open');
    header.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    label.textContent = 'Abrir menú';
    document.body.classList.remove('is-locked');
    document.removeEventListener('keydown', onKeydown);
    closeTimer = setTimeout(() => (menu.hidden = true), 450);
    if (restoreFocus) toggle.focus();
  };

  function onKeydown(event) {
    if (event.key === 'Escape') close();

    // Mantiene el foco dentro del menú abierto
    if (event.key === 'Tab') {
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  }

  toggle.addEventListener('click', () => {
    toggle.getAttribute('aria-expanded') === 'true' ? close() : open();
  });

  // Al pulsar un enlace del menú, se cierra y navega
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) close({ restoreFocus: false });
  });

  // Si se agranda la ventana a escritorio con el menú abierto, se cierra
  matchMedia('(min-width: 64em)').addEventListener('change', (mq) => {
    if (mq.matches && toggle.getAttribute('aria-expanded') === 'true') close({ restoreFocus: false });
  });
}
