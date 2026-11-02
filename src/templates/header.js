/**
 * HEADER fijo: logo · navegación · CTA. En móvil, menú a pantalla completa.
 */
import { esc, whatsappUrl } from './helpers.js';
import { logo } from './logo.js';

export function renderHeader(site) {
  const links = site.nav
    .map((item, i) => `<li style="--i:${i}"><a class="nav__link" href="${esc(item.href)}">${esc(item.label)}</a></li>`)
    .join('');
  const cta = site.hero.primaryCta.label;
  const wa = whatsappUrl(site.contact);

  return `
<header class="site-header" data-header>
  <div class="container site-header__inner">
    ${logo(site.brand)}

    <nav class="nav" aria-label="Principal">
      <ul class="nav__list">${links}</ul>
    </nav>

    <a class="btn btn--primary btn--sm site-header__cta" href="${wa}" target="_blank" rel="noopener">${esc(cta)}</a>

    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" data-menu-toggle>
      <span class="visually-hidden" data-menu-label>Abrir menú</span>
      <span class="menu-toggle__bars" aria-hidden="true"><span></span><span></span></span>
    </button>
  </div>

  <!-- Menú móvil a pantalla completa -->
  <div class="mobile-menu" id="mobile-menu" data-mobile-menu hidden>
    <nav aria-label="Menú móvil">
      <ul class="mobile-menu__list">${links.replaceAll('nav__link', 'mobile-menu__link')}</ul>
    </nav>
    <div class="mobile-menu__footer">
      <a class="btn btn--primary btn--block" href="${wa}" target="_blank" rel="noopener">${esc(cta)}</a>
      <p class="mobile-menu__meta">
        <a href="tel:${esc(site.contact.phoneHref)}">${esc(site.contact.phone)}</a>
        <span aria-hidden="true">·</span>
        <a href="${esc(site.contact.instagram)}" target="_blank" rel="noopener">${esc(site.contact.instagramHandle)}</a>
      </p>
    </div>
  </div>
</header>`;
}
