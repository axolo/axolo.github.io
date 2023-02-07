---
title: frp 内网穿透
description: 内网穿透利器，比如将内网的开发机作为 frpc 实现实时更新的演示。
time: 2020-06-18
category: 运维
tags: [Linux, CentOS, 内网穿透]
---

# frp 内网穿透

> 方跃明 2020-06-18

内网穿透利器，官网：<https://gofrp.org/>

## frps

frp服务端

```shell
frps -c frps.ini
```

### 配置

```ini
[common]
bind_port = 7000
dashboard_port = 7500
vhost_http_port = 8080
token = frps-token
subdomain_host = your.domain
# dashboard 用户名密码，默认都为 admin
dashboard_user = admin
dashboard_pwd = admin
```

### 端口

frps所在系统的防火墙需放行以下端口

| 端口 |       说明       |
| ---: | ---------------- |
| 7000 | frps server      |
| 7500 | frps dashboard   |
| 8080 | frps vhost http  |
|    * | frpc remote port |

```shell
## 防火墙放行端口
firewall-cmd --zone=public --add-port=7000/tcp --permanent  # success
firewall-cmd --zone=public --add-port=3306/tcp --permanent  # success
firewall-cmd --reload
```


### 服务

```ini
[Unit]
Description=Frp Server Service
After=network.target

[Service]
Type=simple
User=nobody
Restart=on-failure
RestartSec=5s
ExecStart=/etc/frp/frps -c /etc/frp/frps.ini

[Install]
WantedBy=multi-user.target
```

```shell
# 创建软链接，设置为自动启动，并启动frpc
ln -s /etc/frp/systemd/frps.service /etc/systemd/system/frps.service
systemctl enable frps
systemctl start frps
```

## frpc

frp客户端

```shell
frpc -c frpc.ini
```

### 配置

通常，除了http外，需在frps所在系统的防火墙和路由器放行客户端配置的端口

**注意：** 客户端无需放行端口，这就是“内网穿透”

```ini
[common]
server_addr = frps-server
server_port = 7000
token = frps-token

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

[dev]
type = http
subdomain = dev
local_port = 80

[egg]
type = tcp
local_ip = 127.0.0.1
local_port = 7001
remote_port = 7001
```

### 服务

类似frps