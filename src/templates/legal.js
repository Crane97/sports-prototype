/**
 * Piezas comunes de las páginas legales (aviso legal, privacidad, cookies).
 */
import { esc } from './helpers.js';
import { logo } from './logo.js';

export const renderLegalHeader = (site) => `
<header class="site-header is-solid legal-header">
  <div class="container site-header__inner">
    ${logo(site.brand, '/')}
    <a class="btn btn--ghost btn--sm" href="/">Volver al inicio</a>
  </div>
</header>`;

export const renderLegalFooter = (site) => `
<footer class="legal-footer">
  <div class="container">
    <nav aria-label="Legal">
      <ul>${site.legal.map((l) => `<li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`).join('')}</ul>
    </nav>
    <p>© ${new Date().getFullYear()} ${esc(site.brand.name)}</p>
  </div>
</footer>`;

export const renderLegalHead = (site) => `
    <meta name="theme-color" content="${esc(site.seo.themeColor)}">
    <meta name="color-scheme" content="dark">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">`;
