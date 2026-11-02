/**
 * Marquee de la galería: botón para pausar/reanudar (WCAG 2.2.2) y pausa
 * automática cuando la sección no está en pantalla (ahorra CPU/batería).
 */
export function initMarquee() {
  const marquee = document.querySelector('[data-marquee]');
  const toggle = document.querySelector('[data-marquee-toggle]');
  if (!marquee) return;

  let userPaused = false;
  let offscreen = false;
  const sync = () => marquee.classList.toggle('is-paused', userPaused || offscreen);

  toggle?.addEventListener('click', () => {
    userPaused = !userPaused;
    toggle.setAttribute('aria-pressed', String(userPaused));
    toggle.querySelector('[data-marquee-label]').textContent = userPaused ? 'Reanudar' : 'Pausar';
    sync();
  });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      offscreen = !entry.isIntersecting;
      sync();
    }).observe(marquee);
  }
}
