import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //base: '/dist/',
  build: {
    outDir: '../mvc/wwwroot/dist',
    emptyOutDir: true,
    manifest: false,
    rollupOptions: {
      input: {
        main: './src/main.tsx',
      }
    }
  },
  server: {
    hmr: {
      protocol: 'ws'
    }
  }
})
