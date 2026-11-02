/**
 * Animación fade/slide-up al entrar en el viewport.
 * Marca con [data-reveal] cualquier elemento; el retardo se controla con la
 * variable CSS --d (p. ej. style="--d:120ms").
 * Con prefers-reduced-motion, el CSS muestra todo sin animar.
 */
export function initReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // solo una vez
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
  );

  items.forEach((el) => observer.observe(el));
}
