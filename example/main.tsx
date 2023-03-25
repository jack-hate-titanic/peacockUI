/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-03-16 23:02:05
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-03-25 20:55:00
 * @FilePath: /my-components/example/main.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../dist/index.css' // 此处引入css

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
