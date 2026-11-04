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
    image: { file: 'hero.webp', width: 1920, height: 1280, alt: 'Boxeador lanzando un golpe en blanco y negro bajo los focos' },
  },

  /* --------------------------------------------------------------------------
   * TEXTOS DE CABECERA DE CADA SECCIÓN
   *  - En `title`, usa <em>…</em> para resaltar una palabra en rojo.
   * ------------------------------------------------------------------------ */
  headings: {
    gallery: { eyebrow: 'Dentro del club', title: 'Esto es <em>Turia</em>' },
    classes: {
      eyebrow: 'Clases',
      title: 'Elige tu <em>esquina</em>',
      intro: 'Desde tu primera clase hasta tu primer combate. Todas incluyen material para empezar y una clase de prueba gratuita.',
    },
    facilities: {
      eyebrow: 'Instalaciones',
      title: 'Hecho para <em>entrenar</em>',
      intro: 'Un espacio pensado solo para el boxeo: sin máquinas de sobra, con todo lo que necesitas para mejorar.',
    },
    testimonials: { eyebrow: 'Testimonios', title: 'Palabra de <em>alumno</em>' },
    contact: { eyebrow: 'Contacto', title: 'Ven a <em>conocernos</em>' },
  },

  /* --------------------------------------------------------------------------
   * CIFRAS (cuentan hacia arriba al aparecer en pantalla)
   *  - `value`: número final · `prefix`/`suffix`: texto alrededor (+, %, k…)
   * ------------------------------------------------------------------------ */
  stats: [
    { value: 15, suffix: '+', label: 'Años de experiencia de nuestro equipo' }, // [PROVISIONAL]
    { value: 28, label: 'Clases a la semana' },
    { value: 4, label: 'Entrenadores titulados' }, // [PROVISIONAL]
    { value: 200, suffix: '+', label: 'Alumnos entrenando' }, // [PROVISIONAL]
  ],

  /* --------------------------------------------------------------------------
   * GALERÍA (carrusel infinito)
   *  - Mezcla fotos verticales (800×1000) y horizontales (1200×800).
   * ------------------------------------------------------------------------ */
  gallery: [
    { file: 'galeria-ring.webp', width: 1200, height: 800, caption: 'Noche de velada', alt: 'Ring de boxeo iluminado en el centro de un pabellón lleno de público' },
    { file: 'galeria-vendaje.webp', width: 800, height: 1000, caption: 'Preparación física', alt: 'Manos vendadas subiendo por una cuerda en blanco y negro' },
    { file: 'galeria-sacos.webp', width: 800, height: 1000, caption: 'Zona de sacos', alt: 'Fila de sacos de boxeo colgados de vigas metálicas junto a una pared de ladrillo' },
    { file: 'galeria-manoplas.webp', width: 800, height: 1000, caption: 'Concentración', alt: 'Boxeadora concentrada frente al saco en un gimnasio en penumbra' },
    { file: 'galeria-clase.webp', width: 1200, height: 800, caption: 'Trabajo de saco', alt: 'Deportista golpeando el saco con la pierna en un gimnasio oscuro' },
    { file: 'galeria-infantil.webp', width: 800, height: 1000, caption: 'Disciplina', alt: 'Boxeador en guardia con guantes blancos bajo luz roja y azul' },
    { file: 'galeria-guantes.webp', width: 1200, height: 800, caption: 'Material', alt: 'Guantes de boxeo negros sobre la lona' },
    { file: 'galeria-sparring.webp', width: 800, height: 1000, caption: 'Sparring', alt: 'Boxeador amateur con casco rojo lanzando un golpe durante un combate' },
  ],

  /* --------------------------------------------------------------------------
   * CLASES (tarjetas grandes con foto)
   *  - `icon`: mismos nombres que en horarios.
   * ------------------------------------------------------------------------ */
  classes: [
    {
      title: 'Clase dirigida',
      icon: 'glove',
      meta: 'Todos los niveles · 60 min',
      text: 'Técnica, combinaciones, saco y trabajo físico guiados por un entrenador. La forma más completa de aprender a boxear.',
      image: { file: 'clase-dirigida.webp', width: 900, height: 1125, alt: 'Alumnas sonrientes con guantes durante una clase dirigida de boxeo' },
    },
    {
      title: 'Clase libre',
      icon: 'bag',
      meta: 'Socios · 60 min',
      text: 'Usa el ring, los sacos y el material a tu ritmo, con un entrenador en sala para corregirte cuando lo necesites.',
      image: { file: 'clase-libre.webp', width: 900, height: 1125, alt: 'Boxeador entrenando en solitario frente al saco' },
    },
    {
      title: 'Boxeo infantil',
      icon: 'kids',
      meta: 'De 6 a 14 años · L · X · V',
      text: 'Coordinación, confianza y respeto a través del boxeo. Sin contacto, en grupos reducidos y con monitores especializados.',
      image: { file: 'clase-infantil.webp', width: 900, height: 1125, alt: 'Niños con guantes de boxeo atendiendo a su entrenador durante una clase infantil' },
    },
    {
      title: 'Entrenamiento personal',
      icon: 'person',
      meta: 'Individual o en pareja · Con cita',
      text: 'Un plan a tu medida: preparación para competir, pérdida de peso o técnica desde cero, uno a uno con tu entrenador.',
      image: { file: 'clase-personal.webp', width: 900, height: 1125, alt: 'Entrenador con manoplas trabajando golpes con un alumno' },
    },
  ],

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
   * INSTALACIONES (bloques numerados 01, 02, 03… alternando imagen/texto)
   *  - `features` (opcional): lista corta de detalles.
   * ------------------------------------------------------------------------ */
  facilities: [
    {
      title: 'Ring profesional',
      text: 'Ring de competición de 5 × 5 metros para técnica, trabajo de pies y sparring controlado.',
      features: ['Lona antideslizante', 'Iluminación de competición'], // [PROVISIONAL]
      image: { file: 'instalacion-ring.webp', width: 1400, height: 1000, alt: 'Guantes de boxeo negros sobre la lona junto a las cuerdas del ring' },
    },
    {
      title: 'Zona de sacos',
      text: 'Sacos pesados, peras de velocidad y de doble anclaje para trabajar potencia, ritmo y precisión.',
      features: ['12 sacos', 'Peras y sacos de reflejos'], // [PROVISIONAL]
      image: { file: 'instalacion-sacos.webp', width: 1400, height: 1000, alt: 'Sala con peras de velocidad colgadas, espejo de pared y ventanales' },
    },
    {
      title: 'Preparación física y vestuarios',
      text: 'Área funcional para fuerza y acondicionamiento, y vestuarios con duchas y taquillas.',
      features: ['Comba, balones y kettlebells', 'Duchas y taquillas'], // [PROVISIONAL]
      image: { file: 'instalacion-fisico.webp', width: 1400, height: 1000, alt: 'Nave diáfana con bancos, racks y material de preparación física' },
    },
  ],

  /* --------------------------------------------------------------------------
   * TESTIMONIOS — [PROVISIONAL] reseñas de ejemplo: sustitúyelas por reseñas
   * reales (p. ej. de Google) antes de publicar.
   *  - `rating`: de 1 a 5
   * ------------------------------------------------------------------------ */
  testimonials: [
    { name: 'Laura M.', detail: 'Alumna desde 2025', rating: 5, text: 'Empecé sin haber tocado nunca unos guantes y desde el primer día me sentí parte del club. Los entrenadores corrigen cada detalle.' },
    { name: 'Javier R.', detail: 'Clase dirigida', rating: 5, text: 'Las clases son duras pero muy bien planteadas. En tres meses he mejorado la técnica y el fondo físico como no lo había hecho en años de gimnasio.' },
    { name: 'Marta y Hugo', detail: 'Padres de alumno', rating: 5, text: 'Nuestro hijo va a boxeo infantil y ha ganado confianza y disciplina. Ambiente sano, respeto y mucha paciencia con los peques.' },
    { name: 'Andrés P.', detail: 'Entrenamiento personal', rating: 5, text: 'Me preparé mi primer combate amateur con ellos. Plan claro, seguimiento constante y un trato excelente.' },
    { name: 'Sara G.', detail: 'Clase libre', rating: 4, text: 'Instalaciones cuidadas y siempre hay alguien en sala para echarte una mano. Ideal para entrenar a tu ritmo.' },
  ],

  /* --------------------------------------------------------------------------
   * CTA FINAL (pantalla completa)
   * ------------------------------------------------------------------------ */
  finalCta: {
    ribbon: 'Primera clase gratis',
    title: 'Sube al ring',
    text: 'Reserva tu clase de prueba por WhatsApp. Trae ropa cómoda; los guantes los ponemos nosotros.',
    button: 'Reservar mi clase gratis',
    image: { file: 'cta-ring.webp', width: 1920, height: 1080, alt: 'Boxeador caminando hacia el ring entre el público y los focos' },
  },

  /* --------------------------------------------------------------------------
   * ENLACES LEGALES (páginas en la raíz del proyecto)
   * ------------------------------------------------------------------------ */
  legal: [
    { label: 'Aviso legal', href: '/aviso-legal.html' },
    { label: 'Privacidad', href: '/privacidad.html' },
    { label: 'Cookies', href: '/cookies.html' },
  ],

  /* --------------------------------------------------------------------------
   * DATOS DEL TITULAR (páginas legales) — [PROVISIONAL]
   * ------------------------------------------------------------------------ */
  owner: {
    legalName: '[RAZÓN SOCIAL O NOMBRE DEL TITULAR]',
    taxId: '[NIF/CIF]',
    registry: '[Datos registrales, si aplica]',
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
