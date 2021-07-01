# VUX

[VUX](https://doc.vux.li/zh-CN/)是基于[WeUI](https://github.com/Tencent/weui)和[Vue](https://cn.vuejs.org/)(2.x)
开发的移动端UI组件库，主要服务于微信页面。建议用于移动端开发，比如手机端网站等，VUX目前不能用于开发微信小程序。
个人体验感受，VUX的组件和数据结构（比如SwiperItem）相对来说还不是十分成熟，样式也不够美丽（比如XHeader），文档也不够清晰。
总之，坑大水深，道路湿滑，务必谨慎驾驶。

> 项目初始化

```bash
yarn global add vue-cli # 安装vue命令行
vue init webpack vux    # 创建vux项目，可选安装vue-router（推荐）
cd vux                  # 进入项目目录
yarn add vux            # 加入vux模块
yarn add vux-loader     # 加入vux-loader模块，编译vux（必须）
yarn add less-loader    # 加入less-loader模块，支持less（必须）
yarn add yaml-loader    # 加入yaml-loader模块，支持YAML（可选）
yarn add fastclick      # 加入fastclick，降低移动端点击延迟（推荐）
yarn                    # 安装模块
yarn dev                # 运行，默认地址：http://localhost:8080
```

> build/webpack.base.conf.js

```js
const vuxLoader = require('vux-loader')
// 原来的 module.exports 代码赋值给变量 webpackConfig)
const webpackConfig = originalConfig
module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui']
})
```

> index.html

```html
<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
```

> src/router/index.js

```js
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
Vue.use(Router)
export default new Router({
  routes: [
    { path: '/',   name: 'Home',  component: Home  }
  ]
})
```

> src/App.vue

```vue
<template>
  <div id="app">
    <x-header style="position:fixed;width:100%;left:0;top:0;z-index:100"></x-header>
    <box style="margin-top:46px;padding-bottom:60px;background-color:gray;height:100%">
      <router-view/>
      <div v-for="i in 50" :key="i">{{i}}<br></div>
    </box>
    <tabbar style="position:fixed">
      <tabbar-item v-for="m in 4" :key="m">
        <span slot="label">Tab{{m}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import FastClick from 'fastclick'       // 移除移动端点击延迟
import { XHeader, Box, ViewBox, Tabbar, TabbarItem } from 'vux'
export default {
  name: 'App',
  components: { XHeader, Box, ViewBox, Tabbar, TabbarItem },
  mounted() {
    FastClick.attach(document.body)     // 加载在body
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';   // vux的reset样式
@import '~vux/src/styles/1px.less';     // 1px解决方案样式
@import '~vux/src/styles/close.less';   // 关闭图标样式
#app { }                                // 项目css样式
</style>
```

> src/components/Home.vue

```vue
<template>
  <div id="Home">
    <divider>{{text}}</divider>
    <box gap="10px 10px">
      <view-box>{{msg}}</view-box>
      <x-button type="primary" @click.native="click">Click me</x-button>
    </box>
  </div>
</template>

<script>
import { Box, ViewBox, Divider, XButton } from 'vux' // 引入vux组件
export default {
  name: 'Home',
  components: { Box, ViewBox, Divider, XButton },    // 声明vux组件
  data () {
    return {
      text: 'Hello VUX',
      msg: ''
    }
  },
  methods: {
    click(e) {
      this.msg = JSON.stringify(e)
    }
  }
}
</script>

<style scoped>
</style>
```