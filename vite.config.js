/**
 * Configuración de Vite.
 *
 * El plugin `siteTemplates` convierte src/config/site.config.js en HTML
 * estático: sustituye los marcadores <!-- @nombre --> de index.html por el
 * marcado de cada sección. Funciona igual en `npm run dev` y en `npm run build`,
 * así que el resultado en /dist es HTML plano, rápido e indexable.
 */
import { defineConfig } from 'vite';
import { site } from './src/config/site.config.js';
import { esc } from './src/templates/helpers.js';
import { renderHead } from './src/templates/head.js';
import { renderHeader } from './src/templates/header.js';
import { renderHero } from './src/templates/hero.js';
import { renderSchedule } from './src/templates/schedule.js';
import { renderStats } from './src/templates/stats.js';
import { renderGallery } from './src/templates/gallery.js';
import { renderClasses } from './src/templates/classes.js';
import { renderFacilities } from './src/templates/facilities.js';
import { renderTestimonials } from './src/templates/testimonials.js';
import { renderFinalCta } from './src/templates/final-cta.js';
import { renderFooter } from './src/templates/footer.js';
import { renderLegalHead, renderLegalHeader, renderLegalFooter } from './src/templates/legal.js';
import { resolve } from 'node:path';

const sections = {
  head: renderHead,
  header: renderHeader,
  hero: renderHero,
  stats: renderStats,
  gallery: renderGallery,
  classes: renderClasses,
  schedule: renderSchedule,
  facilities: renderFacilities,
  testimonials: renderTestimonials,
  finalCta: renderFinalCta,
  footer: renderFooter,
  legalHead: renderLegalHead,
  legalHeader: renderLegalHeader,
  legalFooter: renderLegalFooter,
};

function siteTemplates() {
  return {
    name: 'site-templates',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        // {{ruta.al.dato}} → valor de site.config.js (p. ej. {{contact.email}})
        html = html.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (m, path) => {
          const value = path.split('.').reduce((obj, key) => obj?.[key], site);
          return value == null ? m : esc(value);
        });
        return html.replace(/<!--\s*@(\w+)\s*-->/g, (match, key) => {
          if (!sections[key]) {
            console.warn(`[site-templates] Sección desconocida: ${key}`);
            return match;
          }
          return sections[key](site);
        });
      },
    },
  };
}

/**
 * Genera robots.txt y sitemap.xml en /dist usando el dominio de site.config.js.
 */
function seoFiles() {
  const pages = ['/', ...site.legal.map((l) => l.href)];
  const today = new Date().toISOString().slice(0, 10);
  return {
    name: 'seo-files',
    apply: 'build',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${site.seo.url}/sitemap.xml\n`,
      });
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((p) => `  <url><loc>${site.seo.url}${p}</loc><lastmod>${today}</lastmod><priority>${p === '/' ? '1.0' : '0.3'}</priority></url>`)
  .join('\n')}
</urlset>
`,
      });
    },
  };
}

export default defineConfig({
  plugins: [siteTemplates(), seoFiles()],
  build: {
    outDir: 'dist',
    // Varias páginas: la one-page y las páginas legales
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        avisoLegal: resolve(import.meta.dirname, 'aviso-legal.html'),
        privacidad: resolve(import.meta.dirname, 'privacidad.html'),
        cookies: resolve(import.meta.dirname, 'cookies.html'),
      },
    },
    assetsInlineLimit: 4096,
    cssMinify: true,
  },
});
