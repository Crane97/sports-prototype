/**
 * Cifras que cuentan desde 0 hasta su valor al entrar en pantalla.
 * El HTML ya contiene el valor final: si no hay JS o el usuario prefiere
 * movimiento reducido, se ve directamente el número correcto.
 */
const DURATION = 1800; // ms
const easeOutExpo = (t) => (t === 1 ? 1 : 1 - 2 ** (-10 * t));
const format = (n) => n.toLocaleString('es-ES');

export function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  const animate = (el) => {
    const target = Number(el.dataset.count);
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / DURATION, 1);
      el.textContent = format(Math.round(target * easeOutExpo(progress)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animate(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((el) => {
    // (los lectores de pantalla leen una copia oculta con el valor final)
    el.textContent = '0';
    observer.observe(el);
  });
}
