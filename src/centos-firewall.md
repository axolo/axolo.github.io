---
title: CentOS防火墙
description: CentOS使用防火墙系统firewalld。大多数服务需要开启防火墙端口才能被正确访问。
time: 2019-12-25
categories: Linux
tags: [CentOS, Linux]
---

# CentOS防火墙

CentOS使用防火墙系统firewalld，大多数服务需要开启防火墙端口才能被正确访问。

## 放行

```bash
# 开启普通端口
firewall-cmd --zone=public --add-port=80/tcp --permanent
# 开启NAT转发，比如Docker Proxy
firewall-cmd --zone=public --add-masquerade --permanent
# 重载防火墙使配置立即生效
firewall-cmd --reload
```

|       参数        |              解释               |
| ----------------- | ------------------------------- |
| --zone            | 作用域，public = 公共区域       |
| --add-port=80/tcp | 添加端口，格式为：端口/通讯协议 |
| --permanent       | 永久生效，没有此参数重启后失效  |

## 服务

```bash
systemctl start   firewalld   # 启动
systemctl stop    firewalld   # 停止
systemctl restart firewalld   # 重启
systemctl status  firewalld   # 状态
systemctl disable firewalld   # 禁用
systemctl enable  firewalld   # 自启动
```

## 命令

```bash
firewall-cmd --version                            # 查看版本
firewall-cmd --help                               # 查看帮助
firewall-cmd --state                              # 状态
firewall-cmd --reload                             # 更新防火墙规则
firewall-cmd --complete-reload                    # 更新防火墙规则（断开连接）
firewall-cmd --list-all                           # 列出所有规则
firewall-cmd --list-port                          # 列出所有放行端口
firewall-cmd --panic-on                           # 拒绝所有包
firewall-cmd --panic-off                          # 取消拒绝状态
firewall-cmd --query-panic                        # 查看是否拒绝
firewall-cmd --get-active-zones                   # 查看区域信息
firewall-cmd --set-default-zone=public            # 设置默认区域
firewall-cmd --get-zone-of-interface=eth0         # 查看指定接口所属区域
firewall-cmd --zone=dmz --list-ports              # 查看所有打开的端口
firewall-cmd --zone=public --add-interface=eth0   # 指定区域加入接口
firewall-cmd --zone=dmz --add-port=8080/tcp       # 加入一个端口到区域
firewall-cmd --zone=work --add-service=smtp       # 添加一个服务
firewall-cmd --zone=work --remove-service=smtp    # 移除一个服务
```

> 方跃明
> 2019-12-25
