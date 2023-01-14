---
title: Webpack编译移除控制台输出
description: 出于安全渗透和代码审计需要，生产环境往往需要移除控制台console系列函数的输出，逐一人肉删除显然不是好办法……
time: 2021-12-14
categories: [vue]
tags: [Vue.js, Webpack]
---

# Webpack编译移除控制台输出

前端程序员在开发的时候经常会使用`console.log`来调试。
然而，出于安全渗透和代码审计需要，生产环境往往需要移除控制台（`console`系列函数）输出。
一个个去删除难免漏网之鱼，而且有时候开发环境仍需要用到。
此时使用 [terser-webpack-plugin] 不失为一个好办法。

本文以 [Vue CLI] 为例来实现，当前 [Vue CLI] 对应适配的 [terser-webpack-plugin] 版本为：`4.2.3`。

[terser-webpack-plugin]: https://webpack.js.org/plugins/terser-webpack-plugin/
[Vue CLI]: https://cli.vuejs.org/zh/

## 安装

 ```shell
 yarn add terser-webpack-plugin@4.2.3
 ```

 ## 配置

 ```js
 // vue.config.js
 const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  configureWebpack: {
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
              drop_console: true,
              drop_debugger: false,
              // pure_funcs: ['console.log'], // 移除console
            }
          }
        })
      ]
    }
  }
}
 ```

## 编译

```shell
yarn build
```

至此，`console`系列函数已不会在编译后的代码里从控制台输出了。

> 方跃明
> 2021-12-14
