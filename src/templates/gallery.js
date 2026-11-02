/**
 * GALERÍA: marquee horizontal infinito con pie de foto corto.
 * La pista se duplica (copia oculta a lectores de pantalla) para que el bucle
 * sea continuo. Incluye botón de pausa (WCAG 2.2.2) y, con movimiento
 * reducido, se convierte en una fila desplazable a mano.
 */
import { esc, image, sectionHead } from './helpers.js';

const figure = (item, i, total) => `
  <figure class="marquee__item ${item.width > item.height ? 'is-landscape' : 'is-portrait'}">
    <div class="marquee__frame">
      ${image({ ...item, sizes: '(min-width: 64em) 30vw, 70vw' })}
    </div>
    <figcaption class="marquee__caption">
      <span class="marquee__num">${String(i + 1).padStart(2, '0')}/${String(total).padStart(2, '0')}</span>
      ${esc(item.caption)}
    </figcaption>
  </figure>`;

export function renderGallery(site) {
  const { gallery, headings } = site;
  const items = gallery.map((item, i) => figure(item, i, gallery.length)).join('');

  return `
<section class="section gallery" id="galeria" aria-labelledby="gallery-title">
  <div class="container gallery__head">
    ${sectionHead({ id: 'gallery-title', ...headings.gallery })}
    <button class="marquee__toggle" type="button" aria-pressed="false" data-marquee-toggle>
      <span class="marquee__toggle-icon" aria-hidden="true"></span>
      <span data-marquee-label>Pausar</span>
    </button>
  </div>

  <div class="marquee" data-marquee style="--count:${gallery.length}">
    <div class="marquee__track">
      <div class="marquee__group">${items}</div>
      <div class="marquee__group" aria-hidden="true" inert>${items}</div>
    </div>
  </div>
</section>`;
}
