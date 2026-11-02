/**
 * Punto de entrada JS. Solo interacción: el contenido ya llega como HTML
 * estático generado en build (ver vite.config.js).
 */
import '../styles/main.css';
import { initHeader } from './ui/header.js';
import { initReveal } from './ui/reveal.js';

initHeader();
initReveal();
