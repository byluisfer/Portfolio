import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import compression from 'vite-plugin-compression';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    plugins: [
      compression({
        algorithm: 'brotliCompress', // O 'gzip'
        ext: '.br',
      }),
    ],
  },
});