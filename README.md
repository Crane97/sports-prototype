# Club de Boxeo Turia — web one-page

Web estática para un gimnasio de boxeo en Valencia (Est. 2025).
HTML + CSS + JavaScript vanilla con [Vite](https://vite.dev). Sin frameworks, sin cookies propias, sin peticiones a terceros al cargar.

- **Lighthouse (local):** 100 en Rendimiento, Accesibilidad, Buenas prácticas y SEO.
- **Contenido:** generado en el *build* a partir de un único archivo de configuración → HTML estático e indexable.
- **Salida:** carpeta `/dist`, lista para Cloudflare Pages, Vercel o cualquier hosting estático.

---

## 1. Arrancar en local

Requisitos: **Node.js 18 o superior** (recomendado 20/22).

```bash
npm install        # instala Vite y las fuentes (solo la primera vez)
npm run dev        # servidor de desarrollo → http://localhost:5173
```

Para probar la versión de producción:

```bash
npm run build      # genera /dist
npm run preview    # sirve /dist → http://localhost:4173
```

> Si cambias `src/config/site.config.js` con `npm run dev` en marcha, Vite reinicia el servidor solo. Si no ves el cambio, recarga la página.

---

## 2. Editar el contenido

**Todo lo editable está en `src/config/site.config.js`:**

| Clave | Qué controla |
|---|---|
| `brand` | Nombre, año de fundación, ciudad |
| `seo` | Dominio, título, descripción (Google y redes sociales) |
| `contact` | Teléfono, WhatsApp, email, Instagram, dirección, coordenadas |
| `hero` | Titular, texto y botones de la portada |
| `headings` | Titulares de cada sección (`<em>…</em>` = palabra en rojo) |
| `stats` | Cifras animadas |
| `gallery` | Fotos del carrusel y sus pies |
| `classes` | Tarjetas de clases |
| `schedule` | **Horarios** (bloques Mañana / Tarde) |
| `facilities` | Instalaciones 01, 02, 03… |
| `testimonials` | Reseñas |
| `finalCta` | Bloque final "Sube al ring" |
| `openingHours` | Horario del footer y de Google (schema.org) |
| `legal`, `owner` | Enlaces y datos del titular para las páginas legales |

Busca **`[PROVISIONAL]`** en ese archivo: son datos de ejemplo que hay que sustituir antes de publicar (teléfono, dirección, dominio, reseñas…). Las páginas legales (`aviso-legal.html`, `privacidad.html`, `cookies.html`) son plantillas orientativas: complétalas y haz que las revise un profesional.

### Añadir una fila de horario

```js
{ start: '20:00', end: '21:00', name: 'Clase dirigida', icon: 'glove' },
```

Iconos disponibles: `glove` (guante), `bag` (saco), `kids` (niños), `wraps` (vendaje), `person` (personal). Campo opcional `note` para texto pequeño (p. ej. "Lunes, miércoles y viernes").

### Imágenes

Deja los archivos en **`public/images/`** con el nombre exacto que indica el config. Mientras falten, la web muestra un recuadro oscuro con el nombre y el tamaño esperados.

| Archivo | Tamaño recomendado |
|---|---|
| `hero.webp` | 1920×1280 |
| `galeria-*.webp` (8) | 1200×800 (horizontal) u 800×1000 (vertical) |
| `clase-*.webp` (4) | 900×1125 |
| `instalacion-*.webp` (3) | 1400×1000 |
| `cta-ring.webp` | 1920×1080 |

Consejos: exporta en **WebP calidad 75–80**; el hero no debería pasar de ~250 KB y el resto de ~150 KB. Herramienta gratuita: [squoosh.app](https://squoosh.app).
Para la imagen al compartir en redes, sustituye `public/og-image.jpg` (1200×630).

---

## 3. Desplegar con dominio propio

Antes de publicar:
1. Cambia `seo.url` en `src/config/site.config.js` por tu dominio final (p. ej. `https://www.tugimnasio.es`). Se usa en la URL canónica, Open Graph, `sitemap.xml` y `robots.txt`.
2. Sube el proyecto a un repositorio de GitHub (este ya lo está).

### Opción A — Cloudflare Pages (recomendado si el dominio está en Cloudflare)

1. Entra en **dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git** y elige el repositorio.
2. Configuración del build:
   - **Framework preset:** `Vite` (o *None*)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - Variable de entorno opcional: `NODE_VERSION = 22`
3. Pulsa **Save and Deploy**. Tendrás una URL `*.pages.dev`.
4. **Dominio propio:** en el proyecto → **Custom domains → Set up a custom domain** → escribe `www.tugimnasio.es` (y repite para `tugimnasio.es`).
   - Si el dominio ya usa los DNS de Cloudflare, los registros se crean solos.
   - Si no, Cloudflare te indicará un `CNAME` (`www` → `tu-proyecto.pages.dev`) para añadir en tu proveedor de dominio. Para el dominio raíz lo más sencillo es mover los DNS a Cloudflare (plan gratuito).
5. El certificado HTTPS se emite automáticamente (unos minutos). Las cabeceras de caché y seguridad ya están en `public/_headers`.

### Opción B — Vercel

1. Entra en **vercel.com → Add New → Project** e importa el repositorio.
2. Vercel detecta Vite; los ajustes ya están en `vercel.json` (`npm run build` → `dist`). Pulsa **Deploy**.
3. **Dominio propio:** proyecto → **Settings → Domains → Add** → `tugimnasio.es` y `www.tugimnasio.es`. Vercel te mostrará los registros que debes crear en tu proveedor de dominio, normalmente:
   - Dominio raíz: registro `A` → la IP que indique Vercel.
   - `www`: registro `CNAME` → el destino que indique Vercel (p. ej. `cname.vercel-dns.com`).
   Marca uno de los dos como principal y el otro redirigirá a él.
4. HTTPS automático en cuanto el DNS propague (de minutos a unas horas).

### Después de publicar

- **Google Search Console:** añade el dominio y envía `https://tudominio/sitemap.xml`.
- **Perfil de Empresa en Google:** crea o reclama la ficha del gimnasio con la misma dirección y teléfono que la web (es lo que más ayuda al SEO local). Pon el enlace a la web en la ficha.
- Comprueba la vista previa al compartir con [opengraph.xyz](https://www.opengraph.xyz) y los datos estructurados con la [prueba de resultados enriquecidos](https://search.google.com/test/rich-results).

Cada `git push` a la rama principal vuelve a desplegar la web automáticamente en ambas plataformas.

---

## 4. Estructura del proyecto

```
index.html               One-page: marcadores <!-- @seccion --> que rellena Vite
aviso-legal.html …       Páginas legales ({{dato}} se sustituye desde el config)
vite.config.js           Plugin de plantillas + robots.txt/sitemap.xml + build multipágina
vercel.json              Configuración y cabeceras para Vercel
public/
  _headers               Cabeceras para Cloudflare Pages
  favicon.svg, apple-touch-icon.png, og-image.jpg
  images/                Fotos (.webp)
src/
  config/site.config.js  ★ Contenido editable
  templates/             HTML de cada sección (se ejecuta en build, Node)
  styles/
    tokens.css           Variables: colores, tipografías, espaciados
    base.css             Reset, accesibilidad, textura, animaciones de entrada
    components.css       Botones, cinta roja, estrellas, cabeceras, placeholders
    sections/*.css       Una hoja por sección
  js/
    main.js              Punto de entrada
    ui/                  header, reveal, counters, marquee, carousel, map
```

### Decisiones técnicas

- **HTML generado en build:** el contenido no depende de JavaScript → carga instantánea, SEO completo y funciona con JS desactivado.
- **Fuentes alojadas en el propio dominio** (Bebas Neue + Inter vía Fontsource): sin Google Fonts → más rápido y sin problemas de RGPD.
- **Mapa con fachada:** Google Maps solo se carga al pulsar "Cargar mapa" (rendimiento + sin cookies de terceros sin consentimiento). Por eso no hace falta banner de cookies mientras no se añada analítica.
- **Accesibilidad:** contraste AA (rojo `#B3121B` solo en fondos/bandas; `--c-red-display` y `--c-red-text` para texto rojo), foco visible, menú móvil con gestión de foco, carrusel navegable con teclado, botón de pausa en la galería y soporte completo de `prefers-reduced-motion`.
