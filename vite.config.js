import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import PackageJSON from './package.json'

const buildDate = new Date().toISOString().split('T')[0];

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  define: {
    'import.meta.env.VITE_APP_VERSION': JSON.stringify(PackageJSON.version),
    'import.meta.env.VITE_APP_BUILD_DATE': JSON.stringify(buildDate),
  }
})
