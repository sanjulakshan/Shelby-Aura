import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2019',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('framer-motion')) return 'motion';
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) return 'vendor';
        },
      },
    },
  },
});
