/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-03-16 22:39:16
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-03-25 17:21:36
 * @FilePath: /my-components/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import Unocss from './config/unocss'

const resolvePath = (str: string) => path.resolve(__dirname, str)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // 支持react
    // 添加UnoCSS插件
    Unocss()
  ],
  build: {
    outDir: 'dist', // 打包后的文件
    lib: {
      entry: resolvePath('packages/index.tsx'), // 配置库入口
      name: 'PeacockUI', // 库名称
      fileName: 'peacock-ui', // 文件名
      // 打包格式
      formats: ['es', 'umd', 'iife'] //打包的格式，主要是兼容es module和commonJs规范
    },
    rollupOptions: {
      external: ['react'], // 将react保留在bundle之外，不会将react导入到包中
      output: {
        globals: {
          react: 'react'
        }
      }
    },
    minify: 'terser', // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    cssCodeSplit: true
  }
})
