---
title: whistle简明教程
description: 基于Node实现的跨平台web调试代理工具，主要用于查看、修改HTTP、HTTPS、Websocket的请求、响应，也可以作为HTTP代理服务器使用。
time: 2023-01-12
categories: web
tags: [WEB]
---

# whistle简明教程

基于Node实现的跨平台web调试代理工具，类似的工具有Windows平台上的Fiddler。
主要用于查看、修改HTTP、HTTPS、Websocket的请求、响应，也可以作为HTTP代理服务器使用。
详细教程请参阅：[whistle官方教程]

## 安装和启动

whistle支持v0.10.0以上版本的Node，为获取更好的性能，推荐安装最新版本的Node。

```shell
npm install -g whistle  # 安装
w2 start                # 启动
```

> 方跃明
> 2023-01-12

[whistle官方教程]: https://wproxy.org/whistle/