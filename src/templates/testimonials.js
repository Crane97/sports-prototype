/**
 * TESTIMONIOS: carrusel con scroll-snap (deslizable con el dedo o trackpad)
 * y botones anterior/siguiente (ver js/ui/carousel.js).
 */
import { esc, sectionHead } from './helpers.js';
import { icon } from './icons.js';

const rating = (n) => `
  <p class="review__stars">
    <span class="visually-hidden">Valoración: ${n} de 5 estrellas</span>
    ${Array.from({ length: 5 }, (_, i) => `<span class="${i < n ? 'is-on' : ''}" aria-hidden="true">${icon('star')}</span>`).join('')}
  </p>`;

const slide = (t, i, total) => `
  <li class="review" aria-label="Testimonio ${i + 1} de ${total}">
    <figure class="review__inner">
      ${rating(t.rating)}
      <blockquote class="review__text"><p>${esc(t.text)}</p></blockquote>
      <figcaption class="review__author">
        <span class="review__name">${esc(t.name)}</span>
        <span class="review__detail">${esc(t.detail)}</span>
      </figcaption>
    </figure>
  </li>`;

export function renderTestimonials(site) {
  const list = site.testimonials;
  return `
<section class="section testimonials grain" id="testimonios" aria-labelledby="testimonials-title">
  <div class="container">
    <div class="testimonials__head">
      ${sectionHead({ id: 'testimonials-title', ...site.headings.testimonials })}
      <div class="carousel__controls" data-reveal>
        <span class="carousel__count" aria-hidden="true"><span data-carousel-current>01</span> / ${String(list.length).padStart(2, '0')}</span>
        <button class="carousel__btn" type="button" data-carousel-prev aria-label="Testimonio anterior">${icon('chevronLeft')}</button>
        <button class="carousel__btn" type="button" data-carousel-next aria-label="Testimonio siguiente">${icon('chevronRight')}</button>
      </div>
    </div>

    <div class="carousel" role="region" aria-roledescription="carrusel" aria-label="Opiniones de alumnos" data-carousel>
      <ul class="carousel__track" data-carousel-track tabindex="0" aria-label="Testimonios (usa las flechas para desplazarte)">
        ${list.map((t, i) => slide(t, i, list.length)).join('')}
      </ul>
    </div>
  </div>
</section>`;
}
