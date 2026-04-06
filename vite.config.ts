import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    tanstackRouter({
      routesDirectory: './routes',
      generatedRouteTree: './routeTree.gen.ts',
      routeFileIgnorePattern: '/features/',
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    // Folio pages will use .lazy.tsx route files (TanStack Router) for proper
    // code splitting. Until then, raise the warning limit for the template bundle.
    chunkSizeWarningLimit: 2500,
  },
})
