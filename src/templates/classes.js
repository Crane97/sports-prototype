/**
 * CLASES: tarjetas grandes con foto, icono, nombre, detalle y descripción.
 * Hover/foco: zoom suave de la imagen y borde rojo.
 */
import { esc, image, sectionHead, whatsappUrl } from './helpers.js';
import { icon } from './icons.js';

const card = (c, i, site) => `
  <li class="class-card" data-reveal style="--d:${(i % 2) * 120}ms">
    <div class="class-card__media">
      ${image({ ...c.image, sizes: '(min-width: 56em) 45vw, 100vw' })}
    </div>
    <div class="class-card__body">
      <span class="class-card__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
      <span class="class-card__icon">${icon(c.icon)}</span>
      <p class="class-card__meta">${esc(c.meta)}</p>
      <h3 class="class-card__title">${esc(c.title)}</h3>
      <p class="class-card__text">${esc(c.text)}</p>
      <a class="class-card__link" href="${whatsappUrl({ ...site.contact, whatsappMessage: `Hola, me interesa la ${c.title.toLowerCase()}. ¿Puedo probar una clase gratis?` })}" target="_blank" rel="noopener">
        Probar gratis<span class="visually-hidden">: ${esc(c.title)}</span> ${icon('arrowRight')}
      </a>
    </div>
  </li>`;

export function renderClasses(site) {
  return `
<section class="section classes grain" id="clases" aria-labelledby="classes-title">
  <div class="container">
    ${sectionHead({ id: 'classes-title', ...site.headings.classes })}
    <ul class="classes__grid">
      ${site.classes.map((c, i) => card(c, i, site)).join('')}
    </ul>
  </div>
</section>`;
}
