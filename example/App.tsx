/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-03-16 23:03:35
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-03-25 17:29:42
 * @FilePath: /my-components/example/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { Button } from '../dist/peacock-ui' // 从打包的库里面引入ui组件

function App() {
  return (
    <div className="App">
      <section>
        <Button color="green">Click</Button>
        <Button color="yellow">Click</Button>
        <Button color="red">Click</Button>
        <Button color="blue">Click</Button>
      </section>
    </div>
  )
}

export default App
