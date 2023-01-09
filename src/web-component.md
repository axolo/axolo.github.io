---
title: WEB前端编码变迁记
time: 2016-12-19
layout: post
categories: WEB
tags: [WEB]
---

# WEB前端编码变迁记

话说天下大势，分久必合，合久必分。 —— 《三国演义》

参禅之初，看山是山，看水是水；禅有悟时，看山不是山，看水不是水；禅中彻悟，看山仍然山，看水仍然是水。—— 行思

## 一、逐鹿中原

HTML、CSS、JS 无关联堆砌

> 特点

- 代码杂糅HTML、CSS、JS
- 无规范可循，缩进、引号一团糟，必要标签缺失是常态
- 各种硬编码，width、height、px满天飞
- HTML标签内置javascript、style随处可见
- 兼容性极差，不同系统、不同浏览器、不同终端展现结果不可预期
- 难以维护，甚至写代码的本人过一段时间后都搞不明白当初写的是什么
- 需求变更导致大量改编甚至重写

> 目录

```text
├── index.htm
├── po.html
├── css.css
├── img
│   ├── 订单20161219.jpg
│   ├── 工单截图.jpeg
│   └── logo.GIF
└── js
    └── jquery.js
```

> 代码

```html
<title>进度跟踪表</title>
<link rel="stylesheet" type="text/css" href="css/style.css" />
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/function.js"></script>
<body style="margin:0; padding:0; background-color:#FFFFFF; ">
<TABLE id='jdtrth' class='tablehkled' cellspacing='0' cellpadding='0' width='1094px' >
<tr align='center' class='jdtrth' >
<th style='width:40px;'>序号</th>
<th style='width:100px;' onclick='javascript:openpo();'>订单</th>
<th style='width:100px;'>工单</th>
<th style='width:200px;'>产品</th>
<th style='width:80px;'>要求交期</th>
<th style='width:60px;'>订单数量</th>
<th style='width:60px;'>入库数量</th>
<th style='width:60px;'>销货数量</th>
</tr></table>
```

## 二、三分天下

[《网站重构》](https://book.douban.com/subject/1230451/)倡导的结构、表现、行为分离

> 特点

- 目录结构清晰，HTML（结构）、CSS（表现）、JS（行为）各司其职
- 遵循某种编码规范，缩进、引号、标签高度统一
- JS文件引入，容易引起全局变量污染
- JS、CSS、HTML分离，耦合度高，修改某一文件可能引起关联文件功能失效
- 编码需同时查看编写多个文件，影响效率

> 目录

```text
├── index.html
├── css
│   └── css.css
├── js
│   ├── app.js
│   └── page.js
├── html
│   ├── blog.html
│   └── about.html
└── img
    ├── logo.png
    ├── favicon.ico
    └── apple-icon.png
```

> 代码

```html
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>你好，世界！</h1>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
```

## 三、分久必合

React、Vue.js的WEB组件化

> 特点

- 遵循编码规范的“HTML、CSS、JS”组合体，请注意引号
- 共同实现某一项特定功能、提供外界通信接口
- 可重复利用，模块化、组件化
- 请特别注意与“看山是山看水是水”的区别

> 目录结构（典型情况）

```text
├── index.html
├── src
│   ├── main.js
│   ├── App.vue
│   └── components
│       └── home.vue
├── dist
│   ├── build.js
│   └── assets
│       └── logo.png
└── node_modules
    ├── vue
    └── webpack
```

> 代码

```jsx
// React
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

```vue
// Vue.js
<template>
  <div id="home">
    <h3>Home</h3>
    <div>
      Here maybe a silder, but nothing ...
    </div>
    <div>
      Here maybe a news lists, but nothing ...
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style scoped>
</style>
```

> 方跃明
> 2016-12-19
