/**
 * Galería en bucle infinito con scroll REAL.
 *
 * - La fila es un contenedor con scroll horizontal: se desliza con el dedo,
 *   trackpad, rueda (Mayús) o teclado, y con el ratón se puede arrastrar.
 * - Avanza sola despacio. La pista contiene las fotos dos veces: al pasar la
 *   mitad, se resta el ancho de un grupo y el salto es invisible (en ambos
 *   sentidos, así también se puede deslizar "hacia atrás" sin fin).
 * - Se pausa mientras el usuario interactúa, al pasar el ratón, con el botón
 *   Pausar (WCAG 2.2.2) y cuando la galería no está en pantalla.
 * - Con prefers-reduced-motion no avanza sola (el CSS oculta la copia).
 */
const SPEED = 40; // píxeles por segundo
const RESUME_AFTER = 2500; // ms sin tocar antes de volver a avanzar

export function initMarquee() {
  const marquee = document.querySelector('[data-marquee]');
  if (!marquee) return;
  const group = marquee.querySelector('.marquee__group');
  const toggle = document.querySelector('[data-marquee-toggle]');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  let userPaused = false; // botón Pausar
  let hovering = false;
  let offscreen = true;
  let interactingUntil = 0; // timestamp hasta el que se considera "tocando"
  let pos = 0; // posición exacta (los navegadores redondean scrollLeft)
  let last = 0;

  const loopWidth = () => group.getBoundingClientRect().width;

  // Mantiene la posición dentro de [0, ancho de un grupo) → bucle infinito
  const wrap = () => {
    const w = loopWidth();
    if (!w) return;
    if (marquee.scrollLeft >= w) marquee.scrollLeft -= w;
    else if (marquee.scrollLeft <= 0 && !reduced) marquee.scrollLeft += w;
  };

  const markInteraction = () => {
    interactingUntil = performance.now() + RESUME_AFTER;
  };

  // --- Interacción del usuario ---------------------------------------------
  ['pointerdown', 'touchstart', 'wheel', 'keydown'].forEach((type) =>
    marquee.addEventListener(type, markInteraction, { passive: true })
  );
  marquee.addEventListener('scroll', () => {
    if (performance.now() < interactingUntil) {
      markInteraction();
      if (!reduced) wrap();
    }
  }, { passive: true });

  marquee.addEventListener('mouseenter', () => (hovering = true));
  marquee.addEventListener('mouseleave', () => (hovering = false));

  // Arrastrar con el ratón (en táctil el navegador ya desliza de forma nativa)
  let drag = null;
  marquee.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    drag = { x: e.clientX, left: marquee.scrollLeft, moved: false };
    marquee.classList.add('is-dragging');
  });
  addEventListener('pointermove', (e) => {
    if (!drag) return;
    const dx = e.clientX - drag.x;
    if (Math.abs(dx) > 3) drag.moved = true;
    marquee.scrollLeft = drag.left - dx;
    markInteraction();
    if (!reduced) wrap();
  });
  addEventListener('pointerup', () => {
    if (!drag) return;
    marquee.classList.remove('is-dragging');
    drag = null;
  });
  // Evita que soltar tras arrastrar cuente como clic
  marquee.addEventListener('click', (e) => {
    if (marquee.classList.contains('is-dragging')) e.preventDefault();
  }, true);

  // --- Botón pausar / reanudar ---------------------------------------------
  toggle?.addEventListener('click', () => {
    userPaused = !userPaused;
    toggle.setAttribute('aria-pressed', String(userPaused));
    toggle.querySelector('[data-marquee-label]').textContent = userPaused ? 'Reanudar' : 'Pausar';
  });

  if (reduced) return; // sin avance automático

  // --- Solo avanza cuando está en pantalla ---------------------------------
  new IntersectionObserver(([entry]) => {
    offscreen = !entry.isIntersecting;
    if (!offscreen) {
      last = 0;
      requestAnimationFrame(tick);
    }
  }).observe(marquee);

  // Empieza un poco dentro para poder deslizar también hacia atrás
  requestAnimationFrame(() => {
    marquee.scrollLeft = Math.round(loopWidth() / 2);
    pos = marquee.scrollLeft;
  });

  function tick(now) {
    if (offscreen) return; // se reanuda desde el IntersectionObserver
    const dt = last ? Math.min(now - last, 64) : 0;
    last = now;

    const paused = userPaused || hovering || now < interactingUntil ||
      marquee.matches(':focus-visible');

    if (paused || Math.abs(marquee.scrollLeft - pos) > 2) {
      // Pausado, o el usuario ha movido la fila: continúa desde donde esté
      pos = marquee.scrollLeft;
    }
    if (!paused) {
      pos += (SPEED * dt) / 1000;
      const w = loopWidth();
      if (w && pos >= w) pos -= w; // salto invisible: el 2.º grupo = 1.º
      marquee.scrollLeft = pos;
    }
    requestAnimationFrame(tick);
  }
}
