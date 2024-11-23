import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    build: {
      minify: 'terser', // Usa Terser para una minificación avanzada
      terserOptions: {
        compress: {
          drop_console: true, // Elimina console.log para ahorrar espacio
          drop_debugger: true, // Elimina debugger
          passes: 2, // Comprime el código dos veces para obtener un bundle más pequeño
        },
        format: {
          comments: false, // Elimina comentarios en el código generado
        },
      },
    },
  },
  build: {
    minify: true, // Minifica los archivos generados (HTML, CSS, y JS)
  },
});
