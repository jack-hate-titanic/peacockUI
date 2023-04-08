/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-04-05 18:18:45
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-04-06 23:16:11
 * @FilePath: /peacock/packages/peacockui/packages/Loading/components/Loading/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { debounce } from '../utils/utils';
import loadingImage from '../public/loading.gif';
import './index.local.less';

export interface LoadingProps {
  content: string | undefined; // 提示中的文字内容
}

class Loading {
  content: string | undefined;
  loadingRoot: Root | null;
  constructor() {
    this.loadingRoot = null;
    this.createLoadingContainer();
  }

  // 创建loading容器
  createLoadingContainer() {
    // 如果发现有loadingContainer则不继续加载
    if (document.querySelector('.loadingContainer')) {
      return;
    }
    const loadingContainer = document.createElement('div');
    // 添加到body上面
    document.body.appendChild(loadingContainer);
    this.loadingRoot = createRoot(loadingContainer);
  }

  // 添加内容部分
  showDelay = debounce((options) => {
    // 要有mask和content显示
    const maskDom = (
      <div className="loadingContainer">
        <div className="mask"></div>
        <div className="loadingContent">
          <img src={loadingImage} className="loadingImg" />
          <div className="content">{options?.content}</div>
        </div>
      </div>
    );
    this.loadingRoot?.render(maskDom);
  }, 300);

  show(options?: LoadingProps) {
    this.showDelay(null, options);
  }

  hide() {
    this.loadingRoot?.unmount();
  }
}

export default new Loading();
