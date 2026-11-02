/**
 * Utilidades compartidas por las plantillas (se ejecutan en Node, en build).
 */
import fs from 'node:fs';
import path from 'node:path';
import { icon } from './icons.js';

const IMAGES_DIR = path.resolve(process.cwd(), 'public/images');

/** Escapa texto para insertarlo de forma segura en HTML. */
export const esc = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

/** Enlace de WhatsApp con mensaje precargado. */
export const whatsappUrl = (contact) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`;

/**
 * Imagen responsive con lazy loading y dimensiones fijas (evita CLS).
 * Si el archivo no existe en /public/images, devuelve un placeholder oscuro
 * con el nombre esperado: así no hay peticiones 404 y se ve qué foto falta.
 *
 * @param {object} opts
 * @param {string} opts.file    Nombre del archivo en /public/images
 * @param {number} opts.width   Ancho intrínseco
 * @param {number} opts.height  Alto intrínseco
 * @param {string} opts.alt     Texto alternativo (obligatorio, en español)
 * @param {string} [opts.className]
 * @param {boolean} [opts.priority] true para la imagen LCP (hero)
 * @param {string} [opts.sizes]
 */
export function image({ file, width, height, alt, className = '', priority = false, sizes = '100vw' }) {
  const exists = fs.existsSync(path.join(IMAGES_DIR, file));

  if (!exists) {
    return `<div class="media media--placeholder ${className}" role="img" aria-label="${esc(alt)}" style="aspect-ratio:${width}/${height}">
      <span class="media__file">/images/${esc(file)}<small>${width}×${height}</small></span>
    </div>`;
  }

  const loading = priority ? 'fetchpriority="high" loading="eager"' : 'loading="lazy"';
  return `<img class="media ${className}" src="/images/${esc(file)}" width="${width}" height="${height}"
    alt="${esc(alt)}" ${loading} decoding="async" sizes="${sizes}">`;
}

/** Fila de 6 estrellas (separador del cartel). */
export const stars = (count = 6, className = '') =>
  `<div class="stars ${className}" aria-hidden="true">${icon('star').repeat(count)}</div>`;
