import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'
  const base = isProduction ? '/Website/' : '/'
  
  return {
    plugins: [react()],
    base,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: true,
      emptyOutDir: true,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
        },
      },
      // Copy public directory to dist
      assetsInlineLimit: 0, // Ensures all assets are copied as files
      copyPublicDir: true, // Explicitly copy public directory
    },
    // Ensure public directory is properly served
    publicDir: 'public',
    server: {
      port: 3000,
    },
    define: {
      'import.meta.env.BASE_URL': JSON.stringify(base)
    }
  }
})