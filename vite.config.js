// import 'dotenv/config'
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
  base:'/test_webpack/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // build: {
  //   rollupOptions: {
  //     external: ['@ckeditor/ckeditor5-vue'],
  //     output: {
  //       chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
  //       entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
  //       assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
  //     },
  //       globals: {
  //         '@ckeditor/ckeditor5-vue': 'CKEditor'
  //       }
  //   }
  // }
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
        entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
        assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等

        manualChunks(id) {
          if (id.includes("node_modules")) {
            // 让每个插件都打包成独立的文件
            return id .toString() .split("node_modules/")[1] .split("/")[0] .toString(); 
          }
        }
      }
    }
  }
})
