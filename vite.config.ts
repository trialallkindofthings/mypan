import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8000,
    open: false, //自动打开 
    base: "./ ", //生产环境路径
    proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      // 正则表达式写法
      '/api': {
        target: 'http://112.74.178.95/mypan', // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace('^/', '/')
      }
    }
  }
})
