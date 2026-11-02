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
  star: `<path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" fill="currentColor" stroke="none"/>`,
};

/**
 * Devuelve el SVG de un icono por nombre.
 * @param {keyof typeof paths} name
 * @param {string} [label] Si se indica, el icono es accesible con ese texto.
 */
export const icon = (name, label) => svg(paths[name] ?? paths.glove, label);
