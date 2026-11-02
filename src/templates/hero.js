/**
 * HERO a pantalla completa: foto oscura, eyebrow, H1 desgastado y dos CTA.
 */
import { esc, image, stars, whatsappUrl } from './helpers.js';
import { icon } from './icons.js';

export function renderHero(site) {
  const { hero, brand } = site;
  const title = hero.titleLines.map((line) => `<span class="hero__line">${esc(line)}</span>`).join(' ');

  return `
<section class="hero" id="inicio" aria-labelledby="hero-title">
  <div class="hero__bg">
    ${image({ ...hero.image, className: 'hero__img', priority: true })}
  </div>

  <div class="container hero__content">
    <p class="eyebrow hero__eyebrow intro">${esc(hero.eyebrow)}</p>
    <h1 class="hero__title distressed intro" id="hero-title" style="--d:80ms">${title}</h1>
    ${stars(6, 'hero__stars')}
    <p class="hero__lead intro" style="--d:160ms">${esc(hero.lead)}</p>
    <div class="hero__actions intro" style="--d:240ms">
      <a class="btn btn--primary" href="${whatsappUrl(site.contact)}" target="_blank" rel="noopener">
        ${esc(hero.primaryCta.label)} ${icon('arrowRight')}
      </a>
      <a class="btn btn--ghost" href="${esc(hero.secondaryCta.href)}">${esc(hero.secondaryCta.label)}</a>
    </div>
  </div>

  <p class="hero__est" aria-hidden="true">Est. ${esc(brand.founded)}</p>
  <a class="hero__scroll" href="#horarios" aria-label="Bajar a horarios">${icon('arrowDown')}</a>
</section>`;
}
