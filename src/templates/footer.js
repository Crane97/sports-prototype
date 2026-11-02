/**
 * FOOTER / CONTACTO: datos de contacto, horario, mapa de Google (se carga
 * al hacer clic, para no instalar cookies de terceros ni penalizar la carga)
 * y enlaces legales.
 */
import { esc, sectionHead, stars, whatsappUrl } from './helpers.js';
import { icon } from './icons.js';
import { logo } from './logo.js';

const fullAddress = (a) => `${a.street}, ${a.postalCode} ${a.city}`;

export function renderFooter(site) {
  const { contact, openingHours, brand, legal } = site;
  const address = fullAddress(contact.address);
  const query = encodeURIComponent(`${brand.name}, ${address}`);
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${query}`;
  const mapsEmbed = `https://maps.google.com/maps?q=${query}&z=16&output=embed`;

  const hours = openingHours.display
    .map((h) => `<div class="hours__row"><dt>${esc(h.days)}</dt><dd>${esc(h.hours)}</dd></div>`)
    .join('');

  return `
<footer class="site-footer grain" id="contacto" aria-labelledby="contact-title">
  <div class="container">
    ${sectionHead({ id: 'contact-title', ...site.headings.contact })}

    <div class="contact">
      <div class="contact__info">
        <address class="contact__block">
          <h3 class="contact__label">${icon('pin')} Dirección</h3>
          <p>${esc(contact.address.street)}<br>${esc(contact.address.postalCode)} ${esc(contact.address.city)}</p>
          <a class="contact__link" href="${mapsLink}" target="_blank" rel="noopener">Cómo llegar ${icon('arrowRight')}</a>
        </address>

        <div class="contact__block">
          <h3 class="contact__label">${icon('clock')} Horario de apertura</h3>
          <dl class="hours">${hours}</dl>
        </div>

        <div class="contact__block">
          <h3 class="contact__label">${icon('phone')} Habla con nosotros</h3>
          <ul class="contact__list">
            <li><a href="tel:${esc(contact.phoneHref)}">${icon('phone')} ${esc(contact.phone)}</a></li>
            <li><a href="${whatsappUrl(contact)}" target="_blank" rel="noopener">${icon('whatsapp')} WhatsApp</a></li>
            <li><a href="${esc(contact.instagram)}" target="_blank" rel="noopener">${icon('instagram')} ${esc(contact.instagramHandle)}</a></li>
            <li><a href="mailto:${esc(contact.email)}">${icon('mail')} ${esc(contact.email)}</a></li>
          </ul>
        </div>
      </div>

      <div class="map" data-map data-src="${esc(mapsEmbed)}">
        <div class="map__facade">
          ${icon('pin')}
          <p class="map__address">${esc(address)}</p>
          <button class="btn btn--ghost btn--sm" type="button" data-map-load>Cargar mapa</button>
          <p class="map__note">Al cargar el mapa, Google puede usar cookies. <a href="${mapsLink}" target="_blank" rel="noopener">Abrir en Google Maps</a></p>
        </div>
      </div>
    </div>

    <div class="footer-bar">
      ${logo(brand)}
      ${stars(6, 'footer-bar__stars')}
      <nav class="footer-bar__legal" aria-label="Legal">
        <ul>${legal.map((l) => `<li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`).join('')}</ul>
      </nav>
      <p class="footer-bar__copy">© ${new Date().getFullYear()} ${esc(brand.name)} · ${esc(brand.city)} · Est. ${esc(brand.founded)}</p>
    </div>
  </div>
</footer>`;
}
