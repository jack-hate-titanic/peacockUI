/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-03-22 21:33:57
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-03-26 19:08:22
 * @FilePath: /my-components/docs/.vitepress/config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  title: 'peacockUI',
  description: 'Just playing around.',
  themeConfig: {
    sidebar: [
      {
        text: '介绍',
        items: [
          {
            text: 'Features'
          }
        ]
      },
      {
        text: '通用',
        items: [
          {
            text: 'Button',
            link: '/components/button'
          }
        ]
      }
    ]
  }
}
