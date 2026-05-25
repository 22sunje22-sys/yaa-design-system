import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base нужен для GitHub Pages (репо-сабпуть). Переопредели если деплоишь в корень.
export default defineConfig({
  plugins: [react()],
  base: process.env.GHP_BASE ?? '/',
});
