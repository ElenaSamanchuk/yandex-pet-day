import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/yandex-pet-day/' : '/',
  plugins: [tailwindcss()],
  server: {
    port: 5177,
    open: true,
  },
});
