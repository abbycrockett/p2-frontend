// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import dns from 'dns'
import path from 'path'

dns.setDefaultResultOrder('verbatim')

export default () => {
  // Adjusting the base URL according to the deployment path
  const baseURL = process.env.NODE_ENV === 'development' ? '/' : '/2024/project2/t5/';

  return defineConfig({
    plugins: [vue(), vuetify({ autoImport: true })],

    server: {
      host: 'localhost',
      port: 8081,
    },

    // Define base path for production
    base: baseURL,

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // Ensure `@` points to 'src' directory
      },
    },

    build: {
      // Ensure the output paths and filenames are handled correctly.
      outDir: 'dist',
      assetsDir: '',
      rollupOptions: {
        output: {
          // Make sure the paths are relative
          entryFileNames: 'js/[name].js',
          chunkFileNames: 'js/[name].js',
          assetFileNames: 'assets/[name].[ext]',
        },
        input: path.resolve(__dirname, 'index.html'), // Ensure Vite knows the entry point
      },
    },
  })
}
