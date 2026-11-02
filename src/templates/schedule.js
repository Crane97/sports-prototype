/**
 * HORARIOS estilo cartel: título enorme, cinta roja inclinada y bloques
 * MAÑANA / TARDE con filas (hora en bloque rojo + icono + clase).
 * Los datos vienen de site.schedule (src/config/site.config.js).
 */
import { esc, stars } from './helpers.js';
import { icon } from './icons.js';

const row = (r, i) => `
  <li class="slot" data-reveal style="--d:${i * 60}ms">
    <span class="slot__time">
      <time datetime="${esc(r.start)}">${esc(r.start)}</time><span aria-hidden="true">–</span><span class="visually-hidden"> a </span><time datetime="${esc(r.end)}">${esc(r.end)}</time>
    </span>
    <span class="slot__icon">${icon(r.icon)}</span>
    <span class="slot__name">
      ${esc(r.name)}
      ${r.note ? `<small class="slot__note">${esc(r.note)}</small>` : ''}
    </span>
  </li>`;

export function renderSchedule(site) {
  const { schedule } = site;
  const blocks = schedule.blocks
    .map(
      (block, b) => `
    <div class="schedule__block">
      <h3 class="schedule__title" id="horario-${b}">${esc(block.title)}</h3>
      <ul class="schedule__list" aria-labelledby="horario-${b}">
        ${block.rows.map(row).join('')}
      </ul>
    </div>`
    )
    .join('');

  return `
<section class="section schedule grain" id="horarios" aria-labelledby="schedule-title">
  <div class="container">
    <header class="schedule__head" data-reveal>
      ${stars(6)}
      <h2 class="display schedule__heading" id="schedule-title">Horarios</h2>
      <p class="ribbon"><span>${esc(schedule.days)}</span></p>
    </header>

    <div class="schedule__grid">${blocks}</div>

    ${schedule.footnote ? `<p class="schedule__footnote" data-reveal>${esc(schedule.footnote)}</p>` : ''}
  </div>
</section>`;
}
