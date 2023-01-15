---
title: Jekyll 从入门到放弃
description: 各种不习惯，严重受虐，从入门到放弃只需一周。Hugo 和 Hexo 别笑了，你俩半斤八两，五十步笑百步。
time: 2022-12-15
category: 前端
tags: [WEB, 博客系统]
---

# Jekyll 从入门到放弃

各种不习惯，严重受虐，从入门到放弃只需一周。
Hugo 和 Hexo 别笑了，你俩半斤八两，五十步笑百步。

## 准备环境

[Jekyll] 基于 Ruby，需要搭建 Ruby 环境。

### Windows

- 下载：https://rubyinstaller.org/downloads/
- 安装：根据提示安装，若无 msys2 安装过程中请勾选

### macOS

macOS 一般自带 Ruby ，若没有则需要安装

```shell
brew install ruby
```

## 快速开始

```shell
gem install jekyll bundler
jekyll new my-awesome-site
cd my-awesome-site
bundle install
bundle exec jekyll serve
# => 打开浏览器 http://localhost:4000
```

## 模板引擎

模板引擎基于 [Liquid]

> 方跃明
> 2022-12-15

[Jekyll]: http://jekyllcn.com/
[Liquid]: https://github.com/Shopify/liquid
