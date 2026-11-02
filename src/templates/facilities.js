/**
 * INSTALACIONES: bloques numerados 01, 02, 03… con foto grande y texto,
 * alternando el lado de la imagen en escritorio.
 */
import { esc, image, sectionHead } from './helpers.js';

const block = (f, i) => `
  <li class="facility ${i % 2 ? 'facility--reverse' : ''}">
    <div class="facility__media" data-reveal>
      ${image({ ...f.image, sizes: '(min-width: 56em) 55vw, 100vw' })}
    </div>
    <div class="facility__body" data-reveal style="--d:120ms">
      <span class="facility__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
      <h3 class="facility__title">${esc(f.title)}</h3>
      <p class="facility__text">${esc(f.text)}</p>
      ${
        f.features?.length
          ? `<ul class="facility__features">${f.features.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`
          : ''
      }
    </div>
  </li>`;

export function renderFacilities(site) {
  return `
<section class="section facilities" id="instalaciones" aria-labelledby="facilities-title">
  <div class="container">
    ${sectionHead({ id: 'facilities-title', ...site.headings.facilities })}
    <ol class="facilities__list">
      ${site.facilities.map(block).join('')}
    </ol>
  </div>
</section>`;
}
