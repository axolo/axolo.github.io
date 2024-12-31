---
title: Javascript 打包发布
description: 代码演示 Javascript 打包发布操作，包括cjs、mjs和vue。
time: 2024-12-31
category: 前端
tags: [JavaScript]
---

# Javascript 打包发布

发布不依赖框架和应用的组件或工具为独立包，可以通过`npm install`安装或`<script src>`引入。

> 发布到npm

编译测试无误后，**配置**请参考[package.json]，发布到`npm`的**命令**如下：

```shell
npm login                     # 登录，可能需要2FA
npm publish --access public   # 发布，name以@开头，则需public
```

> 从cdn引入

`npm`发布成功后，以下`cdn`将自动产生对应`npm`包和`版本`命名供`<script src>`的引入：

- [jsDelivr](https://www.jsdelivr.com/)
- [UNPKG](https://unpkg.com/)

> 名词解释

| 名称  |    规范     |   导入    |            适用场景            |
| :---: | :---------: | :-------: | ------------------------------ |
| `cjs` | `CommonJS`  | `require` | 浏览器传统引入、Node.js命令行  |
| `mjs` | `ESmodules` | `import`  | Vue、React工程的JavaScript依赖 |
| `vue` | `ESmodules` | `import`  | Vue组件                        |

## mjs + cjs

发布为支持`mjs`和`cjs`格式两种规范的依赖包，推荐使用[Vite]工具打包。

> 目录

```text
|-- dist                    # 编译产物
|   |-- index.js            #   mjs
|   `-- index.umd.cjs       #   cjs
|-- src                     # 源码
|   `-- index.js            #   输入
|-- vite.config.js          # Vite配置
|-- package.json            # 项目配置
`-- README.md               # 自述文件
```

> package.json

```json
{
  "name": "@my/pack",
  "version": "0.1.0",
  "type": "module",
  "main": "dist/index.js",
  "files": ["dist"],
  "scripts": {
    "build": "vite build"
  },
  "devDependencies": {
    "vite": "^6.0.6"
  }
}
```

> vite.config.js

```js
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: fileURLToPath(new URL('./src/index.js', import.meta.url)),
      name: 'MyPack',
      fileName: 'index'
    }
  }
})
```

> src/index.js

```js
export default (a, b) => a + b
```

## vue

发布为Vue组件，供Vue项目应用，推荐使用[Vite]工具打包。

> 目录

```text
|-- dist                    # 编译产物
|   |-- index.css           #   css
|   |-- index.js            #   mjs
|   `-- index.umd.cjs       #   cjs
|-- src                     # 源码
|   |-- index.js            #   输入
|   `-- components          #   组件
|       `-- my-pack.vue     #     需发布的组件
|-- vite.config.js          # Vite配置
|-- package.json            # 项目配置
`-- README.md               # 自述文件
```

> package.json

```json
{
  "name": "@my/pack",
  "version": "0.1.0",
  "type": "module",
  "main": "dist/index.js",
  "files": ["dist"],
  "scripts": {
    "build": "vite build"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.2.1",
    "sass": "^1.83.0",
    "sass-loader": "^16.0.4",
    "vite": "^6.0.6",
    "vite-plugin-lib-inject-css": "^2.1.1",
    "vue": "^3.5.13"
  }
}
```

> vite.config.js

```js
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig({
  plugins: [
    vue(),
    libInjectCss()
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: fileURLToPath(new URL('./src/index.js', import.meta.url)),
      name: 'MyPack',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue'], // 不打包vue依赖，宿主自带
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
```

> src/index.js

```js
import MyPack from './components/my-pack.vue'
export default MyPack
```

> src/components/my-pack.vue

```vue
<script>
export default {
  props: {
    modelValue: {
      type: String
    }
  }
}
</script>

<template>
  <div class="hello">Hello, {{ modelValue }}</div>
</template>

<style lang="scss" scoped>
.hello {
  color: red;
}
</style>
```

## js + vue

发布为支持`mjs`和`cjs`格式两种规范，并引入了`Vue`作为模板的依赖包，推荐使用[Vite]工具打包。

> 目录

```text
|-- dist                    # 编译产物
|   |-- index.css           #   css
|   |-- index.js            #   mjs
|   `-- index.umd.cjs       #   cjs
|-- src                     # 源码
|   |-- index.js            #   输入
|   `-- components          #   组件
|       `-- my-pack.vue     #     Vue模板
|-- vite.config.js          # Vite配置
|-- package.json            # 项目配置
`-- README.md               # 自述文件
```

> package.json

```json
{
  "name": "@my/pack",
  "version": "0.1.0",
  "type": "module",
  "main": "dist/index.js",
  "files": ["dist"],
  "scripts": {
    "build": "vite build"
  },
  "dependencies": {
    "vue": "^3.5.13"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.2.1",
    "sass": "^1.83.0",
    "sass-loader": "^16.0.4",
    "vite": "^6.0.6",
    "vite-plugin-lib-inject-css": "^2.1.1"
  }
}
```

> vite.config.js

```js
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig({
  define: {
    'process.env': {} // 若需环境判定，则请妥善处理
  },
  plugins: [
    vue(),
    libInjectCss()
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: fileURLToPath(new URL('./src/index.js', import.meta.url)),
      name: 'MyPack',
      fileName: 'index'
    }
  }
})
```

> src/index.js

```js
import { createApp } from 'vue'
import myPack from './components/mp-pack.vue'

class MyPack {
  constructor(config) {
    this.config = config
    // 生成元素
    const el = document.createElement('div')
    el.id = 'my-pack-' + Math.random().toString(36).slice(2)
    document.body.appendChild(el)
    // 挂载其上
    const app = createApp(myPack)
    app.mount(`#${el.id}`)
  }
}

export default MyPack
```

> src/components/my-pack.vue

```vue
<template>
  <div class="hello">Hello</div>
</template>

<style lang="scss" scoped>
.hello {
  color: red;
}
</style>
```

## cjs

仅发布为传统浏览器和`Node.js`的`cjs`包，推荐使用[Rollup]工具打包。

> 目录

```text
|-- dist                    # 编译产物
|   `-- index.js            #   cjs
|-- src                     # 源码
|   `-- index.js            #   输入
|-- rollup.config.js        # Rollup配置
|-- package.json            # 项目配置
`-- README.md               # 自述文件
```

> package.json

```json
{
  "name": "@my/pack",
  "version": "0.1.0",
  "main": "dist/index.js",
  "files": ["dist"],
  "scripts": {
    "build": "rollup -c"
  },
  "devDependencies": {
    "rollup": "^4.29.1",
    "@rollup/plugin-terser": "^0.4.4"
  }
}
```

> rollup.config.js

```js
const terser = require('@rollup/plugin-terser')

module.exports = {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    plugins: [terser()]
  }
}
```

> src/index.js

```js
module.exports = (a, b) => a + b
```

[Vite]: https://cn.vite.dev/
[Rollup]: https://cn.rollupjs.org/
[package.json]: https://nodejs.cn/npm/cli/v7/configuring-npm/package-json/
