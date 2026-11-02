/**
 * ============================================================================
 *  CONFIGURACIÓN DEL SITIO — ÚNICO ARCHIVO QUE NECESITAS EDITAR
 * ============================================================================
 *  Todo el contenido editable vive aquí: marca, contacto, horarios, clases,
 *  cifras, galería, instalaciones y testimonios.
 *
 *  Se lee en tiempo de BUILD (vite.config.js) y se convierte en HTML estático,
 *  así que la web carga rápido y Google indexa todo el contenido.
 *
 *  Imágenes: deja los archivos .webp en /public/images con el nombre indicado
 *  en cada campo `image`. Si falta alguno, se muestra un placeholder oscuro
 *  con el nombre esperado, así sabes qué foto falta.
 *
 *  ⚠️ Los valores marcados con [PROVISIONAL] son de ejemplo: cámbialos antes
 *  de publicar.
 * ============================================================================
 */

export const site = {
  /* --------------------------------------------------------------------------
   * MARCA
   * ------------------------------------------------------------------------ */
  brand: {
    name: 'Club de Boxeo Turia',
    shortName: 'Turia', // Palabra grande del logotipo
    prefix: 'Club de Boxeo', // Línea pequeña sobre el nombre
    founded: '2025',
    city: 'Valencia',
  },

  /* --------------------------------------------------------------------------
   * SEO / METADATOS
   * ------------------------------------------------------------------------ */
  seo: {
    url: 'https://www.clubdeboxeoturia.es', // [PROVISIONAL] dominio final, sin barra al final
    title: 'Club de Boxeo Turia · Gimnasio de boxeo en Valencia',
    description:
      'Gimnasio de boxeo en Valencia. Clases dirigidas, clase libre, boxeo infantil y entrenamiento personal para todos los niveles. Prueba tu primera clase gratis.',
    ogImage: '/og-image.jpg',
    locale: 'es_ES',
    themeColor: '#0B0B0B',
  },

  /* --------------------------------------------------------------------------
   * CONTACTO (se usa en header, footer, CTA y schema.org)
   * ------------------------------------------------------------------------ */
  contact: {
    phone: '+34 600 000 000', // [PROVISIONAL] formato visible
    phoneHref: '+34600000000', // [PROVISIONAL] sin espacios, para tel:
    whatsapp: '34600000000', // [PROVISIONAL] sin "+" ni espacios, para wa.me
    whatsappMessage: 'Hola, me gustaría reservar mi clase de prueba gratis.',
    email: 'hola@clubdeboxeoturia.es', // [PROVISIONAL]
    instagram: 'https://www.instagram.com/clubdeboxeoturia', // [PROVISIONAL]
    instagramHandle: '@clubdeboxeoturia', // [PROVISIONAL]
    address: {
      street: 'Calle de Ejemplo, 12', // [PROVISIONAL]
      postalCode: '46001', // [PROVISIONAL]
      city: 'Valencia',
      region: 'Comunidad Valenciana',
      country: 'ES',
    },
    geo: { lat: 39.4699, lng: -0.3763 }, // [PROVISIONAL] coordenadas del local
  },

  /* --------------------------------------------------------------------------
   * NAVEGACIÓN
   * ------------------------------------------------------------------------ */
  nav: [
    { label: 'Clases', href: '#clases' },
    { label: 'Horarios', href: '#horarios' },
    { label: 'Instalaciones', href: '#instalaciones' },
    { label: 'Contacto', href: '#contacto' },
  ],

  /* --------------------------------------------------------------------------
   * HERO
   * ------------------------------------------------------------------------ */
  hero: {
    eyebrow: 'Gimnasio de boxeo · Valencia',
    // Cada elemento del array es una línea del titular
    titleLines: ['Entrena', 'como un', 'boxeador'],
    lead:
      'Técnica, condición física y disciplina para todos los niveles. Desde tu primer saco hasta tu primer asalto.',
    primaryCta: { label: 'Clase de prueba gratis' }, // abre WhatsApp
    secondaryCta: { label: 'Ver horarios', href: '#horarios' },
    image: { file: 'hero.webp', width: 1920, height: 1280, alt: 'Boxeador entrenando con el saco en la penumbra del gimnasio' },
  },

  /* --------------------------------------------------------------------------
   * HORARIOS
   * --------------------------------------------------------------------------
   *  - Añade, quita o reordena filas libremente.
   *  - `icon`: 'glove' (guante) · 'bag' (saco) · 'kids' (niños) ·
   *            'wraps' (vendaje) · 'person' (personal)
   *  - `note` (opcional): texto pequeño bajo el nombre, p. ej. días concretos.
   * ------------------------------------------------------------------------ */
  schedule: {
    days: 'De lunes a viernes',
    blocks: [
      {
        title: 'Mañana',
        rows: [
          { start: '10:00', end: '11:00', name: 'Clase dirigida', icon: 'glove' },
          { start: '11:00', end: '12:00', name: 'Clase libre', icon: 'bag' },
          { start: '12:00', end: '13:00', name: 'Clase dirigida', icon: 'glove' },
        ],
      },
      {
        title: 'Tarde',
        rows: [
          { start: '16:30', end: '17:30', name: 'Clase dirigida', icon: 'glove' },
          { start: '18:00', end: '19:00', name: 'Clase de niños', icon: 'kids', note: 'Lunes, miércoles y viernes' },
          { start: '19:00', end: '20:00', name: 'Clase dirigida', icon: 'glove' },
          // [PENDIENTE] añade aquí el resto de filas, por ejemplo:
          // { start: '20:00', end: '21:00', name: 'Clase dirigida', icon: 'glove' },
        ],
      },
    ],
    footnote: 'Clase de prueba gratuita en cualquier horario. Reserva por WhatsApp.',
  },

  /* --------------------------------------------------------------------------
   * HORARIO DE APERTURA (footer + schema.org)
   * ------------------------------------------------------------------------ */
  openingHours: {
    // Lo que se lee en la web
    display: [
      { days: 'Lunes a viernes', hours: '10:00 – 13:00 · 16:30 – 21:00' }, // [PROVISIONAL]
      { days: 'Sábado y domingo', hours: 'Cerrado' },
    ],
    // Lo que lee Google (schema.org). Días en inglés, horas en 24 h.
    schema: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '13:00' },
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '16:30', closes: '21:00' },
    ],
  },
};

export default site;
