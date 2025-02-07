import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Portfolio/",
  publicDir: "public", 
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
