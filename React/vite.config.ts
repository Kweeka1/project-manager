import ***REMOVED*** defineConfig ***REMOVED*** from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(***REMOVED***
  plugins: [react()],
  //base: '/dist/',
  build: ***REMOVED***
    outDir: '../mvc/wwwroot/dist',
    emptyOutDir: true,
    manifest: false,
    rollupOptions: ***REMOVED***
      input: ***REMOVED***
        main: './src/main.tsx',
  ***REMOVED***
***REMOVED***
***REMOVED***
  server: ***REMOVED***
    hmr: ***REMOVED***
      protocol: 'ws'
***REMOVED***
***REMOVED***
***REMOVED***)
