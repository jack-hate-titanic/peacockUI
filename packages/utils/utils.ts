/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-04-05 21:13:22
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-04-05 21:21:10
 * @FilePath: /peacock/packages/peacockui/packages/utils/utils.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function debounce(
  fn: (...params: unknown[]) => unknown,
  delay: number
): (...args: unknown[]) => void {
  let timer: number;
  return function (context, ...args) {
    clearTimeout(timer);
    timer = window.setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}
