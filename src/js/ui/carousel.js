/**
 * Carrusel de testimonios.
 * La pista es una lista con scroll-snap (se desliza con el dedo, trackpad o
 * flechas del teclado al tener el foco). Los botones avanzan una tarjeta y
 * el contador indica la primera visible.
 */
export function initCarousel() {
  document.querySelectorAll('[data-carousel]').forEach((root) => {
    const section = root.closest('section');
    const track = root.querySelector('[data-carousel-track]');
    const prev = section.querySelector('[data-carousel-prev]');
    const next = section.querySelector('[data-carousel-next]');
    const current = section.querySelector('[data-carousel-current]');
    const slides = [...track.children];
    if (!track || !slides.length) return;

    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const step = () => slides[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0);

    const update = () => {
      const index = Math.round(track.scrollLeft / step());
      const max = track.scrollWidth - track.clientWidth - 2;
      current.textContent = String(Math.min(index + 1, slides.length)).padStart(2, '0');
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max;
    };

    const go = (dir) => track.scrollBy({ left: dir * step(), behavior: reduced ? 'auto' : 'smooth' });

    prev.addEventListener('click', () => go(-1));
    next.addEventListener('click', () => go(1));

    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    });

    let frame;
    track.addEventListener('scroll', () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    }, { passive: true });
    addEventListener('resize', update, { passive: true });
    update();
  });
}
