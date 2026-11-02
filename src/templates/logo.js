/**
 * Logotipo: sello/escudo + marca tipográfica, inspirado en el cartel.
 * El escudo es SVG inline (decorativo); el nombre es texto real (accesible y SEO).
 */
import { esc } from './helpers.js';

export const shield = (className = '') => `
<svg class="shield ${className}" viewBox="0 0 48 56" aria-hidden="true" focusable="false">
  <path d="M24 2 44 8v20c0 13.5-9.5 21.5-20 26C13.5 49.5 4 41.5 4 28V8Z" fill="#0B0B0B" stroke="currentColor" stroke-width="2"/>
  <path d="M24 6.5 40 11.3V28c0 10.6-7.3 17.4-16 21.4C15.3 45.4 8 38.6 8 28V11.3Z" fill="none" stroke="currentColor" stroke-width=".8" opacity=".55"/>
  <g fill="currentColor">
    <path d="m17 13.4.7 1.4 1.5.2-1.1 1 .3 1.6-1.4-.8-1.4.8.3-1.6-1.1-1 1.5-.2zM24 12l.7 1.4 1.5.2-1.1 1 .3 1.6-1.4-.8-1.4.8.3-1.6-1.1-1 1.5-.2zM31 13.4l.7 1.4 1.5.2-1.1 1 .3 1.6-1.4-.8-1.4.8.3-1.6-1.1-1 1.5-.2z"/>
  </g>
  <text x="24" y="31" text-anchor="middle" font-family="'Bebas Neue', Impact, sans-serif" font-size="15" letter-spacing=".5" fill="currentColor">CBT</text>
  <rect x="8.4" y="34" width="31.2" height="7" fill="#B3121B"/>
  <text x="24" y="39.6" text-anchor="middle" font-family="'Bebas Neue', Impact, sans-serif" font-size="6.4" letter-spacing="1.2" fill="#F2F0EB">EST · 2025</text>
</svg>`;

/** Logotipo completo (escudo + texto), enlazado al inicio. */
export const logo = (brand, href = '#inicio') => `
<a class="logo" href="${href}">
  ${shield()}
  <span class="logo__text">
    <span class="logo__prefix">${esc(brand.prefix)}</span>
    <span class="logo__name">${esc(brand.shortName)}</span><span class="visually-hidden"> (inicio)</span>
  </span>
</a>`;
