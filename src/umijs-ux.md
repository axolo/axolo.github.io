---
title: UmiJS 之我见
description: 到目前为止，UmiJS 还不算严谨成熟的框架，像小孩捏的泥人，随意松散，慎用。
time: 2020-02-23
category: 前端
tags: [React]
---

# UmiJS之我见

> 方跃明 2020-02-23

到目前为止，UmiJS还不算严谨成熟的框架，像小孩捏的泥人，随意松散，慎用。

<https://github.com/umijs/umi/issues/3989>

- 仅简单整合了Redux、Router、Saga，未系统化为有机体
- 配置未考虑各种场景，没有统一接口和方法（不仅仅是配置）
- 将原本赏心悦目得Webpack配置拆得七零八落，何苦来哉
- 未提供框架必要的参数（如：app、routes）存取方法，大面积污染全局window变量
- 未显式引入插件和中间件机制，需自行实现，相关文件都扔src/utils下，plugins目录居然是系统保留
- 每级路由都需要加入显示加入404，相当丑陋
- Layout和Page在路由里同级均视为组件，导致路由设置层级过深，需各种判断
- 文件、常量、变量规范很随意，大小写混淆，且互相不对应（model/setting -> state.settings）
- 使用了不恰当的代码检查配置，且提交时自动格式化代码，极不人性
