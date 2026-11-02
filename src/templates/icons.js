/**
 * Iconos de línea (SVG inline, trazo blanco, 24×24).
 * Heredan el color con `currentColor` y no generan peticiones extra.
 */
const svg = (body, label = '') =>
  `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" ${
    label ? `role="img" aria-label="${label}"` : 'aria-hidden="true" focusable="false"'
  }>${body}</svg>`;

const paths = {
  // Guante de boxeo
  glove: `<path d="M8 21v-5.2C5.9 14.8 4.5 12.9 4.5 10.2 4.5 6 7.9 3 12.2 3h.6c3.9 0 6.7 2.9 6.7 6.8v3.4c0 1.8-.9 3.2-2.5 4V21Z"/>
          <path d="M8.6 12.2c-.3-1.6 1-2.8 2.6-2.4l2.6.8c1.3.4 1.1 2.3-.3 2.3h-2.6"/>
          <path d="M8 18h9.5"/>`,
  // Saco de boxeo (clase libre)
  bag: `<path d="M12 1.5V4M12 4 8.5 6.5M12 4l3.5 2.5"/>
        <rect x="7.5" y="6.5" width="9" height="15" rx="3.5"/>
        <path d="M7.5 10.5h9M7.5 17.5h9"/>`,
  // Niños
  kids: `<circle cx="8" cy="7" r="2.6"/><path d="M3.5 21v-3.5a4.5 4.5 0 0 1 9 0V21"/>
         <circle cx="17" cy="10.5" r="2"/><path d="M14 21v-2.5a3 3 0 0 1 6 0V21"/>`,
  // Vendaje
  wraps: `<circle cx="8" cy="12" r="5"/><circle cx="8" cy="12" r="1.5"/>
          <path d="M8 7h12.5v10H8"/><path d="M15 7v10"/>`,
  // Entrenamiento personal
  person: `<circle cx="12" cy="6.5" r="3"/><path d="M5.5 21v-3a6.5 6.5 0 0 1 13 0v3"/>`,
  // Utilidades de interfaz
  arrowDown: `<path d="M12 4v16M6 14l6 6 6-6"/>`,
  arrowRight: `<path d="M4 12h16M14 6l6 6-6 6"/>`,
  whatsapp: `<path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.3z"/>
             <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .9a5 5 0 0 1-2.8-2.8l.9-1-1-2z"/>`,
  chevronLeft: `<path d="M15 5l-7 7 7 7"/>`,
  chevronRight: `<path d="M9 5l7 7-7 7"/>`,
  pin: `<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>`,
  phone: `<path d="M5 3.5h3.5l1.8 4.6-2.3 1.4a11 11 0 0 0 6.5 6.5l1.4-2.3 4.6 1.8V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.1 1.5 1.5 0 0 1 5 3.5z"/>`,
  clock: `<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>`,
  mail: `<rect x="3" y="5.5" width="18" height="13" rx="1.5"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/>`,
  instagram: `<rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r=".6" fill="currentColor"/>`,
  quote: `<path d="M10 7H6.5A2.5 2.5 0 0 0 4 9.5V13h5v5H4M20 7h-3.5A2.5 2.5 0 0 0 14 9.5V13h5v5h-5" />`,
  star: `<path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" fill="currentColor" stroke="none"/>`,
};

/**
 * Devuelve el SVG de un icono por nombre.
 * @param {keyof typeof paths} name
 * @param {string} [label] Si se indica, el icono es accesible con ese texto.
 */
export const icon = (name, label) => svg(paths[name] ?? paths.glove, label);
