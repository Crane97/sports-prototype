# Club de Boxeo Turia — web one-page

Web estática (HTML + CSS + JS vanilla) construida con Vite. Todo el contenido en español.

## Arrancar en local

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # genera /dist
npm run preview   # sirve /dist en http://localhost:4173
```

## Editar contenido

Todo el contenido editable está en **`src/config/site.config.js`** (marca, contacto, horarios…).
En el build se convierte en HTML estático (ver el plugin en `vite.config.js`).

- **Horarios:** `site.schedule.blocks` → añade filas `{ start, end, name, icon, note? }`.
- **Imágenes:** deja los `.webp` en `public/images/` con el nombre indicado en el config.
  Si falta alguno, la web muestra un placeholder oscuro con el nombre esperado.

## Estructura

```
src/config/      → datos editables (único archivo a tocar)
src/templates/   → HTML de cada sección (se ejecuta en build)
src/styles/      → tokens.css (variables), base, componentes y una hoja por sección
src/js/          → interacción: header, menú móvil, animaciones
public/          → favicon, robots.txt, imágenes
```

> Estado: header, hero y horarios listos. Resto de secciones y despliegue: en curso.
