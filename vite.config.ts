import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true,
    port: 5173,
    https: false, // ⛔ stäng av internt https
    allowedHosts: ['dev.styxnetwork.se'], // ⬅️ tillåt din domän
  },
});
