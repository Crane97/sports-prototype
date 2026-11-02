/**
 * Punto de entrada JS. Solo interacción: el contenido ya llega como HTML
 * estático generado en build (ver vite.config.js).
 */
import '../styles/main.css';
import { initHeader } from './ui/header.js';
import { initReveal } from './ui/reveal.js';
import { initCounters } from './ui/counters.js';
import { initMarquee } from './ui/marquee.js';
import { initCarousel } from './ui/carousel.js';
import { initMap } from './ui/map.js';

initHeader();
initReveal();
initCounters();
initMarquee();
initCarousel();
initMap();
