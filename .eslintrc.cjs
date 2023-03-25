/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-03-25 09:55:40
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-03-25 11:08:28
 * @FilePath: /peacockUI/.eslintrc.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    },
    "settings": {
        "react": {
            "version": "detect" // React version. "detect" automatically picks the version you have installed.
        }
    }
}
