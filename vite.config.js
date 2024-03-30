import { fileURLToPath, URL } from 'node:url'

// 打包優化視圖
import { visualizer } from 'rollup-plugin-visualizer'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer()
  ],
  base:'/test-webpack/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
