---
title: whistle 简明教程
description: 基于 Node 实现的跨平台 WEB 调试代理工具，主要用于查看、修改 HTTP、HTTPS、Websocket 的请求、响应，也可以作为 HTTP 代理服务器使用。
time: 2023-01-12
categories: web
tags: [WEB, HTTP]
---

# whistle简明教程

基于 Node 实现的跨平台 WEB 调试代理工具，类似的工具有 Windows 平台上的 Fiddler。
主要用于查看、修改 HTTP、HTTPS、Websocket 的请求、响应，也可以作为 HTTP 代理服务器使用。
详细教程请参阅：[whistle官方教程]

## 安装和启动

whistle 支持 v0.10.0 以上版本的 Node，为获取更好的性能，推荐安装最新版本的 Node。

```shell
npm install -g whistle  # 安装
w2 start                # 启动
```

> 方跃明
> 2023-01-12

[whistle官方教程]: https://wproxy.org/whistle/