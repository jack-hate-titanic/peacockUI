/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-03-16 23:03:35
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-04-08 20:18:43
 * @FilePath: /my-components/example/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from 'react';
import Button from '../dist/Button/index'; // 从打包的库里面引入ui组件
import Loading from '../dist/Loading/index';

function App() {
  useEffect(() => {
    Loading.show();
    Loading.show();
    Loading.show();
  }, []);

  return (
    <div className="App">
      <section>
        <Button color="green">Click</Button>
        <Button color="yellow">Click</Button>
        <Button color="red">Click</Button>
        <Button color="blue">Click</Button>
      </section>
    </div>
  );
}

export default App;
