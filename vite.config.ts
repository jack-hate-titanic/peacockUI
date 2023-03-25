/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-03-16 22:39:16
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-03-22 21:17:53
 * @FilePath: /my-components/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";
import Unocss from "./config/unocss";

const resolvePath = (str: string) => path.resolve(__dirname, str);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    // 添加UnoCSS插件
    Unocss(),
  ],
  build: {
    outDir: "dist",
    lib: {
      entry: resolvePath("packages/index.tsx"),
      name: "MyLib",
      fileName: "my-lib",
      // 打包格式
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "react",
        },
      },
    },
  },
});
