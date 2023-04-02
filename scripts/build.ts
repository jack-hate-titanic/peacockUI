/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-03-29 22:28:17
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-03-30 22:21:29
 * @FilePath: /peacock/packages/peacockui/scripts/build.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'
import config from '../vite.config'
import { build, InlineConfig, defineConfig, UserConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const buildAll = async () => {
  // const inline: InlineConfig =
  //   viteConfig;

  // 全量打包
  await build(defineConfig(config as UserConfig) as InlineConfig)
  // await build(defineConfig({}))

  const srcDir = path.resolve(__dirname, '../packages/')
  fs.readdirSync(srcDir)
    .filter((name) => {
      // 只要目录不要文件，且里面包含index.ts
      const componentDir = path.resolve(srcDir, name)
      const isDir = fs.lstatSync(componentDir).isDirectory()
      return isDir && fs.readdirSync(componentDir).includes('index.tsx')
    })
    .forEach(async (name) => {
      const outDir = path.resolve(config.build.outDir, name)
      const custom = {
        lib: {
          entry: path.resolve(srcDir, name),
          name, // 导出模块名
          fileName: `index`,
          formats: [`es`, `umd`]
        },
        outDir
      }

      Object.assign(config.build, custom)
      await build(defineConfig(config as UserConfig) as InlineConfig)

      fs.outputFile(
        path.resolve(outDir, `package.json`),
        `{
          "name": "peacockui/${name}",
          "main": "index.umd.cjs",
          "module": "index.umd.cjs"
        }`,
        `utf-8`
      )
    })
}

buildAll()
