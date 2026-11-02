/**
 * CIFRAS: franja con números grandes que cuentan al entrar en pantalla.
 * El HTML lleva ya el valor final (accesible y sin JS); js/ui/counters.js
 * lo anima desde 0 cuando la franja aparece.
 */
import { esc } from './helpers.js';

export function renderStats(site) {
  const items = site.stats
    .map(
      (s, i) => `
    <li class="stat" data-reveal style="--d:${i * 90}ms">
      <p class="stat__value">
        <span class="visually-hidden">${esc(s.prefix ?? '')}${Number(s.value).toLocaleString('es-ES')}${esc(s.suffix ?? '')}</span>
        <span aria-hidden="true">
        ${s.prefix ? `<span class="stat__affix">${esc(s.prefix)}</span>` : ''}<span data-count="${Number(s.value)}">${Number(s.value).toLocaleString('es-ES')}</span>${
          s.suffix ? `<span class="stat__affix">${esc(s.suffix)}</span>` : ''
        }</span>
      </p>
      <p class="stat__label">${esc(s.label)}</p>
    </li>`
    )
    .join('');

  return `
<section class="stats grain" id="cifras" aria-label="El club en cifras">
  <div class="container">
    <ul class="stats__list">${items}</ul>
  </div>
</section>`;
}
