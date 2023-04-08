/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-03-16 22:53:12
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-03-25 17:25:30
 * @FilePath: /my-components/packages/Button/Button.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import 'uno.css';

export type ButtonProps = {
  className?: string;
  color: string;
};

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ ...props }) => {
  return (
    <button
      className={classNames(
        `
    py-2 
    px-4 
    font-semibold 
    rounded-lg 
    shadow-md 
    text-white 
    bg-${props.color}-500 
    hover:bg-${props.color}-700 
    border-none 
    cursor-pointer 
    m-1
    `,
        props.className
      )}
      {...props}
    />
  );
};

export default Button;
