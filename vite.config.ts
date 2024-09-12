/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
        app: '/src/app',
        entities: '/src/entities',
        features: '/src/features',
        pages: '/src/pages',
        shared: '/src/shared',
        widgets: '/src/widgets',
        process: 'process/browser'
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      }
    },
  },
})