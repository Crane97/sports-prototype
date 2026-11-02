/**
 * CTA FINAL a pantalla completa: "Sube al ring" + botón a WhatsApp.
 */
import { esc, image, stars, whatsappUrl } from './helpers.js';
import { icon } from './icons.js';

export function renderFinalCta(site) {
  const c = site.finalCta;
  return `
<section class="final-cta" id="reserva" aria-labelledby="final-cta-title">
  <div class="final-cta__bg">${image({ ...c.image })}</div>
  <div class="container final-cta__content">
    ${stars(6)}
    <p class="ribbon" data-reveal><span>${esc(c.ribbon)}</span></p>
    <h2 class="final-cta__title" id="final-cta-title" data-reveal style="--d:80ms">${esc(c.title)}</h2>
    <p class="final-cta__text" data-reveal style="--d:160ms">${esc(c.text)}</p>
    <a class="btn btn--primary btn--lg" href="${whatsappUrl(site.contact)}" target="_blank" rel="noopener" data-reveal style="--d:240ms">
      ${icon('whatsapp')} ${esc(c.button)}
    </a>
  </div>
</section>`;
}
