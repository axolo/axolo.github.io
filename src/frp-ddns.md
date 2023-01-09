---
title: 家用宽带联机开发环境部署
time: 2020-05-18
layout: post
categories: Linux
tags: [Linux, CentOS, 内网穿透]
---

# 家用宽带联机开发环境部署

利用家庭宽带低成本、低功耗部署联机开发环境。
当然，若有阿里云等公网环境，路由服务器合一，略改即可支持。

```
                  +-----------+
                  | frpc      |
                  | developer |
                  +-----------+
                       |
                     ddns
                       |
+--------+        +--------+          +--------+
| dns    |        | frps   |          | web    |
| domain |<- ns ->| router |<- http ->| client |
+--------+        +--------+          +--------+
                       |
                     cname
                       |
                 +-----------+
                 | frpc      |
                 | server    |
                 +-----------+
```

## 条件

|   项目   |     推荐     |                         说明
| -------- | ------------ | ------------------------------------------------------|
| 家用宽带 | 电信宽带     | 要求ISP开通光猫桥接模式（或破解光猫）必须暴露公网IP   |
| 动态域名 | 花生壳       | 通过DDNS客户端动态绑定IP实现域名访问                  |
| 服务器   | 工控机       | x86服务器，建议使用低功耗被动散热低噪音迷你机         |
| 路由器   | OpenWRT      | 可选，内置或支持安装或刷机后可安装frp的家庭路由器     |
| 页面服务 | GitHub Pages | 可选，静态页面托管，直接支持80端口访问                |
| 开发机   | 个人电脑     | 可选，移动办公即时接入、随时随地为客户提供即时演示    |

## 思路

- frp将本地端口映射到远程服务器端口（请求转发到本地开发环境便于调试）
- Ngrok接管远程服务器端口普通端口转换为80、443等端口（微信开发需要）

## frps

```ini
[common]
bind_port = 7000
dashboard_port = 7500
dashboard_user = admin
dashboard_pwd = admin
vhost_http_port = 8080
token = your-token
subdomain_host = your.domain
```

## frpc server

服务器端配置，建议安装为服务

```ini
[common]
server_addr = frps-server-host
server_port = 7000
token = your-token

[ssh]
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = 22

[msyql]
type = tcp
local_ip = 127.0.0.1
local_port = 3306
remote_port = 3306

[api]
type = http
subdomain = api # http://api.your.domain:8080
local_port = 80
proxy_protocol_version = v2

[web]
type = http
subdomain = web # http://web.your.domain:8080
local_port = 80
proxy_protocol_version = v2
```

## frpc developer

开发机端配置，建议命令行运行

```ini
[common]
server_addr = frps-server-host
server_port = 7000
token = your-token

[dev-api]
type = http
local_ip = 127.0.0.1
local_port = 7001
custom_domains = api.ddns.domain # http://api.ddns.domain:8080
proxy_protocol_version = v2

[dev-web]
type = http
local_ip = 127.0.0.1
local_port = 3000
custom_domains = web.ddns.domain # http://web.ddns.domain:8080
proxy_protocol_version = v2
```

## 端口映射

在路由器上配置端口映射开放外网访问。

## 客户托管

### 开发版

客户域名解析添加`CNAME`到服务器端相应的域名，并使用`nginx`反向代理。

### 静态页

使用`Pages`服务，可支持`HTTPS`（涉及跨域谨慎使用）。

## Ngrok

[Ngrok](https://baike.baidu.com/item/ngrok/13986278) 释义

> 方跃明
> 2020-05-18
