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
import { renderHead } from './src/templates/head.js';
import { renderHeader } from './src/templates/header.js';
import { renderHero } from './src/templates/hero.js';
import { renderSchedule } from './src/templates/schedule.js';
import { renderStats } from './src/templates/stats.js';
import { renderGallery } from './src/templates/gallery.js';
import { renderClasses } from './src/templates/classes.js';

const sections = {
  head: renderHead,
  header: renderHeader,
  hero: renderHero,
  stats: renderStats,
  gallery: renderGallery,
  classes: renderClasses,
  schedule: renderSchedule,
};

function siteTemplates() {
  return {
    name: 'site-templates',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
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

export default defineConfig({
  plugins: [siteTemplates()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
    cssMinify: true,
  },
});
