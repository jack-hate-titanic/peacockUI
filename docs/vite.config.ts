/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-03-22 21:28:52
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-03-22 21:31:15
 * @FilePath: /my-components/docs/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "../config/unocss";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    // 添加JSX插件
    react(),
    Unocss(),
  ],
});