/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-04-05 18:18:45
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-04-16 17:35:10
 * @FilePath: /peacock/packages/peacockui/packages/Loading/components/Loading/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import loadingImage from '../public/loading.gif';
import './index.local.less';

export interface LoadingProps {
  content: string | undefined; // 提示中的文字内容
}
class Loading {
  loadingRoot: Root | null; // root，用于挂载loadingDom
  isExistNode: boolean; // 是否已经挂载
  timer: any; // 定时器
  loadingWrap: HTMLElement | undefined; // loadingDom
  constructor() {
    this.loadingRoot = null;
    this.createLoadingContainer();
    this.isExistNode = false;
  }

  // 创建loading容器
  createLoadingContainer() {
    // 如果发现有loadingContainer则不继续加载
    if (document.querySelector('.loadingWrap')) {
      return;
    }
    this.loadingWrap = document.createElement('div');
    // 添加到body上面
    document.body.appendChild(this.loadingWrap);
    this.loadingRoot = createRoot(this.loadingWrap);
  }

  private renderLoadingDom = (visible: boolean, options?: LoadingProps) => {
    if (!this.isExistNode && visible) {
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
      this.isExistNode = true;
    }
    // 首先判断dom是否存在
    if (this.loadingWrap) {
      if (visible) {
        this.loadingWrap.className = 'loadingWrap';
      } else {
        this.loadingWrap.className = 'loadingWrap hide';
      }
    }
  };

  show(options?: LoadingProps) {
    this.timer && clearTimeout(this.timer);
    this.timer = setTimeout(() => this.renderLoadingDom(true, options), 300);
  }

  hide() {
    this.timer && clearTimeout(this.timer);
    this.renderLoadingDom(false);
  }
}

export default new Loading();
