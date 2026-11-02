/**
 * Mapa de Google con "fachada": el iframe solo se carga cuando el usuario
 * pulsa "Cargar mapa". Así la página carga más rápido y no se instalan
 * cookies de Google sin consentimiento.
 */
export function initMap() {
  const map = document.querySelector('[data-map]');
  const button = map?.querySelector('[data-map-load]');
  if (!map || !button) return;

  button.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.src = map.dataset.src;
    iframe.title = 'Mapa con la ubicación del gimnasio';
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    iframe.allowFullscreen = true;
    map.querySelector('.map__facade').remove();
    map.append(iframe);
    iframe.focus();
  });
}
